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

eval("__webpack_require__.r(__webpack_exports__);\n// import drawPath from \"./sunmoves\";\n\nconst apiKey = \"4P48W2KCWFQAQ6SJ99K5H2VBM\";\nconst zip = \"11040\";\nconst now = Math.floor(Date.now() / 1000);\nlet data;\nasync function getCurrentData() {\n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${zip}/${now}?key=${apiKey}`);\n    if (response.ok) {\n      data = await response.json();\n      sunPath(data);\n      console.log(data);\n    } else {\n      throw response;\n    }\n  } catch (errorResponse) {\n    console.error(errorResponse);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (getCurrentData);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsMkJBQTJCO0FBQzFDLE1BQU1DLEdBQUcsR0FBRyxPQUFPO0FBQ25CLE1BQU1DLEdBQUcsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0gsR0FBRyxFQUFFLEdBQUMsSUFBSSxDQUFDO0FBRXZDLElBQUlJLElBQUk7QUFFUixlQUFlQyxjQUFjQSxDQUFBLEVBQUc7RUFFNUIsSUFBSTtJQUNELE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUUsdUZBQXNGUixHQUFJLElBQUdDLEdBQUksUUFBT0YsTUFBTyxFQUFDLENBQUM7SUFDL0ksSUFBSVEsUUFBUSxDQUFDRSxFQUFFLEVBQUU7TUFDZEosSUFBSSxHQUFHLE1BQU1FLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO01BQzVCQyxPQUFPLENBQUNOLElBQUksQ0FBQztNQUVkTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsSUFBSSxDQUFDO0lBQ25CLENBQUMsTUFBTTtNQUNMLE1BQU1FLFFBQVE7SUFDaEI7RUFDSCxDQUFDLENBQUMsT0FBT08sYUFBYSxFQUFFO0lBQ3BCRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsYUFBYSxDQUFDO0VBQ2hDO0FBQ0Y7QUFJQSwrREFBZVIsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvc2NyaXB0cy9kYXRhLmpzP2ZiZDEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGRyYXdQYXRoIGZyb20gXCIuL3N1bm1vdmVzXCI7XG5cbmNvbnN0IGFwaUtleSA9IFwiNFA0OFcyS0NXRlFBUTZTSjk5SzVIMlZCTVwiXG5jb25zdCB6aXAgPSBcIjExMDQwXCJcbmNvbnN0IG5vdyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKVxuXG5sZXQgZGF0YTtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudERhdGEoKSB7XG4gICAgXG4gICAgdHJ5IHtcbiAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS8ke3ppcH0vJHtub3d9P2tleT0ke2FwaUtleX1gKTtcbiAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIHN1blBhdGgoZGF0YSlcbiAgICAgICAgIFxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIHRocm93IHJlc3BvbnNlO1xuICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvclJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JSZXNwb25zZSk7XG4gICAgfVxuICB9XG5cbiAgXG5cbiAgZXhwb3J0IGRlZmF1bHQgZ2V0Q3VycmVudERhdGFcbiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJ6aXAiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZGF0YSIsImdldEN1cnJlbnREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm9rIiwianNvbiIsInN1blBhdGgiLCJjb25zb2xlIiwibG9nIiwiZXJyb3JSZXNwb25zZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/data.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawPath\": function() { return /* binding */ drawPath; },\n/* harmony export */   \"sunPath\": function() { return /* binding */ sunPath; }\n/* harmony export */ });\nfunction sunPath(data) {\n  let sunrise = document.createElement(\"li\");\n  let sunset = document.createElement(\"li\");\n  sunset.innerText = `Sunset Time: ${data.currentConditions.sunset}`;\n  sunrise.innerText = `Sunrise Time: ${data.currentConditions.sunrise}`;\n  const homeData = document.getElementsByClassName(\"astro-data\")[0];\n  homeData.append(sunrise);\n  homeData.append(sunset);\n}\n;\n\n//set the dimensions and margins of the graph\nfunction drawPath(queryData) {\n  const width = 250,\n    height = 250,\n    margin = 20;\n\n  // The radius of the pieplot is half the width or half the height (smallest one). Margin slightly subtracted \n  const radius = Math.min(width, height) / 2 - margin;\n\n  // append the svg object to the div called 'sun-path'\n  const svg = d3.select(\"#sun-path\").append(\"svg\").attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", `translate(${width / 2},${height / 2})`);\n\n  //dynamic querydata \n  const currentTime = \"\";\n\n  // data object\n  const data = {\n    a: 2000,\n    b: 2000,\n    c: 2000\n  };\n\n  // set color\n  const color = d3.scaleOrdinal().range([\"#ffffff\", \"#ebb811\", \"#7f1ea2\"]);\n\n  // Compute the position of each group on the pie:\n  const pie = d3.pie().value(d => d[1]).sort(null);\n  const arc = d3.arc().innerRadius(80).outerRadius(radius);\n  const data_ready = pie(Object.entries(data));\n\n  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.\n  svg.selectAll('path').data(data_ready).join('path')\n  // .attr('d', d3.arc()\n  //     .innerRadius(60)         // KEEP THIS LOGIC FOR MOON DELAY TRANSITION\n  //     .outerRadius(radius))\n  .transition().delay(function (d, i) {\n    return i * 400;\n  }).duration(400).attrTween('d', function (d) {\n    // 'd' is current datum and function is \"tween\" function that interpolates through the circle path \n    let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);\n    return function (t) {\n      d.endAngle = i(t);\n      return arc(d);\n    };\n  }).style('fill', d => color(d.data[0])).attr(\"stroke\", \"white\").style(\"stroke-width\", \"10px\").style(\"opacity\", 1);\n  svg.append(\"path\").style(\"fill\", function (d) {\n    return color(d.data.name);\n  }).transition().delay(function (d, i) {\n    return i * 500;\n  }).duration(500).attrTween('d', function (d) {\n    let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);\n    return function (t) {\n      d.endAngle = i(t);\n      return d3.svg.arc(d);\n    };\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRTtNQUNmbEIsQ0FBQyxDQUFDaUIsUUFBUSxHQUFHTCxDQUFDLENBQUNNLENBQUMsQ0FBQztNQUNuQixPQUFPOUIsRUFBRSxDQUFDRCxHQUFHLENBQUNlLEdBQUcsQ0FBQ0YsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7RUFDTixDQUFDLENBQUM7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2pfY3ljbGUvLi9zcmMvc2NyaXB0cy9zdW5tb3Zlcy5qcz80ZTFhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGZ1bmN0aW9uIHN1blBhdGgoZGF0YSl7XG4gICAgbGV0IHN1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBsZXQgc3Vuc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgc3Vuc2V0LmlubmVyVGV4dCA9IGBTdW5zZXQgVGltZTogJHtkYXRhLmN1cnJlbnRDb25kaXRpb25zLnN1bnNldH1gXG4gICAgc3VucmlzZS5pbm5lclRleHQgPSBgU3VucmlzZSBUaW1lOiAke2RhdGEuY3VycmVudENvbmRpdGlvbnMuc3VucmlzZX1gXG4gICAgY29uc3QgaG9tZURhdGEgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYXN0cm8tZGF0YVwiKVswXVxuICAgIGhvbWVEYXRhLmFwcGVuZChzdW5yaXNlKVxuICAgIGhvbWVEYXRhLmFwcGVuZChzdW5zZXQpXG59O1xuXG4gICAgLy9zZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG5leHBvcnQgZnVuY3Rpb24gZHJhd1BhdGgocXVlcnlEYXRhKXtcblxuICAgIGNvbnN0IHdpZHRoID0gMjUwLFxuICAgICAgICBoZWlnaHQgPSAyNTAsXG4gICAgICAgIG1hcmdpbiA9IDIwO1xuXG4gICAgLy8gVGhlIHJhZGl1cyBvZiB0aGUgcGllcGxvdCBpcyBoYWxmIHRoZSB3aWR0aCBvciBoYWxmIHRoZSBoZWlnaHQgKHNtYWxsZXN0IG9uZSkuIE1hcmdpbiBzbGlnaHRseSBzdWJ0cmFjdGVkIFxuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgubWluKHdpZHRoLCBoZWlnaHQpIC8gMiAtIG1hcmdpblxuXG4gICAgLy8gYXBwZW5kIHRoZSBzdmcgb2JqZWN0IHRvIHRoZSBkaXYgY2FsbGVkICdzdW4tcGF0aCdcbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjc3VuLXBhdGhcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7d2lkdGggLyAyfSwke2hlaWdodCAvIDJ9KWApO1xuICAgIFxuICAgIC8vZHluYW1pYyBxdWVyeWRhdGEgXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBcIlwiXG5cbiAgICAvLyBkYXRhIG9iamVjdFxuICAgIGNvbnN0IGRhdGEgPSB7YToyMDAwLGI6MjAwMCxjOjIwMDB9XG5cbiAgICAvLyBzZXQgY29sb3JcbiAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgLnJhbmdlKFtcIiNmZmZmZmZcIixcIiNlYmI4MTFcIiwgXCIjN2YxZWEyXCIsXSlcblxuICAgIC8vIENvbXB1dGUgdGhlIHBvc2l0aW9uIG9mIGVhY2ggZ3JvdXAgb24gdGhlIHBpZTpcbiAgICBjb25zdCBwaWUgPSBkMy5waWUoKVxuICAgIC52YWx1ZShkPT5kWzFdKVxuICAgIC5zb3J0KG51bGwpXG5cbiAgICBjb25zdCBhcmMgPSAgZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMoODApXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG4gICAgXG4gICAgICAgIFxuXG5cbiAgICBjb25zdCBkYXRhX3JlYWR5ID0gcGllKE9iamVjdC5lbnRyaWVzKGRhdGEpKVxuXG4gICAgLy8gQnVpbGQgdGhlIHBpZSBjaGFydDogQmFzaWNhbGx5LCBlYWNoIHBhcnQgb2YgdGhlIHBpZSBpcyBhIHBhdGggdGhhdCB3ZSBidWlsZCB1c2luZyB0aGUgYXJjIGZ1bmN0aW9uLlxuICAgIHN2Z1xuICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgIC5kYXRhKGRhdGFfcmVhZHkpXG4gICAgLmpvaW4oJ3BhdGgnKVxuICAgIC8vIC5hdHRyKCdkJywgZDMuYXJjKClcbiAgICAvLyAgICAgLmlubmVyUmFkaXVzKDYwKSAgICAgICAgIC8vIEtFRVAgVEhJUyBMT0dJQyBGT1IgTU9PTiBERUxBWSBUUkFOU0lUSU9OXG4gICAgLy8gICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpKVxuICAgIC50cmFuc2l0aW9uKCkuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIDQwMDsgfSlcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyVHdlZW4oJ2QnLCBmdW5jdGlvbihkKSB7ICAgICAgICAgICAgICAgICAgIC8vICdkJyBpcyBjdXJyZW50IGRhdHVtIGFuZCBmdW5jdGlvbiBpcyBcInR3ZWVuXCIgZnVuY3Rpb24gdGhhdCBpbnRlcnBvbGF0ZXMgdGhyb3VnaCB0aGUgY2lyY2xlIHBhdGggXG4gICAgICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlKzAuMSwgZC5lbmRBbmdsZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBkLmVuZEFuZ2xlID0gaSh0KTtcbiAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICB9O1xuICAgfSlcbiAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGNvbG9yKGQuZGF0YVswXSkpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZVwiKVxuICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjEwcHhcIilcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgXG5cbiAgICBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5zdHlsZShcImZpbGxcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gY29sb3IoZC5kYXRhLm5hbWUpOyB9KVxuICAgIC50cmFuc2l0aW9uKCkuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIDUwMDsgfSkuZHVyYXRpb24oNTAwKVxuICAgIC5hdHRyVHdlZW4oJ2QnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgbGV0IGkgPSBkMy5pbnRlcnBvbGF0ZShkLnN0YXJ0QW5nbGUrMC4xLCBkLmVuZEFuZ2xlKTtcbiAgICAgICByZXR1cm4gZnVuY3Rpb24odCkge1xuICAgICAgICAgICBkLmVuZEFuZ2xlID0gaSh0KTtcbiAgICAgICAgIHJldHVybiBkMy5zdmcuYXJjKGQpO1xuICAgICAgIH07XG4gIH0pO1xufVxuXG5cblxuXG4iXSwibmFtZXMiOlsic3VuUGF0aCIsImRhdGEiLCJzdW5yaXNlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3Vuc2V0IiwiaW5uZXJUZXh0IiwiY3VycmVudENvbmRpdGlvbnMiLCJob21lRGF0YSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhcHBlbmQiLCJkcmF3UGF0aCIsInF1ZXJ5RGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicmFkaXVzIiwiTWF0aCIsIm1pbiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXR0ciIsImN1cnJlbnRUaW1lIiwiYSIsImIiLCJjIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJyYW5nZSIsInBpZSIsInZhbHVlIiwiZCIsInNvcnQiLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwiZGF0YV9yZWFkeSIsIk9iamVjdCIsImVudHJpZXMiLCJzZWxlY3RBbGwiLCJqb2luIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiaSIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0Iiwic3R5bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/sunmoves.js\n");

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