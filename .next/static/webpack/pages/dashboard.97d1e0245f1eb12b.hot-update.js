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

/***/ "./src/pages/dashboard/index.js":
/*!**************************************!*\
  !*** ./src/pages/dashboard/index.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CameraBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CameraBody */ \"./src/components/CameraBody.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLogin = async ()=>{\n        try {\n            // Make API call to your backend for authentication using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/login\", {\n                // Add necessary user credentials in the request body\n                email: \"user@example.com\",\n                password: \"password123\"\n            });\n            if (response.status === 200) {\n                setLoggedIn(true); // Update login status\n            } else {\n            // Handle login error\n            }\n        } catch (error) {\n            console.error(\"Login error:\", error);\n        }\n    };\n    const handleLogout = async ()=>{\n        try {\n            // Make API call to log out using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/logout\");\n            if (response.status === 200) {\n                setLoggedIn(false); // Update login status\n            } else {\n            // Handle logout error\n            }\n        } catch (error) {\n            console.error(\"Logout error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"cyan\",\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4\",\n                style: {\n                    color: \"white\"\n                },\n                children: \"Project In-Focus\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/about\",\n                    style: {\n                        color: \"white\",\n                        textDecoration: \"none\"\n                    },\n                    children: \"Documentation\"\n                }, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        style: {\n                            color: \"white\",\n                            textDecoration: \"none\"\n                        },\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"Log In\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CameraBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                loggedIn: loggedIn\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"rumETxDPcQWJcg8a6Y55ZSVDz7g=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBQ3dCO0FBQzNCO0FBQ3FCO0FBRWhDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsY0FBYztRQUNsQixJQUFJO1lBQ0YsK0RBQStEO1lBQy9ELE1BQU1DLFdBQVcsTUFBTU4sa0RBQVUsQ0FBQyxjQUFjO2dCQUM5QyxxREFBcUQ7Z0JBQ3JEUSxPQUFPO2dCQUNQQyxVQUFVO1lBQ1o7WUFFQSxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JOLFlBQVksT0FBTyxzQkFBc0I7WUFDM0MsT0FBTztZQUNMLHFCQUFxQjtZQUN2QjtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtRQUNoQztJQUNGO0lBRUEsTUFBTUUsZUFBZTtRQUNuQixJQUFJO1lBQ0YsdUNBQXVDO1lBQ3ZDLE1BQU1QLFdBQVcsTUFBTU4sa0RBQVUsQ0FBQztZQUVsQyxJQUFJTSxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JOLFlBQVksUUFBUSxzQkFBc0I7WUFDNUMsT0FBTztZQUNMLHNCQUFzQjtZQUN4QjtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsaUJBQWlCQTtRQUNqQztJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLE9BQU87WUFBRUMsaUJBQWlCO1lBQVFDLFNBQVM7UUFBTzs7MEJBQ3JELDhEQUFDQztnQkFBR0MsV0FBVTtnQkFBT0osT0FBTztvQkFBRUssT0FBTztnQkFBUTswQkFBRzs7Ozs7OzBCQUdoRCw4REFBQ047Z0JBQUlLLFdBQVU7MEJBQ2IsNEVBQUNyQixrREFBSUE7b0JBQUN1QixNQUFLO29CQUFTTixPQUFPO3dCQUFFSyxPQUFPO3dCQUFTRSxnQkFBZ0I7b0JBQU87OEJBQUc7Ozs7Ozs7Ozs7OzBCQUl6RSw4REFBQ1I7Z0JBQUlLLFdBQVU7Ozs7OztZQUdkaEIseUJBQ0MsOERBQUNvQjtnQkFBT0MsU0FBU1g7MEJBQWM7Ozs7O3FDQUUvQiw4REFBQ0M7O2tDQUNDLDhEQUFDaEIsa0RBQUlBO3dCQUFDdUIsTUFBSzt3QkFBWU4sT0FBTzs0QkFBRUssT0FBTzs0QkFBU0UsZ0JBQWdCO3dCQUFPO2tDQUFHOzs7Ozs7a0NBRzFFLDhEQUFDQzt3QkFBT0MsU0FBU25CO3dCQUFhVSxPQUFPOzRCQUFFVSxZQUFZO3dCQUFPO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBS2pFLDhEQUFDMUIsOERBQVVBO2dCQUFDSSxVQUFVQTs7Ozs7OzBCQUN0Qiw4REFBQ0YsMkRBQU9BOzs7Ozs7Ozs7OztBQUdkO0dBbEV3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9pbmRleC5qcz9mZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgQ2FtZXJhQm9keSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbWVyYUJvZHknO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtsb2dnZWRJbiwgc2V0TG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNYWtlIEFQSSBjYWxsIHRvIHlvdXIgYmFja2VuZCBmb3IgYXV0aGVudGljYXRpb24gdXNpbmcgQXhpb3NcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIHtcbiAgICAgICAgLy8gQWRkIG5lY2Vzc2FyeSB1c2VyIGNyZWRlbnRpYWxzIGluIHRoZSByZXF1ZXN0IGJvZHlcbiAgICAgICAgZW1haWw6ICd1c2VyQGV4YW1wbGUuY29tJyxcbiAgICAgICAgcGFzc3dvcmQ6ICdwYXNzd29yZDEyMycsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHNldExvZ2dlZEluKHRydWUpOyAvLyBVcGRhdGUgbG9naW4gc3RhdHVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgbG9naW4gZXJyb3JcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignTG9naW4gZXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIE1ha2UgQVBJIGNhbGwgdG8gbG9nIG91dCB1c2luZyBBeGlvc1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpO1xuXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgc2V0TG9nZ2VkSW4oZmFsc2UpOyAvLyBVcGRhdGUgbG9naW4gc3RhdHVzXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBIYW5kbGUgbG9nb3V0IGVycm9yXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ291dCBlcnJvcjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdjeWFuJywgcGFkZGluZzogJzIwcHgnIH19PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIiBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgUHJvamVjdCBJbi1Gb2N1c1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICB7LyogTm8gc3BlY2lmaWMgc3R5bGluZyBmb3IgdGhpcyBkaXYgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsb2dnZWRJbiA/IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBPdXQ8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPENhbWVyYUJvZHkgbG9nZ2VkSW49e2xvZ2dlZElufSAvPlxuICAgICAgPFJlc3VsdHM+PC9SZXN1bHRzPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQ2FtZXJhQm9keSIsImF4aW9zIiwiUmVzdWx0cyIsIlBhZ2UiLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwiaGFuZGxlTG9naW4iLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9nb3V0IiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiaDEiLCJjbGFzc05hbWUiLCJjb2xvciIsImhyZWYiLCJ0ZXh0RGVjb3JhdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});