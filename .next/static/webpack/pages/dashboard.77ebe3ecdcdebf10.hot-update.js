"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./src/components/Results.js":
/*!***********************************!*\
  !*** ./src/components/Results.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Results = (param)=>{\n    let { objectDistanceMillimeters, iso, shutterSpeedDenominator, aperture } = param;\n    // Array of standard f-stops (beginning with 1.4)\n    const standardFStops = [\n        1.4,\n        2,\n        2.8,\n        4,\n        5.6,\n        8,\n        11,\n        16,\n        22\n    ];\n    // Calculate the nearest f-stop value based on the calculated aperture\n    const nearestFStop = standardFStops.reduce((prev, curr)=>{\n        return Math.abs(curr - aperture) < Math.abs(prev - aperture) ? curr : prev;\n    });\n    // Convert object distance from millimeters to feet\n    const objectDistanceFeet = objectDistanceMillimeters / 304.8;\n    // Check if calculated values match provided values\n    let bgColor = \"bg-green\"; // Default to green background\n    if (aperture && nearestFStop !== aperture) {\n        bgColor = \"bg-red\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"results-container \".concat(bgColor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    objectDistanceMillimeters.toFixed(2),\n                    \" millimeters (\",\n                    objectDistanceFeet.toFixed(2),\n                    \" feet)\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    iso\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: 1/\",\n                    shutterSpeedDenominator,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Aperture: \",\n                    aperture !== \"NaN\" ? \"f/\".concat(aperture) : \"N/A\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVO1FBQUMsRUFBRUMseUJBQXlCLEVBQUVDLEdBQUcsRUFBRUMsdUJBQXVCLEVBQUVDLFFBQVEsRUFBRTtJQUNwRixpREFBaUQ7SUFDakQsTUFBTUMsaUJBQWlCO1FBQUM7UUFBSztRQUFHO1FBQUs7UUFBRztRQUFLO1FBQUc7UUFBSTtRQUFJO0tBQUc7SUFFM0Qsc0VBQXNFO0lBQ3RFLE1BQU1DLGVBQWVELGVBQWVFLE1BQU0sQ0FBQyxDQUFDQyxNQUFNQztRQUNoRCxPQUFPQyxLQUFLQyxHQUFHLENBQUNGLE9BQU9MLFlBQVlNLEtBQUtDLEdBQUcsQ0FBQ0gsT0FBT0osWUFBWUssT0FBT0Q7SUFDeEU7SUFFQSxtREFBbUQ7SUFDbkQsTUFBTUkscUJBQXFCWCw0QkFBNEI7SUFFdkQsbURBQW1EO0lBQ25ELElBQUlZLFVBQVUsWUFBWSw4QkFBOEI7SUFFeEQsSUFBSVQsWUFBWUUsaUJBQWlCRixVQUFVO1FBQ3pDUyxVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxxQkFBNkIsT0FBUkY7OzBCQUNuQyw4REFBQ0c7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFFO29CQUFrQmhCLDBCQUEwQmlCLE9BQU8sQ0FBQztvQkFBRztvQkFBZU4sbUJBQW1CTSxPQUFPLENBQUM7b0JBQUc7Ozs7Ozs7MEJBQ3ZHLDhEQUFDRDs7b0JBQUU7b0JBQU1mOzs7Ozs7OzBCQUNULDhEQUFDZTs7b0JBQUU7b0JBQWtCZDtvQkFBd0I7Ozs7Ozs7MEJBQzdDLDhEQUFDYzs7b0JBQUU7b0JBQVdiLGFBQWEsUUFBUSxLQUFjLE9BQVRBLFlBQWE7Ozs7Ozs7Ozs7Ozs7QUFHM0Q7S0E1Qk1KO0FBOEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jlc3VsdHMuanM/ZjA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXN1bHRzID0gKHsgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycywgaXNvLCBzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgYXBlcnR1cmUgfSkgPT4ge1xuICAvLyBBcnJheSBvZiBzdGFuZGFyZCBmLXN0b3BzIChiZWdpbm5pbmcgd2l0aCAxLjQpXG4gIGNvbnN0IHN0YW5kYXJkRlN0b3BzID0gWzEuNCwgMiwgMi44LCA0LCA1LjYsIDgsIDExLCAxNiwgMjJdO1xuXG4gIC8vIENhbGN1bGF0ZSB0aGUgbmVhcmVzdCBmLXN0b3AgdmFsdWUgYmFzZWQgb24gdGhlIGNhbGN1bGF0ZWQgYXBlcnR1cmVcbiAgY29uc3QgbmVhcmVzdEZTdG9wID0gc3RhbmRhcmRGU3RvcHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguYWJzKGN1cnIgLSBhcGVydHVyZSkgPCBNYXRoLmFicyhwcmV2IC0gYXBlcnR1cmUpID8gY3VyciA6IHByZXY7XG4gIH0pO1xuXG4gIC8vIENvbnZlcnQgb2JqZWN0IGRpc3RhbmNlIGZyb20gbWlsbGltZXRlcnMgdG8gZmVldFxuICBjb25zdCBvYmplY3REaXN0YW5jZUZlZXQgPSBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIC8gMzA0Ljg7XG5cbiAgLy8gQ2hlY2sgaWYgY2FsY3VsYXRlZCB2YWx1ZXMgbWF0Y2ggcHJvdmlkZWQgdmFsdWVzXG4gIGxldCBiZ0NvbG9yID0gJ2JnLWdyZWVuJzsgLy8gRGVmYXVsdCB0byBncmVlbiBiYWNrZ3JvdW5kXG5cbiAgaWYgKGFwZXJ0dXJlICYmIG5lYXJlc3RGU3RvcCAhPT0gYXBlcnR1cmUpIHtcbiAgICBiZ0NvbG9yID0gJ2JnLXJlZCc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVzdWx0cy1jb250YWluZXIgJHtiZ0NvbG9yfWB9PlxuICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgPHA+T2JqZWN0IERpc3RhbmNlOiB7b2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycy50b0ZpeGVkKDIpfSBtaWxsaW1ldGVycyAoe29iamVjdERpc3RhbmNlRmVldC50b0ZpeGVkKDIpfSBmZWV0KTwvcD5cbiAgICAgIDxwPklTTzoge2lzb308L3A+XG4gICAgICA8cD5TaHV0dGVyIFNwZWVkOiAxL3tzaHV0dGVyU3BlZWREZW5vbWluYXRvcn0gc2Vjb25kczwvcD5cbiAgICAgIDxwPkFwZXJ0dXJlOiB7YXBlcnR1cmUgIT09ICdOYU4nID8gYGYvJHthcGVydHVyZX1gIDogJ04vQSd9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlJlc3VsdHMiLCJvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwiaXNvIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJhcGVydHVyZSIsInN0YW5kYXJkRlN0b3BzIiwibmVhcmVzdEZTdG9wIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJNYXRoIiwiYWJzIiwib2JqZWN0RGlzdGFuY2VGZWV0IiwiYmdDb2xvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});