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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_GetPd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/GetPd */ \"(app-pages-browser)/./actions/GetPd.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const { query } = params;\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (query === \"OutOfStock\") {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetStockPd)().then((resp)=>{\n                setData(resp);\n            });\n        } else {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetOrders)().then((resp)=>{\n                resp.map((item)=>{\n                    item.orders.map((item)=>{\n                        (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(item.book).then((resp)=>{\n                            item.book = resp.BookName;\n                        });\n                    });\n                });\n                setData(resp);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-3xl mt-4\",\n                children: [\n                    \"BookMerce - \",\n                    query\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 30,\n                    columnNumber: 80\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20\",\n                children: query === \"OutOfStock\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Book Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Out Of Stock\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        console.log(Data),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data ? Array.isArray(Data) ? Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.BookName\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: item.OutOfStock[0].replace(/\\n/g, \"<br />\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 21\n                                }, undefined);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 22\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 59,\n                                columnNumber: 39\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 33,\n                    columnNumber: 34\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"User\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Orders\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.user\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex w-full justify-between mb-3 border border-t-0 border-l-0 border-r-0 border-white\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Name of Book Ordered\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 90,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Qty\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 91,\n                                                            columnNumber: 21\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            children: \"Delivery Address\"\n                                                        }, void 0, false, {\n                                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                            lineNumber: 92,\n                                                            columnNumber: 21\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                console.log(item.orders[0].book),\n                                                item.orders.map((item, index)=>{\n                                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"flex w-full justify-between items-center\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.book\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 98,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.qty\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 99,\n                                                                columnNumber: 27\n                                                            }, undefined),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                                children: item.DelAddress\n                                                            }, void 0, false, {\n                                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                                lineNumber: 100,\n                                                                columnNumber: 27\n                                                            }, undefined)\n                                                        ]\n                                                    }, index, true, {\n                                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 33\n                                                    }, undefined);\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 82,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 62,\n                    columnNumber: 22\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"xsxb+4jHutJ15CYluGxm3ovL3zM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nZXQvW3F1ZXJ5XS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzhEO0FBQ25CO0FBQ2Y7QUFHNUIsTUFBTU0sT0FBTztRQUFDLEVBQUVDLE1BQU0sRUFBRTs7SUFDdEIsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR0Q7SUFDbEIsTUFBTSxDQUFDRSxNQUFNQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkNELGdEQUFTQSxDQUFDO1FBQ1IsSUFBSUssVUFBVSxjQUFjO1lBQzFCTiwwREFBVUEsR0FBR1MsSUFBSSxDQUFDLENBQUNDO2dCQUFXRixRQUFRRTtZQUFPO1FBQy9DLE9BQ0s7WUFDSFgseURBQVNBLEdBQUdVLElBQUksQ0FBQyxDQUFDQztnQkFDaEJBLEtBQUtDLEdBQUcsQ0FBQyxDQUFDQztvQkFDUkEsS0FBS0MsTUFBTSxDQUFDRixHQUFHLENBQUMsQ0FBQ0M7d0JBQ2ZkLDBEQUFLQSxDQUFDYyxLQUFLRSxJQUFJLEVBQUVMLElBQUksQ0FBQyxDQUFDQzs0QkFDckJFLEtBQUtFLElBQUksR0FBQ0osS0FBS0ssUUFBUTt3QkFDekI7b0JBQ0Y7Z0JBQ0Y7Z0JBQ0FQLFFBQVFFO1lBQ1Q7UUFDSDtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFOzswQkFDRSw4REFBQ007Z0JBQUVDLFdBQVU7O29CQUE0QjtvQkFBYVg7Ozs7Ozs7MEJBQ3RELDhEQUFDVTtnQkFBRUMsV0FBVTswQkFBNEQsNEVBQUNkLGlEQUFJQTtvQkFBQ2UsTUFBSzs4QkFBSTs7Ozs7Ozs7Ozs7MEJBQ3hGLDhEQUFDQztnQkFBSUYsV0FBVTswQkFFWFgsVUFBUSw2QkFBZSw4REFBQ2M7b0JBQU1ILFdBQVU7O3NDQUN0Qyw4REFBQ0k7NEJBQU1KLFdBQVU7c0NBQ2YsNEVBQUNLOztrREFDQyw4REFBQ0M7d0NBQUdDLE9BQU07d0NBQU1QLFdBQVU7a0RBQXdCOzs7Ozs7a0RBR2xELDhEQUFDTTt3Q0FBR0MsT0FBTTt3Q0FBTVAsV0FBVTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQUtyRFEsUUFBUUMsR0FBRyxDQUFDbkI7c0NBQ2IsOERBQUNvQjtzQ0FFR3BCLE9BQU9xQixNQUFNQyxPQUFPLENBQUN0QixRQUFRQSxLQUFLSSxHQUFHLENBQUMsQ0FBQ0MsTUFBTWtCO2dDQUMzQyxxQkFDRSw4REFBQ1I7b0NBQUdMLFdBQVU7O3NEQUNaLDhEQUFDYzs0Q0FBR1AsT0FBTTs0Q0FBTVAsV0FBVTtzREFDeEIsNEVBQUNEOzBEQUFHSixLQUFLRyxRQUFROzs7Ozs7Ozs7OztzREFFbkIsOERBQUNnQjs0Q0FBR1AsT0FBTTs0Q0FBTVAsV0FBVTs0Q0FBK0NlLHlCQUF5QjtnREFDaEdDLFFBQVFyQixLQUFLc0IsVUFBVSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDLE9BQU87NENBQzVDOzs7Ozs7O21DQU51Rkw7Ozs7OzRCQVU3RixtQkFBSyw4REFBQ2Q7MENBQUU7Ozs7OzBEQUFjLDhEQUFDQTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHcEIsOERBQUNJO29CQUFNSCxXQUFVOztzQ0FDMUIsOERBQUNJOzRCQUFNSixXQUFVO3NDQUNmLDRFQUFDSzs7a0RBQ0MsOERBQUNDO3dDQUFHQyxPQUFNO3dDQUFNUCxXQUFVO2tEQUF3Qjs7Ozs7O2tEQUdsRCw4REFBQ007d0NBQUdDLE9BQU07d0NBQU1QLFdBQVU7a0RBQXdCOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FjdEQsOERBQUNVO3NDQUFPcEIsS0FBS0ksR0FBRyxDQUFDLENBQUNDLE1BQU1rQjtnQ0FDdEIscUJBQ0UsOERBQUNSO29DQUFHTCxXQUFVOztzREFDWiw4REFBQ2M7NENBQUdQLE9BQU07NENBQU1QLFdBQVU7c0RBQ3hCLDRFQUFDRDswREFBR0osS0FBS3dCLElBQUk7Ozs7Ozs7Ozs7O3NEQUVmLDhEQUFDTDs0Q0FBR1AsT0FBTTs0Q0FBTVAsV0FBVTs7OERBQ3hCLDhEQUFDRTtvREFBSUYsV0FBVTs7c0VBQ2YsOERBQUNEO3NFQUFFOzs7Ozs7c0VBQ0gsOERBQUNBO3NFQUFFOzs7Ozs7c0VBQ0gsOERBQUNBO3NFQUFFOzs7Ozs7Ozs7Ozs7Z0RBRUZTLFFBQVFDLEdBQUcsQ0FBQ2QsS0FBS0MsTUFBTSxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtnREFFOUJGLEtBQUtDLE1BQU0sQ0FBQ0YsR0FBRyxDQUFDLENBQUNDLE1BQUtrQjtvREFDcEIscUJBQVEsOERBQUNYO3dEQUFJRixXQUFVOzswRUFDckIsOERBQUNEOzBFQUFHSixLQUFLRSxJQUFJOzs7Ozs7MEVBQ2IsOERBQUNFOzBFQUFHSixLQUFLeUIsR0FBRzs7Ozs7OzBFQUNaLDhEQUFDckI7MEVBQUdKLEtBQUswQixVQUFVOzs7Ozs7O3VEQUhrRFI7Ozs7O2dEQU16RTs7Ozs7Ozs7bUNBbkJtRkE7Ozs7OzRCQXlCN0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQTVHTTFCO0FBOEdOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9nZXQvW3F1ZXJ5XS9wYWdlLmpzPzE1YzciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IEdldFBkLCB7IEdldE9yZGVycywgR2V0U3RvY2tQZCB9IGZyb20gXCJAL2FjdGlvbnMvR2V0UGRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5cclxuY29uc3QgcGFnZSA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IFtEYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXJ5ID09PSBcIk91dE9mU3RvY2tcIikge1xyXG4gICAgICBHZXRTdG9ja1BkKCkudGhlbigocmVzcCkgPT4geyBzZXREYXRhKHJlc3ApOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBHZXRPcmRlcnMoKS50aGVuKChyZXNwKSA9PiB7IFxyXG4gICAgICAgIHJlc3AubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgaXRlbS5vcmRlcnMubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICBHZXRQZChpdGVtLmJvb2spLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgICAgaXRlbS5ib29rPXJlc3AuQm9va05hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0RGF0YShyZXNwKVxyXG4gICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtM3hsIG10LTRcIj5Cb29rTWVyY2UgLSB7cXVlcnl9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJteC1hdXRvIHctZml0IG10LTEwIG1iLTEyIHVuZGVybGluZSBob3Zlcjp0ZXh0LWluZGlnby04MDBcIj48TGluayBocmVmPVwiL1wiPkhvbWU8L0xpbms+PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byBteC0xMCBtdC0xMiBzaGFkb3ctbWQgcm91bmRlZC1sZyBtYXgtaC1bMzhyZW1dIG1iLTIwXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcXVlcnk9PT1cIk91dE9mU3RvY2tcIiA/IDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgcnRsOnRleHQtcmlnaHQgdGV4dC1ncmF5LTQwMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgYmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgQm9vayBOYW1lXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIE91dCBPZiBTdG9ja1xyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICB7Y29uc29sZS5sb2coRGF0YSl9XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBEYXRhID8gQXJyYXkuaXNBcnJheShEYXRhKSA/IERhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItci0wIGJvcmRlci10LTAgYm9yZGVyLWdyYXktNjAwXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItdC0wIGJvcmRlci1iLTAgIGJvcmRlci1yLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLkJvb2tOYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZVwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogaXRlbS5PdXRPZlN0b2NrWzBdLnJlcGxhY2UoL1xcbi9nLCAnPGJyIC8+JylcclxuICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KSA6IDxwPk5vIGRhdGE8L3A+IDogPHA+Tm8gZGF0YTwvcD5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPiA6IDx0YWJsZSBjbGFzc05hbWU9XCJ3LWZ1bGwgdGV4dC1zbSB0ZXh0LWxlZnQgcnRsOnRleHQtcmlnaHQgdGV4dC1ncmF5LTQwMCBoLWZ1bGxcIj5cclxuICAgICAgICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTQwMCB1cHBlcmNhc2UgYmctZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgVXNlclxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPcmRlcnNcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICB7LyogPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJvb2sgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBRdHlcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgRGVsIEFkZHJlc3NcclxuICAgICAgICAgICAgICAgIDwvdGg+ICovfVxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT57RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJiZy1ncmF5LTgwMCBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItci0wIGJvcmRlci10LTAgYm9yZGVyLWdyYXktNjAwXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItbC0wIGJvcmRlci10LTAgYm9yZGVyLWItMCAgYm9yZGVyLXItZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS51c2VyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkIHNjb3BlPVwicm93XCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS00IGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1sLTAgYm9yZGVyLXQtMCBib3JkZXItYi0wICBib3JkZXItci1ncmF5LTYwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIG1iLTMgYm9yZGVyIGJvcmRlci10LTAgYm9yZGVyLWwtMCBib3JkZXItci0wIGJvcmRlci13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk5hbWUgb2YgQm9vayBPcmRlcmVkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlF0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5EZWxpdmVyeSBBZGRyZXNzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb25zb2xlLmxvZyhpdGVtLm9yZGVyc1swXS5ib29rKX1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLm9yZGVycy5tYXAoKGl0ZW0saW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uYm9va308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ucXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5EZWxBZGRyZXNzfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgIH0pfTwvdGJvZHk+XHJcbiAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiR2V0UGQiLCJHZXRPcmRlcnMiLCJHZXRTdG9ja1BkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMaW5rIiwicGFnZSIsInBhcmFtcyIsInF1ZXJ5IiwiRGF0YSIsInNldERhdGEiLCJ0aGVuIiwicmVzcCIsIm1hcCIsIml0ZW0iLCJvcmRlcnMiLCJib29rIiwiQm9va05hbWUiLCJwIiwiY2xhc3NOYW1lIiwiaHJlZiIsImRpdiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwic2NvcGUiLCJjb25zb2xlIiwibG9nIiwidGJvZHkiLCJBcnJheSIsImlzQXJyYXkiLCJpbmRleCIsInRkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJPdXRPZlN0b2NrIiwicmVwbGFjZSIsInVzZXIiLCJxdHkiLCJEZWxBZGRyZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/get/[query]/page.js\n"));

/***/ })

});