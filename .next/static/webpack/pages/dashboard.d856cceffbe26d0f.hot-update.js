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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _workspace_capstone_in_focus_frontend_src_components_dslr_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/components/dslr.jpeg */ \"./src/components/dslr.jpeg\");\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CameraBody = (param)=>{\n    let { loggedIn } = param;\n    _s();\n    const [objectDistanceFeet, setObjectDistanceFeet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500);\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistanceFeet(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    const imageStyle = {\n        flex: 1,\n        maxWidth: \"50%\",\n        marginRight: \"20px\"\n    };\n    const inputFields = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\",\n            background: \"#333\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-center text-white\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistanceFeet,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\",\n                        list: \"isoSuggestions\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"datalist\", {\n                        id: \"isoSuggestions\",\n                        children: [\n                            100,\n                            200,\n                            400,\n                            800,\n                            1600,\n                            3200,\n                            6400\n                        ].map((isoValue, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: isoValue\n                            }, index, false, {\n                                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\",\n                        list: \"apertureSuggestions\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"datalist\", {\n                        id: \"apertureSuggestions\",\n                        children: [\n                            1.4,\n                            2,\n                            2.8,\n                            4,\n                            5.6,\n                            8,\n                            11,\n                            16,\n                            22\n                        ].map((fStop, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: fStop\n                            }, index, false, {\n                                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1,\n                    maxWidth: \"50%\",\n                    marginRight: \"20px\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: _workspace_capstone_in_focus_frontend_src_components_dslr_jpeg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    alt: \"DSLR Camera\",\n                    className: \"img-fluid\"\n                }, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 99,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            borderRadius: \"10px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\"\n        },\n        children: [\n            inputFields,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                loggedIn: loggedIn,\n                objectDistanceFeet: objectDistanceFeet,\n                iso: iso,\n                shutterSpeedDenominator: shutterSpeedDenominator,\n                aperture: aperture\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 112,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"Q5KtCcNbfGHFi+cqkqp2Dgouvyw=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUcsQ0FBQyxDQUFDSSxPQUFPRixzQkFDaEQsOERBQUNDO2dDQUFtQmhDLE9BQU9pQzsrQkFBZEY7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSW5CLDhEQUFDckI7Z0JBQUlDLE9BQU87b0JBQUVMLE1BQU07b0JBQUdDLFVBQVU7b0JBQU9DLGFBQWE7Z0JBQU87MEJBQzFELDRFQUFDMEI7b0JBQUlDLEtBQUtuRCxzR0FBU0E7b0JBQUVvRCxLQUFJO29CQUFjakIsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLdkQscUJBQ0UsOERBQUNUO1FBQUlDLE9BQU87WUFBRUMsU0FBUztZQUN2QnlCLGNBQWM7WUFDZHhCLFdBQVc7WUFDVkMsaUJBQWlCO1lBQTBCQyxPQUFPO1FBQVU7O1lBQzFETjswQkFFRCw4REFBQ3hCLGdEQUFPQTtnQkFDTkUsVUFBVUE7Z0JBQ1ZDLG9CQUFvQkE7Z0JBQ3BCRSxLQUFLQTtnQkFDTEUseUJBQXlCQTtnQkFDekJFLFVBQVVBOzs7Ozs7Ozs7Ozs7QUFJbEI7R0FySE1SO0tBQUFBO0FBdUhOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbWVyYUJvZHkuanM/MmM4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHNsckltYWdlIGZyb20gJy93b3Jrc3BhY2UvY2Fwc3RvbmUtaW4tZm9jdXMtZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvZHNsci5qcGVnJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5jb25zdCBDYW1lcmFCb2R5ID0gKHsgbG9nZ2VkSW4gfSkgPT4ge1xuICBjb25zdCBbb2JqZWN0RGlzdGFuY2VGZWV0LCBzZXRPYmplY3REaXN0YW5jZUZlZXRdID0gdXNlU3RhdGUoMjApO1xuICBjb25zdCBbaXNvLCBzZXRJc29dID0gdXNlU3RhdGUoMTYwMCk7XG4gIGNvbnN0IFtzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgc2V0U2h1dHRlclNwZWVkRGVub21pbmF0b3JdID0gdXNlU3RhdGUoNTAwKTtcbiAgY29uc3QgW2FwZXJ0dXJlLCBzZXRBcGVydHVyZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE9iamVjdERpc3RhbmNlRmVldChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlzb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldElzbyhwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwZXJ0dXJlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QXBlcnR1cmUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBpbWFnZVN0eWxlID0ge1xuICAgIGZsZXg6IDEsXG4gICAgbWF4V2lkdGg6ICc1MCUnLFxuICAgIG1hcmdpblJpZ2h0OiAnMjBweCcsXG4gIH07XG5cbiAgY29uc3QgaW5wdXRGaWVsZHMgPSAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIGJveFNoYWRvdzogJzBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSknLCBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1zZWNvbmRhcnktY29sb3IpJywgY29sb3I6ICcjNTlmNWY1JywgYmFja2dyb3VuZDogJyMzMzMnLCBkaXNwbGF5OiAnZmxleCcgfX0+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+Q2FtZXJhIEJvZHk8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2JqZWN0RGlzdGFuY2VcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgT2JqZWN0IERpc3RhbmNlIChmZWV0KTpcbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJvYmplY3REaXN0YW5jZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17b2JqZWN0RGlzdGFuY2VGZWV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9iamVjdCBEaXN0YW5jZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICBJU086XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiaXNvXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtpc299XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlzb0NoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIklTT1wiXG4gICAgICAgICAgbGlzdD1cImlzb1N1Z2dlc3Rpb25zXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGRhdGFsaXN0IGlkPVwiaXNvU3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICB7WzEwMCwgMjAwLCA0MDAsIDgwMCwgMTYwMCwgMzIwMCwgNjQwMF0ubWFwKChpc29WYWx1ZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2lzb1ZhbHVlfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2RhdGFsaXN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaHV0dGVyU3BlZWREZW5vbWluYXRvclwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICBTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yOlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXBlcnR1cmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgQXBlcnR1cmU6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiYXBlcnR1cmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e2FwZXJ0dXJlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBcGVydHVyZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwZXJ0dXJlXCJcbiAgICAgICAgICBsaXN0PVwiYXBlcnR1cmVTdWdnZXN0aW9uc1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxkYXRhbGlzdCBpZD1cImFwZXJ0dXJlU3VnZ2VzdGlvbnNcIj5cbiAgICAgICAgICB7WzEuNCwgMiwgMi44LCA0LCA1LjYsIDgsIDExLCAxNiwgMjJdLm1hcCgoZlN0b3AsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtmU3RvcH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kYXRhbGlzdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtYXhXaWR0aDogJzUwJScsIG1hcmdpblJpZ2h0OiAnMjBweCcgfX0+XG4gICAgICAgIDxpbWcgc3JjPXtkc2xySW1hZ2V9IGFsdD1cIkRTTFIgQ2FtZXJhXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnMjBweCcsIFxuICAgIGJvcmRlclJhZGl1czogJzEwcHgnLCBcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tc2Vjb25kYXJ5LWNvbG9yKScsIGNvbG9yOiAnIzU5ZjVmNScgfX0+XG4gICAgICB7aW5wdXRGaWVsZHN9XG4gICAgICB7LyogUGFzcyB0aGUgcmVxdWlyZWQgcHJvcHMgdG8gdGhlIFJlc3VsdHMgY29tcG9uZW50ICovfVxuICAgICAgPFJlc3VsdHNcbiAgICAgICAgbG9nZ2VkSW49e2xvZ2dlZElufVxuICAgICAgICBvYmplY3REaXN0YW5jZUZlZXQ9e29iamVjdERpc3RhbmNlRmVldH1cbiAgICAgICAgaXNvPXtpc299XG4gICAgICAgIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgICAgYXBlcnR1cmU9e2FwZXJ0dXJlfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUJvZHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImRzbHJJbWFnZSIsIlJlc3VsdHMiLCJDYW1lcmFCb2R5IiwibG9nZ2VkSW4iLCJvYmplY3REaXN0YW5jZUZlZXQiLCJzZXRPYmplY3REaXN0YW5jZUZlZXQiLCJpc28iLCJzZXRJc28iLCJzaHV0dGVyU3BlZWREZW5vbWluYXRvciIsInNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiYXBlcnR1cmUiLCJzZXRBcGVydHVyZSIsImhhbmRsZU9iamVjdERpc3RhbmNlQ2hhbmdlIiwiZXZlbnQiLCJwYXJzZUZsb2F0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJc29DaGFuZ2UiLCJwYXJzZUludCIsImhhbmRsZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yQ2hhbmdlIiwiaGFuZGxlQXBlcnR1cmVDaGFuZ2UiLCJpbWFnZVN0eWxlIiwiZmxleCIsIm1heFdpZHRoIiwibWFyZ2luUmlnaHQiLCJpbnB1dEZpZWxkcyIsImRpdiIsInN0eWxlIiwicGFkZGluZyIsImJveFNoYWRvdyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciIsImxpc3QiLCJkYXRhbGlzdCIsIm1hcCIsImlzb1ZhbHVlIiwiaW5kZXgiLCJvcHRpb24iLCJmU3RvcCIsImltZyIsInNyYyIsImFsdCIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});