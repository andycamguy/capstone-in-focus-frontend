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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// Results.js\n\n\nconst Results = (param)=>{\n    let { objectDistanceFeet, iso, shutterSpeedDenominator, aperture } = param;\n    // Convert object distance from feet to millimeters\n    const objectDistanceMillimeters = objectDistanceFeet * 304.8; // 1 foot = 304.8 millimeters\n    // Array of standard ISO numbers\n    const standardIsoNumbers = [\n        25,\n        50,\n        100,\n        200,\n        400,\n        800,\n        1600,\n        3200,\n        6400,\n        12800,\n        25600\n    ];\n    // Calculate the nearest ISO value based on the input ISO\n    const nearestIso = standardIsoNumbers.reduce((prev, curr)=>{\n        return Math.abs(curr - iso) < Math.abs(prev - iso) ? curr : prev;\n    });\n    // Calculate the aperture based on the formula: aperture = sqrt((iso * shutterSpeed) / (objectDistance * 2))\n    const shutterSpeedDecimal = 1 / shutterSpeedDenominator;\n    const calculatedAperture = Math.sqrt(iso * shutterSpeedDecimal / (objectDistanceMillimeters * 2)).toFixed(2);\n    // Check if calculated values match provided values\n    let bgColor = \"bg-green\"; // Default to green background\n    if (aperture && calculatedAperture !== aperture) {\n        bgColor = \"bg-red\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"results-container \".concat(bgColor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    objectDistanceMillimeters.toFixed(2),\n                    \" millimeters\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    nearestIso\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: 1/\",\n                    shutterSpeedDenominator,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Calculated Aperture: \",\n                    calculatedAperture !== \"NaN\" ? \"f/\".concat(calculatedAperture) : \"N/A\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsYUFBYTs7QUFDYTtBQUUxQixNQUFNQyxVQUFVO1FBQUMsRUFBRUMsa0JBQWtCLEVBQUVDLEdBQUcsRUFBRUMsdUJBQXVCLEVBQUVDLFFBQVEsRUFBRTtJQUM3RSxtREFBbUQ7SUFDbkQsTUFBTUMsNEJBQTRCSixxQkFBcUIsT0FBTyw2QkFBNkI7SUFFM0YsZ0NBQWdDO0lBQ2hDLE1BQU1LLHFCQUFxQjtRQUFDO1FBQUk7UUFBSTtRQUFLO1FBQUs7UUFBSztRQUFLO1FBQU07UUFBTTtRQUFNO1FBQU87S0FBTTtJQUV2Rix5REFBeUQ7SUFDekQsTUFBTUMsYUFBYUQsbUJBQW1CRSxNQUFNLENBQUMsQ0FBQ0MsTUFBTUM7UUFDbEQsT0FBT0MsS0FBS0MsR0FBRyxDQUFDRixPQUFPUixPQUFPUyxLQUFLQyxHQUFHLENBQUNILE9BQU9QLE9BQU9RLE9BQU9EO0lBQzlEO0lBRUEsNEdBQTRHO0lBQzVHLE1BQU1JLHNCQUFzQixJQUFJVjtJQUNoQyxNQUFNVyxxQkFBcUJILEtBQUtJLElBQUksQ0FBQyxNQUFPRixzQkFBd0JSLENBQUFBLDRCQUE0QixJQUFJVyxPQUFPLENBQUM7SUFFNUcsbURBQW1EO0lBQ25ELElBQUlDLFVBQVUsWUFBWSw4QkFBOEI7SUFFeEQsSUFBSWIsWUFBWVUsdUJBQXVCVixVQUFVO1FBQy9DYSxVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxxQkFBNkIsT0FBUkY7OzBCQUNuQyw4REFBQ0c7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFFO29CQUFrQmhCLDBCQUEwQlcsT0FBTyxDQUFDO29CQUFHOzs7Ozs7OzBCQUMxRCw4REFBQ0s7O29CQUFFO29CQUFNZDs7Ozs7OzswQkFDVCw4REFBQ2M7O29CQUFFO29CQUFrQmxCO29CQUF3Qjs7Ozs7OzswQkFDN0MsOERBQUNrQjs7b0JBQUU7b0JBQXNCUCx1QkFBdUIsUUFBUSxLQUF3QixPQUFuQkEsc0JBQXVCOzs7Ozs7Ozs7Ozs7O0FBRzFGO0tBaENNZDtBQWtDTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzP2YwOTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVzdWx0cy5qc1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUmVzdWx0cyA9ICh7IG9iamVjdERpc3RhbmNlRmVldCwgaXNvLCBzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgYXBlcnR1cmUgfSkgPT4ge1xuICAvLyBDb252ZXJ0IG9iamVjdCBkaXN0YW5jZSBmcm9tIGZlZXQgdG8gbWlsbGltZXRlcnNcbiAgY29uc3Qgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyA9IG9iamVjdERpc3RhbmNlRmVldCAqIDMwNC44OyAvLyAxIGZvb3QgPSAzMDQuOCBtaWxsaW1ldGVyc1xuXG4gIC8vIEFycmF5IG9mIHN0YW5kYXJkIElTTyBudW1iZXJzXG4gIGNvbnN0IHN0YW5kYXJkSXNvTnVtYmVycyA9IFsyNSwgNTAsIDEwMCwgMjAwLCA0MDAsIDgwMCwgMTYwMCwgMzIwMCwgNjQwMCwgMTI4MDAsIDI1NjAwXTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIG5lYXJlc3QgSVNPIHZhbHVlIGJhc2VkIG9uIHRoZSBpbnB1dCBJU09cbiAgY29uc3QgbmVhcmVzdElzbyA9IHN0YW5kYXJkSXNvTnVtYmVycy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5hYnMoY3VyciAtIGlzbykgPCBNYXRoLmFicyhwcmV2IC0gaXNvKSA/IGN1cnIgOiBwcmV2O1xuICB9KTtcblxuICAvLyBDYWxjdWxhdGUgdGhlIGFwZXJ0dXJlIGJhc2VkIG9uIHRoZSBmb3JtdWxhOiBhcGVydHVyZSA9IHNxcnQoKGlzbyAqIHNodXR0ZXJTcGVlZCkgLyAob2JqZWN0RGlzdGFuY2UgKiAyKSlcbiAgY29uc3Qgc2h1dHRlclNwZWVkRGVjaW1hbCA9IDEgLyBzaHV0dGVyU3BlZWREZW5vbWluYXRvcjtcbiAgY29uc3QgY2FsY3VsYXRlZEFwZXJ0dXJlID0gTWF0aC5zcXJ0KChpc28gKiBzaHV0dGVyU3BlZWREZWNpbWFsKSAvIChvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzICogMikpLnRvRml4ZWQoMik7XG5cbiAgLy8gQ2hlY2sgaWYgY2FsY3VsYXRlZCB2YWx1ZXMgbWF0Y2ggcHJvdmlkZWQgdmFsdWVzXG4gIGxldCBiZ0NvbG9yID0gJ2JnLWdyZWVuJzsgLy8gRGVmYXVsdCB0byBncmVlbiBiYWNrZ3JvdW5kXG5cbiAgaWYgKGFwZXJ0dXJlICYmIGNhbGN1bGF0ZWRBcGVydHVyZSAhPT0gYXBlcnR1cmUpIHtcbiAgICBiZ0NvbG9yID0gJ2JnLXJlZCc7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgcmVzdWx0cy1jb250YWluZXIgJHtiZ0NvbG9yfWB9PlxuICAgICAgPGgyPlJlc3VsdHM8L2gyPlxuICAgICAgPHA+T2JqZWN0IERpc3RhbmNlOiB7b2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycy50b0ZpeGVkKDIpfSBtaWxsaW1ldGVyczwvcD5cbiAgICAgIDxwPklTTzoge25lYXJlc3RJc299PC9wPlxuICAgICAgPHA+U2h1dHRlciBTcGVlZDogMS97c2h1dHRlclNwZWVkRGVub21pbmF0b3J9IHNlY29uZHM8L3A+XG4gICAgICA8cD5DYWxjdWxhdGVkIEFwZXJ0dXJlOiB7Y2FsY3VsYXRlZEFwZXJ0dXJlICE9PSAnTmFOJyA/IGBmLyR7Y2FsY3VsYXRlZEFwZXJ0dXJlfWAgOiAnTi9BJ308L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVzdWx0cyIsIm9iamVjdERpc3RhbmNlRmVldCIsImlzbyIsInNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiYXBlcnR1cmUiLCJvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwic3RhbmRhcmRJc29OdW1iZXJzIiwibmVhcmVzdElzbyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiTWF0aCIsImFicyIsInNodXR0ZXJTcGVlZERlY2ltYWwiLCJjYWxjdWxhdGVkQXBlcnR1cmUiLCJzcXJ0IiwidG9GaXhlZCIsImJnQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});