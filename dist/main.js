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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/data */ \"./src/scripts/data.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log(\"Hello world!\")\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  const currentData = (0,_scripts_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  window.currentData = currentData;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ0s7QUFFNUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBLE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlMLHdEQUFPLENBQUNJLElBQUksQ0FBQztFQUNqQixNQUFNRSxXQUFXLEdBQUdMLHlEQUFjLEVBQUU7RUFDcENNLE1BQU0sQ0FBQ0QsV0FBVyxHQUFHQSxXQUFXO0FBRXBDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIlxuaW1wb3J0IGdldEN1cnJlbnREYXRhIGZyb20gXCIuL3NjcmlwdHMvZGF0YVwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZCFcIilcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4gICAgbmV3IEV4YW1wbGUobWFpbik7XG4gICAgY29uc3QgY3VycmVudERhdGEgPSBnZXRDdXJyZW50RGF0YSgpXG4gICAgd2luZG93LmN1cnJlbnREYXRhID0gY3VycmVudERhdGFcblxufSk7XG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZ2V0Q3VycmVudERhdGEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiLCJjdXJyZW50RGF0YSIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst apiKey = \"4P48W2KCWFQAQ6SJ99K5H2VBM\";\nconst zip = \"11040\";\nconst now = Math.floor(Date.now() / 1000);\nasync function getCurrentData() {\n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}`);\n    if (response.ok) {\n      const data = await response.json();\n      console.log(data);\n    } else {\n      throw response;\n    }\n  } catch (errorResponse) {\n    console.error(errorResponse);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNLEdBQUcsMkJBQTJCO0FBQzFDLE1BQU1DLEdBQUcsR0FBRyxPQUFPO0FBQ25CLE1BQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBRXZDLGVBQWVJLGNBQWNBLENBQUEsRUFBRztFQUU1QixJQUFJO0lBQ0QsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FBRSx1RkFBc0ZQLEdBQUksSUFBR0MsR0FBSSxRQUFPRixNQUFPLEVBQUMsQ0FBQztJQUMvSSxJQUFJTyxRQUFRLENBQUNFLEVBQUUsRUFBRTtNQUNmLE1BQU1DLElBQUksR0FBRyxNQUFNSCxRQUFRLENBQUNJLElBQUksRUFBRTtNQUNsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQztJQUNuQixDQUFDLE1BQU07TUFDTCxNQUFNSCxRQUFRO0lBQ2hCO0VBQ0gsQ0FBQyxDQUFDLE9BQU9PLGFBQWEsRUFBRTtJQUNwQkYsT0FBTyxDQUFDRyxLQUFLLENBQUNELGFBQWEsQ0FBQztFQUNoQztBQUNGO0FBRUEsK0RBQWVSLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qX2N5Y2xlLy4vc3JjL3NjcmlwdHMvZGF0YS5qcz9mYmQxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaUtleSA9IFwiNFA0OFcyS0NXRlFBUTZTSjk5SzVIMlZCTVwiXG5jb25zdCB6aXAgPSBcIjExMDQwXCJcbmNvbnN0IG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKVxuXG5hc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50RGF0YSgpIHtcbiAgICBcbiAgICB0cnkge1xuICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lLyR7emlwfS8ke25vd30/a2V5PSR7YXBpS2V5fWApO1xuICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICB0aHJvdyByZXNwb25zZTtcbiAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3JSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yUmVzcG9uc2UpO1xuICAgIH1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IGdldEN1cnJlbnREYXRhXG4iXSwibmFtZXMiOlsiYXBpS2V5IiwiemlwIiwibm93IiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsImdldEN1cnJlbnREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3JSZXNwb25zZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's kaiter sALIVEEEE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLG1DQUFtQztJQUV4RCxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0YsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzVDO0FBQ0o7QUFFQSwrREFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlXG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3Mga2FpdGVyIHNBTElWRUVFRSEhITwvaDE+XCJcblxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljaylcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qX2N5Y2xlLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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