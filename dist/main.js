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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawPath\": function() { return /* binding */ drawPath; },\n/* harmony export */   \"sunPath\": function() { return /* binding */ sunPath; }\n/* harmony export */ });\nfunction sunPath(data) {\n  let sunrise = document.createElement(\"li\");\n  let sunset = document.createElement(\"li\");\n  sunset.innerText = `Sunset Time: ${data.currentConditions.sunset}`;\n  sunrise.innerText = `Sunrise Time: ${data.currentConditions.sunrise}`;\n  const homeData = document.getElementsByClassName(\"astro-data\")[0];\n  homeData.append(sunrise);\n  homeData.append(sunset);\n}\n;\n\n//set the dimensions and margins of the graph\nfunction drawPath(queryData) {\n  const width = 250,\n    height = 250,\n    margin = 20;\n\n  // The radius of the pieplot is half the width or half the height (smallest one). Margin slightly subtracted \n  const radius = Math.min(width, height) / 2 - margin;\n\n  // append the svg object to the div called 'sun-path'\n  const svg = d3.select(\"#sun-path\").append(\"svg\").attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", `translate(${width / 2},${height / 2})`);\n\n  //dynamic querydata \n\n  // data object\n  const data = {\n    a: 2000,\n    b: 2000,\n    c: 2000\n  };\n\n  // set color\n  const color = d3.scaleOrdinal().range([\"#ffffff\", \"#ebb811\", \"#7f1ea2\"]);\n\n  // Compute the position of each group on the pie:\n  const pie = d3.pie().value(d => d[1]).sort(null);\n  const arc = d3.arc().innerRadius(80).outerRadius(radius);\n  const data_ready = pie(Object.entries(data));\n\n  // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.\n  svg.selectAll('path').data(data_ready).join('path')\n  // .attr('d', d3.arc()\n  //     .innerRadius(60)         // Inner circle hole size \n  //     .outerRadius(radius))\n  .transition().delay(function (d, i) {\n    return i * 400;\n  }).duration(400).attrTween('d', function (d) {\n    let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);\n    return function (t) {\n      d.endAngle = i(t);\n      return arc(d);\n    };\n  }).style('fill', d => color(d.data[0])).attr(\"stroke\", \"white\").style(\"stroke-width\", \"5px\").style(\"opacity\", 1);\n  svg.append(\"path\").style(\"fill\", function (d) {\n    return color(d.data.name);\n  }).transition().delay(function (d, i) {\n    return i * 500;\n  }).duration(500).attrTween('d', function (d) {\n    let i = d3.interpolate(d.startAngle + 0.1, d.endAngle);\n    return function (t) {\n      d.endAngle = i(t);\n      return d3.svg.arc(d);\n    };\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdMLENBQUMsQ0FBQ00sQ0FBQyxDQUFDO01BQ25CLE9BQU83QixFQUFFLENBQUNELEdBQUcsQ0FBQ2MsR0FBRyxDQUFDRixDQUFDLENBQUM7SUFDdEIsQ0FBQztFQUNOLENBQUMsQ0FBQztBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJval9jeWNsZS8uL3NyYy9zY3JpcHRzL3N1bm1vdmVzLmpzPzRlMWEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gc3VuUGF0aChkYXRhKXtcbiAgICBsZXQgc3VucmlzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxuICAgIGxldCBzdW5zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcbiAgICBzdW5zZXQuaW5uZXJUZXh0ID0gYFN1bnNldCBUaW1lOiAke2RhdGEuY3VycmVudENvbmRpdGlvbnMuc3Vuc2V0fWBcbiAgICBzdW5yaXNlLmlubmVyVGV4dCA9IGBTdW5yaXNlIFRpbWU6ICR7ZGF0YS5jdXJyZW50Q29uZGl0aW9ucy5zdW5yaXNlfWBcbiAgICBjb25zdCBob21lRGF0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhc3Ryby1kYXRhXCIpWzBdXG4gICAgaG9tZURhdGEuYXBwZW5kKHN1bnJpc2UpXG4gICAgaG9tZURhdGEuYXBwZW5kKHN1bnNldClcbn07XG5cbiAgICAvL3NldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbmV4cG9ydCBmdW5jdGlvbiBkcmF3UGF0aChxdWVyeURhdGEpe1xuXG4gICAgY29uc3Qgd2lkdGggPSAyNTAsXG4gICAgICAgIGhlaWdodCA9IDI1MCxcbiAgICAgICAgbWFyZ2luID0gMjA7XG5cbiAgICAvLyBUaGUgcmFkaXVzIG9mIHRoZSBwaWVwbG90IGlzIGhhbGYgdGhlIHdpZHRoIG9yIGhhbGYgdGhlIGhlaWdodCAoc21hbGxlc3Qgb25lKS4gTWFyZ2luIHNsaWdodGx5IHN1YnRyYWN0ZWQgXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCkgLyAyIC0gbWFyZ2luXG5cbiAgICAvLyBhcHBlbmQgdGhlIHN2ZyBvYmplY3QgdG8gdGhlIGRpdiBjYWxsZWQgJ3N1bi1wYXRoJ1xuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNzdW4tcGF0aFwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoJHt3aWR0aCAvIDJ9LCR7aGVpZ2h0IC8gMn0pYCk7XG4gICAgXG4gICAgLy9keW5hbWljIHF1ZXJ5ZGF0YSBcbiAgICAgICAgXG5cbiAgICAvLyBkYXRhIG9iamVjdFxuICAgIGNvbnN0IGRhdGEgPSB7YToyMDAwLGI6MjAwMCxjOjIwMDB9XG5cbiAgICAvLyBzZXQgY29sb3JcbiAgICBjb25zdCBjb2xvciA9IGQzLnNjYWxlT3JkaW5hbCgpXG4gICAgLnJhbmdlKFtcIiNmZmZmZmZcIixcIiNlYmI4MTFcIiwgXCIjN2YxZWEyXCIsXSlcblxuICAgIC8vIENvbXB1dGUgdGhlIHBvc2l0aW9uIG9mIGVhY2ggZ3JvdXAgb24gdGhlIHBpZTpcbiAgICBjb25zdCBwaWUgPSBkMy5waWUoKVxuICAgIC52YWx1ZShkPT5kWzFdKVxuICAgIC5zb3J0KG51bGwpXG5cbiAgICBjb25zdCBhcmMgPSAgZDMuYXJjKClcbiAgICAuaW5uZXJSYWRpdXMoODApXG4gICAgLm91dGVyUmFkaXVzKHJhZGl1cyk7XG4gICAgXG4gICAgICAgIFxuXG5cbiAgICBjb25zdCBkYXRhX3JlYWR5ID0gcGllKE9iamVjdC5lbnRyaWVzKGRhdGEpKVxuXG4gICAgLy8gQnVpbGQgdGhlIHBpZSBjaGFydDogQmFzaWNhbGx5LCBlYWNoIHBhcnQgb2YgdGhlIHBpZSBpcyBhIHBhdGggdGhhdCB3ZSBidWlsZCB1c2luZyB0aGUgYXJjIGZ1bmN0aW9uLlxuICAgIHN2Z1xuICAgIC5zZWxlY3RBbGwoJ3BhdGgnKVxuICAgIC5kYXRhKGRhdGFfcmVhZHkpXG4gICAgLmpvaW4oJ3BhdGgnKVxuICAgIC8vIC5hdHRyKCdkJywgZDMuYXJjKClcbiAgICAvLyAgICAgLmlubmVyUmFkaXVzKDYwKSAgICAgICAgIC8vIElubmVyIGNpcmNsZSBob2xlIHNpemUgXG4gICAgLy8gICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpKVxuICAgIC50cmFuc2l0aW9uKCkuZGVsYXkoZnVuY3Rpb24oZCwgaSkgeyByZXR1cm4gaSAqIDQwMDsgfSlcbiAgICAuZHVyYXRpb24oNDAwKVxuICAgIC5hdHRyVHdlZW4oJ2QnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIGxldCBpID0gZDMuaW50ZXJwb2xhdGUoZC5zdGFydEFuZ2xlKzAuMSwgZC5lbmRBbmdsZSk7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICBkLmVuZEFuZ2xlID0gaSh0KTtcbiAgICAgICAgICByZXR1cm4gYXJjKGQpO1xuICAgICAgICB9O1xuICAgfSlcbiAgICAuc3R5bGUoJ2ZpbGwnLCBkID0+IGNvbG9yKGQuZGF0YVswXSkpXG4gICAgLmF0dHIoXCJzdHJva2VcIiwgXCJ3aGl0ZVwiKVxuICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCBcIjVweFwiKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICBcblxuICAgIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLnN0eWxlKFwiZmlsbFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBjb2xvcihkLmRhdGEubmFtZSk7IH0pXG4gICAgLnRyYW5zaXRpb24oKS5kZWxheShmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpICogNTAwOyB9KS5kdXJhdGlvbig1MDApXG4gICAgLmF0dHJUd2VlbignZCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICBsZXQgaSA9IGQzLmludGVycG9sYXRlKGQuc3RhcnRBbmdsZSswLjEsIGQuZW5kQW5nbGUpO1xuICAgICAgIHJldHVybiBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgIGQuZW5kQW5nbGUgPSBpKHQpO1xuICAgICAgICAgcmV0dXJuIGQzLnN2Zy5hcmMoZCk7XG4gICAgICAgfTtcbiAgfSk7XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6WyJzdW5QYXRoIiwiZGF0YSIsInN1bnJpc2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdW5zZXQiLCJpbm5lclRleHQiLCJjdXJyZW50Q29uZGl0aW9ucyIsImhvbWVEYXRhIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImFwcGVuZCIsImRyYXdQYXRoIiwicXVlcnlEYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJyYWRpdXMiLCJNYXRoIiwibWluIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhdHRyIiwiYSIsImIiLCJjIiwiY29sb3IiLCJzY2FsZU9yZGluYWwiLCJyYW5nZSIsInBpZSIsInZhbHVlIiwiZCIsInNvcnQiLCJhcmMiLCJpbm5lclJhZGl1cyIsIm91dGVyUmFkaXVzIiwiZGF0YV9yZWFkeSIsIk9iamVjdCIsImVudHJpZXMiLCJzZWxlY3RBbGwiLCJqb2luIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiaSIsImR1cmF0aW9uIiwiYXR0clR3ZWVuIiwiaW50ZXJwb2xhdGUiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ0Iiwic3R5bGUiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/sunmoves.js\n");

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