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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/ProductCard/styles.ts\");\n\n\nfunction ProductCard(param) {\n    let { id , title , description , price , imageUrl  } = param;\n    function handleClick() {\n        console.log(id);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.ProductImage, {\n                src: imageUrl\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.InformationContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, {\n                        children: title.substring(0, 15)\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Description, {\n                        children: [\n                            description.substring(0, 45),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.Price, {\n                        children: [\n                            \"R$ \",\n                            price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_1__.AddButton, {\n                        onClick: handleClick\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBVWtCO0FBVVgsU0FBU08sWUFBWSxLQU1ULEVBQUU7UUFOTyxFQUMxQkMsR0FBRSxFQUNGQyxNQUFLLEVBQ0xDLFlBQVcsRUFDWEMsTUFBSyxFQUNMQyxTQUFRLEVBQ1MsR0FOUztJQU8xQixTQUFTQyxjQUFjO1FBQ3JCQyxRQUFRQyxHQUFHLENBQUNQO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ1AsOENBQVNBOzswQkFDUiw4REFBQ0ksaURBQVlBO2dCQUFDVyxLQUFLSjs7Ozs7OzBCQUNuQiw4REFBQ1QseURBQW9CQTs7a0NBQ25CLDhEQUFDRywwQ0FBS0E7a0NBQUVHLE1BQU1RLFNBQVMsQ0FBQyxHQUFHOzs7Ozs7a0NBQzNCLDhEQUFDZixnREFBV0E7OzRCQUFFUSxZQUFZTyxTQUFTLENBQUMsR0FBRzs0QkFBSTs7Ozs7OztrQ0FDM0MsOERBQUNiLDBDQUFLQTs7NEJBQUM7NEJBQUlPOzs7Ozs7O2tDQUNYLDhEQUFDWCw4Q0FBU0E7d0JBQUNrQixTQUFTTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTVCLENBQUM7S0FyQmVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL2luZGV4LnRzeD9mMDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBBZGRCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGVzY3JpcHRpb24sXG4gIEluZm9ybWF0aW9uQ29udGFpbmVyLFxuICBQcmljZSxcbiAgUHJvZHVjdEltYWdlLFxuICBUaXRsZSxcbn0gZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJpY2U6IHN0cmluZztcbiAgaW1hZ2VVcmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFByb2R1Y3RDYXJkKHtcbiAgaWQsXG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgcHJpY2UsXG4gIGltYWdlVXJsLFxufTogUHJvZHVjdENhcmRQcm9wcykge1xuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbiAgICBjb25zb2xlLmxvZyhpZCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFByb2R1Y3RJbWFnZSBzcmM9e2ltYWdlVXJsfSAvPlxuICAgICAgPEluZm9ybWF0aW9uQ29udGFpbmVyPlxuICAgICAgICA8VGl0bGU+e3RpdGxlLnN1YnN0cmluZygwLCAxNSl9PC9UaXRsZT5cbiAgICAgICAgPERlc2NyaXB0aW9uPntkZXNjcmlwdGlvbi5zdWJzdHJpbmcoMCwgNDUpfS4uLjwvRGVzY3JpcHRpb24+XG4gICAgICAgIDxQcmljZT5SJCB7cHJpY2V9PC9QcmljZT5cbiAgICAgICAgPEFkZEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cbiAgICAgIDwvSW5mb3JtYXRpb25Db250YWluZXI+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQWRkQnV0dG9uIiwiQ29udGFpbmVyIiwiRGVzY3JpcHRpb24iLCJJbmZvcm1hdGlvbkNvbnRhaW5lciIsIlByaWNlIiwiUHJvZHVjdEltYWdlIiwiVGl0bGUiLCJQcm9kdWN0Q2FyZCIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiaW1hZ2VVcmwiLCJoYW5kbGVDbGljayIsImNvbnNvbGUiLCJsb2ciLCJzcmMiLCJzdWJzdHJpbmciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ProductCard/index.tsx\n"));

/***/ })

});