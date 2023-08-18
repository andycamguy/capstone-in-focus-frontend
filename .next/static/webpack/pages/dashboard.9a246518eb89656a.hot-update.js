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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Results = (param)=>{\n    let { objectDistanceFeet, iso, shutterSpeedDenominator, aperture } = param;\n    // Convert object distance from feet to millimeters\n    const objectDistanceMillimeters = objectDistanceFeet * 304.8; // 1 foot = 304.8 millimeters\n    // Calculate aperture\n    let calculatedAperture = aperture;\n    if (!calculatedAperture && iso && shutterSpeedDenominator && objectDistanceMillimeters) {\n        const shutterSpeedDecimal = 1 / shutterSpeedDenominator;\n        calculatedAperture = Math.sqrt(iso * shutterSpeedDecimal / (objectDistanceMillimeters * objectDistanceMillimeters * 2)).toFixed(2);\n    }\n    // Calculate ISO\n    let calculatedIso = iso;\n    if (!calculatedIso && aperture && shutterSpeedDenominator && objectDistanceMillimeters) {\n        const shutterSpeedDecimal = 1 / shutterSpeedDenominator;\n        calculatedIso = aperture * aperture * 2 * objectDistanceMillimeters / shutterSpeedDecimal;\n    }\n    // Calculate object distance\n    let calculatedObjectDistanceMillimeters = objectDistanceMillimeters;\n    if (!calculatedObjectDistanceMillimeters && aperture && iso && shutterSpeedDenominator) {\n        const shutterSpeedDecimal = 1 / shutterSpeedDenominator;\n        calculatedObjectDistanceMillimeters = Math.sqrt(iso * shutterSpeedDecimal / (aperture * aperture * 2));\n    }\n    // Convert calculated object distance back to feet\n    const calculatedObjectDistanceFeet = calculatedObjectDistanceMillimeters / 304.8;\n    // ... rest of your code\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"results-container \".concat(bgColor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    calculatedObjectDistanceFeet.toFixed(2),\n                    \" feet\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    calculatedIso.toFixed(0)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: 1/\",\n                    shutterSpeedDenominator,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Calculated Aperture: \",\n                    calculatedAperture === aperture ? \"f/\".concat(calculatedAperture) : \"N/A\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVO1FBQUMsRUFBRUMsa0JBQWtCLEVBQUVDLEdBQUcsRUFBRUMsdUJBQXVCLEVBQUVDLFFBQVEsRUFBRTtJQUM3RSxtREFBbUQ7SUFDbkQsTUFBTUMsNEJBQTRCSixxQkFBcUIsT0FBTyw2QkFBNkI7SUFFM0YscUJBQXFCO0lBQ3JCLElBQUlLLHFCQUFxQkY7SUFFekIsSUFBSSxDQUFDRSxzQkFBc0JKLE9BQU9DLDJCQUEyQkUsMkJBQTJCO1FBQ3RGLE1BQU1FLHNCQUFzQixJQUFJSjtRQUNoQ0cscUJBQXFCRSxLQUFLQyxJQUFJLENBQUMsTUFBT0Ysc0JBQXdCRixDQUFBQSw0QkFBNEJBLDRCQUE0QixJQUFJSyxPQUFPLENBQUM7SUFDcEk7SUFFQSxnQkFBZ0I7SUFDaEIsSUFBSUMsZ0JBQWdCVDtJQUVwQixJQUFJLENBQUNTLGlCQUFpQlAsWUFBWUQsMkJBQTJCRSwyQkFBMkI7UUFDdEYsTUFBTUUsc0JBQXNCLElBQUlKO1FBQ2hDUSxnQkFBZ0IsV0FBWVAsV0FBVyxJQUFJQyw0QkFBNkJFO0lBQzFFO0lBRUEsNEJBQTRCO0lBQzVCLElBQUlLLHNDQUFzQ1A7SUFFMUMsSUFBSSxDQUFDTyx1Q0FBdUNSLFlBQVlGLE9BQU9DLHlCQUF5QjtRQUN0RixNQUFNSSxzQkFBc0IsSUFBSUo7UUFDaENTLHNDQUFzQ0osS0FBS0MsSUFBSSxDQUFDLE1BQU9GLHNCQUF3QkgsQ0FBQUEsV0FBV0EsV0FBVztJQUN2RztJQUVBLGtEQUFrRDtJQUNsRCxNQUFNUywrQkFBK0JELHNDQUFzQztJQUUzRSx3QkFBd0I7SUFFeEIscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVcscUJBQTZCLE9BQVJDOzswQkFDbkMsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOztvQkFBRTtvQkFBa0JMLDZCQUE2QkgsT0FBTyxDQUFDO29CQUFHOzs7Ozs7OzBCQUM3RCw4REFBQ1E7O29CQUFFO29CQUFNUCxjQUFjRCxPQUFPLENBQUM7Ozs7Ozs7MEJBQy9CLDhEQUFDUTs7b0JBQUU7b0JBQWtCZjtvQkFBd0I7Ozs7Ozs7MEJBQzdDLDhEQUFDZTs7b0JBQUU7b0JBQXNCWix1QkFBdUJGLFdBQVcsS0FBd0IsT0FBbkJFLHNCQUF1Qjs7Ozs7Ozs7Ozs7OztBQUc3RjtLQTFDTU47QUE0Q04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0cy5qcz9mMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJlc3VsdHMgPSAoeyBvYmplY3REaXN0YW5jZUZlZXQsIGlzbywgc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIGFwZXJ0dXJlIH0pID0+IHtcbiAgLy8gQ29udmVydCBvYmplY3QgZGlzdGFuY2UgZnJvbSBmZWV0IHRvIG1pbGxpbWV0ZXJzXG4gIGNvbnN0IG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgPSBvYmplY3REaXN0YW5jZUZlZXQgKiAzMDQuODsgLy8gMSBmb290ID0gMzA0LjggbWlsbGltZXRlcnNcblxuICAvLyBDYWxjdWxhdGUgYXBlcnR1cmVcbiAgbGV0IGNhbGN1bGF0ZWRBcGVydHVyZSA9IGFwZXJ0dXJlO1xuXG4gIGlmICghY2FsY3VsYXRlZEFwZXJ0dXJlICYmIGlzbyAmJiBzaHV0dGVyU3BlZWREZW5vbWluYXRvciAmJiBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKSB7XG4gICAgY29uc3Qgc2h1dHRlclNwZWVkRGVjaW1hbCA9IDEgLyBzaHV0dGVyU3BlZWREZW5vbWluYXRvcjtcbiAgICBjYWxjdWxhdGVkQXBlcnR1cmUgPSBNYXRoLnNxcnQoKGlzbyAqIHNodXR0ZXJTcGVlZERlY2ltYWwpIC8gKG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgKiBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzICogMikpLnRvRml4ZWQoMik7XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgSVNPXG4gIGxldCBjYWxjdWxhdGVkSXNvID0gaXNvO1xuXG4gIGlmICghY2FsY3VsYXRlZElzbyAmJiBhcGVydHVyZSAmJiBzaHV0dGVyU3BlZWREZW5vbWluYXRvciAmJiBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKSB7XG4gICAgY29uc3Qgc2h1dHRlclNwZWVkRGVjaW1hbCA9IDEgLyBzaHV0dGVyU3BlZWREZW5vbWluYXRvcjtcbiAgICBjYWxjdWxhdGVkSXNvID0gKGFwZXJ0dXJlICogYXBlcnR1cmUgKiAyICogb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycykgLyBzaHV0dGVyU3BlZWREZWNpbWFsO1xuICB9XG5cbiAgLy8gQ2FsY3VsYXRlIG9iamVjdCBkaXN0YW5jZVxuICBsZXQgY2FsY3VsYXRlZE9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgPSBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzO1xuXG4gIGlmICghY2FsY3VsYXRlZE9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgJiYgYXBlcnR1cmUgJiYgaXNvICYmIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yKSB7XG4gICAgY29uc3Qgc2h1dHRlclNwZWVkRGVjaW1hbCA9IDEgLyBzaHV0dGVyU3BlZWREZW5vbWluYXRvcjtcbiAgICBjYWxjdWxhdGVkT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyA9IE1hdGguc3FydCgoaXNvICogc2h1dHRlclNwZWVkRGVjaW1hbCkgLyAoYXBlcnR1cmUgKiBhcGVydHVyZSAqIDIpKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgY2FsY3VsYXRlZCBvYmplY3QgZGlzdGFuY2UgYmFjayB0byBmZWV0XG4gIGNvbnN0IGNhbGN1bGF0ZWRPYmplY3REaXN0YW5jZUZlZXQgPSBjYWxjdWxhdGVkT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyAvIDMwNC44O1xuXG4gIC8vIC4uLiByZXN0IG9mIHlvdXIgY29kZVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2ByZXN1bHRzLWNvbnRhaW5lciAke2JnQ29sb3J9YH0+XG4gICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICA8cD5PYmplY3QgRGlzdGFuY2U6IHtjYWxjdWxhdGVkT2JqZWN0RGlzdGFuY2VGZWV0LnRvRml4ZWQoMil9IGZlZXQ8L3A+XG4gICAgICA8cD5JU086IHtjYWxjdWxhdGVkSXNvLnRvRml4ZWQoMCl9PC9wPlxuICAgICAgPHA+U2h1dHRlciBTcGVlZDogMS97c2h1dHRlclNwZWVkRGVub21pbmF0b3J9IHNlY29uZHM8L3A+XG4gICAgICA8cD5DYWxjdWxhdGVkIEFwZXJ0dXJlOiB7Y2FsY3VsYXRlZEFwZXJ0dXJlID09PSBhcGVydHVyZSA/IGBmLyR7Y2FsY3VsYXRlZEFwZXJ0dXJlfWAgOiAnTi9BJ308L3A+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVzdWx0cyIsIm9iamVjdERpc3RhbmNlRmVldCIsImlzbyIsInNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiYXBlcnR1cmUiLCJvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwiY2FsY3VsYXRlZEFwZXJ0dXJlIiwic2h1dHRlclNwZWVkRGVjaW1hbCIsIk1hdGgiLCJzcXJ0IiwidG9GaXhlZCIsImNhbGN1bGF0ZWRJc28iLCJjYWxjdWxhdGVkT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyIsImNhbGN1bGF0ZWRPYmplY3REaXN0YW5jZUZlZXQiLCJkaXYiLCJjbGFzc05hbWUiLCJiZ0NvbG9yIiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});