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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Header/styles.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../contexts/ProductContext */ \"./src/contexts/ProductContext.tsx\");\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Cart */ \"./src/components/Cart/index.tsx\");\n/* harmony import */ var _mui_icons_material_AddShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/AddShoppingCartOutlined */ \"./node_modules/@mui/icons-material/AddShoppingCartOutlined.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Header(param) {\n    let {} = param;\n    _s();\n    const { searchProduct  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_4__.ProductContext);\n    const handleChange = (param)=>{\n        let { target , key  } = param;\n        if (key === \"Enter\") {\n            searchProduct(target.value);\n            next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/search-result/\" + target.value);\n            target.value = \"\";\n        }\n    };\n    function redirectToCart() {\n        console.log(\"carttt\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                onClick: ()=>next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/\"),\n                children: \"SHOPE\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Aside, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                        onKeyDown: handleChange\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AddShoppingCartOutlined__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        style: {\n                            color: \"#000000\",\n                            fontSize: \"2rem\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart__WEBPACK_IMPORTED_MODULE_5__.Cart, {\n                        onClick: redirectToCart\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                        onClick: ()=>console.log(\"usuario tentou logar\"),\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Header/index.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"SGiy/E2GsMJ/fmklWwsmNrVzxqA=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQThDO0FBRWtCO0FBQy9CO0FBQzhCO0FBQ2hDO0FBQ3VEO0FBSy9FLFNBQVNVLE9BQU8sS0FBZSxFQUFFO1FBQWpCLEVBQWUsR0FBZjs7SUFDckIsTUFBTSxFQUFFQyxjQUFhLEVBQUUsR0FBR1gsaURBQVVBLENBQUNPLG9FQUFjQTtJQUVuRCxNQUFNSyxlQUFlLFNBQTBCO1lBQXpCLEVBQUVDLE9BQU0sRUFBRUMsSUFBRyxFQUFPO1FBQ3hDLElBQUlBLFFBQVEsU0FBUztZQUNuQkgsY0FBY0UsT0FBT0UsS0FBSztZQUMxQlQsdURBQVcsQ0FBQyxvQkFBb0JPLE9BQU9FLEtBQUs7WUFDNUNGLE9BQU9FLEtBQUssR0FBRztRQUNqQixDQUFDO0lBQ0g7SUFFQSxTQUFTRSxpQkFBaUI7UUFDeEJDLFFBQVFDLEdBQUcsQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNqQiw4Q0FBU0E7OzBCQUNSLDhEQUFDQywwQ0FBS0E7Z0JBQUNpQixTQUFTLElBQU1kLHVEQUFXLENBQUM7MEJBQU07Ozs7OzswQkFDeEMsOERBQUNMLDBDQUFLQTs7a0NBQ0osOERBQUNHLDBDQUFLQTt3QkFBQ2lCLFdBQVdUOzs7Ozs7a0NBQ2xCLDhEQUFDSCxtRkFBMkJBO3dCQUMxQmEsT0FBTzs0QkFBRUMsT0FBTzs0QkFBV0MsVUFBVTt3QkFBTzs7Ozs7O2tDQUU5Qyw4REFBQ2hCLHVDQUFJQTt3QkFBQ1ksU0FBU0g7Ozs7OztrQ0FDZiw4REFBQ1oseUNBQUlBO3dCQUFDZSxTQUFTLElBQU1GLFFBQVFDLEdBQUcsQ0FBQztrQ0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlsRSxDQUFDO0dBNUJlVDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4PzQwMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IEFzaWRlLCBDb250YWluZXIsIFRpdGxlLCBJbnB1dCwgTGluayB9IGZyb20gXCIuL3N0eWxlc1wiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb2R1Y3RDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1Byb2R1Y3RDb250ZXh0XCI7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSBcIi4uL0NhcnRcIjtcbmltcG9ydCBBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb24gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWwvQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRcIjtcbmludGVyZmFjZSBIZWFkZXJQcm9wcyB7XG4gIC8vIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBIZWFkZXIoe306IEhlYWRlclByb3BzKSB7XG4gIGNvbnN0IHsgc2VhcmNoUHJvZHVjdCB9ID0gdXNlQ29udGV4dChQcm9kdWN0Q29udGV4dCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0LCBrZXkgfTogYW55KSA9PiB7XG4gICAgaWYgKGtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBzZWFyY2hQcm9kdWN0KHRhcmdldC52YWx1ZSk7XG4gICAgICBSb3V0ZXIucHVzaChcIi9zZWFyY2gtcmVzdWx0L1wiICsgdGFyZ2V0LnZhbHVlKTtcbiAgICAgIHRhcmdldC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIHJlZGlyZWN0VG9DYXJ0KCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2FydHR0XCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFRpdGxlIG9uQ2xpY2s9eygpID0+IFJvdXRlci5wdXNoKFwiL1wiKX0+U0hPUEU8L1RpdGxlPlxuICAgICAgPEFzaWRlPlxuICAgICAgICA8SW5wdXQgb25LZXlEb3duPXtoYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDxBZGRTaG9wcGluZ0NhcnRPdXRsaW5lZEljb25cbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDAwMDAwXCIsIGZvbnRTaXplOiBcIjJyZW1cIiB9fVxuICAgICAgICAvPlxuICAgICAgICA8Q2FydCBvbkNsaWNrPXtyZWRpcmVjdFRvQ2FydH0gLz5cbiAgICAgICAgPExpbmsgb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coXCJ1c3VhcmlvIHRlbnRvdSBsb2dhclwiKX0+TG9naW48L0xpbms+XG4gICAgICA8L0FzaWRlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJBc2lkZSIsIkNvbnRhaW5lciIsIlRpdGxlIiwiSW5wdXQiLCJMaW5rIiwiUm91dGVyIiwiUHJvZHVjdENvbnRleHQiLCJDYXJ0IiwiQWRkU2hvcHBpbmdDYXJ0T3V0bGluZWRJY29uIiwiSGVhZGVyIiwic2VhcmNoUHJvZHVjdCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsImtleSIsInZhbHVlIiwicHVzaCIsInJlZGlyZWN0VG9DYXJ0IiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2siLCJvbktleURvd24iLCJzdHlsZSIsImNvbG9yIiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.tsx\n"));

/***/ })

});