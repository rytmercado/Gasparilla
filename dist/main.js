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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var context = canvas.getContext('2d');\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var background = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](context, game);\n  initialize();\n  var x = 300;\n  var y = 300;\n\n  function initialize() {\n    // Register an event listener to call the resizeCanvas() function \n    // each time the window is resized.\n    window.addEventListener('resize', resizeCanvas, false); // Draw canvas border for the first time.\n\n    resizeCanvas();\n    setInterval(function () {\n      console.log('test');\n      redraw();\n      y += 3;\n\n      if (y > window.innerHeight) {\n        y = -64;\n      }\n    }, 20);\n  } // Display custom canvas. In this case it's a blue, 5 pixel \n  // border that resizes along with the browser window.\n\n\n  function redraw() {\n    var waterTile = new Image();\n    waterTile.src = './src/assets/tiles_sheet.png'; // console.log(waterTile);\n\n    waterTile.onload = function () {\n      for (var i = 0; i < window.innerWidth; i += 64) {\n        for (var j = 0; j < window.innerHeight; j += 64) {\n          context.drawImage(waterTile, 512, 256, 64, 64, i, j, 64, 64);\n        }\n      }\n    };\n\n    drawShip();\n  }\n\n  function drawShip() {\n    var playerBoat = new Image();\n    playerBoat.src = './src/assets/ships_sheet.png';\n\n    playerBoat.onload = function () {\n      context.drawImage(playerBoat, 204, 114, 66, 113, x, y, 33, 56);\n    };\n  } // Runs each time the DOM window resize event fires.\n  // Resets the canvas dimensions to match window,\n  // then draws the new borders accordingly.\n\n\n  function resizeCanvas() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    redraw();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyI6WyJ3ZWJwYWNrOi8vR2FzcGFyaWxsYS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lJztcbmltcG9ydCBHYW1lVmlldyBmcm9tICcuL3NjcmlwdHMvZ2FtZV92aWV3Jztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gbmV3IEdhbWVWaWV3KGNvbnRleHQsIGdhbWUpO1xuXG4gICAgaW5pdGlhbGl6ZSgpO1xuICAgIGxldCB4ID0gMzAwO1xuICAgIGxldCB5ID0gMzAwO1xuICAgIGZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIFxuICAgICAgICAvLyBlYWNoIHRpbWUgdGhlIHdpbmRvdyBpcyByZXNpemVkLlxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XG4gICAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICAgIHJlc2l6ZUNhbnZhcygpO1xuXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuICAgICAgICAgICAgcmVkcmF3KCk7XG4gICAgICAgICAgICB5ICs9IDM7XG4gICAgICAgICAgICBpZiAoeSA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgICAgICAgICAgICAgIHkgPSAtNjQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAsIDIwKTtcblxuICAgIH1cblxuICAgIC8vIERpc3BsYXkgY3VzdG9tIGNhbnZhcy4gSW4gdGhpcyBjYXNlIGl0J3MgYSBibHVlLCA1IHBpeGVsIFxuICAgIC8vIGJvcmRlciB0aGF0IHJlc2l6ZXMgYWxvbmcgd2l0aCB0aGUgYnJvd3NlciB3aW5kb3cuXG4gICAgZnVuY3Rpb24gcmVkcmF3KCkge1xuICAgICAgICBjb25zdCB3YXRlclRpbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgd2F0ZXJUaWxlLnNyYyA9ICcuL3NyYy9hc3NldHMvdGlsZXNfc2hlZXQucG5nJztcbiAgICAgICAgLy8gY29uc29sZS5sb2cod2F0ZXJUaWxlKTtcbiAgICAgICAgd2F0ZXJUaWxlLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2luZG93LmlubmVyV2lkdGg7IGkgKz0gNjQpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB3aW5kb3cuaW5uZXJIZWlnaHQ7IGogKz0gNjQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRyYXdJbWFnZSh3YXRlclRpbGUsIDUxMiwgMjU2LCA2NCwgNjQsIGksIGosIDY0LCA2NCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRyYXdTaGlwKCk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3U2hpcCgpIHtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hdCA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBwbGF5ZXJCb2F0LnNyYyA9ICcuL3NyYy9hc3NldHMvc2hpcHNfc2hlZXQucG5nJztcbiAgICAgICAgcGxheWVyQm9hdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHBsYXllckJvYXQsIDIwNCwgMTE0LCA2NiwgMTEzLCB4LCB5LCAzMywgNTYpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSdW5zIGVhY2ggdGltZSB0aGUgRE9NIHdpbmRvdyByZXNpemUgZXZlbnQgZmlyZXMuXG4gICAgLy8gUmVzZXRzIHRoZSBjYW52YXMgZGltZW5zaW9ucyB0byBtYXRjaCB3aW5kb3csXG4gICAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXG4gICAgZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgcmVkcmF3KCk7XG4gICAgfVxufSk7XG5cbiAgICBcblxuXG5cbiJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImJhY2tncm91bmQiLCJpbml0aWFsaXplIiwieCIsInkiLCJyZXNpemVDYW52YXMiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJyZWRyYXciLCJpbm5lckhlaWdodCIsIndhdGVyVGlsZSIsIkltYWdlIiwic3JjIiwib25sb2FkIiwiaSIsImlubmVyV2lkdGgiLCJqIiwiZHJhd0ltYWdlIiwiZHJhd1NoaXAiLCJwbGF5ZXJCb2F0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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