(function(modules) {
    function require(id) {
      const [fn, mapping] = modules[id];

      function localRequire(relativePath) {
        return require(mapping[relativePath])
      };

      const module = { exports: {}};

      fn(localRequire, module, module.exports);
      return module.exports;
    };
    require(0);
  })({0: [
      function (require, module, exports) {
        "use strict";

var _message = require("./message.js");

console.log(_message.message);

var add = document.querySelector('#add');

var reduce = document.querySelector('#reduce');

var num = document.querySelector('#num');

var id = 0;

add.addEventListener('click', function () {
  id += 1;
  num.innerHTML = id;
});

reduce.addEventListener('click', function () {
  id -= 1;
  num.innerHTML = id;
});
      },
      {"./message.js":1}
    ],1: [
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.message = undefined;

var _name = require("./name.js");

var message = exports.message = "hello " + _name.name;
      },
      {"./name.js":2}
    ],2: [
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var name = exports.name = 'xiao';
      },
      {}
    ],})