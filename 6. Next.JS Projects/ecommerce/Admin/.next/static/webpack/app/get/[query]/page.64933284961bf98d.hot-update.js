"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/get/[query]/page",{

/***/ "(app-pages-browser)/./app/get/[query]/page.js":
/*!*********************************!*\
  !*** ./app/get/[query]/page.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_GetPd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/GetPd */ \"(app-pages-browser)/./actions/GetPd.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const { query } = params;\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (query === \"OutOfStock\") {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetStockPd)().then((resp)=>{\n                setData(resp);\n            });\n        } else {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetOrders)().then((resp)=>{\n                resp.map((item)=>{\n                    item.orders.map(item);\n                });\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-3xl mt-4\",\n                children: [\n                    \"BookMerce - \",\n                    query\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 25,\n                    columnNumber: 80\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20\",\n                children: query === \"OutOfStock\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Book Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Out Of Stock\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined),\n                        console.log(Data),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data ? Array.isArray(Data) ? Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.BookName\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: item.OutOfStock[0].replace(/\\n/g, \"<br />\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 21\n                                }, undefined);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 22\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 39\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 28,\n                    columnNumber: 34\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        console.log(item),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.user\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex w-full justify-between mb-3 border border-t-0 border-l-0 border-r-0 border-white\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Name of Book Ordered\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 86,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"\",\n                                                            children: \"Qty\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 87,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Delivery Address\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 88,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                item.orders.map((item, index)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex w-full justify-between items-center\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.book\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 94,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.qty\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 95,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.DelAddress\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 96,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 33\n                                                    }, undefined);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 57,\n                    columnNumber: 22\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"xsxb+4jHutJ15CYluGxm3ovL3zM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nZXQvW3F1ZXJ5XS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VEO0FBQ1o7QUFDZjtBQUc1QixNQUFNSyxPQUFPO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxVQUFVLGNBQWM7WUFDMUJOLDBEQUFVQSxHQUFHUyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQVdGLFFBQVFFO1lBQU87UUFDL0MsT0FDSztZQUNIWCx5REFBU0EsR0FBR1UsSUFBSSxDQUFDLENBQUNDO2dCQUNoQkEsS0FBS0MsR0FBRyxDQUFDLENBQUNDO29CQUNSQSxLQUFLQyxNQUFNLENBQUNGLEdBQUcsQ0FBRUM7Z0JBQ25CO1lBQ0Q7UUFDSDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ0U7Z0JBQUVDLFdBQVU7O29CQUE0QjtvQkFBYVQ7Ozs7Ozs7MEJBQ3RELDhEQUFDUTtnQkFBRUMsV0FBVTswQkFBNEQsNEVBQUNaLGlEQUFJQTtvQkFBQ2EsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7MEJBQ3hGLDhEQUFDQztnQkFBSUYsV0FBVTswQkFFWFQsVUFBUSw2QkFBZSw4REFBQ1k7b0JBQU1ILFdBQVU7O3NDQUN0Qyw4REFBQ0k7NEJBQU1KLFdBQVU7c0NBQ2YsNEVBQUNLOztrREFDQyw4REFBQ0M7d0NBQUdDLE9BQU07d0NBQU1QLFdBQVU7a0RBQXdCOzs7Ozs7a0RBR2xELDhEQUFDTTt3Q0FBR0MsT0FBTTt3Q0FBTVAsV0FBVTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUtyRFEsUUFBUUMsR0FBRyxDQUFDakI7c0NBQ2IsOERBQUNrQjtzQ0FFR2xCLE9BQU9tQixNQUFNQyxPQUFPLENBQUNwQixRQUFRQSxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTWdCO2dDQUMzQyxxQkFDRSw4REFBQ1I7b0NBQUdMLFdBQVU7O3NEQUNaLDhEQUFDYzs0Q0FBR1AsT0FBTTs0Q0FBTVAsV0FBVTtzREFDeEIsNEVBQUNEOzBEQUFHRixLQUFLa0IsUUFBUTs7Ozs7Ozs7Ozs7c0RBRW5CLDhEQUFDRDs0Q0FBR1AsT0FBTTs0Q0FBTVAsV0FBVTs0Q0FBK0NnQix5QkFBeUI7Z0RBQ2hHQyxRQUFRcEIsS0FBS3FCLFVBQVUsQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxPQUFPOzRDQUM1Qzs7Ozs7OzttQ0FOdUZOOzs7Ozs0QkFVN0YsbUJBQUssOERBQUNkOzBDQUFFOzs7OzswREFBYyw4REFBQ0E7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3BCLDhEQUFDSTtvQkFBTUgsV0FBVTs7c0NBQzFCLDhEQUFDSTs0QkFBTUosV0FBVTtzQ0FDZiw0RUFBQ0s7O2tEQUNDLDhEQUFDQzt3Q0FBR0MsT0FBTTt3Q0FBTVAsV0FBVTtrREFBd0I7Ozs7OztrREFHbEQsOERBQUNNO3dDQUFHQyxPQUFNO3dDQUFNUCxXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBY3RELDhEQUFDVTtzQ0FBT2xCLEtBQUtJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNZ0I7Z0NBQ3RCLHFCQUNFLDhEQUFDUjtvQ0FBR0wsV0FBVTs7d0NBQ1hRLFFBQVFDLEdBQUcsQ0FBQ1o7c0RBQ2IsOERBQUNpQjs0Q0FBR1AsT0FBTTs0Q0FBTVAsV0FBVTtzREFDeEIsNEVBQUNEOzBEQUFHRixLQUFLdUIsSUFBSTs7Ozs7Ozs7Ozs7c0RBRWYsOERBQUNOOzRDQUFHUCxPQUFNOzRDQUFNUCxXQUFVOzs4REFDeEIsOERBQUNFO29EQUFJRixXQUFVOztzRUFDZiw4REFBQ0Q7c0VBQUU7Ozs7OztzRUFDSCw4REFBQ0E7NERBQUVDLFdBQVU7c0VBQUc7Ozs7OztzRUFDaEIsOERBQUNEO3NFQUFFOzs7Ozs7Ozs7Ozs7Z0RBSURGLEtBQUtDLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDLENBQUNDLE1BQUtnQjtvREFDcEIscUJBQVEsOERBQUNYO3dEQUFJRixXQUFVOzswRUFDckIsOERBQUNEOzBFQUFHRixLQUFLd0IsSUFBSTs7Ozs7OzBFQUNiLDhEQUFDdEI7MEVBQUdGLEtBQUt5QixHQUFHOzs7Ozs7MEVBQ1osOERBQUN2QjswRUFBR0YsS0FBSzBCLFVBQVU7Ozs7Ozs7Ozs7OztnREFHdkI7Ozs7Ozs7O21DQXBCbUZWOzs7Ozs0QkEwQjdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0F4R014QjtBQTBHTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2V0L1txdWVyeV0vcGFnZS5qcz8xNWM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEdldE9yZGVycywgR2V0U3RvY2tQZCB9IGZyb20gXCJAL2FjdGlvbnMvR2V0UGRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5cclxuY29uc3QgcGFnZSA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IFtEYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXJ5ID09PSBcIk91dE9mU3RvY2tcIikge1xyXG4gICAgICBHZXRTdG9ja1BkKCkudGhlbigocmVzcCkgPT4geyBzZXREYXRhKHJlc3ApOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBHZXRPcmRlcnMoKS50aGVuKChyZXNwKSA9PiB7IFxyXG4gICAgICAgIHJlc3AubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgaXRlbS5vcmRlcnMubWFwKChpdGVtKSlcclxuICAgICAgICB9KVxyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIG10LTRcIj5Cb29rTWVyY2UgLSB7cXVlcnl9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJteC1hdXRvIHctZml0IG10LTEwIG1iLTEyIHVuZGVybGluZSBob3Zlcjp0ZXh0LWluZGlnby04MDBcIj48TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byBteC0xMCBtdC0xMiBzaGFkb3ctbWQgcm91bmRlZC1sZyBtYXgtaC1bMzhyZW1dIG1iLTIwXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcXVlcnk9PT1cIk91dE9mU3RvY2tcIiA/IDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgcnRsOnRleHQtcmlnaHQgdGV4dC1ncmF5LTQwMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgYmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgQm9vayBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIE91dCBPZiBTdG9ja1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2coRGF0YSl9XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEYXRhID8gQXJyYXkuaXNBcnJheShEYXRhKSA/IERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItci0wIGJvcmRlci10LTAgYm9yZGVyLWdyYXktNjAwXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItdC0wIGJvcmRlci1iLTAgIGJvcmRlci1yLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLkJvb2tOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogaXRlbS5PdXRPZlN0b2NrWzBdLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JylcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KSA6IDxwPk5vIGRhdGE8L3A+IDogPHA+Tm8gZGF0YTwvcD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPiA6IDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgcnRsOnRleHQtcmlnaHQgdGV4dC1ncmF5LTQwMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgYmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgVXNlclxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICB7LyogPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJvb2sgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBRdHlcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgRGVsIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgIDwvdGg+ICovfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT57RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItci0wIGJvcmRlci10LTAgYm9yZGVyLWdyYXktNjAwXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1sLTAgYm9yZGVyLXQtMCBib3JkZXItYi0wICBib3JkZXItci1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnVzZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItdC0wIGJvcmRlci1iLTAgIGJvcmRlci1yLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gbWItMyBib3JkZXIgYm9yZGVyLXQtMCBib3JkZXItbC0wIGJvcmRlci1yLTAgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZSBvZiBCb29rIE9yZGVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+UXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGl2ZXJ5IEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3JkZXJzLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib29rfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5xdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLkRlbEFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfSl9PC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJHZXRPcmRlcnMiLCJHZXRTdG9ja1BkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwicGFnZSIsInBhcmFtcyIsInF1ZXJ5IiwiRGF0YSIsInNldERhdGEiLCJ0aGVuIiwicmVzcCIsIm1hcCIsIml0ZW0iLCJvcmRlcnMiLCJwIiwiY2xhc3NOYW1lIiwiaHJlZiIsImRpdiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJjb25zb2xlIiwibG9nIiwidGJvZHkiLCJBcnJheSIsImlzQXJyYXkiLCJpbmRleCIsInRkIiwiQm9va05hbWUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIk91dE9mU3RvY2siLCJyZXBsYWNlIiwidXNlciIsImJvb2siLCJxdHkiLCJEZWxBZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/get/[query]/page.js\n"));

/***/ })

});