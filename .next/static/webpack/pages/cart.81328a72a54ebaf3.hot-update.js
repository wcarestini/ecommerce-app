"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./src/utils/SessionStorageUtil.js":
/*!*****************************************!*\
  !*** ./src/utils/SessionStorageUtil.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addCart\": function() { return /* binding */ addCart; },\n/* harmony export */   \"getCartFromSessionStorage\": function() { return /* binding */ getCartFromSessionStorage; }\n/* harmony export */ });\nfunction getCartFromSessionStorage() {\n    let cart = JSON.parse(sessionStorage.getItem(\"cart\"));\n    if (!cart) {\n        cart = [];\n    }\n    return cart;\n}\nfunction setCartInSessionStorage(cart) {\n    sessionStorage.setItem(\"cart\", JSON.stringify(cart));\n}\nfunction addCart(param) {\n    let { id , name , price , imageUrl  } = param;\n    let cart = getCartFromSessionStorage();\n    if (cart.includes((c1)=>c1.id === id)) {\n        c.quantity = c.quantity + 1;\n    } else {\n        cart.push({\n            id,\n            name: title,\n            price,\n            imageUrl,\n            quantity\n        });\n    }\n    setCartInSessionStorage(cart);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvU2Vzc2lvblN0b3JhZ2VVdGlsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sU0FBU0EsNEJBQTRCO0lBQzFDLElBQUlDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsZUFBZUMsT0FBTyxDQUFDO0lBRTdDLElBQUksQ0FBQ0osTUFBTTtRQUNUQSxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBRUQsT0FBT0E7QUFDVCxDQUFDO0FBRUQsU0FBU0ssd0JBQXdCTCxJQUFJLEVBQUU7SUFDckNHLGVBQWVHLE9BQU8sQ0FBQyxRQUFRTCxLQUFLTSxTQUFTLENBQUNQO0FBQ2hEO0FBRU8sU0FBU1EsUUFBUSxLQUE2QixFQUFFO1FBQS9CLEVBQUVDLEdBQUUsRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUE3QjtJQUN0QixJQUFJWixPQUFPRDtJQUVYLElBQUlDLEtBQUthLFFBQVEsQ0FBQyxDQUFDQyxLQUFNQSxHQUFFTCxFQUFFLEtBQUtBLEtBQUs7UUFDckNLLEVBQUVDLFFBQVEsR0FBR0QsRUFBRUMsUUFBUSxHQUFHO0lBQzVCLE9BQU87UUFDTGYsS0FBS2dCLElBQUksQ0FBQztZQUFFUDtZQUFJQyxNQUFNTztZQUFPTjtZQUFPQztZQUFVRztRQUFTO0lBQ3pELENBQUM7SUFFRFYsd0JBQXdCTDtBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9TZXNzaW9uU3RvcmFnZVV0aWwuanM/NWYwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0Q2FydEZyb21TZXNzaW9uU3RvcmFnZSgpIHtcbiAgbGV0IGNhcnQgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKTtcblxuICBpZiAoIWNhcnQpIHtcbiAgICBjYXJ0ID0gW107XG4gIH1cblxuICByZXR1cm4gY2FydDtcbn1cblxuZnVuY3Rpb24gc2V0Q2FydEluU2Vzc2lvblN0b3JhZ2UoY2FydCkge1xuICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShjYXJ0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRDYXJ0KHsgaWQsIG5hbWUsIHByaWNlLCBpbWFnZVVybCB9KSB7XG4gIGxldCBjYXJ0ID0gZ2V0Q2FydEZyb21TZXNzaW9uU3RvcmFnZSgpO1xuXG4gIGlmIChjYXJ0LmluY2x1ZGVzKChjKSA9PiBjLmlkID09PSBpZCkpIHtcbiAgICBjLnF1YW50aXR5ID0gYy5xdWFudGl0eSArIDE7XG4gIH0gZWxzZSB7XG4gICAgY2FydC5wdXNoKHsgaWQsIG5hbWU6IHRpdGxlLCBwcmljZSwgaW1hZ2VVcmwsIHF1YW50aXR5IH0pO1xuICB9XG5cbiAgc2V0Q2FydEluU2Vzc2lvblN0b3JhZ2UoY2FydCk7XG59XG4iXSwibmFtZXMiOlsiZ2V0Q2FydEZyb21TZXNzaW9uU3RvcmFnZSIsImNhcnQiLCJKU09OIiwicGFyc2UiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRDYXJ0SW5TZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJhZGRDYXJ0IiwiaWQiLCJuYW1lIiwicHJpY2UiLCJpbWFnZVVybCIsImluY2x1ZGVzIiwiYyIsInF1YW50aXR5IiwicHVzaCIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/SessionStorageUtil.js\n"));

/***/ })

});