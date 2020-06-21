webpackHotUpdate("static/development/pages/profile.js",{

/***/ "./contexts/profile/profile.provider.tsx":
/*!***********************************************!*\
  !*** ./contexts/profile/profile.provider.tsx ***!
  \***********************************************/
/*! exports provided: ProfileProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileProvider", function() { return ProfileProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var containers_Checkout_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers/Checkout/data */ "./containers/Checkout/data.ts");
/* harmony import */ var _profile_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile.context */ "./contexts/profile/profile.context.tsx");



var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/contexts/profile/profile.provider.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function reducer(state, action) {
  switch (action.type) {
    case "HANDLE_ON_INPUT_CHANGE":
      return _objectSpread({}, state, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, action.payload.field, action.payload.value));

    case "ADD_OR_UPDATE_CONTACT":
      if (action.payload.id) {
        return _objectSpread({}, state, {
          contacts: state.contacts.map(function (item) {
            return item.id === action.payload.id ? _objectSpread({}, item, {}, action.payload) : item;
          })
        });
      }

      var newContact = _objectSpread({}, action.payload, {
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()(),
        type: state.contacts.length === "0" ? "primary" : "secondary"
      });

      return _objectSpread({}, state, {
        contacts: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.contacts), [newContact])
      });

    case "DELETE_CONTACT":
      return _objectSpread({}, state, {
        contacts: state.contacts.filter(function (item) {
          return item.id !== action.payload;
        })
      });

    case "ADD_OR_UPDATE_ADDRESS":
      if (action.payload.id) {
        return _objectSpread({}, state, {
          addresses: state.addresses.map(function (item) {
            return item.id === action.payload.id ? _objectSpread({}, item, {}, action.payload) : item;
          })
        });
      }

      var newAdress = _objectSpread({}, action.payload, {
        id: uuid_v4__WEBPACK_IMPORTED_MODULE_3___default()(),
        type: state.addresses.length === "0" ? "primary" : "secondary"
      });

      return _objectSpread({}, state, {
        addresses: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.addresses), [newAdress])
      });

    case "DELETE_ADDRESS":
      return _objectSpread({}, state, {
        addresses: state.addresses.filter(function (item) {
          return item.id !== action.payload;
        })
      });

    case "ADD_CARD":
      var newCard = {
        id: action.payload.id,
        type: state.card.length === "0" ? "primary" : "secondary",
        cardType: action.payload.brand.toLowerCase(),
        name: state.name,
        lastFourDigit: action.payload.last4
      };
      return _objectSpread({}, state, {
        card: [newCard].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.card))
      });

    case "DELETE_CARD":
      return _objectSpread({}, state, {
        card: state.card.filter(function (item) {
          return item.id !== action.payload;
        })
      });

    case "SET_PRIMARY_CONTACT":
      return _objectSpread({}, state, {
        contacts: state.contacts.map(function (item) {
          return item.id === action.payload ? _objectSpread({}, item, {
            type: "primary"
          }) : _objectSpread({}, item, {
            type: "secondary"
          });
        })
      });

    case "SET_PRIMARY_ADDRESS":
      return _objectSpread({}, state, {
        addresses: state.addresses.map(function (item) {
          return item.id === action.payload ? _objectSpread({}, item, {
            type: "primary"
          }) : _objectSpread({}, item, {
            type: "secondary"
          });
        })
      });

    case "SET_PRIMARY_SCHEDULE":
      return _objectSpread({}, state, {
        schedules: state.schedules.map(function (item) {
          return item.id === action.payload ? _objectSpread({}, item, {
            type: "primary"
          }) : _objectSpread({}, item, {
            type: "secondary"
          });
        })
      });

    case "SET_PRIMARY_CARD":
      return _objectSpread({}, state, {
        card: state.card.map(function (item) {
          return item.id === action.payload ? _objectSpread({}, item, {
            type: "primary"
          }) : _objectSpread({}, item, {
            type: "secondary"
          });
        })
      });

    default:
      return state;
  }
}

var ProfileProvider = function ProfileProvider(_ref) {
  var children = _ref.children,
      initData = _ref.initData;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, _objectSpread({}, initData, {
    schedules: containers_Checkout_data__WEBPACK_IMPORTED_MODULE_4__["default"]
  })),
      state = _useReducer[0],
      dispatch = _useReducer[1]; // console.log(state, 'profile provider state');


  return __jsx(_profile_context__WEBPACK_IMPORTED_MODULE_5__["ProfileContext"].Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 5
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=profile.js.dd1a8ff0d226a1e1bdd7.hot-update.js.map