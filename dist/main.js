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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ \"./src/styles/reset.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  var context = canvas.getContext('2d');\n  initialize();\n\n  function initialize() {\n    // Register an event listener to call the resizeCanvas() function \n    // each time the window is resized.\n    window.addEventListener('resize', resizeCanvas, false); // Draw canvas border for the first time.\n\n    resizeCanvas();\n  } // Display custom canvas. In this case it's a blue, 5 pixel \n  // border that resizes along with the browser window.\n\n\n  function redraw() {\n    var waterTile = new Image();\n    waterTile.src = './src/assets/tiles_sheet.png';\n    console.log(waterTile);\n\n    waterTile.onload = function () {\n      for (var i = 0; i < window.innerWidth; i += 64) {\n        for (var j = 0; j < window.innerHeight; j += 64) {\n          context.drawImage(waterTile, 512, 256, 64, 64, i, j, 64, 64);\n        }\n      }\n    };\n  } // Runs each time the DOM window resize event fires.\n  // Resets the canvas dimensions to match window,\n  // then draws the new borders accordingly.\n\n\n  function resizeCanvas() {\n    canvas.width = window.innerWidth;\n    canvas.height = window.innerHeight;\n    redraw();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUdBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxZQUFXO0FBQ25ELE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFoQjtBQUVBQyxFQUFBQSxVQUFVOztBQUVILFdBQVNBLFVBQVQsR0FBc0I7QUFDbEI7QUFDQTtBQUNBUCxJQUFBQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTyxZQUFsQyxFQUFnRCxLQUFoRCxFQUhrQixDQUlsQjs7QUFDQUEsSUFBQUEsWUFBWTtBQUNkLEdBWjBDLENBYzNDO0FBQ0E7OztBQUNBLFdBQVNDLE1BQVQsR0FBa0I7QUFDZCxRQUFNQyxTQUFTLEdBQUcsSUFBSUMsS0FBSixFQUFsQjtBQUNBRCxJQUFBQSxTQUFTLENBQUNFLEdBQVYsR0FBZ0IsOEJBQWhCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixTQUFaOztBQUNBQSxJQUFBQSxTQUFTLENBQUNLLE1BQVYsR0FBbUIsWUFBVztBQUM5QixXQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2hCLE1BQU0sQ0FBQ2lCLFVBQTFCLEVBQXNDRCxDQUFDLElBQUksRUFBM0MsRUFBK0M7QUFDM0MsYUFBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdsQixNQUFNLENBQUNtQixXQUExQixFQUF1Q0QsQ0FBQyxJQUFJLEVBQTVDLEVBQWdEO0FBQzVDYixVQUFBQSxPQUFPLENBQUNlLFNBQVIsQ0FBa0JWLFNBQWxCLEVBQTZCLEdBQTdCLEVBQWtDLEdBQWxDLEVBQXVDLEVBQXZDLEVBQTJDLEVBQTNDLEVBQStDTSxDQUEvQyxFQUFrREUsQ0FBbEQsRUFBcUQsRUFBckQsRUFBeUQsRUFBekQ7QUFDQztBQUNKO0FBQ0osS0FORDtBQU9ILEdBM0IwQyxDQTZCM0M7QUFDQTtBQUNBOzs7QUFDQSxXQUFTVixZQUFULEdBQXdCO0FBQ3BCTixJQUFBQSxNQUFNLENBQUNtQixLQUFQLEdBQWVyQixNQUFNLENBQUNpQixVQUF0QjtBQUNBZixJQUFBQSxNQUFNLENBQUNvQixNQUFQLEdBQWdCdEIsTUFBTSxDQUFDbUIsV0FBdkI7QUFDQVYsSUFBQUEsTUFBTTtBQUNUO0FBQ1osQ0FyQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYXNwYXJpbGxhLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCJcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpO1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgIGluaXRpYWxpemUoKTtcbiAgICBcbiAgICAgICAgICAgZnVuY3Rpb24gaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgICAgICAgIC8vIFJlZ2lzdGVyIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGNhbGwgdGhlIHJlc2l6ZUNhbnZhcygpIGZ1bmN0aW9uIFxuICAgICAgICAgICAgICAgLy8gZWFjaCB0aW1lIHRoZSB3aW5kb3cgaXMgcmVzaXplZC5cbiAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgIC8vIERyYXcgY2FudmFzIGJvcmRlciBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICAgICAgICAgICByZXNpemVDYW52YXMoKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIERpc3BsYXkgY3VzdG9tIGNhbnZhcy4gSW4gdGhpcyBjYXNlIGl0J3MgYSBibHVlLCA1IHBpeGVsIFxuICAgICAgICAgICAgLy8gYm9yZGVyIHRoYXQgcmVzaXplcyBhbG9uZyB3aXRoIHRoZSBicm93c2VyIHdpbmRvdy5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlZHJhdygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB3YXRlclRpbGUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB3YXRlclRpbGUuc3JjID0gJy4vc3JjL2Fzc2V0cy90aWxlc19zaGVldC5wbmcnXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2F0ZXJUaWxlKTtcbiAgICAgICAgICAgICAgICB3YXRlclRpbGUub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpbmRvdy5pbm5lcldpZHRoOyBpICs9IDY0KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB3aW5kb3cuaW5uZXJIZWlnaHQ7IGogKz0gNjQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKHdhdGVyVGlsZSwgNTEyLCAyNTYsIDY0LCA2NCwgaSwgaiwgNjQsIDY0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIFJ1bnMgZWFjaCB0aW1lIHRoZSBET00gd2luZG93IHJlc2l6ZSBldmVudCBmaXJlcy5cbiAgICAgICAgICAgIC8vIFJlc2V0cyB0aGUgY2FudmFzIGRpbWVuc2lvbnMgdG8gbWF0Y2ggd2luZG93LFxuICAgICAgICAgICAgLy8gdGhlbiBkcmF3cyB0aGUgbmV3IGJvcmRlcnMgYWNjb3JkaW5nbHkuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNpemVDYW52YXMoKSB7XG4gICAgICAgICAgICAgICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgICAgICAgICByZWRyYXcoKTtcbiAgICAgICAgICAgIH1cbn0pO1xuXG4gICAgXG5cblxuXG4iXSwibmFtZXMiOlsid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImluaXRpYWxpemUiLCJyZXNpemVDYW52YXMiLCJyZWRyYXciLCJ3YXRlclRpbGUiLCJJbWFnZSIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJvbmxvYWQiLCJpIiwiaW5uZXJXaWR0aCIsImoiLCJpbm5lckhlaWdodCIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYXNwYXJpbGxhLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYXNwYXJpbGxhLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/MjI5ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/reset.css\n");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9HYXNwYXJpbGxhLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/NjRhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/style.css\n");

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