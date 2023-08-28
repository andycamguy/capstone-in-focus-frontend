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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CameraBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CameraBody */ \"./src/components/CameraBody.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLogin = async ()=>{\n        try {\n            // Make API call to your backend for authentication using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/login\", {\n                // Add necessary user credentials in the request body\n                email: \"user@example.com\",\n                password: \"password123\"\n            });\n            if (response.status === 200) {\n                setLoggedIn(true); // Update login status\n            } else {\n            // Handle login error\n            }\n        } catch (error) {\n            console.error(\"Login error:\", error);\n        }\n    };\n    const handleLogout = async ()=>{\n        try {\n            // Make API call to log out using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/logout\");\n            if (response.status === 200) {\n                setLoggedIn(false); // Update login status\n            } else {\n            // Handle logout error\n            }\n        } catch (error) {\n            console.error(\"Logout error:\", error);\n        }\n    };\n    const resultsComponentStyle = {\n        float: \"right\",\n        marginLeft: \"20px\",\n        boxShadow: \"0px 0px 1px rgba(0, 0, 0, 0.5)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            backgroundColor: \"cyan\",\n            padding: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mb-4\",\n                style: {\n                    color: \"black\"\n                },\n                children: \"Project In-Focus\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/about\",\n                    style: {\n                        color: \"black\",\n                        textDecoration: \"none\"\n                    },\n                    children: \"Documentation\"\n                }, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-3\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleLogout,\n                children: \"Log Out\"\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/register\",\n                        style: {\n                            color: \"white\",\n                            textDecoration: \"none\"\n                        },\n                        children: \"Sign Up\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogin,\n                        style: {\n                            marginLeft: \"10px\"\n                        },\n                        children: \"Log In\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 65,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CameraBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                loggedIn: loggedIn\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                style: resultsComponentStyle\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"rumETxDPcQWJcg8a6Y55ZSVDz7g=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBQ3dCO0FBQzNCO0FBQ3FCO0FBRWhDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsY0FBYztRQUNsQixJQUFJO1lBQ0YsK0RBQStEO1lBQy9ELE1BQU1DLFdBQVcsTUFBTU4sa0RBQVUsQ0FBQyxjQUFjO2dCQUM5QyxxREFBcUQ7Z0JBQ3JEUSxPQUFPO2dCQUNQQyxVQUFVO1lBQ1o7WUFFQSxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JOLFlBQVksT0FBTyxzQkFBc0I7WUFDM0MsT0FBTztZQUNMLHFCQUFxQjtZQUN2QjtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtRQUNoQztJQUNGO0lBRUEsTUFBTUUsZUFBZTtRQUNuQixJQUFJO1lBQ0YsdUNBQXVDO1lBQ3ZDLE1BQU1QLFdBQVcsTUFBTU4sa0RBQVUsQ0FBQztZQUVsQyxJQUFJTSxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JOLFlBQVksUUFBUSxzQkFBc0I7WUFDNUMsT0FBTztZQUNMLHNCQUFzQjtZQUN4QjtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsaUJBQWlCQTtRQUNqQztJQUNGO0lBQ0EsTUFBTUcsd0JBQXdCO1FBQzVCQyxPQUFPO1FBQ1BDLFlBQVk7UUFDWkMsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU87WUFBRUMsaUJBQWlCO1lBQVFDLFNBQVM7UUFBTzs7MEJBQ3JELDhEQUFDQztnQkFBR0MsV0FBVTtnQkFBT0osT0FBTztvQkFBRUssT0FBTztnQkFBUTswQkFBRzs7Ozs7OzBCQUdoRCw4REFBQ047Z0JBQUlLLFdBQVU7MEJBQ2IsNEVBQUN6QixrREFBSUE7b0JBQUMyQixNQUFLO29CQUFTTixPQUFPO3dCQUFFSyxPQUFPO3dCQUFTRSxnQkFBZ0I7b0JBQU87OEJBQUc7Ozs7Ozs7Ozs7OzBCQUl6RSw4REFBQ1I7Z0JBQUlLLFdBQVU7Ozs7OztZQUdkcEIseUJBQ0MsOERBQUN3QjtnQkFBT0MsU0FBU2Y7MEJBQWM7Ozs7O3FDQUUvQiw4REFBQ0s7O2tDQUNDLDhEQUFDcEIsa0RBQUlBO3dCQUFDMkIsTUFBSzt3QkFBWU4sT0FBTzs0QkFBRUssT0FBTzs0QkFBU0UsZ0JBQWdCO3dCQUFPO2tDQUFHOzs7Ozs7a0NBRzFFLDhEQUFDQzt3QkFBT0MsU0FBU3ZCO3dCQUFhYyxPQUFPOzRCQUFFSCxZQUFZO3dCQUFPO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBS2pFLDhEQUFDakIsOERBQVVBO2dCQUFDSSxVQUFVQTs7Ozs7OzBCQUN0Qiw4REFBQ0YsMkRBQU9BO2dCQUFDa0IsT0FBT0w7Ozs7Ozs7Ozs7OztBQUd0QjtHQXZFd0JaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanM/ZmU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IENhbWVyYUJvZHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYW1lcmFCb2R5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTWFrZSBBUEkgY2FsbCB0byB5b3VyIGJhY2tlbmQgZm9yIGF1dGhlbnRpY2F0aW9uIHVzaW5nIEF4aW9zXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG4gICAgICAgIC8vIEFkZCBuZWNlc3NhcnkgdXNlciBjcmVkZW50aWFscyBpbiB0aGUgcmVxdWVzdCBib2R5XG4gICAgICAgIGVtYWlsOiAndXNlckBleGFtcGxlLmNvbScsXG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMjMnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTsgLy8gVXBkYXRlIGxvZ2luIHN0YXR1c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIGxvZ2luIGVycm9yXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNYWtlIEFQSSBjYWxsIHRvIGxvZyBvdXQgdXNpbmcgQXhpb3NcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHNldExvZ2dlZEluKGZhbHNlKTsgLy8gVXBkYXRlIGxvZ2luIHN0YXR1c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIGxvZ291dCBlcnJvclxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcmVzdWx0c0NvbXBvbmVudFN0eWxlID0ge1xuICAgIGZsb2F0OiAncmlnaHQnLFxuICAgIG1hcmdpbkxlZnQ6ICcyMHB4JyxcbiAgICBib3hTaGFkb3c6ICcwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdjeWFuJywgcGFkZGluZzogJzIwcHgnIH19PlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1iLTRcIiBzdHlsZT17eyBjb2xvcjogJ2JsYWNrJyB9fT5cbiAgICAgICAgUHJvamVjdCBJbi1Gb2N1c1xuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCIgc3R5bGU9e3sgY29sb3I6ICdibGFjaycsIHRleHREZWNvcmF0aW9uOiAnbm9uZScgfX0+XG4gICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICB7LyogTm8gc3BlY2lmaWMgc3R5bGluZyBmb3IgdGhpcyBkaXYgKi99XG4gICAgICA8L2Rpdj5cbiAgICAgIHtsb2dnZWRJbiA/IChcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBPdXQ8L2J1dHRvbj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPENhbWVyYUJvZHkgbG9nZ2VkSW49e2xvZ2dlZElufSAvPlxuICAgICAgPFJlc3VsdHMgc3R5bGU9e3Jlc3VsdHNDb21wb25lbnRTdHlsZX0+PC9SZXN1bHRzPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJDYW1lcmFCb2R5IiwiYXhpb3MiLCJSZXN1bHRzIiwiUGFnZSIsImxvZ2dlZEluIiwic2V0TG9nZ2VkSW4iLCJoYW5kbGVMb2dpbiIsInJlc3BvbnNlIiwicG9zdCIsImVtYWlsIiwicGFzc3dvcmQiLCJzdGF0dXMiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVMb2dvdXQiLCJyZXN1bHRzQ29tcG9uZW50U3R5bGUiLCJmbG9hdCIsIm1hcmdpbkxlZnQiLCJib3hTaGFkb3ciLCJkaXYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJoMSIsImNsYXNzTmFtZSIsImNvbG9yIiwiaHJlZiIsInRleHREZWNvcmF0aW9uIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});