exports.ids = [0];
exports.modules = {

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!***************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/rc-drawer/assets/index.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Drawer/Drawer.tsx":
/*!**************************************!*\
  !*** ./components/Drawer/Drawer.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/components/Drawer/Drawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Drawer = (_ref) => {
  let {
    className,
    children,
    closeButton,
    closeButtonStyle,
    drawerHandler,
    toggleHandler,
    open,
    width,
    placement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open", "width", "placement"]);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(rc_drawer__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    open: open,
    onClose: toggleHandler,
    className: `drawer ${className ? className : ''}`.trim(),
    width: width,
    placement: placement,
    handler: false,
    level: null,
    duration: ".4s"
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), closeButton && __jsx("div", {
    className: "drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, closeButton), children), __jsx("div", {
    className: "drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, drawerHandler));
};

Drawer.defaultProps = {
  width: '300px',
  placement: 'left'
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "./containers/LayoutContainer/Header/MobileDrawer.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileDrawer.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-custom-scrollbars */ "react-custom-scrollbars");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Drawer/Drawer */ "./components/Drawer/Drawer.tsx");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/NavLink/NavLink */ "./components/NavLink/NavLink.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/drawer/drawer.context */ "./contexts/drawer/drawer.context.tsx");
/* harmony import */ var contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! contexts/auth/auth.context */ "./contexts/auth/auth.context.tsx");
/* harmony import */ var _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../SignInOutForm/Form */ "./containers/SignInOutForm/Form.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! image/user.jpg */ "./image/user.jpg");
/* harmony import */ var image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(image_user_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! containers/constants/navigation */ "./containers/constants/navigation.ts");
var _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/LayoutContainer/Header/MobileDrawer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;















const DrawerMenuItems = [{
  id: 1,
  intlLabelId: "navLinkHome",
  label: "Home",
  href: "/"
}, {
  id: 2,
  intlLabelId: "navlinkCheckout",
  label: "Checkout",
  href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__["PROCEED_TO_CHECKOUT_PAGE"]
}, {
  id: 3,
  intlLabelId: "navlinkProfile",
  label: "Profile",
  href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__["PROFILE_PAGE"]
}, {
  id: 4,
  intlLabelId: "sidebarYourOrder",
  label: "Order",
  href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__["YOUR_ORDER"]
}, {
  id: 5,
  intlLabelId: "navlinkOrderReceived",
  label: "Received",
  href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__["ORDER_RECEIVED"]
}, {
  id: 6,
  intlLabelId: "navlinkHelp",
  label: "Help",
  href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__["HELP_PAGE"]
}, {
  id: 7,
  intlLabelId: "navlinkOffer",
  label: "Offer",
  href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_14__["OFFER_PAGE"]
}];

const MobileDrawer = () => {
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_drawer_drawer_context__WEBPACK_IMPORTED_MODULE_8__["DrawerContext"]);
  const {
    authState: {
      isAuthenticated
    },
    authDispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_auth_auth_context__WEBPACK_IMPORTED_MODULE_9__["AuthContext"]); // Toggle drawer

  const toggleHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    dispatch({
      type: "TOGGLE"
    });
  }, [dispatch]);

  const handleLogout = () => {
    if (false) {}
  };

  const resetSearch = () => {
    dispatch({
      type: "RESET"
    });
  };

  const signInOutForm = () => {
    dispatch({
      type: "TOGGLE"
    });
    authDispatch({
      type: "SIGNIN"
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_1__["openModal"])({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: true,
      component: _SignInOutForm_Form__WEBPACK_IMPORTED_MODULE_10__["default"],
      closeComponent: "",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 458,
        height: "auto"
      }
    });
  };

  return __jsx(components_Drawer_Drawer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: "316px",
    drawerHandler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["HamburgerIcon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 11
      }
    })),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    closeButton: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerClose"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }
    }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_7__["CloseIcon"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 5
    }
  }, __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
    autoHide: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerProfile"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, isAuthenticated ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LoginView"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserAvatar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image_user_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "user_avatar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UserDetails"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 17
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 19
    }
  }, "David Kinderson"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, "+990 374 987"))) : __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["LogoutView"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 15
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    intlButtonId: "mobileSignInButtonText",
    title: "Join In",
    size: "small",
    className: "sign_in" // variant="primary"
    ,
    onClick: signInOutForm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 17
    }
  }))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 11
    }
  }, DrawerMenuItems.map(item => __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    key: item.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: toggleHandler,
    href: item.href,
    label: item.label,
    intlId: item.intlLabelId,
    className: "drawer_menu_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 17
    }
  })))), isAuthenticated && __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["UesrOptionMenu"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 13
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 15
    }
  }, __jsx(components_NavLink_NavLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/profile",
    label: "Your Account Settings",
    className: "drawer_menu_item",
    intlId: "navlinkAccountSettings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_12__["DrawerMenuItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, __jsx("div", {
    onClick: handleLogout,
    className: "drawer_menu_item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx("span", {
    className: "logoutBtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 19
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "navlinkLogout",
    defaultMessage: "Logout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileDrawer);

/***/ }),

/***/ "./containers/LayoutContainer/Header/MobileHeader.tsx":
/*!************************************************************!*\
  !*** ./containers/LayoutContainer/Header/MobileHeader.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! contexts/drawer/drawer.provider */ "./contexts/drawer/drawer.provider.tsx");
/* harmony import */ var components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Popover/Popover */ "./components/Popover/Popover.tsx");
/* harmony import */ var _MobileDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MobileDrawer */ "./containers/LayoutContainer/Header/MobileDrawer.tsx");
/* harmony import */ var _Header_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/SearchBox/SearchBox */ "./components/SearchBox/SearchBox.tsx");
/* harmony import */ var contexts_search_search_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! contexts/search/search.context */ "./contexts/search/search.context.tsx");
/* harmony import */ var image_logoC_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! image/logoC.png */ "./image/logoC.png");
/* harmony import */ var image_logoC_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(image_logoC_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! containers/constants/navigation */ "./containers/constants/navigation.ts");
/* harmony import */ var contexts_language_language_context__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! contexts/language/language.context */ "./contexts/language/language.context.js");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
var _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/LayoutContainer/Header/MobileHeader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
















const LanguageArray = [{
  id: "ar",
  label: "Arabic",
  intlLangName: "intlArabic",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["SAFlag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 66
    }
  })
}, {
  id: "zh",
  label: "Chinese",
  intlLangName: "intlChinese",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["CNFlag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 68
    }
  })
}, {
  id: "en",
  label: "English",
  intlLangName: "intlEnglish",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["USFlag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 68
    }
  })
}, {
  id: "de",
  label: "German",
  intlLangName: "intlGerman",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["DEFlag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 66
    }
  })
}, {
  id: "he",
  label: "Hebrew",
  intlLangName: "intlHebrew",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["ILFlag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 66
    }
  })
}, {
  id: "es",
  label: "Spanish",
  intlLangName: "intlSpanish",
  icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["ESFlag"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 68
    }
  })
}];

const SearchModal = ({
  state,
  pathname,
  handleSearch
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(state.text || "");

  const handleSearchInput = text => {
    setText(text);
  };

  const {
    page
  } = state,
        urlState = _objectWithoutProperties(state, ["page"]);

  const handleClickSearchButton = () => {
    handleSearch(text);
    router.push({
      pathname: pathname === "/" ? "/grocery" : pathname,
      query: _objectSpread({}, urlState, {
        text
      })
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
  };

  return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["SearchModalWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 5
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["SearchModalClose"], {
    type: "submit",
    onClick: () => Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["LongArrowLeft"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  })), __jsx(components_SearchBox_SearchBox__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "header-modal-search",
    bordered: false,
    inputStyle: {
      height: 35
    },
    buttonText: "",
    placeholder: "Search",
    handleSearch: handleSearchInput,
    value: text,
    onClick: handleClickSearchButton,
    pathname: pathname,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }));
};

const MobileHeader = props => {
  const {
    state: {
      lang
    },
    toggleLanguage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_language_language_context__WEBPACK_IMPORTED_MODULE_13__["default"]);
  const {
    state,
    dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_search_search_context__WEBPACK_IMPORTED_MODULE_10__["SearchContext"]);
  const {
    className,
    pathname,
    closeSearch
  } = props;
  const selectedLangindex = LanguageArray.findIndex(x => x.id === lang);

  const handleSearch = text => {
    dispatch({
      type: "UPDATE",
      payload: _objectSpread({}, state, {
        text
      })
    });
  };

  const handleSearchModal = () => {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["openModal"])({
      show: true,
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "search-modal-mobile",
        width: "100%",
        height: "100%"
      },
      closeOnClickOutside: false,
      component: SearchModal,
      componentProps: {
        state,
        pathname,
        handleSearch
      },
      closeComponent: () => __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      })
    });
  };

  const handleToggleLanguage = e => {
    toggleLanguage(e.target.value);
    console.log(e.target.value, "switcher");
  };

  const LanguageMenu = item => {
    return __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["LanguageItem"], {
      onClick: handleToggleLanguage,
      key: item.id,
      value: item.id,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 7
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }
    }, item.icon), __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
      id: item.intlLangName,
      defaultMessage: item.label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }));
  };

  const isHomePage = pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["GROCERY_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["CLOTHING"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["Food_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["BOOK_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["FURNITURE_PAGE"] || pathname === containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["BAGS_PAGE"];
  return __jsx(contexts_drawer_drawer_provider__WEBPACK_IMPORTED_MODULE_4__["DrawerProvider"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 5
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["MobileHeaderWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 7
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["MobileHeaderInnerWrapper"], {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["DrawerWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 11
    }
  }, __jsx(_MobileDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 13
    }
  })), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["LogoWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 11
    }
  }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["Logo"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: containers_constants_navigation__WEBPACK_IMPORTED_MODULE_12__["HOME_PAGE"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: image_logoC_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "charioTn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 19
    }
  }))))), __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["LangSwithcer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "right",
    handler: __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["SelectedLang"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 17
      }
    }, __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["Flag"], {
      style: {
        margin: 0
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 19
      }
    }, LanguageArray[selectedLangindex].icon)),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, LanguageArray.map(LanguageMenu)),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  })), isHomePage ? __jsx(_Header_style__WEBPACK_IMPORTED_MODULE_7__["SearchWrapper"], {
    onClick: handleSearchModal,
    className: "searchIconWrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }
  }, __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_14__["SearchIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  })) : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileHeader);

/***/ }),

/***/ "./contexts/drawer/drawer.context.tsx":
/*!********************************************!*\
  !*** ./contexts/drawer/drawer.context.tsx ***!
  \********************************************/
/*! exports provided: DrawerContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DrawerContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});

/***/ }),

/***/ "./contexts/drawer/drawer.provider.tsx":
/*!*********************************************!*\
  !*** ./contexts/drawer/drawer.provider.tsx ***!
  \*********************************************/
/*! exports provided: DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _drawer_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer.context */ "./contexts/drawer/drawer.context.tsx");
var _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/contexts/drawer/drawer.provider.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return _objectSpread({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

const DrawerProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(_drawer_context__WEBPACK_IMPORTED_MODULE_1__["DrawerContext"].Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, children);
};

/***/ })

};;
//# sourceMappingURL=0.js.map