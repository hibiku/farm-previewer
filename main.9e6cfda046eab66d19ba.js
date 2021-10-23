"use strict";
(self["webpackChunkfarm_previewer"] = self["webpackChunkfarm_previewer"] || []).push([[179],{

/***/ 75:
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
var _objectDisplayTypes, _props2, _props3;

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
var objectTypes = ["building", "decor", "road"];
var objectDisplayTypes = (_objectDisplayTypes = {}, _defineProperty(_objectDisplayTypes, "", "Free cell"), _defineProperty(_objectDisplayTypes, "myHouse", "My House"), _defineProperty(_objectDisplayTypes, "building", "Building"), _defineProperty(_objectDisplayTypes, "decor", "Decor"), _defineProperty(_objectDisplayTypes, "road", "Road"), _objectDisplayTypes);
var objectData = _defineProperty({
  myHouse: {
    names: [""],
    props: _defineProperty({}, "", {
      level: 1,
      order: 5,
      space: 25,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1
    })
  },
  building: {
    names: ["Green Mushroom Hut", "Henesys Homestead", "Orange Mushroom House", "Monster Barn", "Sturdy Straw House", "Red Mushroom Manor", "Rien Hot Springs", "Mu Lung Barber Shop", "Tip-Top Balloon Shop", "Floatland Manor", "Healthy Hospital", "Monster Manor", "Mr. Teddy X", "Ms. Teddy X", "Yellow Submarine", "Refreshing Oasis", "Yeti Super Stage", "Nautilus Harbor", "Shinsoo's Nest", "Ludibrium Toy House", "Orbis Flying Garden", "Ereve Fountain Garden", "Aqua Road Castle", "Zakum's Cave", "Windmill", "Chopper Chalet", "Drip Brew Coffee House", "Red Brick Abode", "Lofty Brick House", "Purple Bathhouse", "Blue Bathhouse", "Big Apple Fruit Shop", "Octo-Pot Seafood", "Henesys Bowman Guild", "Rudi Beauty Salon", "Santa's Gift Shop", "Ghastly Ghost Gables", "Grand Gourd Gables", "Blossom House", "Tip Top Chop Shop", "Pink Angel Place", "Full Moon Song Pyun Shop", "Gingerbread Gables", "Rien's Tonic Shop", "Blue Mushroom Mansion", "Mushroom Tower", "Ariant Fabrics (I)", "Hanok House", "Fantasy Park Viking", "Alchemist's Abode", "Five-Slime Hotel", "Creamy Cake Chateau", "Florina Lighthouse", "Leafre Airship", "Fish Shop", "Mushking Empire Outpost", "Nova Safehouse", "Elluel House", "Ariant Fabrics (II)", "Happy Homestead", "Melody Manor", "Aqua Roadhouse", "Fun Factory", "Ariant Castle", "Shaved Ice Chateau", "Magatia Workshop", "Santa's Special Shop", "Farmer's House", "Tick Tock Townhouse", "Mu Lung Dojo", "Icy Treat Retreat (I)", "Beatdown Shop", "Very Berry Vineyard", "Chryse Coliseum", "Omega Sector", "Tip-Top Toy Shop", "Edelstein Air Field", "Big Top Tenement", "Big Bowl Noodles", "Lumiere", "Icy Treat Retreat (II)", "Wholesome Milk Farm", "The Secret Garden"],
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
    props: (_props2 = {}, _defineProperty(_props2, "Green Mushroom Hut", {
      level: 1,
      order: 2,
      space: 4,
      waru: 2,
      banked: 50,
      decor: 5,
      limit: 99
    }), _defineProperty(_props2, "Henesys Homestead", {
      level: 2,
      order: 2,
      space: 4,
      waru: 7,
      banked: 80,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Orange Mushroom House", {
      level: 2,
      order: 2,
      space: 4,
      waru: 3,
      banked: 60,
      decor: 5,
      limit: 99
    }), _defineProperty(_props2, "Monster Barn", {
      level: 3,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 1
    }), _defineProperty(_props2, "Sturdy Straw House", {
      level: 3,
      order: 2,
      space: 4,
      waru: 5,
      banked: 50,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Red Mushroom Manor", {
      level: 3,
      order: 2,
      space: 4,
      waru: 6,
      banked: 100,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Rien Hot Springs", {
      level: 3,
      order: 2,
      space: 4,
      waru: 25,
      banked: 2200,
      decor: 200,
      limit: 198
    }), _defineProperty(_props2, "Mu Lung Barber Shop", {
      level: 3,
      order: 2,
      space: 4,
      waru: 27,
      banked: 1800,
      decor: 200,
      limit: 198
    }), _defineProperty(_props2, "Tip-Top Balloon Shop", {
      level: 3,
      order: 2,
      space: 4,
      waru: 35,
      banked: 3000,
      decor: 400,
      limit: 198
    }), _defineProperty(_props2, "Floatland Manor", {
      level: 3,
      order: 3,
      space: 9,
      waru: 23,
      banked: 2000,
      decor: 150,
      limit: 198
    }), _defineProperty(_props2, "Healthy Hospital", {
      level: 3,
      order: 3,
      space: 9,
      waru: 44,
      banked: 3500,
      decor: 250,
      limit: 198
    }), _defineProperty(_props2, "Monster Manor", {
      level: 3,
      order: 3,
      space: 9,
      waru: 42,
      banked: 5000,
      decor: 400,
      limit: 198
    }), _defineProperty(_props2, "Mr. Teddy X", {
      level: 3,
      order: 3,
      space: 9,
      waru: 48,
      banked: 4500,
      decor: 500,
      limit: 198
    }), _defineProperty(_props2, "Ms. Teddy X", {
      level: 3,
      order: 3,
      space: 9,
      waru: 52,
      banked: 3500,
      decor: 500,
      limit: 198
    }), _defineProperty(_props2, "Yellow Submarine", {
      level: 3,
      order: 4,
      space: 16,
      waru: 72,
      banked: 7000,
      decor: 900,
      limit: 198
    }), _defineProperty(_props2, "Refreshing Oasis", {
      level: 3,
      order: 4,
      space: 16,
      waru: 76,
      banked: 6000,
      decor: 1000,
      limit: 198
    }), _defineProperty(_props2, "Yeti Super Stage", {
      level: 3,
      order: 4,
      space: 16,
      waru: 82,
      banked: 5000,
      decor: 700,
      limit: 198
    }), _defineProperty(_props2, "Nautilus Harbor", {
      level: 3,
      order: 4,
      space: 16,
      waru: 91,
      banked: 5000,
      decor: 1500,
      limit: 198
    }), _defineProperty(_props2, "Shinsoo's Nest", {
      level: 3,
      order: 4,
      space: 16,
      waru: 87,
      banked: 7000,
      decor: 2000,
      limit: 198
    }), _defineProperty(_props2, "Ludibrium Toy House", {
      level: 3,
      order: 4,
      space: 16,
      waru: 183,
      banked: 2000,
      decor: 4000,
      limit: 198
    }), _defineProperty(_props2, "Orbis Flying Garden", {
      level: 3,
      order: 4,
      space: 16,
      waru: 105,
      banked: 5000,
      decor: 1500,
      limit: 198
    }), _defineProperty(_props2, "Ereve Fountain Garden", {
      level: 3,
      order: 4,
      space: 16,
      waru: 70,
      banked: 4500,
      decor: 500,
      limit: 198
    }), _defineProperty(_props2, "Aqua Road Castle", {
      level: 3,
      order: 4,
      space: 16,
      waru: 91,
      banked: 4000,
      decor: 1200,
      limit: 198
    }), _defineProperty(_props2, "Zakum's Cave", {
      level: 3,
      order: 4,
      space: 16,
      waru: 60,
      banked: 12000,
      decor: 500,
      limit: 198
    }), _defineProperty(_props2, "Windmill", {
      level: 4,
      order: 2,
      space: 4,
      waru: 10,
      banked: 70,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Chopper Chalet", {
      level: 5,
      order: 2,
      space: 4,
      waru: 8,
      banked: 120,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Drip Brew Coffee House", {
      level: 5,
      order: 3,
      space: 9,
      waru: 10,
      banked: 170,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Red Brick Abode", {
      level: 6,
      order: 2,
      space: 4,
      waru: 10,
      banked: 100,
      decor: 15,
      limit: 99
    }), _defineProperty(_props2, "Lofty Brick House", {
      level: 7,
      order: 2,
      space: 4,
      waru: 8,
      banked: 110,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Purple Bathhouse", {
      level: 8,
      order: 2,
      space: 4,
      waru: 9,
      banked: 110,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Blue Bathhouse", {
      level: 9,
      order: 2,
      space: 4,
      waru: 12,
      banked: 100,
      decor: 15,
      limit: 99
    }), _defineProperty(_props2, "Big Apple Fruit Shop", {
      level: 10,
      order: 2,
      space: 4,
      waru: 10,
      banked: 160,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Octo-Pot Seafood", {
      level: 10,
      order: 2,
      space: 4,
      waru: 13,
      banked: 140,
      decor: 5,
      limit: 99
    }), _defineProperty(_props2, "Henesys Bowman Guild", {
      level: 10,
      order: 3,
      space: 9,
      waru: 15,
      banked: 350,
      decor: 5,
      limit: 99
    }), _defineProperty(_props2, "Rudi Beauty Salon", {
      level: 10,
      order: 3,
      space: 9,
      waru: 14,
      banked: 250,
      decor: 70,
      limit: 99
    }), _defineProperty(_props2, "Santa's Gift Shop", {
      level: 10,
      order: 3,
      space: 9,
      waru: 16,
      banked: 200,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Ghastly Ghost Gables", {
      level: 10,
      order: 4,
      space: 16,
      waru: 45,
      banked: 3000,
      decor: 500,
      limit: 198
    }), _defineProperty(_props2, "Grand Gourd Gables", {
      level: 10,
      order: 4,
      space: 16,
      waru: 43,
      banked: 5000,
      decor: 350,
      limit: 198
    }), _defineProperty(_props2, "Blossom House", {
      level: 11,
      order: 2,
      space: 4,
      waru: 12,
      banked: 180,
      decor: 25,
      limit: 99
    }), _defineProperty(_props2, "Tip Top Chop Shop", {
      level: 11,
      order: 2,
      space: 4,
      waru: 11,
      banked: 190,
      decor: 25,
      limit: 99
    }), _defineProperty(_props2, "Pink Angel Place", {
      level: 12,
      order: 2,
      space: 4,
      waru: 10,
      banked: 210,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Full Moon Song Pyun Shop", {
      level: 12,
      order: 3,
      space: 9,
      waru: 12,
      banked: 250,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Gingerbread Gables", {
      level: 13,
      order: 2,
      space: 4,
      waru: 14,
      banked: 200,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Rien's Tonic Shop", {
      level: 13,
      order: 2,
      space: 4,
      waru: 15,
      banked: 210,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Blue Mushroom Mansion", {
      level: 14,
      order: 2,
      space: 4,
      waru: 12,
      banked: 240,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Mushroom Tower", {
      level: 14,
      order: 4,
      space: 16,
      waru: 12,
      banked: 300,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Ariant Fabrics (I)", {
      level: 15,
      order: 2,
      space: 4,
      waru: 12,
      banked: 360,
      decor: 5,
      limit: 99
    }), _defineProperty(_props2, "Hanok House", {
      level: 15,
      order: 2,
      space: 4,
      waru: 17,
      banked: 300,
      decor: 50,
      limit: 99
    }), _defineProperty(_props2, "Fantasy Park Viking", {
      level: 15,
      order: 3,
      space: 9,
      waru: 18,
      banked: 600,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Alchemist's Abode", {
      level: 15,
      order: 3,
      space: 9,
      waru: 20,
      banked: 300,
      decor: 15,
      limit: 99
    }), _defineProperty(_props2, "Five-Slime Hotel", {
      level: 15,
      order: 3,
      space: 9,
      waru: 18,
      banked: 400,
      decor: 25,
      limit: 99
    }), _defineProperty(_props2, "Creamy Cake Chateau", {
      level: 15,
      order: 3,
      space: 9,
      waru: 20,
      banked: 360,
      decor: 35,
      limit: 99
    }), _defineProperty(_props2, "Florina Lighthouse", {
      level: 15,
      order: 3,
      space: 9,
      waru: 15,
      banked: 250,
      decor: 15,
      limit: 99
    }), _defineProperty(_props2, "Leafre Airship", {
      level: 15,
      order: 4,
      space: 16,
      waru: 50,
      banked: 4000,
      decor: 500,
      limit: 198
    }), _defineProperty(_props2, "Fish Shop", {
      level: 16,
      order: 2,
      space: 4,
      waru: 15,
      banked: 550,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Mushking Empire Outpost", {
      level: 16,
      order: 3,
      space: 9,
      waru: 16,
      banked: 700,
      decor: 10,
      limit: 99
    }), _defineProperty(_props2, "Nova Safehouse", {
      level: 17,
      order: 2,
      space: 4,
      waru: 18,
      banked: 300,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Elluel House", {
      level: 18,
      order: 2,
      space: 4,
      waru: 15,
      banked: 330,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Ariant Fabrics (II)", {
      level: 18,
      order: 2,
      space: 4,
      waru: 16,
      banked: 300,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Happy Homestead", {
      level: 19,
      order: 2,
      space: 4,
      waru: 20,
      banked: 340,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Melody Manor", {
      level: 20,
      order: 2,
      space: 4,
      waru: 17,
      banked: 300,
      decor: 50,
      limit: 99
    }), _defineProperty(_props2, "Aqua Roadhouse", {
      level: 20,
      order: 3,
      space: 9,
      waru: 25,
      banked: 550,
      decor: 50,
      limit: 99
    }), _defineProperty(_props2, "Fun Factory", {
      level: 20,
      order: 3,
      space: 9,
      waru: 20,
      banked: 400,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Ariant Castle", {
      level: 20,
      order: 4,
      space: 16,
      waru: 28,
      banked: 500,
      decor: 50,
      limit: 99
    }), _defineProperty(_props2, "Shaved Ice Chateau", {
      level: 20,
      order: 4,
      space: 16,
      waru: 25,
      banked: 500,
      decor: 45,
      limit: 99
    }), _defineProperty(_props2, "Magatia Workshop", {
      level: 20,
      order: 4,
      space: 16,
      waru: 70,
      banked: 2000,
      decor: 100,
      limit: 198
    }), _defineProperty(_props2, "Santa's Special Shop", {
      level: 21,
      order: 2,
      space: 4,
      waru: 22,
      banked: 450,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Farmer's House", {
      level: 21,
      order: 2,
      space: 4,
      waru: 21,
      banked: 460,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Tick Tock Townhouse", {
      level: 22,
      order: 2,
      space: 4,
      waru: 25,
      banked: 400,
      decor: 35,
      limit: 99
    }), _defineProperty(_props2, "Mu Lung Dojo", {
      level: 23,
      order: 2,
      space: 4,
      waru: 23,
      banked: 450,
      decor: 35,
      limit: 99
    }), _defineProperty(_props2, "Icy Treat Retreat (I)", {
      level: 24,
      order: 2,
      space: 4,
      waru: 20,
      banked: 500,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Beatdown Shop", {
      level: 25,
      order: 3,
      space: 9,
      waru: 30,
      banked: 750,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Very Berry Vineyard", {
      level: 25,
      order: 3,
      space: 9,
      waru: 25,
      banked: 600,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Chryse Coliseum", {
      level: 25,
      order: 3,
      space: 9,
      waru: 30,
      banked: 750,
      decor: 55,
      limit: 99
    }), _defineProperty(_props2, "Omega Sector", {
      level: 25,
      order: 4,
      space: 16,
      waru: 45,
      banked: 900,
      decor: 60,
      limit: 99
    }), _defineProperty(_props2, "Tip-Top Toy Shop", {
      level: 26,
      order: 2,
      space: 4,
      waru: 22,
      banked: 500,
      decor: 50,
      limit: 99
    }), _defineProperty(_props2, "Edelstein Air Field", {
      level: 27,
      order: 3,
      space: 9,
      waru: 33,
      banked: 800,
      decor: 20,
      limit: 99
    }), _defineProperty(_props2, "Big Top Tenement", {
      level: 28,
      order: 2,
      space: 4,
      waru: 28,
      banked: 500,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Big Bowl Noodles", {
      level: 29,
      order: 2,
      space: 4,
      waru: 30,
      banked: 450,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Lumiere", {
      level: 30,
      order: 3,
      space: 9,
      waru: 35,
      banked: 900,
      decor: 30,
      limit: 99
    }), _defineProperty(_props2, "Icy Treat Retreat (II)", {
      level: 30,
      order: 3,
      space: 9,
      waru: 32,
      banked: 700,
      decor: 40,
      limit: 99
    }), _defineProperty(_props2, "Wholesome Milk Farm", {
      level: 35,
      order: 2,
      space: 4,
      waru: 40,
      banked: 700,
      decor: 50,
      limit: 99
    }), _defineProperty(_props2, "The Secret Garden", {
      level: 35,
      order: 4,
      space: 16,
      waru: 82,
      banked: 6000,
      decor: 1500,
      limit: 99
    }), _props2)
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
    props: (_props3 = {}, _defineProperty(_props3, "Lil Pine Tree", {
      level: 2,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 8,
      limit: 99
    }), _defineProperty(_props3, "Pine Tree", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 12,
      limit: 99
    }), _defineProperty(_props3, "Orange Mini Mushroom", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 9,
      limit: 99
    }), _defineProperty(_props3, "Heartfelt Garden", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 1000,
      limit: 198
    }), _defineProperty(_props3, "Floral Archway", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 1500,
      limit: 198
    }), _defineProperty(_props3, "Winged Archway", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 2000,
      limit: 198
    }), _defineProperty(_props3, "Rice Candy Set", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 2700,
      limit: 198
    }), _defineProperty(_props3, "Sky-High Flower", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 1000,
      limit: 198
    }), _defineProperty(_props3, "Stone Lantern", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 1500,
      limit: 198
    }), _defineProperty(_props3, "Buddy Bloom", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 2000,
      limit: 198
    }), _defineProperty(_props3, "Big Bass", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 2700,
      limit: 198
    }), _defineProperty(_props3, "Cannon", {
      level: 3,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 3200,
      limit: 198
    }), _defineProperty(_props3, "Nestled Egg", {
      level: 3,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 3500,
      limit: 198
    }), _defineProperty(_props3, "Snowman Mask", {
      level: 3,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 4200,
      limit: 198
    }), _defineProperty(_props3, "Fishin' Pepe", {
      level: 3,
      order: 3,
      space: 9,
      waru: 0,
      banked: 0,
      decor: 4600,
      limit: 198
    }), _defineProperty(_props3, "Christmas Tree", {
      level: 3,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 4800,
      limit: 198
    }), _defineProperty(_props3, "Aran's Legacy", {
      level: 3,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 6000,
      limit: 198
    }), _defineProperty(_props3, "Mount Monsmore", {
      level: 3,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 13000,
      limit: 198
    }), _defineProperty(_props3, "Elluel Rune Tree", {
      level: 3,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 13000,
      limit: 198
    }), _defineProperty(_props3, "White Cube", {
      level: 4,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99
    }), _defineProperty(_props3, "Red Cube", {
      level: 4,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99
    }), _defineProperty(_props3, "Green Cube", {
      level: 4,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99
    }), _defineProperty(_props3, "Orange Cube", {
      level: 4,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99
    }), _defineProperty(_props3, "Blue Cube", {
      level: 4,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99
    }), _defineProperty(_props3, "Black Cube", {
      level: 4,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 15,
      limit: 99
    }), _defineProperty(_props3, "Big Pine Tree", {
      level: 5,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 23,
      limit: 99
    }), _defineProperty(_props3, "Fallen Log", {
      level: 5,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 21,
      limit: 99
    }), _defineProperty(_props3, "Torch", {
      level: 5,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 27,
      limit: 99
    }), _defineProperty(_props3, "Oak Barrel", {
      level: 6,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 36,
      limit: 99
    }), _defineProperty(_props3, "Tiny Round Tree", {
      level: 6,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 45,
      limit: 99
    }), _defineProperty(_props3, "Haystack", {
      level: 6,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 30,
      limit: 99
    }), _defineProperty(_props3, "Round Tree", {
      level: 7,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 53,
      limit: 99
    }), _defineProperty(_props3, "Trash Box", {
      level: 7,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 53,
      limit: 99
    }), _defineProperty(_props3, "Wooden Timepost", {
      level: 7,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 60,
      limit: 99
    }), _defineProperty(_props3, "Tiny Sign", {
      level: 8,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 68,
      limit: 99
    }), _defineProperty(_props3, "Mini Flowerpot", {
      level: 8,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 72,
      limit: 99
    }), _defineProperty(_props3, "Little Scoop Tree", {
      level: 8,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 69,
      limit: 99
    }), _defineProperty(_props3, "Simple Swing", {
      level: 9,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99
    }), _defineProperty(_props3, "Log Bench", {
      level: 9,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 68,
      limit: 99
    }), _defineProperty(_props3, "Big Scoop Tree", {
      level: 9,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 78,
      limit: 99
    }), _defineProperty(_props3, "Buncha Barrels", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 87,
      limit: 99
    }), _defineProperty(_props3, "Plain Sign", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 93,
      limit: 99
    }), _defineProperty(_props3, "Lil Evergreen", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 105,
      limit: 99
    }), _defineProperty(_props3, "Rock", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99
    }), _defineProperty(_props3, "Flat Rock", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99
    }), _defineProperty(_props3, "Pointy Rock", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 90,
      limit: 99
    }), _defineProperty(_props3, "Craggy Rock", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99
    }), _defineProperty(_props3, "Towering Rock", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 113,
      limit: 99
    }), _defineProperty(_props3, "Banana Shake", {
      level: 10,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99
    }), _defineProperty(_props3, "Mythic Monsterland", {
      level: 10,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 13500,
      limit: 198
    }), _defineProperty(_props3, "Time Twister", {
      level: 10,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 9400,
      limit: 198
    }), _defineProperty(_props3, "Yeti's Hideout", {
      level: 10,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 11000,
      limit: 198
    }), _defineProperty(_props3, "Green Nature", {
      level: 10,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 10200,
      limit: 198
    }), _defineProperty(_props3, "Flying Whale", {
      level: 10,
      order: 4,
      space: 16,
      waru: 0,
      banked: 0,
      decor: 17000,
      limit: 198
    }), _defineProperty(_props3, "Stone Trash Can", {
      level: 11,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 75,
      limit: 99
    }), _defineProperty(_props3, "Triple Mushroom", {
      level: 11,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 90,
      limit: 99
    }), _defineProperty(_props3, "Round Topiary Tree", {
      level: 11,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99
    }), _defineProperty(_props3, "Fresh Milk", {
      level: 11,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 98,
      limit: 99
    }), _defineProperty(_props3, "Big Evergreen", {
      level: 12,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 113,
      limit: 99
    }), _defineProperty(_props3, "Haycart", {
      level: 12,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 120,
      limit: 99
    }), _defineProperty(_props3, "Aged Cheese", {
      level: 12,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 480,
      limit: 99
    }), _defineProperty(_props3, "Broad Sign", {
      level: 13,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 143,
      limit: 99
    }), _defineProperty(_props3, "Streetlight", {
      level: 13,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 143,
      limit: 99
    }), _defineProperty(_props3, "Grape Vat", {
      level: 13,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 600,
      limit: 99
    }), _defineProperty(_props3, "Itty Bitty Puddle", {
      level: 14,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 180,
      limit: 99
    }), _defineProperty(_props3, "Orange Bin", {
      level: 14,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      limit: 99
    }), _defineProperty(_props3, "Green Bin", {
      level: 14,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      limit: 99
    }), _defineProperty(_props3, "Purple Bin", {
      level: 14,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 135,
      limit: 99
    }), _defineProperty(_props3, "Purple Mini Mushroom", {
      level: 15,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 165,
      limit: 99
    }), _defineProperty(_props3, "Classic Wooden Horse", {
      level: 15,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 165,
      limit: 99
    }), _defineProperty(_props3, "Fine Grape Juice", {
      level: 15,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 750,
      limit: 99
    }), _defineProperty(_props3, "Big Round Topiary", {
      level: 16,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 180,
      limit: 99
    }), _defineProperty(_props3, "White Bench", {
      level: 16,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 180,
      limit: 99
    }), _defineProperty(_props3, "Double Cubist Tree", {
      level: 17,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 195,
      limit: 99
    }), _defineProperty(_props3, "White Signpost", {
      level: 17,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 210,
      limit: 99
    }), _defineProperty(_props3, "Blooming Shrub", {
      level: 18,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 225,
      limit: 99
    }), _defineProperty(_props3, "Round Flowerpot", {
      level: 18,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 248,
      limit: 99
    }), _defineProperty(_props3, "Big Mushroom Family", {
      level: 19,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 240,
      limit: 99
    }), _defineProperty(_props3, "Trash Can", {
      level: 19,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 270,
      limit: 99
    }), _defineProperty(_props3, "Rickety Clocktower", {
      level: 20,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 300,
      limit: 99
    }), _defineProperty(_props3, "Triple Cubist Tree", {
      level: 20,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 285,
      limit: 99
    }), _defineProperty(_props3, "Bushy Gazebo", {
      level: 20,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 315,
      limit: 99
    }), _defineProperty(_props3, "Rustic Slide", {
      level: 20,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 270,
      limit: 99
    }), _defineProperty(_props3, "Maple Tree", {
      level: 21,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 330,
      limit: 99
    }), _defineProperty(_props3, "Willow Tree", {
      level: 21,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 330,
      limit: 99
    }), _defineProperty(_props3, "Little Flower Garden", {
      level: 22,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 345,
      limit: 99
    }), _defineProperty(_props3, "Woodsy Well", {
      level: 22,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 353,
      limit: 99
    }), _defineProperty(_props3, "Lil Star Tree", {
      level: 23,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 338,
      limit: 99
    }), _defineProperty(_props3, "White Signboard", {
      level: 23,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 360,
      limit: 99
    }), _defineProperty(_props3, "Station Timepiece", {
      level: 24,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 375,
      limit: 99
    }), _defineProperty(_props3, "Floral Gazebo", {
      level: 24,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 368,
      limit: 99
    }), _defineProperty(_props3, "Cannonball Heap", {
      level: 25,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 390,
      limit: 99
    }), _defineProperty(_props3, "Gardener's Wheelbarrow", {
      level: 25,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 405,
      limit: 99
    }), _defineProperty(_props3, "Merry-Go-Round", {
      level: 25,
      order: 3,
      space: 9,
      waru: 0,
      banked: 0,
      decor: 2500,
      limit: 99
    }), _defineProperty(_props3, "Star Tree", {
      level: 26,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 420,
      limit: 99
    }), _defineProperty(_props3, "Fancy Bench", {
      level: 26,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 413,
      limit: 99
    }), _defineProperty(_props3, "Lil Heart Tree", {
      level: 27,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 435,
      limit: 99
    }), _defineProperty(_props3, "Heart Tree", {
      level: 27,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 465,
      limit: 99
    }), _defineProperty(_props3, "Rapunzel's Tower", {
      level: 27,
      order: 2,
      space: 4,
      waru: 0,
      banked: 0,
      decor: 2000,
      limit: 99
    }), _defineProperty(_props3, "Rustic Archway", {
      level: 28,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 473,
      limit: 99
    }), _defineProperty(_props3, "Shady Table", {
      level: 28,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 480,
      limit: 99
    }), _defineProperty(_props3, "Pretty Pond", {
      level: 29,
      order: 3,
      space: 9,
      waru: 0,
      banked: 0,
      decor: 600,
      limit: 99
    }), _defineProperty(_props3, "Rockin' Wooden Horse", {
      level: 29,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 510,
      limit: 99
    }), _defineProperty(_props3, "Fine Fountain", {
      level: 30,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 525,
      limit: 99
    }), _defineProperty(_props3, "Floral Swing", {
      level: 30,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 540,
      limit: 99
    }), _defineProperty(_props3, "Snack Shack", {
      level: 30,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 750,
      limit: 99
    }), _defineProperty(_props3, "Snow Crystal Core", {
      level: 32,
      order: 3,
      space: 9,
      waru: 0,
      banked: 0,
      decor: 3000,
      limit: 99
    }), _props3)
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
    props: _defineProperty({}, "", {
      level: 1,
      order: 1,
      space: 1,
      waru: 0,
      banked: 0,
      decor: 0,
      limit: 0
    })
  }
}, "", {
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
  props: _defineProperty({}, "", {
    level: 1,
    order: 1,
    space: 1,
    waru: 0,
    banked: 0,
    decor: 0,
    limit: 0
  })
});
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

function getBeautyEffects(beauty) {
  var level = getBeautyLevel(beauty);
  return {
    next: beautyThresholds[Math.min(level + 1, beautyLevels.length)] - beauty,
    choices: Math.ceil(level / 2),
    banked: 2 * level,
    discount: Math.ceil(level / 8),
    visit: level
  };
}
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
var baseLevel = levels[0];
var baseOrder = orderLimits[baseLevel].min;
var baseSpace = Math.pow(baseOrder, 2);
var baseMobCap = mobCapLimits[baseLevel].min;
var baseConfig = {
  level: baseLevel,
  order: baseOrder,
  mobCap: baseMobCap,
  useAufheben: false,
  useAutofill: false
};
var myHouseOrder = objectData.myHouse.props[""].order;
var myHouseSpace = objectData.myHouse.props[""].space;

function baseTemplate(config) {
  return function (_, index) {
    var row = Math.floor(index / config.order);
    var col = Math.floor(index % config.order);
    var cell = {
      row: row,
      col: col,
      type: "",
      name: "",
      rootIndex: index
    };

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

function StateProvider(props) {
  var _createStore = (0,dist_store/* createStore */.MT)({
    config: baseConfig,
    mode: {
      type: "inspect",
      inspect: {
        rootIndex: 0
      },
      decorate: {
        type: objectTypes[0],
        name: objectData[objectTypes[0]].limits[baseLevel].min
      }
    },
    cells: new Array(baseSpace).fill().map(baseTemplate(baseConfig)),
    objects: {
      building: [],
      decor: [],
      road: {
        inNetwork: baseConfig.useAutofill ? baseSpace - myHouseSpace : 0,
        outNetwork: 0
      }
    },
    space: baseSpace - myHouseSpace - 1 - baseMobCap,
    beauty: _objectSpread(_objectSpread({}, getBeautyEffects(0)), {}, {
      total: 0
    }),
    production: {
      numOptimalCycles: 0,
      numMaxCycles: 0,
      cycles: [{
        total: 0,
        average: 0,
        marginal: 0
      }]
    }
  }),
      _createStore2 = _slicedToArray(_createStore, 2),
      state = _createStore2[0],
      setState = _createStore2[1];

  var store = [state, {
    setMode: function setMode(type) {
      setState("mode", "type", type);
    },
    setInspect: function setInspect(rootIndex) {
      setState("mode", "inspect", {
        rootIndex: rootIndex
      });
    },
    setDecorate: function setDecorate(type, name) {
      setState("mode", "decorate", {
        type: type,
        name: name
      });
    },
    setGrid: function setGrid() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : baseConfig;
      var template = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : baseTemplate(config);
      var cells = new Array(Math.pow(config.order, 2)).fill().map(template);
      var network = new dsforest.DisjointSet();
      cells.forEach(function (cell, index) {
        if (cell.type === "myHouse" || cell.type === "road") {
          network.makeSet(index);

          if (cell.row > 0) {
            var upCellIndex = index - config.order;
            var upCell = cells[upCellIndex];

            if (upCell.type === "myHouse" || upCell.type === "road") {
              network.union(upCellIndex, index);
            }
          }

          if (cell.col > 0) {
            var leftCellIndex = index - 1;
            var leftCell = cells[leftCellIndex];

            if (leftCell.type === "myHouse" || leftCell.type === "road") {
              network.union(leftCellIndex, index);
            }
          }

          if (cell.row > 0 && cell.col > 0) {
            var upperLeftCellIndex = index - config.order - 1;
            var upperLeftCell = cells[upperLeftCellIndex];

            if (upperLeftCell.type === "myHouse" || upperLeftCell.type === "road") {
              network.union(upperLeftCellIndex, index);
            }
          }

          if (cell.row > 0 && cell.col < config.order - 1) {
            var upperRightCellIndex = index - config.order + 1;
            var upperRightCell = cells[upperRightCellIndex];

            if (upperRightCell.type === "myHouse" || upperRightCell.type === "road") {
              network.union(upperRightCellIndex, index);
            }
          }
        }
      });
      var objects = {
        building: new Map(),
        decor: new Map(),
        road: {
          inNetwork: 0,
          outNetwork: 0
        }
      };
      var totalSpace = Math.pow(config.order, 2) - myHouseSpace - 1 - config.mobCap;
      var totalBeauty = 0;
      cells.forEach(function (cell, index) {
        if (cell.type && cell.rootIndex === index) {
          var _props = objectData[cell.type].props[cell.name];
          var numRoads = 0;

          if (cell.type === "building" || cell.type === "decor") {
            var lowerRow = Math.max(0, cell.row - 1);
            var lowerCol = Math.max(0, cell.col - 1);
            var upperRow = Math.min(config.order - 1, cell.row + _props.order);
            var upperCol = Math.min(config.order - 1, cell.col + _props.order);

            for (var r = lowerRow; r <= upperRow; r++) {
              for (var c = lowerCol; c <= upperCol; c++) {
                var idx = r * config.order + c;

                if (cells[idx].type === "road" && network.areConnected(0, idx)) {
                  numRoads++;
                }
              }
            }

            totalSpace -= _props.space;
          }

          switch (cell.type) {
            case "building":
              cells[index] = _objectSpread(_objectSpread({}, cell), {}, {
                numRoads: numRoads,
                baseWaru: _props.waru,
                bonusWaru: _props.waru > 0 ? Math.min(_props.waru, Math.floor(numRoads * (5 + 0.02 * _props.waru))) + (config.useAufheben ? 1 : 0) : 0,
                baseBanked: _props.banked,
                baseDecor: _props.decor
              });
              objects.building.set(cell.name, (objects.building.get(cell.name) || 0) + 1);
              totalBeauty += _props.decor;
              break;

            case "decor":
              var bonusDecor = Math.min(_props.decor, Math.floor(numRoads * (200 + 0.02 * _props.decor)));
              cells[index] = _objectSpread(_objectSpread({}, cell), {}, {
                numRoads: numRoads,
                baseBanked: _props.banked,
                baseDecor: _props.decor,
                bonusDecor: bonusDecor
              });
              objects.decor.set(cell.name, (objects.decor.get(cell.name) || 0) + 1);
              totalBeauty += _props.decor + bonusDecor;
              break;

            case "road":
              var inNetwork = network.areConnected(0, index);
              cells[index] = _objectSpread(_objectSpread({}, cell), {}, {
                inNetwork: inNetwork
              });

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
      var beautyEffects = getBeautyEffects(totalBeauty);
      var numOptimalCycles = 0,
          numMaxCycles = 0;
      var cycles = [{
        total: 0,
        average: 0,
        marginal: 0
      }];
      cells.forEach(function (cell, index) {
        if (cell.rootIndex === index && cell.type === "building") {
          var baseWaru = cell.baseWaru,
              bonusWaru = cell.bonusWaru,
              baseBanked = cell.baseBanked;
          var bonusBanked = baseBanked > 0 ? beautyEffects.banked : 0;
          var finalBanked = baseBanked + bonusBanked;
          var finalWaru = baseWaru + bonusWaru;

          if (finalWaru > 0 && finalBanked > 0) {
            var numCycles = finalBanked / finalWaru;
            var remWaru = finalBanked % finalWaru;
            var numLowerCycles = Math.floor(numCycles);
            var numUpperCycles = Math.ceil(numCycles);
            numOptimalCycles = numOptimalCycles > 0 ? Math.min(numOptimalCycles, numLowerCycles) : numLowerCycles;
            numMaxCycles = numMaxCycles > 0 ? Math.max(numMaxCycles, numUpperCycles) : numUpperCycles;

            for (var i = 1; i <= numLowerCycles; i++) {
              if (!cycles[i]) {
                cycles[i] = {
                  total: 0,
                  average: 0,
                  marginal: 0
                };
              }

              cycles[i].marginal += finalWaru;
            }

            if (remWaru > 0) {
              if (!cycles[numUpperCycles]) {
                cycles[numUpperCycles] = {
                  total: 0,
                  average: 0,
                  marginal: 0
                };
              }

              cycles[numUpperCycles].marginal += remWaru;
            }
          }

          cells[index] = _objectSpread(_objectSpread({}, cell), {}, {
            bonusBanked: bonusBanked
          });
        }
      });
      var totalWaru = 0;
      cycles.forEach(function (cycle, index) {
        if (index > 0) {
          totalWaru += cycle.marginal;
          cycle.total = totalWaru;
          cycle.average = Math.round(totalWaru / index * 100) / 100;
        }
      });
      setState({
        config: config,
        cells: cells,
        objects: _objectSpread(_objectSpread({}, objects), {}, {
          building: Object.entries(Object.fromEntries(objects.building)),
          decor: Object.entries(Object.fromEntries(objects.decor))
        }),
        space: totalSpace,
        beauty: _objectSpread(_objectSpread({}, beautyEffects), {}, {
          total: totalBeauty
        }),
        production: {
          numOptimalCycles: numOptimalCycles,
          numMaxCycles: numMaxCycles,
          cycles: cycles
        }
      });
    }
  }];
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





const _tmpl$ = (0,web/* template */.XK)(`<label for="farm-level">Level</label>`, 2),
      _tmpl$2 = (0,web/* template */.XK)(`<select id="farm-level"></select>`, 2),
      _tmpl$3 = (0,web/* template */.XK)(`<option></option>`, 2),
      _tmpl$4 = (0,web/* template */.XK)(`<label for="farm-order">Dimensions</label>`, 2),
      _tmpl$5 = (0,web/* template */.XK)(`<select id="farm-order"></select>`, 2),
      _tmpl$6 = (0,web/* template */.XK)(`<label for="farm-mob-cap">Monster capacity</label>`, 2),
      _tmpl$7 = (0,web/* template */.XK)(`<select id="farm-mob-cap"></select>`, 2),
      _tmpl$8 = (0,web/* template */.XK)(`<div><input type="checkbox" id="farm-aufheben"><label for="farm-aufheben">Use Aufheben effect</label></div>`, 5),
      _tmpl$9 = (0,web/* template */.XK)(`<fieldset><legend>Config</legend><div class="config"></div></fieldset>`, 6);

function Config_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Config_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Config_ownKeys(Object(source), true).forEach(function (key) { Config_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Config_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Config_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      _useState2$ = _useState2[1],
      setInspect = _useState2$.setInspect,
      setDecorate = _useState2$.setDecorate,
      setGrid = _useState2$.setGrid;

  var handleChange = function handleChange(event) {
    var level = event.currentTarget.value;
    setDecorate(objectTypes[0], objectData[objectTypes[0]].limits[level].min);
    var oldOrder = state.config.order;
    var newOrder = orderLimits[level].max;
    var newMobCap = Math.min(Math.max(state.config.mobCap, mobCapLimits[level].min), mobCapLimits[level].max);

    if (oldOrder > newOrder) {
      var inspectIndex = state.mode.inspect.rootIndex;
      var inspectRow = state.cells[inspectIndex].row;
      var inspectCol = state.cells[inspectIndex].col;
      setInspect(inspectRow >= newOrder || inspectCol >= newOrder ? 0 : inspectRow * newOrder + inspectCol);
      var rootIndices = new Map();
      var indices = [];
      state.cells.forEach(function (cell, index) {
        if ((cell.row >= newOrder || cell.col >= newOrder) && cell.type && cell.rootIndex !== index && !rootIndices.has(cell.rootIndex)) {
          var _state$cells$cell$roo = state.cells[cell.rootIndex],
              row = _state$cells$cell$roo.row,
              col = _state$cells$cell$roo.col;

          if (row < newOrder && col < newOrder) {
            var order = objectData[cell.type].props[cell.name].order;
            var upperRow = Math.min(row + order - 1, newOrder - 1);
            var upperCol = Math.min(col + order - 1, newOrder - 1);

            for (var r = row; r <= upperRow; r++) {
              for (var c = col; c <= upperCol; c++) {
                indices.push(r * newOrder + c);
              }
            }
          }

          rootIndices.set(cell.rootIndex, true);
        }
      });
      setGrid(Config_objectSpread(Config_objectSpread({}, state.config), {}, {
        level: level,
        order: newOrder,
        mobCap: newMobCap
      }), function (_, index) {
        var newRow = Math.floor(index / newOrder);
        var newCol = Math.floor(index % newOrder);

        if (indices.includes(index)) {
          return {
            row: newRow,
            col: newCol,
            type: state.config.useAutofill ? "road" : "",
            name: "",
            rootIndex: index
          };
        }

        var oldCell = state.cells[newRow * oldOrder + newCol];
        var oldRootIndex = oldCell.rootIndex;
        var oldRootRow = Math.floor(oldRootIndex / oldOrder);
        var oldRootCol = Math.floor(oldRootIndex % oldOrder);
        return Config_objectSpread(Config_objectSpread({}, oldCell), {}, {
          row: newRow,
          col: newCol,
          rootIndex: oldRootRow * newOrder + oldRootCol
        });
      });
    } else {
      setGrid(Config_objectSpread(Config_objectSpread({}, state.config), {}, {
        level: level,
        mobCap: newMobCap
      }), function (_, index) {
        return Config_objectSpread({}, state.cells[index]);
      });
    }
  };

  return [_tmpl$.cloneNode(true), function () {
    var _el$2 = _tmpl$2.cloneNode(true);

    _el$2.addEventListener("change", handleChange);

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
      _useState4$ = _useState4[1],
      setInspect = _useState4$.setInspect,
      setGrid = _useState4$.setGrid;

  var handleChange = function handleChange(event) {
    var oldOrder = state.config.order;
    var newOrder = event.currentTarget.value;
    var inspectIndex = state.mode.inspect.rootIndex;
    var inspectRow = state.cells[inspectIndex].row;
    var inspectCol = state.cells[inspectIndex].col;
    var newInspectIndex = inspectRow * newOrder + inspectCol;

    if (oldOrder > newOrder) {
      setInspect(inspectRow >= newOrder || inspectCol >= newOrder ? 0 : newInspectIndex);
      var rootIndices = new Map();
      var indices = [];
      state.cells.forEach(function (cell, index) {
        if ((cell.row >= newOrder || cell.col >= newOrder) && cell.type && cell.rootIndex !== index && !rootIndices.has(cell.rootIndex)) {
          var _state$cells$cell$roo2 = state.cells[cell.rootIndex],
              row = _state$cells$cell$roo2.row,
              col = _state$cells$cell$roo2.col;

          if (row < newOrder && col < newOrder) {
            var order = objectData[cell.type].props[cell.name].order;
            var upperRow = Math.min(row + order - 1, newOrder - 1);
            var upperCol = Math.min(col + order - 1, newOrder - 1);

            for (var r = row; r <= upperRow; r++) {
              for (var c = col; c <= upperCol; c++) {
                indices.push(r * newOrder + c);
              }
            }
          }

          rootIndices.set(cell.rootIndex, true);
        }
      });
      setGrid(Config_objectSpread(Config_objectSpread({}, state.config), {}, {
        order: newOrder
      }), function (_, index) {
        var newRow = Math.floor(index / newOrder);
        var newCol = Math.floor(index % newOrder);

        if (indices.includes(index)) {
          return {
            row: newRow,
            col: newCol,
            type: state.config.useAutofill ? "road" : "",
            name: "",
            rootIndex: index
          };
        }

        var oldCell = state.cells[newRow * oldOrder + newCol];
        var oldRootIndex = oldCell.rootIndex;
        var oldRootRow = Math.floor(oldRootIndex / oldOrder);
        var oldRootCol = Math.floor(oldRootIndex % oldOrder);
        return Config_objectSpread(Config_objectSpread({}, oldCell), {}, {
          row: newRow,
          col: newCol,
          rootIndex: oldRootRow * newOrder + oldRootCol
        });
      });
    } else {
      setInspect(newInspectIndex >= Math.pow(oldOrder, 2) ? 0 : newInspectIndex);
      setGrid(Config_objectSpread(Config_objectSpread({}, state.config), {}, {
        order: newOrder
      }), function (_, index) {
        var newRow = Math.floor(index / newOrder);
        var newCol = Math.floor(index % newOrder);

        if (newRow < oldOrder && newCol < oldOrder) {
          var oldCell = state.cells[newRow * oldOrder + newCol];
          var oldRootIndex = oldCell.rootIndex;
          var oldRootRow = Math.floor(oldRootIndex / oldOrder);
          var oldRootCol = Math.floor(oldRootIndex % oldOrder);
          return Config_objectSpread(Config_objectSpread({}, oldCell), {}, {
            row: newRow,
            col: newCol,
            rootIndex: oldRootRow * newOrder + oldRootCol
          });
        }

        return {
          row: newRow,
          col: newCol,
          type: state.config.useAutofill ? "road" : "",
          name: "",
          rootIndex: index
        };
      });
    }
  };

  return [_tmpl$4.cloneNode(true), function () {
    var _el$5 = _tmpl$5.cloneNode(true);

    _el$5.addEventListener("change", handleChange);

    (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: orders,
      children: function children(order, index) {
        return function () {
          var _el$6 = _tmpl$3.cloneNode(true);

          _el$6.value = order;

          (0,web/* insert */.$T)(_el$6, order + " x " + order);

          (0,solid/* createRenderEffect */.F3)(function () {
            return _el$6.disabled = index() < orders.indexOf(orderLimits[state.config.level].min) || index() > orders.indexOf(orderLimits[state.config.level].max);
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
      setGrid = _useState6[1].setGrid;

  var handleChange = function handleChange(event) {
    var mobCap = event.currentTarget.value;
    setGrid(Config_objectSpread(Config_objectSpread({}, state.config), {}, {
      mobCap: mobCap
    }), function (_, index) {
      return Config_objectSpread({}, state.cells[index]);
    });
  };

  return [_tmpl$6.cloneNode(true), function () {
    var _el$8 = _tmpl$7.cloneNode(true);

    _el$8.addEventListener("change", handleChange);

    (0,web/* insert */.$T)(_el$8, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: mobCaps,
      children: function children(mobCap, index) {
        return function () {
          var _el$9 = _tmpl$3.cloneNode(true);

          _el$9.value = mobCap;

          (0,web/* insert */.$T)(_el$9, mobCap);

          (0,solid/* createRenderEffect */.F3)(function () {
            return _el$9.disabled = index() < mobCaps.indexOf(mobCapLimits[state.config.level].min) || index() > mobCaps.indexOf(mobCapLimits[state.config.level].max);
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
      setGrid = _useState8[1].setGrid;

  var handleChange = function handleChange() {
    setGrid(Config_objectSpread(Config_objectSpread({}, state.config), {}, {
      useAufheben: !state.config.useAufheben
    }), function (_, index) {
      return Config_objectSpread({}, state.cells[index]);
    });
  };

  return function () {
    var _el$10 = _tmpl$8.cloneNode(true),
        _el$11 = _el$10.firstChild;

    _el$11.addEventListener("change", handleChange);

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





const Inspect_tmpl$ = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td></td></tr><tr><th>Name</th><td></td></tr><tr><th>Adjacent roads (in-network)</th><td></td></tr><tr><th>Yield rate (W/10 mins)</th><td></td></tr><tr><th>Max capacity (W)</th><td></td></tr><tr><th>Aesthetic points</th><td></td></tr></tbody>`, 38),
      Inspect_tmpl$2 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td></td></tr><tr><th>Name</th><td></td></tr><tr><th>Adjacent roads (in-network)</th><td></td></tr><tr><th>Aesthetic points</th><td></td></tr></tbody>`, 26),
      Inspect_tmpl$3 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td></td></tr><tr><th>Connected to house</th><td></td></tr></tbody>`, 14),
      Inspect_tmpl$4 = (0,web/* template */.XK)(`<table><caption>Cell properties</caption></table>`, 4),
      Inspect_tmpl$5 = (0,web/* template */.XK)(`<tbody><tr><th>Type</th><td></td></tr></tbody>`, 8);

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
    var _el$ = Inspect_tmpl$4.cloneNode(true),
        _el$2 = _el$.firstChild;

    (0,web/* insert */.$T)(_el$, (0,solid/* createComponent */.LM)(solid/* Switch */.rs, {
      get fallback() {
        return function () {
          var _el$42 = Inspect_tmpl$5.cloneNode(true),
              _el$43 = _el$42.firstChild,
              _el$44 = _el$43.firstChild,
              _el$45 = _el$44.nextSibling;

          (0,web/* insert */.$T)(_el$45, function () {
            return objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type];
          });

          return _el$42;
        }();
      },

      get children() {
        return [(0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.cells[state.mode.inspect.rootIndex].type === "building";
          },

          get children() {
            var _el$3 = Inspect_tmpl$.cloneNode(true),
                _el$4 = _el$3.firstChild,
                _el$5 = _el$4.firstChild,
                _el$6 = _el$5.nextSibling,
                _el$7 = _el$4.nextSibling,
                _el$8 = _el$7.firstChild,
                _el$9 = _el$8.nextSibling,
                _el$10 = _el$7.nextSibling,
                _el$11 = _el$10.firstChild,
                _el$12 = _el$11.nextSibling,
                _el$13 = _el$10.nextSibling,
                _el$14 = _el$13.firstChild,
                _el$15 = _el$14.nextSibling,
                _el$16 = _el$13.nextSibling,
                _el$17 = _el$16.firstChild,
                _el$18 = _el$17.nextSibling,
                _el$19 = _el$16.nextSibling,
                _el$20 = _el$19.firstChild,
                _el$21 = _el$20.nextSibling;

            (0,web/* insert */.$T)(_el$6, function () {
              return objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type];
            });

            (0,web/* insert */.$T)(_el$9, function () {
              return state.cells[state.mode.inspect.rootIndex].name;
            });

            (0,web/* insert */.$T)(_el$12, function () {
              return state.cells[state.mode.inspect.rootIndex].numRoads;
            });

            (0,web/* insert */.$T)(_el$15, function () {
              return state.cells[state.mode.inspect.rootIndex].baseWaru + "(+" + state.cells[state.mode.inspect.rootIndex].bonusWaru + ")";
            });

            (0,web/* insert */.$T)(_el$18, function () {
              return state.cells[state.mode.inspect.rootIndex].baseBanked + "(+" + state.cells[state.mode.inspect.rootIndex].bonusBanked + ")";
            });

            (0,web/* insert */.$T)(_el$21, function () {
              return state.cells[state.mode.inspect.rootIndex].baseDecor;
            });

            return _el$3;
          }

        }), (0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.cells[state.mode.inspect.rootIndex].type === "decor";
          },

          get children() {
            var _el$22 = Inspect_tmpl$2.cloneNode(true),
                _el$23 = _el$22.firstChild,
                _el$24 = _el$23.firstChild,
                _el$25 = _el$24.nextSibling,
                _el$26 = _el$23.nextSibling,
                _el$27 = _el$26.firstChild,
                _el$28 = _el$27.nextSibling,
                _el$29 = _el$26.nextSibling,
                _el$30 = _el$29.firstChild,
                _el$31 = _el$30.nextSibling,
                _el$32 = _el$29.nextSibling,
                _el$33 = _el$32.firstChild,
                _el$34 = _el$33.nextSibling;

            (0,web/* insert */.$T)(_el$25, function () {
              return objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type];
            });

            (0,web/* insert */.$T)(_el$28, function () {
              return state.cells[state.mode.inspect.rootIndex].name;
            });

            (0,web/* insert */.$T)(_el$31, function () {
              return state.cells[state.mode.inspect.rootIndex].numRoads;
            });

            (0,web/* insert */.$T)(_el$34, function () {
              return state.cells[state.mode.inspect.rootIndex].baseDecor + "(+" + state.cells[state.mode.inspect.rootIndex].bonusDecor + ")";
            });

            return _el$22;
          }

        }), (0,solid/* createComponent */.LM)(solid/* Match */.qE, {
          get when() {
            return state.cells[state.mode.inspect.rootIndex].type === "road";
          },

          get children() {
            var _el$35 = Inspect_tmpl$3.cloneNode(true),
                _el$36 = _el$35.firstChild,
                _el$37 = _el$36.firstChild,
                _el$38 = _el$37.nextSibling,
                _el$39 = _el$36.nextSibling,
                _el$40 = _el$39.firstChild,
                _el$41 = _el$40.nextSibling;

            (0,web/* insert */.$T)(_el$38, function () {
              return objectDisplayTypes[state.cells[state.mode.inspect.rootIndex].type];
            });

            (0,web/* insert */.$T)(_el$41, function () {
              return state.cells[state.mode.inspect.rootIndex].inNetwork ? "Yes" : "No";
            });

            return _el$35;
          }

        })];
      }

    }), null);

    return _el$;
  }();
}

/* harmony default export */ const components_Inspect = (Inspect);
;// CONCATENATED MODULE: ./src/components/Decorate.jsx






const Decorate_tmpl$ = (0,web/* template */.XK)(`<label for="farm-object-type">Type</label>`, 2),
      Decorate_tmpl$2 = (0,web/* template */.XK)(`<select id="farm-object-type"></select>`, 2),
      Decorate_tmpl$3 = (0,web/* template */.XK)(`<option></option>`, 2),
      Decorate_tmpl$4 = (0,web/* template */.XK)(`<label for="farm-object-name">Name</label>`, 2),
      Decorate_tmpl$5 = (0,web/* template */.XK)(`<select id="farm-object-name"></select>`, 2),
      Decorate_tmpl$6 = (0,web/* template */.XK)(`<div><input type="checkbox" id="farm-autofill"><label for="farm-autofill">Autofill roads</label></div>`, 5);

function Decorate_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Decorate_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Decorate_ownKeys(Object(source), true).forEach(function (key) { Decorate_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Decorate_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Decorate_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      setDecorate = _useState2[1].setDecorate;

  var handleChange = function handleChange(event) {
    var type = event.currentTarget.value;
    setDecorate(type, objectData[type].limits[state.config.level].min);
  };

  return [Decorate_tmpl$.cloneNode(true), function () {
    var _el$2 = Decorate_tmpl$2.cloneNode(true);

    _el$2.addEventListener("change", handleChange);

    (0,web/* insert */.$T)(_el$2, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      each: objectTypes,
      children: function children(type) {
        return function () {
          var _el$3 = Decorate_tmpl$3.cloneNode(true);

          _el$3.value = type;

          (0,web/* insert */.$T)(_el$3, function () {
            return objectDisplayTypes[type];
          });

          return _el$3;
        }();
      }
    }));

    (0,solid/* createRenderEffect */.F3)(function () {
      return _el$2.value = state.mode.decorate.type;
    });

    return _el$2;
  }()];
}

function DecorateName() {
  var _useState3 = useState(),
      _useState4 = Decorate_slicedToArray(_useState3, 2),
      state = _useState4[0],
      setDecorate = _useState4[1].setDecorate;

  var handleChange = function handleChange(event) {
    setDecorate(state.mode.decorate.type, event.currentTarget.value);
  };

  return (0,solid/* createComponent */.LM)(solid/* Show */.di, {
    get when() {
      return state.mode.decorate.type !== "road";
    },

    get children() {
      return [Decorate_tmpl$4.cloneNode(true), function () {
        var _el$5 = Decorate_tmpl$5.cloneNode(true);

        _el$5.addEventListener("change", handleChange);

        (0,web/* insert */.$T)(_el$5, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
          get each() {
            return objectData[state.mode.decorate.type].names;
          },

          children: function children(name, index) {
            return function () {
              var _el$6 = Decorate_tmpl$3.cloneNode(true);

              _el$6.value = name;

              (0,web/* insert */.$T)(_el$6, name);

              (0,solid/* createRenderEffect */.F3)(function () {
                return _el$6.disabled = index() < objectData[state.mode.decorate.type].names.indexOf(objectData[state.mode.decorate.type].limits[state.config.level].min) || index() > objectData[state.mode.decorate.type].names.indexOf(objectData[state.mode.decorate.type].limits[state.config.level].max);
              });

              return _el$6;
            }();
          }
        }));

        (0,solid/* createRenderEffect */.F3)(function () {
          return _el$5.value = state.mode.decorate.name;
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
      setGrid = _useState6[1].setGrid;

  var handleChange = function handleChange() {
    var useAutofill = state.config.useAutofill;

    if (useAutofill) {
      setGrid(Decorate_objectSpread(Decorate_objectSpread({}, state.config), {}, {
        useAutofill: !useAutofill
      }), function (_, index) {
        var cell = state.cells[index];

        if (cell.type === "road") {
          return Decorate_objectSpread(Decorate_objectSpread({}, cell), {}, {
            type: "",
            name: ""
          });
        }

        return Decorate_objectSpread({}, cell);
      });
    } else {
      setGrid(Decorate_objectSpread(Decorate_objectSpread({}, state.config), {}, {
        useAutofill: !useAutofill
      }), function (_, index) {
        var cell = state.cells[index];

        if (!cell.type) {
          return Decorate_objectSpread(Decorate_objectSpread({}, cell), {}, {
            type: "road",
            name: ""
          });
        }

        return Decorate_objectSpread({}, cell);
      });
    }
  };

  return function () {
    var _el$7 = Decorate_tmpl$6.cloneNode(true),
        _el$8 = _el$7.firstChild;

    _el$8.addEventListener("change", handleChange);

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







const Mode_tmpl$ = (0,web/* template */.XK)(`<button type="button"></button>`, 2),
      Mode_tmpl$2 = (0,web/* template */.XK)(`<fieldset><legend></legend><div></div></fieldset>`, 6);

function Mode_slicedToArray(arr, i) { return Mode_arrayWithHoles(arr) || Mode_iterableToArrayLimit(arr, i) || Mode_unsupportedIterableToArray(arr, i) || Mode_nonIterableRest(); }

function Mode_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Mode_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Mode_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Mode_arrayLikeToArray(o, minLen); }

function Mode_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Mode_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Mode_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var displayModes = {
  decorate: "Decorate",
  inspect: "Inspect"
};

function ModeToggle() {
  var _useState = useState(),
      _useState2 = Mode_slicedToArray(_useState, 2),
      state = _useState2[0],
      setMode = _useState2[1].setMode;

  var handleClick = function handleClick() {
    setMode(state.mode.type === "inspect" ? "decorate" : "inspect");
  };

  return function () {
    var _el$ = Mode_tmpl$.cloneNode(true);

    _el$.$$click = handleClick;

    (0,web/* insert */.$T)(_el$, function () {
      return "Switch to " + (state.mode.type === "inspect" ? "Decorate" : "Inspect") + " mode";
    });

    return _el$;
  }();
}

function Mode() {
  var _useState3 = useState(),
      _useState4 = Mode_slicedToArray(_useState3, 1),
      state = _useState4[0];

  return function () {
    var _el$2 = Mode_tmpl$2.cloneNode(true),
        _el$3 = _el$2.firstChild,
        _el$4 = _el$3.nextSibling;

    (0,web/* insert */.$T)(_el$3, function () {
      return "Mode: " + displayModes[state.mode.type];
    });

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.mode.type === "inspect";
      },

      get fallback() {
        return (0,solid/* createComponent */.LM)(components_Decorate, {});
      },

      get children() {
        return (0,solid/* createComponent */.LM)(components_Inspect, {});
      }

    }), null);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(ModeToggle, {}), null);

    (0,solid/* createRenderEffect */.F3)(function (_p$) {
      var _v$ = state.mode.type === "inspect",
          _v$2 = state.mode.type === "decorate";

      _v$ !== _p$._v$ && _el$4.classList.toggle("inspect", _p$._v$ = _v$);
      _v$2 !== _p$._v$2 && _el$4.classList.toggle("decorate", _p$._v$2 = _v$2);
      return _p$;
    }, {
      _v$: undefined,
      _v$2: undefined
    });

    return _el$2;
  }();
}

/* harmony default export */ const components_Mode = (Mode);

(0,web/* delegateEvents */.Qj)(["click"]);
;// CONCATENATED MODULE: ./src/components/Grid.jsx








const Grid_tmpl$ = (0,web/* template */.XK)(`<button type="button">Remove</button>`, 2),
      Grid_tmpl$2 = (0,web/* template */.XK)(`<button type="button">Reset</button>`, 2),
      Grid_tmpl$3 = (0,web/* template */.XK)(`<fieldset><legend>Grid</legend><div class="grid"><div class="grid-outer"><div class="grid-inner"></div></div><div class="grid-legend"><div><div class="box my-house"></div><div>My House</div></div><div><div class="box building"></div><div>Building</div></div><div><div class="box decor"></div><div>Decor</div></div><div><div class="box road-in-network"></div><div>Road (in-network)</div></div><div><div class="box road-out-network"></div><div>Road (out-network)</div></div></div><div class="grid-control"></div></div></fieldset>`, 44),
      Grid_tmpl$4 = (0,web/* template */.XK)(`<div class="grid-cell"></div>`, 2);

function Grid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Grid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Grid_ownKeys(Object(source), true).forEach(function (key) { Grid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Grid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      setGrid = _useState2[1].setGrid;

  var handleClick = function handleClick() {
    var cell = state.cells[state.mode.inspect.rootIndex];

    if (!cell.type || cell.type === "myHouse") {
      return;
    }

    var order = objectData[cell.type].props[cell.name].order;
    var row = cell.row,
        col = cell.col;
    var upperRow = row + order - 1;
    var upperCol = col + order - 1;
    var indices = [];

    for (var r = row; r <= upperRow; r++) {
      for (var c = col; c <= upperCol; c++) {
        var index = r * state.config.order + c;
        indices.push(index);
      }
    }

    setGrid(Grid_objectSpread({}, state.config), function (_, index) {
      if (indices.includes(index)) {
        return Grid_objectSpread(Grid_objectSpread({}, state.cells[index]), {}, {
          type: state.config.useAutofill ? "road" : "",
          name: "",
          rootIndex: index
        });
      }

      return Grid_objectSpread({}, state.cells[index]);
    });
  };

  return (0,solid/* createComponent */.LM)(solid/* Show */.di, {
    get when() {
      return state.mode.type === "inspect";
    },

    get children() {
      var _el$ = Grid_tmpl$.cloneNode(true);

      _el$.$$click = handleClick;

      (0,solid/* createRenderEffect */.F3)(function () {
        return _el$.disabled = !state.cells[state.mode.inspect.rootIndex].type || state.cells[state.mode.inspect.rootIndex].type === "myHouse";
      });

      return _el$;
    }

  });
}

function Reset() {
  var _useState3 = useState(),
      _useState4 = Grid_slicedToArray(_useState3, 2),
      state = _useState4[0],
      setGrid = _useState4[1].setGrid;

  var handleClick = function handleClick() {
    setGrid(Grid_objectSpread({}, state.config));
  };

  return function () {
    var _el$2 = Grid_tmpl$2.cloneNode(true);

    _el$2.$$click = handleClick;
    return _el$2;
  }();
}

function Grid() {
  var _useState5 = useState(),
      _useState6 = Grid_slicedToArray(_useState5, 2),
      state = _useState6[0],
      _useState6$ = _useState6[1],
      setInspect = _useState6$.setInspect,
      setGrid = _useState6$.setGrid;

  var handleClick = function handleClick(data) {
    if (state.mode.type === "inspect") {
      setInspect(state.cells[data.index].rootIndex);
    } else {
      var _state$mode$decorate = state.mode.decorate,
          type = _state$mode$decorate.type,
          name = _state$mode$decorate.name;
      var _objectData$type$prop = objectData[type].props[name],
          order = _objectData$type$prop.order,
          space = _objectData$type$prop.space,
          limit = _objectData$type$prop.limit;

      if (type === "building" || type === "decor") {
        if (!name || state.space < space) {
          return;
        }

        var quantity = Object.fromEntries(state.objects[type])[name] || 0;

        if (limit > 0 && quantity + 1 > limit) {
          return;
        }
      }

      var row = data.row,
          col = data.col;
      var upperRow = row + order - 1;
      var upperCol = col + order - 1;

      if (upperRow >= state.config.order || upperCol >= state.config.order) {
        return;
      }

      var indices = [];

      for (var r = row; r <= upperRow; r++) {
        for (var c = col; c <= upperCol; c++) {
          var index = r * state.config.order + c;

          switch (state.cells[index].type) {
            case "road":
              indices.push(index);
              break;

            case "":
              indices.push(index);
              break;

            default:
              return;
          }
        }
      }

      if (indices.length !== space) {
        return;
      }

      setInspect(indices[0]);
      setGrid(Grid_objectSpread({}, state.config), function (_, index) {
        if (indices.includes(index)) {
          return Grid_objectSpread(Grid_objectSpread({}, state.cells[index]), {}, {
            type: type,
            name: name,
            rootIndex: indices[0]
          });
        }

        return Grid_objectSpread({}, state.cells[index]);
      });
    }
  };

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
        return state.cells;
      },

      children: function children(cell, index) {
        var row = cell.row,
            col = cell.col;
        var props = objectData[cell.type].props[cell.name];
        var rootCell = state.cells[cell.rootIndex];
        var lowerRow = rootCell.row;
        var lowerCol = rootCell.col;
        var upperRow = rootCell.row + props.order - 1;
        var upperCol = rootCell.col + props.order - 1;
        return function () {
          var _el$10 = Grid_tmpl$4.cloneNode(true);

          _el$10.$$click = handleClick;
          _el$10.$$clickData = {
            index: index(),
            row: row,
            col: col
          };

          _el$10.style.setProperty("border-top-style", row === lowerRow ? "solid" : "none");

          _el$10.style.setProperty("border-right-style", col === upperCol ? "solid" : "none");

          _el$10.style.setProperty("border-bottom-style", row === upperRow ? "solid" : "none");

          _el$10.style.setProperty("border-left-style", col === lowerCol ? "solid" : "none");

          (0,solid/* createRenderEffect */.F3)(function (_p$) {
            var _v$3 = state.mode.type === "inspect" && cell.rootIndex === state.mode.inspect.rootIndex ? "red" : "black",
                _v$4 = cell.type === "myHouse",
                _v$5 = cell.type === "building",
                _v$6 = cell.type === "decor",
                _v$7 = cell.type === "road" && cell.inNetwork,
                _v$8 = cell.type === "road" && !cell.inNetwork;

            _v$3 !== _p$._v$3 && _el$10.style.setProperty("border-color", _p$._v$3 = _v$3);
            _v$4 !== _p$._v$4 && _el$10.classList.toggle("my-house", _p$._v$4 = _v$4);
            _v$5 !== _p$._v$5 && _el$10.classList.toggle("building", _p$._v$5 = _v$5);
            _v$6 !== _p$._v$6 && _el$10.classList.toggle("decor", _p$._v$6 = _v$6);
            _v$7 !== _p$._v$7 && _el$10.classList.toggle("road-in-network", _p$._v$7 = _v$7);
            _v$8 !== _p$._v$8 && _el$10.classList.toggle("road-out-network", _p$._v$8 = _v$8);
            return _p$;
          }, {
            _v$3: undefined,
            _v$4: undefined,
            _v$5: undefined,
            _v$6: undefined,
            _v$7: undefined,
            _v$8: undefined
          });

          return _el$10;
        }();
      }
    }));

    (0,web/* insert */.$T)(_el$9, (0,solid/* createComponent */.LM)(Remove, {}), null);

    (0,web/* insert */.$T)(_el$9, (0,solid/* createComponent */.LM)(Reset, {}), null);

    (0,solid/* createRenderEffect */.F3)(function (_p$) {
      var _v$ = "repeat(" + state.config.order + ", auto)",
          _v$2 = "repeat(" + state.config.order + ", auto)";

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
;// CONCATENATED MODULE: ./src/components/Objects.jsx






const Objects_tmpl$ = (0,web/* template */.XK)(`<tr><th colspan="2">Road (in-network)</th><td colspan="1"></td></tr>`, 6),
      Objects_tmpl$2 = (0,web/* template */.XK)(`<tr><th colspan="2">Road (out-network)</th><td colspan="1"></td></tr>`, 6),
      Objects_tmpl$3 = (0,web/* template */.XK)(`<table><caption>Grid properties</caption><thead><tr><th>Type</th><th>Name</th><th>Quantity</th></tr></thead><tbody><tr><th colspan="2">Free cells</th><td colspan="1"></td></tr></tbody></table>`, 22),
      Objects_tmpl$4 = (0,web/* template */.XK)(`<tr><td>Building</td><td></td><td></td></tr>`, 8),
      Objects_tmpl$5 = (0,web/* template */.XK)(`<tr><td>Decor</td><td></td><td></td></tr>`, 8);

function Objects_slicedToArray(arr, i) { return Objects_arrayWithHoles(arr) || Objects_iterableToArrayLimit(arr, i) || Objects_unsupportedIterableToArray(arr, i) || Objects_nonIterableRest(); }

function Objects_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Objects_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Objects_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Objects_arrayLikeToArray(o, minLen); }

function Objects_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Objects_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Objects_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Objects() {
  var _useState = useState(),
      _useState2 = Objects_slicedToArray(_useState, 1),
      state = _useState2[0];

  return function () {
    var _el$ = Objects_tmpl$3.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling,
        _el$4 = _el$3.nextSibling,
        _el$11 = _el$4.firstChild,
        _el$12 = _el$11.firstChild,
        _el$13 = _el$12.nextSibling;

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.objects.building;
      },

      children: function children(pair) {
        return function () {
          var _el$14 = Objects_tmpl$4.cloneNode(true),
              _el$15 = _el$14.firstChild,
              _el$16 = _el$15.nextSibling,
              _el$17 = _el$16.nextSibling;

          (0,web/* insert */.$T)(_el$16, function () {
            return pair[0];
          });

          (0,web/* insert */.$T)(_el$17, function () {
            return pair[1];
          });

          return _el$14;
        }();
      }
    }), _el$11);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.objects.decor;
      },

      children: function children(pair) {
        return function () {
          var _el$18 = Objects_tmpl$5.cloneNode(true),
              _el$19 = _el$18.firstChild,
              _el$20 = _el$19.nextSibling,
              _el$21 = _el$20.nextSibling;

          (0,web/* insert */.$T)(_el$20, function () {
            return pair[0];
          });

          (0,web/* insert */.$T)(_el$21, function () {
            return pair[1];
          });

          return _el$18;
        }();
      }
    }), _el$11);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.objects.road.inNetwork > 0;
      },

      get children() {
        var _el$5 = Objects_tmpl$.cloneNode(true),
            _el$6 = _el$5.firstChild,
            _el$7 = _el$6.nextSibling;

        (0,web/* insert */.$T)(_el$7, function () {
          return state.objects.road.inNetwork;
        });

        return _el$5;
      }

    }), _el$11);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.objects.road.outNetwork > 0;
      },

      get children() {
        var _el$8 = Objects_tmpl$2.cloneNode(true),
            _el$9 = _el$8.firstChild,
            _el$10 = _el$9.nextSibling;

        (0,web/* insert */.$T)(_el$10, function () {
          return state.objects.road.outNetwork;
        });

        return _el$8;
      }

    }), _el$11);

    (0,web/* insert */.$T)(_el$13, function () {
      return state.space;
    });

    return _el$;
  }();
}

/* harmony default export */ const components_Objects = (Objects);
;// CONCATENATED MODULE: ./src/components/Beauty.jsx



const Beauty_tmpl$ = (0,web/* template */.XK)(`<table><caption>Beauty effects</caption><thead><tr><th>Combine Result Choices</th><th>Building Max Waru Capacity</th><th>Shop Discount</th><th>Special Merchant Visit</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody><tfoot><tr><th colspan="2">Total aesthetic points</th><td colspan="2"></td></tr><tr><th colspan="2">Points to next threshold</th><td colspan="2"></td></tr></tfoot></table>`, 42);

function Beauty_slicedToArray(arr, i) { return Beauty_arrayWithHoles(arr) || Beauty_iterableToArrayLimit(arr, i) || Beauty_unsupportedIterableToArray(arr, i) || Beauty_nonIterableRest(); }

function Beauty_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Beauty_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Beauty_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Beauty_arrayLikeToArray(o, minLen); }

function Beauty_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Beauty_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Beauty_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function Beauty() {
  var _useState = useState(),
      _useState2 = Beauty_slicedToArray(_useState, 1),
      state = _useState2[0];

  return function () {
    var _el$ = Beauty_tmpl$.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling,
        _el$4 = _el$3.nextSibling,
        _el$5 = _el$4.firstChild,
        _el$6 = _el$5.firstChild,
        _el$7 = _el$6.nextSibling,
        _el$8 = _el$7.nextSibling,
        _el$9 = _el$8.nextSibling,
        _el$10 = _el$4.nextSibling,
        _el$11 = _el$10.firstChild,
        _el$12 = _el$11.firstChild,
        _el$13 = _el$12.nextSibling,
        _el$14 = _el$11.nextSibling,
        _el$15 = _el$14.firstChild,
        _el$16 = _el$15.nextSibling;

    (0,web/* insert */.$T)(_el$6, function () {
      return "+" + state.beauty.choices + "%";
    });

    (0,web/* insert */.$T)(_el$7, function () {
      return "+" + state.beauty.banked;
    });

    (0,web/* insert */.$T)(_el$8, function () {
      return state.beauty.discount + "%";
    });

    (0,web/* insert */.$T)(_el$9, function () {
      return "+" + state.beauty.visit + "%";
    });

    (0,web/* insert */.$T)(_el$13, function () {
      return state.beauty.total;
    });

    (0,web/* insert */.$T)(_el$16, function () {
      return state.beauty.next;
    });

    return _el$;
  }();
}

/* harmony default export */ const components_Beauty = (Beauty);
;// CONCATENATED MODULE: ./src/components/Waru.jsx








const Waru_tmpl$ = (0,web/* template */.XK)(`<tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>`, 10),
      Waru_tmpl$2 = (0,web/* template */.XK)(`<th colspan="4"><button type="button"></button></th>`, 4),
      Waru_tmpl$3 = (0,web/* template */.XK)(`<table><caption>Waru production</caption><thead><tr><th>Time (mins)</th><th>Total (W)</th><th>Marginal (W)</th><th>Average (W)</th></tr></thead><tbody></tbody><tfoot><tr></tr><tr><th colspan="2">Max yield (W)</th><td colspan="2"></td></tr><tr><th colspan="2">Time until max yield (mins)</th><td colspan="2"></td></tr><tr><th colspan="2">Max yield rate (W/10 mins)</th><td colspan="2"></td></tr><tr><th colspan="2">Time until diminishing returns (mins)</th><td colspan="2"></td></tr></tfoot></table>`, 46),
      Waru_tmpl$4 = (0,web/* template */.XK)(`<tr><td></td><td></td><td></td><td></td></tr>`, 10);

function Waru_slicedToArray(arr, i) { return Waru_arrayWithHoles(arr) || Waru_iterableToArrayLimit(arr, i) || Waru_unsupportedIterableToArray(arr, i) || Waru_nonIterableRest(); }

function Waru_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Waru_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Waru_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Waru_arrayLikeToArray(o, minLen); }

function Waru_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Waru_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Waru_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Waru() {
  var _useState = useState(),
      _useState2 = Waru_slicedToArray(_useState, 1),
      state = _useState2[0];

  var _createSignal = (0,solid/* createSignal */.gQ)(true),
      _createSignal2 = Waru_slicedToArray(_createSignal, 2),
      truncated = _createSignal2[0],
      setTruncated = _createSignal2[1];

  var handleClick = function handleClick() {
    setTruncated(!truncated());
  };

  return function () {
    var _el$ = Waru_tmpl$3.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling,
        _el$4 = _el$3.nextSibling,
        _el$6 = _el$4.nextSibling,
        _el$7 = _el$6.firstChild,
        _el$10 = _el$7.nextSibling,
        _el$11 = _el$10.firstChild,
        _el$12 = _el$11.nextSibling,
        _el$13 = _el$10.nextSibling,
        _el$14 = _el$13.firstChild,
        _el$15 = _el$14.nextSibling,
        _el$16 = _el$13.nextSibling,
        _el$17 = _el$16.firstChild,
        _el$18 = _el$17.nextSibling,
        _el$19 = _el$16.nextSibling,
        _el$20 = _el$19.firstChild,
        _el$21 = _el$20.nextSibling;

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return truncated() && state.production.numOptimalCycles > 0;
      },

      get children() {
        return Waru_tmpl$.cloneNode(true);
      }

    }), null);

    (0,web/* insert */.$T)(_el$4, (0,solid/* createComponent */.LM)(solid/* For */.U2, {
      get each() {
        return state.production.cycles.slice(truncated() ? state.production.numOptimalCycles : 0);
      },

      children: function children(cycle, index) {
        return function () {
          var _el$22 = Waru_tmpl$4.cloneNode(true),
              _el$23 = _el$22.firstChild,
              _el$24 = _el$23.nextSibling,
              _el$25 = _el$24.nextSibling,
              _el$26 = _el$25.nextSibling;

          (0,web/* insert */.$T)(_el$23, function () {
            return 10 * (index() + (truncated() ? state.production.numOptimalCycles : 0));
          });

          (0,web/* insert */.$T)(_el$24, function () {
            return cycle.total;
          });

          (0,web/* insert */.$T)(_el$25, function () {
            return cycle.marginal;
          });

          (0,web/* insert */.$T)(_el$26, function () {
            return cycle.average;
          });

          return _el$22;
        }();
      }
    }), null);

    (0,web/* insert */.$T)(_el$7, (0,solid/* createComponent */.LM)(solid/* Show */.di, {
      get when() {
        return state.production.numOptimalCycles > 0;
      },

      get children() {
        var _el$8 = Waru_tmpl$2.cloneNode(true),
            _el$9 = _el$8.firstChild;

        _el$9.$$click = handleClick;

        (0,web/* insert */.$T)(_el$9, function () {
          return (truncated() ? "Expand" : "Collapse") + " rows";
        });

        return _el$8;
      }

    }));

    (0,web/* insert */.$T)(_el$12, function () {
      return state.production.cycles[state.production.cycles.length - 1].total;
    });

    (0,web/* insert */.$T)(_el$15, function () {
      return 10 * state.production.numMaxCycles;
    });

    (0,web/* insert */.$T)(_el$18, function () {
      return state.production.cycles[state.production.numOptimalCycles].marginal;
    });

    (0,web/* insert */.$T)(_el$21, function () {
      return 10 * state.production.numOptimalCycles;
    });

    return _el$;
  }();
}

/* harmony default export */ const components_Waru = (Waru);

(0,web/* delegateEvents */.Qj)(["click"]);
;// CONCATENATED MODULE: ./src/components/Stats.jsx




const Stats_tmpl$ = (0,web/* template */.XK)(`<fieldset><legend>Stats</legend><div class="stats"></div></fieldset>`, 6);





function Stats() {
  return function () {
    var _el$ = Stats_tmpl$.cloneNode(true),
        _el$2 = _el$.firstChild,
        _el$3 = _el$2.nextSibling;

    (0,web/* insert */.$T)(_el$3, (0,solid/* createComponent */.LM)(components_Objects, {}), null);

    (0,web/* insert */.$T)(_el$3, (0,solid/* createComponent */.LM)(components_Beauty, {}), null);

    (0,web/* insert */.$T)(_el$3, (0,solid/* createComponent */.LM)(components_Waru, {}), null);

    return _el$;
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



(0,web/* render */.sY)(src_App, document.getElementById("root"));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [216], () => (__webpack_exec__(75)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);