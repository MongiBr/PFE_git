webpackHotUpdate("static/development/pages/product/[slug].js",{

/***/ "./containers/Products/Products.tsx":
/*!******************************************!*\
  !*** ./containers/Products/Products.tsx ***!
  \******************************************/
/*! exports provided: Products, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "../../node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/ProductCard/ProductCard */ "./components/ProductCard/ProductCard.tsx");
/* harmony import */ var _Products_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Products.style */ "./containers/Products/Products.style.tsx");
/* harmony import */ var helper_constant__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! helper/constant */ "./helper/constant.ts");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.tsx");
/* harmony import */ var components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/Placeholder/Placeholder */ "./components/Placeholder/Placeholder.tsx");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-reveal/Fade */ "../../node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_NoResult_NoResult__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/NoResult/NoResult */ "./components/NoResult/NoResult.tsx");



var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/Products/Products.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  query getProducts(\n    $type: String\n    $text: String\n    $category: String\n    $offset: Int\n    $limit: Int\n  ) {\n    products(\n      type: $type\n      text: $text\n      category: $category\n      offset: $offset\n      limit: $limit\n    ) {\n      items {\n        id\n        title\n        slug\n        unit\n        price\n        salePrice\n        description\n        discountInPercent\n        type\n        image\n        gallery {\n          url\n        }\n        categories {\n          id\n          title\n          slug\n        }\n      }\n      hasMore\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}















var QuickView = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, /*! ../QuickView/QuickView */ "./containers/QuickView/QuickView.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../QuickView/QuickView */ "./containers/QuickView/QuickView.tsx")];
    },
    modules: ["../QuickView/QuickView"]
  }
});
var GET_PRODUCTS = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());
var Products = function Products(_ref) {
  var deviceType = _ref.deviceType,
      type = _ref.type,
      _ref$fetchLimit = _ref.fetchLimit,
      fetchLimit = _ref$fetchLimit === void 0 ? 8 : _ref$fetchLimit,
      _ref$loadMore = _ref.loadMore,
      loadMore = _ref$loadMore === void 0 ? true : _ref$loadMore;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loadingMore = _useState[0],
      toggleLoading = _useState[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useQuery"])(GET_PRODUCTS, {
    variables: {
      type: type,
      text: router.query.text,
      category: router.query.category,
      offset: 0,
      limit: fetchLimit
    }
  }),
      data = _useQuery.data,
      error = _useQuery.error,
      loading = _useQuery.loading,
      fetchMore = _useQuery.fetchMore; // Quick View Modal


  var handleModalClose = function handleModalClose() {
    var href = "".concat(router.pathname);
    var as = router.asPath;
    router.push(href, as, {
      shallow: true
    });
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_6__["closeModal"])();
  };

  var handleQuickViewModal = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(function (modalProps, deviceType, onModalClose) {
    if (router.pathname === "/product/[slug]") {
      var _as = "/product/".concat(modalProps.slug);

      router.push(router.pathname, _as);
      return;
    }

    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_6__["openModal"])({
      show: true,
      overlayClassName: "quick-view-overlay",
      closeOnClickOutside: false,
      component: QuickView,
      componentProps: {
        modalProps: modalProps,
        deviceType: deviceType,
        onModalClose: onModalClose
      },
      closeComponent: "div",
      config: {
        enableResizing: false,
        disableDragging: true,
        className: "quick-view-modal",
        width: 900,
        y: 30,
        height: "auto",
        transition: {
          mass: 1,
          tension: 0,
          friction: 0
        }
      }
    });
    var href = "".concat(router.pathname, "?").concat(modalProps.slug);
    var as = "/product/".concat(modalProps.slug);
    router.push(href, as, {
      shallow: true
    });
  }, []);

  if (loading) {
    return __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["LoaderWrapper"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 7
      }
    }, __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["LoaderItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 9
      }
    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    })), __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["LoaderItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 9
      }
    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 11
      }
    })), __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["LoaderItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 9
      }
    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    })));
  }

  if (error) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 21
    }
  }, error.message);

  if (!data || !data.products || data.products.items.length === 0) {
    return __jsx(components_NoResult_NoResult__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 12
      }
    });
  }

  var handleLoadMore = function handleLoadMore() {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.products.items.length),
        limit: fetchLimit
      },
      updateQuery: function updateQuery(prev, _ref2) {
        var fetchMoreResult = _ref2.fetchMoreResult;
        toggleLoading(false);

        if (!fetchMoreResult) {
          return prev;
        }

        return {
          products: {
            __typename: prev.products.__typename,
            items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.products.items), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.products.items)),
            hasMore: fetchMoreResult.products.hasMore
          }
        };
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["ProductsRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 7
    }
  }, data.products.items.map(function (item, index) {
    return __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["ProductsCol"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 11
      }
    }, __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["ProductCardWrapper"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_14___default.a, {
      duration: 800,
      delay: index * 10,
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }, __jsx(components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: item.title,
      description: item.description,
      image: item.image,
      weight: item.unit,
      currency: helper_constant__WEBPACK_IMPORTED_MODULE_9__["CURRENCY"],
      price: item.price,
      salePrice: item.salePrice,
      discountInPercent: item.discountInPercent,
      data: item,
      deviceType: deviceType,
      onClick: function onClick() {
        return handleQuickViewModal(item, deviceType, handleModalClose);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 17
      }
    }))));
  })), loadMore && data.products.hasMore && __jsx(_Products_style__WEBPACK_IMPORTED_MODULE_8__["ButtonWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onClick: handleLoadMore,
    title: "Load More",
    intlButtonId: "loadMoreBtn",
    size: "small",
    isLoading: loadingMore,
    loader: __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_12__["default"], {
      color: "#fed700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 21
      }
    }),
    style: {
      minWidth: 135,
      backgroundColor: "#ffffff",
      border: "1px solid #f1f1f1",
      color: "#fed700"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=[slug].js.4f1c59f2eebc86586e95.hot-update.js.map