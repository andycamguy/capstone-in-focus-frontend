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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ \"./src/components/helpers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Results = (param)=>{\n    let { loggedIn, objectDistanceFeet, iso, shutterSpeedDenominator, aperture } = param;\n    _s();\n    const objectDistanceMillimeters = objectDistanceFeet * 304.8; // Convert feet to millimeters\n    const calculatedAperture = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateAperture)(iso, shutterSpeedDenominator, objectDistanceMillimeters);\n    const calculatedISO = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateISO)(shutterSpeedDenominator, calculatedAperture, objectDistanceMillimeters);\n    const calculatedShutterSpeedDenominator = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateShutterSpeedDenominator)(calculatedISO, calculatedAperture, objectDistanceMillimeters);\n    const calculatedObjectDistanceMillimeters = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.calculateObjectDistanceMillimeters)(calculatedISO, calculatedShutterSpeedDenominator, calculatedAperture);\n    const standardFstops = [\n        1.4,\n        2,\n        2.8,\n        4,\n        5.6,\n        8,\n        11,\n        16,\n        22\n    ];\n    const nearestAperture = standardFstops.reduce((prev, curr)=>{\n        return Math.abs(curr - calculatedAperture) < Math.abs(prev - calculatedAperture) ? curr : prev;\n    });\n    const [inputsValid, setInputsValid] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const isValid = !isNaN(objectDistanceMillimeters) && !isNaN(iso) && !isNaN(shutterSpeedDenominator) && !isNaN(aperture);\n        setInputsValid(isValid);\n    }, [\n        objectDistanceMillimeters,\n        iso,\n        shutterSpeedDenominator,\n        aperture\n    ]);\n    const containerStyle = {\n        backgroundColor: inputsValid ? \"green\" : \"red\",\n        padding: \"10px\",\n        borderRadius: \"5px\",\n        boxShadow: \"0px 0px 5px rgba(0, 0, 0, 0.5)\",\n        color: \"white\",\n        textAlign: \"center\",\n        float: \"right\"\n    };\n    const handleSaveClick = ()=>{\n        if (loggedIn) {\n            const resultsData = {\n                objectDistanceMillimeters,\n                iso: calculatedISO,\n                shutterSpeedDenominator: calculatedShutterSpeedDenominator,\n                aperture: nearestAperture\n            };\n            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/save-results/\", resultsData).then((response)=>{\n                console.log(\"Results saved successfully:\", response.data);\n            }).catch((error)=>{\n                console.error(\"Error saving results:\", error);\n            });\n        } else {\n            alert(\"This is a user-only function. Please log in to save results.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Object Distance: \",\n                    calculatedObjectDistanceMillimeters.toFixed(2),\n                    \" millimeters\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"ISO: \",\n                    calculatedISO\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Shutter Speed: 1/\",\n                    calculatedShutterSpeedDenominator,\n                    \" seconds\"\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Aperture: f/\",\n                    nearestAperture.toFixed(1)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            inputsValid ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Inputs Valid\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 73,\n                columnNumber: 22\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Invalid Inputs\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 73,\n                columnNumber: 44\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleSaveClick,\n                children: \"Save Results\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/components/Results.js\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Results, \"uQQh0SoKLguc5oc9aMcLvEAzxKE=\");\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUN6QjtBQU1QO0FBRW5CLE1BQU1RLFVBQVU7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxHQUFHLEVBQUVDLHVCQUF1QixFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZGLE1BQU1DLDRCQUE0QkoscUJBQXFCLE9BQU8sOEJBQThCO0lBQzVGLE1BQU1LLHFCQUFxQlgsMkRBQWlCQSxDQUFDTyxLQUFLQyx5QkFBeUJFO0lBQzNFLE1BQU1FLGdCQUFnQlgsc0RBQVlBLENBQUNPLHlCQUF5Qkcsb0JBQW9CRDtJQUNoRixNQUFNRyxvQ0FBb0NYLDBFQUFnQ0EsQ0FBQ1UsZUFBZUQsb0JBQW9CRDtJQUM5RyxNQUFNSSxzQ0FBc0NYLDRFQUFrQ0EsQ0FBQ1MsZUFBZUMsbUNBQW1DRjtJQUVqSSxNQUFNSSxpQkFBaUI7UUFBQztRQUFLO1FBQUc7UUFBSztRQUFHO1FBQUs7UUFBRztRQUFJO1FBQUk7S0FBRztJQUUzRCxNQUFNQyxrQkFBa0JELGVBQWVFLE1BQU0sQ0FBQyxDQUFDQyxNQUFNQztRQUNuRCxPQUFPQyxLQUFLQyxHQUFHLENBQUNGLE9BQU9SLHNCQUFzQlMsS0FBS0MsR0FBRyxDQUFDSCxPQUFPUCxzQkFBc0JRLE9BQU9EO0lBQzVGO0lBRUEsTUFBTSxDQUFDSSxhQUFhQyxlQUFlLEdBQUcxQiwrQ0FBUUEsQ0FBQztJQUUvQ0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNMEIsVUFDSixDQUFDQyxNQUFNZiw4QkFDUCxDQUFDZSxNQUFNbEIsUUFDUCxDQUFDa0IsTUFBTWpCLDRCQUNQLENBQUNpQixNQUFNaEI7UUFFVGMsZUFBZUM7SUFDakIsR0FBRztRQUFDZDtRQUEyQkg7UUFBS0M7UUFBeUJDO0tBQVM7SUFFdEUsTUFBTWlCLGlCQUFpQjtRQUNyQkMsaUJBQWlCTCxjQUFjLFVBQVU7UUFDekNNLFNBQVM7UUFDVEMsY0FBYztRQUNkQyxXQUFXO1FBQ1hDLE9BQU87UUFDUEMsV0FBVztRQUNYQyxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxrQkFBa0I7UUFDdEIsSUFBSTdCLFVBQVU7WUFDWixNQUFNOEIsY0FBYztnQkFDbEJ6QjtnQkFDQUgsS0FBS0s7Z0JBQ0xKLHlCQUF5Qks7Z0JBQ3pCSixVQUFVTztZQUNaO1lBRUFqQixrREFBVSxDQUFDLHNCQUFzQm9DLGFBQzlCRSxJQUFJLENBQUNDLENBQUFBO2dCQUNKQyxRQUFRQyxHQUFHLENBQUMsK0JBQStCRixTQUFTRyxJQUFJO1lBQzFELEdBQ0NDLEtBQUssQ0FBQ0MsQ0FBQUE7Z0JBQ0xKLFFBQVFJLEtBQUssQ0FBQyx5QkFBeUJBO1lBQ3pDO1FBQ0osT0FBTztZQUNMQyxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPcEI7OzBCQUNWLDhEQUFDcUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O29CQUFFO29CQUFrQmxDLG9DQUFvQ21DLE9BQU8sQ0FBQztvQkFBRzs7Ozs7OzswQkFDcEUsOERBQUNEOztvQkFBRTtvQkFBTXBDOzs7Ozs7OzBCQUNULDhEQUFDb0M7O29CQUFFO29CQUFrQm5DO29CQUFrQzs7Ozs7OzswQkFDdkQsOERBQUNtQzs7b0JBQUU7b0JBQWFoQyxnQkFBZ0JpQyxPQUFPLENBQUM7Ozs7Ozs7WUFDdkMzQiw0QkFBYyw4REFBQzBCOzBCQUFFOzs7OzswQ0FBbUIsOERBQUNBOzBCQUFFOzs7Ozs7MEJBQ3hDLDhEQUFDRTtnQkFBT0MsU0FBU2pCOzBCQUFpQjs7Ozs7Ozs7Ozs7O0FBR3hDO0dBbkVNOUI7S0FBQUE7QUFxRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUmVzdWx0cy5qcz9mMDk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7XG4gIGNhbGN1bGF0ZUFwZXJ0dXJlLFxuICBjYWxjdWxhdGVJU08sXG4gIGNhbGN1bGF0ZVNodXR0ZXJTcGVlZERlbm9taW5hdG9yLFxuICBjYWxjdWxhdGVPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzLFxufSBmcm9tICcuL2hlbHBlcnMnO1xuXG5jb25zdCBSZXN1bHRzID0gKHsgbG9nZ2VkSW4sIG9iamVjdERpc3RhbmNlRmVldCwgaXNvLCBzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgYXBlcnR1cmUgfSkgPT4ge1xuICBjb25zdCBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzID0gb2JqZWN0RGlzdGFuY2VGZWV0ICogMzA0Ljg7IC8vIENvbnZlcnQgZmVldCB0byBtaWxsaW1ldGVyc1xuICBjb25zdCBjYWxjdWxhdGVkQXBlcnR1cmUgPSBjYWxjdWxhdGVBcGVydHVyZShpc28sIHNodXR0ZXJTcGVlZERlbm9taW5hdG9yLCBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKTtcbiAgY29uc3QgY2FsY3VsYXRlZElTTyA9IGNhbGN1bGF0ZUlTTyhzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgY2FsY3VsYXRlZEFwZXJ0dXJlLCBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKTtcbiAgY29uc3QgY2FsY3VsYXRlZFNodXR0ZXJTcGVlZERlbm9taW5hdG9yID0gY2FsY3VsYXRlU2h1dHRlclNwZWVkRGVub21pbmF0b3IoY2FsY3VsYXRlZElTTywgY2FsY3VsYXRlZEFwZXJ0dXJlLCBvYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKTtcbiAgY29uc3QgY2FsY3VsYXRlZE9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMgPSBjYWxjdWxhdGVPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzKGNhbGN1bGF0ZWRJU08sIGNhbGN1bGF0ZWRTaHV0dGVyU3BlZWREZW5vbWluYXRvciwgY2FsY3VsYXRlZEFwZXJ0dXJlKTtcblxuICBjb25zdCBzdGFuZGFyZEZzdG9wcyA9IFsxLjQsIDIsIDIuOCwgNCwgNS42LCA4LCAxMSwgMTYsIDIyXTtcblxuICBjb25zdCBuZWFyZXN0QXBlcnR1cmUgPSBzdGFuZGFyZEZzdG9wcy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHtcbiAgICByZXR1cm4gTWF0aC5hYnMoY3VyciAtIGNhbGN1bGF0ZWRBcGVydHVyZSkgPCBNYXRoLmFicyhwcmV2IC0gY2FsY3VsYXRlZEFwZXJ0dXJlKSA/IGN1cnIgOiBwcmV2O1xuICB9KTtcblxuICBjb25zdCBbaW5wdXRzVmFsaWQsIHNldElucHV0c1ZhbGlkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGlzVmFsaWQgPVxuICAgICAgIWlzTmFOKG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMpICYmXG4gICAgICAhaXNOYU4oaXNvKSAmJlxuICAgICAgIWlzTmFOKHNodXR0ZXJTcGVlZERlbm9taW5hdG9yKSAmJlxuICAgICAgIWlzTmFOKGFwZXJ0dXJlKTtcblxuICAgIHNldElucHV0c1ZhbGlkKGlzVmFsaWQpO1xuICB9LCBbb2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycywgaXNvLCBzaHV0dGVyU3BlZWREZW5vbWluYXRvciwgYXBlcnR1cmVdKTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGlucHV0c1ZhbGlkID8gJ2dyZWVuJyA6ICdyZWQnLFxuICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxuICAgIGJveFNoYWRvdzogJzBweCAwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICBmbG9hdDogJ3JpZ2h0JywgLy8gQWxpZ24gdG8gdGhlIHJpZ2h0XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2F2ZUNsaWNrID0gKCkgPT4ge1xuICAgIGlmIChsb2dnZWRJbikge1xuICAgICAgY29uc3QgcmVzdWx0c0RhdGEgPSB7XG4gICAgICAgIG9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMsXG4gICAgICAgIGlzbzogY2FsY3VsYXRlZElTTyxcbiAgICAgICAgc2h1dHRlclNwZWVkRGVub21pbmF0b3I6IGNhbGN1bGF0ZWRTaHV0dGVyU3BlZWREZW5vbWluYXRvcixcbiAgICAgICAgYXBlcnR1cmU6IG5lYXJlc3RBcGVydHVyZSxcbiAgICAgIH07XG5cbiAgICAgIGF4aW9zLnBvc3QoJy9hcGkvc2F2ZS1yZXN1bHRzLycsIHJlc3VsdHNEYXRhKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3VsdHMgc2F2ZWQgc3VjY2Vzc2Z1bGx5OicsIHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyByZXN1bHRzOicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdUaGlzIGlzIGEgdXNlci1vbmx5IGZ1bmN0aW9uLiBQbGVhc2UgbG9nIGluIHRvIHNhdmUgcmVzdWx0cy4nKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8aDI+UmVzdWx0czwvaDI+XG4gICAgICA8cD5PYmplY3QgRGlzdGFuY2U6IHtjYWxjdWxhdGVkT2JqZWN0RGlzdGFuY2VNaWxsaW1ldGVycy50b0ZpeGVkKDIpfSBtaWxsaW1ldGVyczwvcD5cbiAgICAgIDxwPklTTzoge2NhbGN1bGF0ZWRJU099PC9wPlxuICAgICAgPHA+U2h1dHRlciBTcGVlZDogMS97Y2FsY3VsYXRlZFNodXR0ZXJTcGVlZERlbm9taW5hdG9yfSBzZWNvbmRzPC9wPlxuICAgICAgPHA+QXBlcnR1cmU6IGYve25lYXJlc3RBcGVydHVyZS50b0ZpeGVkKDEpfTwvcD5cbiAgICAgIHtpbnB1dHNWYWxpZCA/IDxwPklucHV0cyBWYWxpZDwvcD4gOiA8cD5JbnZhbGlkIElucHV0czwvcD59XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNhdmVDbGlja30+U2F2ZSBSZXN1bHRzPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImNhbGN1bGF0ZUFwZXJ0dXJlIiwiY2FsY3VsYXRlSVNPIiwiY2FsY3VsYXRlU2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJjYWxjdWxhdGVPYmplY3REaXN0YW5jZU1pbGxpbWV0ZXJzIiwiUmVzdWx0cyIsImxvZ2dlZEluIiwib2JqZWN0RGlzdGFuY2VGZWV0IiwiaXNvIiwic2h1dHRlclNwZWVkRGVub21pbmF0b3IiLCJhcGVydHVyZSIsIm9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMiLCJjYWxjdWxhdGVkQXBlcnR1cmUiLCJjYWxjdWxhdGVkSVNPIiwiY2FsY3VsYXRlZFNodXR0ZXJTcGVlZERlbm9taW5hdG9yIiwiY2FsY3VsYXRlZE9iamVjdERpc3RhbmNlTWlsbGltZXRlcnMiLCJzdGFuZGFyZEZzdG9wcyIsIm5lYXJlc3RBcGVydHVyZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiTWF0aCIsImFicyIsImlucHV0c1ZhbGlkIiwic2V0SW5wdXRzVmFsaWQiLCJpc1ZhbGlkIiwiaXNOYU4iLCJjb250YWluZXJTdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjb2xvciIsInRleHRBbGlnbiIsImZsb2F0IiwiaGFuZGxlU2F2ZUNsaWNrIiwicmVzdWx0c0RhdGEiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiYWxlcnQiLCJkaXYiLCJzdHlsZSIsImgyIiwicCIsInRvRml4ZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Results.js\n"));

/***/ })

});