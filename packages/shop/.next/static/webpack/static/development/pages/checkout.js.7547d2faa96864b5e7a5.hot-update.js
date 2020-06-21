webpackHotUpdate("static/development/pages/checkout.js",{

/***/ "./containers/Checkout/Checkout.tsx":
/*!******************************************!*\
  !*** ./containers/Checkout/Checkout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "../../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "../../node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/RadioCard/RadioCard */ "./components/RadioCard/RadioCard.tsx");
/* harmony import */ var components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/RadioGroup/RadioGroup */ "./components/RadioGroup/RadioGroup.tsx");
/* harmony import */ var components_PaymentGroup_PaymentGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/PaymentGroup/PaymentGroup */ "./components/PaymentGroup/PaymentGroup.tsx");
/* harmony import */ var components_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Loader/Loader */ "./components/Loader/Loader.tsx");
/* harmony import */ var _Update_UpdateAddress__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Update/UpdateAddress */ "./containers/Checkout/Update/UpdateAddress.tsx");
/* harmony import */ var _Update_UpdateContact__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Update/UpdateContact */ "./containers/Checkout/Update/UpdateContact.tsx");
/* harmony import */ var _Payment_StripePaymentForm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Payment/StripePaymentForm */ "./containers/Payment/StripePaymentForm.tsx");
/* harmony import */ var graphql_mutation_address__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! graphql/mutation/address */ "./graphql/mutation/address.ts");
/* harmony import */ var graphql_mutation_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! graphql/mutation/card */ "./graphql/mutation/card.ts");
/* harmony import */ var graphql_mutation_contact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! graphql/mutation/contact */ "./graphql/mutation/contact.ts");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @apollo/react-hooks */ "../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! contexts/cart/cart.context */ "./contexts/cart/cart.context.tsx");
/* harmony import */ var _Checkout_style__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Checkout.style */ "./containers/Checkout/Checkout.style.tsx");
/* harmony import */ var _helper_utility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../helper/utility */ "./helper/utility.ts");
/* harmony import */ var components_CouponBox_CouponBox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/CouponBox/CouponBox */ "./components/CouponBox/CouponBox.tsx");
/* harmony import */ var contexts_profile_profile_context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! contexts/profile/profile.context */ "./contexts/profile/profile.context.tsx");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");




var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/Checkout/Checkout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation applyCoupon($code: String!) {\n    applyCoupon(code: $code) {\n      id\n      code\n      discountInPercent\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






















 // The type of props Checkout Form receives

var APPLY_COUPON = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

var Checkout = function Checkout(_ref) {
  var token = _ref.token,
      deviceType = _ref.deviceType;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      couponCode = _useState[0],
      setCouponCode = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      couponError = _useState2[0],
      setError = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(_helper_utility__WEBPACK_IMPORTED_MODULE_21__["getDiscount"])()),
      processedDiscount = _useState3[0],
      setProcessedDiscount = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(Object(_helper_utility__WEBPACK_IMPORTED_MODULE_21__["getCoupon"])()),
      processedCoupon = _useState4[0],
      setProcessedCoupon = _useState4[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(contexts_profile_profile_context__WEBPACK_IMPORTED_MODULE_23__["ProfileContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_19__["CartContext"]),
      removeCoupon = _useContext2.removeCoupon,
      discount = _useContext2.discount,
      coupon = _useContext2.coupon,
      addCoupon = _useContext2.addCoupon,
      clearCart = _useContext2.clearCart;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isValid = _useState6[0],
      setIsValid = _useState6[1];

  var addresses = state.addresses,
      contacts = state.contacts,
      card = state.card,
      schedules = state.schedules;
  var items = Object(_helper_utility__WEBPACK_IMPORTED_MODULE_21__["getCartProducts"])();
  var subTotalPrice = Object(_helper_utility__WEBPACK_IMPORTED_MODULE_21__["getSubTotalPrice"])();
  var totalPrice = Object(_helper_utility__WEBPACK_IMPORTED_MODULE_21__["getTotalPrice"])();

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useMutation"])(graphql_mutation_contact__WEBPACK_IMPORTED_MODULE_16__["DELETE_CONTACT"]),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      deleteContactMutation = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useMutation"])(graphql_mutation_address__WEBPACK_IMPORTED_MODULE_14__["DELETE_ADDRESS"]),
      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 1),
      deleteAddressMutation = _useMutation4[0];

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useMutation"])(graphql_mutation_card__WEBPACK_IMPORTED_MODULE_15__["DELETE_CARD"]),
      _useMutation6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation5, 1),
      deletePaymentCardMutation = _useMutation6[0];

  var _useMutation7 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_18__["useMutation"])(APPLY_COUPON),
      _useMutation8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation7, 1),
      applyedCoupon = _useMutation8[0];

  var handleSubmit = function handleSubmit() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            setLoading(true);

            if (isValid) {
              clearCart();
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push("/order-received");
            }

            setLoading(false);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setProcessedDiscount(discount);
    setProcessedCoupon(coupon);
  }, [coupon]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (totalPrice > 0 && items.length > 0 && addresses.length && contacts.length && card.length && schedules.length) {
      setIsValid(true);
    }
  }, [state]); // Add or edit modal

  var handleModal = function handleModal(modalComponent) {
    var modalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "add-address-modal";
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_17__["openModal"])({
      show: true,
      config: {
        width: 360,
        height: "auto",
        enableResizing: false,
        disableDragging: true,
        className: className
      },
      closeOnClickOutside: true,
      component: modalComponent,
      componentProps: {
        item: modalProps
      }
    });
  };

  var handleEditDelete = function handleEditDelete(item, type, name) {
    var modalComponent;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditDelete$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(type === "edit")) {
              _context2.next = 5;
              break;
            }

            modalComponent = name === "address" ? _Update_UpdateAddress__WEBPACK_IMPORTED_MODULE_11__["default"] : _Update_UpdateContact__WEBPACK_IMPORTED_MODULE_12__["default"];
            handleModal(modalComponent, item);
            _context2.next = 21;
            break;

          case 5:
            _context2.t0 = name;
            _context2.next = _context2.t0 === "payment" ? 8 : _context2.t0 === "contacts" ? 12 : _context2.t0 === "addresses" ? 16 : 20;
            break;

          case 8:
            dispatch({
              type: "DELETE_CARD",
              payload: item.id
            });
            _context2.next = 11;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deletePaymentCardMutation({
              variables: {
                cardId: JSON.stringify(item.id)
              }
            }));

          case 11:
            return _context2.abrupt("return", _context2.sent);

          case 12:
            dispatch({
              type: "DELETE_CONTACT",
              payload: item.id
            });
            _context2.next = 15;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deleteContactMutation({
              variables: {
                contactId: JSON.stringify(item.id)
              }
            }));

          case 15:
            return _context2.abrupt("return", _context2.sent);

          case 16:
            dispatch({
              type: "DELETE_ADDRESS",
              payload: item.id
            });
            _context2.next = 19;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deleteAddressMutation({
              variables: {
                addressId: JSON.stringify(item.id)
              }
            }));

          case 19:
            return _context2.abrupt("return", _context2.sent);

          case 20:
            return _context2.abrupt("return", false);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleApplyCoupon = function handleApplyCoupon() {
    var _await$applyedCoupon, applyCoupon;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleApplyCoupon$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(applyedCoupon({
              variables: {
                code: couponCode
              }
            }));

          case 2:
            _await$applyedCoupon = _context3.sent;
            applyCoupon = _await$applyedCoupon.data.applyCoupon;

            if (applyCoupon && applyCoupon.discountInPercent) {
              addCoupon(applyCoupon);
              setCouponCode("");
            } else {
              setError("Invalid Coupon");
            }

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleOnUpdate = function handleOnUpdate(couponCode) {
    setCouponCode(couponCode);
  };

  return __jsx("form", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 5
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 7
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["CheckoutContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderSummary"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryItem"], {
    style: {
      marginBottom: 15
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "subTotal",
    defaultMessage: "Subtotal",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 17
    }
  }), " (", items.length, " ", __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "itemsText",
    defaultMessage: "items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }), ")"), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderAmount"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, "$", Number.parseFloat(subTotalPrice).toFixed(2) || 0)), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryItem"], {
    style: {
      marginBottom: 30
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 13
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "shippinFeeText",
    defaultMessage: "Shipping Fee",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  })), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderAmount"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, "$00")), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryItem"], {
    style: {
      marginBottom: 30
    },
    className: "voucherWrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "voucherText",
    defaultMessage: "Voucher",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 17
    }
  })), processedDiscount && processedCoupon.code !== "DEFAULT_COUPON" ? __jsx(components_CouponBox_CouponBox__WEBPACK_IMPORTED_MODULE_22__["CouponDisplay"], {
    code: processedCoupon.code,
    sign: "-",
    currency: "$",
    price: discount,
    onClick: function onClick(e) {
      e.preventDefault();
      removeCoupon();
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["CouponBoxWrapper"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 19
    }
  }, __jsx(components_CouponBox_CouponBox__WEBPACK_IMPORTED_MODULE_22__["default"], {
    buttonTitle: "Apply",
    intlCouponBoxPlaceholder: "couponPlaceholder",
    onClick: handleApplyCoupon,
    value: couponCode,
    onUpdate: handleOnUpdate,
    style: {
      maxWidth: 350,
      height: 50
    },
    intlCouponApplyButton: "voucherApply",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }), couponError && __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["ErrorMsg"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 23
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "couponError",
    defaultMessage: couponError,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 25
    }
  }))))), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderSummaryItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 13
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderLabel"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "totalText",
    defaultMessage: "Total",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 17
    }
  })), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["OrderAmount"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 15
    }
  }, "$", Number.parseFloat(totalPrice).toFixed(2)))), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["DeliverySchedule"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "deliverySchedule",
    defaultMessage: "Select Your Delivery Schedule",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  })), __jsx(components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    items: schedules,
    component: function component(item) {
      return __jsx(components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: item.id,
        key: item.id,
        title: item.title,
        content: item.time_slot,
        name: "schedule",
        checked: item.type === "primary",
        withActionButtons: false,
        onChange: function onChange() {
          return dispatch({
            type: "SET_PRIMARY_SCHEDULE",
            payload: item.id.toString()
          });
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 17
        }
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 13
    }
  })), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["DeliveryAddress"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 11
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 13
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "checkoutDeliveryAddress",
    defaultMessage: "Select Your Delivery Address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 15
    }
  })), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 13
    }
  }, __jsx(components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    items: addresses,
    component: function component(item) {
      return __jsx(components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: item.id,
        key: item.id,
        title: item.name,
        content: item.info,
        name: "address",
        checked: item.type === "primary",
        onChange: function onChange() {
          return dispatch({
            type: "SET_PRIMARY_ADDRESS",
            payload: item.id.toString()
          });
        },
        onEdit: function onEdit() {
          return handleEditDelete(item, "edit", "address");
        },
        onDelete: function onDelete() {
          return handleEditDelete(item, "delete", "address");
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 19
        }
      });
    },
    secondaryComponent: __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Add Adderss",
      iconPosition: "right",
      colors: "primary",
      size: "small",
      variant: "outlined",
      type: "button",
      intlButtonId: "addAddressBtn",
      onClick: function onClick() {
        return handleModal(_Update_UpdateAddress__WEBPACK_IMPORTED_MODULE_11__["default"], "add-address-modal");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 323,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 15
    }
  }))), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["Contact"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 11
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "contactNumberText",
    defaultMessage: "Select Your Contact Number",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 15
    }
  })), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 13
    }
  }, __jsx(components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
    items: contacts,
    component: function component(item) {
      return __jsx(components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: item.id,
        key: item.id,
        title: item.type,
        content: item.number,
        checked: item.type === "primary",
        onChange: function onChange() {
          return dispatch({
            type: "SET_PRIMARY_CONTACT",
            payload: item.id.toString()
          });
        },
        name: "contact",
        onEdit: function onEdit() {
          return handleEditDelete(item, "edit", "contact");
        },
        onDelete: function onDelete() {
          return handleEditDelete(item, "delete", "contact");
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 19
        }
      });
    },
    secondaryComponent: __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "Add Contact",
      iconPosition: "right",
      colors: "primary",
      size: "small",
      variant: "outlined",
      type: "button",
      intlButtonId: "addContactBtn",
      onClick: function onClick() {
        return handleModal(_Update_UpdateContact__WEBPACK_IMPORTED_MODULE_12__["default"], "add-contact-modal");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 19
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 15
    }
  }))), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["PaymentOption"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 11
    }
  }, __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["Heading"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 13
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_24__["FormattedMessage"], {
    id: "selectPaymentText",
    defaultMessage: "Select Payment Option",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388,
      columnNumber: 15
    }
  })), __jsx(components_PaymentGroup_PaymentGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "payment",
    deviceType: deviceType,
    items: card,
    onEditDeleteField: function onEditDeleteField(item, type) {
      return handleEditDelete(item, type, "payment");
    },
    onChange: function onChange(item) {
      return dispatch({
        type: "SET_PRIMARY_CARD",
        payload: item.id.toString()
      });
    },
    handleAddNewCard: function handleAddNewCard() {
      handleModal(_Payment_StripePaymentForm__WEBPACK_IMPORTED_MODULE_13__["default"], {
        totalPrice: totalPrice
      }, "add-address-modal stripe-modal");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 13
    }
  })), __jsx(_Checkout_style__WEBPACK_IMPORTED_MODULE_20__["CheckoutSubmit"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 11
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onClick: handleSubmit,
    type: "button",
    disabled: !isValid,
    title: "Proceed to Checkout" // size='small'
    ,
    intlButtonId: "proceesCheckout",
    loader: __jsx(components_Loader_Loader__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 23
      }
    }),
    isLoading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Checkout);

/***/ })

})
//# sourceMappingURL=checkout.js.7547d2faa96864b5e7a5.hot-update.js.map