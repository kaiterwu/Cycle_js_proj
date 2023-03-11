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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/data */ \"./src/scripts/data.js\");\n/* harmony import */ var _scripts_sunmoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sunmoves */ \"./src/scripts/sunmoves.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // console.log(\"Hello world!\")\n  const main = document.getElementById(\"main\");\n  new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  (0,_scripts_sunmoves__WEBPACK_IMPORTED_MODULE_2__.drawPath)();\n\n  //silence this code before running webpack before changes to prevent extra queries \n\n  // getCurrentData()\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNHO0FBQ1U7QUFHckRJLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNoRDtFQUNBLE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsTUFBTSxDQUFDO0VBQzVDLElBQUlQLHdEQUFPLENBQUNNLElBQUksQ0FBQztFQUNqQkosMkRBQVEsRUFBRTs7RUFJVjs7RUFFQTtBQUlKLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCBnZXRDdXJyZW50RGF0YSBmcm9tIFwiLi9zY3JpcHRzL2RhdGFcIlxuaW1wb3J0IHtkcmF3UGF0aCxzdW5QYXRofSAgZnJvbSBcIi4vc2NyaXB0cy9zdW5tb3Zlc1wiO1xuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkIVwiKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbiAgICBuZXcgRXhhbXBsZShtYWluKTtcbiAgICBkcmF3UGF0aCgpO1xuICAgIFxuICAgIFxuICAgIFxuICAgIC8vc2lsZW5jZSB0aGlzIGNvZGUgYmVmb3JlIHJ1bm5pbmcgd2VicGFjayBiZWZvcmUgY2hhbmdlcyB0byBwcmV2ZW50IGV4dHJhIHF1ZXJpZXMgXG5cbiAgICAvLyBnZXRDdXJyZW50RGF0YSgpXG5cbiAgICBcblxufSk7XG5cbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiZ2V0Q3VycmVudERhdGEiLCJkcmF3UGF0aCIsInN1blBhdGgiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYWluIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/data.js":
/*!*****************************!*\
  !*** ./src/scripts/data.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// import drawPath from \"./sunmoves\";\n\nconst apiKey = \"4P48W2KCWFQAQ6SJ99K5H2VBM\";\nconst zip = \"11040\";\nconst now = Math.floor(Date.now() / 1000);\nlet data;\nasync function getCurrentData() {\n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}`);\n    if (response.ok) {\n      data = await response.json();\n      // sunPath(data)\n\n      console.log(data);\n    } else {\n      throw response;\n    }\n  } catch (errorResponse) {\n    console.error(errorResponse);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsMkJBQTJCO0FBQzFDLE1BQU1DLEdBQUcsR0FBRyxPQUFPO0FBQ25CLE1BQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBRXZDLElBQUlJLElBQUk7QUFFUixlQUFlQyxjQUFjQSxDQUFBLEVBQUc7RUFFNUIsSUFBSTtJQUNELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsdUZBQXNGUixHQUFJLElBQUdDLEdBQUksUUFBT0YsTUFBTyxFQUFDLENBQUM7SUFDL0ksSUFBSVEsUUFBUSxDQUFDRSxFQUFFLEVBQUU7TUFDZEosSUFBSSxHQUFHLE1BQU1FLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO01BQzVCOztNQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsSUFBSSxDQUFDO0lBQ25CLENBQUMsTUFBTTtNQUNMLE1BQU1FLFFBQVE7SUFDaEI7RUFDSCxDQUFDLENBQUMsT0FBT00sYUFBYSxFQUFFO0lBQ3BCRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsYUFBYSxDQUFDO0VBQ2hDO0FBQ0Y7QUFJQSwrREFBZVAsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvc2NyaXB0cy9kYXRhLmpzP2ZiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGRyYXdQYXRoIGZyb20gXCIuL3N1bm1vdmVzXCI7XG5cbmNvbnN0IGFwaUtleSA9IFwiNFA0OFcyS0NXRlFBUTZTSjk5SzVIMlZCTVwiXG5jb25zdCB6aXAgPSBcIjExMDQwXCJcbmNvbnN0IG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKVxuXG5sZXQgZGF0YTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGEoKSB7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke3ppcH0vJHtub3d9P2tleT0ke2FwaUtleX1gKTtcbiAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIC8vIHN1blBhdGgoZGF0YSlcbiAgICAgICAgIFxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgXG5cbiAgZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudERhdGFcbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJ6aXAiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZGF0YSIsImdldEN1cnJlbnREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclJlc3BvbnNlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's kaiter sALIVEEEE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLG1DQUFtQztJQUV4RCxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBQ3hEO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0YsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzVDO0FBQ0o7QUFFQSwrREFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzP2ZjZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRXhhbXBsZSB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlXG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3Mga2FpdGVyIHNBTElWRUVFRSEhITwvaDE+XCJcblxuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljaylcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlOyJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJpbm5lckhUTUwiLCJoYW5kbGVDbGljayIsImJpbmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGRyZW4iLCJpbm5lclRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/sunmoves.js":
/*!*********************************!*\
  !*** ./src/scripts/sunmoves.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawPath\": function() { return /* binding */ drawPath; },\n/* harmony export */   \"sunPath\": function() { return /* binding */ sunPath; }\n/* harmony export */ });\n/* harmony import */ var _timeConvert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeConvert */ \"./src/scripts/timeConvert.js\");\n\nfunction sunPath(data) {\n  let sunrise = document.createElement(\"li\");\n  let sunset = document.createElement(\"li\");\n  sunset.innerText = `Sunset Time: ${data.currentConditions.sunset}`;\n  sunrise.innerText = `Sunrise Time: ${data.currentConditions.sunrise}`;\n  const homeData = document.getElementsByClassName(\"astro-data\")[0];\n  homeData.append(sunrise);\n  homeData.append(sunset);\n}\n;\n\n//set the dimensions and margins of the graph\nfunction drawPath(queryData) {\n  const width = 250,\n    height = 250,\n    margin = 20;\n\n  // The radius of the pieplot is half the width or half the height (smallest one). Margin slightly subtracted \n  const radius = Math.min(width, height) / 2 - margin;\n\n  // append the svg object to the div called 'sun-path'\n  const svg = d3.select(\"#sun-path\").append(\"svg\").attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", `translate(${width / 2},${height / 2})`);\n\n  //dynamic querydata , javascript time is in UTC, need to convert to EST \n  let currentSeconds = (0,_timeConvert__WEBPACK_IMPORTED_MODULE_0__.timeToSeconds)(queryData.currentConditions.datetime);\n  let sunriseSeconds = (0,_timeConvert__WEBPACK_IMPORTED_MODULE_0__.timeToSeconds)(queryData.currentConditions.sunrise);\n  let sunsetSeconds = (0,_timeConvert__WEBPACK_IMPORTED_MODULE_0__.timeToSeconds)(queryData.currentConditions.sunset);\n\n  // data object\n  const data = {\n    a: 2000,\n    b: 2000,\n    c: 2000\n  };\n\n  // set color\n  const color = d3.scaleOrdinal().range([\"#ffffff\", \"#ebb811\", \"#7f1ea2\"]);\n\n  // Compute the position of each group on the pie:\n  const pie = d3.pie().value(d => d[1]).sort(null);\n  const arc = d3.arc().innerRadius(80).outerRadius(radius);\n  const data_ready = pie(Object.entries(data));\n\n  // compose chart, each part of the pie is a path that we build using arc function.\n  svg.selectAll('path').data(data_ready).join('path')\n  // .attr('d', d3.arc()\n  //     .innerRadius(60)         // KEEP THIS LOGIC FOR MOON DELAY TRANSITION\n  //     .outerRadius(radius))\n  .transition().delay(function (d, i) {\n    return i * 400;\n  }).duration(400).attrTween('d', function (d) {\n    // 'd' is current datum and function is \"tween\" function that interpolates through the circle path \n    let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);\n    return function (t) {\n      d.endAngle = i(t);\n      return arc(d);\n    };\n  }).style('fill', d => color(d.data[0])).attr(\"stroke\", \"white\").style(\"stroke-width\", \"10px\").style(\"opacity\", 1);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU07RUFDWjtFQUNBO0VBQ0E7RUFBQSxDQUNDQyxVQUFVLEVBQUUsQ0FBQ0MsS0FBSyxDQUFDLFVBQVNYLENBQUMsRUFBRVksQ0FBQyxFQUFFO0lBQUUsT0FBT0EsQ0FBQyxHQUFHLEdBQUc7RUFBRSxDQUFDLENBQUMsQ0FDdERDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FDYkMsU0FBUyxDQUFDLEdBQUcsRUFBRSxVQUFTZCxDQUFDLEVBQUU7SUFBb0I7SUFDNUMsSUFBSVksQ0FBQyxHQUFHM0IsRUFBRSxDQUFDOEIsV0FBVyxDQUFDZixDQUFDLENBQUNnQixVQUFVLEdBQUMsR0FBRyxFQUFFaEIsQ0FBQyxDQUFDaUIsUUFBUSxDQUFDO0lBQ3BELE9BQU8sVUFBU0MsQ0FBQyxFQUFFO01BQ2ZsQixDQUFDLENBQUNpQixRQUFRLEdBQUdMLENBQUMsQ0FBQ00sQ0FBQyxDQUFDO01BQ25CLE9BQU9oQixHQUFHLENBQUNGLENBQUMsQ0FBQztJQUNmLENBQUM7RUFDTixDQUFDLENBQUMsQ0FDQW1CLEtBQUssQ0FBQyxNQUFNLEVBQUVuQixDQUFDLElBQUlMLEtBQUssQ0FBQ0ssQ0FBQyxDQUFDbEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDcENxQixJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUN2QmdDLEtBQUssQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDLENBQzdCQSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUl4QiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvc2NyaXB0cy9zdW5tb3Zlcy5qcz80ZTFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWVUb1NlY29uZHMgfSBmcm9tIFwiLi90aW1lQ29udmVydFwiXG5cbmV4cG9ydCBmdW5jdGlvbiBzdW5QYXRoKGRhdGEpe1xuICAgIGxldCBzdW5yaXNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgbGV0IHN1bnNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIHN1bnNldC5pbm5lclRleHQgPSBgU3Vuc2V0IFRpbWU6ICR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5zZXR9YFxuICAgIHN1bnJpc2UuaW5uZXJUZXh0ID0gYFN1bnJpc2UgVGltZTogJHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnJpc2V9YFxuICAgIGNvbnN0IGhvbWVEYXRhID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFzdHJvLWRhdGFcIilbMF1cbiAgICBob21lRGF0YS5hcHBlbmQoc3VucmlzZSlcbiAgICBob21lRGF0YS5hcHBlbmQoc3Vuc2V0KVxufTtcblxuICAgIC8vc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdQYXRoKHF1ZXJ5RGF0YSl7XG5cbiAgICBjb25zdCB3aWR0aCA9IDI1MCxcbiAgICAgICAgaGVpZ2h0ID0gMjUwLFxuICAgICAgICBtYXJnaW4gPSAyMDtcblxuICAgIC8vIFRoZSByYWRpdXMgb2YgdGhlIHBpZXBsb3QgaXMgaGFsZiB0aGUgd2lkdGggb3IgaGFsZiB0aGUgaGVpZ2h0IChzbWFsbGVzdCBvbmUpLiBNYXJnaW4gc2xpZ2h0bHkgc3VidHJhY3RlZCBcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDIgLSBtYXJnaW5cblxuICAgIC8vIGFwcGVuZCB0aGUgc3ZnIG9iamVjdCB0byB0aGUgZGl2IGNhbGxlZCAnc3VuLXBhdGgnXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI3N1bi1wYXRoXCIpXG4gICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke3dpZHRoIC8gMn0sJHtoZWlnaHQgLyAyfSlgKTtcbiAgICBcbiAgICAvL2R5bmFtaWMgcXVlcnlkYXRhICwgamF2YXNjcmlwdCB0aW1lIGlzIGluIFVUQywgbmVlZCB0byBjb252ZXJ0IHRvIEVTVCBcbiAgICBsZXQgY3VycmVudFNlY29uZHMgPSB0aW1lVG9TZWNvbmRzKHF1ZXJ5RGF0YS5jdXJyZW50Q29uZGl0aW9ucy5kYXRldGltZSlcbiAgICBsZXQgc3VucmlzZVNlY29uZHMgPSB0aW1lVG9TZWNvbmRzKHF1ZXJ5RGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlKVxuICAgIGxldCBzdW5zZXRTZWNvbmRzID0gdGltZVRvU2Vjb25kcyhxdWVyeURhdGEuY3VycmVudENvbmRpdGlvbnMuc3Vuc2V0KVxuXG4gICAgXG4gICAgXG5cbiAgICBcblxuICAgIC8vIGRhdGEgb2JqZWN0XG4gICAgY29uc3QgZGF0YSA9IHthOjIwMDAsYjoyMDAwLGM6MjAwMH1cblxuICAgIC8vIHNldCBjb2xvclxuICAgIGNvbnN0IGNvbG9yID0gZDMuc2NhbGVPcmRpbmFsKClcbiAgICAucmFuZ2UoW1wiI2ZmZmZmZlwiLFwiI2ViYjgxMVwiLCBcIiM3ZjFlYTJcIixdKVxuXG4gICAgLy8gQ29tcHV0ZSB0aGUgcG9zaXRpb24gb2YgZWFjaCBncm91cCBvbiB0aGUgcGllOlxuICAgIGNvbnN0IHBpZSA9IGQzLnBpZSgpXG4gICAgLnZhbHVlKGQ9PmRbMV0pXG4gICAgLnNvcnQobnVsbClcblxuICAgIGNvbnN0IGFyYyA9ICBkMy5hcmMoKVxuICAgIC5pbm5lclJhZGl1cyg4MClcbiAgICAub3V0ZXJSYWRpdXMocmFkaXVzKTtcbiAgICBcbiAgICAgICAgXG5cblxuICAgIGNvbnN0IGRhdGFfcmVhZHkgPSBwaWUoT2JqZWN0LmVudHJpZXMoZGF0YSkpXG5cbiAgICAvLyBjb21wb3NlIGNoYXJ0LCBlYWNoIHBhcnQgb2YgdGhlIHBpZSBpcyBhIHBhdGggdGhhdCB3ZSBidWlsZCB1c2luZyBhcmMgZnVuY3Rpb24uXG4gICAgc3ZnXG4gICAgLnNlbGVjdEFsbCgncGF0aCcpXG4gICAgLmRhdGEoZGF0YV9yZWFkeSlcbiAgICAuam9pbigncGF0aCcpXG4gICAgLy8gLmF0dHIoJ2QnLCBkMy5hcmMoKVxuICAgIC8vICAgICAuaW5uZXJSYWRpdXMoNjApICAgICAgICAgLy8gS0VFUCBUSElTIExPR0lDIEZPUiBNT09OIERFTEFZIFRSQU5TSVRJT05cbiAgICAvLyAgICAgLm91dGVyUmFkaXVzKHJhZGl1cykpXG4gICAgLnRyYW5zaXRpb24oKS5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogNDAwOyB9KVxuICAgIC5kdXJhdGlvbig0MDApXG4gICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uKGQpIHsgICAgICAgICAgICAgICAgICAgLy8gJ2QnIGlzIGN1cnJlbnQgZGF0dW0gYW5kIGZ1bmN0aW9uIGlzIFwidHdlZW5cIiBmdW5jdGlvbiB0aGF0IGludGVycG9sYXRlcyB0aHJvdWdoIHRoZSBjaXJjbGUgcGF0aCBcbiAgICAgICAgbGV0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUrMC4xLCBkLmVuZEFuZ2xlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgIHJldHVybiBhcmMoZCk7XG4gICAgICAgIH07XG4gICB9KVxuICAgIC5zdHlsZSgnZmlsbCcsIGQgPT4gY29sb3IoZC5kYXRhWzBdKSlcbiAgICAuYXR0cihcInN0cm9rZVwiLCBcIndoaXRlXCIpXG4gICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMTBweFwiKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICBcblxuXG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJ0aW1lVG9TZWNvbmRzIiwic3VuUGF0aCIsImRhdGEiLCJzdW5yaXNlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3Vuc2V0IiwiaW5uZXJUZXh0IiwiY3VycmVudENvbmRpdGlvbnMiLCJob21lRGF0YSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhcHBlbmQiLCJkcmF3UGF0aCIsInF1ZXJ5RGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsImN1cnJlbnRTZWNvbmRzIiwiZGF0ZXRpbWUiLCJzdW5yaXNlU2Vjb25kcyIsInN1bnNldFNlY29uZHMiLCJhIiwiYiIsImMiLCJjb2xvciIsInNjYWxlT3JkaW5hbCIsInJhbmdlIiwicGllIiwidmFsdWUiLCJkIiwic29ydCIsImFyYyIsImlubmVyUmFkaXVzIiwib3V0ZXJSYWRpdXMiLCJkYXRhX3JlYWR5IiwiT2JqZWN0IiwiZW50cmllcyIsInNlbGVjdEFsbCIsImpvaW4iLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJpIiwiZHVyYXRpb24iLCJhdHRyVHdlZW4iLCJpbnRlcnBvbGF0ZSIsInN0YXJ0QW5nbGUiLCJlbmRBbmdsZSIsInQiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sunmoves.js\n");

/***/ }),

/***/ "./src/scripts/timeConvert.js":
/*!************************************!*\
  !*** ./src/scripts/timeConvert.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"timeToSeconds\": function() { return /* binding */ timeToSeconds; }\n/* harmony export */ });\nfunction timeToSeconds(str) {\n  let currentHours = parseInt(str.slice(0, 2));\n  let currentMinutes = parseInt(str.slice(3, 5));\n  let currentSeconds = parseInt(str.slice(6));\n  return currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aW1lQ29udmVydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sU0FBU0EsYUFBYUEsQ0FBQ0MsR0FBRyxFQUFDO0VBQy9CLElBQUlDLFlBQVksR0FBR0MsUUFBUSxDQUFDRixHQUFHLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7RUFDM0MsSUFBSUMsY0FBYyxHQUFHRixRQUFRLENBQUNGLEdBQUcsQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztFQUM3QyxJQUFJRSxjQUFjLEdBQUdILFFBQVEsQ0FBQ0YsR0FBRyxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFFM0MsT0FBT0YsWUFBWSxHQUFDLEVBQUUsR0FBQyxFQUFFLEdBQUdHLGNBQWMsR0FBQyxFQUFFLEdBQUdDLGNBQWM7QUFDakUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qX2N5Y2xlLy4vc3JjL3NjcmlwdHMvdGltZUNvbnZlcnQuanM/N2M2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdGltZVRvU2Vjb25kcyhzdHIpe1xuICAgbGV0IGN1cnJlbnRIb3VycyA9IHBhcnNlSW50KHN0ci5zbGljZSgwLDIpKVxuICAgbGV0IGN1cnJlbnRNaW51dGVzID0gcGFyc2VJbnQoc3RyLnNsaWNlKDMsNSkpXG4gICBsZXQgY3VycmVudFNlY29uZHMgPSBwYXJzZUludChzdHIuc2xpY2UoNikpXG5cbiAgIHJldHVybiBjdXJyZW50SG91cnMqNjAqNjAgKyBjdXJyZW50TWludXRlcyo2MCArIGN1cnJlbnRTZWNvbmRzIFxufVxuXG5cbiAgICBcblxuICAgIFxuICAgICJdLCJuYW1lcyI6WyJ0aW1lVG9TZWNvbmRzIiwic3RyIiwiY3VycmVudEhvdXJzIiwicGFyc2VJbnQiLCJzbGljZSIsImN1cnJlbnRNaW51dGVzIiwiY3VycmVudFNlY29uZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/timeConvert.js\n");

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