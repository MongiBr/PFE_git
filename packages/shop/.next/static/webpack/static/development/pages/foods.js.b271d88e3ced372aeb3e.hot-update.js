webpackHotUpdate("static/development/pages/foods.js",{

/***/ "./pages/foods.tsx":
/*!*************************!*\
  !*** ./pages/foods.tsx ***!
  \*************************/
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
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var helper_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! helper/apollo */ "./helper/apollo.js");
/* harmony import */ var components_StoreNav_StoreNav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/StoreNav/StoreNav */ "./components/StoreNav/StoreNav.tsx");
/* harmony import */ var containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/Sidebar/Sidebar */ "./containers/Sidebar/Sidebar.tsx");
/* harmony import */ var containers_ServiceProvidersList_ServiceProvidersList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! containers/ServiceProvidersList/ServiceProvidersList */ "./containers/ServiceProvidersList/ServiceProvidersList.tsx");
/* harmony import */ var containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! containers/Cart/CartPopUp */ "./containers/Cart/CartPopUp.tsx");
/* harmony import */ var styled_pages_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled/pages.style */ "./styled/pages.style.tsx");
/* harmony import */ var containers_constants_storeType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! containers/constants/storeType */ "./containers/constants/storeType.ts");
var _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/pages/foods.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var PAGE_TYPE = "grocery";

function MakeupPage(_ref) {
  var deviceType = _ref.deviceType;

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      query = _useRouter.query;

  var targetRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
    if ((query.text || query.category) && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop - 110,
        behavior: "smooth"
      });
    }
  }, [query]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "CharioFood")), __jsx(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, deviceType.desktop ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_9__["MobileCarouselDropdown"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(components_StoreNav_StoreNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: containers_constants_storeType__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_9__["MainContentArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_9__["SidebarSection"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  })), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_9__["ContentSection"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("div", {
    ref: targetRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx(containers_ServiceProvidersList_ServiceProvidersList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }))))) : __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_9__["MainContentArea"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(components_StoreNav_StoreNav__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: containers_constants_storeType__WEBPACK_IMPORTED_MODULE_10__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_9__["ContentSection"], {
    style: {
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx("div", {
    ref: targetRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }, __jsx(containers_ServiceProvidersList_ServiceProvidersList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  })))), __jsx(containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_8__["default"], {
    deviceType: deviceType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(helper_apollo__WEBPACK_IMPORTED_MODULE_4__["withApollo"])(MakeupPage));

/***/ })

})
//# sourceMappingURL=foods.js.b271d88e3ced372aeb3e.hot-update.js.map