webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/SearchBox/SearchBox.tsx":
/*!********************************************!*\
  !*** ./components/SearchBox/SearchBox.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchResults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchResults */ "./components/SearchBox/SearchResults.tsx");
/* harmony import */ var _SearchBox_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBox.style */ "./components/SearchBox/SearchBox.style.tsx");
/* harmony import */ var _AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../AllSvgIcon */ "./components/AllSvgIcon.tsx");
/* harmony import */ var components_Popover_Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Popover/Popover */ "./components/Popover/Popover.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! containers/LayoutContainer/Header/Header.style */ "./containers/LayoutContainer/Header/Header.style.tsx");
var _jsxFileName = "/Volumes/Second/npm/PFE_git/packages/shop/components/SearchBox/SearchBox.tsx",
    _this = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var MenuArray = [{
  icon: __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["FruitsVegetable"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }),
  label: "Grocery"
}, {
  label: "Foods",
  icon: __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["FacialCare"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  })
}];
var LocationsArray = [{
  state: "Sousse",
  cities: ["Kalaa", "Jaouhra"]
}, {
  state: "Tunis",
  cities: ["Lac", "La fayette"]
}];
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({
  displayName: "SearchBox__Icon",
  componentId: "sc-1d3hxkm-0"
})(["min-width:16px;margin-right:10px;display:flex;align-items:center;justify-content:center;"]);

var Search = function Search(_ref) {
  var suggestions = _ref.suggestions,
      buttonText = _ref.buttonText,
      buttonIcon = _ref.buttonIcon,
      inputStyle = _ref.inputStyle,
      style = _ref.style,
      bordered = _ref.bordered,
      hideType = _ref.hideType,
      showSvg = _ref.showSvg,
      autoSuggestion = _ref.autoSuggestion,
      placeholder = _ref.placeholder,
      className = _ref.className,
      handleSearch = _ref.handleSearch,
      onClick = _ref.onClick,
      value = _ref.value,
      expand = _ref.expand,
      minimal = _ref.minimal,
      pathname = _ref.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      searchValue = _useState[0],
      setSearchValue = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggleSuggestion = _useState2[0],
      setToggleSuggestion = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      toggleSearch = _useState3[0],
      setToggleSearch = _useState3[1];

  var searchRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.addEventListener("click", handleClickOutside, false);
    return function () {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  var handleSearchInput = function handleSearchInput(event) {
    setSearchValue(event.target.value);
    setToggleSuggestion(true);
    handleSearch(event.target.value);
  };

  var ucwords = function ucwords(str) {
    var newString = str.replace(/\//g, "");
    var humanString = newString.replace(/-/g, " ");
    return (humanString + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
      return $1.toUpperCase();
    });
  };

  var setSuggestion = function setSuggestion(suggestion) {
    setSearchValue(suggestion);
    setToggleSuggestion(false);
  };

  var handleClickOutside = function handleClickOutside(event) {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSuggestion(false);
      setToggleSearch(false);
    }
  };

  var onClearBtnClick = function onClearBtnClick() {
    setSearchValue("");
  };

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    icon: __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["FruitsVegetable"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    }),
    label: "Grocery"
  }),
      activeMenu = _useState4[0],
      setActiveMenu = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    state: "Choose city",
    cities: []
  }),
      activeLocation = _useState5[0],
      setActiveLocation = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      activeCity = _useState6[0],
      setActiveCity = _useState6[1];

  var StateItem = function StateItem(item) {
    return __jsx("div", {
      className: "menu-item",
      key: item.state,
      onClick: function onClick() {
        setActiveLocation(item);
        setActiveCity(item.cities[0]);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 7
      }
    }, item.state);
  };

  var CityItem = function CityItem(item) {
    return __jsx("div", {
      className: "menu-item",
      key: item,
      onClick: function onClick() {
        return setActiveCity(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 7
      }
    }, item);
  };

  var NavItem = function NavItem(item) {
    return __jsx("span", {
      key: item.label,
      onClick: function onClick() {
        return setActiveMenu(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 7
      }
    }, item.label);
  };

  return __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 5
    }
  }, __jsx(_SearchBox_style__WEBPACK_IMPORTED_MODULE_2__["SearchBoxWrapper"], {
    className: "".concat(hideType ? "hideType" : "", " ").concat(expand === true ? toggleSearch ? "expanded" : "collapsed" : "", " ").concat(minimal === true ? "minimal" : ""),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 7
    }
  }, __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "right",
    handler: __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["SelectedType"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "menu-item",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, activeLocation.state)), __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["DropDownArrow"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 15
      }
    }, __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["MenuDown"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 17
      }
    }))),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, LocationsArray.map(StateItem)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }), __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "right",
    handler: __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["SelectedType"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 15
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, activeCity)), __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["DropDownArrow"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 15
      }
    }, __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["MenuDown"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 17
      }
    }))),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, activeLocation.cities.map(CityItem)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }), __jsx(components_Popover_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "right",
    handler: __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["SelectedType"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 15
      }
    }, __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["TypeIcon"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 17
      }
    }, activeMenu.icon), __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, activeMenu.label)), __jsx(containers_LayoutContainer_Header_Header_style__WEBPACK_IMPORTED_MODULE_6__["DropDownArrow"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 15
      }
    }, __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["MenuDown"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }
    }))),
    content: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, MenuArray.map(NavItem)),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 9
    }
  })), autoSuggestion && toggleSuggestion ? __jsx(_SearchResults__WEBPACK_IMPORTED_MODULE_1__["default"], {
    suggestions: suggestions,
    clearSearch: onClearBtnClick,
    setSuggestionValue: function setSuggestionValue(suggestion) {
      return setSuggestion(suggestion);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }) : null);
};

Search.defaultProps = {
  bordered: false,
  autoSuggestion: false,
  buttonText: "Search",
  buttonIcon: __jsx(_AllSvgIcon__WEBPACK_IMPORTED_MODULE_3__["SearchIcon"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 15
    }
  }),
  placeholder: "Search your products from here",
  inputStyle: {
    width: "100%"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=home.js.85a26506aa6ab7cde794.hot-update.js.map