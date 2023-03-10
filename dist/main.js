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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/data */ \"./src/scripts/data.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log(\"Hello world!\")\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  const apiKey = \"4P48W2KCWFQAQ6SJ99K5H2VBM\";\n  const zip = \"11040\";\n  const now = Math.floor(Date.now() / 1000);\n  (0,_scripts_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXdDO0FBQ0c7QUFHM0NFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBLE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlMLHdEQUFPLENBQUNJLElBQUksQ0FBQztFQUVqQixNQUFNRSxNQUFNLEdBQUcsMkJBQTJCO0VBQzFDLE1BQU1DLEdBQUcsR0FBRyxPQUFPO0VBQ25CLE1BQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO0VBRXZDUCx5REFBYyxFQUFFO0FBSXBCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCBnZXRDdXJyZW50RGF0YSBmcm9tIFwiLi9zY3JpcHRzL2RhdGFcIlxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkIVwiKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbiAgICBuZXcgRXhhbXBsZShtYWluKTtcbiAgICBcbiAgICBjb25zdCBhcGlLZXkgPSBcIjRQNDhXMktDV0ZRQVE2U0o5OUs1SDJWQk1cIlxuICAgIGNvbnN0IHppcCA9IFwiMTEwNDBcIlxuICAgIGNvbnN0IG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKVxuXG4gICAgZ2V0Q3VycmVudERhdGEoKVxuICAgIFxuICAgIFxuXG59KTtcblxuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJnZXRDdXJyZW50RGF0YSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsImFwaUtleSIsInppcCIsIm5vdyIsIk1hdGgiLCJmbG9vciIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst apiKey = \"4P48W2KCWFQAQ6SJ99K5H2VBM\";\nconst zip = \"11040\";\nconst now = Math.floor(Date.now() / 1000);\nlet data;\nasync function getCurrentData() {\n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}`);\n    if (response.ok) {\n      data = await response.json();\n      let sunrise = document.createElement(\"li\");\n      let sunset = document.createElement(\"li\");\n      sunset.innerText = `Sunset Time: ${data.currentConditions.sunset}`;\n      sunrise.innerText = `Sunrise Time: ${data.currentConditions.sunrise}`;\n      const homeData = document.getElementsByClassName(\"astro-data\")[0];\n      homeData.append(sunrise);\n      homeData.append(sunset);\n      console.log(data);\n    } else {\n      throw response;\n    }\n  } catch (errorResponse) {\n    console.error(errorResponse);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFNLEdBQUcsMkJBQTJCO0FBQzFDLE1BQU1DLEdBQUcsR0FBRyxPQUFPO0FBQ25CLE1BQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBRXZDLElBQUlJLElBQUk7QUFFUixlQUFlQyxjQUFjQSxDQUFBLEVBQUc7RUFFNUIsSUFBSTtJQUNELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsdUZBQXNGUixHQUFJLElBQUdDLEdBQUksUUFBT0YsTUFBTyxFQUFDLENBQUM7SUFDL0ksSUFBSVEsUUFBUSxDQUFDRSxFQUFFLEVBQUU7TUFDZEosSUFBSSxHQUFHLE1BQU1FLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO01BQzVCLElBQUlDLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO01BQzNDLElBQUlDLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsSUFBSSxDQUFDO01BQ3pDQyxNQUFNLENBQUNDLFNBQVMsR0FBSSxnQkFBZVYsSUFBSSxDQUFDVyxpQkFBaUIsQ0FBQ0YsTUFBTyxFQUFDO01BQ2xFSCxPQUFPLENBQUNJLFNBQVMsR0FBSSxpQkFBZ0JWLElBQUksQ0FBQ1csaUJBQWlCLENBQUNMLE9BQVEsRUFBQztNQUNyRSxNQUFNTSxRQUFRLEdBQUdMLFFBQVEsQ0FBQ00sc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2pFRCxRQUFRLENBQUNFLE1BQU0sQ0FBQ1IsT0FBTyxDQUFDO01BQ3hCTSxRQUFRLENBQUNFLE1BQU0sQ0FBQ0wsTUFBTSxDQUFDO01BRXZCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2hCLElBQUksQ0FBQztJQUNuQixDQUFDLE1BQU07TUFDTCxNQUFNRSxRQUFRO0lBQ2hCO0VBQ0gsQ0FBQyxDQUFDLE9BQU9lLGFBQWEsRUFBRTtJQUNwQkYsT0FBTyxDQUFDRyxLQUFLLENBQUNELGFBQWEsQ0FBQztFQUNoQztBQUNGO0FBSUEsK0RBQWVoQixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJval9jeWNsZS8uL3NyYy9zY3JpcHRzL2RhdGEuanM/ZmJkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhcGlLZXkgPSBcIjRQNDhXMktDV0ZRQVE2U0o5OUs1SDJWQk1cIlxuY29uc3QgemlwID0gXCIxMTA0MFwiXG5jb25zdCBub3cgPSBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMClcblxubGV0IGRhdGE7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnREYXRhKCkge1xuICAgIFxuICAgIHRyeSB7XG4gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJHt6aXB9LyR7bm93fT9rZXk9JHthcGlLZXl9YCk7XG4gICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICBsZXQgc3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICAgbGV0IHN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgICAgICAgc3Vuc2V0LmlubmVyVGV4dCA9IGBTdW5zZXQgVGltZTogJHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnNldH1gXG4gICAgICAgICBzdW5yaXNlLmlubmVyVGV4dCA9IGBTdW5yaXNlIFRpbWU6ICR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlfWBcbiAgICAgICAgIGNvbnN0IGhvbWVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFzdHJvLWRhdGFcIilbMF1cbiAgICAgICAgIGhvbWVEYXRhLmFwcGVuZChzdW5yaXNlKVxuICAgICAgICAgaG9tZURhdGEuYXBwZW5kKHN1bnNldClcbiAgICAgICAgIFxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgXG5cbiAgZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudERhdGFcbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJ6aXAiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZGF0YSIsImdldEN1cnJlbnREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsInN1bnJpc2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdW5zZXQiLCJpbm5lclRleHQiLCJjdXJyZW50Q29uZGl0aW9ucyIsImhvbWVEYXRhIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFwcGVuZCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

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