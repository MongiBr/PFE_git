webpackHotUpdate("static/development/pages/serviceProvider/[id].js",{

/***/ "./pages/serviceProvider/[id].tsx":
/*!****************************************!*\
  !*** ./pages/serviceProvider/[id].tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "../../node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var containers_MagasinPage_MagasinPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/MagasinPage/MagasinPage */ "./containers/MagasinPage/MagasinPage.tsx");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var styled_product_single_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled/product-single.style */ "./styled/product-single.style.tsx");
/* harmony import */ var containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! containers/Cart/CartPopUp */ "./containers/Cart/CartPopUp.tsx");
/* harmony import */ var helper_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! helper/apollo */ "./helper/apollo.js");
/* harmony import */ var graphql_query_serviceProvider_query__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql/query/serviceProvider.query */ "./graphql/query/serviceProvider.query.ts");
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/pages/serviceProvider/[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var MagasinPages = function MagasinPages(_ref) {
  var deviceType = _ref.deviceType;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      id = _useRouter.query.id;

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(graphql_query_serviceProvider_query__WEBPACK_IMPORTED_MODULE_9__["GET_SERVICE_PROVIDER"], {
    variables: {
      id: id
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading;

  console.log(data);

  if (loading) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 12
      }
    }, "loading...");
  }

  if (error) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Error: ", error.message);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, data.serviceProvider.name, " - Chario")), __jsx(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(styled_product_single_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(styled_product_single_style__WEBPACK_IMPORTED_MODULE_6__["ProductSingleContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(containers_MagasinPage_MagasinPage__WEBPACK_IMPORTED_MODULE_4__["default"], {
    magasin: data.serviceProvider,
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }), __jsx(containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(helper_apollo__WEBPACK_IMPORTED_MODULE_8__["withApollo"])(MagasinPages));

/***/ })

})
//# sourceMappingURL=[id].js.99601a1c74f6c9974ffa.hot-update.js.map