webpackHotUpdate("static/development/pages/serviceProvider/[id].js",{

/***/ "./containers/MagasinPage/MagasinPage.tsx":
/*!************************************************!*\
  !*** ./containers/MagasinPage/MagasinPage.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/InputIncDec/InputIncDec */ "./components/InputIncDec/InputIncDec.tsx");
/* harmony import */ var _ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProductDetails.style */ "./containers/MagasinPage/ProductDetails.style.tsx");
/* harmony import */ var components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var components_Truncate_Truncate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Truncate/Truncate */ "./components/Truncate/Truncate.tsx");
/* harmony import */ var components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/MultiCarousel/MultiCarousel */ "./components/MultiCarousel/MultiCarousel.tsx");
/* harmony import */ var contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! contexts/cart/cart.context */ "./contexts/cart/cart.context.tsx");
/* harmony import */ var helper_utility__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helper/utility */ "./helper/utility.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");
/* harmony import */ var contexts_language_language_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! contexts/language/language.context */ "./contexts/language/language.context.js");
var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/MagasinPage/MagasinPage.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













var MagasinPage = function MagasinPage(_ref) {
  var magasin = _ref.magasin,
      deviceType = _ref.deviceType;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_language_language_context__WEBPACK_IMPORTED_MODULE_11__["default"]),
      lang = _useContext.state.lang;

  console.log(magasin);

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_8__["CartContext"]),
      add = _useContext2.add,
      update = _useContext2.update,
      products = _useContext2.products;

  var data = magasin;
  var index = Object(helper_utility__WEBPACK_IMPORTED_MODULE_9__["findProductIndex"])(products, data.id);
  var quantity = Object(helper_utility__WEBPACK_IMPORTED_MODULE_9__["getProductQuantity"])(products, index);

  var handleClick = function handleClick(e) {
    e.stopPropagation();
    add(e, data);
  };

  var handleUpdate = function handleUpdate(value, e) {
    if (index === -1 && value === 1) {
      add(e, data);
    } else {
      update(data.id, value);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 500);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsWrapper"], {
    className: "product-card",
    dir: "ltr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, lang === "ar" || lang === "he" ? "" : __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductPreview"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["BackButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Back",
    intlButtonId: "backBtn",
    iconPosition: "left",
    size: "small",
    style: {
      backgroundColor: "#ffffff",
      border: "1px solid #f1f1f1",
      color: "#77798c"
    },
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_5__["LongArrowLeft"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 23
      }
    }),
    onClick: next_router__WEBPACK_IMPORTED_MODULE_1___default.a.back,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 15
    }
  })), __jsx(components_MultiCarousel_MultiCarousel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    items: magasin.image,
    deviceType: deviceType,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  })), __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductInfo"], {
    dir: lang === "ar" || lang === "he" ? "rtl" : "ltr",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  }, __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductTitle"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }, magasin.title), __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductWeight"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 11
    }
  }, magasin.image), __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductDescription"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(components_Truncate_Truncate__WEBPACK_IMPORTED_MODULE_6__["default"], {
    character: 600,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, magasin.description)), __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductCartWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductCartBtn"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, quantity <= 0 ? __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Add to Cart",
    intlButtonId: "addToCartButton",
    iconPosition: "left",
    size: "small",
    className: "cart-button",
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_5__["CartIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 25
      }
    }),
    onClick: function onClick(e) {
      return handleClick(e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }) : __jsx(components_InputIncDec_InputIncDec__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: quantity,
    onClick: function onClick(e) {
      e.stopPropagation(onclick);
    },
    onUpdate: function onUpdate(value, e) {
      return handleUpdate(value, e);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  })))), lang === "ar" || lang === "he" ? __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["ProductPreview"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["BackButton"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Back",
    intlButtonId: "backBtn",
    iconPosition: "left",
    size: "small",
    style: {
      backgroundColor: "#ffffff",
      border: "1px solid #f1f1f1",
      color: "#77798c"
    },
    icon: __jsx(components_AllSvgIcon__WEBPACK_IMPORTED_MODULE_5__["LongArrowLeft"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 23
      }
    }),
    onClick: next_router__WEBPACK_IMPORTED_MODULE_1___default.a.back,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 15
    }
  }))) : ""), __jsx(_ProductDetails_style__WEBPACK_IMPORTED_MODULE_4__["RelatedItems"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_10__["FormattedMessage"], {
    id: "intlReletedItems",
    defaultMessage: "Related Items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (MagasinPage);

/***/ })

})
//# sourceMappingURL=[id].js.560a0e0889cd3d068196.hot-update.js.map