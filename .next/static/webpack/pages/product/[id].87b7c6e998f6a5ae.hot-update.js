"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./src/pages/product/styles.ts":
/*!*************************************!*\
  !*** ./src/pages/product/styles.ts ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonsContainer\": function() { return /* binding */ ButtonsContainer; },\n/* harmony export */   \"InformationContainer\": function() { return /* binding */ InformationContainer; },\n/* harmony export */   \"Main\": function() { return /* binding */ Main; },\n/* harmony export */   \"Price\": function() { return /* binding */ Price; },\n/* harmony export */   \"Title\": function() { return /* binding */ Title; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 3rem;\\n\\n  border-bottom: rgba(0, 0, 0, 25%) solid 1px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  padding: 2rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 2rem;\\n  @media (min-width: 1024px) {\\n    padding: 6rem;\\n  }\\n\"\n    ]);\n    _templateObject2 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n  font-size: 1.5rem;\\n\"\n    ]);\n    _templateObject3 = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\"\n    ]);\n    _templateObject4 = function() {\n        return data;\n    };\n    return data;\n}\n\nconst Main = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main.withConfig({\n    displayName: \"styles__Main\",\n    componentId: \"sc-eac73560-0\"\n})(_templateObject());\nconst Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n    displayName: \"styles__Title\",\n    componentId: \"sc-eac73560-1\"\n})(_templateObject1());\nconst InformationContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__InformationContainer\",\n    componentId: \"sc-eac73560-2\"\n})(_templateObject2());\nconst Price = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].strong.withConfig({\n    displayName: \"styles__Price\",\n    componentId: \"sc-eac73560-3\"\n})(_templateObject3());\nconst ButtonsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n    displayName: \"styles__ButtonsContainer\",\n    componentId: \"sc-eac73560-4\"\n})(_templateObject4());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC9zdHlsZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBRWhDLE1BQU1DLE9BQU9ELHlFQUFXOzs7c0JBQUc7QUFFM0IsTUFBTUcsUUFBUUgsdUVBQVM7Ozt1QkFJNUI7QUFFSyxNQUFNSyx1QkFBdUJMLHdFQUFVOzs7dUJBUTVDO0FBRUssTUFBTU8sUUFBUVAsMkVBQWE7Ozt1QkFFaEM7QUFFSyxNQUFNUyxtQkFBbUJULHdFQUFVOzs7dUJBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3Qvc3R5bGVzLnRzP2E1ZTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGNvbnN0IE1haW4gPSBzdHlsZWQubWFpbmBgO1xuXG5leHBvcnQgY29uc3QgVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogM3JlbTtcblxuICBib3JkZXItYm90dG9tOiByZ2JhKDAsIDAsIDAsIDI1JSkgc29saWQgMXB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IEluZm9ybWF0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAycmVtO1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgcGFkZGluZzogNnJlbTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFByaWNlID0gc3R5bGVkLnN0cm9uZ2BcbiAgZm9udC1zaXplOiAxLjVyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgQnV0dG9uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgYDtcbiJdLCJuYW1lcyI6WyJzdHlsZWQiLCJNYWluIiwibWFpbiIsIlRpdGxlIiwiaDEiLCJJbmZvcm1hdGlvbkNvbnRhaW5lciIsImRpdiIsIlByaWNlIiwic3Ryb25nIiwiQnV0dG9uc0NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/product/styles.ts\n"));

/***/ })

});