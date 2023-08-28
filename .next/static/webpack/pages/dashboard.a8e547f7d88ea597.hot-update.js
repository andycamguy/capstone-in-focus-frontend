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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.js\");\n\n\n\nconst Results = (param)=>{\n    let { objectDistanceMillimeters, iso, shutterSpeedDenominator, aperture } = param;\n    // Calculate missing values using helper functions if needed\n    const calculatedAperture = aperture || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateAperture)(iso, shutterSpeedDenominator, objectDistanceMillimeters);\n    const calculatedISO = iso || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateISO)(shutterSpeedDenominator, calculatedAperture, objectDistanceMillimeters);\n    const calculatedShutterSpeedDenominator = shutterSpeedDenominator || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateShutterSpeedDenominator)(calculatedISO, calculatedAperture, objectDistanceMillimeters);\n    const calculatedObjectDistanceMillimeters = objectDistanceMillimeters || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateObjectDistanceMillimeters)(calculatedISO, calculatedShutterSpeedDenominator, calculatedAperture);\n    // Array of standard f-stops\n    const standardFstops = [\n        1.4,\n        2,\n        2.8,\n        4,\n        5.6,\n        8,\n        11,\n        16,\n        22\n    ];\n    // Find the nearest standard f-stop value\n    const nearestAperture = standardFstops.reduce((prev, curr)=>{\n        return Math.abs(curr - calculatedAperture) < Math.abs(prev - calculatedAperture) ? curr : prev;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"results-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    calculatedObjectDistanceMillimeters.toFixed(2),\n                    \" millimeters\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    calculatedISO\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: 1/\",\n                    calculatedShutterSpeedDenominator,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Aperture: f/\",\n                    nearestAperture.toFixed(1)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFNUDtBQUVuQixNQUFNSyxVQUFVO1FBQUMsRUFBRUMseUJBQXlCLEVBQUVDLEdBQUcsRUFBRUMsdUJBQXVCLEVBQUVDLFFBQVEsRUFBRTtJQUNwRiw0REFBNEQ7SUFDNUQsTUFBTUMscUJBQXFCRCxZQUFZUiwyREFBaUJBLENBQUNNLEtBQUtDLHlCQUF5QkY7SUFDdkYsTUFBTUssZ0JBQWdCSixPQUFPTCxzREFBWUEsQ0FBQ00seUJBQXlCRSxvQkFBb0JKO0lBQ3ZGLE1BQU1NLG9DQUNKSiwyQkFBMkJMLDBFQUFnQ0EsQ0FBQ1EsZUFBZUQsb0JBQW9CSjtJQUNqRyxNQUFNTyxzQ0FDSlAsNkJBQ0FGLDRFQUFrQ0EsQ0FBQ08sZUFBZUMsbUNBQW1DRjtJQUV2Riw0QkFBNEI7SUFDNUIsTUFBTUksaUJBQWlCO1FBQUM7UUFBSztRQUFHO1FBQUs7UUFBRztRQUFLO1FBQUc7UUFBSTtRQUFJO0tBQUc7SUFFM0QseUNBQXlDO0lBQ3pDLE1BQU1DLGtCQUFrQkQsZUFBZUUsTUFBTSxDQUFDLENBQUNDLE1BQU1DO1FBQ25ELE9BQU9DLEtBQUtDLEdBQUcsQ0FBQ0YsT0FBT1Isc0JBQXNCUyxLQUFLQyxHQUFHLENBQUNILE9BQU9QLHNCQUFzQlEsT0FBT0Q7SUFDNUY7SUFFQSxxQkFDRSw4REFBQ0k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBRTtvQkFBa0JYLG9DQUFvQ1ksT0FBTyxDQUFDO29CQUFHOzs7Ozs7OzBCQUNwRSw4REFBQ0Q7O29CQUFFO29CQUFNYjs7Ozs7OzswQkFDVCw4REFBQ2E7O29CQUFFO29CQUFrQlo7b0JBQWtDOzs7Ozs7OzBCQUN2RCw4REFBQ1k7O29CQUFFO29CQUFhVCxnQkFBZ0JVLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OztBQUc5QztLQTNCTXBCO0FBNkJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jlc3VsdHMuanM/ZjA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgY2FsY3VsYXRlQXBlcnR1cmUsXG4gIGNhbGN1bGF0ZUlTTyxcbiAgY2FsY3VsYXRlU2h1dHRlclNwZWVkRGVub21pbmF0b3IsXG4gIGNhbGN1bGF0ZU9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMsXG59IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IFJlc3VsdHMgPSAoeyBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzLCBpc28sIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBhcGVydHVyZSB9KSA9PiB7XG4gIC8vIENhbGN1bGF0ZSBtaXNzaW5nIHZhbHVlcyB1c2luZyBoZWxwZXIgZnVuY3Rpb25zIGlmIG5lZWRlZFxuICBjb25zdCBjYWxjdWxhdGVkQXBlcnR1cmUgPSBhcGVydHVyZSB8fCBjYWxjdWxhdGVBcGVydHVyZShpc28sIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKTtcbiAgY29uc3QgY2FsY3VsYXRlZElTTyA9IGlzbyB8fCBjYWxjdWxhdGVJU08oc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIGNhbGN1bGF0ZWRBcGVydHVyZSwgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyk7XG4gIGNvbnN0IGNhbGN1bGF0ZWRTaHV0dGVyU3BlZWREZW5vbWluYXRvciA9XG4gICAgc2h1dHRlclNwZWVkRGVub21pbmF0b3IgfHwgY2FsY3VsYXRlU2h1dHRlclNwZWVkRGVub21pbmF0b3IoY2FsY3VsYXRlZElTTywgY2FsY3VsYXRlZEFwZXJ0dXJlLCBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKTtcbiAgY29uc3QgY2FsY3VsYXRlZE9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgPVxuICAgIG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgfHxcbiAgICBjYWxjdWxhdGVPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKGNhbGN1bGF0ZWRJU08sIGNhbGN1bGF0ZWRTaHV0dGVyU3BlZWREZW5vbWluYXRvciwgY2FsY3VsYXRlZEFwZXJ0dXJlKTtcblxuICAvLyBBcnJheSBvZiBzdGFuZGFyZCBmLXN0b3BzXG4gIGNvbnN0IHN0YW5kYXJkRnN0b3BzID0gWzEuNCwgMiwgMi44LCA0LCA1LjYsIDgsIDExLCAxNiwgMjJdO1xuXG4gIC8vIEZpbmQgdGhlIG5lYXJlc3Qgc3RhbmRhcmQgZi1zdG9wIHZhbHVlXG4gIGNvbnN0IG5lYXJlc3RBcGVydHVyZSA9IHN0YW5kYXJkRnN0b3BzLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgIHJldHVybiBNYXRoLmFicyhjdXJyIC0gY2FsY3VsYXRlZEFwZXJ0dXJlKSA8IE1hdGguYWJzKHByZXYgLSBjYWxjdWxhdGVkQXBlcnR1cmUpID8gY3VyciA6IHByZXY7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzLWNvbnRhaW5lclwiPlxuICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgPHA+T2JqZWN0IERpc3RhbmNlOiB7Y2FsY3VsYXRlZE9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMudG9GaXhlZCgyKX0gbWlsbGltZXRlcnM8L3A+XG4gICAgICA8cD5JU086IHtjYWxjdWxhdGVkSVNPfTwvcD5cbiAgICAgIDxwPlNodXR0ZXIgU3BlZWQ6IDEve2NhbGN1bGF0ZWRTaHV0dGVyU3BlZWREZW5vbWluYXRvcn0gc2Vjb25kczwvcD5cbiAgICAgIDxwPkFwZXJ0dXJlOiBmL3tuZWFyZXN0QXBlcnR1cmUudG9GaXhlZCgxKX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzOyJdLCJuYW1lcyI6WyJSZWFjdCIsImNhbGN1bGF0ZUFwZXJ0dXJlIiwiY2FsY3VsYXRlSVNPIiwiY2FsY3VsYXRlU2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJjYWxjdWxhdGVPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwiUmVzdWx0cyIsIm9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMiLCJpc28iLCJzaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwiY2FsY3VsYXRlZEFwZXJ0dXJlIiwiY2FsY3VsYXRlZElTTyIsImNhbGN1bGF0ZWRTaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImNhbGN1bGF0ZWRPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwic3RhbmRhcmRGc3RvcHMiLCJuZWFyZXN0QXBlcnR1cmUiLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsIk1hdGgiLCJhYnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJ0b0ZpeGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});