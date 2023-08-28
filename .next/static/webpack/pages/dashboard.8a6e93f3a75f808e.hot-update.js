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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.js\");\n\n\n\nconst Results = (param)=>{\n    let { objectDistanceFeet, iso, shutterSpeedDenominator, aperture } = param;\n    const objectDistanceMillimeters = objectDistanceFeet * 304.8; // Convert feet to millimeters\n    const calculatedAperture = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateAperture)(iso, shutterSpeedDenominator, objectDistanceMillimeters);\n    // Convert entered ISO to the nearest standard ISO value\n    const standardISOs = [\n        100,\n        200,\n        400,\n        800,\n        1600,\n        3200,\n        6400\n    ];\n    const nearestISO = standardISOs.reduce((prev, curr)=>{\n        const prevDiff = Math.abs(prev - iso);\n        const currDiff = Math.abs(curr - iso);\n        return currDiff < prevDiff ? curr : prev;\n    });\n    const calculatedISO = nearestISO; // Use the nearest standard ISO value\n    // Calculate aperture based on the formula sAperture = -ln(Aperture) / ln(√2)\n    const calculatedApertureValue = -Math.log(aperture) / Math.log(Math.sqrt(2));\n    const standardFstops = [\n        1.4,\n        2,\n        2.8,\n        4,\n        5.6,\n        8,\n        11,\n        16,\n        22\n    ];\n    // Find the nearest aperture value from the standardFstops array\n    const nearestAperture = standardFstops.reduce((prev, curr)=>{\n        const prevDiff = Math.abs(prev - calculatedApertureValue);\n        const currDiff = Math.abs(curr - calculatedApertureValue);\n        return currDiff < prevDiff ? curr : prev;\n    });\n    const containerStyle = {\n        backgroundColor: objectDistanceMillimeters > 0 && iso > 0 && shutterSpeedDenominator > 0 && aperture > 0 ? \"green\" : \"red\",\n        padding: \"10px\",\n        borderRadius: \"5px\",\n        boxShadow: \"0px 0px 5px rgba(0, 0, 0, 0.5)\",\n        color: \"white\",\n        textAlign: \"center\",\n        float: \"right\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    objectDistanceMillimeters.toFixed(2),\n                    \" millimeters\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    calculatedISO\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: \",\n                    shutterSpeedDenominator\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Aperture: f/\",\n                    nearestAperture.toFixed(1)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            objectDistanceMillimeters > 0 && iso > 0 && shutterSpeedDenominator > 0 && aperture > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Inputs Valid\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Invalid Inputs\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUQ7QUFDK0U7QUFFbEksTUFBTU8sVUFBVTtRQUFDLEVBQUVDLGtCQUFrQixFQUFFQyxHQUFHLEVBQUVDLHVCQUF1QixFQUFFQyxRQUFRLEVBQUU7SUFDN0UsTUFBTUMsNEJBQTRCSixxQkFBcUIsT0FBTyw4QkFBOEI7SUFDNUYsTUFBTUsscUJBQXFCViwyREFBaUJBLENBQUNNLEtBQUtDLHlCQUF5QkU7SUFFM0Usd0RBQXdEO0lBQ3hELE1BQU1FLGVBQWU7UUFBQztRQUFLO1FBQUs7UUFBSztRQUFLO1FBQU07UUFBTTtLQUFLO0lBQzNELE1BQU1DLGFBQWFELGFBQWFFLE1BQU0sQ0FBQyxDQUFDQyxNQUFNQztRQUM1QyxNQUFNQyxXQUFXQyxLQUFLQyxHQUFHLENBQUNKLE9BQU9SO1FBQ2pDLE1BQU1hLFdBQVdGLEtBQUtDLEdBQUcsQ0FBQ0gsT0FBT1Q7UUFDakMsT0FBT2EsV0FBV0gsV0FBV0QsT0FBT0Q7SUFDdEM7SUFFQSxNQUFNTSxnQkFBZ0JSLFlBQVkscUNBQXFDO0lBRXZFLDZFQUE2RTtJQUM3RSxNQUFNUywwQkFBMEIsQ0FBQ0osS0FBS0ssR0FBRyxDQUFDZCxZQUFZUyxLQUFLSyxHQUFHLENBQUNMLEtBQUtNLElBQUksQ0FBQztJQUV6RSxNQUFNQyxpQkFBaUI7UUFBQztRQUFLO1FBQUc7UUFBSztRQUFHO1FBQUs7UUFBRztRQUFJO1FBQUk7S0FBRztJQUUzRCxnRUFBZ0U7SUFDaEUsTUFBTUMsa0JBQWtCRCxlQUFlWCxNQUFNLENBQUMsQ0FBQ0MsTUFBTUM7UUFDbkQsTUFBTUMsV0FBV0MsS0FBS0MsR0FBRyxDQUFDSixPQUFPTztRQUNqQyxNQUFNRixXQUFXRixLQUFLQyxHQUFHLENBQUNILE9BQU9NO1FBQ2pDLE9BQU9GLFdBQVdILFdBQVdELE9BQU9EO0lBQ3RDO0lBRUEsTUFBTVksaUJBQWlCO1FBQ3JCQyxpQkFBaUJsQiw0QkFBNEIsS0FBS0gsTUFBTSxLQUFLQywwQkFBMEIsS0FBS0MsV0FBVyxJQUFJLFVBQVU7UUFDckhvQixTQUFTO1FBQ1RDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxPQUFPO1FBQ1BDLFdBQVc7UUFDWEMsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU9UOzswQkFDViw4REFBQ1U7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFFO29CQUFrQjVCLDBCQUEwQjZCLE9BQU8sQ0FBQztvQkFBRzs7Ozs7OzswQkFDMUQsOERBQUNEOztvQkFBRTtvQkFBTWpCOzs7Ozs7O1lBQWtCOzBCQUMzQiw4REFBQ2lCOztvQkFBRTtvQkFBZ0I5Qjs7Ozs7OzswQkFDbkIsOERBQUM4Qjs7b0JBQUU7b0JBQWFaLGdCQUFnQmEsT0FBTyxDQUFDOzs7Ozs7O1lBQ3ZDN0IsNEJBQTRCLEtBQUtILE1BQU0sS0FBS0MsMEJBQTBCLEtBQUtDLFdBQVcsa0JBQ3JGLDhEQUFDNkI7MEJBQUU7Ozs7OzBDQUVILDhEQUFDQTswQkFBRTs7Ozs7Ozs7Ozs7O0FBSVg7S0FsRE1qQztBQW9ETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzP2YwOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjYWxjdWxhdGVBcGVydHVyZSwgY2FsY3VsYXRlSVNPLCBjYWxjdWxhdGVTaHV0dGVyU3BlZWREZW5vbWluYXRvciwgY2FsY3VsYXRlT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyB9IGZyb20gJy4vaGVscGVycyc7XG5cbmNvbnN0IFJlc3VsdHMgPSAoeyBvYmplY3REaXN0YW5jZUZlZXQsIGlzbywgc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIGFwZXJ0dXJlIH0pID0+IHtcbiAgY29uc3Qgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyA9IG9iamVjdERpc3RhbmNlRmVldCAqIDMwNC44OyAvLyBDb252ZXJ0IGZlZXQgdG8gbWlsbGltZXRlcnNcbiAgY29uc3QgY2FsY3VsYXRlZEFwZXJ0dXJlID0gY2FsY3VsYXRlQXBlcnR1cmUoaXNvLCBzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyk7XG5cbiAgLy8gQ29udmVydCBlbnRlcmVkIElTTyB0byB0aGUgbmVhcmVzdCBzdGFuZGFyZCBJU08gdmFsdWVcbiAgY29uc3Qgc3RhbmRhcmRJU09zID0gWzEwMCwgMjAwLCA0MDAsIDgwMCwgMTYwMCwgMzIwMCwgNjQwMF07XG4gIGNvbnN0IG5lYXJlc3RJU08gPSBzdGFuZGFyZElTT3MucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgY29uc3QgcHJldkRpZmYgPSBNYXRoLmFicyhwcmV2IC0gaXNvKTtcbiAgICBjb25zdCBjdXJyRGlmZiA9IE1hdGguYWJzKGN1cnIgLSBpc28pO1xuICAgIHJldHVybiBjdXJyRGlmZiA8IHByZXZEaWZmID8gY3VyciA6IHByZXY7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbGN1bGF0ZWRJU08gPSBuZWFyZXN0SVNPOyAvLyBVc2UgdGhlIG5lYXJlc3Qgc3RhbmRhcmQgSVNPIHZhbHVlXG5cbiAgLy8gQ2FsY3VsYXRlIGFwZXJ0dXJlIGJhc2VkIG9uIHRoZSBmb3JtdWxhIHNBcGVydHVyZSA9IC1sbihBcGVydHVyZSkgLyBsbijiiJoyKVxuICBjb25zdCBjYWxjdWxhdGVkQXBlcnR1cmVWYWx1ZSA9IC1NYXRoLmxvZyhhcGVydHVyZSkgLyBNYXRoLmxvZyhNYXRoLnNxcnQoMikpO1xuXG4gIGNvbnN0IHN0YW5kYXJkRnN0b3BzID0gWzEuNCwgMiwgMi44LCA0LCA1LjYsIDgsIDExLCAxNiwgMjJdO1xuXG4gIC8vIEZpbmQgdGhlIG5lYXJlc3QgYXBlcnR1cmUgdmFsdWUgZnJvbSB0aGUgc3RhbmRhcmRGc3RvcHMgYXJyYXlcbiAgY29uc3QgbmVhcmVzdEFwZXJ0dXJlID0gc3RhbmRhcmRGc3RvcHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gICAgY29uc3QgcHJldkRpZmYgPSBNYXRoLmFicyhwcmV2IC0gY2FsY3VsYXRlZEFwZXJ0dXJlVmFsdWUpO1xuICAgIGNvbnN0IGN1cnJEaWZmID0gTWF0aC5hYnMoY3VyciAtIGNhbGN1bGF0ZWRBcGVydHVyZVZhbHVlKTtcbiAgICByZXR1cm4gY3VyckRpZmYgPCBwcmV2RGlmZiA/IGN1cnIgOiBwcmV2O1xuICB9KTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgPiAwICYmIGlzbyA+IDAgJiYgc2h1dHRlclNwZWVkRGVub21pbmF0b3IgPiAwICYmIGFwZXJ0dXJlID4gMCA/ICdncmVlbicgOiAncmVkJyxcbiAgICBwYWRkaW5nOiAnMTBweCcsXG4gICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgZmxvYXQ6ICdyaWdodCcsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICA8cD5PYmplY3QgRGlzdGFuY2U6IHtvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzLnRvRml4ZWQoMil9IG1pbGxpbWV0ZXJzPC9wPlxuICAgICAgPHA+SVNPOiB7Y2FsY3VsYXRlZElTT308L3A+IHsvKiBEaXNwbGF5IHRoZSBjYWxjdWxhdGVkSVNPIHZhbHVlICovfVxuICAgICAgPHA+U2h1dHRlciBTcGVlZDoge3NodXR0ZXJTcGVlZERlbm9taW5hdG9yfTwvcD5cbiAgICAgIDxwPkFwZXJ0dXJlOiBmL3tuZWFyZXN0QXBlcnR1cmUudG9GaXhlZCgxKX08L3A+XG4gICAgICB7b2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyA+IDAgJiYgaXNvID4gMCAmJiBzaHV0dGVyU3BlZWREZW5vbWluYXRvciA+IDAgJiYgYXBlcnR1cmUgPiAwID8gKFxuICAgICAgICA8cD5JbnB1dHMgVmFsaWQ8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8cD5JbnZhbGlkIElucHV0czwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJjYWxjdWxhdGVBcGVydHVyZSIsImNhbGN1bGF0ZUlTTyIsImNhbGN1bGF0ZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiY2FsY3VsYXRlT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyIsIlJlc3VsdHMiLCJvYmplY3REaXN0YW5jZUZlZXQiLCJpc28iLCJzaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwib2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyIsImNhbGN1bGF0ZWRBcGVydHVyZSIsInN0YW5kYXJkSVNPcyIsIm5lYXJlc3RJU08iLCJyZWR1Y2UiLCJwcmV2IiwiY3VyciIsInByZXZEaWZmIiwiTWF0aCIsImFicyIsImN1cnJEaWZmIiwiY2FsY3VsYXRlZElTTyIsImNhbGN1bGF0ZWRBcGVydHVyZVZhbHVlIiwibG9nIiwic3FydCIsInN0YW5kYXJkRnN0b3BzIiwibmVhcmVzdEFwZXJ0dXJlIiwiY29udGFpbmVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJmbG9hdCIsImRpdiIsInN0eWxlIiwiaDIiLCJwIiwidG9GaXhlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});