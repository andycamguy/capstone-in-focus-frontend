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

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Results */ \"./src/components/Results.js\");\n/* harmony import */ var _Results__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Results__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst CameraBody = ()=>{\n    _s();\n    const [objectDistance, setObjectDistance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [iso, setIso] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(100);\n    const [shutterSpeed, setShutterSpeed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [aperture, setAperture] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // Handle input changes\n    const handleObjectDistanceChange = (event)=>{\n        setObjectDistance(parseFloat(event.target.value));\n    };\n    const handleIsoChange = (event)=>{\n        setIso(parseInt(event.target.value));\n    };\n    const handleShutterSpeedChange = (event)=>{\n        setShutterSpeed(parseFloat(event.target.value));\n    };\n    const handleApertureChange = (event)=>{\n        setAperture(parseFloat(event.target.value));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Camera Body\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: objectDistance,\n                onChange: handleObjectDistanceChange,\n                placeholder: \"Object Distance\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: iso,\n                onChange: handleIsoChange,\n                placeholder: \"ISO\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: shutterSpeed,\n                onChange: handleShutterSpeedChange,\n                placeholder: \"Shutter Speed\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: aperture,\n                onChange: handleApertureChange,\n                placeholder: \"Aperture\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Results__WEBPACK_IMPORTED_MODULE_2___default()), {\n                objectDistance: objectDistance,\n                iso: iso,\n                shutterSpeed: shutterSpeed,\n                aperture: aperture\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/CameraBody.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CameraBody, \"JTsHbi+LPmntQWblmWBFj9tSsuo=\");\n_c = CameraBody;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CameraBody);\nvar _c;\n$RefreshReg$(_c, \"CameraBody\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYW1lcmFCb2R5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3QztBQUNSO0FBRWhDLE1BQU1HLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR0osK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDSyxLQUFLQyxPQUFPLEdBQUdOLCtDQUFRQSxDQUFDO0lBQy9CLE1BQU0sQ0FBQ08sY0FBY0MsZ0JBQWdCLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUV6Qyx1QkFBdUI7SUFDdkIsTUFBTVcsNkJBQTZCLENBQUNDO1FBQ2xDUixrQkFBa0JTLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUNqRDtJQUVBLE1BQU1DLGtCQUFrQixDQUFDSjtRQUN2Qk4sT0FBT1csU0FBU0wsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDO0lBRUEsTUFBTUcsMkJBQTJCLENBQUNOO1FBQ2hDSixnQkFBZ0JLLFdBQVdELE1BQU1FLE1BQU0sQ0FBQ0MsS0FBSztJQUMvQztJQUVBLE1BQU1JLHVCQUF1QixDQUFDUDtRQUM1QkYsWUFBWUcsV0FBV0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQzNDO0lBRUEscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU1DLE1BQUs7Z0JBQVNSLE9BQU9aO2dCQUFnQnFCLFVBQVViO2dCQUE0QmMsYUFBWTs7Ozs7OzBCQUM5Riw4REFBQ0g7Z0JBQU1DLE1BQUs7Z0JBQVNSLE9BQU9WO2dCQUFLbUIsVUFBVVI7Z0JBQWlCUyxhQUFZOzs7Ozs7MEJBQ3hFLDhEQUFDSDtnQkFBTUMsTUFBSztnQkFBU1IsT0FBT1I7Z0JBQWNpQixVQUFVTjtnQkFBMEJPLGFBQVk7Ozs7OzswQkFDMUYsOERBQUNIO2dCQUFNQyxNQUFLO2dCQUFTUixPQUFPTjtnQkFBVWUsVUFBVUw7Z0JBQXNCTSxhQUFZOzs7Ozs7MEJBQ2xGLDhEQUFDeEIsaURBQU9BO2dCQUFDRSxnQkFBZ0JBO2dCQUFnQkUsS0FBS0E7Z0JBQUtFLGNBQWNBO2dCQUFjRSxVQUFVQTs7Ozs7Ozs7Ozs7O0FBRy9GO0dBakNNUDtLQUFBQTtBQW1DTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYW1lcmFCb2R5LmpzPzJjODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJztcblxuY29uc3QgQ2FtZXJhQm9keSA9ICgpID0+IHtcbiAgY29uc3QgW29iamVjdERpc3RhbmNlLCBzZXRPYmplY3REaXN0YW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2lzbywgc2V0SXNvXSA9IHVzZVN0YXRlKDEwMCk7XG4gIGNvbnN0IFtzaHV0dGVyU3BlZWQsIHNldFNodXR0ZXJTcGVlZF0gPSB1c2VTdGF0ZSgxKTtcbiAgY29uc3QgW2FwZXJ0dXJlLCBzZXRBcGVydHVyZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBIYW5kbGUgaW5wdXQgY2hhbmdlc1xuICBjb25zdCBoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldE9iamVjdERpc3RhbmNlKHBhcnNlRmxvYXQoZXZlbnQudGFyZ2V0LnZhbHVlKSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSXNvQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0SXNvKHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNodXR0ZXJTcGVlZENoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFNodXR0ZXJTcGVlZChwYXJzZUZsb2F0KGV2ZW50LnRhcmdldC52YWx1ZSkpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUFwZXJ0dXJlQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0QXBlcnR1cmUocGFyc2VGbG9hdChldmVudC50YXJnZXQudmFsdWUpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+Q2FtZXJhIEJvZHk8L2gxPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17b2JqZWN0RGlzdGFuY2V9IG9uQ2hhbmdlPXtoYW5kbGVPYmplY3REaXN0YW5jZUNoYW5nZX0gcGxhY2Vob2xkZXI9XCJPYmplY3QgRGlzdGFuY2VcIiAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17aXNvfSBvbkNoYW5nZT17aGFuZGxlSXNvQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIklTT1wiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtzaHV0dGVyU3BlZWR9IG9uQ2hhbmdlPXtoYW5kbGVTaHV0dGVyU3BlZWRDaGFuZ2V9IHBsYWNlaG9sZGVyPVwiU2h1dHRlciBTcGVlZFwiIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXthcGVydHVyZX0gb25DaGFuZ2U9e2hhbmRsZUFwZXJ0dXJlQ2hhbmdlfSBwbGFjZWhvbGRlcj1cIkFwZXJ0dXJlXCIgLz5cbiAgICAgIDxSZXN1bHRzIG9iamVjdERpc3RhbmNlPXtvYmplY3REaXN0YW5jZX0gaXNvPXtpc299IHNodXR0ZXJTcGVlZD17c2h1dHRlclNwZWVkfSBhcGVydHVyZT17YXBlcnR1cmV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW1lcmFCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJSZXN1bHRzIiwiQ2FtZXJhQm9keSIsIm9iamVjdERpc3RhbmNlIiwic2V0T2JqZWN0RGlzdGFuY2UiLCJpc28iLCJzZXRJc28iLCJzaHV0dGVyU3BlZWQiLCJzZXRTaHV0dGVyU3BlZWQiLCJhcGVydHVyZSIsInNldEFwZXJ0dXJlIiwiaGFuZGxlT2JqZWN0RGlzdGFuY2VDaGFuZ2UiLCJldmVudCIsInBhcnNlRmxvYXQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUlzb0NoYW5nZSIsInBhcnNlSW50IiwiaGFuZGxlU2h1dHRlclNwZWVkQ2hhbmdlIiwiaGFuZGxlQXBlcnR1cmVDaGFuZ2UiLCJkaXYiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CameraBody.js\n"));

/***/ }),

/***/ "./src/components/Results.js":
/*!***********************************!*\
  !*** ./src/components/Results.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});