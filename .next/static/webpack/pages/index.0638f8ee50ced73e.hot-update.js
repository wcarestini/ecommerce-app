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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/ProductCard/styles.ts\");\n\n\n\nfunction getCartFromSessionStorage() {\n    // Get cart from session storage\n    let cart = JSON.parse(sessionStorage.getItem(\"cart\"));\n    // If cart is not set in session storage, initialize it as an empty array\n    if (!cart) {\n        cart = [];\n    }\n    return cart;\n}\n// Function to set cart in session storage\nfunction setCartInSessionStorage(cart) {\n    // Set cart in session storage\n    sessionStorage.setItem(\"cart\", JSON.stringify(cart));\n}\nfunction ProductCard(param) {\n    let { id , title , description , price , imageUrl  } = param;\n    function handleClickAddCart() {\n        let cart = getCartFromSessionStorage();\n        // Add new item to cart\n        cart.push({\n            id,\n            name,\n            price\n        });\n        // Set updated cart in session storage\n        setCartInSessionStorage(cart);\n    }\n    function handleClickProductDetail() {\n        console.log(\"click product detail \" + id);\n        next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/product/\" + id);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.ProductImage, {\n                onClick: handleClickProductDetail,\n                src: imageUrl\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.InformationContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, {\n                        onClick: handleClickProductDetail,\n                        children: title.substring(0, 15)\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Description, {\n                        onClick: handleClickProductDetail,\n                        children: [\n                            description.substring(0, 45),\n                            \"...\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.PriceButtonWrapper, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.Price, {\n                                children: [\n                                    \"R$ \",\n                                    price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_2__.AddButton, {\n                                onClick: handleClickAddCart\n                            }, void 0, false, {\n                                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/ProductCard/index.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n}\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9kdWN0Q2FyZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDaUM7QUFXZjtBQVVsQixTQUFTUyw0QkFBNEI7SUFDbkMsZ0NBQWdDO0lBQ2hDLElBQUlDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsZUFBZUMsT0FBTyxDQUFDO0lBRTdDLHlFQUF5RTtJQUN6RSxJQUFJLENBQUNKLE1BQU07UUFDVEEsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUVELE9BQU9BO0FBQ1Q7QUFFQSwwQ0FBMEM7QUFDMUMsU0FBU0ssd0JBQXdCTCxJQUFJLEVBQUU7SUFDckMsOEJBQThCO0lBQzlCRyxlQUFlRyxPQUFPLENBQUMsUUFBUUwsS0FBS00sU0FBUyxDQUFDUDtBQUNoRDtBQUVPLFNBQVNRLFlBQVksS0FNVCxFQUFFO1FBTk8sRUFDMUJDLEdBQUUsRUFDRkMsTUFBSyxFQUNMQyxZQUFXLEVBQ1hDLE1BQUssRUFDTEMsU0FBUSxFQUNTLEdBTlM7SUFPMUIsU0FBU0MscUJBQXFCO1FBQzVCLElBQUlkLE9BQU9EO1FBRVgsdUJBQXVCO1FBQ3ZCQyxLQUFLZSxJQUFJLENBQUM7WUFBRU47WUFBSU87WUFBTUo7UUFBTTtRQUU1QixzQ0FBc0M7UUFDdENQLHdCQUF3Qkw7SUFDMUI7SUFFQSxTQUFTaUIsMkJBQTJCO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUMsMEJBQTBCVjtRQUN0Q25CLHVEQUFXLENBQUMsY0FBY21CO0lBQzVCO0lBQ0EscUJBQ0UsOERBQUNqQiw4Q0FBU0E7OzBCQUNSLDhEQUFDSyxpREFBWUE7Z0JBQUN1QixTQUFTSDtnQkFBMEJJLEtBQUtSOzs7Ozs7MEJBQ3RELDhEQUFDbkIseURBQW9CQTs7a0NBQ25CLDhEQUFDSSwwQ0FBS0E7d0JBQUNzQixTQUFTSDtrQ0FDYlAsTUFBTVksU0FBUyxDQUFDLEdBQUc7Ozs7OztrQ0FFdEIsOERBQUM3QixnREFBV0E7d0JBQUMyQixTQUFTSDs7NEJBQ25CTixZQUFZVyxTQUFTLENBQUMsR0FBRzs0QkFBSTs7Ozs7OztrQ0FFaEMsOERBQUMxQix1REFBa0JBOzswQ0FDakIsOERBQUNELDBDQUFLQTs7b0NBQUM7b0NBQUlpQjs7Ozs7OzswQ0FDWCw4REFBQ3JCLDhDQUFTQTtnQ0FBQzZCLFNBQVNOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUIsQ0FBQztLQXRDZU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvaW5kZXgudHN4P2YwNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQge1xuICBBZGRCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGVzY3JpcHRpb24sXG4gIEluZm9ybWF0aW9uQ29udGFpbmVyLFxuICBQcmljZSxcbiAgUHJpY2VCdXR0b25XcmFwcGVyLFxuICBQcm9kdWN0SW1hZ2UsXG4gIFRpdGxlLFxufSBmcm9tIFwiLi9zdHlsZXNcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3RDYXJkUHJvcHMge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBwcmljZTogc3RyaW5nO1xuICBpbWFnZVVybDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRDYXJ0RnJvbVNlc3Npb25TdG9yYWdlKCkge1xuICAvLyBHZXQgY2FydCBmcm9tIHNlc3Npb24gc3RvcmFnZVxuICBsZXQgY2FydCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xuXG4gIC8vIElmIGNhcnQgaXMgbm90IHNldCBpbiBzZXNzaW9uIHN0b3JhZ2UsIGluaXRpYWxpemUgaXQgYXMgYW4gZW1wdHkgYXJyYXlcbiAgaWYgKCFjYXJ0KSB7XG4gICAgY2FydCA9IFtdO1xuICB9XG5cbiAgcmV0dXJuIGNhcnQ7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCBjYXJ0IGluIHNlc3Npb24gc3RvcmFnZVxuZnVuY3Rpb24gc2V0Q2FydEluU2Vzc2lvblN0b3JhZ2UoY2FydCkge1xuICAvLyBTZXQgY2FydCBpbiBzZXNzaW9uIHN0b3JhZ2VcbiAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkoY2FydCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUHJvZHVjdENhcmQoe1xuICBpZCxcbiAgdGl0bGUsXG4gIGRlc2NyaXB0aW9uLFxuICBwcmljZSxcbiAgaW1hZ2VVcmwsXG59OiBQcm9kdWN0Q2FyZFByb3BzKSB7XG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrQWRkQ2FydCgpIHtcbiAgICBsZXQgY2FydCA9IGdldENhcnRGcm9tU2Vzc2lvblN0b3JhZ2UoKTtcblxuICAgIC8vIEFkZCBuZXcgaXRlbSB0byBjYXJ0XG4gICAgY2FydC5wdXNoKHsgaWQsIG5hbWUsIHByaWNlIH0pO1xuXG4gICAgLy8gU2V0IHVwZGF0ZWQgY2FydCBpbiBzZXNzaW9uIHN0b3JhZ2VcbiAgICBzZXRDYXJ0SW5TZXNzaW9uU3RvcmFnZShjYXJ0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrUHJvZHVjdERldGFpbCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImNsaWNrIHByb2R1Y3QgZGV0YWlsIFwiICsgaWQpO1xuICAgIFJvdXRlci5wdXNoKFwiL3Byb2R1Y3QvXCIgKyBpZCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFByb2R1Y3RJbWFnZSBvbkNsaWNrPXtoYW5kbGVDbGlja1Byb2R1Y3REZXRhaWx9IHNyYz17aW1hZ2VVcmx9IC8+XG4gICAgICA8SW5mb3JtYXRpb25Db250YWluZXI+XG4gICAgICAgIDxUaXRsZSBvbkNsaWNrPXtoYW5kbGVDbGlja1Byb2R1Y3REZXRhaWx9PlxuICAgICAgICAgIHt0aXRsZS5zdWJzdHJpbmcoMCwgMTUpfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8RGVzY3JpcHRpb24gb25DbGljaz17aGFuZGxlQ2xpY2tQcm9kdWN0RGV0YWlsfT5cbiAgICAgICAgICB7ZGVzY3JpcHRpb24uc3Vic3RyaW5nKDAsIDQ1KX0uLi5cbiAgICAgICAgPC9EZXNjcmlwdGlvbj5cbiAgICAgICAgPFByaWNlQnV0dG9uV3JhcHBlcj5cbiAgICAgICAgICA8UHJpY2U+UiQge3ByaWNlfTwvUHJpY2U+XG4gICAgICAgICAgPEFkZEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja0FkZENhcnR9IC8+XG4gICAgICAgIDwvUHJpY2VCdXR0b25XcmFwcGVyPlxuICAgICAgPC9JbmZvcm1hdGlvbkNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJBZGRCdXR0b24iLCJDb250YWluZXIiLCJEZXNjcmlwdGlvbiIsIkluZm9ybWF0aW9uQ29udGFpbmVyIiwiUHJpY2UiLCJQcmljZUJ1dHRvbldyYXBwZXIiLCJQcm9kdWN0SW1hZ2UiLCJUaXRsZSIsImdldENhcnRGcm9tU2Vzc2lvblN0b3JhZ2UiLCJjYXJ0IiwiSlNPTiIsInBhcnNlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0Q2FydEluU2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiUHJvZHVjdENhcmQiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImltYWdlVXJsIiwiaGFuZGxlQ2xpY2tBZGRDYXJ0IiwicHVzaCIsIm5hbWUiLCJoYW5kbGVDbGlja1Byb2R1Y3REZXRhaWwiLCJjb25zb2xlIiwibG9nIiwib25DbGljayIsInNyYyIsInN1YnN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ProductCard/index.tsx\n"));

/***/ })

});