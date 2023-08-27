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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n/* harmony import */ var _dslr_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dslr.jpeg */ \"./src/components/dslr.jpeg\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistanceFeet, setObjectDistanceFeet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistanceFeet(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    const inputFields = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\",\n            background: \"#333\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-center text-white\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistanceFeet,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flex: 1,\n                        maxWidth: \"50%\",\n                        marginRight: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _dslr_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        className: \"DSLR Camera\",\n                        style: {\n                            maxWidth: \"100%\",\n                            maxHeight: \"100%\",\n                            objectFit: \"contain\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 96,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                    lineNumber: 95,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n    const resultsComponent = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            float: \"right\",\n            marginLeft: \"20px\",\n            boxShadow: \"0px 0px 1px rgba(0, 0, 0, 0.5)\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            objectDistanceMillimeters: objectDistanceFeet * 304.8,\n            iso: iso,\n            aperture: aperture,\n            shutterSpeedDenominator: shutterSpeedDenominator\n        }, void 0, false, {\n            fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            borderRadius: \"10px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\"\n        },\n        children: [\n            inputFields,\n            resultsComponent\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"Q5KtCcNbfGHFi+cqkqp2Dgouvyw=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDeEIsZ0RBQU9BO1lBQ05nRCwyQkFBMkI3QyxxQkFBcUI7WUFDaERFLEtBQUtBO1lBQ0xJLFVBQVVBO1lBQ1ZGLHlCQUF5QkE7Ozs7Ozs7Ozs7O0lBSy9CLHFCQUNFLDhEQUFDYztRQUNDQyxPQUFPO1lBQ0xDLFNBQVM7WUFDVDBCLGNBQWM7WUFDZHpCLFdBQVc7WUFDWEMsaUJBQWlCO1lBQ2pCQyxPQUFPO1FBQ1Q7O1lBRUNOO1lBQ0F5Qjs7Ozs7OztBQUdQO0dBcElNM0M7S0FBQUE7QUFzSU4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FtZXJhQm9keS5qcz8yYzg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJztcbmltcG9ydCBkc2xySW1hZ2UgZnJvbSAnLi9kc2xyLmpwZWcnXG5cbmNvbnN0IENhbWVyYUJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtvYmplY3REaXN0YW5jZUZlZXQsIHNldE9iamVjdERpc3RhbmNlRmVldF0gPSB1c2VTdGF0ZSgyMCk7XG4gIGNvbnN0IFtpc28sIHNldElzb10gPSB1c2VTdGF0ZSgxNjAwKTtcbiAgY29uc3QgW3NodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvcl0gPSB1c2VTdGF0ZSg1MDApOyAvLyBEZWZhdWx0IHRvIDEvNTAwXG4gIGNvbnN0IFthcGVydHVyZSwgc2V0QXBlcnR1cmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gSGFuZGxlIGlucHV0IGNoYW5nZXNcbiAgY29uc3QgaGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRPYmplY3REaXN0YW5jZUZlZXQocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJc29DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJc28ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcGVydHVyZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldEFwZXJ0dXJlKHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRGaWVsZHMgPSAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1zZWNvbmRhcnktY29sb3IpJyxcbiAgICAgICAgY29sb3I6ICcjNTlmNWY1JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMzMzMnLCAvLyBEYXJrIGdyZXkgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsIC8vIEFkZCBkaXNwbGF5IGZsZXhcbiAgICAgIH19XG4gICAgPlxuICAgIFxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPkNhbWVyYSBCb2R5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9iamVjdERpc3RhbmNlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgIE9iamVjdCBEaXN0YW5jZSAoZmVldCk6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwib2JqZWN0RGlzdGFuY2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e29iamVjdERpc3RhbmNlRmVldH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJPYmplY3QgRGlzdGFuY2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc29cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgSVNPOlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cImlzb1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17aXNvfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJc29DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJU09cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaHV0dGVyU3BlZWREZW5vbWluYXRvclwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICBTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yOlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXBlcnR1cmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgQXBlcnR1cmU6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiYXBlcnR1cmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e2FwZXJ0dXJlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBcGVydHVyZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwZXJ0dXJlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtYXhXaWR0aDogJzUwJScsIG1hcmdpblJpZ2h0OiAnMjBweCcgfX0+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17ZHNsckltYWdlfSBcbiAgICAgICAgY2xhc3NOYW1lPVwiRFNMUiBDYW1lcmFcIlxuICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBtYXhIZWlnaHQ6ICcxMDAlJywgb2JqZWN0Rml0OiAnY29udGFpbicgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgY29uc3QgcmVzdWx0c0NvbXBvbmVudCA9IChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgbWFyZ2luTGVmdDogJzIwcHgnLCAvLyBBZGQgbWFyZ2luIGZvciBzcGFjaW5nXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxSZXN1bHRzXG4gICAgICAgIG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnM9e29iamVjdERpc3RhbmNlRmVldCAqIDMwNC44fVxuICAgICAgICBpc289e2lzb31cbiAgICAgICAgYXBlcnR1cmU9e2FwZXJ0dXJlfVxuICAgICAgICBzaHV0dGVyU3BlZWREZW5vbWluYXRvcj17c2h1dHRlclNwZWVkRGVub21pbmF0b3J9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLXNlY29uZGFyeS1jb2xvciknLFxuICAgICAgICBjb2xvcjogJyM1OWY1ZjUnLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7aW5wdXRGaWVsZHN9XG4gICAgICB7cmVzdWx0c0NvbXBvbmVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUJvZHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlc3VsdHMiLCJkc2xySW1hZ2UiLCJDYW1lcmFCb2R5Iiwib2JqZWN0RGlzdGFuY2VGZWV0Iiwic2V0T2JqZWN0RGlzdGFuY2VGZWV0IiwiaXNvIiwic2V0SXNvIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwic2V0QXBlcnR1cmUiLCJoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSIsImV2ZW50IiwicGFyc2VGbG9hdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSXNvQ2hhbmdlIiwicGFyc2VJbnQiLCJoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSIsImhhbmRsZUFwZXJ0dXJlQ2hhbmdlIiwiaW5wdXRGaWVsZHMiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJmbGV4IiwibWF4V2lkdGgiLCJtYXJnaW5SaWdodCIsImltZyIsInNyYyIsIm1heEhlaWdodCIsIm9iamVjdEZpdCIsInJlc3VsdHNDb21wb25lbnQiLCJmbG9hdCIsIm1hcmdpbkxlZnQiLCJvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});