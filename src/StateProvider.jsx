import { batch, createMemo, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { DisjointSet } from "dsforest";
import { levels, orderLimits, mobCapLimits, objects, myHouses, beautyProps, networkDecor, networkWaru, aufhebenWaru } from "./data.js";

const StateContext = createContext();

export function StateProvider(props) {
    let summary;
    const baseLevel = levels[0];
    const myHouseRoot = 0;
    const [state, setState] = createStore({
        mode: "inspect",
        inspect: { root: myHouseRoot },
        decorate: {
            type: "building",
            name: objects.building.limits[baseLevel].min
        },
        config: {
            level: baseLevel,
            order: orderLimits[baseLevel].min,
            mobCap: mobCapLimits[baseLevel].min,
            useAufheben: false,
            useAutofill: false
        },
        grid: undefined,
        get baseProps() {
            const type = this.config.useAutofill ? "road" : "free";
            return {
                object: {
                    type,
                    name: "",
                    ...objects[type].data[""]
                },
                border: {
                    top: true,
                    right: true,
                    bottom: true,
                    left: true
                }
            };
        },
        get myHouseProps() {
            const name = myHouses[this.config.order];
            return {
                type: "building",
                name,
                ...objects.building.data[name]
            };
        },
        get networkProps() {
            const network = new DisjointSet();
            const roots = new Map();
            let totalBeauty = 0;
            
            this.grid.forEach((cell, index) => {
                const { object, position } = cell;
                switch (object.type) {
                    case "road":
                        network.makeSet(index);
                        position.boundary.forEach(idx => {
                            if (this.grid[idx].object.type === "road" || this.grid[idx].position.root === myHouseRoot) {
                                network.union(idx, index);
                            }
                        });
                        roots.set(index, {
                            connected: false
                        });
                        break;
                    case "decor":
                        if (position.root === index) {
                            roots.set(index, {
                                paths: 0,
                                decor: 0
                            });
                        }
                        break;
                    case "building":
                        if (position.root === myHouseRoot) {
                            network.makeSet(index);
                            network.union(myHouseRoot, index);
                        }
                        if (position.root === index) {
                            roots.set(index, {
                                paths: 0,
                                waru: 0,
                                banked: 0
                            });   
                        }
                        break;
                    default:
                        break;
                }
            });

            roots.forEach((props, root) => {
                const { object, position } = this.grid[root];
                if (object.type === "road") {
                    if (network.areConnected(myHouseRoot, root)) {
                        props.connected = true;
                    }
                } else {
                    const paths = position.boundary.reduce((count, index) => {
                        if (this.grid[index].object.type === "road" && network.areConnected(myHouseRoot, index)) {
                            return count + 1;
                        }
                        return count;
                    }, 0);
                    if (paths > 0) {
                        props.paths = paths;
                        if (object.type === "decor") {
                            props.decor = networkDecor(object.decor, paths);
                            totalBeauty += props.decor;
                        } else if (object.type === "building") {
                            props.waru = networkWaru(object.waru, paths);
                        }
                    }
                    totalBeauty += object.decor;
                }
            });

            const networkBanked = beautyProps(totalBeauty).banked;
            return Array.from(roots, ([root, props]) => {
                if (props.waru > 0) {
                    props.banked = networkBanked;
                }
                return { root, props };
            });
        },
        get summary() {
            return summary();
        }
    });

    const adjustedIndex = (oldIndex, oldOrder, newOrder) => {
        const oldRow = Math.floor(oldIndex / oldOrder);
        const oldCol = oldIndex % oldOrder;
        return oldRow * newOrder + oldCol;
    };
    const halfBoundary = (row, column, index, order) => {
        const boundary = [];
        if (row > 0 && column > 0) {
            boundary.push(index - order - 1);
        }
        if (row > 0) {
            boundary.push(index - order);
        }
        if (row > 0 && column < order - 1) {
            boundary.push(index - order + 1);
        }
        if (column > 0) {
            boundary.push(index - 1);
        }
        return boundary;
    }

    const stateSetters = {
        initGrid() {
            const newGrid = [];
            for (let r = 0; r < state.config.order; ++r) {
                for (let c = 0; c < state.config.order; ++c) {
                    const index = r * state.config.order + c;
                    newGrid.push({
                        ...state.baseProps,
                        position: {
                            row: r,
                            column: c,
                            index,
                            root: index,
                            interior: [index],
                            boundary: halfBoundary(r, c, index, state.config.order)
                        }
                    });
                }
            }
            setState("grid", newGrid);
        },
        onLevelChange(event) {
            const newLevel = Number(event.currentTarget.value);
            const oldOrder = state.config.order;
            const newOrder = orderLimits[newLevel].max;
            const oldMobCap = state.config.mobCap;
            const newMobCap = Math.min(Math.max(oldMobCap, mobCapLimits[newLevel].min), mobCapLimits[newLevel].max);
            batch(() => {
                if (state.decorate.type !== "road") {
                    setState("decorate", "name", objects[state.decorate.type].limits[newLevel].min);
                }
                setState("config", "level", newLevel);
                if (oldOrder !== newOrder) {
                    stateSetters.resizeGrid(oldOrder, newOrder);
                }
                if (oldMobCap !== newMobCap) {
                    setState("config", "mobCap", newMobCap);
                }
            });
        },
        onOrderChange(event) {
            batch(() => {
                stateSetters.resizeGrid(state.config.order, Number(event.currentTarget.value));
            });
        },
        resizeGrid(oldOrder, newOrder) {
            setState("config", "order", newOrder);
            const { row, column } = state.grid[state.inspect.root].position;
            setState("inspect", "root", (row >= newOrder || column >= newOrder) ? myHouseRoot : row * newOrder + column);
            setState("grid", state.grid[myHouseRoot].position.interior, "object", state.myHouseProps);
            const oldRoots = new Set();
            const newGrid = [];
            const minOrder = Math.min(oldOrder, newOrder);
            for (let r = 0; r < newOrder; ++r) {
                for (let c = 0; c < newOrder; ++c) {
                    if (r < oldOrder && c < oldOrder) {
                        const oldIndex = r * oldOrder + c;
                        const { root, interior, boundary } = state.grid[oldIndex].position;
                        if (oldRoots.has(root)) {
                            continue;
                        }
                        const { object, position } = state.grid[root];
                        if (position.row + object.order >= minOrder || position.column + object.order >= minOrder) {
                            interior.forEach(index => {
                                const oldCell = state.grid[index];
                                const { row, column } = oldCell.position;
                                if (row >= minOrder || column >= minOrder) {
                                    return;
                                }
                                const newIndex = adjustedIndex(index, oldOrder, newOrder);
                                newGrid[newIndex] = {
                                    ...state.baseProps,
                                    position: {
                                        ...oldCell.position,
                                        index: newIndex,
                                        root: newIndex,
                                        interior: [newIndex],
                                        boundary: halfBoundary(row, column, newIndex, newOrder)
                                    }
                                };
                            });
                        } else {
                            const newInterior = interior.map(index => adjustedIndex(index, oldOrder, newOrder));
                            const newBoundary = boundary.map(index => adjustedIndex(index, oldOrder, newOrder));
                            newInterior.forEach((index, i) => {
                                const oldCell = state.grid[interior[i]];
                                newGrid[index] = {
                                    ...oldCell,
                                    position: {
                                        ...oldCell.position,
                                        index,
                                        root: newInterior[0],
                                        interior: newInterior,
                                        boundary: newBoundary
                                    }
                                };
                            });
                        }
                        oldRoots.add(root);
                    } else {
                        const newIndex = r * newOrder + c;
                        newGrid[newIndex] = {
                            ...state.baseProps,
                            position: {
                                row: r,
                                column: c,
                                index: newIndex,
                                root: newIndex,
                                interior: [newIndex],
                                boundary: halfBoundary(r, c, newIndex, newOrder)
                            }
                        }
                    }
                }
            }
            setState("grid", newGrid);
            stateSetters.applyNetwork();
        },
        onMobCapChange(event) {
            setState("config", "mobCap", Number(event.currentTarget.value));
        },
        onAufhebenChange() {
            setState("config", "useAufheben", !state.config.useAufheben);
            stateSetters.applyNetwork();
        },
        onModeClick(data) {
            setState("mode", data.mode);
        },
        onDecorateTypeChange(event) {
            const newType = event.currentTarget.value;
            setState("decorate", {
                type: newType,
                name: objects[newType].limits[state.config.level].min
            });
        },
        onDecorateNameChange(event) {
            setState("decorate", "name", event.currentTarget.value);
        },
        onAutofillChange() {
            setState("config", "useAutofill", !state.config.useAutofill);
            const targetType = state.config.useAutofill ? "free" : "road";
            const { object } = state.baseProps;
            batch(() => {
                setState("grid", state.summary.roots[targetType], "object", object);
                stateSetters.applyNetwork();
            });
        },
        onGridClick({ cell }) {
            if (state.mode === "inspect") {
                setState("inspect", "root", cell.position.root);
            } else if (state.mode === "decorate") {
                const { type, name } = state.decorate;
                const objectData = objects[type].data[name];
                if (!objectData) { // no decors available at level 1
                    return;
                }
                const { units, limit } = objectData;
                if (units > 0 && state.summary.count.free < units) {
                    return;
                }
                if (limit > 0) {
                    const entry = state.summary.roots[type].find(entry => entry.name === name);
                    if (entry && entry.list.length + 1 > limit) {
                        return;
                    }
                }
                stateSetters.setObject(cell.position, {
                    type,
                    name,
                    ...objectData
                });
            }
        },
        setObject(currentPosition, objectProps) {
            const interiorLowerRow = currentPosition.row;
            const interiorLowerCol = currentPosition.column;
            const interiorUpperRow = interiorLowerRow + objectProps.order - 1;
            const interiorUpperCol = interiorLowerCol + objectProps.order - 1;
            if (interiorUpperRow >= state.config.order || interiorUpperCol >= state.config.order) {
                return;
            }
            const boundaryLowerRow = interiorLowerRow - 1;
            const boundaryLowerCol = interiorLowerCol - 1;
            const boundaryUpperRow = interiorUpperRow + 1;
            const boundaryUpperCol = interiorUpperCol + 1;
            const newCells = new Map();
            const interior = [], boundary = [];
            for (let r = boundaryLowerRow; r <= boundaryUpperRow; ++r) {
                for (let c = boundaryLowerCol; c <= boundaryUpperCol; ++c) {
                    const index = r * state.config.order + c;
                    if (r >= interiorLowerRow && r <= interiorUpperRow && c >= interiorLowerCol && c <= interiorUpperCol) {
                        const { object, position } = state.grid[index];
                        if (object.units > 0) {
                            return;
                        }
                        interior.push(index);
                        newCells.set(index, {
                            object: objectProps,
                            position: {
                                ...position,
                                root: interior[0],
                                interior,
                                boundary
                            },
                            border: {
                                top: r === interiorLowerRow,
                                right: c === interiorUpperCol,
                                bottom: r === interiorUpperRow,
                                left: c === interiorLowerCol
                            }
                        });
                    } else {
                        if (r >= 0 && r < state.config.order && c >= 0 && c < state.config.order) {
                            boundary.push(index);
                        }
                    }
                }
            }
            batch(() => {
                setState("inspect", "root", currentPosition.index);
                newCells.forEach((cell, index) => {
                    setState("grid", index, cell);
                });
                stateSetters.applyNetwork();
            });
        },
        onRemoveClick() {
            const { object, position } = state.grid[state.inspect.root];
            if (object.type === "free" || object.fixed) {
                return;
            }
            batch(() => {
                setState("grid", position.interior, ({ position }) => {
                    const { row, column, index } = position;
                    return {
                        ...state.baseProps,
                        position: {
                            ...position,
                            root: index,
                            interior: [index],
                            boundary: halfBoundary(row, column, index, state.config.order)
                        }
                    };
                });
                stateSetters.applyNetwork();
            });
        },
        onResetClick() {
            const targetType = state.config.useAutofill ? "free" : "road";
            batch(() => {
                setState("grid", ({ object }) => {
                    return object.type === targetType || !object.fixed;
                }, ({ position }) => {
                    const { row, column, index } = position;
                    return {
                        ...state.baseProps,
                        position: {
                            ...position,
                            root: index,
                            interior: [index],
                            boundary: halfBoundary(row, column, index, state.config.order)
                        }
                    };
                });
                stateSetters.applyNetwork();
            });
        },
        applyNetwork() {
            state.networkProps.forEach(({ root, props }) => {
                setState("grid", root, "network", props);
            });
        }
    };

    stateSetters.initGrid();
    stateSetters.setObject(state.grid[myHouseRoot].position, state.myHouseProps);

    summary = createMemo(() => {
        const freeRoots = [];
        const roadRoots = [];
        const decorRoots = new Map();
        const buildingRoots = new Map();
        let totalFree = state.config.order ** 2 - state.config.mobCap - 1;
        let totalConnected = 0;
        let totalBeauty = 0;
    
        state.grid.forEach((cell, index) => {
            const { object, position, network } = cell;
            if (position.root !== index) {
                return;
            }
            switch (object.type) {
                case "free":
                    freeRoots.push(index);
                    break;
                case "road":
                    roadRoots.push(index);
                    if (network.connected) {
                        ++totalConnected;
                    }
                    break;
                case "decor":
                    if (!decorRoots.has(object.name)) {
                        decorRoots.set(object.name, []);
                    }
                    decorRoots.get(object.name).push(index);
                    totalFree -= object.units;
                    totalBeauty += (object.decor + network.decor);
                    break;
                case "building":
                    if (!buildingRoots.has(object.name)) {
                        buildingRoots.set(object.name, []);
                    }
                    buildingRoots.get(object.name).push(index);
                    totalFree -= object.units;
                    totalBeauty += object.decor;
                    break;
            }
        });
    
        const finalWaru = state.config.useAufheben ? aufhebenWaru : 0;
        let lastOptimalCycle = 0;
        const products = [{ cycle: 0, total: 0, average: 0, marginal: 0 }];
    
        buildingRoots.forEach(list => {
            list.forEach(root => {
                const { object, network } = state.grid[root];
                if (object.waru > 0 && object.banked > 0) {
                    const totalWaru = object.waru + network.waru + finalWaru;
                    const totalBanked = object.banked + network.banked;
                    const cycles = totalBanked / totalWaru;
                    const remWaru = totalBanked % totalWaru;
                    const lowerCycles = Math.floor(cycles);
                    const upperCycles = Math.ceil(cycles);
                    lastOptimalCycle = lastOptimalCycle > 0 ? Math.min(lastOptimalCycle, lowerCycles) : lowerCycles;
                    for (let i = 1; i <= lowerCycles; i++) {
                        if (!products[i]) {
                            products[i] = { cycle: i, total: 0, average: 0, marginal: 0 };
                        }
                        products[i].marginal += totalWaru;
                    }
                    if (remWaru > 0) {
                        if (!products[upperCycles]) {
                            products[upperCycles] = { cycle: upperCycles, total: 0, average: 0, marginal: 0 };
                        }
                        products[upperCycles].marginal += remWaru;
                    }
                }
            });
        });
        let totalProduct = 0;
        products.forEach((product, cycle) => {
            if (cycle > 0) {
                totalProduct += product.marginal;
                product.total = totalProduct;
                product.average = Math.round(totalProduct / cycle * 100) / 100;
            }
        });

        return {
            roots: {
                free: freeRoots,
                road: roadRoots,
                decor: Array.from(decorRoots, ([name, list]) => ({ name, list })),
                building: Array.from(buildingRoots, ([name, list]) => ({ name, list }))
            },
            count: {
                free: totalFree,
                inNetwork: totalConnected,
                outNetwork: roadRoots.length - totalConnected
            },
            beauty: { ...beautyProps(totalBeauty), total: totalBeauty },
            production: {
                lastOptimalCycle,
                products
            }
        };
    });

    const store = [state, stateSetters];
    return (
        <StateContext.Provider value={store}>
            {props.children}
        </StateContext.Provider>
    );
}

export function useState() {
    return useContext(StateContext);
}