webpackHotUpdate("static/development/pages/serviceProvider/[id].js",{

/***/ "./graphql/query/serviceProvider.query.ts":
/*!************************************************!*\
  !*** ./graphql/query/serviceProvider.query.ts ***!
  \************************************************/
/*! exports provided: GET_SERVICE_PROVIDER, GET_SERVICE_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SERVICE_PROVIDER", function() { return GET_SERVICE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SERVICE_PROVIDERS", function() { return GET_SERVICE_PROVIDERS; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getServiceProviders(\n    $type: String\n    $text: String\n    $category: String\n    $offset: Int\n    $limit: Int\n  ) {\n    serviceProviders(\n      type: $type\n      text: $text\n      category: $category\n      offset: $offset\n      limit: $limit\n    ) {\n      items {\n        name\n      }\n      hasMore\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getServiceProvider($id: ID!) {\n    serviceProvider(id: $id) {\n      id\n      name\n      image\n      email\n      products {\n        slug\n      }\n      type\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_SERVICE_PROVIDER = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var GET_SERVICE_PROVIDERS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());

/***/ })

})
//# sourceMappingURL=[id].js.9174861d1b1115e1fa33.hot-update.js.map