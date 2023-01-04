"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/product";
exports.ids = ["pages/product"];
exports.modules = {

/***/ "./src/contexts/CartContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/CartContext.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartContextProvider\": () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children  }) {\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    function addItem(item) {\n        if (!cart.items) {\n            setCart({\n                items: [\n                    item\n                ]\n            });\n        } else {\n            cart.items.push(item);\n            setCart(cart);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cart,\n            addItem\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/contexts/CartContext.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQ2FydENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQXNFO0FBcUIvRCxNQUFNRSw0QkFBY0Ysb0RBQWFBLENBQUMsQ0FBQyxHQUFzQjtBQUV6RCxTQUFTRyxvQkFBb0IsRUFBRUMsU0FBUSxFQUE0QixFQUFFO0lBQzFFLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBRWxDLFNBQVNNLFFBQVFDLElBQVUsRUFBRTtRQUMzQixJQUFJLENBQUNILEtBQUtJLEtBQUssRUFBRTtZQUNmSCxRQUFRO2dCQUNORyxPQUFPO29CQUFDRDtpQkFBSztZQUNmO1FBQ0YsT0FBTztZQUNMSCxLQUFLSSxLQUFLLENBQUNDLElBQUksQ0FBQ0Y7WUFDaEJGLFFBQVFEO1FBQ1YsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNILFlBQVlTLFFBQVE7UUFDbkJDLE9BQU87WUFDTFA7WUFDQUU7UUFDRjtrQkFFQ0g7Ozs7OztBQUdQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9zcmMvY29udGV4dHMvQ2FydENvbnRleHQudHN4P2JmYjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBJdGVtIHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgQ2FydCB7XG4gIGlkOiBudW1iZXI7XG4gIGl0ZW1zOiBbSXRlbV07XG59XG5cbmludGVyZmFjZSBDYXJ0Q29udGV4dERhdGEge1xuICBjYXJ0OiBDYXJ0O1xuICBhZGRJdGVtOiAoaXRlbTogSXRlbSkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIENhcnRDb250ZXh0UHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2FydENvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDYXJ0Q29udGV4dFByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoe30pO1xuXG4gIGZ1bmN0aW9uIGFkZEl0ZW0oaXRlbTogSXRlbSkge1xuICAgIGlmICghY2FydC5pdGVtcykge1xuICAgICAgc2V0Q2FydCh7XG4gICAgICAgIGl0ZW1zOiBbaXRlbV0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FydC5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgc2V0Q2FydChjYXJ0KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgY2FydCxcbiAgICAgICAgYWRkSXRlbSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2FydENvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJ0Iiwic2V0Q2FydCIsImFkZEl0ZW0iLCJpdGVtIiwiaXRlbXMiLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/CartContext.tsx\n");

/***/ }),

/***/ "./src/contexts/ProductContext.tsx":
/*!*****************************************!*\
  !*** ./src/contexts/ProductContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductContext\": () => (/* binding */ ProductContext),\n/* harmony export */   \"ProductContextProvider\": () => (/* binding */ ProductContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ProductContextProvider({ children  }) {\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    let productFind = null;\n    function searchProduct(term) {\n        setSearchTerm(term);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        productFind = products.find((product)=>product.name === searchTerm);\n        setProduct(productFind);\n    }, [\n        searchTerm\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductContext.Provider, {\n        value: {\n            product,\n            products,\n            searchProduct\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/contexts/ProductContext.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvUHJvZHVjdENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBT2U7QUFvQlIsTUFBTUksK0JBQWlCSCxvREFBYUEsQ0FBQyxDQUFDLEdBQXlCO0FBRS9ELFNBQVNJLHVCQUF1QixFQUFFQyxTQUFRLEVBQXdCLEVBQUU7SUFDekUsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ1EsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLElBQUlVLGNBQWMsSUFBSTtJQUV0QixTQUFTQyxjQUFjQyxJQUFZLEVBQUU7UUFDbkNQLGNBQWNPO0lBQ2hCO0lBRUFiLGdEQUFTQSxDQUFDLElBQU07UUFDZFcsY0FBY0YsU0FBU0ssSUFBSSxDQUFDLENBQUNQLFVBQVlBLFFBQVFRLElBQUksS0FBS1Y7UUFDMURHLFdBQVdHO0lBQ2IsR0FBRztRQUFDTjtLQUFXO0lBRWYscUJBQ0UsOERBQUNILGVBQWVjLFFBQVE7UUFBQ0MsT0FBTztZQUFFVjtZQUFTRTtZQUFVRztRQUFjO2tCQUNoRVI7Ozs7OztBQUdQLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UvLi9zcmMvY29udGV4dHMvUHJvZHVjdENvbnRleHQudHN4PzQzYzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XG4gIGNyZWF0ZUNvbnRleHQsXG4gIFJlYWN0Tm9kZSxcbiAgdXNlLFxuICB1c2VDb250ZXh0LFxuICB1c2VFZmZlY3QsXG4gIHVzZVN0YXRlLFxufSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuaW50ZXJmYWNlIFByb2R1Y3Qge1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByaWNlOiBudW1iZXI7XG4gIGltYWdlVXJsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBQcm9kdWN0Q29udGV4dERhdGEge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICBwcm9kdWN0czogUHJvZHVjdFtdO1xuICBzZWFyY2hQcm9kdWN0OiAodGVybTogc3RyaW5nKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgUHJvZHVjdFByb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFByb2R1Y3RDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBQcm9kdWN0Q29udGV4dFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogUHJvZHVjdFByb3ZpZGVyUHJvcHMpIHtcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgbGV0IHByb2R1Y3RGaW5kID0gbnVsbDtcblxuICBmdW5jdGlvbiBzZWFyY2hQcm9kdWN0KHRlcm06IHN0cmluZykge1xuICAgIHNldFNlYXJjaFRlcm0odGVybSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb2R1Y3RGaW5kID0gcHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5uYW1lID09PSBzZWFyY2hUZXJtKTtcbiAgICBzZXRQcm9kdWN0KHByb2R1Y3RGaW5kKTtcbiAgfSwgW3NlYXJjaFRlcm1dKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9kdWN0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9kdWN0LCBwcm9kdWN0cywgc2VhcmNoUHJvZHVjdCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1Byb2R1Y3RDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdENvbnRleHQiLCJQcm9kdWN0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsInByb2R1Y3RGaW5kIiwic2VhcmNoUHJvZHVjdCIsInRlcm0iLCJmaW5kIiwibmFtZSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ProductContext.tsx\n");

/***/ }),

/***/ "./src/pages/product.tsx":
/*!*******************************!*\
  !*** ./src/pages/product.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Product)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CartContext */ \"./src/contexts/CartContext.tsx\");\n/* harmony import */ var _contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ProductContext */ \"./src/contexts/ProductContext.tsx\");\n\n\n\n\n\n\nfunction Product() {\n    const { product  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ProductContext__WEBPACK_IMPORTED_MODULE_5__.ProductContext);\n    const { cart , addItem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_4__.CartContext);\n    const SWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().main)`\n    padding: 0 4rem 0 4rem;\n    min-height: 90vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  `;\n    const SImage = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().img)``;\n    const STitle = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().h1)``;\n    const SDescription = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().p)``;\n    const SPrice = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().p)``;\n    const SButton = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().button)``;\n    function handleAddCart() {\n        addItem({\n            id: 0,\n            name: product.name\n        });\n    }\n    // useEffect(() => {\n    //   console.log(cart);\n    // }, [cart]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"E-commerce | Product\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"E-commerce\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            product ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SWrapper, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SImage, {\n                        src: product.imageUrl\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(STitle, {\n                        children: product.name\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SDescription, {\n                        children: product.description\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SPrice, {\n                        children: [\n                            \"R$ \",\n                            product.price\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SButton, {\n                        onClick: ()=>console.log(cart),\n                        children: \"Comprar\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SButton, {\n                        onClick: handleAddCart,\n                        children: \"Add to carrinho\"\n                    }, void 0, false, {\n                        fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"N\\xe3o criei uma p\\xe1gina pra essa situ\\xe7\\xe3o ai, sori\"\n            }, void 0, false, {\n                fileName: \"/home/carestiniw/Workspace/ecommerce-app/src/pages/product.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNpQjtBQUVQO0FBQ2U7QUFDTTtBQUU3QyxTQUFTSyxVQUFVO0lBQ2hDLE1BQU0sRUFBRUMsUUFBTyxFQUFFLEdBQUdMLGlEQUFVQSxDQUFDRyxvRUFBY0E7SUFDN0MsTUFBTSxFQUFFRyxLQUFJLEVBQUVDLFFBQU8sRUFBRSxHQUFHUCxpREFBVUEsQ0FBQ0UsOERBQVdBO0lBRWhELE1BQU1NLFdBQVdQLCtEQUFXLENBQUM7Ozs7Ozs7RUFPN0IsQ0FBQztJQUNELE1BQU1TLFNBQVNULDhEQUFVLENBQUMsQ0FBQztJQUMzQixNQUFNVyxTQUFTWCw2REFBUyxDQUFDLENBQUM7SUFDMUIsTUFBTWEsZUFBZWIsNERBQVEsQ0FBQyxDQUFDO0lBQy9CLE1BQU1lLFNBQVNmLDREQUFRLENBQUMsQ0FBQztJQUN6QixNQUFNZ0IsVUFBVWhCLGlFQUFhLENBQUMsQ0FBQztJQUUvQixTQUFTa0IsZ0JBQWdCO1FBQ3ZCWixRQUFRO1lBQUVhLElBQUk7WUFBR0MsTUFBTWhCLFFBQVFnQixJQUFJO1FBQUM7SUFDdEM7SUFFQSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFFZCxxQkFDRTs7MEJBQ0UsOERBQUN0QixrREFBSUE7O2tDQUNILDhEQUFDdUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtGLE1BQUs7d0JBQWNHLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNEO3dCQUFLRixNQUFLO3dCQUFXRyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7O1lBRXZCdEIsd0JBQ0MsOERBQUNHOztrQ0FDQyw4REFBQ0U7d0JBQU9rQixLQUFLdkIsUUFBUXdCLFFBQVE7Ozs7OztrQ0FDN0IsOERBQUNqQjtrQ0FBUVAsUUFBUWdCLElBQUk7Ozs7OztrQ0FDckIsOERBQUNQO2tDQUFjVCxRQUFReUIsV0FBVzs7Ozs7O2tDQUNsQyw4REFBQ2Q7OzRCQUFPOzRCQUFJWCxRQUFRMEIsS0FBSzs7Ozs7OztrQ0FDekIsOERBQUNkO3dCQUFRZSxTQUFTLElBQU1DLFFBQVFDLEdBQUcsQ0FBQzVCO2tDQUFPOzs7Ozs7a0NBQzNDLDhEQUFDVzt3QkFBUWUsU0FBU2I7a0NBQWU7Ozs7Ozs7Ozs7O3FDQUduQyw4REFBQ047MEJBQUc7Ozs7O29CQUNMOzs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLy4vc3JjL3BhZ2VzL3Byb2R1Y3QudHN4PzNjMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DYXJ0Q29udGV4dFwiO1xuaW1wb3J0IHsgUHJvZHVjdENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvUHJvZHVjdENvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdCgpIHtcbiAgY29uc3QgeyBwcm9kdWN0IH0gPSB1c2VDb250ZXh0KFByb2R1Y3RDb250ZXh0KTtcbiAgY29uc3QgeyBjYXJ0LCBhZGRJdGVtIH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcblxuICBjb25zdCBTV3JhcHBlciA9IHN0eWxlZC5tYWluYFxuICAgIHBhZGRpbmc6IDAgNHJlbSAwIDRyZW07XG4gICAgbWluLWhlaWdodDogOTB2aDtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBgO1xuICBjb25zdCBTSW1hZ2UgPSBzdHlsZWQuaW1nYGA7XG4gIGNvbnN0IFNUaXRsZSA9IHN0eWxlZC5oMWBgO1xuICBjb25zdCBTRGVzY3JpcHRpb24gPSBzdHlsZWQucGBgO1xuICBjb25zdCBTUHJpY2UgPSBzdHlsZWQucGBgO1xuICBjb25zdCBTQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBgO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUFkZENhcnQoKSB7XG4gICAgYWRkSXRlbSh7IGlkOiAwLCBuYW1lOiBwcm9kdWN0Lm5hbWUgfSk7XG4gIH1cblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICAvLyB9LCBbY2FydF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+RS1jb21tZXJjZSB8IFByb2R1Y3Q8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiRS1jb21tZXJjZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHtwcm9kdWN0ID8gKFxuICAgICAgICA8U1dyYXBwZXI+XG4gICAgICAgICAgPFNJbWFnZSBzcmM9e3Byb2R1Y3QuaW1hZ2VVcmx9PjwvU0ltYWdlPlxuICAgICAgICAgIDxTVGl0bGU+e3Byb2R1Y3QubmFtZX08L1NUaXRsZT5cbiAgICAgICAgICA8U0Rlc2NyaXB0aW9uPntwcm9kdWN0LmRlc2NyaXB0aW9ufTwvU0Rlc2NyaXB0aW9uPlxuICAgICAgICAgIDxTUHJpY2U+UiQge3Byb2R1Y3QucHJpY2V9PC9TUHJpY2U+XG4gICAgICAgICAgPFNCdXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coY2FydCl9PkNvbXByYXI8L1NCdXR0b24+XG4gICAgICAgICAgPFNCdXR0b24gb25DbGljaz17aGFuZGxlQWRkQ2FydH0+QWRkIHRvIGNhcnJpbmhvPC9TQnV0dG9uPlxuICAgICAgICA8L1NXcmFwcGVyPlxuICAgICAgKSA6IChcbiAgICAgICAgPGgxPk7Do28gY3JpZWkgdW1hIHDDoWdpbmEgcHJhIGVzc2Egc2l0dcOnw6NvIGFpLCBzb3JpPC9oMT5cbiAgICAgICl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUNvbnRleHQiLCJzdHlsZWQiLCJDYXJ0Q29udGV4dCIsIlByb2R1Y3RDb250ZXh0IiwiUHJvZHVjdCIsInByb2R1Y3QiLCJjYXJ0IiwiYWRkSXRlbSIsIlNXcmFwcGVyIiwibWFpbiIsIlNJbWFnZSIsImltZyIsIlNUaXRsZSIsImgxIiwiU0Rlc2NyaXB0aW9uIiwicCIsIlNQcmljZSIsIlNCdXR0b24iLCJidXR0b24iLCJoYW5kbGVBZGRDYXJ0IiwiaWQiLCJuYW1lIiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwic3JjIiwiaW1hZ2VVcmwiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/product.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/product.tsx"));
module.exports = __webpack_exports__;

})();