"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ProductCard/index.tsx":
/*!**********************************************!*\
  !*** ./src/components/ProductCard/index.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ProductCard/styles.ts\");\n\n\nfunction ProductCard(param) {\n    let { id , title , description , price , imageUrl  } = param;\n    function handleClick() {\n        console.log(id);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ProductImage, {\n                src: imageUrl\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.InformationContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        children: title.substring(0, 15)\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Description, {\n                        children: [\n                            description.substring(0, 45),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.PriceButtonWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Price, {\n                                children: [\n                                    \"R$ \",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.AddButton, {\n                                onClick: handleClick\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBV2tCO0FBVVgsU0FBU1EsWUFBWSxLQU1ULEVBQUU7UUFOTyxFQUMxQkMsR0FBRSxFQUNGQyxNQUFLLEVBQ0xDLFlBQVcsRUFDWEMsTUFBSyxFQUNMQyxTQUFRLEVBQ1MsR0FOUztJQU8xQixTQUFTQyxjQUFjO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNQO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ1IsOENBQVNBOzswQkFDUiw4REFBQ0ssaURBQVlBO2dCQUFDVyxLQUFLSjs7Ozs7OzBCQUNuQiw4REFBQ1YseURBQW9CQTs7a0NBQ25CLDhEQUFDSSwwQ0FBS0E7a0NBQUVHLE1BQU1RLFNBQVMsQ0FBQyxHQUFHOzs7Ozs7a0NBQzNCLDhEQUFDaEIsZ0RBQVdBOzs0QkFBRVMsWUFBWU8sU0FBUyxDQUFDLEdBQUc7NEJBQUk7Ozs7Ozs7a0NBQzNDLDhEQUFDYix1REFBa0JBOzswQ0FDakIsOERBQUNELDBDQUFLQTs7b0NBQUM7b0NBQUlROzs7Ozs7OzBDQUNYLDhEQUFDWiw4Q0FBU0E7Z0NBQUNtQixTQUFTTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzlCLENBQUM7S0F2QmVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL2luZGV4LnRzeD9mMDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBBZGRCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGVzY3JpcHRpb24sXG4gIEluZm9ybWF0aW9uQ29udGFpbmVyLFxuICBQcmljZSxcbiAgUHJpY2VCdXR0b25XcmFwcGVyLFxuICBQcm9kdWN0SW1hZ2UsXG4gIFRpdGxlLFxufSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuICBpZCxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBwcmljZSxcbiAgaW1hZ2VVcmwsXG59OiBQcm9kdWN0Q2FyZFByb3BzKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIGNvbnNvbGUubG9nKGlkKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8UHJvZHVjdEltYWdlIHNyYz17aW1hZ2VVcmx9IC8+XG4gICAgICA8SW5mb3JtYXRpb25Db250YWluZXI+XG4gICAgICAgIDxUaXRsZT57dGl0bGUuc3Vic3RyaW5nKDAsIDE1KX08L1RpdGxlPlxuICAgICAgICA8RGVzY3JpcHRpb24+e2Rlc2NyaXB0aW9uLnN1YnN0cmluZygwLCA0NSl9Li4uPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgPFByaWNlQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICA8UHJpY2U+UiQge3ByaWNlfTwvUHJpY2U+XG4gICAgICAgICAgPEFkZEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgICAgPC9QcmljZUJ1dHRvbldyYXBwZXI+XG4gICAgICA8L0luZm9ybWF0aW9uQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFkZEJ1dHRvbiIsIkNvbnRhaW5lciIsIkRlc2NyaXB0aW9uIiwiSW5mb3JtYXRpb25Db250YWluZXIiLCJQcmljZSIsIlByaWNlQnV0dG9uV3JhcHBlciIsIlByb2R1Y3RJbWFnZSIsIlRpdGxlIiwiUHJvZHVjdENhcmQiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlVXJsIiwiaGFuZGxlQ2xpY2siLCJjb25zb2xlIiwibG9nIiwic3JjIiwic3Vic3RyaW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductCard/index.tsx\n"));

/***/ })

});