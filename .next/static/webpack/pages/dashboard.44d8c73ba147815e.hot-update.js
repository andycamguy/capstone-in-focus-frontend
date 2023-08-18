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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n// CameraBody.js\n\nvar _s = $RefreshSig$();\n\n\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistanceFeet, setObjectDistanceFeet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistanceFeet(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistanceFeet,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                objectDistanceMillimeters: objectDistanceFeet * 304.8,\n                iso: iso,\n                aperture: aperture,\n                shutterSpeedDenominator: shutterSpeedDenominator\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"Q5KtCcNbfGHFi+cqkqp2Dgouvyw=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYW1lcmFCb2R5LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGdCQUFnQjs7O0FBQ3dCO0FBQ1I7QUFFaEMsTUFBTUcsYUFBYTs7SUFDakIsTUFBTSxDQUFDQyxvQkFBb0JDLHNCQUFzQixHQUFHSiwrQ0FBUUEsQ0FBQztJQUM3RCxNQUFNLENBQUNLLEtBQUtDLE9BQU8sR0FBR04sK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxDQUFDTyx5QkFBeUJDLDJCQUEyQixHQUFHUiwrQ0FBUUEsQ0FBQyxNQUFNLG1CQUFtQjtJQUNoRyxNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFFekMsTUFBTVcsNkJBQTZCLENBQUNDO1FBQ2xDUixzQkFBc0JTLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUNyRDtJQUVBLE1BQU1DLGtCQUFrQixDQUFDSjtRQUN2Qk4sT0FBT1csU0FBU0wsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDO0lBRUEsTUFBTUcsc0NBQXNDLENBQUNOO1FBQzNDSiwyQkFBMkJTLFNBQVNMLE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUN4RDtJQUVBLE1BQU1JLHVCQUF1QixDQUFDUDtRQUM1QkYsWUFBWUcsV0FBV0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQzNDO0lBRUEscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0M7Z0JBQUdDLFdBQVU7MEJBQU87Ozs7OzswQkFDckIsOERBQUNGO2dCQUFJRSxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQU1DLFNBQVE7d0JBQWlCRixXQUFVO2tDQUFhOzs7Ozs7a0NBQ3ZELDhEQUFDRzt3QkFDQ0MsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSEwsV0FBVTt3QkFDVlAsT0FBT1o7d0JBQ1B5QixVQUFVakI7d0JBQ1ZrQixhQUFZOzs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDVDtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFNQyxTQUFRO3dCQUFNRixXQUFVO2tDQUFhOzs7Ozs7a0NBQzVDLDhEQUFDRzt3QkFDQ0MsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSEwsV0FBVTt3QkFDVlAsT0FBT1Y7d0JBQ1B1QixVQUFVWjt3QkFDVmEsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQ1Q7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBTUMsU0FBUTt3QkFBMEJGLFdBQVU7a0NBQWE7Ozs7OztrQ0FDaEUsOERBQUNHO3dCQUNDQyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNITCxXQUFVO3dCQUNWUCxPQUFPUjt3QkFDUHFCLFVBQVVWO3dCQUNWVyxhQUFZOzs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDVDtnQkFBSUUsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFNQyxTQUFRO3dCQUFXRixXQUFVO2tDQUFhOzs7Ozs7a0NBQ2pELDhEQUFDRzt3QkFDQ0MsTUFBSzt3QkFDTEMsSUFBRzt3QkFDSEwsV0FBVTt3QkFDVlAsT0FBT047d0JBQ1BtQixVQUFVVDt3QkFDVlUsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUdoQiw4REFBQzVCLGdEQUFPQTtnQkFDTjZCLDJCQUEyQjNCLHFCQUFxQjtnQkFDaERFLEtBQUtBO2dCQUNMSSxVQUFVQTtnQkFDVkYseUJBQXlCQTs7Ozs7Ozs7Ozs7O0FBSWpDO0dBN0VNTDtLQUFBQTtBQStFTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYW1lcmFCb2R5LmpzPzJjODkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQ2FtZXJhQm9keS5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJztcblxuY29uc3QgQ2FtZXJhQm9keSA9ICgpID0+IHtcbiAgY29uc3QgW29iamVjdERpc3RhbmNlRmVldCwgc2V0T2JqZWN0RGlzdGFuY2VGZWV0XSA9IHVzZVN0YXRlKDIwKTtcbiAgY29uc3QgW2lzbywgc2V0SXNvXSA9IHVzZVN0YXRlKDE2MDApO1xuICBjb25zdCBbc2h1dHRlclNwZWVkRGVub21pbmF0b3IsIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yXSA9IHVzZVN0YXRlKDUwMCk7IC8vIERlZmF1bHQgdG8gMS81MDBcbiAgY29uc3QgW2FwZXJ0dXJlLCBzZXRBcGVydHVyZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE9iamVjdERpc3RhbmNlRmVldChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlzb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldElzbyhwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwZXJ0dXJlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QXBlcnR1cmUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiPkNhbWVyYSBCb2R5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9iamVjdERpc3RhbmNlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPk9iamVjdCBEaXN0YW5jZSAoZmVldCk6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJvYmplY3REaXN0YW5jZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17b2JqZWN0RGlzdGFuY2VGZWV0fVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9iamVjdCBEaXN0YW5jZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5JU086PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJpc29cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e2lzb31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSXNvQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSVNPXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2h1dHRlclNwZWVkRGVub21pbmF0b3JcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2h1dHRlciBTcGVlZCBEZW5vbWluYXRvcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXBlcnR1cmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+QXBlcnR1cmU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJhcGVydHVyZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17YXBlcnR1cmV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFwZXJ0dXJlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXBlcnR1cmVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UmVzdWx0c1xuICAgICAgICBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzPXtvYmplY3REaXN0YW5jZUZlZXQgKiAzMDQuOH0gLy8gQ29udmVydCBmZWV0IHRvIG1pbGxpbWV0ZXJzXG4gICAgICAgIGlzbz17aXNvfVxuICAgICAgICBhcGVydHVyZT17YXBlcnR1cmV9XG4gICAgICAgIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW1lcmFCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZXN1bHRzIiwiQ2FtZXJhQm9keSIsIm9iamVjdERpc3RhbmNlRmVldCIsInNldE9iamVjdERpc3RhbmNlRmVldCIsImlzbyIsInNldElzbyIsInNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwic2V0U2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJhcGVydHVyZSIsInNldEFwZXJ0dXJlIiwiaGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2UiLCJldmVudCIsInBhcnNlRmxvYXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlzb0NoYW5nZSIsInBhcnNlSW50IiwiaGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2UiLCJoYW5kbGVBcGVydHVyZUNoYW5nZSIsImRpdiIsImgxIiwiY2xhc3NOYW1lIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwib2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});