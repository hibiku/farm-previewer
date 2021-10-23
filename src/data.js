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

export const objectTypes = ["building", "decor", "road"];
export const objectDisplayTypes = {
    [""]: "Free cell",
    myHouse: "My House",
    building: "Building",
    decor: "Decor",
    road: "Road"
};
export const objectData = {
    myHouse: {
        names: [""],
        props: {
            [""]: {
                level: 1, order: 5, space: 25, waru: 0, banked: 0, decor: 0, limit: 1
            }
        }
    },
    building: {
        names: [
            "Green Mushroom Hut", "Henesys Homestead", "Orange Mushroom House",
            "Monster Barn", "Sturdy Straw House", "Red Mushroom Manor",
            "Rien Hot Springs", "Mu Lung Barber Shop", "Tip-Top Balloon Shop",
            "Floatland Manor", "Healthy Hospital", "Monster Manor",
            "Mr. Teddy X", "Ms. Teddy X", "Yellow Submarine",
            "Refreshing Oasis", "Yeti Super Stage", "Nautilus Harbor",
            "Shinsoo's Nest", "Ludibrium Toy House", "Orbis Flying Garden",
            "Ereve Fountain Garden", "Aqua Road Castle", "Zakum's Cave",
            "Windmill", "Chopper Chalet", "Drip Brew Coffee House",
            "Red Brick Abode", "Lofty Brick House", "Purple Bathhouse",
            "Blue Bathhouse", "Big Apple Fruit Shop", "Octo-Pot Seafood",
            "Henesys Bowman Guild", "Rudi Beauty Salon", "Santa's Gift Shop",
            "Ghastly Ghost Gables", "Grand Gourd Gables", "Blossom House",
            "Tip Top Chop Shop", "Pink Angel Place", "Full Moon Song Pyun Shop",
            "Gingerbread Gables", "Rien's Tonic Shop", "Blue Mushroom Mansion",
            "Mushroom Tower", "Ariant Fabrics (I)", "Hanok House",
            "Fantasy Park Viking", "Alchemist's Abode", "Five-Slime Hotel",
            "Creamy Cake Chateau", "Florina Lighthouse", "Leafre Airship",
            "Fish Shop", "Mushking Empire Outpost", "Nova Safehouse",
            "Elluel House", "Ariant Fabrics (II)", "Happy Homestead",
            "Melody Manor", "Aqua Roadhouse", "Fun Factory",
            "Ariant Castle", "Shaved Ice Chateau", "Magatia Workshop",
            "Santa's Special Shop", "Farmer's House", "Tick Tock Townhouse",
            "Mu Lung Dojo", "Icy Treat Retreat (I)", "Beatdown Shop",
            "Very Berry Vineyard", "Chryse Coliseum", "Omega Sector",
            "Tip-Top Toy Shop", "Edelstein Air Field", "Big Top Tenement",
            "Big Bowl Noodles", "Lumiere", "Icy Treat Retreat (II)",
            "Wholesome Milk Farm", "The Secret Garden"
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
        props: {
            ["Green Mushroom Hut"]: {
                level: 1, order: 2, space: 4, waru: 2, banked: 50, decor: 5, limit: 99
            },
            ["Henesys Homestead"]: {
                level: 2, order: 2, space: 4, waru: 7, banked: 80, decor: 30, limit: 99
            },
            ["Orange Mushroom House"]: {
                level: 2, order: 2, space: 4, waru: 3, banked: 60, decor: 5, limit: 99
            },
            ["Monster Barn"]: {
                level: 3, order: 2, space: 4, waru: 0, banked: 0, decor: 0, limit: 1
            },
            ["Sturdy Straw House"]: {
                level: 3, order: 2, space: 4, waru: 5, banked: 50, decor: 10, limit: 99
            },
            ["Red Mushroom Manor"]: {
                level: 3, order: 2, space: 4, waru: 6, banked: 100, decor: 10, limit: 99
            },
            ["Rien Hot Springs"]: {
                level: 3, order: 2, space: 4, waru: 25, banked: 2200, decor: 200, limit: 198
            },
            ["Mu Lung Barber Shop"]: {
                level: 3, order: 2, space: 4, waru: 27, banked: 1800, decor: 200, limit: 198
            },
            ["Tip-Top Balloon Shop"]: {
                level: 3, order: 2, space: 4, waru: 35, banked: 3000, decor: 400, limit: 198
            },
            ["Floatland Manor"]: {
                level: 3, order: 3, space: 9, waru: 23, banked: 2000, decor: 150, limit: 198
            },
            ["Healthy Hospital"]: {
                level: 3, order: 3, space: 9, waru: 44, banked: 3500, decor: 250, limit: 198
            },
            ["Monster Manor"]: {
                level: 3, order: 3, space: 9, waru: 42, banked: 5000, decor: 400, limit: 198
            },
            ["Mr. Teddy X"]: {
                level: 3, order: 3, space: 9, waru: 48, banked: 4500, decor: 500, limit: 198
            },
            ["Ms. Teddy X"]: {
                level: 3, order: 3, space: 9, waru: 52, banked: 3500, decor: 500, limit: 198
            },
            ["Yellow Submarine"]: {
                level: 3, order: 4, space: 16, waru: 72, banked: 7000, decor: 900, limit: 198
            },
            ["Refreshing Oasis"]: {
                level: 3, order: 4, space: 16, waru: 76, banked: 6000, decor: 1000, limit: 198
            },
            ["Yeti Super Stage"]: {
                level: 3, order: 4, space: 16, waru: 82, banked: 5000, decor: 700, limit: 198
            },
            ["Nautilus Harbor"]: {
                level: 3, order: 4, space: 16, waru: 91, banked: 5000, decor: 1500, limit: 198
            },
            ["Shinsoo's Nest"]: {
                level: 3, order: 4, space: 16, waru: 87, banked: 7000, decor: 2000, limit: 198
            },
            ["Ludibrium Toy House"]: {
                level: 3, order: 4, space: 16, waru: 183, banked: 2000, decor: 4000, limit: 198
            },
            ["Orbis Flying Garden"]: {
                level: 3, order: 4, space: 16, waru: 105, banked: 5000, decor: 1500, limit: 198
            },
            ["Ereve Fountain Garden"]: {
                level: 3, order: 4, space: 16, waru: 70, banked: 4500, decor: 500, limit: 198
            },
            ["Aqua Road Castle"]: {
                level: 3, order: 4, space: 16, waru: 91, banked: 4000, decor: 1200, limit: 198
            },
            ["Zakum's Cave"]: {
                level: 3, order: 4, space: 16, waru: 60, banked: 12000, decor: 500, limit: 198
            },
            ["Windmill"]: {
                level: 4, order: 2, space: 4, waru: 10, banked: 70, decor: 20, limit: 99
            },
            ["Chopper Chalet"]: {
                level: 5, order: 2, space: 4, waru: 8, banked: 120, decor: 10, limit: 99
            },
            ["Drip Brew Coffee House"]: {
                level: 5, order: 3, space: 9, waru: 10, banked: 170, decor: 10, limit: 99
            },
            ["Red Brick Abode"]: {
                level: 6, order: 2, space: 4, waru: 10, banked: 100, decor: 15, limit: 99
            },
            ["Lofty Brick House"]: {
                level: 7, order: 2, space: 4, waru: 8, banked: 110, decor: 30, limit: 99
            },
            ["Purple Bathhouse"]: {
                level: 8, order: 2, space: 4, waru: 9, banked: 110, decor: 20, limit: 99
            },
            ["Blue Bathhouse"]: {
                level: 9, order: 2, space: 4, waru: 12, banked: 100, decor: 15, limit: 99
            },
            ["Big Apple Fruit Shop"]: {
                level: 10, order: 2, space: 4, waru: 10, banked: 160, decor: 30, limit: 99
            },
            ["Octo-Pot Seafood"]: {
                level: 10, order: 2, space: 4, waru: 13, banked: 140, decor: 5, limit: 99
            },
            ["Henesys Bowman Guild"]: {
                level: 10, order: 3, space: 9, waru: 15, banked: 350, decor: 5, limit: 99
            },
            ["Rudi Beauty Salon"]: {
                level: 10, order: 3, space: 9, waru: 14, banked: 250, decor: 70, limit: 99
            },
            ["Santa's Gift Shop"]: {
                level: 10, order: 3, space: 9, waru: 16, banked: 200, decor: 30, limit: 99
            },
            ["Ghastly Ghost Gables"]: {
                level: 10, order: 4, space: 16, waru: 45, banked: 3000, decor: 500, limit: 198
            },
            ["Grand Gourd Gables"]: {
                level: 10, order: 4, space: 16, waru: 43, banked: 5000, decor: 350, limit: 198
            },
            ["Blossom House"]: {
                level: 11 , order: 2, space: 4, waru: 12, banked: 180, decor: 25, limit: 99
            },
            ["Tip Top Chop Shop"]: {
                level: 11, order: 2, space: 4, waru: 11, banked: 190, decor: 25, limit: 99
            },
            ["Pink Angel Place"]: {
                level: 12, order: 2, space: 4, waru: 10, banked: 210, decor: 30, limit: 99
            },
            ["Full Moon Song Pyun Shop"]: {
                level: 12, order: 3, space: 9, waru: 12, banked: 250, decor: 30, limit: 99
            },
            ["Gingerbread Gables"]: {
                level: 13, order: 2, space: 4, waru: 14, banked: 200, decor: 20, limit: 99
            },
            ["Rien's Tonic Shop"]: {
                level: 13, order: 2, space: 4, waru: 15, banked: 210, decor: 20, limit: 99
            },
            ["Blue Mushroom Mansion"]: {
                level: 14, order: 2, space: 4, waru: 12, banked: 240, decor: 10, limit: 99
            },
            ["Mushroom Tower"]: {
                level: 14, order: 4, space: 16, waru: 12, banked: 300, decor: 10, limit: 99
            },
            ["Ariant Fabrics (I)"]: {
                level: 15, order: 2, space: 4, waru: 12, banked: 360, decor: 5, limit: 99
            },
            ["Hanok House"]: {
                level: 15, order: 2, space: 4, waru: 17, banked: 300, decor: 50, limit: 99
            },
            ["Fantasy Park Viking"]: {
                level: 15, order: 3, space: 9, waru: 18, banked: 600, decor: 10, limit: 99
            },
            ["Alchemist's Abode"]: {
                level: 15, order: 3, space: 9, waru: 20, banked: 300, decor: 15, limit: 99
            },
            ["Five-Slime Hotel"]: {
                level: 15, order: 3, space: 9, waru: 18, banked: 400, decor: 25, limit: 99
            },
            ["Creamy Cake Chateau"]: {
                level: 15, order: 3, space: 9, waru: 20, banked: 360, decor: 35, limit: 99
            },
            ["Florina Lighthouse"]: {
                level: 15, order: 3, space: 9, waru: 15, banked: 250, decor: 15, limit: 99
            },
            ["Leafre Airship"]: {
                level: 15, order: 4, space: 16, waru: 50, banked: 4000, decor: 500, limit: 198
            },
            ["Fish Shop"]: {
                level: 16, order: 2, space: 4, waru: 15, banked: 550, decor: 10, limit: 99
            },
            ["Mushking Empire Outpost"]: {
                level: 16, order: 3, space: 9, waru: 16, banked: 700, decor: 10, limit: 99
            },
            ["Nova Safehouse"]: {
                level: 17, order: 2, space: 4, waru: 18, banked: 300, decor: 20, limit: 99
            },
            ["Elluel House"]: {
                level: 18, order: 2, space: 4, waru: 15, banked: 330, decor: 40, limit: 99
            },
            ["Ariant Fabrics (II)"]: {
                level: 18, order: 2, space: 4, waru: 16, banked: 300, decor: 40, limit: 99
            },
            ["Happy Homestead"]: {
                level: 19, order: 2, space: 4, waru: 20, banked: 340, decor: 20, limit: 99
            },
            ["Melody Manor"]: {
                level: 20, order: 2, space: 4, waru: 17, banked: 300, decor: 50, limit: 99
            },
            ["Aqua Roadhouse"]: {
                level: 20, order: 3, space: 9, waru: 25, banked: 550, decor: 50, limit: 99
            },
            ["Fun Factory"]: {
                level: 20, order: 3, space: 9, waru: 20, banked: 400, decor: 40, limit: 99
            },
            ["Ariant Castle"]: {
                level: 20, order: 4, space: 16, waru: 28, banked: 500, decor: 50, limit: 99
            },
            ["Shaved Ice Chateau"]: {
                level: 20, order: 4, space: 16, waru: 25, banked: 500, decor: 45, limit: 99
            },
            ["Magatia Workshop"]: {
                level: 20, order: 4, space: 16, waru: 70, banked: 2000, decor: 100, limit: 198
            },
            ["Santa's Special Shop"]: {
                level: 21, order: 2, space: 4, waru: 22, banked: 450, decor: 40, limit: 99
            },
            ["Farmer's House"]: {
                level: 21, order: 2, space: 4, waru: 21, banked: 460, decor: 40, limit: 99
            },
            ["Tick Tock Townhouse"]: {
                level: 22, order: 2, space: 4, waru: 25, banked: 400, decor: 35, limit: 99
            },
            ["Mu Lung Dojo"]: {
                level: 23, order: 2, space: 4, waru: 23, banked: 450, decor: 35, limit: 99
            },
            ["Icy Treat Retreat (I)"]: {
                level: 24, order: 2, space: 4, waru: 20, banked: 500, decor: 40, limit: 99
            },
            ["Beatdown Shop"]: {
                level: 25, order: 3, space: 9, waru: 30, banked: 750, decor: 30, limit: 99
            },
            ["Very Berry Vineyard"]: {
                level: 25, order: 3, space: 9, waru: 25, banked: 600, decor: 40, limit: 99
            },
            ["Chryse Coliseum"]: {
                level: 25, order: 3, space: 9, waru: 30, banked: 750, decor: 55, limit: 99
            },
            ["Omega Sector"]: {
                level: 25, order: 4, space: 16, waru: 45, banked: 900, decor: 60, limit: 99
            },
            ["Tip-Top Toy Shop"]: {
                level: 26, order: 2, space: 4, waru: 22, banked: 500, decor: 50, limit: 99
            },
            ["Edelstein Air Field"]: {
                level: 27, order: 3, space: 9, waru: 33, banked: 800, decor: 20, limit: 99
            },
            ["Big Top Tenement"]: {
                level: 28, order: 2, space: 4, waru: 28, banked: 500, decor: 30, limit: 99
            },
            ["Big Bowl Noodles"]: {
                level: 29, order: 2, space: 4, waru: 30, banked: 450, decor: 40, limit: 99
            },
            ["Lumiere"]: {
                level: 30, order: 3, space: 9, waru: 35, banked: 900, decor: 30, limit: 99
            },
            ["Icy Treat Retreat (II)"]: {
                level: 30, order: 3, space: 9, waru: 32, banked: 700, decor: 40, limit: 99
            },
            ["Wholesome Milk Farm"]: {
                level: 35, order: 2, space: 4, waru: 40, banked: 700, decor: 50, limit: 99
            },
            ["The Secret Garden"]: {
                level: 35, order: 4, space: 16, waru: 82, banked: 6000, decor: 1500, limit: 99
            }
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
        props: {
            ["Lil Pine Tree"]: { level: 2, order: 1, space: 1, waru: 0, banked: 0, decor: 8, limit: 99 },
            ["Pine Tree"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 12, limit: 99 },
            ["Orange Mini Mushroom"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 9, limit: 99 },
            ["Heartfelt Garden"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 1000, limit: 198 },
            ["Floral Archway"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 1500, limit: 198 },
            ["Winged Archway"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 2000, limit: 198 },
            ["Rice Candy Set"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 2700, limit: 198 },
            ["Sky-High Flower"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 1000, limit: 198 },
            ["Stone Lantern"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 1500, limit: 198 },
            ["Buddy Bloom"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 2000, limit: 198 },
            ["Big Bass"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 2700, limit: 198 },
            ["Cannon"]: { level: 3, order: 1, space: 1, waru: 0, banked: 0, decor: 3200, limit: 198 },
            ["Nestled Egg"]: { level: 3, order: 2, space: 4, waru: 0, banked: 0, decor: 3500, limit: 198 },
            ["Snowman Mask"]: { level: 3, order: 2, space: 4, waru: 0, banked: 0, decor: 4200, limit: 198 },
            ["Fishin' Pepe"]: { level: 3, order: 3, space: 9, waru: 0, banked: 0, decor: 4600, limit: 198 },
            ["Christmas Tree"]: { level: 3, order: 2, space: 4, waru: 0, banked: 0, decor: 4800, limit: 198 },
            ["Aran's Legacy"]: { level: 3, order: 2, space: 4, waru: 0, banked: 0, decor: 6000, limit: 198 },
            ["Mount Monsmore"]: { level: 3, order: 4, space: 16, waru: 0, banked: 0, decor: 13000, limit: 198 },
            ["Elluel Rune Tree"]: { level: 3, order: 4, space: 16, waru: 0, banked: 0, decor: 13000, limit: 198 },
            ["White Cube"]: { level: 4, order: 1, space: 1, waru: 0, banked: 0, decor: 15, limit: 99 },
            ["Red Cube"]: { level: 4, order: 1, space: 1, waru: 0, banked: 0, decor: 15, limit: 99 },
            ["Green Cube"]: { level: 4, order: 1, space: 1, waru: 0, banked: 0, decor: 15, limit: 99 },
            ["Orange Cube"]: { level: 4, order: 1, space: 1, waru: 0, banked: 0, decor: 15, limit: 99 },
            ["Blue Cube"]: { level: 4, order: 1, space: 1, waru: 0, banked: 0, decor: 15, limit: 99 },
            ["Black Cube"]: { level: 4, order: 1, space: 1, waru: 0, banked: 0, decor: 15, limit: 99 },
            ["Big Pine Tree"]: { level: 5, order: 1, space: 1, waru: 0, banked: 0, decor: 23, limit: 99 },
            ["Fallen Log"]: { level: 5, order: 1, space: 1, waru: 0, banked: 0, decor: 21, limit: 99 },
            ["Torch"]: { level: 5, order: 1, space: 1, waru: 0, banked: 0, decor: 27, limit: 99 },
            ["Oak Barrel"]: { level: 6, order: 1, space: 1, waru: 0, banked: 0, decor: 36, limit: 99 },
            ["Tiny Round Tree"]: { level: 6, order: 1, space: 1, waru: 0, banked: 0, decor: 45, limit: 99 },
            ["Haystack"]: { level: 6, order: 1, space: 1, waru: 0, banked: 0, decor: 30, limit: 99 },
            ["Round Tree"]: { level: 7, order: 1, space: 1, waru: 0, banked: 0, decor: 53, limit: 99 },
            ["Trash Box"]: { level: 7, order: 1, space: 1, waru: 0, banked: 0, decor: 53, limit: 99 },
            ["Wooden Timepost"]: { level: 7, order: 1, space: 1, waru: 0, banked: 0, decor: 60, limit: 99 },
            ["Tiny Sign"]: { level: 8, order: 1, space: 1, waru: 0, banked: 0, decor: 68, limit: 99 },
            ["Mini Flowerpot"]: { level: 8, order: 1, space: 1, waru: 0, banked: 0, decor: 72, limit: 99 },
            ["Little Scoop Tree"]: { level: 8, order: 1, space: 1, waru: 0, banked: 0, decor: 69, limit: 99 },
            ["Simple Swing"]: { level: 9, order: 1, space: 1, waru: 0, banked: 0, decor: 75, limit: 99 },
            ["Log Bench"]: { level: 9, order: 1, space: 1, waru: 0, banked: 0, decor: 68, limit: 99 },
            ["Big Scoop Tree"]: { level: 9, order: 1, space: 1, waru: 0, banked: 0, decor: 78, limit: 99 },
            ["Buncha Barrels"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 87, limit: 99 },
            ["Plain Sign"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 93, limit: 99 },
            ["Lil Evergreen"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 105, limit: 99 },
            ["Rock"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 75, limit: 99 },
            ["Flat Rock"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 75, limit: 99 },
            ["Pointy Rock"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 90, limit: 99 },
            ["Craggy Rock"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 98, limit: 99 },
            ["Towering Rock"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 113, limit: 99 },
            ["Banana Shake"]: { level: 10, order: 1, space: 1, waru: 0, banked: 0, decor: 98, limit: 99 },
            ["Mythic Monsterland"]: { level: 10, order: 4, space: 16, waru: 0, banked: 0, decor: 13500, limit: 198 },
            ["Time Twister"]: { level: 10, order: 4, space: 16, waru: 0, banked: 0, decor: 9400, limit: 198 },
            ["Yeti's Hideout"]: { level: 10, order: 4, space: 16, waru: 0, banked: 0, decor: 11000, limit: 198 },
            ["Green Nature"]: { level: 10, order: 4, space: 16, waru: 0, banked: 0, decor: 10200, limit: 198 },
            ["Flying Whale"]: { level: 10, order: 4, space: 16, waru: 0, banked: 0, decor: 17000, limit: 198 },
            ["Stone Trash Can"]: { level: 11, order: 1, space: 1, waru: 0, banked: 0, decor: 75, limit: 99 },
            ["Triple Mushroom"]: { level: 11, order: 1, space: 1, waru: 0, banked: 0, decor: 90, limit: 99 },
            ["Round Topiary Tree"]: { level: 11, order: 1, space: 1, waru: 0, banked: 0, decor: 98, limit: 99 },
            ["Fresh Milk"]: { level: 11, order: 1, space: 1, waru: 0, banked: 0, decor: 98, limit: 99 },
            ["Big Evergreen"]: { level: 12, order: 1, space: 1, waru: 0, banked: 0, decor: 113, limit: 99 },
            ["Haycart"]: { level: 12, order: 1, space: 1, waru: 0, banked: 0, decor: 120, limit: 99 },
            ["Aged Cheese"]: { level: 12, order: 2, space: 4, waru: 0, banked: 0, decor: 480, limit: 99 },
            ["Broad Sign"]: { level: 13, order: 1, space: 1, waru: 0, banked: 0, decor: 143, limit: 99 },
            ["Streetlight"]: { level: 13, order: 1, space: 1, waru: 0, banked: 0, decor: 143, limit: 99 },
            ["Grape Vat"]: { level: 13, order: 2, space: 4, waru: 0, banked: 0, decor: 600, limit: 99 },
            ["Itty Bitty Puddle"]: { level: 14, order: 2, space: 4, waru: 0, banked: 0, decor: 180, limit: 99 },
            ["Orange Bin"]: { level: 14, order: 1, space: 1, waru: 0, banked: 0, decor: 135, limit: 99 },
            ["Green Bin"]: { level: 14, order: 1, space: 1, waru: 0, banked: 0, decor: 135, limit: 99 },
            ["Purple Bin"]: { level: 14, order: 1, space: 1, waru: 0, banked: 0, decor: 135, limit: 99 },
            ["Purple Mini Mushroom"]: { level: 15, order: 1, space: 1, waru: 0, banked: 0, decor: 165, limit: 99 },
            ["Classic Wooden Horse"]: { level: 15, order: 1, space: 1, waru: 0, banked: 0, decor: 165, limit: 99 },
            ["Fine Grape Juice"]: { level: 15, order: 2, space: 4, waru: 0, banked: 0, decor: 750, limit: 99 },
            ["Big Round Topiary"]: { level: 16, order: 1, space: 1, waru: 0, banked: 0, decor: 180, limit: 99 },
            ["White Bench"]: { level: 16, order: 1, space: 1, waru: 0, banked: 0, decor: 180, limit: 99 },
            ["Double Cubist Tree"]: { level: 17, order: 1, space: 1, waru: 0, banked: 0, decor: 195, limit: 99 },
            ["White Signpost"]: { level: 17, order: 1, space: 1, waru: 0, banked: 0, decor: 210, limit: 99 },
            ["Blooming Shrub"]: { level: 18, order: 1, space: 1, waru: 0, banked: 0, decor: 225, limit: 99 },
            ["Round Flowerpot"]: { level: 18, order: 1, space: 1, waru: 0, banked: 0, decor: 248, limit: 99 },
            ["Big Mushroom Family"]: { level: 19, order: 1, space: 1, waru: 0, banked: 0, decor: 240, limit: 99 },
            ["Trash Can"]: { level: 19, order: 1, space: 1, waru: 0, banked: 0, decor: 270, limit: 99 },
            ["Rickety Clocktower"]: { level: 20, order: 1, space: 1, waru: 0, banked: 0, decor: 300, limit: 99 },
            ["Triple Cubist Tree"]: { level: 20, order: 1, space: 1, waru: 0, banked: 0, decor: 285, limit: 99 },
            ["Bushy Gazebo"]: { level: 20, order: 1, space: 1, waru: 0, banked: 0, decor: 315, limit: 99 },
            ["Rustic Slide"]: { level: 20, order: 1, space: 1, waru: 0, banked: 0, decor: 270, limit: 99 },
            ["Maple Tree"]: { level: 21, order: 1, space: 1, waru: 0, banked: 0, decor: 330, limit: 99 },
            ["Willow Tree"]: { level: 21, order: 1, space: 1, waru: 0, banked: 0, decor: 330, limit: 99 },
            ["Little Flower Garden"]: { level: 22, order: 1, space: 1, waru: 0, banked: 0, decor: 345, limit: 99 },
            ["Woodsy Well"]: { level: 22, order: 1, space: 1, waru: 0, banked: 0, decor: 353, limit: 99 },
            ["Lil Star Tree"]: { level: 23, order: 1, space: 1, waru: 0, banked: 0, decor: 338, limit: 99 },
            ["White Signboard"]: { level: 23, order: 1, space: 1, waru: 0, banked: 0, decor: 360, limit: 99 },
            ["Station Timepiece"]: { level: 24, order: 1, space: 1, waru: 0, banked: 0, decor: 375, limit: 99 },
            ["Floral Gazebo"]: { level: 24, order: 1, space: 1, waru: 0, banked: 0, decor: 368, limit: 99 },
            ["Cannonball Heap"]: { level: 25, order: 1, space: 1, waru: 0, banked: 0, decor: 390, limit: 99 },
            ["Gardener's Wheelbarrow"]: { level: 25, order: 1, space: 1, waru: 0, banked: 0, decor: 405, limit: 99 },
            ["Merry-Go-Round"]: { level: 25, order: 3, space: 9, waru: 0, banked: 0, decor: 2500, limit: 99 },
            ["Star Tree"]: { level: 26, order: 1, space: 1, waru: 0, banked: 0, decor: 420, limit: 99 },
            ["Fancy Bench"]: { level: 26, order: 1, space: 1, waru: 0, banked: 0, decor: 413, limit: 99 },
            ["Lil Heart Tree"]: { level: 27, order: 1, space: 1, waru: 0, banked: 0, decor: 435, limit: 99 },
            ["Heart Tree"]: { level: 27, order: 1, space: 1, waru: 0, banked: 0, decor: 465, limit: 99 },
            ["Rapunzel's Tower"]: { level: 27, order: 2, space: 4, waru: 0, banked: 0, decor: 2000, limit: 99 },
            ["Rustic Archway"]: { level: 28, order: 1, space: 1, waru: 0, banked: 0, decor: 473, limit: 99 },
            ["Shady Table"]: { level: 28, order: 1, space: 1, waru: 0, banked: 0, decor: 480, limit: 99 },
            ["Pretty Pond"]: { level: 29, order: 3, space: 9, waru: 0, banked: 0, decor: 600, limit: 99 },
            ["Rockin' Wooden Horse"]: { level: 29, order: 1, space: 1, waru: 0, banked: 0, decor: 510, limit: 99 },
            ["Fine Fountain"]: { level: 30, order: 1, space: 1, waru: 0, banked: 0, decor: 525, limit: 99 },
            ["Floral Swing"]: { level: 30, order: 1, space: 1, waru: 0, banked: 0, decor: 540, limit: 99 },
            ["Snack Shack"]: { level: 30, order: 1, space: 1, waru: 0, banked: 0, decor: 750, limit: 99 },
            ["Snow Crystal Core"]: { level: 32, order: 3, space: 9, waru: 0, banked: 0, decor: 3000, limit: 99 }
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
        props: {
            [""]: { level: 1, order: 1, space: 1, waru: 0, banked: 0, decor: 0, limit: 0 }
        }
    },
    [""]: {
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
        props: {
            [""]: { level: 1, order: 1, space: 1, waru: 0, banked: 0, decor: 0, limit: 0 }
        }
    }
};

const beautyLevels = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64
];
const beautyThresholds = {
    1: 100, 2: 200, 3: 500, 4: 1000, 5: 1700, 6: 2600, 7: 3700, 8: 5000, 9: 6500,
    10: 8200, 11: 10100, 12: 12200, 13: 14500, 14: 17000, 15: 19700, 16: 22600,
    17: 25700, 18: 29100, 19: 32800, 20: 36800, 21: 41100, 22: 45700, 23: 50600,
    24: 55800, 25: 61400, 26: 67400, 27: 73800, 28: 80600, 29: 87900, 30: 95700,
    31: 104000, 32: 112800, 33: 122200, 34: 132200, 35: 142800, 36: 154100,
    37: 166100, 38: 178900, 39: 192500, 40: 207000, 41: 222400, 42: 238800,
    43: 256200, 44: 274700, 45: 294400, 46: 315300, 47: 337500, 48: 361100,
    49: 386200, 50: 412900, 51: 441300, 52: 471500, 53: 503600, 54: 537700,
    55: 574000, 56: 612600, 57: 635600, 58: 697200, 59: 743500, 60: 792700,
    61: 845000, 62: 900600, 63: 959700, 64: 959700
}
function getBeautyLevel(beauty) {
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
export function getBeautyEffects(beauty) {
    const level = getBeautyLevel(beauty);
    return {
        next: beautyThresholds[Math.min(level + 1, beautyLevels.length)] - beauty,
        choices: Math.ceil(level / 2),
        banked: 2 * level,
        discount: Math.ceil(level / 8),
        visit: level
    };
}