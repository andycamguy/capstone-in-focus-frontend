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

/***/ "./src/components/CameraBody.js":
/*!**************************************!*\
  !*** ./src/components/CameraBody.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistance, setObjectDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const [shutterSpeedNumerator, setShutterSpeedNumerator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistance(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedNumeratorChange = (event)=>{\n        setShutterSpeedNumerator(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: objectDistance,\n                onChange: handleObjectDistanceChange,\n                placeholder: \"Object Distance\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: iso,\n                onChange: handleIsoChange,\n                placeholder: \"ISO\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: shutterSpeedNumerator,\n                onChange: handleShutterSpeedNumeratorChange,\n                placeholder: \"Shutter Speed Numerator\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"/\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: shutterSpeedDenominator,\n                onChange: handleShutterSpeedDenominatorChange,\n                placeholder: \"Shutter Speed Denominator\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: aperture,\n                onChange: handleApertureChange,\n                placeholder: \"Aperture\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                objectDistance: objectDistance,\n                iso: iso,\n                shutterSpeedFraction: {\n                    numerator: shutterSpeedNumerator,\n                    denominator: shutterSpeedDenominator\n                },\n                aperture: aperture\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"ZUuFSdamuBAkus5vbKN1veyA5kU=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYW1lcmFCb2R5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQ1I7QUFFaEMsTUFBTUcsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNLLEtBQUtDLE9BQU8sR0FBR04sK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDTyx1QkFBdUJDLHlCQUF5QixHQUFHUiwrQ0FBUUEsQ0FBQztJQUNuRSxNQUFNLENBQUNTLHlCQUF5QkMsMkJBQTJCLEdBQUdWLCtDQUFRQSxDQUFDLE1BQU0sbUJBQW1CO0lBQ2hHLE1BQU0sQ0FBQ1csVUFBVUMsWUFBWSxHQUFHWiwrQ0FBUUEsQ0FBQztJQUV6Qyx1QkFBdUI7SUFDdkIsTUFBTWEsNkJBQTZCLENBQUNDO1FBQ2xDVixrQkFBa0JXLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUNqRDtJQUVBLE1BQU1DLGtCQUFrQixDQUFDSjtRQUN2QlIsT0FBT2EsU0FBU0wsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDO0lBRUEsTUFBTUcsb0NBQW9DLENBQUNOO1FBQ3pDTix5QkFBeUJXLFNBQVNMLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUN0RDtJQUVBLE1BQU1JLHNDQUFzQyxDQUFDUDtRQUMzQ0osMkJBQTJCUyxTQUFTTCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7SUFDeEQ7SUFFQSxNQUFNSyx1QkFBdUIsQ0FBQ1I7UUFDNUJGLFlBQVlHLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUMzQztJQUVBLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFTVCxPQUFPZDtnQkFBZ0J3QixVQUFVZDtnQkFBNEJlLGFBQVk7Ozs7OzswQkFDOUYsOERBQUNIO2dCQUFNQyxNQUFLO2dCQUFTVCxPQUFPWjtnQkFBS3NCLFVBQVVUO2dCQUFpQlUsYUFBWTs7Ozs7OzBCQUN4RSw4REFBQ0g7Z0JBQU1DLE1BQUs7Z0JBQVNULE9BQU9WO2dCQUF1Qm9CLFVBQVVQO2dCQUFtQ1EsYUFBWTs7Ozs7OzBCQUM1Ryw4REFBQ0M7MEJBQUs7Ozs7OzswQkFDTiw4REFBQ0o7Z0JBQU1DLE1BQUs7Z0JBQVNULE9BQU9SO2dCQUF5QmtCLFVBQVVOO2dCQUFxQ08sYUFBWTs7Ozs7OzBCQUNoSCw4REFBQ0g7Z0JBQU1DLE1BQUs7Z0JBQVNULE9BQU9OO2dCQUFVZ0IsVUFBVUw7Z0JBQXNCTSxhQUFZOzs7Ozs7MEJBQ2xGLDhEQUFDM0IsZ0RBQU9BO2dCQUNORSxnQkFBZ0JBO2dCQUNoQkUsS0FBS0E7Z0JBQ0x5QixzQkFBc0I7b0JBQUVDLFdBQVd4QjtvQkFBdUJ5QixhQUFhdkI7Z0JBQXdCO2dCQUMvRkUsVUFBVUE7Ozs7Ozs7Ozs7OztBQUlsQjtHQTdDTVQ7S0FBQUE7QUErQ04sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FtZXJhQm9keS5qcz8yYzg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5cbmNvbnN0IENhbWVyYUJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtvYmplY3REaXN0YW5jZSwgc2V0T2JqZWN0RGlzdGFuY2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc28sIHNldElzb10gPSB1c2VTdGF0ZSgxMDApO1xuICBjb25zdCBbc2h1dHRlclNwZWVkTnVtZXJhdG9yLCBzZXRTaHV0dGVyU3BlZWROdW1lcmF0b3JdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgc2V0U2h1dHRlclNwZWVkRGVub21pbmF0b3JdID0gdXNlU3RhdGUoNTAwKTsgLy8gRGVmYXVsdCB0byAxLzUwMFxuICBjb25zdCBbYXBlcnR1cmUsIHNldEFwZXJ0dXJlXSA9IHVzZVN0YXRlKDApO1xuXG4gIC8vIEhhbmRsZSBpbnB1dCBjaGFuZ2VzXG4gIGNvbnN0IGhhbmRsZU9iamVjdERpc3RhbmNlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0T2JqZWN0RGlzdGFuY2UocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJc29DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJc28ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2h1dHRlclNwZWVkTnVtZXJhdG9yQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2h1dHRlclNwZWVkTnVtZXJhdG9yKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0U2h1dHRlclNwZWVkRGVub21pbmF0b3IocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQXBlcnR1cmVDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRBcGVydHVyZShwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DYW1lcmEgQm9keTwvaDE+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtvYmplY3REaXN0YW5jZX0gb25DaGFuZ2U9e2hhbmRsZU9iamVjdERpc3RhbmNlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIk9iamVjdCBEaXN0YW5jZVwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtpc299IG9uQ2hhbmdlPXtoYW5kbGVJc29DaGFuZ2V9IHBsYWNlaG9sZGVyPVwiSVNPXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3NodXR0ZXJTcGVlZE51bWVyYXRvcn0gb25DaGFuZ2U9e2hhbmRsZVNodXR0ZXJTcGVlZE51bWVyYXRvckNoYW5nZX0gcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIE51bWVyYXRvclwiIC8+XG4gICAgICA8c3Bhbj4vPC9zcGFuPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17c2h1dHRlclNwZWVkRGVub21pbmF0b3J9IG9uQ2hhbmdlPXtoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZX0gcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yXCIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2FwZXJ0dXJlfSBvbkNoYW5nZT17aGFuZGxlQXBlcnR1cmVDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiQXBlcnR1cmVcIiAvPlxuICAgICAgPFJlc3VsdHNcbiAgICAgICAgb2JqZWN0RGlzdGFuY2U9e29iamVjdERpc3RhbmNlfVxuICAgICAgICBpc289e2lzb31cbiAgICAgICAgc2h1dHRlclNwZWVkRnJhY3Rpb249e3sgbnVtZXJhdG9yOiBzaHV0dGVyU3BlZWROdW1lcmF0b3IsIGRlbm9taW5hdG9yOiBzaHV0dGVyU3BlZWREZW5vbWluYXRvciB9fVxuICAgICAgICBhcGVydHVyZT17YXBlcnR1cmV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtZXJhQm9keTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUmVzdWx0cyIsIkNhbWVyYUJvZHkiLCJvYmplY3REaXN0YW5jZSIsInNldE9iamVjdERpc3RhbmNlIiwiaXNvIiwic2V0SXNvIiwic2h1dHRlclNwZWVkTnVtZXJhdG9yIiwic2V0U2h1dHRlclNwZWVkTnVtZXJhdG9yIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwic2V0QXBlcnR1cmUiLCJoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSIsImV2ZW50IiwicGFyc2VGbG9hdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSXNvQ2hhbmdlIiwicGFyc2VJbnQiLCJoYW5kbGVTaHV0dGVyU3BlZWROdW1lcmF0b3JDaGFuZ2UiLCJoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSIsImhhbmRsZUFwZXJ0dXJlQ2hhbmdlIiwiZGl2IiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwic3BhbiIsInNodXR0ZXJTcGVlZEZyYWN0aW9uIiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});