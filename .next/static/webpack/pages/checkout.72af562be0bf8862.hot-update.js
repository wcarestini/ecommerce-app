"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/checkout",{

/***/ "./src/components/Delivery/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Delivery/index.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Delivery\": function() { return /* binding */ Delivery; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var correios_brasil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! correios-brasil */ \"./node_modules/correios-brasil/dist/index.es.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/Delivery/styles.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Delivery(param) {\n    let {} = param;\n    _s();\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const deliveryOptions = [];\n    function handleInput(param) {\n        let { target , key  } = param;\n        console.log(target);\n        if (key === \"Enter\") {\n            (0,correios_brasil__WEBPACK_IMPORTED_MODULE_2__.consultarCep)(target.value).then((response)=>{\n                setAddress(response);\n            });\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles__WEBPACK_IMPORTED_MODULE_3__.Container, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Delivery\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Delivery/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            address ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            address.localidade,\n                            \" - \",\n                            address.uf\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Delivery/index.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            address.logradouro,\n                            \" - \",\n                            address.bairro\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Delivery/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"\",\n                        children: \"CEP\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Delivery/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        onKeyDown: handleInput\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Delivery/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            deliveryOptions.map((option)=>{})\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/components/Delivery/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Delivery, \"dUYSaHilsZ7zDGxusMA9Vvyeo84=\");\n_c = Delivery;\nvar _c;\n$RefreshReg$(_c, \"Delivery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EZWxpdmVyeS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUE0QztBQUtuQjtBQUVZO0FBSTlCLFNBQVNHLFNBQVMsS0FBaUIsRUFBRTtRQUFuQixFQUFpQixHQUFqQjs7SUFDdkIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdMLCtDQUFRQTtJQUN0QyxNQUFNTSxrQkFBa0IsRUFBRTtJQUUxQixTQUFTQyxZQUFZLEtBQWUsRUFBRTtZQUFqQixFQUFFQyxPQUFNLEVBQUVDLElBQUcsRUFBRSxHQUFmO1FBQ25CQyxRQUFRQyxHQUFHLENBQUNIO1FBQ1osSUFBSUMsUUFBUSxTQUFTO1lBQ25CUiw2REFBWUEsQ0FBQ08sT0FBT0ksS0FBSyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtnQkFDNUNULFdBQVdTO1lBQ2I7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ1osOENBQVNBOzswQkFDUiw4REFBQ2E7MEJBQUc7Ozs7OztZQUNIWCx3QkFDQzs7a0NBQ0UsOERBQUNXOzs0QkFDRVgsUUFBUVksVUFBVTs0QkFBQzs0QkFBSVosUUFBUWEsRUFBRTs7Ozs7OztrQ0FFcEMsOERBQUNDOzs0QkFDRWQsUUFBUWUsVUFBVTs0QkFBQzs0QkFBSWYsUUFBUWdCLE1BQU07Ozs7Ozs7OzZDQUkxQzs7a0NBQ0UsOERBQUNDO3dCQUFNQyxTQUFRO2tDQUFHOzs7Ozs7a0NBQ2xCLDhEQUFDQzt3QkFBTUMsTUFBSzt3QkFBT0MsV0FBV2xCOzs7Ozs7OzRCQUVqQztZQUNBRCxnQkFBZ0JvQixHQUFHLENBQUMsQ0FBQ0MsU0FBVyxDQUFDOzs7Ozs7O0FBR3hDLENBQUM7R0FsQ2V4QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EZWxpdmVyeS9pbmRleC50c3g/YmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBjYWxjdWxhclByZWNvUHJhem8sXG4gIGNvbnN1bHRhckNlcCxcbiAgcmFzdHJlYXJFbmNvbWVuZGFzLFxufSBmcm9tIFwiY29ycmVpb3MtYnJhc2lsXCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuL3N0eWxlc1wiO1xuXG5pbnRlcmZhY2UgRGVsaXZlcnlQcm9wcyB7fVxuXG5leHBvcnQgZnVuY3Rpb24gRGVsaXZlcnkoe306IERlbGl2ZXJ5UHJvcHMpIHtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgZGVsaXZlcnlPcHRpb25zID0gW107XG5cbiAgZnVuY3Rpb24gaGFuZGxlSW5wdXQoeyB0YXJnZXQsIGtleSB9KSB7XG4gICAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgICBpZiAoa2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnN1bHRhckNlcCh0YXJnZXQudmFsdWUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldEFkZHJlc3MocmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGgxPkRlbGl2ZXJ5PC9oMT5cbiAgICAgIHthZGRyZXNzID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgIHthZGRyZXNzLmxvY2FsaWRhZGV9IC0ge2FkZHJlc3MudWZ9XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDI+XG4gICAgICAgICAgICB7YWRkcmVzcy5sb2dyYWRvdXJvfSAtIHthZGRyZXNzLmJhaXJyb31cbiAgICAgICAgICA8L2gyPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJcIj5DRVA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uS2V5RG93bj17aGFuZGxlSW5wdXR9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cbiAgICAgIHtkZWxpdmVyeU9wdGlvbnMubWFwKChvcHRpb24pID0+IHt9KX1cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNvbnN1bHRhckNlcCIsIkNvbnRhaW5lciIsIkRlbGl2ZXJ5IiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJkZWxpdmVyeU9wdGlvbnMiLCJoYW5kbGVJbnB1dCIsInRhcmdldCIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsInRoZW4iLCJyZXNwb25zZSIsImgxIiwibG9jYWxpZGFkZSIsInVmIiwiaDIiLCJsb2dyYWRvdXJvIiwiYmFpcnJvIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25LZXlEb3duIiwibWFwIiwib3B0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Delivery/index.tsx\n"));

/***/ })

});