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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_GetPd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/GetPd */ \"(app-pages-browser)/./actions/GetPd.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const { query } = params;\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (query === \"OutOfStock\") {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetStockPd)().then((resp)=>{\n                setData(resp);\n            });\n        } else {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetOrders)().then((resp)=>{\n                resp.map((item)=>{\n                    item.orders.map((item)=>{\n                        (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.book).then((resp)=>{\n                            item.book = resp.BookName;\n                        });\n                    });\n                    return item;\n                });\n            }).then((resp)=>{\n                setData([\n                    ...Data,\n                    resp\n                ]);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-3xl mt-4\",\n                children: [\n                    \"BookMerce - \",\n                    query\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 31,\n                    columnNumber: 80\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20\",\n                children: query === \"OutOfStock\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Book Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Out Of Stock\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined),\n                        console.log(Data),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data ? Array.isArray(Data) ? Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.BookName\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 52,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: item.OutOfStock[0].replace(/\\n/g, \"<br />\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 21\n                                }, undefined);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 22\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 60,\n                                columnNumber: 39\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 34,\n                    columnNumber: 34\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.user\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 87,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex w-full justify-between mb-3 border border-t-0 border-l-0 border-r-0 border-white\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Name of Book Ordered\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Qty\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Delivery Address\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 93,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                    lineNumber: 90,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                console.log(item),\n                                                item.orders.map((item, index)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex w-full justify-between items-center\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.book\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 99,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.qty\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 100,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.DelAddress\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 101,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        ]\n                                                    }, index, true, {\n                                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                        lineNumber: 98,\n                                                        columnNumber: 33\n                                                    }, undefined);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 63,\n                    columnNumber: 22\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"xsxb+4jHutJ15CYluGxm3ovL3zM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nZXQvW3F1ZXJ5XS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzhEO0FBQ25CO0FBQ2Y7QUFHNUIsTUFBTU0sT0FBTztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFDbEIsTUFBTSxDQUFDRSxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssVUFBVSxjQUFjO1lBQzFCTiwwREFBVUEsR0FBR1MsSUFBSSxDQUFDLENBQUNDO2dCQUFXRixRQUFRRTtZQUFPO1FBQy9DLE9BQ0s7WUFDSFgseURBQVNBLEdBQ1JVLElBQUksQ0FBQyxDQUFDQztnQkFDTEEsS0FBS0MsR0FBRyxDQUFDLENBQUNDO29CQUNSQSxLQUFLQyxNQUFNLENBQUNGLEdBQUcsQ0FBQyxDQUFDQzt3QkFDZmQsMERBQUtBLENBQUNjLEtBQUtFLElBQUksRUFBRUwsSUFBSSxDQUFDLENBQUNDOzRCQUNyQkUsS0FBS0UsSUFBSSxHQUFDSixLQUFLSyxRQUFRO3dCQUN6QjtvQkFDRjtvQkFDQSxPQUFPSDtnQkFDVDtZQUNGLEdBQUdILElBQUksQ0FBQyxDQUFDQztnQkFBUUYsUUFBUTt1QkFBSUQ7b0JBQUtHO2lCQUFLO1lBQUM7UUFDMUM7SUFDRixHQUFHLEVBQUU7SUFDTCxxQkFDRTs7MEJBQ0UsOERBQUNNO2dCQUFFQyxXQUFVOztvQkFBNEI7b0JBQWFYOzs7Ozs7OzBCQUN0RCw4REFBQ1U7Z0JBQUVDLFdBQVU7MEJBQTRELDRFQUFDZCxpREFBSUE7b0JBQUNlLE1BQUs7OEJBQUk7Ozs7Ozs7Ozs7OzBCQUN4Riw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBRVhYLFVBQVEsNkJBQWUsOERBQUNjO29CQUFNSCxXQUFVOztzQ0FDdEMsOERBQUNJOzRCQUFNSixXQUFVO3NDQUNmLDRFQUFDSzs7a0RBQ0MsOERBQUNDO3dDQUFHQyxPQUFNO3dDQUFNUCxXQUFVO2tEQUF3Qjs7Ozs7O2tEQUdsRCw4REFBQ007d0NBQUdDLE9BQU07d0NBQU1QLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7Ozt3QkFLckRRLFFBQVFDLEdBQUcsQ0FBQ25CO3NDQUNiLDhEQUFDb0I7c0NBRUdwQixPQUFPcUIsTUFBTUMsT0FBTyxDQUFDdEIsUUFBUUEsS0FBS0ksR0FBRyxDQUFDLENBQUNDLE1BQU1rQjtnQ0FDM0MscUJBQ0UsOERBQUNSO29DQUFHTCxXQUFVOztzREFDWiw4REFBQ2M7NENBQUdQLE9BQU07NENBQU1QLFdBQVU7c0RBQ3hCLDRFQUFDRDswREFBR0osS0FBS0csUUFBUTs7Ozs7Ozs7Ozs7c0RBRW5CLDhEQUFDZ0I7NENBQUdQLE9BQU07NENBQU1QLFdBQVU7NENBQStDZSx5QkFBeUI7Z0RBQ2hHQyxRQUFRckIsS0FBS3NCLFVBQVUsQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxPQUFPOzRDQUM1Qzs7Ozs7OzttQ0FOdUZMOzs7Ozs0QkFVN0YsbUJBQUssOERBQUNkOzBDQUFFOzs7OzswREFBYyw4REFBQ0E7MENBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3BCLDhEQUFDSTtvQkFBTUgsV0FBVTs7c0NBQzFCLDhEQUFDSTs0QkFBTUosV0FBVTtzQ0FDZiw0RUFBQ0s7O2tEQUNDLDhEQUFDQzt3Q0FBR0MsT0FBTTt3Q0FBTVAsV0FBVTtrREFBd0I7Ozs7OztrREFHbEQsOERBQUNNO3dDQUFHQyxPQUFNO3dDQUFNUCxXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBY3RELDhEQUFDVTtzQ0FBT3BCLEtBQUtJLEdBQUcsQ0FBQyxDQUFDQyxNQUFNa0I7Z0NBQ3RCLHFCQUNFLDhEQUFDUjtvQ0FBR0wsV0FBVTs7c0RBQ1osOERBQUNjOzRDQUFHUCxPQUFNOzRDQUFNUCxXQUFVO3NEQUN4Qiw0RUFBQ0Q7MERBQUdKLEtBQUt3QixJQUFJOzs7Ozs7Ozs7OztzREFFZiw4REFBQ0w7NENBQUdQLE9BQU07NENBQU1QLFdBQVU7OzhEQUN4Qiw4REFBQ0U7b0RBQUlGLFdBQVU7O3NFQUNmLDhEQUFDRDtzRUFBRTs7Ozs7O3NFQUNILDhEQUFDQTtzRUFBRTs7Ozs7O3NFQUNILDhEQUFDQTtzRUFBRTs7Ozs7Ozs7Ozs7O2dEQUVGUyxRQUFRQyxHQUFHLENBQUNkO2dEQUVYQSxLQUFLQyxNQUFNLENBQUNGLEdBQUcsQ0FBQyxDQUFDQyxNQUFLa0I7b0RBQ3BCLHFCQUFRLDhEQUFDWDt3REFBSUYsV0FBVTs7MEVBQ3JCLDhEQUFDRDswRUFBR0osS0FBS0UsSUFBSTs7Ozs7OzBFQUNiLDhEQUFDRTswRUFBR0osS0FBS3lCLEdBQUc7Ozs7OzswRUFDWiw4REFBQ3JCOzBFQUFHSixLQUFLMEIsVUFBVTs7Ozs7Ozt1REFIa0RSOzs7OztnREFNekU7Ozs7Ozs7O21DQW5CbUZBOzs7Ozs0QkF5QjdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0E3R00xQjtBQStHTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2V0L1txdWVyeV0vcGFnZS5qcz8xNWM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCBHZXRQZCwgeyBHZXRPcmRlcnMsIEdldFN0b2NrUGQgfSBmcm9tIFwiQC9hY3Rpb25zL0dldFBkXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuXHJcbmNvbnN0IHBhZ2UgPSAoeyBwYXJhbXMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHBhcmFtcztcclxuICBjb25zdCBbRGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChxdWVyeSA9PT0gXCJPdXRPZlN0b2NrXCIpIHtcclxuICAgICAgR2V0U3RvY2tQZCgpLnRoZW4oKHJlc3ApID0+IHsgc2V0RGF0YShyZXNwKTsgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgR2V0T3JkZXJzKClcclxuICAgICAgLnRoZW4oKHJlc3ApID0+IHsgXHJcbiAgICAgICAgcmVzcC5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICBpdGVtLm9yZGVycy5tYXAoKGl0ZW0pPT57XHJcbiAgICAgICAgICAgIEdldFBkKGl0ZW0uYm9vaykudGhlbigocmVzcCk9PntcclxuICAgICAgICAgICAgICBpdGVtLmJvb2s9cmVzcC5Cb29rTmFtZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pLnRoZW4oKHJlc3ApPT57c2V0RGF0YShbLi4uRGF0YSxyZXNwXSl9KTtcclxuICAgIH1cclxuICB9LCBbXSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC0zeGwgbXQtNFwiPkJvb2tNZXJjZSAtIHtxdWVyeX08L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm14LWF1dG8gdy1maXQgbXQtMTAgbWItMTIgdW5kZXJsaW5lIGhvdmVyOnRleHQtaW5kaWdvLTgwMFwiPjxMaW5rIGhyZWY9XCIvXCI+SG9tZTwvTGluaz48L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIG14LTEwIG10LTEyIHNoYWRvdy1tZCByb3VuZGVkLWxnIG1heC1oLVszOHJlbV0gbWItMjBcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBxdWVyeT09PVwiT3V0T2ZTdG9ja1wiID8gPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdCBydGw6dGV4dC1yaWdodCB0ZXh0LWdyYXktNDAwIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBCb29rIE5hbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgT3V0IE9mIFN0b2NrXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIHtjb25zb2xlLmxvZyhEYXRhKX1cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERhdGEgPyBBcnJheS5pc0FycmF5KERhdGEpID8gRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJvcmRlciBib3JkZXItbC0wIGJvcmRlci1yLTAgYm9yZGVyLXQtMCBib3JkZXItZ3JheS02MDBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItbC0wIGJvcmRlci10LTAgYm9yZGVyLWItMCAgYm9yZGVyLXItZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uQm9va05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBpdGVtLk91dE9mU3RvY2tbMF0ucmVwbGFjZSgvXFxuL2csICc8YnIgLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pIDogPHA+Tm8gZGF0YTwvcD4gOiA8cD5ObyBkYXRhPC9wPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+IDogPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdCBydGw6dGV4dC1yaWdodCB0ZXh0LWdyYXktNDAwIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBVc2VyXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIE9yZGVyc1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIHsvKiA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgQm9vayBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIFF0eVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBEZWwgQWRkcmVzc1xyXG4gICAgICAgICAgICAgICAgPC90aD4gKi99XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PntEYXRhLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJvcmRlciBib3JkZXItbC0wIGJvcmRlci1yLTAgYm9yZGVyLXQtMCBib3JkZXItZ3JheS02MDBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1sLTAgYm9yZGVyLXQtMCBib3JkZXItYi0wICBib3JkZXItci1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnVzZXJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItdC0wIGJvcmRlci1iLTAgIGJvcmRlci1yLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gbWItMyBib3JkZXIgYm9yZGVyLXQtMCBib3JkZXItbC0wIGJvcmRlci1yLTAgYm9yZGVyLXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+TmFtZSBvZiBCb29rIE9yZGVyZWQ8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+UXR5PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRlbGl2ZXJ5IEFkZHJlc3M8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ub3JkZXJzLm1hcCgoaXRlbSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICg8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5ib29rfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5xdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLkRlbEFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgKVxyXG5cclxuICAgICAgICAgICAgfSl9PC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcGFnZSJdLCJuYW1lcyI6WyJHZXRQZCIsIkdldE9yZGVycyIsIkdldFN0b2NrUGQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJwYWdlIiwicGFyYW1zIiwicXVlcnkiLCJEYXRhIiwic2V0RGF0YSIsInRoZW4iLCJyZXNwIiwibWFwIiwiaXRlbSIsIm9yZGVycyIsImJvb2siLCJCb29rTmFtZSIsInAiLCJjbGFzc05hbWUiLCJocmVmIiwiZGl2IiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsImNvbnNvbGUiLCJsb2ciLCJ0Ym9keSIsIkFycmF5IiwiaXNBcnJheSIsImluZGV4IiwidGQiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIk91dE9mU3RvY2siLCJyZXBsYWNlIiwidXNlciIsInF0eSIsIkRlbEFkZHJlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/get/[query]/page.js\n"));

/***/ })

});