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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _actions_GetPd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/actions/GetPd */ \"(app-pages-browser)/./actions/GetPd.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = (param)=>{\n    let { params } = param;\n    _s();\n    const { query } = params;\n    const [Data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (query === \"OutOfStock\") {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetStockPd)().then((resp)=>{\n                setData(resp);\n            });\n        } else {\n            (0,_actions_GetPd__WEBPACK_IMPORTED_MODULE_1__.GetOrders)().then((resp)=>{\n                setData(resp);\n            });\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-3xl mt-4\",\n                children: [\n                    \"BookMerce - \",\n                    query\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mx-auto w-fit mt-10 mb-12 underline hover:text-indigo-800\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 21,\n                    columnNumber: 80\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-x-auto mx-10 mt-12 shadow-md rounded-lg max-h-[38rem] mb-20\",\n                children: query.OutOfStock ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Book Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Out Of Stock\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 30,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 26,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data ? Array.isArray(Data) ? Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: item.BookName\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 23\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                            scope: \"row\",\n                                            className: \"text-center px-6 py-4 font-medium text-white\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: item.OutOfStock[0].replace(/\\n/g, \"<br />\")\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, undefined);\n                            }) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 49,\n                                columnNumber: 22\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"No data\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 49,\n                                columnNumber: 39\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 35,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 30\n                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                    className: \"w-full text-sm text-left rtl:text-right text-gray-400 h-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                            className: \"text-xs text-gray-400 uppercase bg-gray-700\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Book Name\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Qty\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                        scope: \"col\",\n                                        className: \"text-center px-6 py-3\",\n                                        children: \"Del Address\"\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                            children: Data.map((item, index)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                    className: \"bg-gray-800 border border-l-0 border-r-0 border-t-0 border-gray-600\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        scope: \"row\",\n                                        className: \"text-center px-6 py-4 font-medium text-white border border-l-0 border-t-0 border-b-0  border-r-gray-600\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: item.BookName\n                                        }, void 0, false, {\n                                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, index, false, {\n                                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 17\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                    lineNumber: 52,\n                    columnNumber: 22\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\Projects\\\\NEXTjsProjects\\\\Projects\\\\ecommerce\\\\Admin\\\\app\\\\get\\\\[query]\\\\page.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(page, \"xsxb+4jHutJ15CYluGxm3ovL3zM=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nZXQvW3F1ZXJ5XS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3VEO0FBQ1o7QUFDZjtBQUc1QixNQUFNSyxPQUFPO1FBQUMsRUFBRUMsTUFBTSxFQUFFOztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRSxHQUFHRDtJQUNsQixNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuQ0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJSyxVQUFVLGNBQWM7WUFDMUJOLDBEQUFVQSxHQUFHUyxJQUFJLENBQUMsQ0FBQ0M7Z0JBQVdGLFFBQVFFO1lBQU87UUFDL0MsT0FDSztZQUNIWCx5REFBU0EsR0FBR1UsSUFBSSxDQUFDLENBQUNDO2dCQUFXRixRQUFRRTtZQUFPO1FBQzlDO0lBQ0YsR0FBRyxFQUFFO0lBQ0wscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBRUMsV0FBVTs7b0JBQTRCO29CQUFhTjs7Ozs7OzswQkFDdEQsOERBQUNLO2dCQUFFQyxXQUFVOzBCQUE0RCw0RUFBQ1QsaURBQUlBO29CQUFDVSxNQUFLOzhCQUFJOzs7Ozs7Ozs7OzswQkFDeEYsOERBQUNDO2dCQUFJRixXQUFVOzBCQUVYTixNQUFNUyxVQUFVLGlCQUFHLDhEQUFDQztvQkFBTUosV0FBVTs7c0NBQ2xDLDhEQUFDSzs0QkFBTUwsV0FBVTtzQ0FDZiw0RUFBQ007O2tEQUNDLDhEQUFDQzt3Q0FBR0MsT0FBTTt3Q0FBTVIsV0FBVTtrREFBd0I7Ozs7OztrREFHbEQsOERBQUNPO3dDQUFHQyxPQUFNO3dDQUFNUixXQUFVO2tEQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBS3RELDhEQUFDUztzQ0FFR2QsT0FBT2UsTUFBTUMsT0FBTyxDQUFDaEIsUUFBUUEsS0FBS2lCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQztnQ0FDM0MscUJBQ0UsOERBQUNSO29DQUFHTixXQUFVOztzREFDWiw4REFBQ2U7NENBQUdQLE9BQU07NENBQU1SLFdBQVU7c0RBQ3hCLDRFQUFDRDswREFBR2MsS0FBS0csUUFBUTs7Ozs7Ozs7Ozs7c0RBRW5CLDhEQUFDRDs0Q0FBR1AsT0FBTTs0Q0FBTVIsV0FBVTs0Q0FBK0NpQix5QkFBeUI7Z0RBQ2hHQyxRQUFRTCxLQUFLVixVQUFVLENBQUMsRUFBRSxDQUFDZ0IsT0FBTyxDQUFDLE9BQU87NENBQzVDOzs7Ozs7O21DQU51Rkw7Ozs7OzRCQVU3RixtQkFBSyw4REFBQ2Y7MENBQUU7Ozs7OzBEQUFjLDhEQUFDQTswQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FHcEIsOERBQUNLO29CQUFNSixXQUFVOztzQ0FDMUIsOERBQUNLOzRCQUFNTCxXQUFVO3NDQUNmLDRFQUFDTTs7a0RBQ0MsOERBQUNDO3dDQUFHQyxPQUFNO3dDQUFNUixXQUFVO2tEQUF3Qjs7Ozs7O2tEQUdsRCw4REFBQ087d0NBQUdDLE9BQU07d0NBQU1SLFdBQVU7a0RBQXdCOzs7Ozs7a0RBR2xELDhEQUFDTzt3Q0FBR0MsT0FBTTt3Q0FBTVIsV0FBVTtrREFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUt0RCw4REFBQ1M7c0NBQU9kLEtBQUtpQixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7Z0NBQ3RCLHFCQUVFLDhEQUFDUjtvQ0FBR04sV0FBVTs4Q0FDWiw0RUFBQ2U7d0NBQUdQLE9BQU07d0NBQU1SLFdBQVU7a0RBQ3hCLDRFQUFDRDtzREFBR2MsS0FBS0csUUFBUTs7Ozs7Ozs7Ozs7bUNBRm9FRjs7Ozs7NEJBTzdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7R0EzRU10QjtBQTZFTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2V0L1txdWVyeV0vcGFnZS5qcz8xNWM3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IEdldE9yZGVycywgR2V0U3RvY2tQZCB9IGZyb20gXCJAL2FjdGlvbnMvR2V0UGRcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG5cclxuY29uc3QgcGFnZSA9ICh7IHBhcmFtcyB9KSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeSB9ID0gcGFyYW1zO1xyXG4gIGNvbnN0IFtEYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXJ5ID09PSBcIk91dE9mU3RvY2tcIikge1xyXG4gICAgICBHZXRTdG9ja1BkKCkudGhlbigocmVzcCkgPT4geyBzZXREYXRhKHJlc3ApOyB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBHZXRPcmRlcnMoKS50aGVuKChyZXNwKSA9PiB7IHNldERhdGEocmVzcCk7IH0pO1xyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LTN4bCBtdC00XCI+Qm9va01lcmNlIC0ge3F1ZXJ5fTwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibXgtYXV0byB3LWZpdCBtdC0xMCBtYi0xMiB1bmRlcmxpbmUgaG92ZXI6dGV4dC1pbmRpZ28tODAwXCI+PExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPjwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWF1dG8gbXgtMTAgbXQtMTIgc2hhZG93LW1kIHJvdW5kZWQtbGcgbWF4LWgtWzM4cmVtXSBtYi0yMFwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHF1ZXJ5Lk91dE9mU3RvY2sgPyA8dGFibGUgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtc20gdGV4dC1sZWZ0IHJ0bDp0ZXh0LXJpZ2h0IHRleHQtZ3JheS00MDAgaC1mdWxsXCI+XHJcbiAgICAgICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS00MDAgdXBwZXJjYXNlIGJnLWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIEJvb2sgTmFtZVxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBPdXQgT2YgU3RvY2tcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIERhdGEgPyBBcnJheS5pc0FycmF5KERhdGEpID8gRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGJvcmRlciBib3JkZXItbC0wIGJvcmRlci1yLTAgYm9yZGVyLXQtMCBib3JkZXItZ3JheS02MDBcIiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItbC0wIGJvcmRlci10LTAgYm9yZGVyLWItMCAgYm9yZGVyLXItZ3JheS02MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uQm9va05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzY29wZT1cInJvd1wiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktNCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBpdGVtLk91dE9mU3RvY2tbMF0ucmVwbGFjZSgvXFxuL2csICc8YnIgLz4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pIDogPHA+Tm8gZGF0YTwvcD4gOiA8cD5ObyBkYXRhPC9wPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgIDwvdGFibGU+IDogPHRhYmxlIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LXNtIHRleHQtbGVmdCBydGw6dGV4dC1yaWdodCB0ZXh0LWdyYXktNDAwIGgtZnVsbFwiPlxyXG4gICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNDAwIHVwcGVyY2FzZSBiZy1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB4LTYgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICBCb29rIE5hbWVcclxuICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgUXR5XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIERlbCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT57RGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctZ3JheS04MDAgYm9yZGVyIGJvcmRlci1sLTAgYm9yZGVyLXItMCBib3JkZXItdC0wIGJvcmRlci1ncmF5LTYwMFwiIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8dGQgc2NvcGU9XCJyb3dcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTQgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWwtMCBib3JkZXItdC0wIGJvcmRlci1iLTAgIGJvcmRlci1yLWdyYXktNjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0uQm9va05hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICB9KX08L3Rib2R5PlxyXG4gICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYWdlIl0sIm5hbWVzIjpbIkdldE9yZGVycyIsIkdldFN0b2NrUGQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJwYWdlIiwicGFyYW1zIiwicXVlcnkiLCJEYXRhIiwic2V0RGF0YSIsInRoZW4iLCJyZXNwIiwicCIsImNsYXNzTmFtZSIsImhyZWYiLCJkaXYiLCJPdXRPZlN0b2NrIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJzY29wZSIsInRib2R5IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiaXRlbSIsImluZGV4IiwidGQiLCJCb29rTmFtZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwicmVwbGFjZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/get/[query]/page.js\n"));

/***/ })

});