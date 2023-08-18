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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n// CameraBody.js\n\nvar _s = $RefreshSig$();\n\n\n// Helper function to calculate aperture\nconst calculateAperture = (iso, shutterSpeedDenominator, objectDistanceMillimeters)=>{\n    const shutterSpeedDecimal = 1 / shutterSpeedDenominator;\n    return Math.sqrt(iso * shutterSpeedDecimal / (objectDistanceMillimeters * 2)).toFixed(2);\n};\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistanceFeet, setObjectDistanceFeet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistanceFeet(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    // Calculate aperture based on available inputs\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!aperture && iso && shutterSpeedDenominator && objectDistanceFeet) {\n            const calculatedAperture = calculateAperture(iso, shutterSpeedDenominator, objectDistanceFeet * 304.8);\n            setAperture(calculatedAperture);\n        }\n    }, [\n        iso,\n        shutterSpeedDenominator,\n        objectDistanceFeet,\n        aperture\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistanceFeet,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                objectDistanceMillimeters: objectDistanceFeet * 304.8,\n                iso: iso,\n                aperture: aperture,\n                shutterSpeedDenominator: shutterSpeedDenominator\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"P/32NgRv1pDAjRaxfJUn+c5rz2k=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCx5QkFBeUJBOzs7Ozs7Ozs7Ozs7QUFJakM7R0F0Rk1NO0tBQUFBO0FBd0ZOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbWVyYUJvZHkuanM/MmM4OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDYW1lcmFCb2R5LmpzXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5cbi8vIEhlbHBlciBmdW5jdGlvbiB0byBjYWxjdWxhdGUgYXBlcnR1cmVcbmNvbnN0IGNhbGN1bGF0ZUFwZXJ0dXJlID0gKGlzbywgc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMpID0+IHtcbiAgY29uc3Qgc2h1dHRlclNwZWVkRGVjaW1hbCA9IDEgLyBzaHV0dGVyU3BlZWREZW5vbWluYXRvcjtcbiAgcmV0dXJuIE1hdGguc3FydCgoaXNvICogc2h1dHRlclNwZWVkRGVjaW1hbCkgLyAob2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyAqIDIpKS50b0ZpeGVkKDIpO1xufTtcblxuY29uc3QgQ2FtZXJhQm9keSA9ICgpID0+IHtcbiAgY29uc3QgW29iamVjdERpc3RhbmNlRmVldCwgc2V0T2JqZWN0RGlzdGFuY2VGZWV0XSA9IHVzZVN0YXRlKDIwKTtcbiAgY29uc3QgW2lzbywgc2V0SXNvXSA9IHVzZVN0YXRlKDE2MDApO1xuICBjb25zdCBbc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yXSA9IHVzZVN0YXRlKDUwMCk7IC8vIERlZmF1bHQgdG8gMS81MDBcbiAgY29uc3QgW2FwZXJ0dXJlLCBzZXRBcGVydHVyZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlc1xuICBjb25zdCBoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE9iamVjdERpc3RhbmNlRmVldChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlzb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldElzbyhwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwZXJ0dXJlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QXBlcnR1cmUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICAvLyBDYWxjdWxhdGUgYXBlcnR1cmUgYmFzZWQgb24gYXZhaWxhYmxlIGlucHV0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXBlcnR1cmUgJiYgaXNvICYmIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yICYmIG9iamVjdERpc3RhbmNlRmVldCkge1xuICAgICAgY29uc3QgY2FsY3VsYXRlZEFwZXJ0dXJlID0gY2FsY3VsYXRlQXBlcnR1cmUoaXNvLCBzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgb2JqZWN0RGlzdGFuY2VGZWV0ICogMzA0LjgpO1xuICAgICAgc2V0QXBlcnR1cmUoY2FsY3VsYXRlZEFwZXJ0dXJlKTtcbiAgICB9XG4gIH0sIFtpc28sIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBvYmplY3REaXN0YW5jZUZlZXQsIGFwZXJ0dXJlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5DYW1lcmEgQm9keTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvYmplY3REaXN0YW5jZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5PYmplY3QgRGlzdGFuY2UgKGZlZXQpOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwib2JqZWN0RGlzdGFuY2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e29iamVjdERpc3RhbmNlRmVldH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJPYmplY3QgRGlzdGFuY2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc29cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+SVNPOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiaXNvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtpc299XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlzb0NoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIklTT1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlNodXR0ZXIgU3BlZWQgRGVub21pbmF0b3I6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJzaHV0dGVyU3BlZWREZW5vbWluYXRvclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17c2h1dHRlclNwZWVkRGVub21pbmF0b3J9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2h1dHRlciBTcGVlZCBEZW5vbWluYXRvclwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFwZXJ0dXJlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPkFwZXJ0dXJlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiYXBlcnR1cmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e2FwZXJ0dXJlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBcGVydHVyZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwZXJ0dXJlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFJlc3VsdHNcbiAgICAgICAgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycz17b2JqZWN0RGlzdGFuY2VGZWV0ICogMzA0Ljh9IC8vIENvbnZlcnQgZmVldCB0byBtaWxsaW1ldGVyc1xuICAgICAgICBpc289e2lzb31cbiAgICAgICAgYXBlcnR1cmU9e2FwZXJ0dXJlfVxuICAgICAgICBzaHV0dGVyU3BlZWREZW5vbWluYXRvcj17c2h1dHRlclNwZWVkRGVub21pbmF0b3J9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtZXJhQm9keTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUmVzdWx0cyIsImNhbGN1bGF0ZUFwZXJ0dXJlIiwiaXNvIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwic2h1dHRlclNwZWVkRGVjaW1hbCIsIk1hdGgiLCJzcXJ0IiwidG9GaXhlZCIsIkNhbWVyYUJvZHkiLCJvYmplY3REaXN0YW5jZUZlZXQiLCJzZXRPYmplY3REaXN0YW5jZUZlZXQiLCJzZXRJc28iLCJzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwic2V0QXBlcnR1cmUiLCJoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSIsImV2ZW50IiwicGFyc2VGbG9hdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSXNvQ2hhbmdlIiwicGFyc2VJbnQiLCJoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSIsImhhbmRsZUFwZXJ0dXJlQ2hhbmdlIiwiY2FsY3VsYXRlZEFwZXJ0dXJlIiwiZGl2IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});