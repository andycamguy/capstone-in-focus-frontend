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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistance, setObjectDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistance(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    // Calculate missing inputs based on available inputs\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Calculate missing inputs based on scenarios\n        if (aperture && iso && shutterSpeedDenominator) {\n            if (!objectDistance) {\n                const calculatedDistance = iso * aperture * aperture * 2 / shutterSpeedDenominator;\n                setObjectDistance(calculatedDistance);\n            }\n        }\n        if (aperture && shutterSpeedDenominator && objectDistance) {\n            if (!iso) {\n                const calculatedIso = shutterSpeedDenominator * objectDistance / (aperture * aperture * 2);\n                setIso(calculatedIso);\n            }\n        }\n        if (iso && shutterSpeedDenominator && objectDistance) {\n            if (!aperture) {\n                const calculatedAperture = Math.sqrt(iso * shutterSpeedDenominator / (objectDistance * 2));\n                setAperture(calculatedAperture);\n            }\n        }\n    }, [\n        iso,\n        aperture,\n        objectDistance,\n        shutterSpeedDenominator\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistance,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Results__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                objectDistance: objectDistance,\n                iso: iso,\n                aperture: aperture,\n                shutterSpeedDenominator: shutterSpeedDenominator\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"pqRXCl+r05dvJpr02wU6DjhT+IE=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNITCxXQUFVO3dCQUNWWixPQUFPTjt3QkFDUHdCLFVBQVVkO3dCQUNWZSxhQUFZOzs7Ozs7Ozs7Ozs7MEJBR2hCLDhEQUFDakMsZ0RBQU9BO2dCQUNORSxnQkFBZ0JBO2dCQUNoQkUsS0FBS0E7Z0JBQ0xJLFVBQVVBO2dCQUNWRix5QkFBeUJBOzs7Ozs7Ozs7Ozs7QUFJakM7R0FyR01MO0tBQUFBO0FBdUdOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhbWVyYUJvZHkuanM/MmM4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5cbmNvbnN0IENhbWVyYUJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtvYmplY3REaXN0YW5jZSwgc2V0T2JqZWN0RGlzdGFuY2VdID0gdXNlU3RhdGUoMjApO1xuICBjb25zdCBbaXNvLCBzZXRJc29dID0gdXNlU3RhdGUoMTAwKTtcbiAgY29uc3QgW3NodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvcl0gPSB1c2VTdGF0ZSg1MDApOyAvLyBEZWZhdWx0IHRvIDEvNTAwXG4gIGNvbnN0IFthcGVydHVyZSwgc2V0QXBlcnR1cmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gSGFuZGxlIGlucHV0IGNoYW5nZXNcbiAgY29uc3QgaGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRPYmplY3REaXN0YW5jZShwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlzb0NoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldElzbyhwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwZXJ0dXJlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QXBlcnR1cmUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICAvLyBDYWxjdWxhdGUgbWlzc2luZyBpbnB1dHMgYmFzZWQgb24gYXZhaWxhYmxlIGlucHV0c1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIENhbGN1bGF0ZSBtaXNzaW5nIGlucHV0cyBiYXNlZCBvbiBzY2VuYXJpb3NcbiAgICBpZiAoYXBlcnR1cmUgJiYgaXNvICYmIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yKSB7XG4gICAgICBpZiAoIW9iamVjdERpc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWREaXN0YW5jZSA9IChpc28gKiBhcGVydHVyZSAqIGFwZXJ0dXJlICogMikgLyAoc2h1dHRlclNwZWVkRGVub21pbmF0b3IpO1xuICAgICAgICBzZXRPYmplY3REaXN0YW5jZShjYWxjdWxhdGVkRGlzdGFuY2UpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYXBlcnR1cmUgJiYgc2h1dHRlclNwZWVkRGVub21pbmF0b3IgJiYgb2JqZWN0RGlzdGFuY2UpIHtcbiAgICAgIGlmICghaXNvKSB7XG4gICAgICAgIGNvbnN0IGNhbGN1bGF0ZWRJc28gPSAoc2h1dHRlclNwZWVkRGVub21pbmF0b3IgKiBvYmplY3REaXN0YW5jZSkgLyAoYXBlcnR1cmUgKiBhcGVydHVyZSAqIDIpO1xuICAgICAgICBzZXRJc28oY2FsY3VsYXRlZElzbyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc28gJiYgc2h1dHRlclNwZWVkRGVub21pbmF0b3IgJiYgb2JqZWN0RGlzdGFuY2UpIHtcbiAgICAgIGlmICghYXBlcnR1cmUpIHtcbiAgICAgICAgY29uc3QgY2FsY3VsYXRlZEFwZXJ0dXJlID0gTWF0aC5zcXJ0KChpc28gKiBzaHV0dGVyU3BlZWREZW5vbWluYXRvcikgLyAob2JqZWN0RGlzdGFuY2UgKiAyKSk7XG4gICAgICAgIHNldEFwZXJ0dXJlKGNhbGN1bGF0ZWRBcGVydHVyZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbaXNvLCBhcGVydHVyZSwgb2JqZWN0RGlzdGFuY2UsIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIj5DYW1lcmEgQm9keTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvYmplY3REaXN0YW5jZVwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5PYmplY3QgRGlzdGFuY2UgKGZlZXQpOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwib2JqZWN0RGlzdGFuY2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e29iamVjdERpc3RhbmNlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9iamVjdCBEaXN0YW5jZVwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlzb1wiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5JU086PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJpc29cIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e2lzb31cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSXNvQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSVNPXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwic2h1dHRlclNwZWVkRGVub21pbmF0b3JcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+U2h1dHRlciBTcGVlZCBEZW5vbWluYXRvcjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXBlcnR1cmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+QXBlcnR1cmU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgaWQ9XCJhcGVydHVyZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17YXBlcnR1cmV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUFwZXJ0dXJlQ2hhbmdlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQXBlcnR1cmVcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8UmVzdWx0c1xuICAgICAgICBvYmplY3REaXN0YW5jZT17b2JqZWN0RGlzdGFuY2V9XG4gICAgICAgIGlzbz17aXNvfVxuICAgICAgICBhcGVydHVyZT17YXBlcnR1cmV9XG4gICAgICAgIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW1lcmFCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJSZXN1bHRzIiwiQ2FtZXJhQm9keSIsIm9iamVjdERpc3RhbmNlIiwic2V0T2JqZWN0RGlzdGFuY2UiLCJpc28iLCJzZXRJc28iLCJzaHV0dGVyU3BlZWREZW5vbWluYXRvciIsInNldFNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiYXBlcnR1cmUiLCJzZXRBcGVydHVyZSIsImhhbmRsZU9iamVjdERpc3RhbmNlQ2hhbmdlIiwiZXZlbnQiLCJwYXJzZUZsb2F0IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVJc29DaGFuZ2UiLCJwYXJzZUludCIsImhhbmRsZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yQ2hhbmdlIiwiaGFuZGxlQXBlcnR1cmVDaGFuZ2UiLCJjYWxjdWxhdGVkRGlzdGFuY2UiLCJjYWxjdWxhdGVkSXNvIiwiY2FsY3VsYXRlZEFwZXJ0dXJlIiwiTWF0aCIsInNxcnQiLCJkaXYiLCJoMSIsImNsYXNzTmFtZSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});