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

/***/ "./src/utils/SessionStorageUtil.js":
/*!*****************************************!*\
  !*** ./src/utils/SessionStorageUtil.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCart\": function() { return /* binding */ addCart; },\n/* harmony export */   \"getCartFromSessionStorage\": function() { return /* binding */ getCartFromSessionStorage; }\n/* harmony export */ });\nfunction getCartFromSessionStorage() {\n    let cart = JSON.parse(sessionStorage.getItem(\"cart\"));\n    if (!cart) {\n        cart = [];\n    }\n    return cart;\n}\nfunction setCartInSessionStorage(cart) {\n    sessionStorage.setItem(\"cart\", JSON.stringify(cart));\n}\nfunction addCart(param) {\n    let { id , name , price , imageUrl  } = param;\n    let cart = getCartFromSessionStorage();\n    if (cart.some((c1)=>c1.id === id)) {\n        c.quantity = c.quantity + 1;\n    } else {\n        cart.push({\n            id,\n            name,\n            price,\n            imageUrl,\n            quantity: 1\n        });\n    }\n    setCartInSessionStorage(cart);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvU2Vzc2lvblN0b3JhZ2VVdGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsNEJBQTRCO0lBQzFDLElBQUlDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsZUFBZUMsT0FBTyxDQUFDO0lBRTdDLElBQUksQ0FBQ0osTUFBTTtRQUNUQSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBRUQsT0FBT0E7QUFDVCxDQUFDO0FBRUQsU0FBU0ssd0JBQXdCTCxJQUFJLEVBQUU7SUFDckNHLGVBQWVHLE9BQU8sQ0FBQyxRQUFRTCxLQUFLTSxTQUFTLENBQUNQO0FBQ2hEO0FBRU8sU0FBU1EsUUFBUSxLQUE2QixFQUFFO1FBQS9CLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUE3QjtJQUN0QixJQUFJWixPQUFPRDtJQUVYLElBQUlDLEtBQUthLElBQUksQ0FBQyxDQUFDQyxLQUFNQSxHQUFFTCxFQUFFLEtBQUtBLEtBQUs7UUFDakNLLEVBQUVDLFFBQVEsR0FBR0QsRUFBRUMsUUFBUSxHQUFHO0lBQzVCLE9BQU87UUFDTGYsS0FBS2dCLElBQUksQ0FBQztZQUFFUDtZQUFJQztZQUFNQztZQUFPQztZQUFVRyxVQUFVO1FBQUU7SUFDckQsQ0FBQztJQUVEVix3QkFBd0JMO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL1Nlc3Npb25TdG9yYWdlVXRpbC5qcz81ZjAyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRDYXJ0RnJvbVNlc3Npb25TdG9yYWdlKCkge1xuICBsZXQgY2FydCA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImNhcnRcIikpO1xuXG4gIGlmICghY2FydCkge1xuICAgIGNhcnQgPSBbXTtcbiAgfVxuXG4gIHJldHVybiBjYXJ0O1xufVxuXG5mdW5jdGlvbiBzZXRDYXJ0SW5TZXNzaW9uU3RvcmFnZShjYXJ0KSB7XG4gIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjYXJ0XCIsIEpTT04uc3RyaW5naWZ5KGNhcnQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZENhcnQoeyBpZCwgbmFtZSwgcHJpY2UsIGltYWdlVXJsIH0pIHtcbiAgbGV0IGNhcnQgPSBnZXRDYXJ0RnJvbVNlc3Npb25TdG9yYWdlKCk7XG5cbiAgaWYgKGNhcnQuc29tZSgoYykgPT4gYy5pZCA9PT0gaWQpKSB7XG4gICAgYy5xdWFudGl0eSA9IGMucXVhbnRpdHkgKyAxO1xuICB9IGVsc2Uge1xuICAgIGNhcnQucHVzaCh7IGlkLCBuYW1lLCBwcmljZSwgaW1hZ2VVcmwsIHF1YW50aXR5OiAxIH0pO1xuICB9XG5cbiAgc2V0Q2FydEluU2Vzc2lvblN0b3JhZ2UoY2FydCk7XG59XG4iXSwibmFtZXMiOlsiZ2V0Q2FydEZyb21TZXNzaW9uU3RvcmFnZSIsImNhcnQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRDYXJ0SW5TZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRDYXJ0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJpbWFnZVVybCIsInNvbWUiLCJjIiwicXVhbnRpdHkiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/SessionStorageUtil.js\n"));

/***/ })

});