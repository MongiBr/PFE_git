webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./graphql/query/customer.query.ts":
/*!*****************************************!*\
  !*** ./graphql/query/customer.query.ts ***!
  \*****************************************/
/*! exports provided: GET_LOGGED_IN_CUSTOMER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LOGGED_IN_CUSTOMER", function() { return GET_LOGGED_IN_CUSTOMER; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query getUser($id: String = \"1\") {\n    me(id: $id) {\n      id\n      name\n      email\n      addresses {\n        id\n        type\n        name\n        info\n      }\n      contact {\n        id\n        type\n        number\n      }\n      card {\n        id\n        type\n        cardType\n        name\n        lastFourDigit\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_LOGGED_IN_CUSTOMER = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());

/***/ })

})
//# sourceMappingURL=checkout.js.cb66bd7bf9e5ae9d95c6.hot-update.js.map