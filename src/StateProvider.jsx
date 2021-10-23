import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import { DisjointSet } from "dsforest";
import { levels, orderLimits, mobCapLimits, objectTypes, objectData, getBeautyEffects } from "./data.js";

const StateContext = createContext();

const baseLevel = levels[0];
const baseOrder = orderLimits[baseLevel].min;
const baseSpace = baseOrder ** 2;
const baseMobCap = mobCapLimits[baseLevel].min;
const baseConfig = {
    level: baseLevel,
    order: baseOrder,
    mobCap: baseMobCap,
    useAufheben: false,
    useAutofill: false
};
const myHouseOrder = objectData["myHouse"].props[""].order;
const myHouseSpace = objectData["myHouse"].props[""].space;
function baseTemplate(config) {
    return (_, index) => {
        const row = Math.floor(index / config.order);
        const col = Math.floor(index % config.order);
        const cell = { row, col, type: "", name: "", rootIndex: index };
        if (row < myHouseOrder && col < myHouseOrder) {
            cell.type = "myHouse";
            cell.rootIndex = 0;
        } else {
            if (config.useAutofill) {
                cell.type = "road";
            }
        }
        return cell;
    };
}

export function StateProvider(props) {
    const [state, setState] = createStore({
        config: baseConfig,
        mode: {
            type: "inspect",
            inspect: { rootIndex: 0 },
            decorate: {
                type: objectTypes[0],
                name: objectData[objectTypes[0]].limits[baseLevel].min
            },
        },
        cells: new Array(baseSpace).fill().map(baseTemplate(baseConfig)),
        objects: {
            building: [],
            decor: [],
            road: {
                inNetwork: (baseConfig.useAutofill ? baseSpace - myHouseSpace : 0),
                outNetwork: 0
            }
        },
        space: baseSpace - myHouseSpace - 1 - baseMobCap,
        beauty: { ...getBeautyEffects(0), total: 0 },
        production: {
            numOptimalCycles: 0,
            numMaxCycles: 0,
            cycles: [{ total: 0, average: 0, marginal: 0 }]
        }
    });

    const store = [
        state,
        {
            setMode(type) {
                setState("mode", "type", type);
            },
            setInspect(rootIndex) {
                setState("mode", "inspect", { rootIndex });
            },
            setDecorate(type, name) {
                setState("mode", "decorate", { type, name });
            },
            setGrid(config = baseConfig, template = baseTemplate(config)) {
                const cells = new Array(config.order ** 2).fill().map(template);
                const network = new DisjointSet();
                cells.forEach((cell, index) => {
                    if (cell.type === "myHouse" || cell.type === "road") {
                        network.makeSet(index);
                        if (cell.row > 0) {
                            const upCellIndex = index - config.order;
                            const upCell = cells[upCellIndex];
                            if (upCell.type === "myHouse" || upCell.type === "road") {
                                network.union(upCellIndex, index);
                            }
                        }
                        if (cell.col > 0) {
                            const leftCellIndex = index - 1;
                            const leftCell = cells[leftCellIndex];
                            if (leftCell.type === "myHouse" || leftCell.type === "road") {
                                network.union(leftCellIndex, index);
                            }
                        }
                        if (cell.row > 0 && cell.col > 0) {
                            const upperLeftCellIndex = index - config.order - 1;
                            const upperLeftCell = cells[upperLeftCellIndex];
                            if (upperLeftCell.type === "myHouse" || upperLeftCell.type === "road") {
                                network.union(upperLeftCellIndex, index);
                            }
                        }
                        if (cell.row > 0 && cell.col < config.order - 1) {
                            const upperRightCellIndex = index - config.order + 1;
                            const upperRightCell = cells[upperRightCellIndex];
                            if (upperRightCell.type === "myHouse" || upperRightCell.type === "road") {
                                network.union(upperRightCellIndex, index);
                            }
                        }
                    }
                });

                const objects = {
                    building: new Map(),
                    decor: new Map(),
                    road: { inNetwork: 0, outNetwork: 0 }
                };
                let totalSpace = (config.order ** 2) - myHouseSpace - 1 - config.mobCap;
                let totalBeauty = 0;
                cells.forEach((cell, index) => {
                    if (cell.type && cell.rootIndex === index) {
                        const props = objectData[cell.type].props[cell.name];
                        let numRoads = 0;
                        if (cell.type === "building" || cell.type === "decor") {
                            const lowerRow = Math.max(0, cell.row - 1);
                            const lowerCol = Math.max(0, cell.col - 1);
                            const upperRow = Math.min(config.order - 1, cell.row + props.order);
                            const upperCol = Math.min(config.order - 1, cell.col + props.order);
                            for (let r = lowerRow; r <= upperRow; r++) {
                                for (let c = lowerCol; c <= upperCol; c++) {
                                    const idx = r * config.order + c;
                                    if (cells[idx].type === "road" && network.areConnected(0, idx)) {
                                        numRoads++;
                                    }
                                }
                            }
                            totalSpace -= props.space;
                        }
                        switch (cell.type) {
                            case "building":
                                cells[index] = {
                                    ...cell,
                                    numRoads,
                                    baseWaru: props.waru,
                                    bonusWaru: props.waru > 0 ? Math.min(props.waru, Math.floor(numRoads * (5 + 0.02 * props.waru))) + (config.useAufheben ? 1 : 0) : 0,
                                    baseBanked: props.banked,
                                    baseDecor: props.decor
                                };
                                objects.building.set(cell.name, (objects.building.get(cell.name) || 0) + 1);
                                totalBeauty += props.decor;
                                break;
                            case "decor":
                                const bonusDecor = Math.min(props.decor, Math.floor(numRoads * (200 + 0.02 * props.decor)));
                                cells[index] = {
                                    ...cell,
                                    numRoads,
                                    baseBanked: props.banked,
                                    baseDecor: props.decor,
                                    bonusDecor
                                };
                                objects.decor.set(cell.name, (objects.decor.get(cell.name) || 0) + 1);
                                totalBeauty += (props.decor + bonusDecor);
                                break;
                            case "road":
                                const inNetwork = network.areConnected(0, index);
                                cells[index] = { ...cell, inNetwork };
                                if (inNetwork) {
                                    objects.road.inNetwork++;
                                } else {
                                    objects.road.outNetwork++;
                                }
                                break;
                            default:
                                break;
                        }
                    }
                });

                const beautyEffects = getBeautyEffects(totalBeauty);
                let numOptimalCycles = 0, numMaxCycles = 0;
                const cycles = [{ total: 0, average: 0, marginal: 0 }];
                cells.forEach((cell, index) => {
                    if (cell.rootIndex === index && cell.type === "building") {
                        const { baseWaru, bonusWaru, baseBanked } = cell;
                        const bonusBanked = baseBanked > 0 ? beautyEffects.banked : 0;
                        const finalBanked = baseBanked + bonusBanked;
                        const finalWaru = baseWaru + bonusWaru;
                        if (finalWaru > 0 && finalBanked > 0) {
                            const numCycles = finalBanked / finalWaru;
                            const remWaru = finalBanked % finalWaru;
                            const numLowerCycles = Math.floor(numCycles);
                            const numUpperCycles = Math.ceil(numCycles);
                            numOptimalCycles = numOptimalCycles > 0 ? Math.min(numOptimalCycles, numLowerCycles) : numLowerCycles;
                            numMaxCycles = numMaxCycles > 0 ? Math.max(numMaxCycles, numUpperCycles) : numUpperCycles;
                            for (let i = 1; i <= numLowerCycles; i++) {
                                if (!cycles[i]) {
                                    cycles[i] = { total: 0, average: 0, marginal: 0 };
                                }
                                cycles[i].marginal += finalWaru;
                            }
                            if (remWaru > 0) {
                                if (!cycles[numUpperCycles]) {
                                    cycles[numUpperCycles] = { total: 0, average: 0, marginal: 0 };
                                }
                                cycles[numUpperCycles].marginal += remWaru;
                            }
                        }
                        cells[index] = { ...cell, bonusBanked };
                    }
                });
                let totalWaru = 0;
                cycles.forEach((cycle, index) => {
                    if (index > 0) {
                        totalWaru += cycle.marginal;
                        cycle.total = totalWaru;
                        cycle.average = Math.round(totalWaru / index * 100) / 100;
                    }
                });

                setState({
                    config,
                    cells,
                    objects: {
                        ...objects,
                        building: Object.entries(Object.fromEntries(objects.building)),
                        decor: Object.entries(Object.fromEntries(objects.decor))
                    },
                    space: totalSpace,
                    beauty: { ...beautyEffects, total: totalBeauty },
                    production: {
                        numOptimalCycles,
                        numMaxCycles,
                        cycles
                    }
                });
            }
        }
    ];

    return (
        <StateContext.Provider value={store}>
            {props.children}
        </StateContext.Provider>
    );
}

export function useState() {
    return useContext(StateContext);
}