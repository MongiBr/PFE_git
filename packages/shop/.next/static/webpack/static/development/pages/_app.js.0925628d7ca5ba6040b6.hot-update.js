webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./containers/LayoutContainer/AppLayout.tsx":
/*!**************************************************!*\
  !*** ./containers/LayoutContainer/AppLayout.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "../../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "../../node_modules/react-stickynode/index.js");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header/Header */ "./containers/LayoutContainer/Header/Header.tsx");
/* harmony import */ var contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! contexts/app/app.provider */ "./contexts/app/app.provider.ts");
/* harmony import */ var containers_constants_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! containers/constants/navigation */ "./containers/constants/navigation.ts");
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/LayoutContainer/AppLayout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MobileHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(0)]).then(__webpack_require__.bind(null, /*! ./Header/MobileHeader */ "./containers/LayoutContainer/Header/MobileHeader.tsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Header/MobileHeader */ "./containers/LayoutContainer/Header/MobileHeader.tsx")];
    },
    modules: ["./Header/MobileHeader"]
  }
});
var LayoutWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "AppLayout__LayoutWrapper",
  componentId: "sc-19rvxvw-0"
})(["background-color:#f7f7f7;.reuseModalHolder{padding:0;overflow:auto;border-radius:3px 3px 0 0;border:0;}"]);

var Layout = function Layout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$deviceType = _ref.deviceType,
      mobile = _ref$deviceType.mobile,
      tablet = _ref$deviceType.tablet,
      desktop = _ref$deviceType.desktop,
      token = _ref.token;
  var isSticky = Object(contexts_app_app_provider__WEBPACK_IMPORTED_MODULE_6__["useStickyState"])("isSticky");

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      pathname = _useRouter.pathname;

  var isHomePage = pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_7__["HOME_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_7__["GROCERY_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_7__["Food_PAGE"];
  return __jsx(LayoutWrapper, {
    className: "layoutWrapper ".concat(className),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, (mobile || tablet) && __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: isSticky,
    innerZ: 1001,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx(MobileHeader, {
    className: "".concat(isSticky ? "sticky" : "unSticky", " ").concat(isHomePage ? "home" : ""),
    pathname: pathname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  })), desktop && __jsx(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    enabled: isSticky,
    innerZ: 1001,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(MobileHeader, {
    className: "".concat(isSticky ? "sticky" : "unSticky", " ").concat(isHomePage ? "home" : "", " desktop"),
    pathname: pathname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }), __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "".concat(isSticky ? "sticky" : "unSticky", " ").concat(isHomePage ? "home" : ""),
    token: token,
    pathname: pathname,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  })), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=_app.js.0925628d7ca5ba6040b6.hot-update.js.map