"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./src/contexts/ProductContext.tsx\");\n/* harmony import */ var _mui_icons_material_AddShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCartOutlined */ \"./node_modules/@mui/icons-material/AddShoppingCartOutlined.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header(param) {\n    let {} = param;\n    _s();\n    const { searchProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_4__.ProductContext);\n    const handleChange = (param)=>{\n        let { target , key  } = param;\n        if (key === \"Enter\") {\n            searchProduct(target.value);\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/search-result/\" + target.value);\n            target.value = \"\";\n        }\n    };\n    function redirectToCart() {\n        console.log(\"carttt\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\"),\n                children: \"SHOPE\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Aside, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        onKeyDown: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        onClick: redirectToCart,\n                        style: {\n                            color: \"#000000\",\n                            fontSize: \"2rem\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: ()=>console.log(\"usuario tentou logar\"),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"SGiy/E2GsMJ/fmklWwsmNrVzxqA=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFFa0I7QUFDL0I7QUFDOEI7QUFFdUI7QUFLL0UsU0FBU1MsT0FBTyxLQUFlLEVBQUU7UUFBakIsRUFBZSxHQUFmOztJQUNyQixNQUFNLEVBQUVDLGNBQWEsRUFBRSxHQUFHVixpREFBVUEsQ0FBQ08sb0VBQWNBO0lBRW5ELE1BQU1JLGVBQWUsU0FBMEI7WUFBekIsRUFBRUMsT0FBTSxFQUFFQyxJQUFHLEVBQU87UUFDeEMsSUFBSUEsUUFBUSxTQUFTO1lBQ25CSCxjQUFjRSxPQUFPRSxLQUFLO1lBQzFCUix1REFBVyxDQUFDLG9CQUFvQk0sT0FBT0UsS0FBSztZQUM1Q0YsT0FBT0UsS0FBSyxHQUFHO1FBQ2pCLENBQUM7SUFDSDtJQUVBLFNBQVNFLGlCQUFpQjtRQUN4QkMsUUFBUUMsR0FBRyxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ2hCLDhDQUFTQTs7MEJBQ1IsOERBQUNDLDBDQUFLQTtnQkFBQ2dCLFNBQVMsSUFBTWIsdURBQVcsQ0FBQzswQkFBTTs7Ozs7OzBCQUN4Qyw4REFBQ0wsMENBQUtBOztrQ0FDSiw4REFBQ0csMENBQUtBO3dCQUFDZ0IsV0FBV1Q7Ozs7OztrQ0FDbEIsOERBQUNILG1GQUEyQkE7d0JBQzFCVyxTQUFTSDt3QkFDVEssT0FBTzs0QkFBRUMsT0FBTzs0QkFBV0MsVUFBVTt3QkFBTzs7Ozs7O2tDQUc5Qyw4REFBQ2xCLHlDQUFJQTt3QkFBQ2MsU0FBUyxJQUFNRixRQUFRQyxHQUFHLENBQUM7a0NBQXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbEUsQ0FBQztHQTdCZVQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeD80MDAzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBBc2lkZSwgQ29udGFpbmVyLCBUaXRsZSwgSW5wdXQsIExpbmsgfSBmcm9tIFwiLi9zdHlsZXNcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9jb250ZXh0cy9Qcm9kdWN0Q29udGV4dFwiO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gXCIuLi9DYXJ0XCI7XG5pbXBvcnQgQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFNob3BwaW5nQ2FydE91dGxpbmVkXCI7XG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICAvLyBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gSGVhZGVyKHt9OiBIZWFkZXJQcm9wcykge1xuICBjb25zdCB7IHNlYXJjaFByb2R1Y3QgfSA9IHVzZUNvbnRleHQoUHJvZHVjdENvbnRleHQpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldCwga2V5IH06IGFueSkgPT4ge1xuICAgIGlmIChrZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2VhcmNoUHJvZHVjdCh0YXJnZXQudmFsdWUpO1xuICAgICAgUm91dGVyLnB1c2goXCIvc2VhcmNoLXJlc3VsdC9cIiArIHRhcmdldC52YWx1ZSk7XG4gICAgICB0YXJnZXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiByZWRpcmVjdFRvQ2FydCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNhcnR0dFwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxUaXRsZSBvbkNsaWNrPXsoKSA9PiBSb3V0ZXIucHVzaChcIi9cIil9PlNIT1BFPC9UaXRsZT5cbiAgICAgIDxBc2lkZT5cbiAgICAgICAgPElucHV0IG9uS2V5RG93bj17aGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICA8QWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uXG4gICAgICAgICAgb25DbGljaz17cmVkaXJlY3RUb0NhcnR9XG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAwMDAwMFwiLCBmb250U2l6ZTogXCIycmVtXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICAgey8qIDxDYXJ0IG9uQ2xpY2s9e3JlZGlyZWN0VG9DYXJ0fSAvPiAqL31cbiAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJ1c3VhcmlvIHRlbnRvdSBsb2dhclwiKX0+TG9naW48L0xpbms+XG4gICAgICA8L0FzaWRlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBc2lkZSIsIkNvbnRhaW5lciIsIlRpdGxlIiwiSW5wdXQiLCJMaW5rIiwiUm91dGVyIiwiUHJvZHVjdENvbnRleHQiLCJBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24iLCJIZWFkZXIiLCJzZWFyY2hQcm9kdWN0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0Iiwia2V5IiwidmFsdWUiLCJwdXNoIiwicmVkaXJlY3RUb0NhcnQiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsIm9uS2V5RG93biIsInN0eWxlIiwiY29sb3IiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});