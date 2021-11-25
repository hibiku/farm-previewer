import { batch, createMemo, createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { DisjointSet } from "dsforest";
import { levels, orderLimits, mobCapLimits, objects, myHouseNames, myHouseRoot, beautyDetails, networkDecor, networkWaru, aufhebenWaru } from "./data.js";

const StateContext = createContext();

function adjustedIndex(oldIndex, oldOrder, newOrder) {
    const oldRow = Math.floor(oldIndex / oldOrder);
    const oldCol = oldIndex % oldOrder;
    return oldRow * newOrder + oldCol;
};
function halfBoundary(row, column, index, order) {
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
};
function nextColor(i, s, l) {
    return `hsl(${i * 180 * (3 - Math.sqrt(5))}, ${s}%, ${l}%)`; // use golden angle
}
function layoutStats(config, grid) {
    const network = new DisjointSet();
    const blankRoots = [];
    const roadRoots = [];
    const decorRoots = new Map();
    const buildingRoots = new Map();
    let totalBeauty = 0;

    grid.forEach((tile, index) => {
        const { data, position } = tile;
        switch (data.type) {
            case "blank":
                blankRoots.push(index);
                break;
            case "road":
                network.makeSet(index);
                position.boundary.forEach(idx => {
                    if (grid[idx].data.type === "road" || grid[idx].position.root === myHouseRoot) {
                        network.union(idx, index);
                    }
                });
                roadRoots.push(index);
                break;
            case "decor":
                if (position.root !== index) {
                    return;
                }
                if (!decorRoots.has(data.name)) {
                    decorRoots.set(data.name, []);
                }
                decorRoots.get(data.name).push(index);
                break;
            case "building":
                if (position.root === myHouseRoot) {
                    network.makeSet(index);
                    network.union(myHouseRoot, index);
                }
                if (position.root !== index) {
                    return;
                }
                if (!buildingRoots.has(data.name)) {
                    buildingRoots.set(data.name, []);
                }
                buildingRoots.get(data.name).push(index);
                break;
        }
    });

    const decorNames = [];
    decorRoots.forEach((roots, name) => {
        decorNames.push(name);
        const { decor } = objects.decor.data[name];
        totalBeauty += (decor * roots.length + roots.reduce((bonusDecor, root) => {
            const { position } = grid[root];
            const paths = position.boundary.reduce((count, index) => {
                if (grid[index].data.type === "road" && network.areConnected(myHouseRoot, index)) {
                    return count + 1;
                }
                return count;
            }, 0);
            if (paths > 0) {
                bonusDecor += networkDecor(decor, paths);
            }
            return bonusDecor;
        }, 0));
    });

    const buildingNames = [];
    buildingRoots.forEach((roots, name) => {
        buildingNames.push(name);
        totalBeauty += objects.building.data[name].decor * roots.length;
    });

    const finalWaru = config.useAufheben ? aufhebenWaru : 0;
    const beauty = beautyDetails(totalBeauty);
    const bonusBanked = beauty.banked;
    let lastOptimalCycle = 0;
    const products = [0];
    buildingRoots.forEach(roots => {
        roots.forEach(root => {
            const { data, position } = grid[root];
            if (data.waru > 0 && data.banked > 0) {
                const paths = position.boundary.reduce((count, index) => {
                    if (grid[index].data.type === "road" && network.areConnected(myHouseRoot, index)) {
                        return count + 1;
                    }
                    return count;
                }, 0);
                const totalWaru = data.waru + (paths > 0 ? networkWaru(data.waru, paths) : 0) + finalWaru;
                const totalBanked = data.banked + bonusBanked;
                const cycles = totalBanked / totalWaru;
                const remWaru = totalBanked % totalWaru;
                const lowerCycles = Math.floor(cycles);
                const upperCycles = Math.ceil(cycles);
                lastOptimalCycle = lastOptimalCycle > 0 ? Math.min(lastOptimalCycle, lowerCycles) : lowerCycles;
                for (let i = 1; i <= lowerCycles; i++) {
                    products[i] = (products[i] || 0) + totalWaru;
                }
                if (remWaru > 0) {
                    products[upperCycles] = (products[upperCycles] || 0) + remWaru;
                }
            }
        });
    });

    const totalInNetwork = roadRoots.reduce((count, root) => {
        if (network.areConnected(myHouseRoot, root)) {
            ++count;
        }
        return count;
    }, 0);

    return {
        network,
        tiling: {
            free: {
                count: blankRoots.length + roadRoots.length - config.mobCap - 1
            },
            blank: {
                roots: blankRoots
            },
            road: {
                count: {
                    inNetwork: totalInNetwork,
                    outNetwork: roadRoots.length - totalInNetwork
                },
                roots: roadRoots
            },
            decor: {
                names: decorNames,
                pairs: Object.fromEntries(Array.from(decorRoots, ([name, roots], index) => ([name, {
                    backgroundColor: nextColor(index + buildingRoots.size, 80, 80),
                    roots
                }])))
            },
            building: {
                names: buildingNames,
                pairs: Object.fromEntries(Array.from(buildingRoots, ([name, roots], index) => ([name, {
                    backgroundColor: nextColor(index, 80, 80),
                    roots
                }])))
            }
        },
        beauty,
        production: {
            lastOptimalCycle,
            lastOptimalRate: products[lastOptimalCycle],
            products: products.reduce((total, marginal, index) => {
                if (index > 0) {
                    total.push(total[index - 1] + marginal);
                } else {
                    total.push(marginal);
                }
                return total;
            }, [])
        }
    };
};
function createTiles(config, grid, data, { row, column }) {
    const interiorLowerRow = row;
    const interiorLowerCol = column;
    const interiorUpperRow = interiorLowerRow + data.order - 1;
    const interiorUpperCol = interiorLowerCol + data.order - 1;
    if (interiorUpperRow >= config.order || interiorUpperCol >= config.order) {
        return {
            err: "Out-of-bounds positioning",
            tiles: undefined
        };
    }
    const boundaryLowerRow = interiorLowerRow - 1;
    const boundaryLowerCol = interiorLowerCol - 1;
    const boundaryUpperRow = interiorUpperRow + 1;
    const boundaryUpperCol = interiorUpperCol + 1;
    const tiles = [];
    const interior = [], boundary = [];
    for (let r = boundaryLowerRow; r <= boundaryUpperRow; ++r) {
        for (let c = boundaryLowerCol; c <= boundaryUpperCol; ++c) {
            const index = r * config.order + c;
            if (r >= interiorLowerRow && r <= interiorUpperRow && c >= interiorLowerCol && c <= interiorUpperCol) {
                const tile = grid[index];
                if (tile && tile.data.tiles > 0) {
                    return {
                        err: "Tiles are already occupied",
                        tiles: undefined
                    };
                }
                interior.push(index);
                tiles.push({
                    data,
                    position: {
                        row: r,
                        column: c,
                        index,
                        root: interior[0],
                        interior,
                        boundary
                    }
                });
            } else {
                if (r >= 0 && r < config.order && c >= 0 && c < config.order) {
                    boundary.push(index);
                }
            }
        }
    }
    return {
        err: undefined,
        tiles
    };
};
function createGrid(config, tiling) {
    const grid = [];
    if (tiling) {
        tiling.forEach(({ type, name, roots }) => {
            const data = objects[type].data[name];
            if (type === "blank" || type === "road") {
                roots.forEach(root => {
                    const row = Math.floor(root / config.order);
                    const column = root % config.order;
                    grid[root] = {
                        data,
                        position: {
                            row,
                            column,
                            index: root,
                            root,
                            interior: [root],
                            boundary: halfBoundary(row, column, root, config.order)
                        }
                    };
                });
            } else if (type === "decor" || type === "building") {
                roots.forEach(root => {
                    const { tiles } = createTiles(config, grid, data, {
                        row: Math.floor(root / config.order),
                        column: root % config.order
                    });
                    tiles.forEach(tile => {
                        grid[tile.position.index] = tile;
                    });
                });
            }
        });
    } else {
        const baseData = objects[config.useAutofill ? "road" : "blank"].data[""];
        const myHouseData = objects.building.data[myHouseNames[config.order]];
        const myHouseInterior = [];
        const myHouseBoundary = [];
        for (let r = 0; r < config.order; ++r) {
            for (let c = 0; c < config.order; ++c) {
                const index = r * config.order + c;
                if (r < myHouseData.order && c < myHouseData.order) {
                    myHouseInterior.push(index);
                    grid.push({
                        data: myHouseData,
                        position: {
                            row: r,
                            column: c,
                            index,
                            root: myHouseRoot,
                            interior: myHouseInterior,
                            boundary: myHouseBoundary
                        }
                    });
                } else {
                    if (r >= 0 && r <= myHouseData.order && c >= 0 && c <= myHouseData.order) {
                        myHouseBoundary.push(index);
                    }
                    grid.push({
                        data: baseData,
                        position: {
                            row: r,
                            column: c,
                            index,
                            root: index,
                            interior: [index],
                            boundary: halfBoundary(r, c, index, config.order)
                        }
                    });
                }   
            }
        }
    }
    return grid;
}

export function StateProvider(props) {
    let summary, tileData;
    const baseLevel = levels[0];
    const baseConfig = {
        level: baseLevel,
        order: orderLimits[baseLevel].min,
        mobCap: mobCapLimits[baseLevel].min,
        useAufheben: false,
        useAutofill: false
    };
    const [state, setState] = createStore({
        mode: "inspect",
        inspect: { root: myHouseRoot },
        decorate: {
            type: "building",
            name: objects.building.limits[baseLevel].min
        },
        config: baseConfig,
        grid: createGrid(baseConfig),
        presets: (JSON.parse(window.localStorage.getItem("presets")) || []).map(({ title, config, tiling }) => ({
            title,
            config,
            tiling,
            production: layoutStats(config, createGrid(config, tiling)).production
        })),
        chart: undefined,
        get baseData() {
            return objects[this.config.useAutofill ? "road" : "blank"].data[""];
        },
        get summary() {
            return summary();
        },
        get tileData() {
            return tileData();
        },
        get preset() {
            const { level, order, mobCap, useAufheben } = this.config;
            const { tiling, production } = summary();
            const { blank, road, decor, building } = tiling;
            return {
                title: "Current",
                config: {
                    level,
                    order,
                    mobCap,
                    useAufheben
                },
                tiling: [
                    { type: "blank", name: "", roots: blank.roots },
                    { type: "road", name: "", roots: road.roots },
                    ...decor.names.map(name => ({
                        type: "decor",
                        name,
                        roots: decor.pairs[name].roots
                    })),
                    ...building.names.map(name => ({
                        type: "building",
                        name,
                        roots: building.pairs[name].roots
                    }))
                ],
                production
            };
        }
    });
    
    const stateSetters = {
        setChart(chart) {
            setState("chart", chart);
        },
        setLevel(newLevel) {
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
                    stateSetters.setMobCap(newMobCap);
                }
            });
        },
        setOrder(newOrder) {
            batch(() => {
                stateSetters.resizeGrid(state.config.order, newOrder);
            });
        },
        resizeGrid(oldOrder, newOrder) {
            setState("config", "order", newOrder);
            const { row, column } = state.grid[state.inspect.root].position;
            stateSetters.setInspectRoot((row >= newOrder || column >= newOrder) ? myHouseRoot : row * newOrder + column);
            setState("grid", state.grid[myHouseRoot].position.interior, ({ position }) => ({
                data: objects.building.data[myHouseNames[newOrder]],
                position
            }));
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
                        const { data, position } = state.grid[root];
                        if (position.row + data.order >= minOrder || position.column + data.order >= minOrder) {
                            interior.forEach(index => {
                                const oldTile = state.grid[index];
                                const { row, column } = oldTile.position;
                                if (row >= minOrder || column >= minOrder) {
                                    return;
                                }
                                const newIndex = adjustedIndex(index, oldOrder, newOrder);
                                newGrid[newIndex] = {
                                    data: state.baseData,
                                    position: {
                                        ...oldTile.position,
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
                                const oldTile = state.grid[interior[i]];
                                newGrid[index] = {
                                    ...oldTile,
                                    position: {
                                        ...oldTile.position,
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
                            data: state.baseData,
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
        },
        setMobCap(newMobCap) {
            setState("config", "mobCap", newMobCap);
        },
        toggleAufheben() {
            setState("config", "useAufheben", !state.config.useAufheben);
        },
        setMode(newMode) {
            setState("mode", newMode);
        },
        setDecorateType(newType) {
            setState("decorate", {
                type: newType,
                name: objects[newType].limits[state.config.level].min
            });
        },
        setDecorateName(newName) {
            setState("decorate", "name", newName);
        },
        toggleAutofill() {
            setState("config", "useAutofill", !state.config.useAutofill);
            const targetType = state.config.useAutofill ? "blank" : "road";
            setState("grid", state.summary.tiling[targetType].roots, ({ position }) => ({
                data: state.baseData,
                position
            }));
        },
        loadPreset(index) {
            const { config, tiling } = state.presets[index];
            batch(() => {
                setState("config", {
                    ...config,
                    useAutofill: false
                });
                setState("grid", createGrid(config, tiling));
                stateSetters.setInspectRoot(myHouseRoot);
            });
        },
        deletePreset(index) {
            setState("presets", [...state.presets.slice(0, index), ...state.presets.slice(index + 1)]);
        },
        createPreset(title) {
            setState("presets", presets => [...presets, {
                ...state.preset,
                title
            }]);
        },
        setInspectRoot(newRoot) {
            setState("inspect", "root", newRoot);
        },
        insertObject(position) {
            const { type, name } = state.decorate;
            const data = objects[type].data[name];
            if (!data) {
                return "No object selected";
            }
            if (data.tiles > 0 && state.summary.free < data.tiles) {
                return "Exceeded required number of free tiles";
            }
            if (data.quantity > 0) {
                const entry = state.summary.tiling[type].pairs[name];
                if (entry && entry.roots.length + 1 > data.quantity) {
                    return `"${name}" is limited to a quantity of ${data.quantity}`;
                }
            }
            if (data.type === "road") {
                if (state.grid[position.index].data.tiles > 0) {
                    return "Tiles are already occupied";
                }
                batch(() => {
                    setState("grid", position.index, ({ position }) => ({
                        data,
                        position
                    }));
                    stateSetters.setInspectRoot(position.index);
                });
                return;
            } else {
                const { err, tiles } = createTiles(state.config, state.grid, data, position);
                batch(() => {
                    if (!err) {
                        tiles.forEach(tile => {
                            setState("grid", tile.position.index, tile);
                        });
                        stateSetters.setInspectRoot(position.index);
                    }
                });
                return err;
            }
        },
        removeObject() {
            const tile = state.grid[state.inspect.root];
            if (tile.data.fixed) {
                return "Object is fixed to the grid";
            }
            setState("grid", tile.position.interior, ({ position }) => {
                const { row, column, index } = position;
                return {
                    data: state.baseData,
                    position: {
                        ...position,
                        root: index,
                        interior: [index],
                        boundary: halfBoundary(row, column, index, state.config.order)
                    }
                };
            });
        },
        clearGrid() {
            const targetType = state.config.useAutofill ? "blank" : "road";
            setState("grid", ({ data }) => {
                return data.type === targetType || !data.fixed;
            }, ({ position }) => {
                const { row, column, index } = position;
                return {
                    data: state.baseData,
                    position: {
                        ...position,
                        root: index,
                        interior: [index],
                        boundary: halfBoundary(row, column, index, state.config.order)
                    }
                };
            });
        },
        updateChart() {
            const presets = [...state.presets, state.preset];
            const { minCycle, maxCycle, datasets } = presets.reduce((props, { title, production }, index) => {
                const color = nextColor(index, 100, 50);
                const { minCycle, maxCycle } = props;
                const { lastOptimalCycle, products } = production;
                props.minCycle = minCycle > 0 ? Math.min(minCycle, lastOptimalCycle) : lastOptimalCycle;
                props.maxCycle = maxCycle > 0 ? Math.max(maxCycle, products.length - 1) : products.length - 1;
                props.datasets.push({
                    label: title,
                    data: products,
                    backgroundColor: color,
                    borderColor: color,
                    hidden: index < presets.length - 1
                });
                return props;
            }, {
                minCycle: 0,
                maxCycle: 0,
                datasets: []
            });
            const { minProduct, maxProduct } = presets.reduce((props, { production }) => {
                const { minProduct, maxProduct } = props;
                const { products } = production;
                props.minProduct = minProduct > 0 ? Math.min(minProduct, products[minCycle]) : products[minCycle];
                const localMaxCycle = Math.min(maxCycle, products.length - 1);
                props.maxProduct = maxProduct > 0 ? Math.max(maxProduct, products[localMaxCycle]) : products[localMaxCycle];
                return props;
            }, {
                minProduct: 0,
                maxProduct: 0
            });
            setState("chart", "data", {
                labels: Array.from({ length: maxCycle + 1 }, (_, i) => 10 * i),
                datasets
            });
            setState("chart", "options", "scales", "x", {
                min: 10 * minCycle,
                max: 10 * maxCycle
            });
            setState("chart", "options", "scales", "y", {
                suggestedMin: minProduct,
                suggestedMax: maxProduct
            });
            if (minProduct > 0) {
                setState("chart", "options", "scales", "y", "min", undefined);
            }
            state.chart.update();
        }
    };

    summary = createMemo(() => {
        return layoutStats(state.config, state.grid);
    });

    tileData = createMemo(() => {
        const { data, position } = state.grid[state.inspect.root];
        const paths = position.boundary.reduce((count, index) => {
            if (state.grid[index].data.type === "road" && state.summary.network.areConnected(myHouseRoot, index)) {
                return count + 1;
            }
            return count;
        }, 0);
        let bonusWaru = 0;
        let finalWaru = 0;
        let bonusBanked = 0;
        let bonusDecor = 0;
        if (data.waru > 0 && data.banked > 0) {
            if (paths > 0) {
                bonusWaru = networkWaru(data.waru, paths);
            }
            if (state.config.useAufheben) {
                finalWaru = aufhebenWaru;
            }
            bonusBanked = state.summary.beauty.banked;
        } else if (data.decor > 0) {
            if (paths > 0) {
                bonusDecor = networkDecor(data.decor, paths);
            }
        }
        return {
            ...data,
            paths,
            bonusWaru,
            finalWaru,
            bonusBanked,
            bonusDecor
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