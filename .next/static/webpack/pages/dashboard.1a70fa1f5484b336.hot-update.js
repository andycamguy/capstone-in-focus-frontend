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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n/* harmony import */ var _workspace_capstone_in_focus_frontend_src_components_dslr_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/dslr.jpeg */ \"./src/components/dslr.jpeg\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst API_URL = \"https://8000-andycamguy-capstoneproj-jkszkagta35.ws-us104.gitpod.io/api/\";\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistanceFeet, setObjectDistanceFeet] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1600);\n    const [shutterSpeedDenominator, setShutterSpeedDenominator] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(500); // Default to 1/500\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistanceFeet(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedDenominatorChange = (event)=>{\n        setShutterSpeedDenominator(parseInt(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    const inputFields = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\",\n            background: \"#333\",\n            display: \"flex\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4 text-center text-white\",\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"objectDistance\",\n                        className: \"form-label\",\n                        children: \"Object Distance (feet):\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"objectDistance\",\n                        className: \"form-control\",\n                        value: objectDistanceFeet,\n                        onChange: handleObjectDistanceChange,\n                        placeholder: \"Object Distance\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"iso\",\n                        className: \"form-label\",\n                        children: \"ISO:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"iso\",\n                        className: \"form-control\",\n                        value: iso,\n                        onChange: handleIsoChange,\n                        placeholder: \"ISO\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"shutterSpeedDenominator\",\n                        className: \"form-label\",\n                        children: \"Shutter Speed Denominator:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"shutterSpeedDenominator\",\n                        className: \"form-control\",\n                        value: shutterSpeedDenominator,\n                        onChange: handleShutterSpeedDenominatorChange,\n                        placeholder: \"Shutter Speed Denominator\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"aperture\",\n                        className: \"form-label\",\n                        children: \"Aperture:\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        id: \"aperture\",\n                        className: \"form-control\",\n                        value: aperture,\n                        onChange: handleApertureChange,\n                        placeholder: \"Aperture\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flex: 1\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        flex: 1,\n                        maxWidth: \"50%\",\n                        marginRight: \"20px\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _workspace_capstone_in_focus_frontend_src_components_dslr_jpeg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"DSLR Camera\",\n                        className: \"img-fluid\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                        lineNumber: 102,\n                        columnNumber: 7\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                    lineNumber: 101,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n    /*\n  const resultsComponent = (\n    <div\n      style={{\n        float: 'right',\n        marginLeft: '20px', // Add margin for spacing\n        boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.5)',\n      }}\n    >\n      <Results\n        objectDistanceMillimeters={objectDistanceFeet * 304.8}\n        iso={iso}\n        aperture={aperture}\n        shutterSpeedDenominator={shutterSpeedDenominator}\n      />\n    </div>\n  );\n*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            padding: \"20px\",\n            borderRadius: \"10px\",\n            boxShadow: \"0px 0px 10px rgba(0, 0, 0, 0.5)\",\n            backgroundColor: \"var(--secondary-color)\",\n            color: \"#59f5f5\"\n        },\n        children: inputFields\n    }, void 0, false, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 126,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"Q5KtCcNbfGHFi+cqkqp2Dgouvyw=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtZQUNqQkMsT0FBTztRQUNUO2tCQUVDTjs7Ozs7O0FBSVA7R0FoSU1sQjtLQUFBQTtBQWtJTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYW1lcmFCb2R5LmpzPzJjODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL1Jlc3VsdHMnO1xuaW1wb3J0IGRzbHJJbWFnZSBmcm9tICcvd29ya3NwYWNlL2NhcHN0b25lLWluLWZvY3VzLWZyb250ZW5kL3NyYy9jb21wb25lbnRzL2RzbHIuanBlZydcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUFwZXJ0dXJlLFxuICBjYWxjdWxhdGVJU08sXG4gIGNhbGN1bGF0ZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yLFxuICBjYWxjdWxhdGVPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuY29uc3QgQVBJX1VSTCA9IFwiaHR0cHM6Ly84MDAwLWFuZHljYW1ndXktY2Fwc3RvbmVwcm9qLWprc3prYWd0YTM1LndzLXVzMTA0LmdpdHBvZC5pby9hcGkvXCJcbmNvbnN0IENhbWVyYUJvZHkgPSAoKSA9PiB7XG4gIGNvbnN0IFtvYmplY3REaXN0YW5jZUZlZXQsIHNldE9iamVjdERpc3RhbmNlRmVldF0gPSB1c2VTdGF0ZSgyMCk7XG4gIGNvbnN0IFtpc28sIHNldElzb10gPSB1c2VTdGF0ZSgxNjAwKTtcbiAgY29uc3QgW3NodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvcl0gPSB1c2VTdGF0ZSg1MDApOyAvLyBEZWZhdWx0IHRvIDEvNTAwXG4gIGNvbnN0IFthcGVydHVyZSwgc2V0QXBlcnR1cmVdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gSGFuZGxlIGlucHV0IGNoYW5nZXNcbiAgY29uc3QgaGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRPYmplY3REaXN0YW5jZUZlZXQocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJc29DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRJc28ocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvcihwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBcGVydHVyZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldEFwZXJ0dXJlKHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaW5wdXRGaWVsZHMgPSAoXG4gICAgPGRpdlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZzogJzIwcHgnLFxuICAgICAgXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1zZWNvbmRhcnktY29sb3IpJyxcbiAgICAgICAgY29sb3I6ICcjNTlmNWY1JyxcbiAgICAgICAgYmFja2dyb3VuZDogJyMzMzMnLCAvLyBEYXJrIGdyZXkgYmFja2dyb3VuZCBjb2xvclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsIC8vIEFkZCBkaXNwbGF5IGZsZXhcbiAgICAgIH19XG4gICAgPlxuICAgIFxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiPkNhbWVyYSBCb2R5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9iamVjdERpc3RhbmNlXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlxuICAgICAgICAgIE9iamVjdCBEaXN0YW5jZSAoZmVldCk6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwib2JqZWN0RGlzdGFuY2VcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e29iamVjdERpc3RhbmNlRmVldH1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJPYmplY3QgRGlzdGFuY2VcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJpc29cIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgSVNPOlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cImlzb1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICB2YWx1ZT17aXNvfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJc29DaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJU09cIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJzaHV0dGVyU3BlZWREZW5vbWluYXRvclwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5cbiAgICAgICAgICBTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yOlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICBpZD1cInNodXR0ZXJTcGVlZERlbm9taW5hdG9yXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgIHZhbHVlPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2h1dHRlclNwZWVkRGVub21pbmF0b3JDaGFuZ2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTaHV0dGVyIFNwZWVkIERlbm9taW5hdG9yXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXBlcnR1cmVcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+XG4gICAgICAgICAgQXBlcnR1cmU6XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIGlkPVwiYXBlcnR1cmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgdmFsdWU9e2FwZXJ0dXJlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBcGVydHVyZUNoYW5nZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFwZXJ0dXJlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxIH19PlxuICAgICAgPGRpdiBzdHlsZT17eyBmbGV4OiAxLCBtYXhXaWR0aDogJzUwJScsIG1hcmdpblJpZ2h0OiAnMjBweCcgfX0+XG4gICAgICA8aW1nIHNyYz17ZHNsckltYWdlfSBhbHQ9XCJEU0xSIENhbWVyYVwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG4vKlxuICBjb25zdCByZXN1bHRzQ29tcG9uZW50ID0gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGZsb2F0OiAncmlnaHQnLFxuICAgICAgICBtYXJnaW5MZWZ0OiAnMjBweCcsIC8vIEFkZCBtYXJnaW4gZm9yIHNwYWNpbmdcbiAgICAgICAgYm94U2hhZG93OiAnMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFJlc3VsdHNcbiAgICAgICAgb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycz17b2JqZWN0RGlzdGFuY2VGZWV0ICogMzA0Ljh9XG4gICAgICAgIGlzbz17aXNvfVxuICAgICAgICBhcGVydHVyZT17YXBlcnR1cmV9XG4gICAgICAgIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yPXtzaHV0dGVyU3BlZWREZW5vbWluYXRvcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG4qL1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6ICcyMHB4JyxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgICAgIGJveFNoYWRvdzogJzBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1zZWNvbmRhcnktY29sb3IpJyxcbiAgICAgICAgY29sb3I6ICcjNTlmNWY1JyxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2lucHV0RmllbGRzfVxuICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYUJvZHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlJlc3VsdHMiLCJkc2xySW1hZ2UiLCJjYWxjdWxhdGVBcGVydHVyZSIsImNhbGN1bGF0ZUlTTyIsImNhbGN1bGF0ZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiY2FsY3VsYXRlT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycyIsIkFQSV9VUkwiLCJDYW1lcmFCb2R5Iiwib2JqZWN0RGlzdGFuY2VGZWV0Iiwic2V0T2JqZWN0RGlzdGFuY2VGZWV0IiwiaXNvIiwic2V0SXNvIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJzZXRTaHV0dGVyU3BlZWREZW5vbWluYXRvciIsImFwZXJ0dXJlIiwic2V0QXBlcnR1cmUiLCJoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSIsImV2ZW50IiwicGFyc2VGbG9hdCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlSXNvQ2hhbmdlIiwicGFyc2VJbnQiLCJoYW5kbGVTaHV0dGVyU3BlZWREZW5vbWluYXRvckNoYW5nZSIsImhhbmRsZUFwZXJ0dXJlQ2hhbmdlIiwiaW5wdXRGaWVsZHMiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJhY2tncm91bmQiLCJkaXNwbGF5IiwiaDEiLCJjbGFzc05hbWUiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiLCJmbGV4IiwibWF4V2lkdGgiLCJtYXJnaW5SaWdodCIsImltZyIsInNyYyIsImFsdCIsImJvcmRlclJhZGl1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ })

});