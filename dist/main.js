/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var context = canvas.getContext('2d');\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var background = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, game);\n  initialize();\n\n  function initialize() {\n    // Register an event listener to call the resizeCanvas() function \n    // each time the window is resized.\n    window.addEventListener('resize', resizeCanvas, false); // Draw canvas border for the first time.\n\n    resizeCanvas();\n  } // Display custom canvas. In this case it's a blue, 5 pixel \n  // border that resizes along with the browser window.\n\n\n  function redraw() {\n    var waterTile = new Image();\n    waterTile.src = './src/assets/tiles_sheet.png';\n    console.log(waterTile);\n\n    waterTile.onload = function () {\n      for (var i = 0; i < window.innerWidth; i += 64) {\n        for (var j = 0; j < window.innerHeight; j += 64) {\n          context.drawImage(waterTile, 512, 256, 64, 64, i, j, 64, 64);\n        }\n      }\n    };\n  } // Runs each time the DOM window resize event fires.\n  // Resets the canvas dimensions to match window,\n  // then draws the new borders accordingly.\n\n\n  function resizeCanvas() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    redraw();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFXO0FBQ25ELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJVCxxREFBSixFQUFiO0FBQ0EsTUFBTVUsVUFBVSxHQUFHLElBQUlULDBEQUFKLENBQWFNLE9BQWIsRUFBc0JFLElBQXRCLENBQW5CO0FBRUFFLEVBQUFBLFVBQVU7O0FBRVYsV0FBU0EsVUFBVCxHQUFzQjtBQUNsQjtBQUNBO0FBQ0FULElBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NTLFlBQWxDLEVBQWdELEtBQWhELEVBSGtCLENBSWxCOztBQUNBQSxJQUFBQSxZQUFZO0FBQ2YsR0Fka0QsQ0FnQm5EO0FBQ0E7OztBQUNBLFdBQVNDLE1BQVQsR0FBa0I7QUFDZCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFsQjtBQUNBRCxJQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsOEJBQWhCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaOztBQUNBQSxJQUFBQSxTQUFTLENBQUNLLE1BQVYsR0FBbUIsWUFBVztBQUM5QixXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2xCLE1BQU0sQ0FBQ21CLFVBQTFCLEVBQXNDRCxDQUFDLElBQUksRUFBM0MsRUFBK0M7QUFDM0MsYUFBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdwQixNQUFNLENBQUNxQixXQUExQixFQUF1Q0QsQ0FBQyxJQUFJLEVBQTVDLEVBQWdEO0FBQzVDZixVQUFBQSxPQUFPLENBQUNpQixTQUFSLENBQWtCVixTQUFsQixFQUE2QixHQUE3QixFQUFrQyxHQUFsQyxFQUF1QyxFQUF2QyxFQUEyQyxFQUEzQyxFQUErQ00sQ0FBL0MsRUFBa0RFLENBQWxELEVBQXFELEVBQXJELEVBQXlELEVBQXpEO0FBQ0M7QUFDSjtBQUNKLEtBTkQ7QUFPSCxHQTdCa0QsQ0ErQm5EO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBU1YsWUFBVCxHQUF3QjtBQUNwQlIsSUFBQUEsTUFBTSxDQUFDcUIsS0FBUCxHQUFldkIsTUFBTSxDQUFDbUIsVUFBdEI7QUFDQWpCLElBQUFBLE1BQU0sQ0FBQ3NCLE1BQVAsR0FBZ0J4QixNQUFNLENBQUNxQixXQUF2QjtBQUNBVixJQUFBQSxNQUFNO0FBQ1Q7QUFDSixDQXZDRCIsInNvdXJjZXMiOlsid2VicGFjazovL0dhc3BhcmlsbGEvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZSc7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSAnLi9zY3JpcHRzL2dhbWVfdmlldyc7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgY29uc3QgYmFja2dyb3VuZCA9IG5ldyBHYW1lVmlldyhjb250ZXh0LCBnYW1lKTtcblxuICAgIGluaXRpYWxpemUoKTtcbiAgICBcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgICAgICAvLyBSZWdpc3RlciBhbiBldmVudCBsaXN0ZW5lciB0byBjYWxsIHRoZSByZXNpemVDYW52YXMoKSBmdW5jdGlvbiBcbiAgICAgICAgLy8gZWFjaCB0aW1lIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUNhbnZhcywgZmFsc2UpO1xuICAgICAgICAvLyBEcmF3IGNhbnZhcyBib3JkZXIgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICB9XG5cbiAgICAvLyBEaXNwbGF5IGN1c3RvbSBjYW52YXMuIEluIHRoaXMgY2FzZSBpdCdzIGEgYmx1ZSwgNSBwaXhlbCBcbiAgICAvLyBib3JkZXIgdGhhdCByZXNpemVzIGFsb25nIHdpdGggdGhlIGJyb3dzZXIgd2luZG93LlxuICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICAgICAgY29uc3Qgd2F0ZXJUaWxlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHdhdGVyVGlsZS5zcmMgPSAnLi9zcmMvYXNzZXRzL3RpbGVzX3NoZWV0LnBuZydcbiAgICAgICAgY29uc29sZS5sb2cod2F0ZXJUaWxlKTtcbiAgICAgICAgd2F0ZXJUaWxlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2luZG93LmlubmVyV2lkdGg7IGkgKz0gNjQpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB3aW5kb3cuaW5uZXJIZWlnaHQ7IGogKz0gNjQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh3YXRlclRpbGUsIDUxMiwgMjU2LCA2NCwgNjQsIGksIGosIDY0LCA2NCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUnVucyBlYWNoIHRpbWUgdGhlIERPTSB3aW5kb3cgcmVzaXplIGV2ZW50IGZpcmVzLlxuICAgIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxuICAgIC8vIHRoZW4gZHJhd3MgdGhlIG5ldyBib3JkZXJzIGFjY29yZGluZ2x5LlxuICAgIGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHJlZHJhdygpO1xuICAgIH1cbn0pO1xuXG4gICAgXG5cblxuXG4iXSwibmFtZXMiOlsiR2FtZSIsIkdhbWVWaWV3Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJiYWNrZ3JvdW5kIiwiaW5pdGlhbGl6ZSIsInJlc2l6ZUNhbnZhcyIsInJlZHJhdyIsIndhdGVyVGlsZSIsIkltYWdlIiwic3JjIiwiY29uc29sZSIsImxvZyIsIm9ubG9hZCIsImkiLCJpbm5lcldpZHRoIiwiaiIsImlubmVySGVpZ2h0IiwiZHJhd0ltYWdlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztJQUFxQkEsT0FFakIsZ0JBQWM7QUFBQTtBQUViIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vR2FzcGFyaWxsYS8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuICAgIFxufVxuXG4iXSwibmFtZXMiOlsiR2FtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameView = /*#__PURE__*/function () {\n  function GameView() {\n    _classCallCheck(this, GameView);\n  }\n\n  _createClass(GameView, [{\n    key: \"contructor\",\n    value: function contructor(context, game) {\n      this.context = context;\n      this.game = game;\n    }\n  }]);\n\n  return GameView;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7Ozs7Ozs7V0FFakIsb0JBQVdDLE9BQVgsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ3RCLFdBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFdBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vR2FzcGFyaWxsYS8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcblxuICAgIGNvbnRydWN0b3IoY29udGV4dCwgZ2FtZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmdhbWUgPSBnYW1lO1xuICAgIH1cblxuICAgIFxuXG59Il0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiY29udGV4dCIsImdhbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYXNwYXJpbGxhLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;