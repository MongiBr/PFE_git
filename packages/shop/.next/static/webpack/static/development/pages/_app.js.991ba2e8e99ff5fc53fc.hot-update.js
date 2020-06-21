webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./contexts/search/search.provider.tsx":
/*!*********************************************!*\
  !*** ./contexts/search/search.provider.tsx ***!
  \*********************************************/
/*! exports provided: SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "../../node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _search_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.context */ "./contexts/search/search.context.tsx");


var _this = undefined,
    _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/contexts/search/search.provider.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function reducer(state, action) {
  switch (action.type) {
    case "UPDATE":
      return _objectSpread({}, state, {}, action.payload);

    case "UPDATE_LOCATION":
      return _objectSpread({}, state, {}, action.payload);

    case "RESET":
      return {
        page: 1,
        search: {
          state: "",
          cities: []
        }
      };

    default:
      return state;
  }
}

var SearchProvider = function SearchProvider(_ref) {
  var children = _ref.children,
      query = _ref.query;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, _objectSpread({}, query, {
    page: 1,
    search: {
      state: "",
      cities: []
    }
  })),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var updateSearch = function updateSearch(search) {
    console.log(search);
    dispatch({
      type: "UPDATE_LOCATION",
      payload: search
    });
    var serializedState = JSON.stringify(search);
    localStorage.setItem("search", serializedState);
  };
  /*  useEffect(() => {
    const search = localStorage.getItem("search");
    console.log(search);
     if (search || search === "undefined" || search === "null") {
      updateSearch(search);
    } else {
      updateSearch("e");
    }
    console.log(search);
  }, []);*/


  return __jsx(_search_context__WEBPACK_IMPORTED_MODULE_2__["SearchContext"].Provider, {
    value: {
      state: state,
      dispatch: dispatch,
      updateSearch: updateSearch
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, children);
};

/***/ })

})
//# sourceMappingURL=_app.js.991ba2e8e99ff5fc53fc.hot-update.js.map