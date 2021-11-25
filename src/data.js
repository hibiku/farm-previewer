export const levels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40
];
export const orders = [15, 17, 19, 22, 25];
export const orderLimits = {
    1: { min: 15, max: 15 }, 2: { min: 15, max: 15 }, 3: { min: 15, max: 15 },
    4: { min: 15, max: 15 }, 5: { min: 15, max: 15 }, 6: { min: 15, max: 15 },
    7: { min: 15, max: 17 }, 8: { min: 15, max: 17 }, 9: { min: 15, max: 17 },
    10: { min: 15, max: 17 }, 11: { min: 15, max: 17 }, 12: { min: 15, max: 17 },
    13: { min: 15, max: 17 }, 14: { min: 15, max: 19 }, 15: { min: 15, max: 19 },
    16: { min: 15, max: 19 }, 17: { min: 15, max: 19 }, 18: { min: 15, max: 19 },
    19: { min: 15, max: 19 }, 20: { min: 15, max: 19 }, 21: { min: 15, max: 22 },
    22: { min: 15, max: 22 }, 23: { min: 15, max: 22 }, 24: { min: 15, max: 22 },
    25: { min: 15, max: 22 }, 26: { min: 15, max: 22 }, 27: { min: 15, max: 22 },
    28: { min: 15, max: 22 }, 29: { min: 15, max: 22 }, 30: { min: 15, max: 25 },
    31: { min: 15, max: 25 }, 32: { min: 15, max: 25 }, 33: { min: 15, max: 25 },
    34: { min: 15, max: 25 }, 35: { min: 15, max: 25 }, 36: { min: 15, max: 25 },
    37: { min: 15, max: 25 }, 38: { min: 15, max: 25 }, 39: { min: 15, max: 25 },
    40: { min: 15, max: 25 }
};
export const mobCaps = [
    2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28
];
export const mobCapLimits = {
    1: { min: 2, max: 12 }, 2: { min: 2, max: 12 }, 3: { min: 3, max: 13 },
    4: { min: 4, max: 14 }, 5: { min: 5, max: 15 }, 6: { min: 6, max: 16 },
    7: { min: 6, max: 16 }, 8: { min: 7, max: 17 }, 9: { min: 7, max: 17 },
    10: { min: 8, max: 18 }, 11: { min: 8, max: 18 }, 12: { min: 9, max: 19 },
    13: { min: 9, max: 19 }, 14: { min: 9, max: 19 }, 15: { min: 10, max: 20 },
    16: { min: 10, max: 20 }, 17: { min: 10, max: 20 }, 18: { min: 11, max: 21 },
    19: { min: 11, max: 21 }, 20: { min: 11, max: 21 }, 21: { min: 12, max: 22 },
    22: { min: 12, max: 22 }, 23: { min: 12, max: 22 }, 24: { min: 13, max: 23 },
    25: { min: 13, max: 23 }, 26: { min: 14, max: 24 }, 27: { min: 14, max: 24 },
    28: { min: 15, max: 25 }, 29: { min: 15, max: 25 }, 30: { min: 16, max: 26 },
    31: { min: 16, max: 26 }, 32: { min: 16, max: 26 }, 33: { min: 17, max: 27 },
    34: { min: 17, max: 27 }, 35: { min: 17, max: 27 }, 36: { min: 17, max: 27 },
    37: { min: 18, max: 28 }, 38: { min: 18, max: 28 }, 39: { min: 18, max: 28 },
    40: { min: 18, max: 28 }
};

export const objects = {
    blank: {
        names: [""],
        limits: {
            1: { min: "", max: "" },
            2: { min: "", max: "" },
            3: { min: "", max: "" },
            4: { min: "", max: "" },
            5: { min: "", max: "" },
            6: { min: "", max: "" },
            7: { min: "", max: "" },
            8: { min: "", max: "" },
            9: { min: "", max: "" },
            10: { min: "", max: "" },
            11: { min: "", max: "" },
            12: { min: "", max: "" },
            13: { min: "", max: "" },
            14: { min: "", max: "" },
            15: { min: "", max: "" },
            16: { min: "", max: "" },
            17: { min: "", max: "" },
            18: { min: "", max: "" },
            19: { min: "", max: "" },
            20: { min: "", max: "" },
            21: { min: "", max: "" },
            22: { min: "", max: "" },
            23: { min: "", max: "" },
            24: { min: "", max: "" },
            25: { min: "", max: "" },
            26: { min: "", max: "" },
            27: { min: "", max: "" },
            28: { min: "", max: "" },
            29: { min: "", max: "" },
            30: { min: "", max: "" },
            31: { min: "", max: "" },
            32: { min: "", max: "" },
            33: { min: "", max: "" },
            34: { min: "", max: "" },
            35: { min: "", max: "" },
            36: { min: "", max: "" },
            37: { min: "", max: "" },
            38: { min: "", max: "" },
            39: { min: "", max: "" },
            40: { min: "", max: "" }
        },
        data: {
            [""]: { type: "blank", name: "", level: 1, order: 1, tiles: 0, waru: 0, banked: 0, decor: 0, quantity: 0, fixed: true }
        }
    },
    road: {
        names: [""],
        limits: {
            1: { min: "", max: "" },
            2: { min: "", max: "" },
            3: { min: "", max: "" },
            4: { min: "", max: "" },
            5: { min: "", max: "" },
            6: { min: "", max: "" },
            7: { min: "", max: "" },
            8: { min: "", max: "" },
            9: { min: "", max: "" },
            10: { min: "", max: "" },
            11: { min: "", max: "" },
            12: { min: "", max: "" },
            13: { min: "", max: "" },
            14: { min: "", max: "" },
            15: { min: "", max: "" },
            16: { min: "", max: "" },
            17: { min: "", max: "" },
            18: { min: "", max: "" },
            19: { min: "", max: "" },
            20: { min: "", max: "" },
            21: { min: "", max: "" },
            22: { min: "", max: "" },
            23: { min: "", max: "" },
            24: { min: "", max: "" },
            25: { min: "", max: "" },
            26: { min: "", max: "" },
            27: { min: "", max: "" },
            28: { min: "", max: "" },
            29: { min: "", max: "" },
            30: { min: "", max: "" },
            31: { min: "", max: "" },
            32: { min: "", max: "" },
            33: { min: "", max: "" },
            34: { min: "", max: "" },
            35: { min: "", max: "" },
            36: { min: "", max: "" },
            37: { min: "", max: "" },
            38: { min: "", max: "" },
            39: { min: "", max: "" },
            40: { min: "", max: "" }
        },
        data: {
            [""]: { type: "road", name: "", level: 1, order: 1, tiles: 0, waru: 0, banked: 0, decor: 0, quantity: 0, fixed: false }
        }
    },
    decor: {
        names: [
            "Lil Pine Tree", "Pine Tree", "Orange Mini Mushroom",
            "Heartfelt Garden", "Floral Archway", "Winged Archway",
            "Rice Candy Set", "Sky-High Flower", "Stone Lantern",
            "Buddy Bloom", "Big Bass", "Cannon",
            "Nestled Egg", "Snowman Mask", "Fishin' Pepe",
            "Christmas Tree", "Aran's Legacy", "Mount Monsmore",
            "Elluel Rune Tree", "White Cube", "Red Cube",
            "Green Cube", "Orange Cube", "Blue Cube",
            "Black Cube", "Big Pine Tree", "Fallen Log",
            "Torch", "Oak Barrel", "Tiny Round Tree",
            "Haystack", "Round Tree", "Trash Box",
            "Wooden Timepost", "Tiny Sign", "Mini Flowerpot",
            "Little Scoop Tree", "Simple Swing", "Log Bench",
            "Big Scoop Tree", "Buncha Barrels", "Plain Sign",
            "Lil Evergreen", "Rock", "Flat Rock",
            "Pointy Rock", "Craggy Rock", "Towering Rock",
            "Banana Shake", "Mythic Monsterland", "Time Twister",
            "Yeti's Hideout", "Green Nature", "Flying Whale",
            "Stone Trash Can", "Triple Mushroom", "Round Topiary Tree",
            "Fresh Milk", "Big Evergreen", "Haycart",
            "Aged Cheese", "Broad Sign", "Streetlight",
            "Grape Vat", "Itty Bitty Puddle", "Orange Bin",
            "Green Bin", "Purple Bin", "Purple Mini Mushroom",
            "Classic Wooden Horse", "Fine Grape Juice", "Big Round Topiary",
            "White Bench", "Double Cubist Tree", "White Signpost",
            "Blooming Shrub", "Round Flowerpot", "Big Mushroom Family",
            "Trash Can", "Rickety Clocktower", "Triple Cubist Tree",
            "Bushy Gazebo", "Rustic Slide", "Maple Tree",
            "Willow Tree", "Little Flower Garden", "Woodsy Well",
            "Lil Star Tree", "White Signboard", "Station Timepiece",
            "Floral Gazebo", "Cannonball Heap", "Gardener's Wheelbarrow",
            "Merry-Go-Round", "Star Tree", "Fancy Bench",
            "Lil Heart Tree", "Heart Tree", "Rapunzel's Tower",
            "Rustic Archway", "Shady Table", "Pretty Pond",
            "Rockin' Wooden Horse", "Fine Fountain", "Floral Swing",
            "Snack Shack", "Snow Crystal Core"
        ],
        limits: {
            1: { min: "", max: "" },
            2: { min: "Lil Pine Tree", max: "Lil Pine Tree" },
            3: { min: "Lil Pine Tree", max: "Elluel Rune Tree" },
            4: { min: "Lil Pine Tree", max: "Black Cube" },
            5: { min: "Lil Pine Tree", max: "Torch" },
            6: { min: "Lil Pine Tree", max: "Haystack" },
            7: { min: "Lil Pine Tree", max: "Wooden Timepost" },
            8: { min: "Lil Pine Tree", max: "Little Scoop Tree" },
            9: { min: "Lil Pine Tree", max: "Big Scoop Tree" },
            10: { min: "Lil Pine Tree", max: "Flying Whale" },
            11: { min: "Lil Pine Tree", max: "Fresh Milk" },
            12: { min: "Lil Pine Tree", max: "Aged Cheese" },
            13: { min: "Lil Pine Tree", max: "Grape Vat" },
            14: { min: "Lil Pine Tree", max: "Purple Bin" },
            15: { min: "Lil Pine Tree", max: "Fine Grape Juice" },
            16: { min: "Lil Pine Tree", max: "White Bench" },
            17: { min: "Lil Pine Tree", max: "White Signpost" },
            18: { min: "Lil Pine Tree", max: "Round Flowerpot" },
            19: { min: "Lil Pine Tree", max: "Trash Can" },
            20: { min: "Lil Pine Tree", max: "Rustic Slide" },
            21: { min: "Lil Pine Tree", max: "Willow Tree" },
            22: { min: "Lil Pine Tree", max: "Woodsy Well" },
            23: { min: "Lil Pine Tree", max: "White Signboard" },
            24: { min: "Lil Pine Tree", max: "Floral Gazebo" },
            25: { min: "Lil Pine Tree", max: "Merry-Go-Round" },
            26: { min: "Lil Pine Tree", max: "Fancy Bench" },
            27: { min: "Lil Pine Tree", max: "Rapunzel's Tower" },
            28: { min: "Lil Pine Tree", max: "Shady Table" },
            29: { min: "Lil Pine Tree", max: "Rockin' Wooden Horse" },
            30: { min: "Lil Pine Tree", max: "Snack Shack" },
            31: { min: "Lil Pine Tree", max: "Snack Shack" },
            32: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            33: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            34: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            35: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            36: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            37: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            38: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            39: { min: "Lil Pine Tree", max: "Snow Crystal Core" },
            40: { min: "Lil Pine Tree", max: "Snow Crystal Core" }
        },
        data: {
            ["Lil Pine Tree"]: { type: "decor", name: "Lil Pine Tree", level: 2, order: 1, tiles: 1, waru: 0, banked: 0, decor: 8, quantity: 99, fixed: false },
            ["Pine Tree"]: { type: "decor", name: "Pine Tree", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 12, quantity: 99, fixed: false },
            ["Orange Mini Mushroom"]: { type: "decor", name: "Orange Mini Mushroom", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 9, quantity: 99, fixed: false },
            ["Heartfelt Garden"]: { type: "decor", name: "Heartfelt Garden", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 1000, quantity: 198, fixed: false },
            ["Floral Archway"]: { type: "decor", name: "Floral Archway", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 1500, quantity: 198, fixed: false },
            ["Winged Archway"]: { type: "decor", name: "Winged Archway", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 2000, quantity: 198, fixed: false },
            ["Rice Candy Set"]: { type: "decor", name: "Rice Candy Set", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 2700, quantity: 198, fixed: false },
            ["Sky-High Flower"]: { type: "decor", name: "Sky-High Flower", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 1000, quantity: 198, fixed: false },
            ["Stone Lantern"]: { type: "decor", name: "Stone Lantern", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 1500, quantity: 198, fixed: false },
            ["Buddy Bloom"]: { type: "decor", name: "Buddy Bloom", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 2000, quantity: 198, fixed: false },
            ["Big Bass"]: { type: "decor", name: "Big Bass", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 2700, quantity: 198, fixed: false },
            ["Cannon"]: { type: "decor", name: "Cannon", level: 3, order: 1, tiles: 1, waru: 0, banked: 0, decor: 3200, quantity: 198, fixed: false },
            ["Nestled Egg"]: { type: "decor", name: "Nestled Egg", level: 3, order: 2, tiles: 4, waru: 0, banked: 0, decor: 3500, quantity: 198, fixed: false },
            ["Snowman Mask"]: { type: "decor", name: "Snowman Mask", level: 3, order: 2, tiles: 4, waru: 0, banked: 0, decor: 4200, quantity: 198, fixed: false },
            ["Fishin' Pepe"]: { type: "decor", name: "Fishin' Pepe", level: 3, order: 3, tiles: 9, waru: 0, banked: 0, decor: 4600, quantity: 198, fixed: false },
            ["Christmas Tree"]: { type: "decor", name: "Christmas Tree", level: 3, order: 2, tiles: 4, waru: 0, banked: 0, decor: 4800, quantity: 198, fixed: false },
            ["Aran's Legacy"]: { type: "decor", name: "Aran's Legacy", level: 3, order: 2, tiles: 4, waru: 0, banked: 0, decor: 6000, quantity: 198, fixed: false },
            ["Mount Monsmore"]: { type: "decor", name: "Mount Monsmore", level: 3, order: 4, tiles: 16, waru: 0, banked: 0, decor: 13000, quantity: 198, fixed: false },
            ["Elluel Rune Tree"]: { type: "decor", name: "Elluel Rune Tree", level: 3, order: 4, tiles: 16, waru: 0, banked: 0, decor: 13000, quantity: 198, fixed: false },
            ["White Cube"]: { type: "decor", name: "White Cube", level: 4, order: 1, tiles: 1, waru: 0, banked: 0, decor: 15, quantity: 99, fixed: false },
            ["Red Cube"]: { type: "decor", name: "Red Cube", level: 4, order: 1, tiles: 1, waru: 0, banked: 0, decor: 15, quantity: 99, fixed: false },
            ["Green Cube"]: { type: "decor", name: "Green Cube", level: 4, order: 1, tiles: 1, waru: 0, banked: 0, decor: 15, quantity: 99, fixed: false },
            ["Orange Cube"]: { type: "decor", name: "Orange Cube", level: 4, order: 1, tiles: 1, waru: 0, banked: 0, decor: 15, quantity: 99, fixed: false },
            ["Blue Cube"]: { type: "decor", name: "Blue Cube", level: 4, order: 1, tiles: 1, waru: 0, banked: 0, decor: 15, quantity: 99, fixed: false },
            ["Black Cube"]: { type: "decor", name: "Black Cube", level: 4, order: 1, tiles: 1, waru: 0, banked: 0, decor: 15, quantity: 99, fixed: false },
            ["Big Pine Tree"]: { type: "decor", name: "Big Pine Tree", level: 5, order: 1, tiles: 1, waru: 0, banked: 0, decor: 23, quantity: 99, fixed: false },
            ["Fallen Log"]: { type: "decor", name: "Fallen Log", level: 5, order: 1, tiles: 1, waru: 0, banked: 0, decor: 21, quantity: 99, fixed: false },
            ["Torch"]: { type: "decor", name: "Torch", level: 5, order: 1, tiles: 1, waru: 0, banked: 0, decor: 27, quantity: 99, fixed: false },
            ["Oak Barrel"]: { type: "decor", name: "Oak Barrel", level: 6, order: 1, tiles: 1, waru: 0, banked: 0, decor: 36, quantity: 99, fixed: false },
            ["Tiny Round Tree"]: { type: "decor", name: "Tiny Round Tree", level: 6, order: 1, tiles: 1, waru: 0, banked: 0, decor: 45, quantity: 99, fixed: false },
            ["Haystack"]: { type: "decor", name: "Haystack", level: 6, order: 1, tiles: 1, waru: 0, banked: 0, decor: 30, quantity: 99, fixed: false },
            ["Round Tree"]: { type: "decor", name: "Round Tree", level: 7, order: 1, tiles: 1, waru: 0, banked: 0, decor: 53, quantity: 99, fixed: false },
            ["Trash Box"]: { type: "decor", name: "Trash Box", level: 7, order: 1, tiles: 1, waru: 0, banked: 0, decor: 53, quantity: 99, fixed: false },
            ["Wooden Timepost"]: { type: "decor", name: "Wooden Timepost", level: 7, order: 1, tiles: 1, waru: 0, banked: 0, decor: 60, quantity: 99, fixed: false },
            ["Tiny Sign"]: { type: "decor", name: "Tiny Sign", level: 8, order: 1, tiles: 1, waru: 0, banked: 0, decor: 68, quantity: 99, fixed: false },
            ["Mini Flowerpot"]: { type: "decor", name: "Mini Flowerpot", level: 8, order: 1, tiles: 1, waru: 0, banked: 0, decor: 72, quantity: 99, fixed: false },
            ["Little Scoop Tree"]: { type: "decor", name: "Little Scoop Tree", level: 8, order: 1, tiles: 1, waru: 0, banked: 0, decor: 69, quantity: 99, fixed: false },
            ["Simple Swing"]: { type: "decor", name: "Simple Swing", level: 9, order: 1, tiles: 1, waru: 0, banked: 0, decor: 75, quantity: 99, fixed: false },
            ["Log Bench"]: { type: "decor", name: "Log Bench", level: 9, order: 1, tiles: 1, waru: 0, banked: 0, decor: 68, quantity: 99, fixed: false },
            ["Big Scoop Tree"]: { type: "decor", name: "Big Scoop Tree", level: 9, order: 1, tiles: 1, waru: 0, banked: 0, decor: 78, quantity: 99, fixed: false },
            ["Buncha Barrels"]: { type: "decor", name: "Buncha Barrels", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 87, quantity: 99, fixed: false },
            ["Plain Sign"]: { type: "decor", name: "Plain Sign", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 93, quantity: 99, fixed: false },
            ["Lil Evergreen"]: { type: "decor", name: "Lil Evergreen", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 105, quantity: 99, fixed: false },
            ["Rock"]: { type: "decor", name: "Rock", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 75, quantity: 99, fixed: false },
            ["Flat Rock"]: { type: "decor", name: "Flat Rock", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 75, quantity: 99, fixed: false },
            ["Pointy Rock"]: { type: "decor", name: "Pointy Rock", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 90, quantity: 99, fixed: false },
            ["Craggy Rock"]: { type: "decor", name: "Craggy Rock", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 98, quantity: 99, fixed: false },
            ["Towering Rock"]: { type: "decor", name: "Towering Rock", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 113, quantity: 99, fixed: false },
            ["Banana Shake"]: { type: "decor", name: "Banana Shake", level: 10, order: 1, tiles: 1, waru: 0, banked: 0, decor: 98, quantity: 99, fixed: false },
            ["Mythic Monsterland"]: { type: "decor", name: "Mythic Monsterland", level: 10, order: 4, tiles: 16, waru: 0, banked: 0, decor: 13500, quantity: 198, fixed: false },
            ["Time Twister"]: { type: "decor", name: "Time Twister", level: 10, order: 4, tiles: 16, waru: 0, banked: 0, decor: 9400, quantity: 198, fixed: false },
            ["Yeti's Hideout"]: { type: "decor", name: "Yeti's Hideout", level: 10, order: 4, tiles: 16, waru: 0, banked: 0, decor: 11000, quantity: 198, fixed: false },
            ["Green Nature"]: { type: "decor", name: "Green Nature", level: 10, order: 4, tiles: 16, waru: 0, banked: 0, decor: 10200, quantity: 198, fixed: false },
            ["Flying Whale"]: { type: "decor", name: "Flying Whale", level: 10, order: 4, tiles: 16, waru: 0, banked: 0, decor: 17000, quantity: 198, fixed: false },
            ["Stone Trash Can"]: { type: "decor", name: "Stone Trash Can", level: 11, order: 1, tiles: 1, waru: 0, banked: 0, decor: 75, quantity: 99, fixed: false },
            ["Triple Mushroom"]: { type: "decor", name: "Triple Mushroom", level: 11, order: 1, tiles: 1, waru: 0, banked: 0, decor: 90, quantity: 99, fixed: false },
            ["Round Topiary Tree"]: { type: "decor", name: "Round Topiary Tree", level: 11, order: 1, tiles: 1, waru: 0, banked: 0, decor: 98, quantity: 99, fixed: false },
            ["Fresh Milk"]: { type: "decor", name: "Fresh Milk", level: 11, order: 1, tiles: 1, waru: 0, banked: 0, decor: 98, quantity: 99, fixed: false },
            ["Big Evergreen"]: { type: "decor", name: "Big Evergreen", level: 12, order: 1, tiles: 1, waru: 0, banked: 0, decor: 113, quantity: 99, fixed: false },
            ["Haycart"]: { type: "decor", name: "Haycart", level: 12, order: 1, tiles: 1, waru: 0, banked: 0, decor: 120, quantity: 99, fixed: false },
            ["Aged Cheese"]: { type: "decor", name: "Aged Cheese", level: 12, order: 2, tiles: 4, waru: 0, banked: 0, decor: 480, quantity: 99, fixed: false },
            ["Broad Sign"]: { type: "decor", name: "Broad Sign", level: 13, order: 1, tiles: 1, waru: 0, banked: 0, decor: 143, quantity: 99, fixed: false },
            ["Streetlight"]: { type: "decor", name: "Streetlight", level: 13, order: 1, tiles: 1, waru: 0, banked: 0, decor: 143, quantity: 99, fixed: false },
            ["Grape Vat"]: { type: "decor", name: "Grape Vat", level: 13, order: 2, tiles: 4, waru: 0, banked: 0, decor: 600, quantity: 99, fixed: false },
            ["Itty Bitty Puddle"]: { type: "decor", name: "Itty Bitty Puddle", level: 14, order: 2, tiles: 4, waru: 0, banked: 0, decor: 180, quantity: 99, fixed: false },
            ["Orange Bin"]: { type: "decor", name: "Orange Bin", level: 14, order: 1, tiles: 1, waru: 0, banked: 0, decor: 135, quantity: 99, fixed: false },
            ["Green Bin"]: { type: "decor", name: "Green Bin", level: 14, order: 1, tiles: 1, waru: 0, banked: 0, decor: 135, quantity: 99, fixed: false },
            ["Purple Bin"]: { type: "decor", name: "Purple Bin", level: 14, order: 1, tiles: 1, waru: 0, banked: 0, decor: 135, quantity: 99, fixed: false },
            ["Purple Mini Mushroom"]: { type: "decor", name: "Purple Mini Mushroom", level: 15, order: 1, tiles: 1, waru: 0, banked: 0, decor: 165, quantity: 99, fixed: false },
            ["Classic Wooden Horse"]: { type: "decor", name: "Classic Wooden Horse", level: 15, order: 1, tiles: 1, waru: 0, banked: 0, decor: 165, quantity: 99, fixed: false },
            ["Fine Grape Juice"]: { type: "decor", name: "Fine Grape Juice", level: 15, order: 2, tiles: 4, waru: 0, banked: 0, decor: 750, quantity: 99, fixed: false },
            ["Big Round Topiary"]: { type: "decor", name: "Big Round Topiary", level: 16, order: 1, tiles: 1, waru: 0, banked: 0, decor: 180, quantity: 99, fixed: false },
            ["White Bench"]: { type: "decor", name: "White Bench", level: 16, order: 1, tiles: 1, waru: 0, banked: 0, decor: 180, quantity: 99, fixed: false },
            ["Double Cubist Tree"]: { type: "decor", name: "Double Cubist Tree", level: 17, order: 1, tiles: 1, waru: 0, banked: 0, decor: 195, quantity: 99, fixed: false },
            ["White Signpost"]: { type: "decor", name: "White Signpost", level: 17, order: 1, tiles: 1, waru: 0, banked: 0, decor: 210, quantity: 99, fixed: false },
            ["Blooming Shrub"]: { type: "decor", name: "Blooming Shrub", level: 18, order: 1, tiles: 1, waru: 0, banked: 0, decor: 225, quantity: 99, fixed: false },
            ["Round Flowerpot"]: { type: "decor", name: "Round Flowerpot", level: 18, order: 1, tiles: 1, waru: 0, banked: 0, decor: 248, quantity: 99, fixed: false },
            ["Big Mushroom Family"]: { type: "decor", name: "Big Mushroom Family", level: 19, order: 1, tiles: 1, waru: 0, banked: 0, decor: 240, quantity: 99, fixed: false },
            ["Trash Can"]: { type: "decor", name: "Trash Can", level: 19, order: 1, tiles: 1, waru: 0, banked: 0, decor: 270, quantity: 99, fixed: false },
            ["Rickety Clocktower"]: { type: "decor", name: "Rickety Clocktower", level: 20, order: 1, tiles: 1, waru: 0, banked: 0, decor: 300, quantity: 99, fixed: false },
            ["Triple Cubist Tree"]: { type: "decor", name: "Triple Cubist Tree", level: 20, order: 1, tiles: 1, waru: 0, banked: 0, decor: 285, quantity: 99, fixed: false },
            ["Bushy Gazebo"]: { type: "decor", name: "Bushy Gazebo", level: 20, order: 1, tiles: 1, waru: 0, banked: 0, decor: 315, quantity: 99, fixed: false },
            ["Rustic Slide"]: { type: "decor", name: "Rustic Slide", level: 20, order: 1, tiles: 1, waru: 0, banked: 0, decor: 270, quantity: 99, fixed: false },
            ["Maple Tree"]: { type: "decor", name: "Maple Tree", level: 21, order: 1, tiles: 1, waru: 0, banked: 0, decor: 330, quantity: 99, fixed: false },
            ["Willow Tree"]: { type: "decor", name: "Willow Tree", level: 21, order: 1, tiles: 1, waru: 0, banked: 0, decor: 330, quantity: 99, fixed: false },
            ["Little Flower Garden"]: { type: "decor", name: "Little Flower Garden", level: 22, order: 1, tiles: 1, waru: 0, banked: 0, decor: 345, quantity: 99, fixed: false },
            ["Woodsy Well"]: { type: "decor", name: "Woodsy Well", level: 22, order: 1, tiles: 1, waru: 0, banked: 0, decor: 353, quantity: 99, fixed: false },
            ["Lil Star Tree"]: { type: "decor", name: "Lil Star Tree", level: 23, order: 1, tiles: 1, waru: 0, banked: 0, decor: 338, quantity: 99, fixed: false },
            ["White Signboard"]: { type: "decor", name: "White Signboard", level: 23, order: 1, tiles: 1, waru: 0, banked: 0, decor: 360, quantity: 99, fixed: false },
            ["Station Timepiece"]: { type: "decor", name: "Station Timepiece", level: 24, order: 1, tiles: 1, waru: 0, banked: 0, decor: 375, quantity: 99, fixed: false },
            ["Floral Gazebo"]: { type: "decor", name: "Floral Gazebo", level: 24, order: 1, tiles: 1, waru: 0, banked: 0, decor: 368, quantity: 99, fixed: false },
            ["Cannonball Heap"]: { type: "decor", name: "Cannonball Heap", level: 25, order: 1, tiles: 1, waru: 0, banked: 0, decor: 390, quantity: 99, fixed: false },
            ["Gardener's Wheelbarrow"]: { type: "decor", name: "Gardener's Wheelbarrow", level: 25, order: 1, tiles: 1, waru: 0, banked: 0, decor: 405, quantity: 99, fixed: false },
            ["Merry-Go-Round"]: { type: "decor", name: "Merry-Go-Round", level: 25, order: 3, tiles: 9, waru: 0, banked: 0, decor: 2500, quantity: 99, fixed: false },
            ["Star Tree"]: { type: "decor", name: "Star Tree", level: 26, order: 1, tiles: 1, waru: 0, banked: 0, decor: 420, quantity: 99, fixed: false },
            ["Fancy Bench"]: { type: "decor", name: "Fancy Bench", level: 26, order: 1, tiles: 1, waru: 0, banked: 0, decor: 413, quantity: 99, fixed: false },
            ["Lil Heart Tree"]: { type: "decor", name: "Lil Heart Tree", level: 27, order: 1, tiles: 1, waru: 0, banked: 0, decor: 435, quantity: 99, fixed: false },
            ["Heart Tree"]: { type: "decor", name: "Heart Tree", level: 27, order: 1, tiles: 1, waru: 0, banked: 0, decor: 465, quantity: 99, fixed: false },
            ["Rapunzel's Tower"]: { type: "decor", name: "Rapunzel's Tower", level: 27, order: 2, tiles: 4, waru: 0, banked: 0, decor: 2000, quantity: 99, fixed: false },
            ["Rustic Archway"]: { type: "decor", name: "Rustic Archway", level: 28, order: 1, tiles: 1, waru: 0, banked: 0, decor: 473, quantity: 99, fixed: false },
            ["Shady Table"]: { type: "decor", name: "Shady Table", level: 28, order: 1, tiles: 1, waru: 0, banked: 0, decor: 480, quantity: 99, fixed: false },
            ["Pretty Pond"]: { type: "decor", name: "Pretty Pond", level: 29, order: 3, tiles: 9, waru: 0, banked: 0, decor: 600, quantity: 99, fixed: false },
            ["Rockin' Wooden Horse"]: { type: "decor", name: "Rockin' Wooden Horse", level: 29, order: 1, tiles: 1, waru: 0, banked: 0, decor: 510, quantity: 99, fixed: false },
            ["Fine Fountain"]: { type: "decor", name: "Fine Fountain", level: 30, order: 1, tiles: 1, waru: 0, banked: 0, decor: 525, quantity: 99, fixed: false },
            ["Floral Swing"]: { type: "decor", name: "Floral Swing", level: 30, order: 1, tiles: 1, waru: 0, banked: 0, decor: 540, quantity: 99, fixed: false },
            ["Snack Shack"]: { type: "decor", name: "Snack Shack", level: 30, order: 1, tiles: 1, waru: 0, banked: 0, decor: 750, quantity: 99, fixed: false },
            ["Snow Crystal Core"]: { type: "decor", name: "Snow Crystal Core", level: 32, order: 3, tiles: 9, waru: 0, banked: 0, decor: 3000, quantity: 99, fixed: false }
        }
    },
    building: {
        names: [
            "My House", "Green Mushroom Hut", "Henesys Homestead", "Orange Mushroom House", "Monster Barn",
            "Sturdy Straw House", "Red Mushroom Manor", "Rien Hot Springs", "Mu Lung Barber Shop", "Tip-Top Balloon Shop",
            "Floatland Manor", "Healthy Hospital", "Monster Manor", "Mr. Teddy X", "Ms. Teddy X",
            "Yellow Submarine", "Refreshing Oasis", "Yeti Super Stage", "Nautilus Harbor", "Shinsoo's Nest",
            "Ludibrium Toy House", "Orbis Flying Garden", "Ereve Fountain Garden", "Aqua Road Castle", "Zakum's Cave",
            "Windmill", "Chopper Chalet", "Drip Brew Coffee House", "Red Brick Abode", "My House (Homestead)",
            "Lofty Brick House", "Purple Bathhouse", "Blue Bathhouse", "Big Apple Fruit Shop", "Octo-Pot Seafood",
            "Henesys Bowman Guild", "Rudi Beauty Salon", "Santa's Gift Shop", "Ghastly Ghost Gables", "Grand Gourd Gables",
            "Blossom House", "Tip Top Chop Shop", "Pink Angel Place", "Full Moon Song Pyun Shop", "Gingerbread Gables",
            "Rien's Tonic Shop", "My House (Manor)", "Blue Mushroom Mansion", "Mushroom Tower", "Ariant Fabrics (I)",
            "Hanok House", "Fantasy Park Viking", "Alchemist's Abode", "Five-Slime Hotel", "Creamy Cake Chateau",
            "Florina Lighthouse", "Leafre Airship", "Fish Shop", "Mushking Empire Outpost", "Nova Safehouse",
            "Elluel House", "Ariant Fabrics (II)", "Happy Homestead", "Melody Manor", "Aqua Roadhouse",
            "Fun Factory", "Ariant Castle", "Shaved Ice Chateau", "Magatia Workshop", "My House (Mighty Manor)",
            "Santa's Special Shop", "Farmer's House", "Tick Tock Townhouse", "Mu Lung Dojo", "Icy Treat Retreat (I)",
            "Beatdown Shop", "Very Berry Vineyard", "Chryse Coliseum", "Omega Sector", "Tip-Top Toy Shop",
            "Edelstein Air Field", "Big Top Tenement", "Big Bowl Noodles", "My House (Country Mansion)", "Lumiere",
            "Icy Treat Retreat (II)", "Wholesome Milk Farm", "The Secret Garden"
        ],
        limits: {
            1: { min: "Green Mushroom Hut", max: "Green Mushroom Hut" },
            2: { min: "Green Mushroom Hut", max: "Orange Mushroom House" },
            3: { min: "Green Mushroom Hut", max: "Zakum's Cave" },
            4: { min: "Green Mushroom Hut", max: "Windmill" },
            5: { min: "Green Mushroom Hut", max: "Drip Brew Coffee House" },
            6: { min: "Green Mushroom Hut", max: "Red Brick Abode" },
            7: { min: "Green Mushroom Hut", max: "Lofty Brick House" },
            8: { min: "Green Mushroom Hut", max: "Purple Bathhouse" },
            9: { min: "Green Mushroom Hut", max: "Blue Bathhouse" },
            10: { min: "Green Mushroom Hut", max: "Grand Gourd Gables" },
            11: { min: "Green Mushroom Hut", max: "Tip Top Chop Shop" },
            12: { min: "Green Mushroom Hut", max: "Full Moon Song Pyun Shop" },
            13: { min: "Green Mushroom Hut", max: "Rien's Tonic Shop" },
            14: { min: "Green Mushroom Hut", max: "Mushroom Tower" },
            15: { min: "Green Mushroom Hut", max: "Leafre Airship" },
            16: { min: "Green Mushroom Hut", max: "Mushking Empire Outpost" },
            17: { min: "Green Mushroom Hut", max: "Nova Safehouse" },
            18: { min: "Green Mushroom Hut", max: "Ariant Fabrics (I)" },
            19: { min: "Green Mushroom Hut", max: "Happy Homestead" },
            20: { min: "Green Mushroom Hut", max: "Magatia Workshop" },
            21: { min: "Green Mushroom Hut", max: "Farmer's House" },
            22: { min: "Green Mushroom Hut", max: "Tick Tock Townhouse" },
            23: { min: "Green Mushroom Hut", max: "Mu Lung Dojo" },
            24: { min: "Green Mushroom Hut", max: "Icy Treat Retreat (I)" },
            25: { min: "Green Mushroom Hut", max: "Omega Sector" },
            26: { min: "Green Mushroom Hut", max: "Tip-Top Toy Shop" },
            27: { min: "Green Mushroom Hut", max: "Edelstein Air Field" },
            28: { min: "Green Mushroom Hut", max: "Big Top Tenement" },
            29: { min: "Green Mushroom Hut", max: "Big Bowl Noodles" },
            30: { min: "Green Mushroom Hut", max: "Icy Treat Retreat (II)" },
            31: { min: "Green Mushroom Hut", max: "Icy Treat Retreat (II)" },
            32: { min: "Green Mushroom Hut", max: "Icy Treat Retreat (II)" },
            33: { min: "Green Mushroom Hut", max: "Icy Treat Retreat (II)" },
            34: { min: "Green Mushroom Hut", max: "Icy Treat Retreat (II)" },
            35: { min: "Green Mushroom Hut", max: "The Secret Garden" },
            36: { min: "Green Mushroom Hut", max: "The Secret Garden" },
            37: { min: "Green Mushroom Hut", max: "The Secret Garden" },
            38: { min: "Green Mushroom Hut", max: "The Secret Garden" },
            39: { min: "Green Mushroom Hut", max: "The Secret Garden" },
            40: { min: "Green Mushroom Hut", max: "The Secret Garden" }
        },
        data: {
            ["My House"]: { type: "building", name: "My House", level: 1, order: 5, tiles: 25, waru: 0, banked: 0, decor: 0, quantity: 1, fixed: true },
            ["Green Mushroom Hut"]: { type: "building", name: "Green Mushroom Hut", level: 1, order: 2, tiles: 4, waru: 2, banked: 50, decor: 5, quantity: 99, fixed: false },
            ["Henesys Homestead"]: { type: "building", name: "Henesys Homestead", level: 2, order: 2, tiles: 4, waru: 7, banked: 80, decor: 30, quantity: 99, fixed: false },
            ["Orange Mushroom House"]: { type: "building", name: "Orange Mushroom House", level: 2, order: 2, tiles: 4, waru: 3, banked: 60, decor: 5, quantity: 99, fixed: false },
            ["Monster Barn"]: { type: "building", name: "Monster Barn", level: 3, order: 2, tiles: 4, waru: 0, banked: 0, decor: 0, quantity: 1, fixed: false },
            ["Sturdy Straw House"]: { type: "building", name: "Sturdy Straw House", level: 3, order: 2, tiles: 4, waru: 5, banked: 50, decor: 10, quantity: 99, fixed: false },
            ["Red Mushroom Manor"]: { type: "building", name: "Red Mushroom Manor", level: 3, order: 2, tiles: 4, waru: 6, banked: 100, decor: 10, quantity: 99, fixed: false },
            ["Rien Hot Springs"]: { type: "building", name: "Rien Hot Springs", level: 3, order: 2, tiles: 4, waru: 25, banked: 2200, decor: 200, quantity: 198, fixed: false },
            ["Mu Lung Barber Shop"]: { type: "building", name: "Mu Lung Barber Shop", level: 3, order: 2, tiles: 4, waru: 27, banked: 1800, decor: 200, quantity: 198, fixed: false },
            ["Tip-Top Balloon Shop"]: { type: "building", name: "Tip-Top Balloon Shop", level: 3, order: 2, tiles: 4, waru: 35, banked: 3000, decor: 400, quantity: 198, fixed: false },
            ["Floatland Manor"]: { type: "building", name: "Floatland Manor", level: 3, order: 3, tiles: 9, waru: 23, banked: 2000, decor: 150, quantity: 198, fixed: false },
            ["Healthy Hospital"]: { type: "building", name: "Healthy Hospital", level: 3, order: 3, tiles: 9, waru: 44, banked: 3500, decor: 250, quantity: 198, fixed: false },
            ["Monster Manor"]: { type: "building", name: "Monster Manor", level: 3, order: 3, tiles: 9, waru: 42, banked: 5000, decor: 400, quantity: 198, fixed: false },
            ["Mr. Teddy X"]: { type: "building", name: "Mr. Teddy X", level: 3, order: 3, tiles: 9, waru: 48, banked: 4500, decor: 500, quantity: 198, fixed: false },
            ["Ms. Teddy X"]: { type: "building", name: "Ms. Teddy X", level: 3, order: 3, tiles: 9, waru: 52, banked: 3500, decor: 500, quantity: 198, fixed: false },
            ["Yellow Submarine"]: { type: "building", name: "Yellow Submarine", level: 3, order: 4, tiles: 16, waru: 72, banked: 7000, decor: 900, quantity: 198, fixed: false },
            ["Refreshing Oasis"]: { type: "building", name: "Refreshing Oasis", level: 3, order: 4, tiles: 16, waru: 76, banked: 6000, decor: 1000, quantity: 198, fixed: false },
            ["Yeti Super Stage"]: { type: "building", name: "Yeti Super Stage", level: 3, order: 4, tiles: 16, waru: 82, banked: 5000, decor: 700, quantity: 198, fixed: false },
            ["Nautilus Harbor"]: { type: "building", name: "Nautilus Harbor", level: 3, order: 4, tiles: 16, waru: 91, banked: 5000, decor: 1500, quantity: 198, fixed: false },
            ["Shinsoo's Nest"]: { type: "building", name: "Shinsoo's Nest", level: 3, order: 4, tiles: 16, waru: 87, banked: 7000, decor: 2000, quantity: 198, fixed: false },
            ["Ludibrium Toy House"]: { type: "building", name: "Ludibrium Toy House", level: 3, order: 4, tiles: 16, waru: 183, banked: 2000, decor: 4000, quantity: 198, fixed: false },
            ["Orbis Flying Garden"]: { type: "building", name: "Orbis Flying Garden", level: 3, order: 4, tiles: 16, waru: 105, banked: 5000, decor: 1500, quantity: 198, fixed: false },
            ["Ereve Fountain Garden"]: { type: "building", name: "Ereve Fountain Garden", level: 3, order: 4, tiles: 16, waru: 70, banked: 4500, decor: 500, quantity: 198, fixed: false },
            ["Aqua Road Castle"]: { type: "building", name: "Aqua Road Castle", level: 3, order: 4, tiles: 16, waru: 91, banked: 4000, decor: 1200, quantity: 198, fixed: false },
            ["Zakum's Cave"]: { type: "building", name: "Zakum's Cave", level: 3, order: 4, tiles: 16, waru: 60, banked: 12000, decor: 500, quantity: 198, fixed: false },
            ["Windmill"]: { type: "building", name: "Windmill", level: 4, order: 2, tiles: 4, waru: 10, banked: 70, decor: 20, quantity: 99, fixed: false },
            ["Chopper Chalet"]: { type: "building", name: "Chopper Chalet", level: 5, order: 2, tiles: 4, waru: 8, banked: 120, decor: 10, quantity: 99, fixed: false },
            ["Drip Brew Coffee House"]: { type: "building", name: "Drip Brew Coffee House", level: 5, order: 3, tiles: 9, waru: 10, banked: 170, decor: 10, quantity: 99, fixed: false },
            ["Red Brick Abode"]: { type: "building", name: "Red Brick Abode", level: 6, order: 2, tiles: 4, waru: 10, banked: 100, decor: 15, quantity: 99, fixed: false },
            ["My House (Homestead)"]: { type: "building", name: "My House (Homestead)", level: 7, order: 5, tiles: 25, waru: 0, banked: 0, decor: 0, quantity: 1, fixed: true },
            ["Lofty Brick House"]: { type: "building", name: "Lofty Brick House", level: 7, order: 2, tiles: 4, waru: 8, banked: 110, decor: 30, quantity: 99, fixed: false },
            ["Purple Bathhouse"]: { type: "building", name: "Purple Bathhouse", level: 8, order: 2, tiles: 4, waru: 9, banked: 110, decor: 20, quantity: 99, fixed: false },
            ["Blue Bathhouse"]: { type: "building", name: "Blue Bathhouse", level: 9, order: 2, tiles: 4, waru: 12, banked: 100, decor: 15, quantity: 99, fixed: false },
            ["Big Apple Fruit Shop"]: { type: "building", name: "Big Apple Fruit Shop", level: 10, order: 2, tiles: 4, waru: 10, banked: 160, decor: 30, quantity: 99, fixed: false },
            ["Octo-Pot Seafood"]: { type: "building", name: "Octo-Pot Seafood", level: 10, order: 2, tiles: 4, waru: 13, banked: 140, decor: 5, quantity: 99, fixed: false },
            ["Henesys Bowman Guild"]: { type: "building", name: "Henesys Bowman Guild", level: 10, order: 3, tiles: 9, waru: 15, banked: 350, decor: 5, quantity: 99, fixed: false },
            ["Rudi Beauty Salon"]: { type: "building", name: "Rudi Beauty Salon", level: 10, order: 3, tiles: 9, waru: 14, banked: 250, decor: 70, quantity: 99, fixed: false },
            ["Santa's Gift Shop"]: { type: "building", name: "Santa's Gift Shop", level: 10, order: 3, tiles: 9, waru: 16, banked: 200, decor: 30, quantity: 99, fixed: false },
            ["Ghastly Ghost Gables"]: { type: "building", name: "Ghastly Ghost Gables", level: 10, order: 4, tiles: 16, waru: 45, banked: 3000, decor: 500, quantity: 198, fixed: false },
            ["Grand Gourd Gables"]: { type: "building", name: "Grand Gourd Gables", level: 10, order: 4, tiles: 16, waru: 43, banked: 5000, decor: 350, quantity: 198, fixed: false },
            ["Blossom House"]: { type: "building", name: "Blossom House", level: 11 , order: 2, tiles: 4, waru: 12, banked: 180, decor: 25, quantity: 99, fixed: false },
            ["Tip Top Chop Shop"]: { type: "building", name: "Tip Top Chop Shop", level: 11, order: 2, tiles: 4, waru: 11, banked: 190, decor: 25, quantity: 99, fixed: false },
            ["Pink Angel Place"]: { type: "building", name: "Pink Angel Place", level: 12, order: 2, tiles: 4, waru: 10, banked: 210, decor: 30, quantity: 99, fixed: false },
            ["Full Moon Song Pyun Shop"]: { type: "building", name: "Full Moon Song Pyun Shop", level: 12, order: 3, tiles: 9, waru: 12, banked: 250, decor: 30, quantity: 99, fixed: false },
            ["Gingerbread Gables"]: { type: "building", name: "Gingerbread Gables", level: 13, order: 2, tiles: 4, waru: 14, banked: 200, decor: 20, quantity: 99, fixed: false },
            ["Rien's Tonic Shop"]: { type: "building", name: "Rien's Tonic Shop", level: 13, order: 2, tiles: 4, waru: 15, banked: 210, decor: 20, quantity: 99, fixed: false },
            ["My House (Manor)"]: { type: "building", name: "My House (Manor)", level: 14, order: 5, tiles: 25, waru: 0, banked: 0, decor: 0, quantity: 1, fixed: true },
            ["Blue Mushroom Mansion"]: { type: "building", name: "Blue Mushroom Mansion", level: 14, order: 2, tiles: 4, waru: 12, banked: 240, decor: 10, quantity: 99, fixed: false },
            ["Mushroom Tower"]: { type: "building", name: "Mushroom Tower", level: 14, order: 4, tiles: 16, waru: 12, banked: 300, decor: 10, quantity: 99, fixed: false },
            ["Ariant Fabrics (I)"]: { type: "building", name: "Ariant Fabrics (I)", level: 15, order: 2, tiles: 4, waru: 12, banked: 360, decor: 5, quantity: 99, fixed: false },
            ["Hanok House"]: { type: "building", name: "Hanok House", level: 15, order: 2, tiles: 4, waru: 17, banked: 300, decor: 50, quantity: 99, fixed: false },
            ["Fantasy Park Viking"]: { type: "building", name: "Fantasy Park Viking", level: 15, order: 3, tiles: 9, waru: 18, banked: 600, decor: 10, quantity: 99, fixed: false },
            ["Alchemist's Abode"]: { type: "building", name: "Alchemist's Abode", level: 15, order: 3, tiles: 9, waru: 20, banked: 300, decor: 15, quantity: 99, fixed: false },
            ["Five-Slime Hotel"]: { type: "building", name: "Five-Slime Hotel", level: 15, order: 3, tiles: 9, waru: 18, banked: 400, decor: 25, quantity: 99, fixed: false },
            ["Creamy Cake Chateau"]: { type: "building", name: "Creamy Cake Chateau", level: 15, order: 3, tiles: 9, waru: 20, banked: 360, decor: 35, quantity: 99, fixed: false },
            ["Florina Lighthouse"]: { type: "building", name: "Florina Lighthouse", level: 15, order: 3, tiles: 9, waru: 15, banked: 250, decor: 15, quantity: 99, fixed: false },
            ["Leafre Airship"]: { type: "building", name: "Leafre Airship", level: 15, order: 4, tiles: 16, waru: 50, banked: 4000, decor: 500, quantity: 198, fixed: false },
            ["Fish Shop"]: { type: "building", name: "Fish Shop", level: 16, order: 2, tiles: 4, waru: 15, banked: 550, decor: 10, quantity: 99, fixed: false },
            ["Mushking Empire Outpost"]: { type: "building", name: "Mushking Empire Outpost", level: 16, order: 3, tiles: 9, waru: 16, banked: 700, decor: 10, quantity: 99, fixed: false },
            ["Nova Safehouse"]: { type: "building", name: "Nova Safehouse", level: 17, order: 2, tiles: 4, waru: 18, banked: 300, decor: 20, quantity: 99, fixed: false },
            ["Elluel House"]: { type: "building", name: "Elluel House", level: 18, order: 2, tiles: 4, waru: 15, banked: 330, decor: 40, quantity: 99, fixed: false },
            ["Ariant Fabrics (II)"]: { type: "building", name: "Ariant Fabrics (II)", level: 18, order: 2, tiles: 4, waru: 16, banked: 300, decor: 40, quantity: 99, fixed: false },
            ["Happy Homestead"]: { type: "building", name: "Happy Homestead", level: 19, order: 2, tiles: 4, waru: 20, banked: 340, decor: 20, quantity: 99, fixed: false },
            ["Melody Manor"]: { type: "building", name: "Melody Manor", level: 20, order: 2, tiles: 4, waru: 17, banked: 300, decor: 50, quantity: 99, fixed: false },
            ["Aqua Roadhouse"]: { type: "building", name: "Aqua Roadhouse", level: 20, order: 3, tiles: 9, waru: 25, banked: 550, decor: 50, quantity: 99, fixed: false },
            ["Fun Factory"]: { type: "building", name: "Fun Factory", level: 20, order: 3, tiles: 9, waru: 20, banked: 400, decor: 40, quantity: 99, fixed: false },
            ["Ariant Castle"]: { type: "building", name: "Ariant Castle", level: 20, order: 4, tiles: 16, waru: 28, banked: 500, decor: 50, quantity: 99, fixed: false },
            ["Shaved Ice Chateau"]: { type: "building", name: "Shaved Ice Chateau", level: 20, order: 4, tiles: 16, waru: 25, banked: 500, decor: 45, quantity: 99, fixed: false },
            ["Magatia Workshop"]: { type: "building", name: "Magatia Workshop", level: 20, order: 4, tiles: 16, waru: 70, banked: 2000, decor: 100, quantity: 198, fixed: false },
            ["My House (Mighty Manor)"]: { type: "building", name: "My House (Mighty Manor)", level: 21, order: 5, tiles: 25, waru: 0, banked: 0, decor: 0, quantity: 1, fixed: true },
            ["Santa's Special Shop"]: { type: "building", name: "Santa's Special Shop", level: 21, order: 2, tiles: 4, waru: 22, banked: 450, decor: 40, quantity: 99, fixed: false },
            ["Farmer's House"]: { type: "building", name: "Farmer's House", level: 21, order: 2, tiles: 4, waru: 21, banked: 460, decor: 40, quantity: 99, fixed: false },
            ["Tick Tock Townhouse"]: { type: "building", name: "Tick Tock Townhouse", level: 22, order: 2, tiles: 4, waru: 25, banked: 400, decor: 35, quantity: 99, fixed: false },
            ["Mu Lung Dojo"]: { type: "building", name: "Mu Lung Dojo", level: 23, order: 2, tiles: 4, waru: 23, banked: 450, decor: 35, quantity: 99, fixed: false },
            ["Icy Treat Retreat (I)"]: { type: "building", name: "Icy Treat Retreat (I)", level: 24, order: 2, tiles: 4, waru: 20, banked: 500, decor: 40, quantity: 99, fixed: false },
            ["Beatdown Shop"]: { type: "building", name: "Beatdown Shop", level: 25, order: 3, tiles: 9, waru: 30, banked: 750, decor: 30, quantity: 99, fixed: false },
            ["Very Berry Vineyard"]: { type: "building", name: "Very Berry Vineyard", level: 25, order: 3, tiles: 9, waru: 25, banked: 600, decor: 40, quantity: 99, fixed: false },
            ["Chryse Coliseum"]: { type: "building", name: "Chryse Coliseum", level: 25, order: 3, tiles: 9, waru: 30, banked: 750, decor: 55, quantity: 99, fixed: false },
            ["Omega Sector"]: { type: "building", name: "Omega Sector", level: 25, order: 4, tiles: 16, waru: 45, banked: 900, decor: 60, quantity: 99, fixed: false },
            ["Tip-Top Toy Shop"]: { type: "building", name: "Tip-Top Toy Shop", level: 26, order: 2, tiles: 4, waru: 22, banked: 500, decor: 50, quantity: 99, fixed: false },
            ["Edelstein Air Field"]: { type: "building", name: "Edelstein Air Field", level: 27, order: 3, tiles: 9, waru: 33, banked: 800, decor: 20, quantity: 99, fixed: false },
            ["Big Top Tenement"]: { type: "building", name: "Big Top Tenement", level: 28, order: 2, tiles: 4, waru: 28, banked: 500, decor: 30, quantity: 99, fixed: false },
            ["Big Bowl Noodles"]: { type: "building", name: "Big Bowl Noodles", level: 29, order: 2, tiles: 4, waru: 30, banked: 450, decor: 40, quantity: 99, fixed: false },
            ["My House (Country Mansion)"]: { type: "building", name: "My House (Country Mansion)", level: 30, order: 5, tiles: 25, waru: 0, banked: 0, decor: 0, quantity: 1, fixed: true },
            ["Lumiere"]: { type: "building", name: "Lumiere", level: 30, order: 3, tiles: 9, waru: 35, banked: 900, decor: 30, quantity: 99, fixed: false },
            ["Icy Treat Retreat (II)"]: { type: "building", name: "Icy Treat Retreat (II)", level: 30, order: 3, tiles: 9, waru: 32, banked: 700, decor: 40, quantity: 99, fixed: false },
            ["Wholesome Milk Farm"]: { type: "building", name: "Wholesome Milk Farm", level: 35, order: 2, tiles: 4, waru: 40, banked: 700, decor: 50, quantity: 99, fixed: false },
            ["The Secret Garden"]: { type: "building", name: "The Secret Garden", level: 35, order: 4, tiles: 16, waru: 82, banked: 6000, decor: 1500, quantity: 99, fixed: false }
        }
    }
};
export const myHouseNames = {
    15: "My House",
    17: "My House (Homestead)",
    19: "My House (Manor)",
    22: "My House (Mighty Manor)",
    25: "My House (Country Mansion)"
};
export const myHouseRoot = 0;

const beautyThresholds = [
    0, 100, 200, 500, 1000, 1700, 2600, 3700, 5000, 6500,
    8200, 10100, 12200, 14500, 17000, 19700, 22600, 25700, 29100, 32800,
    36800, 41100, 45700, 50600, 55800, 61400, 67400, 73800, 80600, 87900,
    95700, 104000, 112800, 122200, 132200, 142800, 154100, 166100, 178900, 192500,
    207000, 222400, 238800, 256200, 274700, 294400, 315300, 337500, 361100, 386200,
    412900, 441300, 471500, 503600, 537700, 574000, 612600, 653600, 697200, 743500,
    792700, 845000, 900600, 959700, 959700
];
function beautyTier(beauty) {
    if (beauty >= 959700) {
        return 64;
    } else if (beauty >= 900600) {
        return 62;
    } else if (beauty >= 845000) {
        return 61;
    } else if (beauty >= 792700) {
        return 60;
    } else if (beauty >= 743500) {
        return 59;
    } else if (beauty >= 697200) {
        return 58;
    } else if (beauty >= 653600) {
        return 57;
    } else if (beauty >= 612600) {
        return 56;
    } else if (beauty >= 574000) {
        return 55;
    } else if (beauty >= 537700) {
        return 54;
    } else if (beauty >= 503600) {
        return 53;
    } else if (beauty >= 471500) {
        return 52;
    } else if (beauty >= 441300) {
        return 51;
    } else if (beauty >= 412900) {
        return 50;
    } else if (beauty >= 386200) {
        return 49;
    } else if (beauty >= 361100) {
        return 48;
    } else if (beauty >= 337500) {
        return 47;
    } else if (beauty >= 315300) {
        return 46;
    } else if (beauty >= 294400) {
        return 45;
    } else if (beauty >= 274700) {
        return 44;
    } else if (beauty >= 256200) {
        return 43;
    } else if (beauty >= 238800) {
        return 42;
    } else if (beauty >= 222400) {
        return 41;
    } else if (beauty >= 207000) {
        return 40;
    } else if (beauty >= 192500) {
        return 39;
    } else if (beauty >= 178900) {
        return 38;
    } else if (beauty >= 166100) {
        return 37;
    } else if (beauty >= 154100) {
        return 36;
    } else if (beauty >= 142800) {
        return 35;
    } else if (beauty >= 132200) {
        return 34;
    } else if (beauty >= 122200) {
        return 33;
    } else if (beauty >= 112800) {
        return 32;
    } else if (beauty >= 104000) {
        return 31;
    } else if (beauty >= 95700) {
        return 30;
    } else if (beauty >= 87900) {
        return 29;
    } else if (beauty >= 80600) {
        return 28;
    } else if (beauty >= 73800) {
        return 27;
    } else if (beauty >= 67400) {
        return 26;
    } else if (beauty >= 61400) {
        return 25;
    } else if (beauty >= 55800) {
        return 24;
    } else if (beauty >= 50600) {
        return 23;
    } else if (beauty >= 45700) {
        return 22;
    } else if (beauty >= 41100) {
        return 21;
    } else if (beauty >= 36800) {
        return 20;
    } else if (beauty >= 32800) {
        return 19;
    } else if (beauty >= 29100) {
        return 18;
    } else if (beauty >= 25700) {
        return 17;
    } else if (beauty >= 22600) {
        return 16;
    } else if (beauty >= 19700) {
        return 15;
    } else if (beauty >= 17000) {
        return 14;
    } else if (beauty >= 14500) {
        return 13;
    } else if (beauty >= 12200) {
        return 12;
    } else if (beauty >= 10100) {
        return 11;
    } else if (beauty >= 8200) {
        return 10;
    } else if (beauty >= 6500) {
        return 9;
    } else if (beauty >= 5000) {
        return 8;
    } else if (beauty >= 3700) {
        return 7;
    } else if (beauty >= 2600) {
        return 6;
    } else if (beauty >= 1700) {
        return 5;
    } else if (beauty >= 1000) {
        return 4;
    } else if (beauty >= 500) {
        return 3;
    } else if (beauty >= 200) {
        return 2;
    } else if (beauty >= 100) {
        return 1;
    } else if (beauty >= 0) {
        return 0;
    }
}
export function beautyDetails(totalBeauty) {
    const tier = beautyTier(totalBeauty);
    return {
        total: totalBeauty,
        next: Math.max(0, beautyThresholds[Math.min(tier + 1, beautyThresholds.length - 1)] - totalBeauty),
        choices: Math.ceil(tier / 2),
        banked: 2 * tier,
        discount: Math.ceil(tier / 8),
        visit: tier
    };
}

export function networkDecor(decor, paths) {
    return Math.min(decor, Math.floor(paths * (200 + 0.02 * decor)));
}
export function networkWaru(waru, paths) {
    return Math.min(waru, Math.floor(paths * (5 + 0.02 * waru)));
}
export const aufhebenWaru = 1;