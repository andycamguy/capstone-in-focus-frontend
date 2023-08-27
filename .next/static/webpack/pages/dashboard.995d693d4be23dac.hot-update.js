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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistanceFeet, setObjectDistanceFeet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistanceFeet(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    const inputFields = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\",\n            background: \"#333\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-center text-white\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistanceFeet,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/workspace/capstone-in-focus-frontend/src/components/dslr.jpeg\" // need help tomorrow\n                    ,\n                    alt: \"DSLR Camera\",\n                    style: {\n                        maxWidth: \"100%\",\n                        height: \"auto\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n    const resultsComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            float: \"right\",\n            marginLeft: \"20px\",\n            boxShadow: \"0px 0px 1px rgba(0, 0, 0, 0.5)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            objectDistanceMillimeters: objectDistanceFeet * 304.8,\n            iso: iso,\n            aperture: aperture,\n            shutterSpeedDenominator: shutterSpeedDenominator\n        }, void 0, false, {\n            fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            borderRadius: \"10px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\"\n        },\n        children: [\n            inputFields,\n            resultsComponent\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"Q5KtCcNbfGHFi+cqkqp2Dgouvyw=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUsvQixxQkFDRSw4REFBQ2M7UUFDQ0MsT0FBTztZQUNMQyxTQUFTO1lBQ1R5QixjQUFjO1lBQ2R4QixXQUFXO1lBQ1hDLGlCQUFpQjtZQUNqQkMsT0FBTztRQUNUOztZQUVDTjtZQUNBd0I7Ozs7Ozs7QUFHUDtHQWxJTTFDO0tBQUFBO0FBb0lOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbWVyYUJvZHkuanM/MmM4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5cblxuY29uc3QgQ2FtZXJhQm9keSA9ICgpID0+IHtcbiAgY29uc3QgW29iamVjdERpc3RhbmNlRmVldCwgc2V0T2JqZWN0RGlzdGFuY2VGZWV0XSA9IHVzZVN0YXRlKDIwKTtcbiAgY29uc3QgW2lzbywgc2V0SXNvXSA9IHVzZVN0YXRlKDE2MDApO1xuICBjb25zdCBbc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yXSA9IHVzZVN0YXRlKDUwMCk7IC8vIERlZmF1bHQgdG8gMS81MDBcbiAgY29uc3QgW2FwZXJ0dXJlLCBzZXRBcGVydHVyZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlc1xuICBjb25zdCBoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE9iamVjdERpc3RhbmNlRmVldChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlzb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldElzbyhwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwZXJ0dXJlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QXBlcnR1cmUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpbnB1dEZpZWxkcyA9IChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgICBcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXNlY29uZGFyeS1jb2xvciknLFxuICAgICAgICBjb2xvcjogJyM1OWY1ZjUnLFxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzMzMycsIC8vIERhcmsgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JywgLy8gQWRkIGRpc3BsYXkgZmxleFxuICAgICAgfX1cbiAgICA+XG4gICAgXG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+Q2FtZXJhIEJvZHk8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2JqZWN0RGlzdGFuY2VcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgT2JqZWN0IERpc3RhbmNlIChmZWV0KTpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJvYmplY3REaXN0YW5jZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17b2JqZWN0RGlzdGFuY2VGZWV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9iamVjdCBEaXN0YW5jZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICBJU086XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiaXNvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtpc299XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlzb0NoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIklTT1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgIFNodXR0ZXIgU3BlZWQgRGVub21pbmF0b3I6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwic2h1dHRlclNwZWVkRGVub21pbmF0b3JcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e3NodXR0ZXJTcGVlZERlbm9taW5hdG9yfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNodXR0ZXIgU3BlZWQgRGVub21pbmF0b3JcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJhcGVydHVyZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICBBcGVydHVyZTpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJhcGVydHVyZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17YXBlcnR1cmV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFwZXJ0dXJlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXBlcnR1cmVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZsZXg6IDEgfX0+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz1cIi93b3Jrc3BhY2UvY2Fwc3RvbmUtaW4tZm9jdXMtZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZHNsci5qcGVnXCIgLy8gbmVlZCBoZWxwIHRvbW9ycm93XG4gICAgICAgIGFsdD1cIkRTTFIgQ2FtZXJhXCJcbiAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnYXV0bycgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgcmVzdWx0c0NvbXBvbmVudCA9IChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLCAvLyBBZGQgbWFyZ2luIGZvciBzcGFjaW5nXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxSZXN1bHRzXG4gICAgICAgIG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnM9e29iamVjdERpc3RhbmNlRmVldCAqIDMwNC44fVxuICAgICAgICBpc289e2lzb31cbiAgICAgICAgYXBlcnR1cmU9e2FwZXJ0dXJlfVxuICAgICAgICBzaHV0dGVyU3BlZWREZW5vbWluYXRvcj17c2h1dHRlclNwZWVkRGVub21pbmF0b3J9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXNlY29uZGFyeS1jb2xvciknLFxuICAgICAgICBjb2xvcjogJyM1OWY1ZjUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aW5wdXRGaWVsZHN9XG4gICAgICB7cmVzdWx0c0NvbXBvbmVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUJvZHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlc3VsdHMiLCJDYW1lcmFCb2R5Iiwib2JqZWN0RGlzdGFuY2VGZWV0Iiwic2V0T2JqZWN0RGlzdGFuY2VGZWV0IiwiaXNvIiwic2V0SXNvIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwic2V0QXBlcnR1cmUiLCJoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSIsImV2ZW50IiwicGFyc2VGbG9hdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSXNvQ2hhbmdlIiwicGFyc2VJbnQiLCJoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSIsImhhbmRsZUFwZXJ0dXJlQ2hhbmdlIiwiaW5wdXRGaWVsZHMiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJmbGV4IiwiaW1nIiwic3JjIiwiYWx0IiwibWF4V2lkdGgiLCJoZWlnaHQiLCJyZXN1bHRzQ29tcG9uZW50IiwiZmxvYXQiLCJtYXJnaW5MZWZ0Iiwib2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});