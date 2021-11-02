"use strict";
(self["webpackChunkfarm_previewer"] = self["webpackChunkfarm_previewer"] || []).push([[179],{

/***/ 532:
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
  free: {
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
      level: 1,
      order: 1,
      units: 0,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 0,
      fixed: false
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
      level: 1,
      order: 1,
      units: 0,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 0,
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
      level: 2,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 8,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Pine Tree", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 12,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Orange Mini Mushroom", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 9,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Heartfelt Garden", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 1000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Floral Archway", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 1500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Winged Archway", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 2000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Rice Candy Set", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 2700,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Sky-High Flower", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 1000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Stone Lantern", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 1500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Buddy Bloom", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 2000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Big Bass", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 2700,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Cannon", {
      level: 3,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 3200,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Nestled Egg", {
      level: 3,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 3500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Snowman Mask", {
      level: 3,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 4200,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Fishin' Pepe", {
      level: 3,
      order: 3,
      units: 9,
      waru: 0,
      banked: 0,
      decor: 4600,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Christmas Tree", {
      level: 3,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 4800,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Aran's Legacy", {
      level: 3,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 6000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Mount Monsmore", {
      level: 3,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 13000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Elluel Rune Tree", {
      level: 3,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 13000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "White Cube", {
      level: 4,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Red Cube", {
      level: 4,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Green Cube", {
      level: 4,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Orange Cube", {
      level: 4,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Blue Cube", {
      level: 4,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Black Cube", {
      level: 4,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Pine Tree", {
      level: 5,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 23,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Fallen Log", {
      level: 5,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 21,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Torch", {
      level: 5,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 27,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Oak Barrel", {
      level: 6,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 36,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Tiny Round Tree", {
      level: 6,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 45,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Haystack", {
      level: 6,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Round Tree", {
      level: 7,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 53,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Trash Box", {
      level: 7,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 53,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Wooden Timepost", {
      level: 7,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 60,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Tiny Sign", {
      level: 8,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 68,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Mini Flowerpot", {
      level: 8,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 72,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Little Scoop Tree", {
      level: 8,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 69,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Simple Swing", {
      level: 9,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Log Bench", {
      level: 9,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 68,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Scoop Tree", {
      level: 9,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 78,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Buncha Barrels", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 87,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Plain Sign", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 93,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Lil Evergreen", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 105,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Rock", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Flat Rock", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Pointy Rock", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 90,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Craggy Rock", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Towering Rock", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 113,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Banana Shake", {
      level: 10,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Mythic Monsterland", {
      level: 10,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 13500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Time Twister", {
      level: 10,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 9400,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Yeti's Hideout", {
      level: 10,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 11000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Green Nature", {
      level: 10,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 10200,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Flying Whale", {
      level: 10,
      order: 4,
      units: 16,
      waru: 0,
      banked: 0,
      decor: 17000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data3, "Stone Trash Can", {
      level: 11,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Triple Mushroom", {
      level: 11,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 90,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Round Topiary Tree", {
      level: 11,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Fresh Milk", {
      level: 11,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Evergreen", {
      level: 12,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 113,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Haycart", {
      level: 12,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 120,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Aged Cheese", {
      level: 12,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 480,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Broad Sign", {
      level: 13,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 143,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Streetlight", {
      level: 13,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 143,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Grape Vat", {
      level: 13,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 600,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Itty Bitty Puddle", {
      level: 14,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 180,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Orange Bin", {
      level: 14,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Green Bin", {
      level: 14,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Purple Bin", {
      level: 14,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Purple Mini Mushroom", {
      level: 15,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 165,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Classic Wooden Horse", {
      level: 15,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 165,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Fine Grape Juice", {
      level: 15,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 750,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Round Topiary", {
      level: 16,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 180,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "White Bench", {
      level: 16,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 180,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Double Cubist Tree", {
      level: 17,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 195,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "White Signpost", {
      level: 17,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 210,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Blooming Shrub", {
      level: 18,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 225,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Round Flowerpot", {
      level: 18,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 248,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Big Mushroom Family", {
      level: 19,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 240,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Trash Can", {
      level: 19,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 270,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Rickety Clocktower", {
      level: 20,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 300,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Triple Cubist Tree", {
      level: 20,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 285,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Bushy Gazebo", {
      level: 20,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 315,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Rustic Slide", {
      level: 20,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 270,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Maple Tree", {
      level: 21,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 330,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Willow Tree", {
      level: 21,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 330,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Little Flower Garden", {
      level: 22,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 345,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Woodsy Well", {
      level: 22,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 353,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Lil Star Tree", {
      level: 23,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 338,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "White Signboard", {
      level: 23,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 360,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Station Timepiece", {
      level: 24,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 375,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Floral Gazebo", {
      level: 24,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 368,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Cannonball Heap", {
      level: 25,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 390,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Gardener's Wheelbarrow", {
      level: 25,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 405,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Merry-Go-Round", {
      level: 25,
      order: 3,
      units: 9,
      waru: 0,
      banked: 0,
      decor: 2500,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Star Tree", {
      level: 26,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 420,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Fancy Bench", {
      level: 26,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 413,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Lil Heart Tree", {
      level: 27,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 435,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Heart Tree", {
      level: 27,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 465,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Rapunzel's Tower", {
      level: 27,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 2000,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Rustic Archway", {
      level: 28,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 473,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Shady Table", {
      level: 28,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 480,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Pretty Pond", {
      level: 29,
      order: 3,
      units: 9,
      waru: 0,
      banked: 0,
      decor: 600,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Rockin' Wooden Horse", {
      level: 29,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 510,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Fine Fountain", {
      level: 30,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 525,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Floral Swing", {
      level: 30,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 540,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Snack Shack", {
      level: 30,
      order: 1,
      units: 1,
      waru: 0,
      banked: 0,
      decor: 750,
      limit: 99,
      fixed: false
    }), _defineProperty(_data3, "Snow Crystal Core", {
      level: 32,
      order: 3,
      units: 9,
      waru: 0,
      banked: 0,
      decor: 3000,
      limit: 99
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
      level: 1,
      order: 5,
      units: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1,
      fixed: true
    }), _defineProperty(_data4, "Green Mushroom Hut", {
      level: 1,
      order: 2,
      units: 4,
      waru: 2,
      banked: 50,
      decor: 5,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Henesys Homestead", {
      level: 2,
      order: 2,
      units: 4,
      waru: 7,
      banked: 80,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Orange Mushroom House", {
      level: 2,
      order: 2,
      units: 4,
      waru: 3,
      banked: 60,
      decor: 5,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Monster Barn", {
      level: 3,
      order: 2,
      units: 4,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1,
      fixed: false
    }), _defineProperty(_data4, "Sturdy Straw House", {
      level: 3,
      order: 2,
      units: 4,
      waru: 5,
      banked: 50,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Red Mushroom Manor", {
      level: 3,
      order: 2,
      units: 4,
      waru: 6,
      banked: 100,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Rien Hot Springs", {
      level: 3,
      order: 2,
      units: 4,
      waru: 25,
      banked: 2200,
      decor: 200,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Mu Lung Barber Shop", {
      level: 3,
      order: 2,
      units: 4,
      waru: 27,
      banked: 1800,
      decor: 200,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Tip-Top Balloon Shop", {
      level: 3,
      order: 2,
      units: 4,
      waru: 35,
      banked: 3000,
      decor: 400,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Floatland Manor", {
      level: 3,
      order: 3,
      units: 9,
      waru: 23,
      banked: 2000,
      decor: 150,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Healthy Hospital", {
      level: 3,
      order: 3,
      units: 9,
      waru: 44,
      banked: 3500,
      decor: 250,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Monster Manor", {
      level: 3,
      order: 3,
      units: 9,
      waru: 42,
      banked: 5000,
      decor: 400,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Mr. Teddy X", {
      level: 3,
      order: 3,
      units: 9,
      waru: 48,
      banked: 4500,
      decor: 500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Ms. Teddy X", {
      level: 3,
      order: 3,
      units: 9,
      waru: 52,
      banked: 3500,
      decor: 500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Yellow Submarine", {
      level: 3,
      order: 4,
      units: 16,
      waru: 72,
      banked: 7000,
      decor: 900,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Refreshing Oasis", {
      level: 3,
      order: 4,
      units: 16,
      waru: 76,
      banked: 6000,
      decor: 1000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Yeti Super Stage", {
      level: 3,
      order: 4,
      units: 16,
      waru: 82,
      banked: 5000,
      decor: 700,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Nautilus Harbor", {
      level: 3,
      order: 4,
      units: 16,
      waru: 91,
      banked: 5000,
      decor: 1500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Shinsoo's Nest", {
      level: 3,
      order: 4,
      units: 16,
      waru: 87,
      banked: 7000,
      decor: 2000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Ludibrium Toy House", {
      level: 3,
      order: 4,
      units: 16,
      waru: 183,
      banked: 2000,
      decor: 4000,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Orbis Flying Garden", {
      level: 3,
      order: 4,
      units: 16,
      waru: 105,
      banked: 5000,
      decor: 1500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Ereve Fountain Garden", {
      level: 3,
      order: 4,
      units: 16,
      waru: 70,
      banked: 4500,
      decor: 500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Aqua Road Castle", {
      level: 3,
      order: 4,
      units: 16,
      waru: 91,
      banked: 4000,
      decor: 1200,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Zakum's Cave", {
      level: 3,
      order: 4,
      units: 16,
      waru: 60,
      banked: 12000,
      decor: 500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Windmill", {
      level: 4,
      order: 2,
      units: 4,
      waru: 10,
      banked: 70,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Chopper Chalet", {
      level: 5,
      order: 2,
      units: 4,
      waru: 8,
      banked: 120,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Drip Brew Coffee House", {
      level: 5,
      order: 3,
      units: 9,
      waru: 10,
      banked: 170,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Red Brick Abode", {
      level: 6,
      order: 2,
      units: 4,
      waru: 10,
      banked: 100,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "My House (Homestead)", {
      level: 7,
      order: 5,
      units: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1,
      fixed: true
    }), _defineProperty(_data4, "Lofty Brick House", {
      level: 7,
      order: 2,
      units: 4,
      waru: 8,
      banked: 110,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Purple Bathhouse", {
      level: 8,
      order: 2,
      units: 4,
      waru: 9,
      banked: 110,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Blue Bathhouse", {
      level: 9,
      order: 2,
      units: 4,
      waru: 12,
      banked: 100,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Big Apple Fruit Shop", {
      level: 10,
      order: 2,
      units: 4,
      waru: 10,
      banked: 160,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Octo-Pot Seafood", {
      level: 10,
      order: 2,
      units: 4,
      waru: 13,
      banked: 140,
      decor: 5,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Henesys Bowman Guild", {
      level: 10,
      order: 3,
      units: 9,
      waru: 15,
      banked: 350,
      decor: 5,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Rudi Beauty Salon", {
      level: 10,
      order: 3,
      units: 9,
      waru: 14,
      banked: 250,
      decor: 70,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Santa's Gift Shop", {
      level: 10,
      order: 3,
      units: 9,
      waru: 16,
      banked: 200,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Ghastly Ghost Gables", {
      level: 10,
      order: 4,
      units: 16,
      waru: 45,
      banked: 3000,
      decor: 500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Grand Gourd Gables", {
      level: 10,
      order: 4,
      units: 16,
      waru: 43,
      banked: 5000,
      decor: 350,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Blossom House", {
      level: 11,
      order: 2,
      units: 4,
      waru: 12,
      banked: 180,
      decor: 25,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Tip Top Chop Shop", {
      level: 11,
      order: 2,
      units: 4,
      waru: 11,
      banked: 190,
      decor: 25,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Pink Angel Place", {
      level: 12,
      order: 2,
      units: 4,
      waru: 10,
      banked: 210,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Full Moon Song Pyun Shop", {
      level: 12,
      order: 3,
      units: 9,
      waru: 12,
      banked: 250,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Gingerbread Gables", {
      level: 13,
      order: 2,
      units: 4,
      waru: 14,
      banked: 200,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Rien's Tonic Shop", {
      level: 13,
      order: 2,
      units: 4,
      waru: 15,
      banked: 210,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "My House (Manor)", {
      level: 14,
      order: 5,
      units: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1,
      fixed: true
    }), _defineProperty(_data4, "Blue Mushroom Mansion", {
      level: 14,
      order: 2,
      units: 4,
      waru: 12,
      banked: 240,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Mushroom Tower", {
      level: 14,
      order: 4,
      units: 16,
      waru: 12,
      banked: 300,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Ariant Fabrics (I)", {
      level: 15,
      order: 2,
      units: 4,
      waru: 12,
      banked: 360,
      decor: 5,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Hanok House", {
      level: 15,
      order: 2,
      units: 4,
      waru: 17,
      banked: 300,
      decor: 50,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Fantasy Park Viking", {
      level: 15,
      order: 3,
      units: 9,
      waru: 18,
      banked: 600,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Alchemist's Abode", {
      level: 15,
      order: 3,
      units: 9,
      waru: 20,
      banked: 300,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Five-Slime Hotel", {
      level: 15,
      order: 3,
      units: 9,
      waru: 18,
      banked: 400,
      decor: 25,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Creamy Cake Chateau", {
      level: 15,
      order: 3,
      units: 9,
      waru: 20,
      banked: 360,
      decor: 35,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Florina Lighthouse", {
      level: 15,
      order: 3,
      units: 9,
      waru: 15,
      banked: 250,
      decor: 15,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Leafre Airship", {
      level: 15,
      order: 4,
      units: 16,
      waru: 50,
      banked: 4000,
      decor: 500,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "Fish Shop", {
      level: 16,
      order: 2,
      units: 4,
      waru: 15,
      banked: 550,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Mushking Empire Outpost", {
      level: 16,
      order: 3,
      units: 9,
      waru: 16,
      banked: 700,
      decor: 10,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Nova Safehouse", {
      level: 17,
      order: 2,
      units: 4,
      waru: 18,
      banked: 300,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Elluel House", {
      level: 18,
      order: 2,
      units: 4,
      waru: 15,
      banked: 330,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Ariant Fabrics (II)", {
      level: 18,
      order: 2,
      units: 4,
      waru: 16,
      banked: 300,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Happy Homestead", {
      level: 19,
      order: 2,
      units: 4,
      waru: 20,
      banked: 340,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Melody Manor", {
      level: 20,
      order: 2,
      units: 4,
      waru: 17,
      banked: 300,
      decor: 50,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Aqua Roadhouse", {
      level: 20,
      order: 3,
      units: 9,
      waru: 25,
      banked: 550,
      decor: 50,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Fun Factory", {
      level: 20,
      order: 3,
      units: 9,
      waru: 20,
      banked: 400,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Ariant Castle", {
      level: 20,
      order: 4,
      units: 16,
      waru: 28,
      banked: 500,
      decor: 50,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Shaved Ice Chateau", {
      level: 20,
      order: 4,
      units: 16,
      waru: 25,
      banked: 500,
      decor: 45,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Magatia Workshop", {
      level: 20,
      order: 4,
      units: 16,
      waru: 70,
      banked: 2000,
      decor: 100,
      limit: 198,
      fixed: false
    }), _defineProperty(_data4, "My House (Mighty Manor)", {
      level: 21,
      order: 5,
      units: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1,
      fixed: true
    }), _defineProperty(_data4, "Santa's Special Shop", {
      level: 21,
      order: 2,
      units: 4,
      waru: 22,
      banked: 450,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Farmer's House", {
      level: 21,
      order: 2,
      units: 4,
      waru: 21,
      banked: 460,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Tick Tock Townhouse", {
      level: 22,
      order: 2,
      units: 4,
      waru: 25,
      banked: 400,
      decor: 35,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Mu Lung Dojo", {
      level: 23,
      order: 2,
      units: 4,
      waru: 23,
      banked: 450,
      decor: 35,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Icy Treat Retreat (I)", {
      level: 24,
      order: 2,
      units: 4,
      waru: 20,
      banked: 500,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Beatdown Shop", {
      level: 25,
      order: 3,
      units: 9,
      waru: 30,
      banked: 750,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Very Berry Vineyard", {
      level: 25,
      order: 3,
      units: 9,
      waru: 25,
      banked: 600,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Chryse Coliseum", {
      level: 25,
      order: 3,
      units: 9,
      waru: 30,
      banked: 750,
      decor: 55,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Omega Sector", {
      level: 25,
      order: 4,
      units: 16,
      waru: 45,
      banked: 900,
      decor: 60,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Tip-Top Toy Shop", {
      level: 26,
      order: 2,
      units: 4,
      waru: 22,
      banked: 500,
      decor: 50,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Edelstein Air Field", {
      level: 27,
      order: 3,
      units: 9,
      waru: 33,
      banked: 800,
      decor: 20,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Big Top Tenement", {
      level: 28,
      order: 2,
      units: 4,
      waru: 28,
      banked: 500,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Big Bowl Noodles", {
      level: 29,
      order: 2,
      units: 4,
      waru: 30,
      banked: 450,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "My House (Country Mansion)", {
      level: 30,
      order: 5,
      units: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1,
      fixed: true
    }), _defineProperty(_data4, "Lumiere", {
      level: 30,
      order: 3,
      units: 9,
      waru: 35,
      banked: 900,
      decor: 30,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Icy Treat Retreat (II)", {
      level: 30,
      order: 3,
      units: 9,
      waru: 32,
      banked: 700,
      decor: 40,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "Wholesome Milk Farm", {
      level: 35,
      order: 2,
      units: 4,
      waru: 40,
      banked: 700,
      decor: 50,
      limit: 99,
      fixed: false
    }), _defineProperty(_data4, "The Secret Garden", {
      level: 35,
      order: 4,
      units: 16,
      waru: 82,
      banked: 6000,
      decor: 1500,
      limit: 99,
      fixed: false
    }), _data4)
  }
};
var myHouses = {
  15: "My House",
  17: "My House (Homestead)",
  19: "My House (Manor)",
  22: "My House (Mighty Manor)",
  25: "My House (Country Mansion)"
};
var beautyLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
var beautyThresholds = {
  1: 100,
  2: 200,
  3: 500,
  4: 1000,
  5: 1700,
  6: 2600,
  7: 3700,
  8: 5000,
  9: 6500,
  10: 8200,
  11: 10100,
  12: 12200,
  13: 14500,
  14: 17000,
  15: 19700,
  16: 22600,
  17: 25700,
  18: 29100,
  19: 32800,
  20: 36800,
  21: 41100,
  22: 45700,
  23: 50600,
  24: 55800,
  25: 61400,
  26: 67400,
  27: 73800,
  28: 80600,
  29: 87900,
  30: 95700,
  31: 104000,
  32: 112800,
  33: 122200,
  34: 132200,
  35: 142800,
  36: 154100,
  37: 166100,
  38: 178900,
  39: 192500,
  40: 207000,
  41: 222400,
  42: 238800,
  43: 256200,
  44: 274700,
  45: 294400,
  46: 315300,
  47: 337500,
  48: 361100,
  49: 386200,
  50: 412900,
  51: 441300,
  52: 471500,
  53: 503600,
  54: 537700,
  55: 574000,
  56: 612600,
  57: 635600,
  58: 697200,
  59: 743500,
  60: 792700,
  61: 845000,
  62: 900600,
  63: 959700,
  64: 959700
};

function beautyLevel(beauty) {
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

function beautyProps(beauty) {
  var level = beautyLevel(beauty);
  return {
    next: beautyThresholds[Math.min(level + 1, beautyLevels.length)] - beauty,
    choices: Math.ceil(level / 2),
    banked: 2 * level,
    discount: Math.ceil(level / 8),
    visit: level
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

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var StateContext = (0,solid/* createContext */.kr)();
function StateProvider(props) {
  var summary;
  var baseLevel = levels[0];
  var myHouseRoot = 0;

  var _createStore = (0,dist_store/* createStore */.MT)({
    mode: "inspect",
    inspect: {
      root: myHouseRoot
    },
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
      var type = this.config.useAutofill ? "road" : "free";
      return {
        object: _objectSpread({
          type: type,
          name: ""
        }, objects[type].data[""]),
        border: {
          top: true,
          right: true,
          bottom: true,
          left: true
        }
      };
    },

    get myHouseProps() {
      var name = myHouses[this.config.order];
      return _objectSpread({
        type: "building",
        name: name
      }, objects.building.data[name]);
    },

    get networkProps() {
      var _this = this;

      var network = new dsforest.DisjointSet();
      var roots = new Map();
      var totalBeauty = 0;
      this.grid.forEach(function (cell, index) {
        var object = cell.object,
            position = cell.position;

        switch (object.type) {
          case "road":
            network.makeSet(index);
            position.boundary.forEach(function (idx) {
              if (_this.grid[idx].object.type === "road" || _this.grid[idx].position.root === myHouseRoot) {
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
      roots.forEach(function (props, root) {
        var _this$grid$root = _this.grid[root],
            object = _this$grid$root.object,
            position = _this$grid$root.position;

        if (object.type === "road") {
          if (network.areConnected(myHouseRoot, root)) {
            props.connected = true;
          }
        } else {
          var paths = position.boundary.reduce(function (count, index) {
            if (_this.grid[index].object.type === "road" && network.areConnected(myHouseRoot, index)) {
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
      var networkBanked = beautyProps(totalBeauty).banked;
      return Array.from(roots, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            root = _ref2[0],
            props = _ref2[1];

        if (props.waru > 0) {
          props.banked = networkBanked;
        }

        return {
          root: root,
          props: props
        };
      });
    },

    get summary() {
      return summary();
    }

  }),
      _createStore2 = _slicedToArray(_createStore, 2),
      state = _createStore2[0],
      setState = _createStore2[1];

  var adjustedIndex = function adjustedIndex(oldIndex, oldOrder, newOrder) {
    var oldRow = Math.floor(oldIndex / oldOrder);
    var oldCol = oldIndex % oldOrder;
    return oldRow * newOrder + oldCol;
  };

  var halfBoundary = function halfBoundary(row, column, index, order) {
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
  };

  var stateSetters = {
    initGrid: function initGrid() {
      var newGrid = [];

      for (var r = 0; r < state.config.order; ++r) {
        for (var c = 0; c < state.config.order; ++c) {
          var index = r * state.config.order + c;
          newGrid.push(_objectSpread(_objectSpread({}, state.baseProps), {}, {
            position: {
              row: r,
              column: c,
              index: index,
              root: index,
              interior: [index],
              boundary: halfBoundary(r, c, index, state.config.order)
            }
          }));
        }
      }

      setState("grid", newGrid);
    },
    onLevelChange: function onLevelChange(event) {
      var newLevel = Number(event.currentTarget.value);
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
          setState("config", "mobCap", newMobCap);
        }
      });
    },
    onOrderChange: function onOrderChange(event) {
      (0,solid/* batch */.dC)(function () {
        stateSetters.resizeGrid(state.config.order, Number(event.currentTarget.value));
      });
    },
    resizeGrid: function resizeGrid(oldOrder, newOrder) {
      setState("config", "order", newOrder);
      var _state$grid$state$ins = state.grid[state.inspect.root].position,
          row = _state$grid$state$ins.row,
          column = _state$grid$state$ins.column;
      setState("inspect", "root", row >= newOrder || column >= newOrder ? myHouseRoot : row * newOrder + column);
      setState("grid", state.grid[myHouseRoot].position.interior, "object", state.myHouseProps);
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
                  object = _state$grid$root.object,
                  position = _state$grid$root.position;

              if (position.row + object.order >= minOrder || position.column + object.order >= minOrder) {
                interior.forEach(function (index) {
                  var oldCell = state.grid[index];
                  var _oldCell$position = oldCell.position,
                      row = _oldCell$position.row,
                      column = _oldCell$position.column;

                  if (row >= minOrder || column >= minOrder) {
                    return;
                  }

                  var newIndex = adjustedIndex(index, oldOrder, newOrder);
                  newGrid[newIndex] = _objectSpread(_objectSpread({}, state.baseProps), {}, {
                    position: _objectSpread(_objectSpread({}, oldCell.position), {}, {
                      index: newIndex,
                      root: newIndex,
                      interior: [newIndex],
                      boundary: halfBoundary(row, column, newIndex, newOrder)
                    })
                  });
                });
              } else {
                var newInterior = interior.map(function (index) {
                  return adjustedIndex(index, oldOrder, newOrder);
                });
                var newBoundary = boundary.map(function (index) {
                  return adjustedIndex(index, oldOrder, newOrder);
                });
                newInterior.forEach(function (index, i) {
                  var oldCell = state.grid[interior[i]];
                  newGrid[index] = _objectSpread(_objectSpread({}, oldCell), {}, {
                    position: _objectSpread(_objectSpread({}, oldCell.position), {}, {
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
            newGrid[newIndex] = _objectSpread(_objectSpread({}, state.baseProps), {}, {
              position: {
                row: r,
                column: c,
                index: newIndex,
                root: newIndex,
                interior: [newIndex],
                boundary: halfBoundary(r, c, newIndex, newOrder)
              }
            });
          }
        }
      }

      setState("grid", newGrid);
      stateSetters.applyNetwork();
    },
    onMobCapChange: function onMobCapChange(event) {
      setState("config", "mobCap", Number(event.currentTarget.value));
    },
    onAufhebenChange: function onAufhebenChange() {
      setState("config", "useAufheben", !state.config.useAufheben);
      stateSetters.applyNetwork();
    },
    onModeClick: function onModeClick(data) {
      setState("mode", data.mode);
    },
    onDecorateTypeChange: function onDecorateTypeChange(event) {
      var newType = event.currentTarget.value;
      setState("decorate", {
        type: newType,
        name: objects[newType].limits[state.config.level].min
      });
    },
    onDecorateNameChange: function onDecorateNameChange(event) {
      setState("decorate", "name", event.currentTarget.value);
    },
    onAutofillChange: function onAutofillChange() {
      setState("config", "useAutofill", !state.config.useAutofill);
      var targetType = state.config.useAutofill ? "free" : "road";
      var object = state.baseProps.object;
      (0,solid/* batch */.dC)(function () {
        setState("grid", state.summary.roots[targetType], "object", object);
        stateSetters.applyNetwork();
      });
    },
    onGridClick: function onGridClick(_ref3) {
      var cell = _ref3.cell;

      if (state.mode === "inspect") {
        setState("inspect", "root", cell.position.root);
      } else if (state.mode === "decorate") {
        var _state$decorate = state.decorate,
            type = _state$decorate.type,
            name = _state$decorate.name;
        var objectData = objects[type].data[name];

        if (!objectData) {
          // no decors available at level 1
          return;
        }

        stateSetters.setObject(cell.position, _objectSpread({
          type: type,
          name: name
        }, objectData));
      }
    },
    setObject: function setObject(currentPosition, objectProps) {
      var interiorLowerRow = currentPosition.row;
      var interiorLowerCol = currentPosition.column;
      var interiorUpperRow = interiorLowerRow + objectProps.order - 1;
      var interiorUpperCol = interiorLowerCol + objectProps.order - 1;

      if (interiorUpperRow >= state.config.order || interiorUpperCol >= state.config.order) {
        return;
      }

      var boundaryLowerRow = interiorLowerRow - 1;
      var boundaryLowerCol = interiorLowerCol - 1;
      var boundaryUpperRow = interiorUpperRow + 1;
      var boundaryUpperCol = interiorUpperCol + 1;
      var newCells = new Map();
      var interior = [],
          boundary = [];

      for (var r = boundaryLowerRow; r <= boundaryUpperRow; ++r) {
        for (var c = boundaryLowerCol; c <= boundaryUpperCol; ++c) {
          var index = r * state.config.order + c;

          if (r >= interiorLowerRow && r <= interiorUpperRow && c >= interiorLowerCol && c <= interiorUpperCol) {
            var _state$grid$index = state.grid[index],
                object = _state$grid$index.object,
                position = _state$grid$index.position;

            if (object.units > 0) {
              return;
            }

            interior.push(index);
            newCells.set(index, {
              object: objectProps,
              position: _objectSpread(_objectSpread({}, position), {}, {
                root: interior[0],
                interior: interior,
                boundary: boundary
              }),
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

      (0,solid/* batch */.dC)(function () {
        setState("inspect", "root", currentPosition.index);
        newCells.forEach(function (cell, index) {
          setState("grid", index, cell);
        });
        stateSetters.applyNetwork();
      });
    },
    onRemoveClick: function onRemoveClick() {
      var _state$grid$state$ins2 = state.grid[state.inspect.root],
          object = _state$grid$state$ins2.object,
          position = _state$grid$state$ins2.position;

      if (object.type === "free" || object.fixed) {
        return;
      }

      (0,solid/* batch */.dC)(function () {
        setState("grid", position.interior, function (_ref4) {
          var position = _ref4.position;
          var row = position.row,
              column = position.column,
              index = position.index;
          return _objectSpread(_objectSpread({}, state.baseProps), {}, {
            position: _objectSpread(_objectSpread({}, position), {}, {
              root: index,
              interior: [index],
              boundary: halfBoundary(row, column, index, state.config.order)
            })
          });
        });
        stateSetters.applyNetwork();
      });
    },
    onResetClick: function onResetClick() {
      var targetType = state.config.useAutofill ? "free" : "road";
      (0,solid/* batch */.dC)(function () {
        setState("grid", function (_ref5) {
          var object = _ref5.object;
          return object.type === targetType || !object.fixed;
        }, function (_ref6) {
          var position = _ref6.position;
          var row = position.row,
              column = position.column,
              index = position.index;
          return _objectSpread(_objectSpread({}, state.baseProps), {}, {
            position: _objectSpread(_objectSpread({}, position), {}, {
              root: index,
              interior: [index],
              boundary: halfBoundary(row, column, index, state.config.order)
            })
          });
        });
        stateSetters.applyNetwork();
      });
    },
    applyNetwork: function applyNetwork() {
      state.networkProps.forEach(function (_ref7) {
        var root = _ref7.root,
            props = _ref7.props;
        setState("grid", root, "network", props);
      });
    }
  };
  stateSetters.initGrid();
  stateSetters.setObject(state.grid[myHouseRoot].position, state.myHouseProps);
  summary = (0,solid/* createMemo */.Py)(function () {
    var freeRoots = [];
    var roadRoots = [];
    var decorRoots = new Map();
    var buildingRoots = new Map();
    var totalFree = Math.pow(state.config.order, 2) - state.config.mobCap - 1;
    var totalConnected = 0;
    var totalBeauty = 0;
    state.grid.forEach(function (cell, index) {
      var object = cell.object,
          position = cell.position,
          network = cell.network;

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
          totalBeauty += object.decor + network.decor;
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
    var finalWaru = state.config.useAufheben ? aufhebenWaru : 0;
    var lastOptimalCycle = 0;
    var products = [{
      cycle: 0,
      total: 0,
      average: 0,
      marginal: 0
    }];
    buildingRoots.forEach(function (list) {
      list.forEach(function (root) {
        var _state$grid$root2 = state.grid[root],
            object = _state$grid$root2.object,
            network = _state$grid$root2.network;

        if (object.waru > 0 && object.banked > 0) {
          var totalWaru = object.waru + network.waru + finalWaru;
          var totalBanked = object.banked + network.banked;
          var cycles = totalBanked / totalWaru;
          var remWaru = totalBanked % totalWaru;
          var lowerCycles = Math.floor(cycles);
          var upperCycles = Math.ceil(cycles);
          lastOptimalCycle = lastOptimalCycle > 0 ? Math.min(lastOptimalCycle, lowerCycles) : lowerCycles;

          for (var i = 1; i <= lowerCycles; i++) {
            if (!products[i]) {
              products[i] = {
                cycle: i,
                total: 0,
                average: 0,
                marginal: 0
              };
            }

            products[i].marginal += totalWaru;
          }

          if (remWaru > 0) {
            if (!products[upperCycles]) {
              products[upperCycles] = {
                cycle: upperCycles,
                total: 0,
                average: 0,
                marginal: 0
              };
            }

            products[upperCycles].marginal += remWaru;
          }
        }
      });
    });
    var totalProduct = 0;
    products.forEach(function (product, cycle) {
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
        decor: Array.from(decorRoots, function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              name = _ref9[0],
              list = _ref9[1];

          return {
            name: name,
            list: list
          };
        }),
        building: Array.from(buildingRoots, function (_ref10) {
          var _ref11 = _slicedToArray(_ref10, 2),
              name = _ref11[0],
              list = _ref11[1];

          return {
            name: name,
            list: list
          };
        })
      },
      count: {
        free: totalFree,
        inNetwork: totalConnected,
        outNetwork: roadRoots.length - totalConnected
      },
      beauty: _objectSpread(_objectSpread({}, beautyProps(totalBeauty)), {}, {
        total: totalBeauty
      }),
      production: {
        lastOptimalCycle: lastOptimalCycle,
        products: products
      }
    };
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
      _tmpl$6 = (0,web/* template */.XK)(`<label for="mob-cap">Monster capacity</label>`, 2),
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
      onLevelChange = _useState2[1].onLevelChange;

  return [_tmpl$.cloneNode(true), function () {
    var _el$2 = _tmpl$2.cloneNode(true);

    (0,web/* addEventListener */.Oo)(_el$2, "change", onLevelChange);

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
      onOrderChange = _useState4[1].onOrderChange;

  var disabled = function disabled(order) {
    var _orderLimits$state$co = orderLimits[state.config.level],
        min = _orderLimits$state$co.min,
        max = _orderLimits$state$co.max;
    return order < min || order > max;
  };

  return [_tmpl$4.cloneNode(true), function () {
    var _el$5 = _tmpl$5.cloneNode(true);

    (0,web/* addEventListener */.Oo)(_el$5, "change", onOrderChange);

    (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: orders,
      children: function children(order) {
        return function () {
          var _el$6 = _tmpl$3.cloneNode(true);

          _el$6.value = order;

          (0,web/* insert */.$T)(_el$6, "".concat(order, " x ").concat(order));

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
      onMobCapChange = _useState6[1].onMobCapChange;

  var disabled = function disabled(mobCap) {
    var _mobCapLimits$state$c = mobCapLimits[state.config.level],
        min = _mobCapLimits$state$c.min,
        max = _mobCapLimits$state$c.max;
    return mobCap < min || mobCap > max;
  };

  return [_tmpl$6.cloneNode(true), function () {
    var _el$8 = _tmpl$7.cloneNode(true);

    (0,web/* addEventListener */.Oo)(_el$8, "change", onMobCapChange);

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
      onAufhebenChange = _useState8[1].onAufhebenChange;

  return function () {
    var _el$10 = _tmpl$8.cloneNode(true),
        _el$11 = _el$10.firstChild;

    (0,web/* addEventListener */.Oo)(_el$11, "change", onAufhebenChange);

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
;// CONCATENATED MODULE: ./src/components/Inspect.jsx





const Inspect_tmpl$ = (0,web/* template */.XK)(`<td>Yes</td>`, 2),
      Inspect_tmpl$2 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Road</td></tr><tr><th>Connected to house</th></tr></tbody>`, 12),
      Inspect_tmpl$3 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Decor</td></tr><tr><th>Name</th><td></td></tr><tr><th>Adjacent roads (in-network)</th><td></td></tr><tr><th>Aesthetic points</th><td></td></tr></tbody>`, 26),
      Inspect_tmpl$4 = (0,web/* template */.XK)(`<td></td>`, 2),
      Inspect_tmpl$5 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Building</td></tr><tr><th>Name</th><td></td></tr><tr><th>Adjacent roads (in-network)</th><td></td></tr><tr><th>Yield rate (W/10 mins)</th></tr><tr><th>Max capacity (W)</th><td></td></tr><tr><th>Aesthetic points</th><td></td></tr></tbody>`, 36),
      Inspect_tmpl$6 = (0,web/* template */.XK)(`<table><caption>Cell properties</caption></table>`, 4),
      Inspect_tmpl$7 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td>Free cell</td></tr></tbody>`, 8),
      Inspect_tmpl$8 = (0,web/* template */.XK)(`<td>No</td>`, 2);

function Inspect_slicedToArray(arr, i) { return Inspect_arrayWithHoles(arr) || Inspect_iterableToArrayLimit(arr, i) || Inspect_unsupportedIterableToArray(arr, i) || Inspect_nonIterableRest(); }

function Inspect_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Inspect_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Inspect_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Inspect_arrayLikeToArray(o, minLen); }

function Inspect_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Inspect_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Inspect_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Inspect() {
  var _useState = useState(),
      _useState2 = Inspect_slicedToArray(_useState, 1),
      state = _useState2[0];

  return function () {
    var _el$ = Inspect_tmpl$6.cloneNode(true),
        _el$2 = _el$.firstChild;

    (0,web/* insert */.$T)(_el$, (0,solid/* createComponent */.LM)(solid/* Switch */.rs, {
      get fallback() {
        return Inspect_tmpl$7.cloneNode(true);
      },

      get children() {
        return [(0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.grid[state.inspect.root].object.type === "road";
          },

          get children() {
            var _el$3 = Inspect_tmpl$2.cloneNode(true),
                _el$4 = _el$3.firstChild,
                _el$5 = _el$4.nextSibling,
                _el$6 = _el$5.firstChild;

            (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
              get when() {
                return state.grid[state.inspect.root].network.connected;
              },

              get fallback() {
                return Inspect_tmpl$8.cloneNode(true);
              },

              get children() {
                return Inspect_tmpl$.cloneNode(true);
              }

            }), null);

            return _el$3;
          }

        }), (0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.grid[state.inspect.root].object.type === "decor";
          },

          get children() {
            var _el$8 = Inspect_tmpl$3.cloneNode(true),
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
              return state.grid[state.inspect.root].object.name;
            });

            (0,web/* insert */.$T)(_el$15, function () {
              return state.grid[state.inspect.root].network.paths;
            });

            (0,web/* insert */.$T)(_el$18, function () {
              return "".concat(state.grid[state.inspect.root].object.decor, " (+").concat(state.grid[state.inspect.root].network.decor, ")");
            });

            return _el$8;
          }

        }), (0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.grid[state.inspect.root].object.type === "building";
          },

          get children() {
            var _el$19 = Inspect_tmpl$5.cloneNode(true),
                _el$20 = _el$19.firstChild,
                _el$21 = _el$20.nextSibling,
                _el$22 = _el$21.firstChild,
                _el$23 = _el$22.nextSibling,
                _el$24 = _el$21.nextSibling,
                _el$25 = _el$24.firstChild,
                _el$26 = _el$25.nextSibling,
                _el$27 = _el$24.nextSibling,
                _el$28 = _el$27.firstChild,
                _el$30 = _el$27.nextSibling,
                _el$31 = _el$30.firstChild,
                _el$32 = _el$31.nextSibling,
                _el$33 = _el$30.nextSibling,
                _el$34 = _el$33.firstChild,
                _el$35 = _el$34.nextSibling;

            (0,web/* insert */.$T)(_el$23, function () {
              return state.grid[state.inspect.root].object.name;
            });

            (0,web/* insert */.$T)(_el$26, function () {
              return state.grid[state.inspect.root].network.paths;
            });

            (0,web/* insert */.$T)(_el$27, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
              get when() {
                return state.config.useAufheben;
              },

              get fallback() {
                return function () {
                  var _el$38 = Inspect_tmpl$4.cloneNode(true);

                  (0,web/* insert */.$T)(_el$38, function () {
                    return "".concat(state.grid[state.inspect.root].object.waru, " (+").concat(state.grid[state.inspect.root].network.waru, ")");
                  });

                  return _el$38;
                }();
              },

              get children() {
                var _el$29 = Inspect_tmpl$4.cloneNode(true);

                (0,web/* insert */.$T)(_el$29, function () {
                  return "".concat(state.grid[state.inspect.root].object.waru, " (+").concat(state.grid[state.inspect.root].network.waru, ") (+").concat(aufhebenWaru, ")");
                });

                return _el$29;
              }

            }), null);

            (0,web/* insert */.$T)(_el$32, function () {
              return "".concat(state.grid[state.inspect.root].object.banked, " (+").concat(state.grid[state.inspect.root].network.banked, ")");
            });

            (0,web/* insert */.$T)(_el$35, function () {
              return state.grid[state.inspect.root].object.decor;
            });

            return _el$19;
          }

        })];
      }

    }), null);

    return _el$;
  }();
}

/* harmony default export */ const components_Inspect = (Inspect);
;// CONCATENATED MODULE: ./src/components/Decorate.jsx








const Decorate_tmpl$ = (0,web/* template */.XK)(`<label for="decorate-type">Type</label>`, 2),
      Decorate_tmpl$2 = (0,web/* template */.XK)(`<select id="decorate-type"></select>`, 2),
      Decorate_tmpl$3 = (0,web/* template */.XK)(`<option></option>`, 2),
      Decorate_tmpl$4 = (0,web/* template */.XK)(`<label for="decorate-name">Name</label>`, 2),
      Decorate_tmpl$5 = (0,web/* template */.XK)(`<select id="decorate-name"></select>`, 2),
      Decorate_tmpl$6 = (0,web/* template */.XK)(`<div><input type="checkbox" id="autofill"><label for="autofill">Autofill roads</label></div>`, 5);

function Decorate_slicedToArray(arr, i) { return Decorate_arrayWithHoles(arr) || Decorate_iterableToArrayLimit(arr, i) || Decorate_unsupportedIterableToArray(arr, i) || Decorate_nonIterableRest(); }

function Decorate_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Decorate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Decorate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Decorate_arrayLikeToArray(o, minLen); }

function Decorate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Decorate_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Decorate_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function DecorateType() {
  var _useState = useState(),
      _useState2 = Decorate_slicedToArray(_useState, 2),
      state = _useState2[0],
      onDecorateTypeChange = _useState2[1].onDecorateTypeChange;

  var decorateTypes = Object.keys(objects).filter(function (type) {
    return type !== "free";
  });
  return [Decorate_tmpl$.cloneNode(true), function () {
    var _el$2 = Decorate_tmpl$2.cloneNode(true);

    (0,web/* addEventListener */.Oo)(_el$2, "change", onDecorateTypeChange);

    (0,web/* insert */.$T)(_el$2, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: decorateTypes,
      children: function children(type) {
        return function () {
          var _el$3 = Decorate_tmpl$3.cloneNode(true);

          _el$3.value = type;

          (0,web/* insert */.$T)(_el$3, function () {
            return type.charAt(0).toUpperCase() + type.slice(1);
          });

          return _el$3;
        }();
      }
    }));

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$2.value = state.decorate.type;
    });

    return _el$2;
  }()];
}

function DecorateName() {
  var _useState3 = useState(),
      _useState4 = Decorate_slicedToArray(_useState3, 2),
      state = _useState4[0],
      onDecorateNameChange = _useState4[1].onDecorateNameChange;

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
      return [Decorate_tmpl$4.cloneNode(true), function () {
        var _el$5 = Decorate_tmpl$5.cloneNode(true);

        (0,web/* addEventListener */.Oo)(_el$5, "change", onDecorateNameChange);

        (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
          get each() {
            return names();
          },

          children: function children(name) {
            return function () {
              var _el$6 = Decorate_tmpl$3.cloneNode(true);

              _el$6.value = name;

              (0,web/* insert */.$T)(_el$6, name);

              (0,solid/* createRenderEffect */.F3)(function () {
                return _el$6.disabled = disabled(name);
              });

              return _el$6;
            }();
          }
        }));

        (0,solid/* createRenderEffect */.F3)(function (_p$) {
          var _v$ = !state.decorate.name,
              _v$2 = state.decorate.name;

          _v$ !== _p$._v$ && (_el$5.disabled = _p$._v$ = _v$);
          _v$2 !== _p$._v$2 && (_el$5.value = _p$._v$2 = _v$2);
          return _p$;
        }, {
          _v$: undefined,
          _v$2: undefined
        });

        return _el$5;
      }()];
    }

  });
}

function Autofill() {
  var _useState5 = useState(),
      _useState6 = Decorate_slicedToArray(_useState5, 2),
      state = _useState6[0],
      onAutofillChange = _useState6[1].onAutofillChange;

  return function () {
    var _el$7 = Decorate_tmpl$6.cloneNode(true),
        _el$8 = _el$7.firstChild;

    (0,web/* addEventListener */.Oo)(_el$8, "change", onAutofillChange);

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$8.checked = state.config.useAutofill;
    });

    return _el$7;
  }();
}

function Decorate() {
  return [(0,solid/* createComponent */.LM)(DecorateType, {}), (0,solid/* createComponent */.LM)(DecorateName, {}), (0,solid/* createComponent */.LM)(Autofill, {})];
}

/* harmony default export */ const components_Decorate = (Decorate);
;// CONCATENATED MODULE: ./src/components/Mode.jsx








const Mode_tmpl$ = (0,web/* template */.XK)(`<button type="button">Switch to Decorate mode</button>`, 2),
      Mode_tmpl$2 = (0,web/* template */.XK)(`<fieldset><legend></legend><div></div></fieldset>`, 6),
      Mode_tmpl$3 = (0,web/* template */.XK)(`<button type="button">Switch to Inspect mode</button>`, 2);

function Mode_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Mode_slicedToArray(arr, i) { return Mode_arrayWithHoles(arr) || Mode_iterableToArrayLimit(arr, i) || Mode_unsupportedIterableToArray(arr, i) || Mode_nonIterableRest(); }

function Mode_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Mode_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Mode_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mode_arrayLikeToArray(o, minLen); }

function Mode_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Mode_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Mode_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Mode() {
  var _useState = useState(),
      _useState2 = Mode_slicedToArray(_useState, 2),
      state = _useState2[0],
      onModeClick = _useState2[1].onModeClick;

  return function () {
    var _el$ = Mode_tmpl$2.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling;

    (0,web/* insert */.$T)(_el$2, function () {
      return "Mode: ".concat(state.mode);
    });

    (0,web/* insert */.$T)(_el$3, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.mode === "inspect";
      },

      get fallback() {
        return [(0,solid/* createComponent */.LM)(components_Decorate, {}), function () {
          var _el$5 = Mode_tmpl$3.cloneNode(true);

          _el$5.$$click = onModeClick;
          _el$5.$$clickData = {
            mode: "inspect"
          };
          return _el$5;
        }()];
      },

      get children() {
        return [(0,solid/* createComponent */.LM)(components_Inspect, {}), function () {
          var _el$4 = Mode_tmpl$.cloneNode(true);

          _el$4.$$click = onModeClick;
          _el$4.$$clickData = {
            mode: "decorate"
          };
          return _el$4;
        }()];
      }

    }));

    (0,solid/* createRenderEffect */.F3)(function (_$p) {
      return (0,web/* classList */.s1)(_el$3, Mode_defineProperty({}, state.mode, true), _$p);
    });

    return _el$;
  }();
}

/* harmony default export */ const components_Mode = (Mode);

(0,web/* delegateEvents */.Qj)(["click"]);
;// CONCATENATED MODULE: ./src/components/Grid.jsx








const Grid_tmpl$ = (0,web/* template */.XK)(`<button type="button">Remove</button>`, 2),
      Grid_tmpl$2 = (0,web/* template */.XK)(`<button type="button">Reset</button>`, 2),
      Grid_tmpl$3 = (0,web/* template */.XK)(`<fieldset><legend>Grid</legend><div class="grid"><div class="grid-outer"><div class="grid-inner"></div></div><div class="grid-legend"><div><div class="box my-house"></div><div>My House</div></div><div><div class="box building"></div><div>Building</div></div><div><div class="box decor"></div><div>Decor</div></div><div><div class="box road-in-network"></div><div>Road (in-network)</div></div><div><div class="box road-out-network"></div><div>Road (out-network)</div></div></div><div class="grid-control"></div></div></fieldset>`, 44),
      Grid_tmpl$4 = (0,web/* template */.XK)(`<div class="grid-cell"></div>`, 2);

function Grid_slicedToArray(arr, i) { return Grid_arrayWithHoles(arr) || Grid_iterableToArrayLimit(arr, i) || Grid_unsupportedIterableToArray(arr, i) || Grid_nonIterableRest(); }

function Grid_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Grid_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Grid_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Grid_arrayLikeToArray(o, minLen); }

function Grid_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Grid_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Grid_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Remove() {
  var _useState = useState(),
      _useState2 = Grid_slicedToArray(_useState, 2),
      state = _useState2[0],
      onRemoveClick = _useState2[1].onRemoveClick;

  var disabled = function disabled() {
    var object = state.grid[state.inspect.root].object;
    return object.type === "free" || object.fixed;
  };

  return function () {
    var _el$ = Grid_tmpl$.cloneNode(true);

    (0,web/* addEventListener */.Oo)(_el$, "click", onRemoveClick, true);

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$.disabled = disabled();
    });

    return _el$;
  }();
}

function Reset() {
  var _useState3 = useState(),
      _useState4 = Grid_slicedToArray(_useState3, 2),
      _ = _useState4[0],
      onResetClick = _useState4[1].onResetClick;

  return function () {
    var _el$2 = Grid_tmpl$2.cloneNode(true);

    (0,web/* addEventListener */.Oo)(_el$2, "click", onResetClick, true);

    return _el$2;
  }();
}

function Grid() {
  var _useState5 = useState(),
      _useState6 = Grid_slicedToArray(_useState5, 2),
      state = _useState6[0],
      onGridClick = _useState6[1].onGridClick;

  return function () {
    var _el$3 = Grid_tmpl$3.cloneNode(true),
        _el$4 = _el$3.firstChild,
        _el$5 = _el$4.nextSibling,
        _el$6 = _el$5.firstChild,
        _el$7 = _el$6.firstChild,
        _el$8 = _el$6.nextSibling,
        _el$9 = _el$8.nextSibling;

    (0,web/* insert */.$T)(_el$7, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.grid;
      },

      children: function children(cell) {
        return function () {
          var _el$10 = Grid_tmpl$4.cloneNode(true);

          _el$10.$$click = onGridClick;
          _el$10.$$clickData = {
            cell: cell
          };

          (0,solid/* createRenderEffect */.F3)(function (_p$) {
            var _v$3 = cell.position.root === state.inspect.root ? "red" : "black",
                _v$4 = cell.border.top ? "solid" : "none",
                _v$5 = cell.border.right ? "solid" : "none",
                _v$6 = cell.border.bottom ? "solid" : "none",
                _v$7 = cell.border.left ? "solid" : "none",
                _v$8 = cell.position.root === 0,
                _v$9 = cell.object.type === "building",
                _v$10 = cell.object.type === "decor",
                _v$11 = cell.object.type === "road" && cell.network.connected,
                _v$12 = cell.object.type === "road" && !cell.network.connected;

            _v$3 !== _p$._v$3 && _el$10.style.setProperty("border-color", _p$._v$3 = _v$3);
            _v$4 !== _p$._v$4 && _el$10.style.setProperty("border-top-style", _p$._v$4 = _v$4);
            _v$5 !== _p$._v$5 && _el$10.style.setProperty("border-right-style", _p$._v$5 = _v$5);
            _v$6 !== _p$._v$6 && _el$10.style.setProperty("border-bottom-style", _p$._v$6 = _v$6);
            _v$7 !== _p$._v$7 && _el$10.style.setProperty("border-left-style", _p$._v$7 = _v$7);
            _v$8 !== _p$._v$8 && _el$10.classList.toggle("my-house", _p$._v$8 = _v$8);
            _v$9 !== _p$._v$9 && _el$10.classList.toggle("building", _p$._v$9 = _v$9);
            _v$10 !== _p$._v$10 && _el$10.classList.toggle("decor", _p$._v$10 = _v$10);
            _v$11 !== _p$._v$11 && _el$10.classList.toggle("road-in-network", _p$._v$11 = _v$11);
            _v$12 !== _p$._v$12 && _el$10.classList.toggle("road-out-network", _p$._v$12 = _v$12);
            return _p$;
          }, {
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined,
            _v$7: undefined,
            _v$8: undefined,
            _v$9: undefined,
            _v$10: undefined,
            _v$11: undefined,
            _v$12: undefined
          });

          return _el$10;
        }();
      }
    }));

    (0,web/* insert */.$T)(_el$9, (0,solid/* createComponent */.LM)(Remove, {}), null);

    (0,web/* insert */.$T)(_el$9, (0,solid/* createComponent */.LM)(Reset, {}), null);

    (0,solid/* createRenderEffect */.F3)(function (_p$) {
      var _v$ = "repeat(".concat(state.config.order, ", auto)"),
          _v$2 = "repeat(".concat(state.config.order, ", auto)");

      _v$ !== _p$._v$ && _el$7.style.setProperty("grid-template-columns", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$7.style.setProperty("grid-template-rows", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });

    return _el$3;
  }();
}

/* harmony default export */ const components_Grid = (Grid);

(0,web/* delegateEvents */.Qj)(["click"]);
;// CONCATENATED MODULE: ./src/components/Stats.jsx








const Stats_tmpl$ = (0,web/* template */.XK)(`<tr><th colspan="2">Road (in-network)</th><td colspan="1"></td></tr>`, 6),
      Stats_tmpl$2 = (0,web/* template */.XK)(`<tr><th colspan="2">Road (out-network)</th><td colspan="1"></td></tr>`, 6),
      Stats_tmpl$3 = (0,web/* template */.XK)(`<table><caption>Object count</caption><thead><tr><th>Type</th><th>Name</th><th>Quantity</th></tr></thead><tbody><tr><th colspan="2">Free cells</th><td colspan="1"></td></tr></tbody></table>`, 22),
      Stats_tmpl$4 = (0,web/* template */.XK)(`<tr><td>Building</td><td></td><td></td></tr>`, 8),
      Stats_tmpl$5 = (0,web/* template */.XK)(`<tr><td>Decor</td><td></td><td></td></tr>`, 8),
      Stats_tmpl$6 = (0,web/* template */.XK)(`<table><caption>Beauty effects</caption><thead><tr><th>Combine Result Choices</th><th>Building Max Capacity (W)</th><th>Shop Discount</th><th>Special Merchant Visit</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody><tfoot><tr><th colspan="2">Total aesthetic points</th><td colspan="2"></td></tr><tr><th colspan="2">Points to next threshold</th><td colspan="2"></td></tr></tfoot></table>`, 42),
      Stats_tmpl$7 = (0,web/* template */.XK)(`<tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>`, 10),
      Stats_tmpl$8 = (0,web/* template */.XK)(`<th colspan="4"><button type="button"></button></th>`, 4),
      Stats_tmpl$9 = (0,web/* template */.XK)(`<table><caption>Waru production</caption><thead><tr><th>Time (mins)</th><th>Total (W)</th><th>Marginal (W)</th><th>Average (W)</th></tr></thead><tbody></tbody><tfoot><tr></tr><tr><th colspan="2">Total yield (W)</th><td colspan="2"></td></tr><tr><th colspan="2">Time until total yield (mins)</th><td colspan="2"></td></tr><tr><th colspan="2">Max yield rate (W/10 mins)</th><td colspan="2"></td></tr><tr><th colspan="2">Time until diminishing returns (mins)</th><td colspan="2"></td></tr></tfoot></table>`, 46),
      _tmpl$10 = (0,web/* template */.XK)(`<tr><td></td><td></td><td></td><td></td></tr>`, 10),
      _tmpl$11 = (0,web/* template */.XK)(`<fieldset><legend>Stats</legend><div class="stats"></div></fieldset>`, 6);

function Stats_slicedToArray(arr, i) { return Stats_arrayWithHoles(arr) || Stats_iterableToArrayLimit(arr, i) || Stats_unsupportedIterableToArray(arr, i) || Stats_nonIterableRest(); }

function Stats_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Stats_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Stats_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Stats_arrayLikeToArray(o, minLen); }

function Stats_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Stats_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Stats_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Objects() {
  var _useState = useState(),
      _useState2 = Stats_slicedToArray(_useState, 1),
      state = _useState2[0];

  return function () {
    var _el$ = Stats_tmpl$3.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling,
        _el$4 = _el$3.nextSibling,
        _el$11 = _el$4.firstChild,
        _el$12 = _el$11.firstChild,
        _el$13 = _el$12.nextSibling;

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.roots.building;
      },

      children: function children(_ref) {
        var name = _ref.name,
            list = _ref.list;
        return function () {
          var _el$14 = Stats_tmpl$4.cloneNode(true),
              _el$15 = _el$14.firstChild,
              _el$16 = _el$15.nextSibling,
              _el$17 = _el$16.nextSibling;

          (0,web/* insert */.$T)(_el$16, name);

          (0,web/* insert */.$T)(_el$17, function () {
            return list.length;
          });

          return _el$14;
        }();
      }
    }), _el$11);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.roots.decor;
      },

      children: function children(_ref2) {
        var name = _ref2.name,
            list = _ref2.list;
        return function () {
          var _el$18 = Stats_tmpl$5.cloneNode(true),
              _el$19 = _el$18.firstChild,
              _el$20 = _el$19.nextSibling,
              _el$21 = _el$20.nextSibling;

          (0,web/* insert */.$T)(_el$20, name);

          (0,web/* insert */.$T)(_el$21, function () {
            return list.length;
          });

          return _el$18;
        }();
      }
    }), _el$11);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.count.inNetwork > 0;
      },

      get children() {
        var _el$5 = Stats_tmpl$.cloneNode(true),
            _el$6 = _el$5.firstChild,
            _el$7 = _el$6.nextSibling;

        (0,web/* insert */.$T)(_el$7, function () {
          return state.summary.count.inNetwork;
        });

        return _el$5;
      }

    }), _el$11);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.count.outNetwork > 0;
      },

      get children() {
        var _el$8 = Stats_tmpl$2.cloneNode(true),
            _el$9 = _el$8.firstChild,
            _el$10 = _el$9.nextSibling;

        (0,web/* insert */.$T)(_el$10, function () {
          return state.summary.count.outNetwork;
        });

        return _el$8;
      }

    }), _el$11);

    (0,web/* insert */.$T)(_el$13, function () {
      return state.summary.count.free;
    });

    return _el$;
  }();
}

function Beauty() {
  var _useState3 = useState(),
      _useState4 = Stats_slicedToArray(_useState3, 1),
      state = _useState4[0];

  return function () {
    var _el$22 = Stats_tmpl$6.cloneNode(true),
        _el$23 = _el$22.firstChild,
        _el$24 = _el$23.nextSibling,
        _el$25 = _el$24.nextSibling,
        _el$26 = _el$25.firstChild,
        _el$27 = _el$26.firstChild,
        _el$28 = _el$27.nextSibling,
        _el$29 = _el$28.nextSibling,
        _el$30 = _el$29.nextSibling,
        _el$31 = _el$25.nextSibling,
        _el$32 = _el$31.firstChild,
        _el$33 = _el$32.firstChild,
        _el$34 = _el$33.nextSibling,
        _el$35 = _el$32.nextSibling,
        _el$36 = _el$35.firstChild,
        _el$37 = _el$36.nextSibling;

    (0,web/* insert */.$T)(_el$27, function () {
      return "+".concat(state.summary.beauty.choices, "%");
    });

    (0,web/* insert */.$T)(_el$28, function () {
      return "+".concat(state.summary.beauty.banked);
    });

    (0,web/* insert */.$T)(_el$29, function () {
      return "".concat(state.summary.beauty.discount, "%");
    });

    (0,web/* insert */.$T)(_el$30, function () {
      return "+".concat(state.summary.beauty.visit, "%");
    });

    (0,web/* insert */.$T)(_el$34, function () {
      return state.summary.beauty.total;
    });

    (0,web/* insert */.$T)(_el$37, function () {
      return state.summary.beauty.next;
    });

    return _el$22;
  }();
}

function Production() {
  var _useState5 = useState(),
      _useState6 = Stats_slicedToArray(_useState5, 1),
      state = _useState6[0];

  var _createSignal = (0,solid/* createSignal */.gQ)(true),
      _createSignal2 = Stats_slicedToArray(_createSignal, 2),
      truncated = _createSignal2[0],
      setTruncated = _createSignal2[1];

  var onClick = function onClick() {
    setTruncated(!truncated());
  };

  return function () {
    var _el$38 = Stats_tmpl$9.cloneNode(true),
        _el$39 = _el$38.firstChild,
        _el$40 = _el$39.nextSibling,
        _el$41 = _el$40.nextSibling,
        _el$43 = _el$41.nextSibling,
        _el$44 = _el$43.firstChild,
        _el$47 = _el$44.nextSibling,
        _el$48 = _el$47.firstChild,
        _el$49 = _el$48.nextSibling,
        _el$50 = _el$47.nextSibling,
        _el$51 = _el$50.firstChild,
        _el$52 = _el$51.nextSibling,
        _el$53 = _el$50.nextSibling,
        _el$54 = _el$53.firstChild,
        _el$55 = _el$54.nextSibling,
        _el$56 = _el$53.nextSibling,
        _el$57 = _el$56.firstChild,
        _el$58 = _el$57.nextSibling;

    (0,web/* insert */.$T)(_el$41, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return truncated() && state.summary.production.lastOptimalCycle > 0;
      },

      get children() {
        return Stats_tmpl$7.cloneNode(true);
      }

    }), null);

    (0,web/* insert */.$T)(_el$41, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.summary.production.products.slice(truncated() ? state.summary.production.lastOptimalCycle : 0);
      },

      children: function children(product) {
        return function () {
          var _el$59 = _tmpl$10.cloneNode(true),
              _el$60 = _el$59.firstChild,
              _el$61 = _el$60.nextSibling,
              _el$62 = _el$61.nextSibling,
              _el$63 = _el$62.nextSibling;

          (0,web/* insert */.$T)(_el$60, function () {
            return 10 * product.cycle;
          });

          (0,web/* insert */.$T)(_el$61, function () {
            return product.total;
          });

          (0,web/* insert */.$T)(_el$62, function () {
            return product.marginal;
          });

          (0,web/* insert */.$T)(_el$63, function () {
            return product.average;
          });

          return _el$59;
        }();
      }
    }), null);

    (0,web/* insert */.$T)(_el$44, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.summary.production.lastOptimalCycle > 0;
      },

      get children() {
        var _el$45 = Stats_tmpl$8.cloneNode(true),
            _el$46 = _el$45.firstChild;

        _el$46.$$click = onClick;

        (0,web/* insert */.$T)(_el$46, function () {
          return (truncated() ? "Expand" : "Collapse") + " rows";
        });

        return _el$45;
      }

    }));

    (0,web/* insert */.$T)(_el$49, function () {
      return state.summary.production.products[state.summary.production.products.length - 1].total;
    });

    (0,web/* insert */.$T)(_el$52, function () {
      return 10 * (state.summary.production.products.length - 1);
    });

    (0,web/* insert */.$T)(_el$55, function () {
      return state.summary.production.products[state.summary.production.lastOptimalCycle].marginal;
    });

    (0,web/* insert */.$T)(_el$58, function () {
      return 10 * state.summary.production.lastOptimalCycle;
    });

    return _el$38;
  }();
}

function Stats() {
  return function () {
    var _el$64 = _tmpl$11.cloneNode(true),
        _el$65 = _el$64.firstChild,
        _el$66 = _el$65.nextSibling;

    (0,web/* insert */.$T)(_el$66, (0,solid/* createComponent */.LM)(Objects, {}), null);

    (0,web/* insert */.$T)(_el$66, (0,solid/* createComponent */.LM)(Beauty, {}), null);

    (0,web/* insert */.$T)(_el$66, (0,solid/* createComponent */.LM)(Production, {}), null);

    return _el$64;
  }();
}

/* harmony default export */ const components_Stats = (Stats);

(0,web/* delegateEvents */.Qj)(["click"]);
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



(0,web/* render */.sY)(src_App, document.getElementById("root"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(532)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);