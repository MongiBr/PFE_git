webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./containers/Profile/Settings/Settings.tsx":
/*!**************************************************!*\
  !*** ./containers/Profile/Settings/Settings.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "../../node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-styled-flexboxgrid */ "../../node_modules/react-styled-flexboxgrid/dist/styled-flexboxgrid.es.js");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redq/reuse-modal */ "../../node_modules/@redq/reuse-modal/es/index.js");
/* harmony import */ var components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/RadioCard/RadioCard */ "./components/RadioCard/RadioCard.tsx");
/* harmony import */ var contexts_profile_profile_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! contexts/profile/profile.context */ "./contexts/profile/profile.context.tsx");
/* harmony import */ var graphql_mutation_address__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql/mutation/address */ "./graphql/mutation/address.ts");
/* harmony import */ var graphql_mutation_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql/mutation/card */ "./graphql/mutation/card.ts");
/* harmony import */ var graphql_mutation_contact__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! graphql/mutation/contact */ "./graphql/mutation/contact.ts");
/* harmony import */ var _Payment_StripePaymentForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Payment/StripePaymentForm */ "./containers/Payment/StripePaymentForm.tsx");
/* harmony import */ var _Settings_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Settings.style */ "./containers/Profile/Settings/Settings.style.tsx");
/* harmony import */ var components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! components/RadioGroup/RadioGroup */ "./components/RadioGroup/RadioGroup.tsx");
/* harmony import */ var components_PaymentGroup_PaymentGroup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/PaymentGroup/PaymentGroup */ "./components/PaymentGroup/PaymentGroup.tsx");
/* harmony import */ var _Checkout_Update_UpdateAddress__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../Checkout/Update/UpdateAddress */ "./containers/Checkout/Update/UpdateAddress.tsx");
/* harmony import */ var _Checkout_Update_UpdateContact__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Checkout/Update/UpdateContact */ "./containers/Checkout/Update/UpdateContact.tsx");
/* harmony import */ var components_Button_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! components/Button/Button */ "./components/Button/Button.tsx");
/* harmony import */ var graphql_mutation_me__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! graphql/mutation/me */ "./graphql/mutation/me.ts");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-intl */ "../../node_modules/react-intl/lib/index.js");



var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/containers/Profile/Settings/Settings.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



















var SettingsContent = function SettingsContent(_ref) {
  var deviceType = _ref.deviceType;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(contexts_profile_profile_context__WEBPACK_IMPORTED_MODULE_7__["ProfileContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(graphql_mutation_me__WEBPACK_IMPORTED_MODULE_18__["UPDATE_ME"]),
      _useMutation2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 1),
      updateMeMutation = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(graphql_mutation_contact__WEBPACK_IMPORTED_MODULE_10__["DELETE_CONTACT"]),
      _useMutation4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 1),
      deleteContactMutation = _useMutation4[0];

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(graphql_mutation_address__WEBPACK_IMPORTED_MODULE_8__["DELETE_ADDRESS"]),
      _useMutation6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation5, 1),
      deleteAddressMutation = _useMutation6[0];

  var _useMutation7 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(graphql_mutation_card__WEBPACK_IMPORTED_MODULE_9__["DELETE_CARD"]),
      _useMutation8 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation7, 1),
      deletePaymentCardMutation = _useMutation8[0];

  var addresses = state.addresses,
      contacts = state.contacts,
      card = state.card; // const addressList =
  //   address && address.length ? modifyaddressData(address) : [];

  var handleChange = function handleChange(value, field) {
    dispatch({
      type: "HANDLE_ON_INPUT_CHANGE",
      payload: {
        value: value,
        field: field
      }
    });
  }; // Add or edit modal


  var handleModal = function handleModal(modalComponent) {
    var modalProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var className = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "add-address-modal";
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_5__["openModal"])({
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
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleEditDelete$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(type === "edit")) {
              _context.next = 5;
              break;
            }

            modalComponent = name === "addresses" ? _Checkout_Update_UpdateAddress__WEBPACK_IMPORTED_MODULE_15__["default"] : _Checkout_Update_UpdateContact__WEBPACK_IMPORTED_MODULE_16__["default"];
            handleModal(modalComponent, item);
            _context.next = 22;
            break;

          case 5:
            console.log(name, item, type, "delete");
            _context.t0 = name;
            _context.next = _context.t0 === "payment" ? 9 : _context.t0 === "contacts" ? 13 : _context.t0 === "addresses" ? 17 : 21;
            break;

          case 9:
            dispatch({
              type: "DELETE_CARD",
              payload: item.id
            });
            _context.next = 12;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deletePaymentCardMutation({
              variables: {
                cardId: JSON.stringify(item.id)
              }
            }));

          case 12:
            return _context.abrupt("return", _context.sent);

          case 13:
            dispatch({
              type: "DELETE_CONTACT",
              payload: item.id
            });
            _context.next = 16;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deleteContactMutation({
              variables: {
                contactId: JSON.stringify(item.id)
              }
            }));

          case 16:
            return _context.abrupt("return", _context.sent);

          case 17:
            dispatch({
              type: "DELETE_ADDRESS",
              payload: item.id
            });
            _context.next = 20;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(deleteAddressMutation({
              variables: {
                addressId: JSON.stringify(item.id)
              }
            }));

          case 20:
            return _context.abrupt("return", _context.sent);

          case 21:
            return _context.abrupt("return", false);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleSave = function handleSave() {
    var name, email;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSave$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            name = state.name, email = state.email;
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(updateMeMutation({
              variables: {
                meInput: JSON.stringify({
                  name: name,
                  email: email
                })
              }
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var handleData = function handleData(data) {
    console.log(data);
  };

  return __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["SettingsForm"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 5
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["SettingsFormContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["HeadingSection"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
    id: "profilePageTitle",
    defaultMessage: "Your Profile",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }))), __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    style: {
      alignItems: "flex-end",
      marginBottom: "50px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    sm: 5,
    md: 5,
    lg: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
    type: "text",
    label: "Name",
    value: state.name,
    onUpdate: function onUpdate(value) {
      return handleChange(value, "name");
    },
    style: {
      backgroundColor: "#F7F7F7"
    },
    intlInputLabelId: "profileNameField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  })), __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    sm: 5,
    md: 5,
    lg: 5,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Input"], {
    type: "email",
    label: "Email Address",
    value: state.email,
    onUpdate: function onUpdate(value) {
      return handleChange(value, "email");
    },
    style: {
      backgroundColor: "#F7F7F7"
    },
    intlInputLabelId: "profileEmailField",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  })), __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    sm: 2,
    md: 2,
    lg: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 11
    }
  }, __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
    title: "Save",
    onClick: handleSave,
    style: {
      width: "100%"
    },
    intlButtonId: "profileSaveBtn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 13
    }
  }))), __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 11
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["SettingsFormContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["HeadingSection"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
    id: "contactNumberTItle",
    defaultMessage: "Contact Numbers",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 19
    }
  }))), __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 15
    }
  }, __jsx(components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
    items: contacts,
    component: function component(item) {
      return __jsx(components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
          lineNumber: 172,
          columnNumber: 21
        }
      });
    },
    secondaryComponent: __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Add Contact",
      iconPosition: "right",
      colors: "primary",
      size: "small",
      variant: "outlined",
      type: "button",
      intlButtonId: "addContactBtn",
      onClick: function onClick() {
        return handleModal(_Checkout_Update_UpdateContact__WEBPACK_IMPORTED_MODULE_16__["default"], {}, "add-contact-modal");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 21
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 17
    }
  }))))), __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    style: {
      position: "relative"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["SettingsFormContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["HeadingSection"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 15
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
    id: "deliveryAddresTitle",
    defaultMessage: "Delivery Address",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 19
    }
  }))), __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["ButtonGroup"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 15
    }
  }, __jsx(components_RadioGroup_RadioGroup__WEBPACK_IMPORTED_MODULE_13__["default"], {
    items: addresses,
    component: function component(item) {
      return __jsx(components_RadioCard_RadioCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
          lineNumber: 225,
          columnNumber: 21
        }
      });
    },
    secondaryComponent: __jsx(components_Button_Button__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: "Add Adderss",
      iconPosition: "right",
      colors: "primary",
      size: "small",
      variant: "outlined",
      type: "button",
      intlButtonId: "addAddressBtn",
      onClick: function onClick() {
        return handleModal(_Checkout_Update_UpdateAddress__WEBPACK_IMPORTED_MODULE_15__["default"], {}, "add-address-modal");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 21
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }))))), __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 9
    }
  }, __jsx(react_styled_flexboxgrid__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 11
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["SettingsFormContent"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 13
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["HeadingSection"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 15
    }
  }, __jsx(_Settings_style__WEBPACK_IMPORTED_MODULE_12__["Title"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 17
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_19__["FormattedMessage"], {
    id: "paymentCardTitle",
    defaultMessage: "Payments Card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 19
    }
  }))), __jsx(components_PaymentGroup_PaymentGroup__WEBPACK_IMPORTED_MODULE_14__["default"], {
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
      handleModal(_Payment_StripePaymentForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        buttonText: "Add Card"
      }, "add-address-modal stripe-modal");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SettingsContent);

/***/ })

})
//# sourceMappingURL=profile.js.f0f671dbad5bde83519f.hot-update.js.map