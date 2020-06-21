webpackHotUpdate("static/development/pages/serviceProvider/[id].js",{

/***/ "../../node_modules/react-bootstrap/esm/Media.js":
false,

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
/* harmony import */ var containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! containers/Sidebar/Sidebar */ "./containers/Sidebar/Sidebar.tsx");
/* harmony import */ var containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! containers/Footer/Footer */ "./containers/Footer/Footer.tsx");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Card */ "../../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mdbreact */ "../../node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var styled_pages_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled/pages.style */ "./styled/pages.style.tsx");
/* harmony import */ var containers_Products_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/Products/Products */ "./containers/Products/Products.tsx");
/* harmony import */ var containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! containers/Cart/CartPopUp */ "./containers/Cart/CartPopUp.tsx");
/* harmony import */ var _ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServiceProviderDetails.style */ "./containers/ServiceProviderDetails/ServiceProviderDetails.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/ServiceProviderDetails/ServiceProviderDetails.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











var PAGE_TYPE = "grocery";

var ServiceProvider = function ServiceProvider(deviceType) {
  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])(),
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
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBContainer"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }
  }, __jsx("div", {
    style: {
      padding: "75px 0 60px 0"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "shadow-none ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_3__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(Media, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx("img", {
    width: 127,
    height: 127,
    className: "mr-3",
    src: ImgResto,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }), __jsx(Media.Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["BlockTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, "Restaurant Name"), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "order",
    defaultMessage: "Sahloul, sousse",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 23
    }
  }, " Rue yaser arafet 2000"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    md: "10",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 25
    }
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    style: {
      padding: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    style: {
      marginLeft: "40px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 27
    }
  }, " 0 Vote"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBRating"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 27
    }
  }))))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 19
    }
  }), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["InfoBlockWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 19
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "orderNumberText",
    defaultMessage: "Order Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 23
    }
  }, "+216 51 085 600")), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "blaa",
    defaultMessage: " Hours",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 23
    }
  }, "08:00 \u2013 01:00 (Mon-Sat)")), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "p",
    defaultMessage: "Cost for two",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "p",
    defaultMessage: "20dt",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 25
    }
  }))), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["InfoBlock"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 21
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    bold: true,
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "paymenMethodText",
    defaultMessage: "Payment Method",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 25
    }
  })), __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_9__["FormattedMessage"], {
    id: "paymentMethodName",
    defaultMessage: "Cash on delivery",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 25
    }
  }))))))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    md: "3",
    style: {
      padding: 0
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(styled_pages_style__WEBPACK_IMPORTED_MODULE_5__["SidebarSection"], {
    style: {
      marginTop: "-45px",
      paddingLeft: "15px",
      height: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx(containers_Sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 15
    }
  }))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_4__["MDBCol"], {
    md: "9",
    style: {
      padding: "15px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 11
    }
  }, __jsx(_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx("div", {
    style: {
      marginTop: "-60px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }, __jsx(containers_Products_Products__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: PAGE_TYPE,
    deviceType: deviceType,
    fetchLimit: 8,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }))))), __jsx(containers_Cart_CartPopUp__WEBPACK_IMPORTED_MODULE_7__["default"], {
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }), __jsx(containers_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ServiceProvider);

/***/ }),

/***/ "./containers/Test/fod.jpg":
false

})
//# sourceMappingURL=[id].js.4ef3a396b139a3ed0ef7.hot-update.js.map