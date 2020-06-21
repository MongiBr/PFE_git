webpackHotUpdate("static/development/pages/foods.js",{

/***/ "./components/RestaurantCard/RestaurantCard.tsx":
/*!******************************************************!*\
  !*** ./components/RestaurantCard/RestaurantCard.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_bootstrap_Media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Media */ "../../node_modules/react-bootstrap/esm/Media.js");
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "../../node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var _Restaurant_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Restaurant.css */ "./components/RestaurantCard/Restaurant.css");
/* harmony import */ var _Restaurant_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Restaurant_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "../../node_modules/mdbreact/dist/mdbreact.esm.js");
/* harmony import */ var _containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../containers/ServiceProviderDetails/ServiceProviderDetails.style */ "./containers/ServiceProviderDetails/ServiceProviderDetails.style.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");


var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/components/RestaurantCard/RestaurantCard.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;









var RestaurantCard = function RestaurantCard(_ref) {
  var data = _ref.data,
      onChange = _ref.onChange,
      _onClick = _ref.onClick,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["data", "onChange", "onClick"]);

  return __jsx("div", {
    style: {
      marginBottom: "15px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      width: "100%"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap_Media__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("img", {
    width: 127,
    height: 127,
    className: "mr-3",
    src: data.image,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(react_bootstrap_Media__WEBPACK_IMPORTED_MODULE_1__["default"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["BlockTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }, data.name, " "), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "order",
    defaultMessage: data.city,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  })), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, data.location), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRating"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  })))), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  }), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "order",
    defaultMessage: "CUISINES",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }))), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 15
    }
  }, data.type))), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "txt",
    defaultMessage: "COST FOR TWO",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }))), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, data.costPrice))), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    bold: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_8__["FormattedMessage"], {
    id: "del",
    defaultMessage: "Hours",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }))), __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["ListDes"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx(_containers_ServiceProviderDetails_ServiceProviderDetails_style__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, data.hours)))), __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "View Page ",
    style: {
      width: "100%"
    },
    onClick: function onClick() {
      return _onClick(data.id);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RestaurantCard);

/***/ })

})
//# sourceMappingURL=foods.js.3cc08a6f8ac046df5511.hot-update.js.map