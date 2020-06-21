webpackHotUpdate("static/development/pages/serviceProvider/[id].js",{

/***/ "../../node_modules/react-bootstrap/esm/Media.js":
/*!*****************************************************************************!*\
  !*** /Volumes/Second/npm/PFE_git/node_modules/react-bootstrap/esm/Media.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "../../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "../../node_modules/react-bootstrap/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createWithBsPrefix */ "../../node_modules/react-bootstrap/esm/createWithBsPrefix.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "../../node_modules/react-bootstrap/esm/ThemeProvider.js");






var Media = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "as"]);

  var prefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'media');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, prefix)
  }));
});
Media.displayName = 'Media';
Media.Body = Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_4__["default"])('media-body');
/* harmony default export */ __webpack_exports__["default"] = (Media);

/***/ }),

/***/ "./containers/ServiceProviderDetails/ServiceProviderDetails.tsx":
/*!**********************************************************************!*\
  !*** ./containers/ServiceProviderDetails/ServiceProviderDetails.tsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Test_fod_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Test/fod.jpg */ "./containers/Test/fod.jpg");
/* harmony import */ var _Test_fod_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Test_fod_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/Sidebar/Sidebar */ "./containers/Sidebar/Sidebar.tsx");
/* harmony import */ var containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/Footer/Footer */ "./containers/Footer/Footer.tsx");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Card */ "../../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap_Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Media */ "../../node_modules/react-bootstrap/esm/Media.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "../../node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var styled_pages_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled/pages.style */ "./styled/pages.style.tsx");
/* harmony import */ var containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! containers/Products/Products */ "./containers/Products/Products.tsx");
/* harmony import */ var containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! containers/Cart/CartPopUp */ "./containers/Cart/CartPopUp.tsx");
/* harmony import */ var _ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ServiceProviderDetails.style */ "./containers/ServiceProviderDetails/ServiceProviderDetails.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/ServiceProviderDetails/ServiceProviderDetails.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var PAGE_TYPE = "grocery";

var ServiceProvider = function ServiceProvider(deviceType) {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])(),
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
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBContainer"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: "75px 0 60px 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "shadow-none ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap_Media__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 19
    }
  }, __jsx("img", {
    width: 127,
    height: 127,
    className: "mr-3",
    src: _Test_fod_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }), __jsx(react_bootstrap_Media__WEBPACK_IMPORTED_MODULE_5__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["BlockTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }
  }, "Restaurant Name"), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "order",
    defaultMessage: "Sahloul, sousse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 23
    }
  }, " Rue yaser arafet 2000"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 23
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    md: "10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 25
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    style: {
      padding: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    style: {
      marginLeft: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 27
    }
  }, " 0 Vote"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRating"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 27
    }
  }))))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 19
    }
  }), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["InfoBlockWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 19
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "orderNumberText",
    defaultMessage: "Order Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 23
    }
  }, "+216 51 085 600")), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "blaa",
    defaultMessage: " Hours",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 23
    }
  }, "08:00 \u2013 01:00 (Mon-Sat)")), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "p",
    defaultMessage: "Cost for two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "p",
    defaultMessage: "20dt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  }))), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "paymenMethodText",
    defaultMessage: "Payment Method",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_11__["FormattedMessage"], {
    id: "paymentMethodName",
    defaultMessage: "Cash on delivery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }))))))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    md: "3",
    style: {
      padding: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_7__["SidebarSection"], {
    style: {
      marginTop: "-45px",
      paddingLeft: "15px",
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }, __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    md: "9",
    style: {
      padding: "15px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      marginTop: "-60px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 15
    }
  }, __jsx(containers_Products_Products__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 17
    }
  }))))), __jsx(containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_9__["default"], {
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }), __jsx(containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceProvider);

/***/ }),

/***/ "./containers/Test/fod.jpg":
/*!*********************************!*\
  !*** ./containers/Test/fod.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/fod-c60bbf54d23242069de4c5f891a0ac05.jpg";

/***/ })

})
//# sourceMappingURL=[id].js.3c95599a9629f49e6cb7.hot-update.js.map