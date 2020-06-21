webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./graphql/mutation/contact.ts":
/*!*************************************!*\
  !*** ./graphql/mutation/contact.ts ***!
  \*************************************/
/*! exports provided: UPDATE_CONTACT, DELETE_CONTACT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_CONTACT", function() { return UPDATE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_CONTACT", function() { return DELETE_CONTACT; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation($contactId: String!) {\n    deleteContact(contactId: $contactId) {\n      id\n      name\n      contacts {\n        id\n        type\n        number\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation($contactInput: String!) {\n    updateContact(contactInput: $contactInput) {\n      id\n      name\n      contacts {\n        id\n        type\n        number\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var UPDATE_CONTACT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var DELETE_CONTACT = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());

/***/ })

})
//# sourceMappingURL=checkout.js.05ae19db19eb36e63e29.hot-update.js.map