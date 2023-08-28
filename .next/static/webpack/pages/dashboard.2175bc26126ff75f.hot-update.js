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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_CameraBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CameraBody */ \"./src/components/CameraBody.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Page() {\n    _s();\n    const [loggedIn, setLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleLogin = async ()=>{\n        try {\n            // Make API call to your backend for authentication using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/login\", {\n                // Add necessary user credentials in the request body\n                email: \"user@example.com\",\n                password: \"password123\"\n            });\n            if (response.status === 200) {\n                setLoggedIn(true); // Update login status\n            } else {\n            // Handle login error\n            }\n        } catch (error) {\n            console.error(\"Login error:\", error);\n        }\n    };\n    const handleLogout = async ()=>{\n        try {\n            // Make API call to log out using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"/api/logout\");\n            if (response.status === 200) {\n                setLoggedIn(false); // Update login status\n            } else {\n            // Handle logout error\n            }\n        } catch (error) {\n            console.error(\"Logout error:\", error);\n        }\n    };\n    const containerStyle = {\n        backgroundColor: \"cyan\",\n        padding: \"20px\",\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        alignItems: \"center\"\n    };\n    const resultsComponentStyle = {\n        boxShadow: \"0px 0px 1px rgba(0, 0, 0, 0.5)\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"mb-4\",\n                        style: {\n                            color: \"black\"\n                        },\n                        children: \"Project In-Focus\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-3\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/about\",\n                            style: {\n                                color: \"black\",\n                                textDecoration: \"none\"\n                            },\n                            children: \"Documentation\"\n                        }, void 0, false, {\n                            fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    loggedIn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLogout,\n                        children: \"Log Out\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/register\",\n                                style: {\n                                    color: \"white\",\n                                    textDecoration: \"none\"\n                                },\n                                children: \"Sign Up\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleLogin,\n                                style: {\n                                    marginLeft: \"10px\"\n                                },\n                                children: \"Log In\"\n                            }, void 0, false, {\n                                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CameraBody__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        loggedIn: loggedIn\n                    }, void 0, false, {\n                        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: resultsComponentStyle,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/capstone-in-focus-frontend/src/pages/dashboard/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"rumETxDPcQWJcg8a6Y55ZSVDz7g=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZGFzaGJvYXJkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNYO0FBQ3dCO0FBQzNCO0FBQ3FCO0FBRWhDLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1AsK0NBQVFBLENBQUM7SUFFekMsTUFBTVEsY0FBYztRQUNsQixJQUFJO1lBQ0YsK0RBQStEO1lBQy9ELE1BQU1DLFdBQVcsTUFBTU4sa0RBQVUsQ0FBQyxjQUFjO2dCQUM5QyxxREFBcUQ7Z0JBQ3JEUSxPQUFPO2dCQUNQQyxVQUFVO1lBQ1o7WUFFQSxJQUFJSCxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JOLFlBQVksT0FBTyxzQkFBc0I7WUFDM0MsT0FBTztZQUNMLHFCQUFxQjtZQUN2QjtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0JBQWdCQTtRQUNoQztJQUNGO0lBRUEsTUFBTUUsZUFBZTtRQUNuQixJQUFJO1lBQ0YsdUNBQXVDO1lBQ3ZDLE1BQU1QLFdBQVcsTUFBTU4sa0RBQVUsQ0FBQztZQUVsQyxJQUFJTSxTQUFTSSxNQUFNLEtBQUssS0FBSztnQkFDM0JOLFlBQVksUUFBUSxzQkFBc0I7WUFDNUMsT0FBTztZQUNMLHNCQUFzQjtZQUN4QjtRQUNGLEVBQUUsT0FBT08sT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsaUJBQWlCQTtRQUNqQztJQUNGO0lBRUEsTUFBTUcsaUJBQWlCO1FBQ3JCQyxpQkFBaUI7UUFDakJDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7SUFDZDtJQUVBLE1BQU1DLHdCQUF3QjtRQUM1QkMsV0FBVztJQUNiO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLE9BQU9UOzswQkFDViw4REFBQ1E7O2tDQUNDLDhEQUFDRTt3QkFBR0MsV0FBVTt3QkFBT0YsT0FBTzs0QkFBRUcsT0FBTzt3QkFBUTtrQ0FBRzs7Ozs7O2tDQUdoRCw4REFBQ0o7d0JBQUlHLFdBQVU7a0NBQ2IsNEVBQUMzQixrREFBSUE7NEJBQUM2QixNQUFLOzRCQUFTSixPQUFPO2dDQUFFRyxPQUFPO2dDQUFTRSxnQkFBZ0I7NEJBQU87c0NBQUc7Ozs7Ozs7Ozs7O29CQUt4RXpCLHlCQUNDLDhEQUFDMEI7d0JBQU9DLFNBQVNqQjtrQ0FBYzs7Ozs7NkNBRS9CLDhEQUFDUzs7MENBQ0MsOERBQUN4QixrREFBSUE7Z0NBQUM2QixNQUFLO2dDQUFZSixPQUFPO29DQUFFRyxPQUFPO29DQUFTRSxnQkFBZ0I7Z0NBQU87MENBQUc7Ozs7OzswQ0FHMUUsOERBQUNDO2dDQUFPQyxTQUFTekI7Z0NBQWFrQixPQUFPO29DQUFFUSxZQUFZO2dDQUFPOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBS2pFLDhEQUFDaEMsOERBQVVBO3dCQUFDSSxVQUFVQTs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ21CO2dCQUFJQyxPQUFPSDswQkFDViw0RUFBQ25CLDJEQUFPQTs7Ozs7Ozs7Ozs7Ozs7OztBQUloQjtHQWhGd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9kYXNoYm9hcmQvaW5kZXguanM/ZmU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IENhbWVyYUJvZHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYW1lcmFCb2R5JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbbG9nZ2VkSW4sIHNldExvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gTWFrZSBBUEkgY2FsbCB0byB5b3VyIGJhY2tlbmQgZm9yIGF1dGhlbnRpY2F0aW9uIHVzaW5nIEF4aW9zXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG4gICAgICAgIC8vIEFkZCBuZWNlc3NhcnkgdXNlciBjcmVkZW50aWFscyBpbiB0aGUgcmVxdWVzdCBib2R5XG4gICAgICAgIGVtYWlsOiAndXNlckBleGFtcGxlLmNvbScsXG4gICAgICAgIHBhc3N3b3JkOiAncGFzc3dvcmQxMjMnLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBzZXRMb2dnZWRJbih0cnVlKTsgLy8gVXBkYXRlIGxvZ2luIHN0YXR1c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIGxvZ2luIGVycm9yXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvZ2luIGVycm9yOicsIGVycm9yKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBNYWtlIEFQSSBjYWxsIHRvIGxvZyBvdXQgdXNpbmcgQXhpb3NcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9sb2dvdXQnKTtcblxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHNldExvZ2dlZEluKGZhbHNlKTsgLy8gVXBkYXRlIGxvZ2luIHN0YXR1c1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSGFuZGxlIGxvZ291dCBlcnJvclxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dvdXQgZXJyb3I6JywgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjeWFuJyxcbiAgICBwYWRkaW5nOiAnMjBweCcsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIH07XG5cbiAgY29uc3QgcmVzdWx0c0NvbXBvbmVudFN0eWxlID0ge1xuICAgIGJveFNoYWRvdzogJzBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWItNFwiIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snIH19PlxuICAgICAgICAgIFByb2plY3QgSW4tRm9jdXNcbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIHN0eWxlPXt7IGNvbG9yOiAnYmxhY2snLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgICAgRG9jdW1lbnRhdGlvblxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7bG9nZ2VkSW4gPyAoXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PkxvZyBPdXQ8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiIHN0eWxlPXt7IGNvbG9yOiAnd2hpdGUnLCB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnIH19PlxuICAgICAgICAgICAgICBTaWduIFVwXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvZ2lufSBzdHlsZT17eyBtYXJnaW5MZWZ0OiAnMTBweCcgfX0+XG4gICAgICAgICAgICAgIExvZyBJblxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxDYW1lcmFCb2R5IGxvZ2dlZEluPXtsb2dnZWRJbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17cmVzdWx0c0NvbXBvbmVudFN0eWxlfT5cbiAgICAgICAgPFJlc3VsdHMgLyogUGFzcyBwcm9wcyAqLyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwiQ2FtZXJhQm9keSIsImF4aW9zIiwiUmVzdWx0cyIsIlBhZ2UiLCJsb2dnZWRJbiIsInNldExvZ2dlZEluIiwiaGFuZGxlTG9naW4iLCJyZXNwb25zZSIsInBvc3QiLCJlbWFpbCIsInBhc3N3b3JkIiwic3RhdHVzIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlTG9nb3V0IiwiY29udGFpbmVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWRkaW5nIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsInJlc3VsdHNDb21wb25lbnRTdHlsZSIsImJveFNoYWRvdyIsImRpdiIsInN0eWxlIiwiaDEiLCJjbGFzc05hbWUiLCJjb2xvciIsImhyZWYiLCJ0ZXh0RGVjb3JhdGlvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/dashboard/index.js\n"));

/***/ })

});