"use strict";
(self["webpackChunkfarm_previewer"] = self["webpackChunkfarm_previewer"] || []).push([[179],{

/***/ 473:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/solid-js/web/dist/web.js
var web = __webpack_require__(47);
// EXTERNAL MODULE: ./node_modules/solid-js/dist/solid.js
var solid = __webpack_require__(77);
// EXTERNAL MODULE: ./node_modules/solid-js/store/dist/store.js
var dist_store = __webpack_require__(163);
// EXTERNAL MODULE: ./node_modules/dsforest/index.js
var dsforest = __webpack_require__(879);
;// CONCATENATED MODULE: ./src/data.js
var _data3, _data4;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var levels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
var orders = [15, 17, 19, 22, 25];
var orderLimits = {
  1: {
    min: 15,
    max: 15
  },
  2: {
    min: 15,
    max: 15
  },
  3: {
    min: 15,
    max: 15
  },
  4: {
    min: 15,
    max: 15
  },
  5: {
    min: 15,
    max: 15
  },
  6: {
    min: 15,
    max: 15
  },
  7: {
    min: 15,
    max: 17
  },
  8: {
    min: 15,
    max: 17
  },
  9: {
    min: 15,
    max: 17
  },
  10: {
    min: 15,
    max: 17
  },
  11: {
    min: 15,
    max: 17
  },
  12: {
    min: 15,
    max: 17
  },
  13: {
    min: 15,
    max: 17
  },
  14: {
    min: 15,
    max: 19
  },
  15: {
    min: 15,
    max: 19
  },
  16: {
    min: 15,
    max: 19
  },
  17: {
    min: 15,
    max: 19
  },
  18: {
    min: 15,
    max: 19
  },
  19: {
    min: 15,
    max: 19
  },
  20: {
    min: 15,
    max: 19
  },
  21: {
    min: 15,
    max: 22
  },
  22: {
    min: 15,
    max: 22
  },
  23: {
    min: 15,
    max: 22
  },
  24: {
    min: 15,
    max: 22
  },
  25: {
    min: 15,
    max: 22
  },
  26: {
    min: 15,
    max: 22
  },
  27: {
    min: 15,
    max: 22
  },
  28: {
    min: 15,
    max: 22
  },
  29: {
    min: 15,
    max: 22
  },
  30: {
    min: 15,
    max: 25
  },
  31: {
    min: 15,
    max: 25
  },
  32: {
    min: 15,
    max: 25
  },
  33: {
    min: 15,
    max: 25
  },
  34: {
    min: 15,
    max: 25
  },
  35: {
    min: 15,
    max: 25
  },
  36: {
    min: 15,
    max: 25
  },
  37: {
    min: 15,
    max: 25
  },
  38: {
    min: 15,
    max: 25
  },
  39: {
    min: 15,
    max: 25
  },
  40: {
    min: 15,
    max: 25
  }
};
var mobCaps = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
var mobCapLimits = {
  1: {
    min: 2,
    max: 12
  },
  2: {
    min: 2,
    max: 12
  },
  3: {
    min: 3,
    max: 13
  },
  4: {
    min: 4,
    max: 14
  },
  5: {
    min: 5,
    max: 15
  },
  6: {
    min: 6,
    max: 16
  },
  7: {
    min: 6,
    max: 16
  },
  8: {
    min: 7,
    max: 17
  },
  9: {
    min: 7,
    max: 17
  },
  10: {
    min: 8,
    max: 18
  },
  11: {
    min: 8,
    max: 18
  },
  12: {
    min: 9,
    max: 19
  },
  13: {
    min: 9,
    max: 19
  },
  14: {
    min: 9,
    max: 19
  },
  15: {
    min: 10,
    max: 20
  },
  16: {
    min: 10,
    max: 20
  },
  17: {
    min: 10,
    max: 20
  },
  18: {
    min: 11,
    max: 21
  },
  19: {
    min: 11,
    max: 21
  },
  20: {
    min: 11,
    max: 21
  },
  21: {
    min: 12,
    max: 22
  },
  22: {
    min: 12,
    max: 22
  },
  23: {
    min: 12,
    max: 22
  },
  24: {
    min: 13,
    max: 23
  },
  25: {
    min: 13,
    max: 23
  },
  26: {
    min: 14,
    max: 24
  },
  27: {
    min: 14,
    max: 24
  },
  28: {
    min: 15,
    max: 25
  },
  29: {
    min: 15,
    max: 25
  },
  30: {
    min: 16,
    max: 26
  },
  31: {
    min: 16,
    max: 26
  },
  32: {
    min: 16,
    max: 26
  },
  33: {
    min: 17,
    max: 27
  },
  34: {
    min: 17,
    max: 27
  },
  35: {
    min: 17,
    max: 27
  },
  36: {
    min: 17,
    max: 27
  },
  37: {
    min: 18,
    max: 28
  },
  38: {
    min: 18,
    max: 28
  },
  39: {
    min: 18,
    max: 28
  },
  40: {
    min: 18,
    max: 28
  }
};
var objects = {
  blank: {
    names: [""],
    limits: {
      1: {
        min: "",
        max: ""
      },
      2: {
        min: "",
        max: ""
      },
      3: {
        min: "",
        max: ""
      },
      4: {
        min: "",
        max: ""
      },
      5: {
        min: "",
        max: ""
      },
      6: {
        min: "",
        max: ""
      },
      7: {
        min: "",
        max: ""
      },
      8: {
        min: "",
        max: ""
      },
      9: {
        min: "",
        max: ""
      },
      10: {
        min: "",
        max: ""
      },
      11: {
        min: "",
        max: ""
      },
      12: {
        min: "",
        max: ""
      },
      13: {
        min: "",
        max: ""
      },
      14: {
        min: "",
        max: ""
      },
      15: {
        min: "",
        max: ""
      },
      16: {
        min: "",
        max: ""
      },
      17: {
        min: "",
        max: ""
      },
      18: {
        min: "",
        max: ""
      },
      19: {
        min: "",
        max: ""
      },
      20: {
        min: "",
        max: ""
      },
      21: {
        min: "",
        max: ""
      },
      22: {
        min: "",
        max: ""
      },
      23: {
        min: "",
        max: ""
      },
      24: {
        min: "",
        max: ""
      },
      25: {
        min: "",
        max: ""
      },
      26: {
        min: "",
        max: ""
      },
      27: {
        min: "",
        max: ""
      },
      28: {
        min: "",
        max: ""
      },
      29: {
        min: "",
        max: ""
      },
      30: {
        min: "",
        max: ""
      },
      31: {
        min: "",
        max: ""
      },
      32: {
        min: "",
        max: ""
      },
      33: {
        min: "",
        max: ""
      },
      34: {
        min: "",
        max: ""
      },
      35: {
        min: "",
        max: ""
      },
      36: {
        min: "",
        max: ""
      },
      37: {
        min: "",
        max: ""
      },
      38: {
        min: "",
        max: ""
      },
      39: {
        min: "",
        max: ""
      },
      40: {
        min: "",
        max: ""
      }
    },
    data: _defineProperty({}, "", {
      type: "blank",
      name: "",
      level: 1,
      order: 1,
      tiles: 0,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 0,
      fixed: true
    })
  },
  road: {
    names: [""],
    limits: {
      1: {
        min: "",
        max: ""
      },
      2: {
        min: "",
        max: ""
      },
      3: {
        min: "",
        max: ""
      },
      4: {
        min: "",
        max: ""
      },
      5: {
        min: "",
        max: ""
      },
      6: {
        min: "",
        max: ""
      },
      7: {
        min: "",
        max: ""
      },
      8: {
        min: "",
        max: ""
      },
      9: {
        min: "",
        max: ""
      },
      10: {
        min: "",
        max: ""
      },
      11: {
        min: "",
        max: ""
      },
      12: {
        min: "",
        max: ""
      },
      13: {
        min: "",
        max: ""
      },
      14: {
        min: "",
        max: ""
      },
      15: {
        min: "",
        max: ""
      },
      16: {
        min: "",
        max: ""
      },
      17: {
        min: "",
        max: ""
      },
      18: {
        min: "",
        max: ""
      },
      19: {
        min: "",
        max: ""
      },
      20: {
        min: "",
        max: ""
      },
      21: {
        min: "",
        max: ""
      },
      22: {
        min: "",
        max: ""
      },
      23: {
        min: "",
        max: ""
      },
      24: {
        min: "",
        max: ""
      },
      25: {
        min: "",
        max: ""
      },
      26: {
        min: "",
        max: ""
      },
      27: {
        min: "",
        max: ""
      },
      28: {
        min: "",
        max: ""
      },
      29: {
        min: "",
        max: ""
      },
      30: {
        min: "",
        max: ""
      },
      31: {
        min: "",
        max: ""
      },
      32: {
        min: "",
        max: ""
      },
      33: {
        min: "",
        max: ""
      },
      34: {
        min: "",
        max: ""
      },
      35: {
        min: "",
        max: ""
      },
      36: {
        min: "",
        max: ""
      },
      37: {
        min: "",
        max: ""
      },
      38: {
        min: "",
        max: ""
      },
      39: {
        min: "",
        max: ""
      },
      40: {
        min: "",
        max: ""
      }
    },
    data: _defineProperty({}, "", {
      type: "road",
      name: "",
      level: 1,
      order: 1,
      tiles: 0,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 0,
      fixed: false
    })
  },
  decor: {
    names: ["Lil Pine Tree", "Pine Tree", "Orange Mini Mushroom", "Heartfelt Garden", "Floral Archway", "Winged Archway", "Rice Candy Set", "Sky-High Flower", "Stone Lantern", "Buddy Bloom", "Big Bass", "Cannon", "Nestled Egg", "Snowman Mask", "Fishin' Pepe", "Christmas Tree", "Aran's Legacy", "Mount Monsmore", "Elluel Rune Tree", "White Cube", "Red Cube", "Green Cube", "Orange Cube", "Blue Cube", "Black Cube", "Big Pine Tree", "Fallen Log", "Torch", "Oak Barrel", "Tiny Round Tree", "Haystack", "Round Tree", "Trash Box", "Wooden Timepost", "Tiny Sign", "Mini Flowerpot", "Little Scoop Tree", "Simple Swing", "Log Bench", "Big Scoop Tree", "Buncha Barrels", "Plain Sign", "Lil Evergreen", "Rock", "Flat Rock", "Pointy Rock", "Craggy Rock", "Towering Rock", "Banana Shake", "Mythic Monsterland", "Time Twister", "Yeti's Hideout", "Green Nature", "Flying Whale", "Stone Trash Can", "Triple Mushroom", "Round Topiary Tree", "Fresh Milk", "Big Evergreen", "Haycart", "Aged Cheese", "Broad Sign", "Streetlight", "Grape Vat", "Itty Bitty Puddle", "Orange Bin", "Green Bin", "Purple Bin", "Purple Mini Mushroom", "Classic Wooden Horse", "Fine Grape Juice", "Big Round Topiary", "White Bench", "Double Cubist Tree", "White Signpost", "Blooming Shrub", "Round Flowerpot", "Big Mushroom Family", "Trash Can", "Rickety Clocktower", "Triple Cubist Tree", "Bushy Gazebo", "Rustic Slide", "Maple Tree", "Willow Tree", "Little Flower Garden", "Woodsy Well", "Lil Star Tree", "White Signboard", "Station Timepiece", "Floral Gazebo", "Cannonball Heap", "Gardener's Wheelbarrow", "Merry-Go-Round", "Star Tree", "Fancy Bench", "Lil Heart Tree", "Heart Tree", "Rapunzel's Tower", "Rustic Archway", "Shady Table", "Pretty Pond", "Rockin' Wooden Horse", "Fine Fountain", "Floral Swing", "Snack Shack", "Snow Crystal Core"],
    limits: {
      1: {
        min: "",
        max: ""
      },
      2: {
        min: "Lil Pine Tree",
        max: "Lil Pine Tree"
      },
      3: {
        min: "Lil Pine Tree",
        max: "Elluel Rune Tree"
      },
      4: {
        min: "Lil Pine Tree",
        max: "Black Cube"
      },
      5: {
        min: "Lil Pine Tree",
        max: "Torch"
      },
      6: {
        min: "Lil Pine Tree",
        max: "Haystack"
      },
      7: {
        min: "Lil Pine Tree",
        max: "Wooden Timepost"
      },
      8: {
        min: "Lil Pine Tree",
        max: "Little Scoop Tree"
      },
      9: {
        min: "Lil Pine Tree",
        max: "Big Scoop Tree"
      },
      10: {
        min: "Lil Pine Tree",
        max: "Flying Whale"
      },
      11: {
        min: "Lil Pine Tree",
        max: "Fresh Milk"
      },
      12: {
        min: "Lil Pine Tree",
        max: "Aged Cheese"
      },
      13: {
        min: "Lil Pine Tree",
        max: "Grape Vat"
      },
      14: {
        min: "Lil Pine Tree",
        max: "Purple Bin"
      },
      15: {
        min: "Lil Pine Tree",
        max: "Fine Grape Juice"
      },
      16: {
        min: "Lil Pine Tree",
        max: "White Bench"
      },
      17: {
        min: "Lil Pine Tree",
        max: "White Signpost"
      },
      18: {
        min: "Lil Pine Tree",
        max: "Round Flowerpot"
      },
      19: {
        min: "Lil Pine Tree",
        max: "Trash Can"
      },
      20: {
        min: "Lil Pine Tree",
        max: "Rustic Slide"
      },
      21: {
        min: "Lil Pine Tree",
        max: "Willow Tree"
      },
      22: {
        min: "Lil Pine Tree",
        max: "Woodsy Well"
      },
      23: {
        min: "Lil Pine Tree",
        max: "White Signboard"
      },
      24: {
        min: "Lil Pine Tree",
        max: "Floral Gazebo"
      },
      25: {
        min: "Lil Pine Tree",
        max: "Merry-Go-Round"
      },
      26: {
        min: "Lil Pine Tree",
        max: "Fancy Bench"
      },
      27: {
        min: "Lil Pine Tree",
        max: "Rapunzel's Tower"
      },
      28: {
        min: "Lil Pine Tree",
        max: "Shady Table"
      },
      29: {
        min: "Lil Pine Tree",
        max: "Rockin' Wooden Horse"
      },
      30: {
        min: "Lil Pine Tree",
        max: "Snack Shack"
      },
      31: {
        min: "Lil Pine Tree",
        max: "Snack Shack"
      },
      32: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      33: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      34: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      35: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      36: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      37: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      38: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      39: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      },
      40: {
        min: "Lil Pine Tree",
        max: "Snow Crystal Core"
      }
    },
    data: (_data3 = {}, _defineProperty(_data3, "Lil Pine Tree", {
      type: "decor",
      name: "Lil Pine Tree",
      level: 2,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 8,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Pine Tree", {
      type: "decor",
      name: "Pine Tree",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 12,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Orange Mini Mushroom", {
      type: "decor",
      name: "Orange Mini Mushroom",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 9,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Heartfelt Garden", {
      type: "decor",
      name: "Heartfelt Garden",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 1000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Floral Archway", {
      type: "decor",
      name: "Floral Archway",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 1500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Winged Archway", {
      type: "decor",
      name: "Winged Archway",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 2000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Rice Candy Set", {
      type: "decor",
      name: "Rice Candy Set",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 2700,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Sky-High Flower", {
      type: "decor",
      name: "Sky-High Flower",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 1000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Stone Lantern", {
      type: "decor",
      name: "Stone Lantern",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 1500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Buddy Bloom", {
      type: "decor",
      name: "Buddy Bloom",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 2000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Big Bass", {
      type: "decor",
      name: "Big Bass",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 2700,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Cannon", {
      type: "decor",
      name: "Cannon",
      level: 3,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 3200,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Nestled Egg", {
      type: "decor",
      name: "Nestled Egg",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 3500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Snowman Mask", {
      type: "decor",
      name: "Snowman Mask",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 4200,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Fishin' Pepe", {
      type: "decor",
      name: "Fishin' Pepe",
      level: 3,
      order: 3,
      tiles: 9,
      waru: 0,
      banked: 0,
      decor: 4600,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Christmas Tree", {
      type: "decor",
      name: "Christmas Tree",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 4800,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Aran's Legacy", {
      type: "decor",
      name: "Aran's Legacy",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 6000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Mount Monsmore", {
      type: "decor",
      name: "Mount Monsmore",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 13000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Elluel Rune Tree", {
      type: "decor",
      name: "Elluel Rune Tree",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 13000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "White Cube", {
      type: "decor",
      name: "White Cube",
      level: 4,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Red Cube", {
      type: "decor",
      name: "Red Cube",
      level: 4,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Green Cube", {
      type: "decor",
      name: "Green Cube",
      level: 4,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Orange Cube", {
      type: "decor",
      name: "Orange Cube",
      level: 4,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Blue Cube", {
      type: "decor",
      name: "Blue Cube",
      level: 4,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Black Cube", {
      type: "decor",
      name: "Black Cube",
      level: 4,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Pine Tree", {
      type: "decor",
      name: "Big Pine Tree",
      level: 5,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 23,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Fallen Log", {
      type: "decor",
      name: "Fallen Log",
      level: 5,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 21,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Torch", {
      type: "decor",
      name: "Torch",
      level: 5,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 27,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Oak Barrel", {
      type: "decor",
      name: "Oak Barrel",
      level: 6,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 36,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Tiny Round Tree", {
      type: "decor",
      name: "Tiny Round Tree",
      level: 6,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 45,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Haystack", {
      type: "decor",
      name: "Haystack",
      level: 6,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Round Tree", {
      type: "decor",
      name: "Round Tree",
      level: 7,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 53,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Trash Box", {
      type: "decor",
      name: "Trash Box",
      level: 7,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 53,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Wooden Timepost", {
      type: "decor",
      name: "Wooden Timepost",
      level: 7,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 60,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Tiny Sign", {
      type: "decor",
      name: "Tiny Sign",
      level: 8,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 68,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Mini Flowerpot", {
      type: "decor",
      name: "Mini Flowerpot",
      level: 8,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 72,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Little Scoop Tree", {
      type: "decor",
      name: "Little Scoop Tree",
      level: 8,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 69,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Simple Swing", {
      type: "decor",
      name: "Simple Swing",
      level: 9,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Log Bench", {
      type: "decor",
      name: "Log Bench",
      level: 9,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 68,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Scoop Tree", {
      type: "decor",
      name: "Big Scoop Tree",
      level: 9,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 78,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Buncha Barrels", {
      type: "decor",
      name: "Buncha Barrels",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 87,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Plain Sign", {
      type: "decor",
      name: "Plain Sign",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 93,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Lil Evergreen", {
      type: "decor",
      name: "Lil Evergreen",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 105,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Rock", {
      type: "decor",
      name: "Rock",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Flat Rock", {
      type: "decor",
      name: "Flat Rock",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Pointy Rock", {
      type: "decor",
      name: "Pointy Rock",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 90,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Craggy Rock", {
      type: "decor",
      name: "Craggy Rock",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Towering Rock", {
      type: "decor",
      name: "Towering Rock",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 113,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Banana Shake", {
      type: "decor",
      name: "Banana Shake",
      level: 10,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Mythic Monsterland", {
      type: "decor",
      name: "Mythic Monsterland",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 13500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Time Twister", {
      type: "decor",
      name: "Time Twister",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 9400,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Yeti's Hideout", {
      type: "decor",
      name: "Yeti's Hideout",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 11000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Green Nature", {
      type: "decor",
      name: "Green Nature",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 10200,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Flying Whale", {
      type: "decor",
      name: "Flying Whale",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 0,
      banked: 0,
      decor: 17000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data3, "Stone Trash Can", {
      type: "decor",
      name: "Stone Trash Can",
      level: 11,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Triple Mushroom", {
      type: "decor",
      name: "Triple Mushroom",
      level: 11,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 90,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Round Topiary Tree", {
      type: "decor",
      name: "Round Topiary Tree",
      level: 11,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Fresh Milk", {
      type: "decor",
      name: "Fresh Milk",
      level: 11,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Evergreen", {
      type: "decor",
      name: "Big Evergreen",
      level: 12,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 113,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Haycart", {
      type: "decor",
      name: "Haycart",
      level: 12,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 120,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Aged Cheese", {
      type: "decor",
      name: "Aged Cheese",
      level: 12,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 480,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Broad Sign", {
      type: "decor",
      name: "Broad Sign",
      level: 13,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 143,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Streetlight", {
      type: "decor",
      name: "Streetlight",
      level: 13,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 143,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Grape Vat", {
      type: "decor",
      name: "Grape Vat",
      level: 13,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 600,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Itty Bitty Puddle", {
      type: "decor",
      name: "Itty Bitty Puddle",
      level: 14,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 180,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Orange Bin", {
      type: "decor",
      name: "Orange Bin",
      level: 14,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Green Bin", {
      type: "decor",
      name: "Green Bin",
      level: 14,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Purple Bin", {
      type: "decor",
      name: "Purple Bin",
      level: 14,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Purple Mini Mushroom", {
      type: "decor",
      name: "Purple Mini Mushroom",
      level: 15,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 165,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Classic Wooden Horse", {
      type: "decor",
      name: "Classic Wooden Horse",
      level: 15,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 165,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Fine Grape Juice", {
      type: "decor",
      name: "Fine Grape Juice",
      level: 15,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 750,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Round Topiary", {
      type: "decor",
      name: "Big Round Topiary",
      level: 16,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 180,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "White Bench", {
      type: "decor",
      name: "White Bench",
      level: 16,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 180,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Double Cubist Tree", {
      type: "decor",
      name: "Double Cubist Tree",
      level: 17,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 195,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "White Signpost", {
      type: "decor",
      name: "White Signpost",
      level: 17,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 210,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Blooming Shrub", {
      type: "decor",
      name: "Blooming Shrub",
      level: 18,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 225,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Round Flowerpot", {
      type: "decor",
      name: "Round Flowerpot",
      level: 18,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 248,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Mushroom Family", {
      type: "decor",
      name: "Big Mushroom Family",
      level: 19,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 240,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Trash Can", {
      type: "decor",
      name: "Trash Can",
      level: 19,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 270,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Rickety Clocktower", {
      type: "decor",
      name: "Rickety Clocktower",
      level: 20,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 300,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Triple Cubist Tree", {
      type: "decor",
      name: "Triple Cubist Tree",
      level: 20,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 285,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Bushy Gazebo", {
      type: "decor",
      name: "Bushy Gazebo",
      level: 20,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 315,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Rustic Slide", {
      type: "decor",
      name: "Rustic Slide",
      level: 20,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 270,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Maple Tree", {
      type: "decor",
      name: "Maple Tree",
      level: 21,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 330,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Willow Tree", {
      type: "decor",
      name: "Willow Tree",
      level: 21,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 330,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Little Flower Garden", {
      type: "decor",
      name: "Little Flower Garden",
      level: 22,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 345,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Woodsy Well", {
      type: "decor",
      name: "Woodsy Well",
      level: 22,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 353,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Lil Star Tree", {
      type: "decor",
      name: "Lil Star Tree",
      level: 23,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 338,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "White Signboard", {
      type: "decor",
      name: "White Signboard",
      level: 23,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 360,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Station Timepiece", {
      type: "decor",
      name: "Station Timepiece",
      level: 24,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 375,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Floral Gazebo", {
      type: "decor",
      name: "Floral Gazebo",
      level: 24,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 368,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Cannonball Heap", {
      type: "decor",
      name: "Cannonball Heap",
      level: 25,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 390,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Gardener's Wheelbarrow", {
      type: "decor",
      name: "Gardener's Wheelbarrow",
      level: 25,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 405,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Merry-Go-Round", {
      type: "decor",
      name: "Merry-Go-Round",
      level: 25,
      order: 3,
      tiles: 9,
      waru: 0,
      banked: 0,
      decor: 2500,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Star Tree", {
      type: "decor",
      name: "Star Tree",
      level: 26,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 420,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Fancy Bench", {
      type: "decor",
      name: "Fancy Bench",
      level: 26,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 413,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Lil Heart Tree", {
      type: "decor",
      name: "Lil Heart Tree",
      level: 27,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 435,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Heart Tree", {
      type: "decor",
      name: "Heart Tree",
      level: 27,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 465,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Rapunzel's Tower", {
      type: "decor",
      name: "Rapunzel's Tower",
      level: 27,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 2000,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Rustic Archway", {
      type: "decor",
      name: "Rustic Archway",
      level: 28,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 473,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Shady Table", {
      type: "decor",
      name: "Shady Table",
      level: 28,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 480,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Pretty Pond", {
      type: "decor",
      name: "Pretty Pond",
      level: 29,
      order: 3,
      tiles: 9,
      waru: 0,
      banked: 0,
      decor: 600,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Rockin' Wooden Horse", {
      type: "decor",
      name: "Rockin' Wooden Horse",
      level: 29,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 510,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Fine Fountain", {
      type: "decor",
      name: "Fine Fountain",
      level: 30,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 525,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Floral Swing", {
      type: "decor",
      name: "Floral Swing",
      level: 30,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 540,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Snack Shack", {
      type: "decor",
      name: "Snack Shack",
      level: 30,
      order: 1,
      tiles: 1,
      waru: 0,
      banked: 0,
      decor: 750,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data3, "Snow Crystal Core", {
      type: "decor",
      name: "Snow Crystal Core",
      level: 32,
      order: 3,
      tiles: 9,
      waru: 0,
      banked: 0,
      decor: 3000,
      quantity: 99,
      fixed: false
    }), _data3)
  },
  building: {
    names: ["My House", "Green Mushroom Hut", "Henesys Homestead", "Orange Mushroom House", "Monster Barn", "Sturdy Straw House", "Red Mushroom Manor", "Rien Hot Springs", "Mu Lung Barber Shop", "Tip-Top Balloon Shop", "Floatland Manor", "Healthy Hospital", "Monster Manor", "Mr. Teddy X", "Ms. Teddy X", "Yellow Submarine", "Refreshing Oasis", "Yeti Super Stage", "Nautilus Harbor", "Shinsoo's Nest", "Ludibrium Toy House", "Orbis Flying Garden", "Ereve Fountain Garden", "Aqua Road Castle", "Zakum's Cave", "Windmill", "Chopper Chalet", "Drip Brew Coffee House", "Red Brick Abode", "My House (Homestead)", "Lofty Brick House", "Purple Bathhouse", "Blue Bathhouse", "Big Apple Fruit Shop", "Octo-Pot Seafood", "Henesys Bowman Guild", "Rudi Beauty Salon", "Santa's Gift Shop", "Ghastly Ghost Gables", "Grand Gourd Gables", "Blossom House", "Tip Top Chop Shop", "Pink Angel Place", "Full Moon Song Pyun Shop", "Gingerbread Gables", "Rien's Tonic Shop", "My House (Manor)", "Blue Mushroom Mansion", "Mushroom Tower", "Ariant Fabrics (I)", "Hanok House", "Fantasy Park Viking", "Alchemist's Abode", "Five-Slime Hotel", "Creamy Cake Chateau", "Florina Lighthouse", "Leafre Airship", "Fish Shop", "Mushking Empire Outpost", "Nova Safehouse", "Elluel House", "Ariant Fabrics (II)", "Happy Homestead", "Melody Manor", "Aqua Roadhouse", "Fun Factory", "Ariant Castle", "Shaved Ice Chateau", "Magatia Workshop", "My House (Mighty Manor)", "Santa's Special Shop", "Farmer's House", "Tick Tock Townhouse", "Mu Lung Dojo", "Icy Treat Retreat (I)", "Beatdown Shop", "Very Berry Vineyard", "Chryse Coliseum", "Omega Sector", "Tip-Top Toy Shop", "Edelstein Air Field", "Big Top Tenement", "Big Bowl Noodles", "My House (Country Mansion)", "Lumiere", "Icy Treat Retreat (II)", "Wholesome Milk Farm", "The Secret Garden"],
    limits: {
      1: {
        min: "Green Mushroom Hut",
        max: "Green Mushroom Hut"
      },
      2: {
        min: "Green Mushroom Hut",
        max: "Orange Mushroom House"
      },
      3: {
        min: "Green Mushroom Hut",
        max: "Zakum's Cave"
      },
      4: {
        min: "Green Mushroom Hut",
        max: "Windmill"
      },
      5: {
        min: "Green Mushroom Hut",
        max: "Drip Brew Coffee House"
      },
      6: {
        min: "Green Mushroom Hut",
        max: "Red Brick Abode"
      },
      7: {
        min: "Green Mushroom Hut",
        max: "Lofty Brick House"
      },
      8: {
        min: "Green Mushroom Hut",
        max: "Purple Bathhouse"
      },
      9: {
        min: "Green Mushroom Hut",
        max: "Blue Bathhouse"
      },
      10: {
        min: "Green Mushroom Hut",
        max: "Grand Gourd Gables"
      },
      11: {
        min: "Green Mushroom Hut",
        max: "Tip Top Chop Shop"
      },
      12: {
        min: "Green Mushroom Hut",
        max: "Full Moon Song Pyun Shop"
      },
      13: {
        min: "Green Mushroom Hut",
        max: "Rien's Tonic Shop"
      },
      14: {
        min: "Green Mushroom Hut",
        max: "Mushroom Tower"
      },
      15: {
        min: "Green Mushroom Hut",
        max: "Leafre Airship"
      },
      16: {
        min: "Green Mushroom Hut",
        max: "Mushking Empire Outpost"
      },
      17: {
        min: "Green Mushroom Hut",
        max: "Nova Safehouse"
      },
      18: {
        min: "Green Mushroom Hut",
        max: "Ariant Fabrics (I)"
      },
      19: {
        min: "Green Mushroom Hut",
        max: "Happy Homestead"
      },
      20: {
        min: "Green Mushroom Hut",
        max: "Magatia Workshop"
      },
      21: {
        min: "Green Mushroom Hut",
        max: "Farmer's House"
      },
      22: {
        min: "Green Mushroom Hut",
        max: "Tick Tock Townhouse"
      },
      23: {
        min: "Green Mushroom Hut",
        max: "Mu Lung Dojo"
      },
      24: {
        min: "Green Mushroom Hut",
        max: "Icy Treat Retreat (I)"
      },
      25: {
        min: "Green Mushroom Hut",
        max: "Omega Sector"
      },
      26: {
        min: "Green Mushroom Hut",
        max: "Tip-Top Toy Shop"
      },
      27: {
        min: "Green Mushroom Hut",
        max: "Edelstein Air Field"
      },
      28: {
        min: "Green Mushroom Hut",
        max: "Big Top Tenement"
      },
      29: {
        min: "Green Mushroom Hut",
        max: "Big Bowl Noodles"
      },
      30: {
        min: "Green Mushroom Hut",
        max: "Icy Treat Retreat (II)"
      },
      31: {
        min: "Green Mushroom Hut",
        max: "Icy Treat Retreat (II)"
      },
      32: {
        min: "Green Mushroom Hut",
        max: "Icy Treat Retreat (II)"
      },
      33: {
        min: "Green Mushroom Hut",
        max: "Icy Treat Retreat (II)"
      },
      34: {
        min: "Green Mushroom Hut",
        max: "Icy Treat Retreat (II)"
      },
      35: {
        min: "Green Mushroom Hut",
        max: "The Secret Garden"
      },
      36: {
        min: "Green Mushroom Hut",
        max: "The Secret Garden"
      },
      37: {
        min: "Green Mushroom Hut",
        max: "The Secret Garden"
      },
      38: {
        min: "Green Mushroom Hut",
        max: "The Secret Garden"
      },
      39: {
        min: "Green Mushroom Hut",
        max: "The Secret Garden"
      },
      40: {
        min: "Green Mushroom Hut",
        max: "The Secret Garden"
      }
    },
    data: (_data4 = {}, _defineProperty(_data4, "My House", {
      type: "building",
      name: "My House",
      level: 1,
      order: 5,
      tiles: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 1,
      fixed: true
    }), _defineProperty(_data4, "Green Mushroom Hut", {
      type: "building",
      name: "Green Mushroom Hut",
      level: 1,
      order: 2,
      tiles: 4,
      waru: 2,
      banked: 50,
      decor: 5,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Henesys Homestead", {
      type: "building",
      name: "Henesys Homestead",
      level: 2,
      order: 2,
      tiles: 4,
      waru: 7,
      banked: 80,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Orange Mushroom House", {
      type: "building",
      name: "Orange Mushroom House",
      level: 2,
      order: 2,
      tiles: 4,
      waru: 3,
      banked: 60,
      decor: 5,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Monster Barn", {
      type: "building",
      name: "Monster Barn",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 1,
      fixed: false
    }), _defineProperty(_data4, "Sturdy Straw House", {
      type: "building",
      name: "Sturdy Straw House",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 5,
      banked: 50,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Red Mushroom Manor", {
      type: "building",
      name: "Red Mushroom Manor",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 6,
      banked: 100,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Rien Hot Springs", {
      type: "building",
      name: "Rien Hot Springs",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 25,
      banked: 2200,
      decor: 200,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Mu Lung Barber Shop", {
      type: "building",
      name: "Mu Lung Barber Shop",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 27,
      banked: 1800,
      decor: 200,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Tip-Top Balloon Shop", {
      type: "building",
      name: "Tip-Top Balloon Shop",
      level: 3,
      order: 2,
      tiles: 4,
      waru: 35,
      banked: 3000,
      decor: 400,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Floatland Manor", {
      type: "building",
      name: "Floatland Manor",
      level: 3,
      order: 3,
      tiles: 9,
      waru: 23,
      banked: 2000,
      decor: 150,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Healthy Hospital", {
      type: "building",
      name: "Healthy Hospital",
      level: 3,
      order: 3,
      tiles: 9,
      waru: 44,
      banked: 3500,
      decor: 250,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Monster Manor", {
      type: "building",
      name: "Monster Manor",
      level: 3,
      order: 3,
      tiles: 9,
      waru: 42,
      banked: 5000,
      decor: 400,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Mr. Teddy X", {
      type: "building",
      name: "Mr. Teddy X",
      level: 3,
      order: 3,
      tiles: 9,
      waru: 48,
      banked: 4500,
      decor: 500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Ms. Teddy X", {
      type: "building",
      name: "Ms. Teddy X",
      level: 3,
      order: 3,
      tiles: 9,
      waru: 52,
      banked: 3500,
      decor: 500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Yellow Submarine", {
      type: "building",
      name: "Yellow Submarine",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 72,
      banked: 7000,
      decor: 900,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Refreshing Oasis", {
      type: "building",
      name: "Refreshing Oasis",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 76,
      banked: 6000,
      decor: 1000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Yeti Super Stage", {
      type: "building",
      name: "Yeti Super Stage",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 82,
      banked: 5000,
      decor: 700,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Nautilus Harbor", {
      type: "building",
      name: "Nautilus Harbor",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 91,
      banked: 5000,
      decor: 1500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Shinsoo's Nest", {
      type: "building",
      name: "Shinsoo's Nest",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 87,
      banked: 7000,
      decor: 2000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Ludibrium Toy House", {
      type: "building",
      name: "Ludibrium Toy House",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 183,
      banked: 2000,
      decor: 4000,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Orbis Flying Garden", {
      type: "building",
      name: "Orbis Flying Garden",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 105,
      banked: 5000,
      decor: 1500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Ereve Fountain Garden", {
      type: "building",
      name: "Ereve Fountain Garden",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 70,
      banked: 4500,
      decor: 500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Aqua Road Castle", {
      type: "building",
      name: "Aqua Road Castle",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 91,
      banked: 4000,
      decor: 1200,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Zakum's Cave", {
      type: "building",
      name: "Zakum's Cave",
      level: 3,
      order: 4,
      tiles: 16,
      waru: 60,
      banked: 12000,
      decor: 500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Windmill", {
      type: "building",
      name: "Windmill",
      level: 4,
      order: 2,
      tiles: 4,
      waru: 10,
      banked: 70,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Chopper Chalet", {
      type: "building",
      name: "Chopper Chalet",
      level: 5,
      order: 2,
      tiles: 4,
      waru: 8,
      banked: 120,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Drip Brew Coffee House", {
      type: "building",
      name: "Drip Brew Coffee House",
      level: 5,
      order: 3,
      tiles: 9,
      waru: 10,
      banked: 170,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Red Brick Abode", {
      type: "building",
      name: "Red Brick Abode",
      level: 6,
      order: 2,
      tiles: 4,
      waru: 10,
      banked: 100,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "My House (Homestead)", {
      type: "building",
      name: "My House (Homestead)",
      level: 7,
      order: 5,
      tiles: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 1,
      fixed: true
    }), _defineProperty(_data4, "Lofty Brick House", {
      type: "building",
      name: "Lofty Brick House",
      level: 7,
      order: 2,
      tiles: 4,
      waru: 8,
      banked: 110,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Purple Bathhouse", {
      type: "building",
      name: "Purple Bathhouse",
      level: 8,
      order: 2,
      tiles: 4,
      waru: 9,
      banked: 110,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Blue Bathhouse", {
      type: "building",
      name: "Blue Bathhouse",
      level: 9,
      order: 2,
      tiles: 4,
      waru: 12,
      banked: 100,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Big Apple Fruit Shop", {
      type: "building",
      name: "Big Apple Fruit Shop",
      level: 10,
      order: 2,
      tiles: 4,
      waru: 10,
      banked: 160,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Octo-Pot Seafood", {
      type: "building",
      name: "Octo-Pot Seafood",
      level: 10,
      order: 2,
      tiles: 4,
      waru: 13,
      banked: 140,
      decor: 5,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Henesys Bowman Guild", {
      type: "building",
      name: "Henesys Bowman Guild",
      level: 10,
      order: 3,
      tiles: 9,
      waru: 15,
      banked: 350,
      decor: 5,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Rudi Beauty Salon", {
      type: "building",
      name: "Rudi Beauty Salon",
      level: 10,
      order: 3,
      tiles: 9,
      waru: 14,
      banked: 250,
      decor: 70,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Santa's Gift Shop", {
      type: "building",
      name: "Santa's Gift Shop",
      level: 10,
      order: 3,
      tiles: 9,
      waru: 16,
      banked: 200,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Ghastly Ghost Gables", {
      type: "building",
      name: "Ghastly Ghost Gables",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 45,
      banked: 3000,
      decor: 500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Grand Gourd Gables", {
      type: "building",
      name: "Grand Gourd Gables",
      level: 10,
      order: 4,
      tiles: 16,
      waru: 43,
      banked: 5000,
      decor: 350,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Blossom House", {
      type: "building",
      name: "Blossom House",
      level: 11,
      order: 2,
      tiles: 4,
      waru: 12,
      banked: 180,
      decor: 25,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Tip Top Chop Shop", {
      type: "building",
      name: "Tip Top Chop Shop",
      level: 11,
      order: 2,
      tiles: 4,
      waru: 11,
      banked: 190,
      decor: 25,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Pink Angel Place", {
      type: "building",
      name: "Pink Angel Place",
      level: 12,
      order: 2,
      tiles: 4,
      waru: 10,
      banked: 210,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Full Moon Song Pyun Shop", {
      type: "building",
      name: "Full Moon Song Pyun Shop",
      level: 12,
      order: 3,
      tiles: 9,
      waru: 12,
      banked: 250,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Gingerbread Gables", {
      type: "building",
      name: "Gingerbread Gables",
      level: 13,
      order: 2,
      tiles: 4,
      waru: 14,
      banked: 200,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Rien's Tonic Shop", {
      type: "building",
      name: "Rien's Tonic Shop",
      level: 13,
      order: 2,
      tiles: 4,
      waru: 15,
      banked: 210,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "My House (Manor)", {
      type: "building",
      name: "My House (Manor)",
      level: 14,
      order: 5,
      tiles: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 1,
      fixed: true
    }), _defineProperty(_data4, "Blue Mushroom Mansion", {
      type: "building",
      name: "Blue Mushroom Mansion",
      level: 14,
      order: 2,
      tiles: 4,
      waru: 12,
      banked: 240,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Mushroom Tower", {
      type: "building",
      name: "Mushroom Tower",
      level: 14,
      order: 4,
      tiles: 16,
      waru: 12,
      banked: 300,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Ariant Fabrics (I)", {
      type: "building",
      name: "Ariant Fabrics (I)",
      level: 15,
      order: 2,
      tiles: 4,
      waru: 12,
      banked: 360,
      decor: 5,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Hanok House", {
      type: "building",
      name: "Hanok House",
      level: 15,
      order: 2,
      tiles: 4,
      waru: 17,
      banked: 300,
      decor: 50,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Fantasy Park Viking", {
      type: "building",
      name: "Fantasy Park Viking",
      level: 15,
      order: 3,
      tiles: 9,
      waru: 18,
      banked: 600,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Alchemist's Abode", {
      type: "building",
      name: "Alchemist's Abode",
      level: 15,
      order: 3,
      tiles: 9,
      waru: 20,
      banked: 300,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Five-Slime Hotel", {
      type: "building",
      name: "Five-Slime Hotel",
      level: 15,
      order: 3,
      tiles: 9,
      waru: 18,
      banked: 400,
      decor: 25,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Creamy Cake Chateau", {
      type: "building",
      name: "Creamy Cake Chateau",
      level: 15,
      order: 3,
      tiles: 9,
      waru: 20,
      banked: 360,
      decor: 35,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Florina Lighthouse", {
      type: "building",
      name: "Florina Lighthouse",
      level: 15,
      order: 3,
      tiles: 9,
      waru: 15,
      banked: 250,
      decor: 15,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Leafre Airship", {
      type: "building",
      name: "Leafre Airship",
      level: 15,
      order: 4,
      tiles: 16,
      waru: 50,
      banked: 4000,
      decor: 500,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "Fish Shop", {
      type: "building",
      name: "Fish Shop",
      level: 16,
      order: 2,
      tiles: 4,
      waru: 15,
      banked: 550,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Mushking Empire Outpost", {
      type: "building",
      name: "Mushking Empire Outpost",
      level: 16,
      order: 3,
      tiles: 9,
      waru: 16,
      banked: 700,
      decor: 10,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Nova Safehouse", {
      type: "building",
      name: "Nova Safehouse",
      level: 17,
      order: 2,
      tiles: 4,
      waru: 18,
      banked: 300,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Elluel House", {
      type: "building",
      name: "Elluel House",
      level: 18,
      order: 2,
      tiles: 4,
      waru: 15,
      banked: 330,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Ariant Fabrics (II)", {
      type: "building",
      name: "Ariant Fabrics (II)",
      level: 18,
      order: 2,
      tiles: 4,
      waru: 16,
      banked: 300,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Happy Homestead", {
      type: "building",
      name: "Happy Homestead",
      level: 19,
      order: 2,
      tiles: 4,
      waru: 20,
      banked: 340,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Melody Manor", {
      type: "building",
      name: "Melody Manor",
      level: 20,
      order: 2,
      tiles: 4,
      waru: 17,
      banked: 300,
      decor: 50,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Aqua Roadhouse", {
      type: "building",
      name: "Aqua Roadhouse",
      level: 20,
      order: 3,
      tiles: 9,
      waru: 25,
      banked: 550,
      decor: 50,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Fun Factory", {
      type: "building",
      name: "Fun Factory",
      level: 20,
      order: 3,
      tiles: 9,
      waru: 20,
      banked: 400,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Ariant Castle", {
      type: "building",
      name: "Ariant Castle",
      level: 20,
      order: 4,
      tiles: 16,
      waru: 28,
      banked: 500,
      decor: 50,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Shaved Ice Chateau", {
      type: "building",
      name: "Shaved Ice Chateau",
      level: 20,
      order: 4,
      tiles: 16,
      waru: 25,
      banked: 500,
      decor: 45,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Magatia Workshop", {
      type: "building",
      name: "Magatia Workshop",
      level: 20,
      order: 4,
      tiles: 16,
      waru: 70,
      banked: 2000,
      decor: 100,
      quantity: 198,
      fixed: false
    }), _defineProperty(_data4, "My House (Mighty Manor)", {
      type: "building",
      name: "My House (Mighty Manor)",
      level: 21,
      order: 5,
      tiles: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 1,
      fixed: true
    }), _defineProperty(_data4, "Santa's Special Shop", {
      type: "building",
      name: "Santa's Special Shop",
      level: 21,
      order: 2,
      tiles: 4,
      waru: 22,
      banked: 450,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Farmer's House", {
      type: "building",
      name: "Farmer's House",
      level: 21,
      order: 2,
      tiles: 4,
      waru: 21,
      banked: 460,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Tick Tock Townhouse", {
      type: "building",
      name: "Tick Tock Townhouse",
      level: 22,
      order: 2,
      tiles: 4,
      waru: 25,
      banked: 400,
      decor: 35,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Mu Lung Dojo", {
      type: "building",
      name: "Mu Lung Dojo",
      level: 23,
      order: 2,
      tiles: 4,
      waru: 23,
      banked: 450,
      decor: 35,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Icy Treat Retreat (I)", {
      type: "building",
      name: "Icy Treat Retreat (I)",
      level: 24,
      order: 2,
      tiles: 4,
      waru: 20,
      banked: 500,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Beatdown Shop", {
      type: "building",
      name: "Beatdown Shop",
      level: 25,
      order: 3,
      tiles: 9,
      waru: 30,
      banked: 750,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Very Berry Vineyard", {
      type: "building",
      name: "Very Berry Vineyard",
      level: 25,
      order: 3,
      tiles: 9,
      waru: 25,
      banked: 600,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Chryse Coliseum", {
      type: "building",
      name: "Chryse Coliseum",
      level: 25,
      order: 3,
      tiles: 9,
      waru: 30,
      banked: 750,
      decor: 55,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Omega Sector", {
      type: "building",
      name: "Omega Sector",
      level: 25,
      order: 4,
      tiles: 16,
      waru: 45,
      banked: 900,
      decor: 60,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Tip-Top Toy Shop", {
      type: "building",
      name: "Tip-Top Toy Shop",
      level: 26,
      order: 2,
      tiles: 4,
      waru: 22,
      banked: 500,
      decor: 50,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Edelstein Air Field", {
      type: "building",
      name: "Edelstein Air Field",
      level: 27,
      order: 3,
      tiles: 9,
      waru: 33,
      banked: 800,
      decor: 20,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Big Top Tenement", {
      type: "building",
      name: "Big Top Tenement",
      level: 28,
      order: 2,
      tiles: 4,
      waru: 28,
      banked: 500,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Big Bowl Noodles", {
      type: "building",
      name: "Big Bowl Noodles",
      level: 29,
      order: 2,
      tiles: 4,
      waru: 30,
      banked: 450,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "My House (Country Mansion)", {
      type: "building",
      name: "My House (Country Mansion)",
      level: 30,
      order: 5,
      tiles: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      quantity: 1,
      fixed: true
    }), _defineProperty(_data4, "Lumiere", {
      type: "building",
      name: "Lumiere",
      level: 30,
      order: 3,
      tiles: 9,
      waru: 35,
      banked: 900,
      decor: 30,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Icy Treat Retreat (II)", {
      type: "building",
      name: "Icy Treat Retreat (II)",
      level: 30,
      order: 3,
      tiles: 9,
      waru: 32,
      banked: 700,
      decor: 40,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "Wholesome Milk Farm", {
      type: "building",
      name: "Wholesome Milk Farm",
      level: 35,
      order: 2,
      tiles: 4,
      waru: 40,
      banked: 700,
      decor: 50,
      quantity: 99,
      fixed: false
    }), _defineProperty(_data4, "The Secret Garden", {
      type: "building",
      name: "The Secret Garden",
      level: 35,
      order: 4,
      tiles: 16,
      waru: 82,
      banked: 6000,
      decor: 1500,
      quantity: 99,
      fixed: false
    }), _data4)
  }
};
var myHouseNames = {
  15: "My House",
  17: "My House (Homestead)",
  19: "My House (Manor)",
  22: "My House (Mighty Manor)",
  25: "My House (Country Mansion)"
};
var myHouseRoot = 0;
var beautyThresholds = [0, 100, 200, 500, 1000, 1700, 2600, 3700, 5000, 6500, 8200, 10100, 12200, 14500, 17000, 19700, 22600, 25700, 29100, 32800, 36800, 41100, 45700, 50600, 55800, 61400, 67400, 73800, 80600, 87900, 95700, 104000, 112800, 122200, 132200, 142800, 154100, 166100, 178900, 192500, 207000, 222400, 238800, 256200, 274700, 294400, 315300, 337500, 361100, 386200, 412900, 441300, 471500, 503600, 537700, 574000, 612600, 653600, 697200, 743500, 792700, 845000, 900600, 959700, 959700];

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

function beautyDetails(totalBeauty) {
  var tier = beautyTier(totalBeauty);
  return {
    total: totalBeauty,
    next: Math.max(0, beautyThresholds[Math.min(tier + 1, beautyThresholds.length - 1)] - totalBeauty),
    choices: Math.ceil(tier / 2),
    banked: 2 * tier,
    discount: Math.ceil(tier / 8),
    visit: tier
  };
}
function networkDecor(decor, paths) {
  return Math.min(decor, Math.floor(paths * (200 + 0.02 * decor)));
}
function networkWaru(waru, paths) {
  return Math.min(waru, Math.floor(paths * (5 + 0.02 * waru)));
}
var aufhebenWaru = 1;
;// CONCATENATED MODULE: ./src/StateProvider.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { StateProvider_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function StateProvider_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var StateContext = (0,solid/* createContext */.kr)();

function adjustedIndex(oldIndex, oldOrder, newOrder) {
  var oldRow = Math.floor(oldIndex / oldOrder);
  var oldCol = oldIndex % oldOrder;
  return oldRow * newOrder + oldCol;
}

;

function halfBoundary(row, column, index, order) {
  var boundary = [];

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

;

function nextColor(i, s, l) {
  return "hsl(".concat(i * 180 * (3 - Math.sqrt(5)), ", ").concat(s, "%, ").concat(l, "%)"); // use golden angle
}

function layoutStats(config, grid) {
  var network = new dsforest.DisjointSet();
  var blankRoots = [];
  var roadRoots = [];
  var decorRoots = new Map();
  var buildingRoots = new Map();
  var totalBeauty = 0;
  grid.forEach(function (tile, index) {
    var data = tile.data,
        position = tile.position;

    switch (data.type) {
      case "blank":
        blankRoots.push(index);
        break;

      case "road":
        network.makeSet(index);
        position.boundary.forEach(function (idx) {
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
  var decorNames = [];
  decorRoots.forEach(function (roots, name) {
    decorNames.push(name);
    var decor = objects.decor.data[name].decor;
    totalBeauty += decor * roots.length + roots.reduce(function (bonusDecor, root) {
      var position = grid[root].position;
      var paths = position.boundary.reduce(function (count, index) {
        if (grid[index].data.type === "road" && network.areConnected(myHouseRoot, index)) {
          return count + 1;
        }

        return count;
      }, 0);

      if (paths > 0) {
        bonusDecor += networkDecor(decor, paths);
      }

      return bonusDecor;
    }, 0);
  });
  var buildingNames = [];
  buildingRoots.forEach(function (roots, name) {
    buildingNames.push(name);
    totalBeauty += objects.building.data[name].decor * roots.length;
  });
  var finalWaru = config.useAufheben ? aufhebenWaru : 0;
  var beauty = beautyDetails(totalBeauty);
  var bonusBanked = beauty.banked;
  var lastOptimalCycle = 0;
  var products = [0];
  buildingRoots.forEach(function (roots) {
    roots.forEach(function (root) {
      var _grid$root = grid[root],
          data = _grid$root.data,
          position = _grid$root.position;

      if (data.waru > 0 && data.banked > 0) {
        var paths = position.boundary.reduce(function (count, index) {
          if (grid[index].data.type === "road" && network.areConnected(myHouseRoot, index)) {
            return count + 1;
          }

          return count;
        }, 0);
        var totalWaru = data.waru + (paths > 0 ? networkWaru(data.waru, paths) : 0) + finalWaru;
        var totalBanked = data.banked + bonusBanked;
        var cycles = totalBanked / totalWaru;
        var remWaru = totalBanked % totalWaru;
        var lowerCycles = Math.floor(cycles);
        var upperCycles = Math.ceil(cycles);
        lastOptimalCycle = lastOptimalCycle > 0 ? Math.min(lastOptimalCycle, lowerCycles) : lowerCycles;

        for (var i = 1; i <= lowerCycles; i++) {
          products[i] = (products[i] || 0) + totalWaru;
        }

        if (remWaru > 0) {
          products[upperCycles] = (products[upperCycles] || 0) + remWaru;
        }
      }
    });
  });
  var totalInNetwork = roadRoots.reduce(function (count, root) {
    if (network.areConnected(myHouseRoot, root)) {
      ++count;
    }

    return count;
  }, 0);
  return {
    network: network,
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
        pairs: Object.fromEntries(Array.from(decorRoots, function (_ref, index) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              roots = _ref2[1];

          return [name, {
            backgroundColor: nextColor(index + buildingRoots.size, 80, 80),
            roots: roots
          }];
        }))
      },
      building: {
        names: buildingNames,
        pairs: Object.fromEntries(Array.from(buildingRoots, function (_ref3, index) {
          var _ref4 = _slicedToArray(_ref3, 2),
              name = _ref4[0],
              roots = _ref4[1];

          return [name, {
            backgroundColor: nextColor(index, 80, 80),
            roots: roots
          }];
        }))
      }
    },
    beauty: beauty,
    production: {
      lastOptimalCycle: lastOptimalCycle,
      lastOptimalRate: products[lastOptimalCycle],
      products: products.reduce(function (total, marginal, index) {
        if (index > 0) {
          total.push(total[index - 1] + marginal);
        } else {
          total.push(marginal);
        }

        return total;
      }, [])
    }
  };
}

;

function createTiles(config, grid, data, _ref5) {
  var row = _ref5.row,
      column = _ref5.column;
  var interiorLowerRow = row;
  var interiorLowerCol = column;
  var interiorUpperRow = interiorLowerRow + data.order - 1;
  var interiorUpperCol = interiorLowerCol + data.order - 1;

  if (interiorUpperRow >= config.order || interiorUpperCol >= config.order) {
    return {
      err: "Out-of-bounds positioning",
      tiles: undefined
    };
  }

  var boundaryLowerRow = interiorLowerRow - 1;
  var boundaryLowerCol = interiorLowerCol - 1;
  var boundaryUpperRow = interiorUpperRow + 1;
  var boundaryUpperCol = interiorUpperCol + 1;
  var tiles = [];
  var interior = [],
      boundary = [];

  for (var r = boundaryLowerRow; r <= boundaryUpperRow; ++r) {
    for (var c = boundaryLowerCol; c <= boundaryUpperCol; ++c) {
      var index = r * config.order + c;

      if (r >= interiorLowerRow && r <= interiorUpperRow && c >= interiorLowerCol && c <= interiorUpperCol) {
        var tile = grid[index];

        if (tile && tile.data.tiles > 0) {
          return {
            err: "Tiles are already occupied",
            tiles: undefined
          };
        }

        interior.push(index);
        tiles.push({
          data: data,
          position: {
            row: r,
            column: c,
            index: index,
            root: interior[0],
            interior: interior,
            boundary: boundary
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
    tiles: tiles
  };
}

;

function createGrid(config, tiling) {
  var grid = [];

  if (tiling) {
    tiling.forEach(function (_ref6) {
      var type = _ref6.type,
          name = _ref6.name,
          roots = _ref6.roots;
      var data = objects[type].data[name];

      if (type === "blank" || type === "road") {
        roots.forEach(function (root) {
          var row = Math.floor(root / config.order);
          var column = root % config.order;
          grid[root] = {
            data: data,
            position: {
              row: row,
              column: column,
              index: root,
              root: root,
              interior: [root],
              boundary: halfBoundary(row, column, root, config.order)
            }
          };
        });
      } else if (type === "decor" || type === "building") {
        roots.forEach(function (root) {
          var _createTiles = createTiles(config, grid, data, {
            row: Math.floor(root / config.order),
            column: root % config.order
          }),
              tiles = _createTiles.tiles;

          tiles.forEach(function (tile) {
            grid[tile.position.index] = tile;
          });
        });
      }
    });
  } else {
    var baseData = objects[config.useAutofill ? "road" : "blank"].data[""];
    var myHouseData = objects.building.data[myHouseNames[config.order]];
    var myHouseInterior = [];
    var myHouseBoundary = [];

    for (var r = 0; r < config.order; ++r) {
      for (var c = 0; c < config.order; ++c) {
        var index = r * config.order + c;

        if (r < myHouseData.order && c < myHouseData.order) {
          myHouseInterior.push(index);
          grid.push({
            data: myHouseData,
            position: {
              row: r,
              column: c,
              index: index,
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
              index: index,
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

function StateProvider(props) {
  var summary, tileData;
  var baseLevel = levels[0];
  var baseConfig = {
    level: baseLevel,
    order: orderLimits[baseLevel].min,
    mobCap: mobCapLimits[baseLevel].min,
    useAufheben: false,
    useAutofill: false
  };

  var _createStore = (0,dist_store/* createStore */.MT)({
    mode: "inspect",
    inspect: {
      root: myHouseRoot
    },
    decorate: {
      type: "building",
      name: objects.building.limits[baseLevel].min
    },
    config: baseConfig,
    grid: createGrid(baseConfig),
    presets: (JSON.parse(window.localStorage.getItem("presets")) || []).map(function (_ref7) {
      var title = _ref7.title,
          config = _ref7.config,
          tiling = _ref7.tiling;
      return {
        title: title,
        config: config,
        tiling: tiling,
        production: layoutStats(config, createGrid(config, tiling)).production
      };
    }),
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
      var _this$config = this.config,
          level = _this$config.level,
          order = _this$config.order,
          mobCap = _this$config.mobCap,
          useAufheben = _this$config.useAufheben;

      var _summary = summary(),
          tiling = _summary.tiling,
          production = _summary.production;

      var blank = tiling.blank,
          road = tiling.road,
          decor = tiling.decor,
          building = tiling.building;
      return {
        title: "Current",
        config: {
          level: level,
          order: order,
          mobCap: mobCap,
          useAufheben: useAufheben
        },
        tiling: [{
          type: "blank",
          name: "",
          roots: blank.roots
        }, {
          type: "road",
          name: "",
          roots: road.roots
        }].concat(_toConsumableArray(decor.names.map(function (name) {
          return {
            type: "decor",
            name: name,
            roots: decor.pairs[name].roots
          };
        })), _toConsumableArray(building.names.map(function (name) {
          return {
            type: "building",
            name: name,
            roots: building.pairs[name].roots
          };
        }))),
        production: production
      };
    }

  }),
      _createStore2 = _slicedToArray(_createStore, 2),
      state = _createStore2[0],
      setState = _createStore2[1];

  var stateSetters = {
    setChart: function setChart(chart) {
      setState("chart", chart);
    },
    setLevel: function setLevel(newLevel) {
      var oldOrder = state.config.order;
      var newOrder = orderLimits[newLevel].max;
      var oldMobCap = state.config.mobCap;
      var newMobCap = Math.min(Math.max(oldMobCap, mobCapLimits[newLevel].min), mobCapLimits[newLevel].max);
      (0,solid/* batch */.dC)(function () {
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
    setOrder: function setOrder(newOrder) {
      (0,solid/* batch */.dC)(function () {
        stateSetters.resizeGrid(state.config.order, newOrder);
      });
    },
    resizeGrid: function resizeGrid(oldOrder, newOrder) {
      setState("config", "order", newOrder);
      var _state$grid$state$ins = state.grid[state.inspect.root].position,
          row = _state$grid$state$ins.row,
          column = _state$grid$state$ins.column;
      stateSetters.setInspectRoot(row >= newOrder || column >= newOrder ? myHouseRoot : row * newOrder + column);
      setState("grid", state.grid[myHouseRoot].position.interior, function (_ref8) {
        var position = _ref8.position;
        return {
          data: objects.building.data[myHouseNames[newOrder]],
          position: position
        };
      });
      var oldRoots = new Set();
      var newGrid = [];
      var minOrder = Math.min(oldOrder, newOrder);

      for (var r = 0; r < newOrder; ++r) {
        for (var c = 0; c < newOrder; ++c) {
          if (r < oldOrder && c < oldOrder) {
            var _ret = function () {
              var oldIndex = r * oldOrder + c;
              var _state$grid$oldIndex$ = state.grid[oldIndex].position,
                  root = _state$grid$oldIndex$.root,
                  interior = _state$grid$oldIndex$.interior,
                  boundary = _state$grid$oldIndex$.boundary;

              if (oldRoots.has(root)) {
                return "continue";
              }

              var _state$grid$root = state.grid[root],
                  data = _state$grid$root.data,
                  position = _state$grid$root.position;

              if (position.row + data.order >= minOrder || position.column + data.order >= minOrder) {
                interior.forEach(function (index) {
                  var oldTile = state.grid[index];
                  var _oldTile$position = oldTile.position,
                      row = _oldTile$position.row,
                      column = _oldTile$position.column;

                  if (row >= minOrder || column >= minOrder) {
                    return;
                  }

                  var newIndex = adjustedIndex(index, oldOrder, newOrder);
                  newGrid[newIndex] = {
                    data: state.baseData,
                    position: _objectSpread(_objectSpread({}, oldTile.position), {}, {
                      index: newIndex,
                      root: newIndex,
                      interior: [newIndex],
                      boundary: halfBoundary(row, column, newIndex, newOrder)
                    })
                  };
                });
              } else {
                var newInterior = interior.map(function (index) {
                  return adjustedIndex(index, oldOrder, newOrder);
                });
                var newBoundary = boundary.map(function (index) {
                  return adjustedIndex(index, oldOrder, newOrder);
                });
                newInterior.forEach(function (index, i) {
                  var oldTile = state.grid[interior[i]];
                  newGrid[index] = _objectSpread(_objectSpread({}, oldTile), {}, {
                    position: _objectSpread(_objectSpread({}, oldTile.position), {}, {
                      index: index,
                      root: newInterior[0],
                      interior: newInterior,
                      boundary: newBoundary
                    })
                  });
                });
              }

              oldRoots.add(root);
            }();

            if (_ret === "continue") continue;
          } else {
            var newIndex = r * newOrder + c;
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
            };
          }
        }
      }

      setState("grid", newGrid);
    },
    setMobCap: function setMobCap(newMobCap) {
      setState("config", "mobCap", newMobCap);
    },
    toggleAufheben: function toggleAufheben() {
      setState("config", "useAufheben", !state.config.useAufheben);
    },
    setMode: function setMode(newMode) {
      setState("mode", newMode);
    },
    setDecorateType: function setDecorateType(newType) {
      setState("decorate", {
        type: newType,
        name: objects[newType].limits[state.config.level].min
      });
    },
    setDecorateName: function setDecorateName(newName) {
      setState("decorate", "name", newName);
    },
    toggleAutofill: function toggleAutofill() {
      setState("config", "useAutofill", !state.config.useAutofill);
      var targetType = state.config.useAutofill ? "blank" : "road";
      setState("grid", state.summary.tiling[targetType].roots, function (_ref9) {
        var position = _ref9.position;
        return {
          data: state.baseData,
          position: position
        };
      });
    },
    loadPreset: function loadPreset(index) {
      var _state$presets$index = state.presets[index],
          config = _state$presets$index.config,
          tiling = _state$presets$index.tiling;
      (0,solid/* batch */.dC)(function () {
        setState("config", _objectSpread(_objectSpread({}, config), {}, {
          useAutofill: false
        }));
        setState("grid", createGrid(config, tiling));
        stateSetters.setInspectRoot(myHouseRoot);
      });
    },
    deletePreset: function deletePreset(index) {
      setState("presets", [].concat(_toConsumableArray(state.presets.slice(0, index)), _toConsumableArray(state.presets.slice(index + 1))));
    },
    createPreset: function createPreset(title) {
      setState("presets", function (presets) {
        return [].concat(_toConsumableArray(presets), [_objectSpread(_objectSpread({}, state.preset), {}, {
          title: title
        })]);
      });
    },
    setInspectRoot: function setInspectRoot(newRoot) {
      setState("inspect", "root", newRoot);
    },
    insertObject: function insertObject(position) {
      var _state$decorate = state.decorate,
          type = _state$decorate.type,
          name = _state$decorate.name;
      var data = objects[type].data[name];

      if (!data) {
        return "No object selected";
      }

      if (data.tiles > 0 && state.summary.free < data.tiles) {
        return "Exceeded required number of free tiles";
      }

      if (data.quantity > 0) {
        var entry = state.summary.tiling[type].pairs[name];

        if (entry && entry.roots.length + 1 > data.quantity) {
          return "\"".concat(name, "\" is limited to a quantity of ").concat(data.quantity);
        }
      }

      if (data.type === "road") {
        if (state.grid[position.index].data.tiles > 0) {
          return "Tiles are already occupied";
        }

        (0,solid/* batch */.dC)(function () {
          setState("grid", position.index, function (_ref10) {
            var position = _ref10.position;
            return {
              data: data,
              position: position
            };
          });
          stateSetters.setInspectRoot(position.index);
        });
        return;
      } else {
        var _createTiles2 = createTiles(state.config, state.grid, data, position),
            err = _createTiles2.err,
            tiles = _createTiles2.tiles;

        (0,solid/* batch */.dC)(function () {
          if (!err) {
            tiles.forEach(function (tile) {
              setState("grid", tile.position.index, tile);
            });
            stateSetters.setInspectRoot(position.index);
          }
        });
        return err;
      }
    },
    removeObject: function removeObject() {
      var tile = state.grid[state.inspect.root];

      if (tile.data.fixed) {
        return "Object is fixed to the grid";
      }

      setState("grid", tile.position.interior, function (_ref11) {
        var position = _ref11.position;
        var row = position.row,
            column = position.column,
            index = position.index;
        return {
          data: state.baseData,
          position: _objectSpread(_objectSpread({}, position), {}, {
            root: index,
            interior: [index],
            boundary: halfBoundary(row, column, index, state.config.order)
          })
        };
      });
    },
    clearGrid: function clearGrid() {
      var targetType = state.config.useAutofill ? "blank" : "road";
      setState("grid", function (_ref12) {
        var data = _ref12.data;
        return data.type === targetType || !data.fixed;
      }, function (_ref13) {
        var position = _ref13.position;
        var row = position.row,
            column = position.column,
            index = position.index;
        return {
          data: state.baseData,
          position: _objectSpread(_objectSpread({}, position), {}, {
            root: index,
            interior: [index],
            boundary: halfBoundary(row, column, index, state.config.order)
          })
        };
      });
    },
    updateChart: function updateChart() {
      var presets = [].concat(_toConsumableArray(state.presets), [state.preset]);

      var _presets$reduce = presets.reduce(function (props, _ref14, index) {
        var title = _ref14.title,
            production = _ref14.production;
        var color = nextColor(index, 100, 50);
        var minCycle = props.minCycle,
            maxCycle = props.maxCycle;
        var lastOptimalCycle = production.lastOptimalCycle,
            products = production.products;
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
      }),
          minCycle = _presets$reduce.minCycle,
          maxCycle = _presets$reduce.maxCycle,
          datasets = _presets$reduce.datasets;

      var _presets$reduce2 = presets.reduce(function (props, _ref15) {
        var production = _ref15.production;
        var minProduct = props.minProduct,
            maxProduct = props.maxProduct;
        var products = production.products;
        props.minProduct = minProduct > 0 ? Math.min(minProduct, products[minCycle]) : products[minCycle];
        var localMaxCycle = Math.min(maxCycle, products.length - 1);
        props.maxProduct = maxProduct > 0 ? Math.max(maxProduct, products[localMaxCycle]) : products[localMaxCycle];
        return props;
      }, {
        minProduct: 0,
        maxProduct: 0
      }),
          minProduct = _presets$reduce2.minProduct,
          maxProduct = _presets$reduce2.maxProduct;

      setState("chart", "data", {
        labels: Array.from({
          length: maxCycle + 1
        }, function (_, i) {
          return 10 * i;
        }),
        datasets: datasets
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
  summary = (0,solid/* createMemo */.Py)(function () {
    return layoutStats(state.config, state.grid);
  });
  tileData = (0,solid/* createMemo */.Py)(function () {
    var _state$grid$state$ins2 = state.grid[state.inspect.root],
        data = _state$grid$state$ins2.data,
        position = _state$grid$state$ins2.position;
    var paths = position.boundary.reduce(function (count, index) {
      if (state.grid[index].data.type === "road" && state.summary.network.areConnected(myHouseRoot, index)) {
        return count + 1;
      }

      return count;
    }, 0);
    var bonusWaru = 0;
    var finalWaru = 0;
    var bonusBanked = 0;
    var bonusDecor = 0;

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

    return _objectSpread(_objectSpread({}, data), {}, {
      paths: paths,
      bonusWaru: bonusWaru,
      finalWaru: finalWaru,
      bonusBanked: bonusBanked,
      bonusDecor: bonusDecor
    });
  });
  var store = [state, stateSetters];
  return (0,solid/* createComponent */.LM)(StateContext.Provider, {
    value: store,

    get children() {
      return props.children;
    }

  });
}
function useState() {
  return (0,solid/* useContext */.qp)(StateContext);
}
;// CONCATENATED MODULE: ./src/components/Config.jsx






const _tmpl$ = (0,web/* template */.XK)(`<label for="level">Level</label>`, 2),
      _tmpl$2 = (0,web/* template */.XK)(`<select id="level"></select>`, 2),
      _tmpl$3 = (0,web/* template */.XK)(`<option></option>`, 2),
      _tmpl$4 = (0,web/* template */.XK)(`<label for="order">Dimensions</label>`, 2),
      _tmpl$5 = (0,web/* template */.XK)(`<select id="order"></select>`, 2),
      _tmpl$6 = (0,web/* template */.XK)(`<label for="mob-cap">Monster slots</label>`, 2),
      _tmpl$7 = (0,web/* template */.XK)(`<select id="mob-cap"></select>`, 2),
      _tmpl$8 = (0,web/* template */.XK)(`<div><input type="checkbox" id="aufheben"><label for="aufheben">Use Aufheben effect</label></div>`, 5),
      _tmpl$9 = (0,web/* template */.XK)(`<fieldset><legend>Config</legend><div class="config"></div></fieldset>`, 6);

function Config_slicedToArray(arr, i) { return Config_arrayWithHoles(arr) || Config_iterableToArrayLimit(arr, i) || Config_unsupportedIterableToArray(arr, i) || Config_nonIterableRest(); }

function Config_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Config_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Config_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Config_arrayLikeToArray(o, minLen); }

function Config_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Config_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Config_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Level() {
  var _useState = useState(),
      _useState2 = Config_slicedToArray(_useState, 2),
      state = _useState2[0],
      setLevel = _useState2[1].setLevel;

  var onChange = function onChange(event) {
    setLevel(Number(event.currentTarget.value));
  };

  return [_tmpl$.cloneNode(true), function () {
    var _el$2 = _tmpl$2.cloneNode(true);

    _el$2.addEventListener("change", onChange);

    (0,web/* insert */.$T)(_el$2, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: levels,
      children: function children(level) {
        return function () {
          var _el$3 = _tmpl$3.cloneNode(true);

          _el$3.value = level;

          (0,web/* insert */.$T)(_el$3, level);

          return _el$3;
        }();
      }
    }));

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$2.value = state.config.level;
    });

    return _el$2;
  }()];
}

function Order() {
  var _useState3 = useState(),
      _useState4 = Config_slicedToArray(_useState3, 2),
      state = _useState4[0],
      setOrder = _useState4[1].setOrder;

  var onChange = function onChange(event) {
    setOrder(Number(event.currentTarget.value));
  };

  var disabled = function disabled(order) {
    var _orderLimits$state$co = orderLimits[state.config.level],
        min = _orderLimits$state$co.min,
        max = _orderLimits$state$co.max;
    return order < min || order > max;
  };

  return [_tmpl$4.cloneNode(true), function () {
    var _el$5 = _tmpl$5.cloneNode(true);

    _el$5.addEventListener("change", onChange);

    (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: orders,
      children: function children(order) {
        return function () {
          var _el$6 = _tmpl$3.cloneNode(true);

          _el$6.value = order;

          (0,web/* insert */.$T)(_el$6, "".concat(order, "\xD7").concat(order));

          (0,solid/* createRenderEffect */.F3)(function () {
            return _el$6.disabled = disabled(order);
          });

          return _el$6;
        }();
      }
    }));

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$5.value = state.config.order;
    });

    return _el$5;
  }()];
}

function MobCap() {
  var _useState5 = useState(),
      _useState6 = Config_slicedToArray(_useState5, 2),
      state = _useState6[0],
      setMobCap = _useState6[1].setMobCap;

  var onChange = function onChange(event) {
    setMobCap(Number(event.currentTarget.value));
  };

  var disabled = function disabled(mobCap) {
    var _mobCapLimits$state$c = mobCapLimits[state.config.level],
        min = _mobCapLimits$state$c.min,
        max = _mobCapLimits$state$c.max;
    return mobCap < min || mobCap > max;
  };

  return [_tmpl$6.cloneNode(true), function () {
    var _el$8 = _tmpl$7.cloneNode(true);

    _el$8.addEventListener("change", onChange);

    (0,web/* insert */.$T)(_el$8, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: mobCaps,
      children: function children(mobCap) {
        return function () {
          var _el$9 = _tmpl$3.cloneNode(true);

          _el$9.value = mobCap;

          (0,web/* insert */.$T)(_el$9, mobCap);

          (0,solid/* createRenderEffect */.F3)(function () {
            return _el$9.disabled = disabled(mobCap);
          });

          return _el$9;
        }();
      }
    }));

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$8.value = state.config.mobCap;
    });

    return _el$8;
  }()];
}

function Aufheben() {
  var _useState7 = useState(),
      _useState8 = Config_slicedToArray(_useState7, 2),
      state = _useState8[0],
      toggleAufheben = _useState8[1].toggleAufheben;

  var onChange = function onChange() {
    toggleAufheben();
  };

  return function () {
    var _el$10 = _tmpl$8.cloneNode(true),
        _el$11 = _el$10.firstChild;

    _el$11.addEventListener("change", onChange);

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$11.checked = state.config.useAufheben;
    });

    return _el$10;
  }();
}

function Config() {
  return function () {
    var _el$12 = _tmpl$9.cloneNode(true),
        _el$13 = _el$12.firstChild,
        _el$14 = _el$13.nextSibling;

    (0,web/* insert */.$T)(_el$14, (0,solid/* createComponent */.LM)(Level, {}), null);

    (0,web/* insert */.$T)(_el$14, (0,solid/* createComponent */.LM)(Order, {}), null);

    (0,web/* insert */.$T)(_el$14, (0,solid/* createComponent */.LM)(MobCap, {}), null);

    (0,web/* insert */.$T)(_el$14, (0,solid/* createComponent */.LM)(Aufheben, {}), null);

    return _el$12;
  }();
}

/* harmony default export */ const components_Config = (Config);
;// CONCATENATED MODULE: ./src/components/Mode.jsx









const Mode_tmpl$ = (0,web/* template */.XK)(`<td>Yes</td>`, 2),
      Mode_tmpl$2 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Road</td></tr><tr><th>Connected to house</th></tr></tbody>`, 12),
      Mode_tmpl$3 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Decor</td></tr><tr><th>Name</th><td></td></tr><tr><th>Adjacent roads (in-network)</th><td></td></tr><tr><th>Aesthetic points</th><td></td></tr></tbody>`, 26),
      Mode_tmpl$4 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Building</td></tr><tr><th>Name</th><td></td></tr><tr><th>Adjacent roads (in-network)</th><td></td></tr><tr><th>Production rate (W/10 mins)</th><td></td></tr><tr><th>Storage capacity (W)</th><td></td></tr><tr><th>Aesthetic points</th><td></td></tr></tbody>`, 38),
      Mode_tmpl$5 = (0,web/* template */.XK)(`<table><caption>Tile properties</caption></table>`, 4),
      Mode_tmpl$6 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Blank tile</td></tr></tbody>`, 8),
      Mode_tmpl$7 = (0,web/* template */.XK)(`<td>No</td>`, 2),
      Mode_tmpl$8 = (0,web/* template */.XK)(`<label for="decorate-type">Type</label>`, 2),
      Mode_tmpl$9 = (0,web/* template */.XK)(`<select id="decorate-type"></select>`, 2),
      _tmpl$10 = (0,web/* template */.XK)(`<option></option>`, 2),
      _tmpl$11 = (0,web/* template */.XK)(`<label for="decorate-name">Name</label>`, 2),
      _tmpl$12 = (0,web/* template */.XK)(`<select id="decorate-name"></select>`, 2),
      _tmpl$13 = (0,web/* template */.XK)(`<div><input type="checkbox" id="autofill"><label for="autofill">Autofill roads</label></div>`, 5),
      _tmpl$14 = (0,web/* template */.XK)(`<button type="button">Switch to Decorate mode</button>`, 2),
      _tmpl$15 = (0,web/* template */.XK)(`<fieldset><legend></legend><div></div></fieldset>`, 6),
      _tmpl$16 = (0,web/* template */.XK)(`<button type="button">Switch to Inspect mode</button>`, 2);

function Mode_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Mode_slicedToArray(arr, i) { return Mode_arrayWithHoles(arr) || Mode_iterableToArrayLimit(arr, i) || Mode_unsupportedIterableToArray(arr, i) || Mode_nonIterableRest(); }

function Mode_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Mode_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Mode_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mode_arrayLikeToArray(o, minLen); }

function Mode_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Mode_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Mode_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Inspect() {
  var _useState = useState(),
      _useState2 = Mode_slicedToArray(_useState, 1),
      state = _useState2[0];

  return function () {
    var _el$ = Mode_tmpl$5.cloneNode(true),
        _el$2 = _el$.firstChild;

    (0,web/* insert */.$T)(_el$, (0,solid/* createComponent */.LM)(solid/* Switch */.rs, {
      get fallback() {
        return Mode_tmpl$6.cloneNode(true);
      },

      get children() {
        return [(0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.tileData.type === "road";
          },

          get children() {
            var _el$3 = Mode_tmpl$2.cloneNode(true),
                _el$4 = _el$3.firstChild,
                _el$5 = _el$4.nextSibling,
                _el$6 = _el$5.firstChild;

            (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
              get when() {
                return state.tileData.paths > 0;
              },

              get fallback() {
                return Mode_tmpl$7.cloneNode(true);
              },

              get children() {
                return Mode_tmpl$.cloneNode(true);
              }

            }), null);

            return _el$3;
          }

        }), (0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.tileData.type === "decor";
          },

          get children() {
            var _el$8 = Mode_tmpl$3.cloneNode(true),
                _el$9 = _el$8.firstChild,
                _el$10 = _el$9.nextSibling,
                _el$11 = _el$10.firstChild,
                _el$12 = _el$11.nextSibling,
                _el$13 = _el$10.nextSibling,
                _el$14 = _el$13.firstChild,
                _el$15 = _el$14.nextSibling,
                _el$16 = _el$13.nextSibling,
                _el$17 = _el$16.firstChild,
                _el$18 = _el$17.nextSibling;

            (0,web/* insert */.$T)(_el$12, function () {
              return state.tileData.name;
            });

            (0,web/* insert */.$T)(_el$15, function () {
              return state.tileData.paths;
            });

            (0,web/* insert */.$T)(_el$18, function () {
              return "".concat(state.tileData.decor, " (+").concat(state.tileData.bonusDecor, ")");
            });

            return _el$8;
          }

        }), (0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.tileData.type === "building";
          },

          get children() {
            var _el$19 = Mode_tmpl$4.cloneNode(true),
                _el$20 = _el$19.firstChild,
                _el$21 = _el$20.nextSibling,
                _el$22 = _el$21.firstChild,
                _el$23 = _el$22.nextSibling,
                _el$24 = _el$21.nextSibling,
                _el$25 = _el$24.firstChild,
                _el$26 = _el$25.nextSibling,
                _el$27 = _el$24.nextSibling,
                _el$28 = _el$27.firstChild,
                _el$29 = _el$28.nextSibling,
                _el$30 = _el$27.nextSibling,
                _el$31 = _el$30.firstChild,
                _el$32 = _el$31.nextSibling,
                _el$33 = _el$30.nextSibling,
                _el$34 = _el$33.firstChild,
                _el$35 = _el$34.nextSibling;

            (0,web/* insert */.$T)(_el$23, function () {
              return state.tileData.name;
            });

            (0,web/* insert */.$T)(_el$26, function () {
              return state.tileData.paths;
            });

            (0,web/* insert */.$T)(_el$29, function () {
              return "".concat(state.tileData.waru, " (+").concat(state.tileData.bonusWaru, ") (+").concat(state.tileData.finalWaru, ")");
            });

            (0,web/* insert */.$T)(_el$32, function () {
              return "".concat(state.tileData.banked, " (+").concat(state.tileData.bonusBanked, ")");
            });

            (0,web/* insert */.$T)(_el$35, function () {
              return state.tileData.decor;
            });

            return _el$19;
          }

        })];
      }

    }), null);

    return _el$;
  }();
}

function DecorateType() {
  var _useState3 = useState(),
      _useState4 = Mode_slicedToArray(_useState3, 2),
      state = _useState4[0],
      setDecorateType = _useState4[1].setDecorateType;

  var onChange = function onChange(event) {
    setDecorateType(event.currentTarget.value);
  };

  var decorateTypes = Object.keys(objects).filter(function (type) {
    return type !== "blank";
  });
  return [Mode_tmpl$8.cloneNode(true), function () {
    var _el$39 = Mode_tmpl$9.cloneNode(true);

    _el$39.addEventListener("change", onChange);

    (0,web/* insert */.$T)(_el$39, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: decorateTypes,
      children: function children(type) {
        return function () {
          var _el$40 = _tmpl$10.cloneNode(true);

          _el$40.value = type;

          (0,web/* insert */.$T)(_el$40, function () {
            return type.charAt(0).toUpperCase() + type.slice(1);
          });

          return _el$40;
        }();
      }
    }));

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$39.value = state.decorate.type;
    });

    return _el$39;
  }()];
}

function DecorateName() {
  var _useState5 = useState(),
      _useState6 = Mode_slicedToArray(_useState5, 2),
      state = _useState6[0],
      setDecorateName = _useState6[1].setDecorateName;

  var onChange = function onChange(event) {
    setDecorateName(event.currentTarget.value);
  };

  var names = function names() {
    var _objects$state$decora = objects[state.decorate.type],
        names = _objects$state$decora.names,
        data = _objects$state$decora.data;
    return names.filter(function (name) {
      return !data[name].fixed;
    });
  };

  var disabled = function disabled(name) {
    return state.config.level < objects[state.decorate.type].data[name].level;
  };

  return (0,solid/* createComponent */.LM)(solid/* Show */.di, {
    get when() {
      return state.decorate.type !== "road";
    },

    get children() {
      return [_tmpl$11.cloneNode(true), function () {
        var _el$42 = _tmpl$12.cloneNode(true);

        _el$42.addEventListener("change", onChange);

        (0,web/* insert */.$T)(_el$42, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
          get each() {
            return names();
          },

          children: function children(name) {
            return function () {
              var _el$43 = _tmpl$10.cloneNode(true);

              _el$43.value = name;

              (0,web/* insert */.$T)(_el$43, name);

              (0,solid/* createRenderEffect */.F3)(function () {
                return _el$43.disabled = disabled(name);
              });

              return _el$43;
            }();
          }
        }));

        (0,solid/* createRenderEffect */.F3)(function (_p$) {
          var _v$ = !state.decorate.name,
              _v$2 = state.decorate.name;

          _v$ !== _p$._v$ && (_el$42.disabled = _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && (_el$42.value = _p$._v$2 = _v$2);
          return _p$;
        }, {
          _v$: undefined,
          _v$2: undefined
        });

        return _el$42;
      }()];
    }

  });
}

function Autofill() {
  var _useState7 = useState(),
      _useState8 = Mode_slicedToArray(_useState7, 2),
      state = _useState8[0],
      toggleAutofill = _useState8[1].toggleAutofill;

  var onChange = function onChange() {
    toggleAutofill();
  };

  return function () {
    var _el$44 = _tmpl$13.cloneNode(true),
        _el$45 = _el$44.firstChild;

    _el$45.addEventListener("change", onChange);

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$45.checked = state.config.useAutofill;
    });

    return _el$44;
  }();
}

function Mode() {
  var _useState9 = useState(),
      _useState10 = Mode_slicedToArray(_useState9, 2),
      state = _useState10[0],
      setMode = _useState10[1].setMode;

  var onClick = function onClick(data) {
    setMode(data.mode);
  };

  return function () {
    var _el$46 = _tmpl$15.cloneNode(true),
        _el$47 = _el$46.firstChild,
        _el$48 = _el$47.nextSibling;

    (0,web/* insert */.$T)(_el$47, function () {
      return "Mode: ".concat(state.mode);
    });

    (0,web/* insert */.$T)(_el$48, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.mode === "inspect";
      },

      get fallback() {
        return [(0,solid/* createComponent */.LM)(DecorateType, {}), (0,solid/* createComponent */.LM)(DecorateName, {}), (0,solid/* createComponent */.LM)(Autofill, {}), function () {
          var _el$50 = _tmpl$16.cloneNode(true);

          _el$50.$$click = onClick;
          _el$50.$$clickData = {
            mode: "inspect"
          };
          return _el$50;
        }()];
      },

      get children() {
        return [(0,solid/* createComponent */.LM)(Inspect, {}), function () {
          var _el$49 = _tmpl$14.cloneNode(true);

          _el$49.$$click = onClick;
          _el$49.$$clickData = {
            mode: "decorate"
          };
          return _el$49;
        }()];
      }

    }));

    (0,solid/* createRenderEffect */.F3)(function (_$p) {
      return (0,web/* classList */.s1)(_el$48, Mode_defineProperty({}, state.mode, true), _$p);
    });

    return _el$46;
  }();
}

/* harmony default export */ const components_Mode = (Mode);

(0,web/* delegateEvents */.Qj)(["click"]);
;// CONCATENATED MODULE: ./src/components/Grid.jsx











const Grid_tmpl$ = (0,web/* template */.XK)(`<div><select><option disabled hidden>Choose...</option></select><button type="button">Load</button><button type="button">Delete</button></div>`, 10),
      Grid_tmpl$2 = (0,web/* template */.XK)(`<div><input type="text" required placeholder="Enter a title..."><button type="button">Create</button></div>`, 5),
      Grid_tmpl$3 = (0,web/* template */.XK)(`<div><strong></strong></div>`, 4),
      Grid_tmpl$4 = (0,web/* template */.XK)(`<option></option>`, 2),
      Grid_tmpl$5 = (0,web/* template */.XK)(`<button type="button">Remove</button>`, 2),
      Grid_tmpl$6 = (0,web/* template */.XK)(`<button type="button">Clear</button>`, 2),
      Grid_tmpl$7 = (0,web/* template */.XK)(`<div><div class="grid-legend-item road-in-network"></div><div>Road (in-network)</div></div>`, 6),
      Grid_tmpl$8 = (0,web/* template */.XK)(`<div><div class="grid-legend-item road-out-network"></div><div>Road (out-network)</div></div>`, 6),
      Grid_tmpl$9 = (0,web/* template */.XK)(`<div><div class="grid-legend-item"></div><div>Blank tile</div></div>`, 6),
      Grid_tmpl$10 = (0,web/* template */.XK)(`<fieldset><legend>Grid</legend><div class="grid"><div class="grid-presets"></div><div class="grid-outer"><div class="grid-inner"></div></div><div class="grid-legend"></div><div class="grid-control"></div></div></fieldset>`, 16),
      Grid_tmpl$11 = (0,web/* template */.XK)(`<div></div>`, 2),
      Grid_tmpl$12 = (0,web/* template */.XK)(`<div><div class="grid-legend-item"></div><div></div></div>`, 6);

function Grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Grid_slicedToArray(arr, i) { return Grid_arrayWithHoles(arr) || Grid_iterableToArrayLimit(arr, i) || Grid_unsupportedIterableToArray(arr, i) || Grid_nonIterableRest(); }

function Grid_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Grid_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Grid_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Grid_arrayLikeToArray(o, minLen); }

function Grid_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Grid_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Grid_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Presets(_ref) {
  var alert = _ref.alert,
      setAlert = _ref.setAlert;

  var _useState = useState(),
      _useState2 = Grid_slicedToArray(_useState, 2),
      state = _useState2[0],
      _useState2$ = _useState2[1],
      loadPreset = _useState2$.loadPreset,
      deletePreset = _useState2$.deletePreset,
      createPreset = _useState2$.createPreset;

  var storePresets = function storePresets(presets) {
    try {
      window.localStorage.setItem("presets", presets);
    } catch (err) {
      return err.message;
    }
  };

  var _createSignal = (0,solid/* createSignal */.gQ)(-1),
      _createSignal2 = Grid_slicedToArray(_createSignal, 2),
      presetIndex = _createSignal2[0],
      setPresetIndex = _createSignal2[1];

  var onChange = function onChange(event) {
    setPresetIndex(Number(event.currentTarget.value));
  };

  var onLoadClick = function onLoadClick() {
    loadPreset(presetIndex());
    setPresetIndex(-1);
  };

  var onDeleteClick = function onDeleteClick() {
    var index = presetIndex();
    var title = state.presets[index].title;
    deletePreset(index);
    var err = storePresets(JSON.stringify(state.presets));

    if (err) {
      (0,solid/* batch */.dC)(function () {
        setAlert("status", "failure");
        setAlert("message", "Unable to delete preset \"".concat(title, "\" from local storage: ").concat(err, "."));
      });
    } else {
      (0,solid/* batch */.dC)(function () {
        setAlert("status", "success");
        setAlert("message", "Deleted preset \"".concat(title, "\" from local storage."));
      });
    }

    setPresetIndex(-1);
  };

  var _createSignal3 = (0,solid/* createSignal */.gQ)(""),
      _createSignal4 = Grid_slicedToArray(_createSignal3, 2),
      newTitle = _createSignal4[0],
      setNewTitle = _createSignal4[1];

  var onInput = function onInput(event) {
    setNewTitle(event.currentTarget.value);
  };

  var onCreateClick = function onCreateClick() {
    var title = newTitle();
    createPreset(title);
    var err = storePresets(JSON.stringify(state.presets.map(function (_ref2) {
      var title = _ref2.title,
          config = _ref2.config,
          tiling = _ref2.tiling;
      return {
        title: title,
        config: config,
        tiling: tiling
      };
    })));

    if (err) {
      (0,solid/* batch */.dC)(function () {
        setAlert("status", "failure");
        setAlert("message", "Unable to save preset \"".concat(title, "\" to local storage: ").concat(err));
      });
    } else {
      (0,solid/* batch */.dC)(function () {
        setAlert("status", "success");
        setAlert("message", "Saved preset \"".concat(title, "\" to local storage."));
      });
    }

    setPresetIndex(-1);
    setNewTitle("");
  };

  return [function () {
    var _el$ = Grid_tmpl$.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.firstChild,
        _el$4 = _el$2.nextSibling,
        _el$5 = _el$4.nextSibling;

    _el$2.addEventListener("change", onChange);

    _el$3.value = -1;

    (0,web/* insert */.$T)(_el$2, (0,solid/* createComponent */.LM)(solid/* Index */.gm, {
      get each() {
        return state.presets;
      },

      children: function children(preset, index) {
        return function () {
          var _el$11 = Grid_tmpl$4.cloneNode(true);

          _el$11.value = index;

          (0,web/* insert */.$T)(_el$11, function () {
            return preset().title;
          });

          return _el$11;
        }();
      }
    }), null);

    _el$4.$$click = onLoadClick;
    _el$5.$$click = onDeleteClick;

    (0,solid/* createRenderEffect */.F3)(function (_p$) {
      var _v$ = presetIndex(),
          _v$2 = !state.presets.length,
          _v$3 = presetIndex() < 0,
          _v$4 = presetIndex() < 0;

      _v$ !== _p$._v$ && (_el$2.value = _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && (_el$2.disabled = _p$._v$2 = _v$2);
      _v$3 !== _p$._v$3 && (_el$4.disabled = _p$._v$3 = _v$3);
      _v$4 !== _p$._v$4 && (_el$5.disabled = _p$._v$4 = _v$4);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined,
      _v$3: undefined,
      _v$4: undefined
    });

    return _el$;
  }(), function () {
    var _el$6 = Grid_tmpl$2.cloneNode(true),
        _el$7 = _el$6.firstChild,
        _el$8 = _el$7.nextSibling;

    _el$7.$$input = onInput;
    _el$8.$$click = onCreateClick;

    (0,solid/* createRenderEffect */.F3)(function (_p$) {
      var _v$5 = newTitle(),
          _v$6 = !newTitle();

      _v$5 !== _p$._v$5 && (_el$7.value = _p$._v$5 = _v$5);
      _v$6 !== _p$._v$6 && (_el$8.disabled = _p$._v$6 = _v$6);
      return _p$;
    }, {
      _v$5: undefined,
      _v$6: undefined
    });

    return _el$6;
  }(), (0,solid/* createComponent */.LM)(solid/* Show */.di, {
    get when() {
      return alert.status;
    },

    get children() {
      var _el$9 = Grid_tmpl$3.cloneNode(true),
          _el$10 = _el$9.firstChild;

      (0,web/* insert */.$T)(_el$10, function () {
        return "".concat(alert.status, "!");
      });

      (0,web/* insert */.$T)(_el$9, function () {
        return alert.message;
      }, null);

      (0,solid/* createRenderEffect */.F3)(function (_$p) {
        return (0,web/* classList */.s1)(_el$9, Grid_defineProperty({
          alert: true
        }, alert.status, true), _$p);
      });

      return _el$9;
    }

  })];
}

function Remove(_ref3) {
  var setAlert = _ref3.setAlert;

  var _useState3 = useState(),
      _useState4 = Grid_slicedToArray(_useState3, 2),
      state = _useState4[0],
      removeObject = _useState4[1].removeObject;

  var disabled = function disabled() {
    return state.grid[state.inspect.root].data.fixed;
  };

  var onClick = function onClick() {
    var err = removeObject();

    if (err) {
      (0,solid/* batch */.dC)(function () {
        setAlert("status", "failure");
        setAlert("message", "Unable to remove object: ".concat(err, "."));
      });
    }
  };

  return function () {
    var _el$12 = Grid_tmpl$5.cloneNode(true);

    _el$12.$$click = onClick;

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$12.disabled = disabled();
    });

    return _el$12;
  }();
}

function Clear() {
  var _useState5 = useState(),
      _useState6 = Grid_slicedToArray(_useState5, 2),
      _ = _useState6[0],
      clearGrid = _useState6[1].clearGrid;

  var onClick = function onClick() {
    clearGrid();
  };

  return function () {
    var _el$13 = Grid_tmpl$6.cloneNode(true);

    _el$13.$$click = onClick;
    return _el$13;
  }();
}

function Grid() {
  var _useState7 = useState(),
      _useState8 = Grid_slicedToArray(_useState7, 2),
      state = _useState8[0],
      _useState8$ = _useState8[1],
      setInspectRoot = _useState8$.setInspectRoot,
      insertObject = _useState8$.insertObject;

  var _createStore = (0,dist_store/* createStore */.MT)({
    status: "info",
    message: "Found ".concat(state.presets.length, " presets in local storage.")
  }),
      _createStore2 = Grid_slicedToArray(_createStore, 2),
      alert = _createStore2[0],
      setAlert = _createStore2[1];

  (0,solid/* createEffect */.GW)(function () {
    if (alert.status && alert.message) {
      setTimeout(function () {
        (0,solid/* batch */.dC)(function () {
          setAlert("status", "");
          setAlert("message", "");
        });
      }, 3000);
    }
  });

  var tileClassList = function tileClassList(_ref4) {
    var data = _ref4.data,
        position = _ref4.position;
    var classList = {
      "grid-tile": true,
      "grid-tile-inspect": position.root === state.inspect.root
    };

    if (data.type === "road") {
      classList[state.summary.network.areConnected(myHouseRoot, position.index) ? "road-in-network" : "road-out-network"] = true;
    }

    return classList;
  };

  var tileStyle = function tileStyle(_ref5) {
    var data = _ref5.data,
        position = _ref5.position;

    if (data.type === "decor" || data.type === "building") {
      var style = Grid_defineProperty({}, "background-color", state.summary.tiling[data.type].pairs[data.name].backgroundColor);

      var _state$grid$position$ = state.grid[position.root].position,
          row = _state$grid$position$.row,
          column = _state$grid$position$.column;

      if (position.row !== row) {
        style["border-top-style"] = "none";
      }

      if (position.column !== column + data.order - 1) {
        style["border-right-style"] = "none";
      }

      if (position.row !== row + data.order - 1) {
        style["border-bottom-style"] = "none";
      }

      if (position.column !== column) {
        style["border-left-style"] = "none";
      }

      return style;
    }
  };

  var onClick = function onClick(_ref6) {
    var tile = _ref6.tile;

    if (state.mode === "inspect") {
      setInspectRoot(tile.position.root);
    } else if (state.mode === "decorate") {
      var err = insertObject(tile.position);

      if (err) {
        (0,solid/* batch */.dC)(function () {
          setAlert("status", "failure");
          setAlert("message", "Unable to insert object: ".concat(err, "."));
        });
      }
    }
  };

  return function () {
    var _el$14 = Grid_tmpl$10.cloneNode(true),
        _el$15 = _el$14.firstChild,
        _el$16 = _el$15.nextSibling,
        _el$17 = _el$16.firstChild,
        _el$18 = _el$17.nextSibling,
        _el$19 = _el$18.firstChild,
        _el$20 = _el$18.nextSibling,
        _el$24 = _el$20.nextSibling;

    (0,web/* insert */.$T)(_el$17, (0,solid/* createComponent */.LM)(Presets, {
      alert: alert,
      setAlert: setAlert
    }));

    (0,web/* insert */.$T)(_el$19, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.grid;
      },

      children: function children(tile) {
        return function () {
          var _el$25 = Grid_tmpl$11.cloneNode(true);

          _el$25.$$click = onClick;
          _el$25.$$clickData = {
            tile: tile
          };

          (0,solid/* createRenderEffect */.F3)(function (_p$) {
            var _v$9 = tileClassList(tile),
                _v$10 = tileStyle(tile);

            _p$._v$9 = (0,web/* classList */.s1)(_el$25, _v$9, _p$._v$9);
            _p$._v$10 = (0,web/* style */.oB)(_el$25, _v$10, _p$._v$10);
            return _p$;
          }, {
            _v$9: undefined,
            _v$10: undefined
          });

          return _el$25;
        }();
      }
    }));

    (0,web/* insert */.$T)(_el$20, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.tiling.building.names;
      },

      children: function children(name) {
        return function () {
          var _el$26 = Grid_tmpl$12.cloneNode(true),
              _el$27 = _el$26.firstChild,
              _el$28 = _el$27.nextSibling;

          (0,web/* insert */.$T)(_el$28, name);

          (0,solid/* createRenderEffect */.F3)(function () {
            return _el$27.style.setProperty("background-color", state.summary.tiling.building.pairs[name].backgroundColor);
          });

          return _el$26;
        }();
      }
    }), null);

    (0,web/* insert */.$T)(_el$20, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.tiling.decor.names;
      },

      children: function children(name) {
        return function () {
          var _el$29 = Grid_tmpl$12.cloneNode(true),
              _el$30 = _el$29.firstChild,
              _el$31 = _el$30.nextSibling;

          (0,web/* insert */.$T)(_el$31, name);

          (0,solid/* createRenderEffect */.F3)(function () {
            return _el$30.style.setProperty("background-color", state.summary.tiling.decor.pairs[name].backgroundColor);
          });

          return _el$29;
        }();
      }
    }), null);

    (0,web/* insert */.$T)(_el$20, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.tiling.road.count.inNetwork > 0;
      },

      get children() {
        return Grid_tmpl$7.cloneNode(true);
      }

    }), null);

    (0,web/* insert */.$T)(_el$20, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.tiling.road.count.outNetwork > 0;
      },

      get children() {
        return Grid_tmpl$8.cloneNode(true);
      }

    }), null);

    (0,web/* insert */.$T)(_el$20, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.tiling.blank.roots.length > 0;
      },

      get children() {
        return Grid_tmpl$9.cloneNode(true);
      }

    }), null);

    (0,web/* insert */.$T)(_el$24, (0,solid/* createComponent */.LM)(Remove, {
      setAlert: setAlert
    }), null);

    (0,web/* insert */.$T)(_el$24, (0,solid/* createComponent */.LM)(Clear, {}), null);

    (0,solid/* createRenderEffect */.F3)(function (_p$) {
      var _v$7 = "repeat(".concat(state.config.order, ", auto)"),
          _v$8 = "repeat(".concat(state.config.order, ", auto)");

      _v$7 !== _p$._v$7 && _el$19.style.setProperty("grid-template-columns", _p$._v$7 = _v$7);
      _v$8 !== _p$._v$8 && _el$19.style.setProperty("grid-template-rows", _p$._v$8 = _v$8);
      return _p$;
    }, {
      _v$7: undefined,
      _v$8: undefined
    });

    return _el$14;
  }();
}

/* harmony default export */ const components_Grid = (Grid);

(0,web/* delegateEvents */.Qj)(["click", "input"]);
// EXTERNAL MODULE: ./node_modules/chart.js/dist/chart.esm.js + 1 modules
var chart_esm = __webpack_require__(181);
;// CONCATENATED MODULE: ./src/components/Stats.jsx






const Stats_tmpl$ = (0,web/* template */.XK)(`<tr><th colspan="2">Blank tiles</th><td colspan="1"></td></tr>`, 6),
      Stats_tmpl$2 = (0,web/* template */.XK)(`<tr><th colspan="2">Road (in-network)</th><td colspan="1"></td></tr>`, 6),
      Stats_tmpl$3 = (0,web/* template */.XK)(`<tr><th colspan="2">Road (out-network)</th><td colspan="1"></td></tr>`, 6),
      Stats_tmpl$4 = (0,web/* template */.XK)(`<table><caption>Object count</caption><thead><tr><th>Type</th><th>Name</th><th>Quantity</th></tr></thead><tbody><tr><th colspan="2">Remaining free tiles</th><td colspan="1"></td></tr></tbody></table>`, 22),
      Stats_tmpl$5 = (0,web/* template */.XK)(`<tr><td>Building</td><td></td><td></td></tr>`, 8),
      Stats_tmpl$6 = (0,web/* template */.XK)(`<tr><td>Decor</td><td></td><td></td></tr>`, 8),
      Stats_tmpl$7 = (0,web/* template */.XK)(`<table><caption>Beauty details</caption><thead><tr><th>Combine Result Choices</th><th>Building Storage Capacity (W)</th><th>Shop Discount</th><th>Special Merchant Visit</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody><tfoot><tr><th colspan="2">Total aesthetic points</th><td colspan="2"></td></tr><tr><th colspan="2">Points to next threshold</th><td colspan="2"></td></tr></tfoot></table>`, 42),
      Stats_tmpl$8 = (0,web/* template */.XK)(`<table><caption>Waru production</caption><thead><tr><th colspan="2" class="canvas-header">Production timeline</th></tr></thead><tbody><tr><td colspan="2" class="canvas-data"><canvas></canvas></td></tr></tbody><tfoot><tr><th>Max marginal product (W)</th><td></td></tr><tr><th>Time until diminishing marginal product (mins)</th><td></td></tr><tr><th>Total product (W)</th><td></td></tr><tr><th>Total production time (mins)</th><td></td></tr></tfoot></table>`, 44),
      Stats_tmpl$9 = (0,web/* template */.XK)(`<fieldset><legend>Stats</legend><div class="stats"></div></fieldset>`, 6);

function Stats_slicedToArray(arr, i) { return Stats_arrayWithHoles(arr) || Stats_iterableToArrayLimit(arr, i) || Stats_unsupportedIterableToArray(arr, i) || Stats_nonIterableRest(); }

function Stats_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Stats_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Stats_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Stats_arrayLikeToArray(o, minLen); }

function Stats_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Stats_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Stats_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




chart_esm/* Chart.register */.kL.register(chart_esm/* LineElement */.jn, chart_esm/* PointElement */.od, chart_esm/* LineController */.ST, chart_esm/* CategoryScale */.uw, chart_esm/* LinearScale */.f$, chart_esm/* Legend */.De, chart_esm/* Tooltip */.u);

function Objects() {
  var _useState = useState(),
      _useState2 = Stats_slicedToArray(_useState, 1),
      state = _useState2[0];

  return function () {
    var _el$ = Stats_tmpl$4.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling,
        _el$4 = _el$3.nextSibling,
        _el$14 = _el$4.firstChild,
        _el$15 = _el$14.firstChild,
        _el$16 = _el$15.nextSibling;

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.tiling.building.names;
      },

      children: function children(name) {
        return function () {
          var _el$17 = Stats_tmpl$5.cloneNode(true),
              _el$18 = _el$17.firstChild,
              _el$19 = _el$18.nextSibling,
              _el$20 = _el$19.nextSibling;

          (0,web/* insert */.$T)(_el$19, name);

          (0,web/* insert */.$T)(_el$20, function () {
            return state.summary.tiling.building.pairs[name].roots.length;
          });

          return _el$17;
        }();
      }
    }), _el$14);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.tiling.decor.names;
      },

      children: function children(name) {
        return function () {
          var _el$21 = Stats_tmpl$6.cloneNode(true),
              _el$22 = _el$21.firstChild,
              _el$23 = _el$22.nextSibling,
              _el$24 = _el$23.nextSibling;

          (0,web/* insert */.$T)(_el$23, name);

          (0,web/* insert */.$T)(_el$24, function () {
            return state.summary.tiling.decor.pairs[name].roots.length;
          });

          return _el$21;
        }();
      }
    }), _el$14);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.tiling.blank.roots.length > 0;
      },

      get children() {
        var _el$5 = Stats_tmpl$.cloneNode(true),
            _el$6 = _el$5.firstChild,
            _el$7 = _el$6.nextSibling;

        (0,web/* insert */.$T)(_el$7, function () {
          return state.summary.tiling.blank.roots.length;
        });

        return _el$5;
      }

    }), _el$14);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.tiling.road.count.inNetwork > 0;
      },

      get children() {
        var _el$8 = Stats_tmpl$2.cloneNode(true),
            _el$9 = _el$8.firstChild,
            _el$10 = _el$9.nextSibling;

        (0,web/* insert */.$T)(_el$10, function () {
          return state.summary.tiling.road.count.inNetwork;
        });

        return _el$8;
      }

    }), _el$14);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.tiling.road.count.outNetwork > 0;
      },

      get children() {
        var _el$11 = Stats_tmpl$3.cloneNode(true),
            _el$12 = _el$11.firstChild,
            _el$13 = _el$12.nextSibling;

        (0,web/* insert */.$T)(_el$13, function () {
          return state.summary.tiling.road.count.outNetwork;
        });

        return _el$11;
      }

    }), _el$14);

    (0,web/* insert */.$T)(_el$16, function () {
      return state.summary.tiling.free.count;
    });

    return _el$;
  }();
}

function Beauty() {
  var _useState3 = useState(),
      _useState4 = Stats_slicedToArray(_useState3, 1),
      state = _useState4[0];

  return function () {
    var _el$25 = Stats_tmpl$7.cloneNode(true),
        _el$26 = _el$25.firstChild,
        _el$27 = _el$26.nextSibling,
        _el$28 = _el$27.nextSibling,
        _el$29 = _el$28.firstChild,
        _el$30 = _el$29.firstChild,
        _el$31 = _el$30.nextSibling,
        _el$32 = _el$31.nextSibling,
        _el$33 = _el$32.nextSibling,
        _el$34 = _el$28.nextSibling,
        _el$35 = _el$34.firstChild,
        _el$36 = _el$35.firstChild,
        _el$37 = _el$36.nextSibling,
        _el$38 = _el$35.nextSibling,
        _el$39 = _el$38.firstChild,
        _el$40 = _el$39.nextSibling;

    (0,web/* insert */.$T)(_el$30, function () {
      return "+".concat(state.summary.beauty.choices, "%");
    });

    (0,web/* insert */.$T)(_el$31, function () {
      return "+".concat(state.summary.beauty.banked);
    });

    (0,web/* insert */.$T)(_el$32, function () {
      return "".concat(state.summary.beauty.discount, "%");
    });

    (0,web/* insert */.$T)(_el$33, function () {
      return "+".concat(state.summary.beauty.visit, "%");
    });

    (0,web/* insert */.$T)(_el$37, function () {
      return state.summary.beauty.total;
    });

    (0,web/* insert */.$T)(_el$40, function () {
      return state.summary.beauty.next;
    });

    return _el$25;
  }();
}

function Production() {
  var _useState5 = useState(),
      _useState6 = Stats_slicedToArray(_useState5, 2),
      state = _useState6[0],
      _useState6$ = _useState6[1],
      setChart = _useState6$.setChart,
      updateChart = _useState6$.updateChart;

  var canvas;
  (0,solid/* onMount */.H3)(function () {
    setChart(new chart_esm/* Chart */.kL(canvas, {
      type: "line",
      options: {
        animation: false,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            labels: {
              usePointStyle: true
            },
            position: "bottom"
          },
          tooltip: {
            usePointStyle: true
          }
        },
        elements: {
          point: {
            pointStyle: "circle"
          }
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Time (mins)"
            }
          },
          y: {
            display: true,
            min: 0,
            title: {
              display: true,
              text: "Product (W)"
            }
          }
        }
      }
    }));
  });
  (0,solid/* createEffect */.GW)(function () {
    updateChart();
  });
  (0,solid/* onCleanup */.$W)(function () {
    state.chart.destroy();
  });
  return function () {
    var _el$41 = Stats_tmpl$8.cloneNode(true),
        _el$42 = _el$41.firstChild,
        _el$43 = _el$42.nextSibling,
        _el$44 = _el$43.nextSibling,
        _el$45 = _el$44.firstChild,
        _el$46 = _el$45.firstChild,
        _el$47 = _el$46.firstChild,
        _el$48 = _el$44.nextSibling,
        _el$49 = _el$48.firstChild,
        _el$50 = _el$49.firstChild,
        _el$51 = _el$50.nextSibling,
        _el$52 = _el$49.nextSibling,
        _el$53 = _el$52.firstChild,
        _el$54 = _el$53.nextSibling,
        _el$55 = _el$52.nextSibling,
        _el$56 = _el$55.firstChild,
        _el$57 = _el$56.nextSibling,
        _el$58 = _el$55.nextSibling,
        _el$59 = _el$58.firstChild,
        _el$60 = _el$59.nextSibling;

    var _ref$ = canvas;
    typeof _ref$ === "function" ? _ref$(_el$47) : canvas = _el$47;

    (0,web/* insert */.$T)(_el$51, function () {
      return state.summary.production.lastOptimalRate;
    });

    (0,web/* insert */.$T)(_el$54, function () {
      return 10 * state.summary.production.lastOptimalCycle;
    });

    (0,web/* insert */.$T)(_el$57, function () {
      return state.summary.production.products[state.summary.production.products.length - 1];
    });

    (0,web/* insert */.$T)(_el$60, function () {
      return 10 * (state.summary.production.products.length - 1);
    });

    return _el$41;
  }();
}

function Stats() {
  return function () {
    var _el$61 = Stats_tmpl$9.cloneNode(true),
        _el$62 = _el$61.firstChild,
        _el$63 = _el$62.nextSibling;

    (0,web/* insert */.$T)(_el$63, (0,solid/* createComponent */.LM)(Objects, {}), null);

    (0,web/* insert */.$T)(_el$63, (0,solid/* createComponent */.LM)(Beauty, {}), null);

    (0,web/* insert */.$T)(_el$63, (0,solid/* createComponent */.LM)(Production, {}), null);

    return _el$61;
  }();
}

/* harmony default export */ const components_Stats = (Stats);
;// CONCATENATED MODULE: ./src/App.jsx







function App() {
  return (0,solid/* createComponent */.LM)(StateProvider, {
    get children() {
      return [(0,solid/* createComponent */.LM)(components_Config, {}), (0,solid/* createComponent */.LM)(components_Mode, {}), (0,solid/* createComponent */.LM)(components_Grid, {}), (0,solid/* createComponent */.LM)(components_Stats, {})];
    }

  });
}

/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.jsx



(0,web/* render */.sY)(src_App, document.getElementById("app"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(473)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);