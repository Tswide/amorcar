"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Home/Navbar.tsx":
/*!************************************!*\
  !*** ./components/Home/Navbar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _CustomButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CustomButton */ \"(app-pages-browser)/./components/Home/CustomButton.tsx\");\n/* harmony import */ var _config_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/firebase */ \"(app-pages-browser)/./config/firebase.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.onAuthStateChanged)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, (user)=>{\n            if (user) {\n                const uid = user.uid;\n                console.log(\"uid\", uid);\n            } else {\n                console.log(\"user is logged out\");\n            }\n        });\n    }, []);\n    const handleLogout = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_6__.signOut)(_config_firebase__WEBPACK_IMPORTED_MODULE_4__.auth).then(()=>{\n            window.location.href = \"/\";\n            console.log(\"Signed out successfully\");\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full  absolute z-10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"flex justify-center items-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: \"/logo.svg\",\n                        alt: \"logo\",\n                        width: 118,\n                        height: 18,\n                        className: \"object-contain\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 7\n                }, undefined),\n                user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    title: \"Sign out\",\n                    btnType: \"button\",\n                    containerStyles: \"text-yellow-500 rounded-full bg-white min-w-[130px]\",\n                    handleClick: handleLogout\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/login\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CustomButton__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        title: \"Sign in\",\n                        btnType: \"button\",\n                        containerStyles: \"text-yellow-500 rounded-full bg-white min-w-[130px]\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n            lineNumber: 33,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\code\\\\amorcar\\\\components\\\\Home\\\\Navbar.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavBar, \"/Kwwd9M6d0ULySTUG5s0VB0R1ug=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvSG9tZS9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDRTtBQUNXO0FBQ0Y7QUFDSTtBQUNnQjtBQUU1RCxNQUFNUSxTQUFTOztJQUNiLE1BQU1DLE9BQVlKLCtDQUFRQTtJQUUxQkQsZ0RBQVNBLENBQUM7UUFDUkUsaUVBQWtCQSxDQUFDSCxrREFBSUEsRUFBRSxDQUFDTTtZQUN4QixJQUFJQSxNQUFNO2dCQUNSLE1BQU1DLE1BQU1ELEtBQUtDLEdBQUc7Z0JBQ3BCQyxRQUFRQyxHQUFHLENBQUMsT0FBT0Y7WUFDckIsT0FBTztnQkFDTEMsUUFBUUMsR0FBRyxDQUFDO1lBQ2Q7UUFDRjtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1DLGVBQWU7UUFDbkJOLHNEQUFPQSxDQUFDSixrREFBSUEsRUFBRVcsSUFBSSxDQUFDO1lBQ2ZDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO1lBQ3ZCTixRQUFRQyxHQUFHLENBQUM7UUFDaEIsR0FBR00sS0FBSyxDQUFDLENBQUNDO1lBQ1JSLFFBQVFDLEdBQUcsQ0FBQ087UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQU9DLFdBQVU7a0JBQ2xCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ3JCLGtEQUFJQTtvQkFBQ2lCLE1BQUs7b0JBQUlJLFdBQVU7OEJBQ3ZCLDRFQUFDcEIsbURBQUtBO3dCQUNKc0IsS0FBSTt3QkFDSkMsS0FBSTt3QkFDSkMsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkwsV0FBVTs7Ozs7Ozs7Ozs7Z0JBSWJaLHFCQUNDLDhEQUFDUCxxREFBWUE7b0JBQ1h5QixPQUFNO29CQUNOQyxTQUFRO29CQUNSQyxpQkFBZ0I7b0JBQ2hCQyxhQUFhakI7Ozs7OzhDQUdmLDhEQUFDYixrREFBSUE7b0JBQUNpQixNQUFLOzhCQUNULDRFQUFDZixxREFBWUE7d0JBQ1h5QixPQUFNO3dCQUNOQyxTQUFRO3dCQUNSQyxpQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUI7R0F2RE1yQjtLQUFBQTtBQXlETiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvTmF2YmFyLnRzeD8xYjNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBDdXN0b21CdXR0b24gZnJvbSBcIi4vQ3VzdG9tQnV0dG9uXCI7XHJcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQGNvbmZpZy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG9uQXV0aFN0YXRlQ2hhbmdlZCwgc2lnbk91dCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgdXNlcjogYW55ID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCwgKHVzZXIpID0+IHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBjb25zdCB1aWQgPSB1c2VyLnVpZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInVpZFwiLCB1aWQpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyIGlzIGxvZ2dlZCBvdXRcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHsgICAgICAgICAgICAgICBcclxuICAgIHNpZ25PdXQoYXV0aCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9cIjtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNpZ25lZCBvdXQgc3VjY2Vzc2Z1bGx5XCIpXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuKFxyXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J3ctZnVsbCAgYWJzb2x1dGUgei0xMCc+XHJcbiAgICA8bmF2IGNsYXNzTmFtZT0nbWF4LXctWzE0NDBweF0gbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgc206cHgtMTYgcHgtNiBweS00IGJnLXRyYW5zcGFyZW50Jz5cclxuICAgICAgPExpbmsgaHJlZj0nLycgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcic+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9Jy9sb2dvLnN2ZydcclxuICAgICAgICAgIGFsdD0nbG9nbydcclxuICAgICAgICAgIHdpZHRoPXsxMTh9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE4fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbidcclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpbms+XHJcblxyXG4gICAgICB7dXNlciA/IChcclxuICAgICAgICA8Q3VzdG9tQnV0dG9uXHJcbiAgICAgICAgICB0aXRsZT0nU2lnbiBvdXQnXHJcbiAgICAgICAgICBidG5UeXBlPSdidXR0b24nXHJcbiAgICAgICAgICBjb250YWluZXJTdHlsZXM9J3RleHQteWVsbG93LTUwMCByb3VuZGVkLWZ1bGwgYmctd2hpdGUgbWluLXctWzEzMHB4XSdcclxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVMb2dvdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8Q3VzdG9tQnV0dG9uXHJcbiAgICAgICAgICAgIHRpdGxlPSdTaWduIGluJ1xyXG4gICAgICAgICAgICBidG5UeXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlcz0ndGV4dC15ZWxsb3ctNTAwIHJvdW5kZWQtZnVsbCBiZy13aGl0ZSBtaW4tdy1bMTMwcHhdJ1xyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICl9XHJcbiAgICA8L25hdj5cclxuICA8L2hlYWRlcj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJDdXN0b21CdXR0b24iLCJhdXRoIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJzaWduT3V0IiwiTmF2QmFyIiwidXNlciIsInVpZCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVMb2dvdXQiLCJ0aGVuIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiY2F0Y2giLCJlcnJvciIsImhlYWRlciIsImNsYXNzTmFtZSIsIm5hdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGUiLCJidG5UeXBlIiwiY29udGFpbmVyU3R5bGVzIiwiaGFuZGxlQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Home/Navbar.tsx\n"));

/***/ })

});