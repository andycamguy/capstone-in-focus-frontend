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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Results = (param)=>{\n    let { objectDistance, iso, shutterSpeedDenominator, aperture } = param;\n    let calculatedAperture = aperture;\n    let calculatedIso = iso;\n    let calculatedObjectDistance = objectDistance;\n    let bgColor = \"bg-green\"; // Default to green background\n    // Calculate values if missing\n    // ...\n    // Check if calculated values match provided values\n    if (calculatedAperture && calculatedAperture !== aperture || calculatedIso && calculatedIso !== iso || calculatedObjectDistance && calculatedObjectDistance !== objectDistance) {\n        bgColor = \"bg-red\"; // Set background color to red\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"results-container \".concat(bgColor),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    calculatedObjectDistance,\n                    \" feet\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    calculatedIso\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: 1/\",\n                    shutterSpeedDenominator,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Calculated Aperture: \",\n                    calculatedAperture === aperture ? \"f/\".concat(calculatedAperture) : \"N/A\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxVQUFVO1FBQUMsRUFBRUMsY0FBYyxFQUFFQyxHQUFHLEVBQUVDLHVCQUF1QixFQUFFQyxRQUFRLEVBQUU7SUFDekUsSUFBSUMscUJBQXFCRDtJQUN6QixJQUFJRSxnQkFBZ0JKO0lBQ3BCLElBQUlLLDJCQUEyQk47SUFDL0IsSUFBSU8sVUFBVSxZQUFZLDhCQUE4QjtJQUV4RCw4QkFBOEI7SUFDOUIsTUFBTTtJQUVOLG1EQUFtRDtJQUNuRCxJQUNFLHNCQUF1QkgsdUJBQXVCRCxZQUM3Q0UsaUJBQWlCQSxrQkFBa0JKLE9BQ25DSyw0QkFBNEJBLDZCQUE2Qk4sZ0JBQzFEO1FBQ0FPLFVBQVUsVUFBVSw4QkFBOEI7SUFDcEQ7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVyxxQkFBNkIsT0FBUkY7OzBCQUNuQyw4REFBQ0c7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFFO29CQUFrQkw7b0JBQXlCOzs7Ozs7OzBCQUM5Qyw4REFBQ0s7O29CQUFFO29CQUFNTjs7Ozs7OzswQkFDVCw4REFBQ007O29CQUFFO29CQUFrQlQ7b0JBQXdCOzs7Ozs7OzBCQUM3Qyw4REFBQ1M7O29CQUFFO29CQUFzQlAsdUJBQXVCRCxXQUFXLEtBQXdCLE9BQW5CQyxzQkFBdUI7Ozs7Ozs7Ozs7Ozs7QUFHN0Y7S0EzQk1MO0FBNkJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Jlc3VsdHMuanM/ZjA5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXN1bHRzID0gKHsgb2JqZWN0RGlzdGFuY2UsIGlzbywgc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIGFwZXJ0dXJlIH0pID0+IHtcbiAgbGV0IGNhbGN1bGF0ZWRBcGVydHVyZSA9IGFwZXJ0dXJlO1xuICBsZXQgY2FsY3VsYXRlZElzbyA9IGlzbztcbiAgbGV0IGNhbGN1bGF0ZWRPYmplY3REaXN0YW5jZSA9IG9iamVjdERpc3RhbmNlO1xuICBsZXQgYmdDb2xvciA9ICdiZy1ncmVlbic7IC8vIERlZmF1bHQgdG8gZ3JlZW4gYmFja2dyb3VuZFxuXG4gIC8vIENhbGN1bGF0ZSB2YWx1ZXMgaWYgbWlzc2luZ1xuICAvLyAuLi5cblxuICAvLyBDaGVjayBpZiBjYWxjdWxhdGVkIHZhbHVlcyBtYXRjaCBwcm92aWRlZCB2YWx1ZXNcbiAgaWYgKFxuICAgIChjYWxjdWxhdGVkQXBlcnR1cmUgJiYgY2FsY3VsYXRlZEFwZXJ0dXJlICE9PSBhcGVydHVyZSkgfHxcbiAgICAoY2FsY3VsYXRlZElzbyAmJiBjYWxjdWxhdGVkSXNvICE9PSBpc28pIHx8XG4gICAgKGNhbGN1bGF0ZWRPYmplY3REaXN0YW5jZSAmJiBjYWxjdWxhdGVkT2JqZWN0RGlzdGFuY2UgIT09IG9iamVjdERpc3RhbmNlKVxuICApIHtcbiAgICBiZ0NvbG9yID0gJ2JnLXJlZCc7IC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHJlZFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHJlc3VsdHMtY29udGFpbmVyICR7YmdDb2xvcn1gfT5cbiAgICAgIDxoMj5SZXN1bHRzPC9oMj5cbiAgICAgIDxwPk9iamVjdCBEaXN0YW5jZToge2NhbGN1bGF0ZWRPYmplY3REaXN0YW5jZX0gZmVldDwvcD5cbiAgICAgIDxwPklTTzoge2NhbGN1bGF0ZWRJc299PC9wPlxuICAgICAgPHA+U2h1dHRlciBTcGVlZDogMS97c2h1dHRlclNwZWVkRGVub21pbmF0b3J9IDwvcD5cbiAgICAgIDxwPkNhbGN1bGF0ZWQgQXBlcnR1cmU6IHtjYWxjdWxhdGVkQXBlcnR1cmUgPT09IGFwZXJ0dXJlID8gYGYvJHtjYWxjdWxhdGVkQXBlcnR1cmV9YCA6ICdOL0EnfTwvcD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJSZXN1bHRzIiwib2JqZWN0RGlzdGFuY2UiLCJpc28iLCJzaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwiY2FsY3VsYXRlZEFwZXJ0dXJlIiwiY2FsY3VsYXRlZElzbyIsImNhbGN1bGF0ZWRPYmplY3REaXN0YW5jZSIsImJnQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});