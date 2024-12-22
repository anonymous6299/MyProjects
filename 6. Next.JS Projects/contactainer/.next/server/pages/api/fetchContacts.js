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
exports.id = "pages/api/fetchContacts";
exports.ids = ["pages/api/fetchContacts"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FfetchContacts&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CfetchContacts.js&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FfetchContacts&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CfetchContacts.js&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_fetchContacts_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\fetchContacts.js */ \"(api)/./pages/api/fetchContacts.js\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_fetchContacts_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_fetchContacts_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/fetchContacts\",\n        pathname: \"/api/fetchContacts\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_fetchContacts_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmZldGNoQ29udGFjdHMmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q2ZldGNoQ29udGFjdHMuanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDMkQ7QUFDM0Q7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHdEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx3REFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250YWN0YWluZXIvP2Q1YjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxmZXRjaENvbnRhY3RzLmpzXCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZmV0Y2hDb250YWN0c1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2ZldGNoQ29udGFjdHNcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FfetchContacts&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CfetchContacts.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./db/Connect.js":
/*!***********************!*\
  !*** ./db/Connect.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst ConnectDB = async ()=>{\n    await mongoose.connect(\"mongodb://localhost:27017/Contactainer\");\n    console.log(\"Connected to MongoDB\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9Db25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUd6QixNQUFNQyxZQUFZO0lBQ2QsTUFBTUYsU0FBU0csT0FBTyxDQUFDO0lBQ3ZCQyxRQUFRQyxHQUFHLENBQUM7QUFDaEI7QUFDQSxpRUFBZUgsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3RhaW5lci8uL2RiL0Nvbm5lY3QuanM/OTVmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XHJcblxyXG5cclxuY29uc3QgQ29ubmVjdERCID0gYXN5bmMoKSA9PiB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L0NvbnRhY3RhaW5lcicpO1xyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENvbm5lY3REQiJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJDb25uZWN0REIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./db/Connect.js\n");

/***/ }),

/***/ "(api)/./db/Models/Contact.js":
/*!******************************!*\
  !*** ./db/Models/Contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst contactSchema = new Schema({\n    Cname: String,\n    phoneNo: String,\n    SphoneNo: String\n}, {\n    timestamps: true\n});\n(mongoose__WEBPACK_IMPORTED_MODULE_0___default().models) = {};\nconst Contact = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"contacts\", contactSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9Nb2RlbHMvQ29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFDaEMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0QsaURBQVFBO0FBRTNCLE1BQU1FLGdCQUFnQixJQUFJRCxPQUFPO0lBQy9CRSxPQUFPQztJQUNQQyxTQUFTRDtJQUNURSxVQUFVRjtBQUNaLEdBQUc7SUFBQ0csWUFBWTtBQUFJO0FBRXBCUCx3REFBZSxHQUFHLENBQUM7QUFDbkIsTUFBTVMsVUFBVVQscURBQWMsQ0FBQyxZQUFZRTtBQUMzQyxpRUFBZU8sT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3RhaW5lci8uL2RiL01vZGVscy9Db250YWN0LmpzPzIzN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuY29uc3QgeyBTY2hlbWEgfSA9IG1vbmdvb3NlO1xyXG5cclxuY29uc3QgY29udGFjdFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xyXG4gIENuYW1lOiBTdHJpbmcsXHJcbiAgcGhvbmVObzogU3RyaW5nLFxyXG4gIFNwaG9uZU5vOiBTdHJpbmcsXHJcbn0sIHt0aW1lc3RhbXBzOiB0cnVlfSk7XHJcblxyXG5tb25nb29zZS5tb2RlbHMgPSB7fVxyXG5jb25zdCBDb250YWN0ID0gbW9uZ29vc2UubW9kZWwoJ2NvbnRhY3RzJywgY29udGFjdFNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3QiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJjb250YWN0U2NoZW1hIiwiQ25hbWUiLCJTdHJpbmciLCJwaG9uZU5vIiwiU3Bob25lTm8iLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiQ29udGFjdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/Models/Contact.js\n");

/***/ }),

/***/ "(api)/./pages/api/fetchContacts.js":
/*!************************************!*\
  !*** ./pages/api/fetchContacts.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_Connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/Connect */ \"(api)/./db/Connect.js\");\n/* harmony import */ var _db_Models_Contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/Models/Contact */ \"(api)/./db/Models/Contact.js\");\n\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            await (0,_db_Connect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            const data = await _db_Models_Contact__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({});\n            if (data.length !== 0) {\n                res.status(200).json({\n                    success: true,\n                    data: data\n                });\n            } else {\n                res.status(200).json({\n                    success: true,\n                    data: false,\n                    message: \"You have not added any contacts yet.\"\n                });\n            }\n        } catch (error) {\n            res.status(500).json({\n                success: false,\n                IntServerError: true,\n                message: \"Internal Server Error \"\n            });\n        }\n    } else {\n        res.status(405).json({\n            success: false,\n            reqError: true,\n            message: \"please give a GET request to continue\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmV0Y2hDb250YWN0cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFDSztBQUczQixlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDMUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDdEIsSUFBSTtZQUNBLE1BQU1MLHVEQUFTQTtZQUNmLE1BQU1NLE9BQU8sTUFBTUwsK0RBQVksQ0FBQyxDQUFDO1lBQ2pDLElBQUlLLEtBQUtFLE1BQU0sS0FBRyxHQUFHO2dCQUNqQkosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUTtvQkFBTUwsTUFBS0E7Z0JBQUs7WUFDbkQsT0FDSztnQkFDREYsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUTtvQkFBTUwsTUFBSztvQkFBT00sU0FBUTtnQkFBdUM7WUFDcEc7UUFDSixFQUFFLE9BQU9DLE9BQU87WUFDWlQsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDakJDLFNBQVE7Z0JBQ1JHLGdCQUFlO2dCQUNmRixTQUFRO1lBQ1o7UUFDSjtJQUNKLE9BQU87UUFDSFIsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsU0FBUTtZQUNSSSxVQUFTO1lBQ1RILFNBQVE7UUFBdUM7SUFDdkQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRhY3RhaW5lci8uL3BhZ2VzL2FwaS9mZXRjaENvbnRhY3RzLmpzP2JjMGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbm5lY3REQiBmcm9tIFwiQC9kYi9Db25uZWN0XCI7XHJcbmltcG9ydCBDb250YWN0IGZyb20gXCJAL2RiL01vZGVscy9Db250YWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgQ29ubmVjdERCKClcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IENvbnRhY3QuZmluZCh7fSlcclxuICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoIT09MCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBzdWNjZXNzOnRydWUsIGRhdGE6ZGF0YSB9KVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgc3VjY2Vzczp0cnVlLCBkYXRhOmZhbHNlLCBtZXNzYWdlOlwiWW91IGhhdmUgbm90IGFkZGVkIGFueSBjb250YWN0cyB5ZXQuXCIgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBJbnRTZXJ2ZXJFcnJvcjp0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcIkludGVybmFsIFNlcnZlciBFcnJvciBcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oe1xyXG4gICAgICAgICAgICBzdWNjZXNzOmZhbHNlLFxyXG4gICAgICAgICAgICByZXFFcnJvcjp0cnVlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOlwicGxlYXNlIGdpdmUgYSBHRVQgcmVxdWVzdCB0byBjb250aW51ZVwifSlcclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkNvbm5lY3REQiIsIkNvbnRhY3QiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImZpbmQiLCJsZW5ndGgiLCJzdGF0dXMiLCJqc29uIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJlcnJvciIsIkludFNlcnZlckVycm9yIiwicmVxRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/fetchContacts.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FfetchContacts&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CfetchContacts.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();