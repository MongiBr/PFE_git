webpackHotUpdate("static/development/pages/foods.js",{

/***/ "../../node_modules/next/dist/next-server/lib/dynamic.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/loadable-context.js":
false,

/***/ "../../node_modules/next/dist/next-server/lib/loadable.js":
false,

/***/ "../../node_modules/use-subscription/cjs/use-subscription.development.js":
false,

/***/ "../../node_modules/use-subscription/index.js":
false,

/***/ "./containers/ServiceProvidersList/ServiceProvidersList.tsx":
/*!******************************************************************!*\
  !*** ./containers/ServiceProvidersList/ServiceProvidersList.tsx ***!
  \******************************************************************/
/*! exports provided: ServiceProviders, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceProviders", function() { return ServiceProviders; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ProductCard/ProductCard */ "./components/ProductCard/ProductCard.tsx");
/* harmony import */ var _ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ServiceProvidersList.style */ "./containers/ServiceProvidersList/ServiceProvidersList.style.tsx");
/* harmony import */ var helper_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helper/constant */ "./helper/constant.ts");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/react-hooks */ "../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _graphql_query_serviceProvider_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../graphql/query/serviceProvider.query */ "./graphql/query/serviceProvider.query.ts");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.tsx");
/* harmony import */ var components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Placeholder/Placeholder */ "./components/Placeholder/Placeholder.tsx");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-reveal/Fade */ "../../node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var components_NoResult_NoResult__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/NoResult/NoResult */ "./components/NoResult/NoResult.tsx");


var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/ServiceProvidersList/ServiceProvidersList.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;













var ServiceProviders = function ServiceProviders(_ref) {
  var deviceType = _ref.deviceType,
      type = _ref.type,
      _ref$fetchLimit = _ref.fetchLimit,
      fetchLimit = _ref$fetchLimit === void 0 ? 8 : _ref$fetchLimit,
      _ref$loadMore = _ref.loadMore,
      loadMore = _ref$loadMore === void 0 ? true : _ref$loadMore;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loadingMore = _useState[0],
      toggleLoading = _useState[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_7__["useQuery"])(_graphql_query_serviceProvider_query__WEBPACK_IMPORTED_MODULE_8__["GET_SERVICE_PROVIDERS"], {
    variables: {
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
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_3__["closeModal"])();
  };

  var handleQuickViewModal = react__WEBPACK_IMPORTED_MODULE_1___default.a.useCallback(function (modalProps, deviceType, onModalClose) {
    if (router.pathname === "/serviceProvider/[id]") {
      var _as = "/serviceProvider/".concat(modalProps.id);

      router.push(router.pathname, _as);
      return;
    }

    var href = "".concat(router.pathname, "?").concat(modalProps.id);
    var as = "/serviceProvider/".concat(modalProps.id);
    router.push(href, as, {
      shallow: true
    });
  }, []);

  if (loading) {
    return __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["LoaderWrapper"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["LoaderItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    })), __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["LoaderItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    })), __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["LoaderItem"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, __jsx(components_Placeholder_Placeholder__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    })));
  }

  if (error) return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, error.message);

  if (!data || !data.serviceProviders || data.serviceProviders.items.length === 0) {
    return __jsx(components_NoResult_NoResult__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 12
      }
    });
  }

  var handleLoadMore = function handleLoadMore() {
    toggleLoading(true);
    fetchMore({
      variables: {
        offset: Number(data.serviceProviders.items.length),
        limit: fetchLimit
      },
      updateQuery: function updateQuery(prev, _ref2) {
        var fetchMoreResult = _ref2.fetchMoreResult;
        toggleLoading(false);

        if (!fetchMoreResult) {
          return prev;
        }

        return {
          serviceProviders: {
            __typename: prev.serviceProviders.__typename,
            items: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prev.serviceProviders.items), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(fetchMoreResult.serviceProviders.items)),
            hasMore: fetchMoreResult.serviceProviders.hasMore
          }
        };
      }
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["ProductsRow"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }
  }, data.serviceProviders.items.map(function (item, index) {
    return __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["ProductsCol"], {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["ProductCardWrapper"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_12___default.a, {
      duration: 800,
      delay: index * 10,
      style: {
        height: "100%"
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 15
      }
    }, __jsx(components_ProductCard_ProductCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: item.name,
      description: item.description,
      image: item.image,
      weight: item.unit,
      currency: helper_constant__WEBPACK_IMPORTED_MODULE_6__["CURRENCY"],
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
        lineNumber: 131,
        columnNumber: 17
      }
    }))));
  })), loadMore && data.serviceProviders.hasMore && __jsx(_ServiceProvidersList_style__WEBPACK_IMPORTED_MODULE_5__["ButtonWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onClick: handleLoadMore,
    title: "Load More",
    intlButtonId: "loadMoreBtn",
    size: "small",
    isLoading: loadingMore,
    loader: __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      color: "#fed700",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
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
      lineNumber: 153,
      columnNumber: 11
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (ServiceProviders);

/***/ })

})
//# sourceMappingURL=foods.js.9614f27ca6fa0ffe201a.hot-update.js.map