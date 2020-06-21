webpackHotUpdate("static/development/pages/home.js",{

/***/ "./components/SearchBox/SearchBox.style.tsx":
/*!**************************************************!*\
  !*** ./components/SearchBox/SearchBox.style.tsx ***!
  \**************************************************/
/*! exports provided: CurrentType, SearchResultWrapper, ItemWrapper, SubmenuHeading, SearchBox, SearchInputWrapper, SearchButton, SearchBoxWrapper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentType", function() { return CurrentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultWrapper", function() { return SearchResultWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemWrapper", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmenuHeading", function() { return SubmenuHeading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBox", function() { return SearchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputWrapper", function() { return SearchInputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchButton", function() { return SearchButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBoxWrapper", function() { return SearchBoxWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "../../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styled-system/theme-get */ "../../node_modules/@styled-system/theme-get/dist/index.esm.js");


var SearchWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])("div").withConfig({
  displayName: "SearchBoxstyle__SearchWrapper",
  componentId: "sc-1nej5as-0"
})(["position:relative;width:54%;"]);
var CurrentType = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].span.withConfig({
  displayName: "SearchBoxstyle__CurrentType",
  componentId: "sc-1nej5as-1"
})(["font-family:", ";font-size:", "px;color:", ";line-height:38px;font-weight:700;padding:0 15px;background-color:", ";border-radius:6px;margin-left:5px;white-space:nowrap;"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontFamily.0", "sans-serif"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.1", "13"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.dark", "#fed700"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.lightColor", "#f7f7f7"));
var SearchResultWrapper = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])("ul").withConfig({
  displayName: "SearchBoxstyle__SearchResultWrapper",
  componentId: "sc-1nej5as-2"
})(["box-sizing:border-box;position:absolute;background-color:#fff;z-index:10;width:100%;list-style-type:none;border-radius:0 0 3px 3px;padding:0;width:100%;margin:4px 0 0;padding-bottom:10px;box-shadow:0 3px 10px rgba(0,0,0,0.16);opacity:1;transition:opacity ease-in-out 500ms;"]);
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].li.withConfig({
  displayName: "SearchBoxstyle__ItemWrapper",
  componentId: "sc-1nej5as-3"
})(["padding:0.7rem 1.5rem;cursor:pointer;font-family:", ";font-size:", "px;font-weight:", ";color:", ";&:hover{background-color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontFamily.0", "sans-serif"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontWeights.3", "400"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkBold", "#0D1136"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.lightBg", "#f4f4f4"));
var SubmenuHeading = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "SearchBoxstyle__SubmenuHeading",
  componentId: "sc-1nej5as-4"
})(["display:flex;align-items:center;justify-content:space-between;padding:1.25rem 1.5rem 0.5rem;h3{font-size:", "px;font-family:", ";font-weight:", ";margin:0;}button{background-color:transparent;border:0;outline:0;font-family:", ";font-size:", "px;font-weight:", ";color:", ";box-shadow:none;cursor:pointer;padding:0;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontFamily.0", "sans-serif"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontWeights.6", "700"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontFamily.0", "sans-serif"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontWeights.3", "400"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkBold", "#0D1136"));
var SearchBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "SearchBoxstyle__SearchBox",
  componentId: "sc-1nej5as-5"
})(["flex-grow:1;font-size:", "px;color:", ";border:0;padding:0 20px;background-color:#ffffff;margin-right:-1px;height:48px;&:focus{outline:0;}&::-webkit-input-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}&:-moz-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}&::-moz-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}&:-ms-input-placeholder{font-size:", "px;color:", ";white-space:nowrap;text-overflow:ellipsis;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkRegular", "#77798C"));
var SearchInputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "SearchBoxstyle__SearchInputWrapper",
  componentId: "sc-1nej5as-6"
})(["width:100%;form{display:flex;flex-direction:row;align-items:center;width:100%;height:100%;border-radius:6px;background-color:#ffffff;overflow:hidden;white-space:nowrap;}&.bordered{border:1px solid ", ";border-radius:6px;}.searchIcon{cursor:pointer;padding:0 15px;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.borderColor", "#E6E6E6"));
var SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "SearchBoxstyle__SearchButton",
  componentId: "sc-1nej5as-7"
})(["background-color:", ";font-size:", "px;font-family:", ";font-weight:700;color:#ffffff;display:flex;height:48px;align-items:center;border:0;outline:0;padding-left:30px;padding-right:30px;cursor:pointer;flex-shrink:0;display:flex;align-items:center;.buttonText{padding-left:10px;}span{display:flex;}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.dark", "#235789"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontFamily.0", "sans-serif"));
var SearchBoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "SearchBoxstyle__SearchBoxWrapper",
  componentId: "sc-1nej5as-8"
})(["border:0;width:100%;opacity:1;transition:width ease-in-out 500ms,opacity ease-in-out 500ms;height:100%;flex-grow:1;font-size:", "px;color:", ";border:none;border-radius:6px 6px 6px 6px;display:flex;align-items:center;justify-content:space-around;&.hideType{", "{display:none;}}&.collapsed{width:200px;background-color:#f7f7f7;border-radius:5px;flex-grow:0;transition:all ease-in-out 500ms;position:absolute;top:0;right:0;", "{border:1px solid transparent;border-radius:5px;}form,input{background-color:#f7f7f7;padding-left:0 !important;width:100%;&::-webkit-input-placeholder{font-size:", "px;color:", ";}&:-moz-placeholder{font-size:", "px;color:", ";}&::-moz-placeholder{font-size:", "px;color:", ";}&:-ms-input-placeholder{font-size:", "px;color:", ";}}}&.expanded{width:600px;position:absolute;top:0;right:0;transition:all ease-in-out 500ms;", "{border:1px solid ", ";border-radius:5px;}form,input{width:100%;padding-left:0 !important;&::-webkit-input-placeholder{font-size:", "px;color:", ";}&:-moz-placeholder{font-size:", "px;color:", ";}&::-moz-placeholder{font-size:", "px;color:", ";}&:-ms-input-placeholder{font-size:", "px;color:", ";}}}&.minimal{form,input{width:100%;padding-left:0 !important;}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.2", "15"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.darkRegular", "#77798C"), CurrentType, SearchInputWrapper, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), SearchInputWrapper, Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colors.borderColor", "#E6E6E6"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("fontSizes.3", "16"), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])("colorsdarkRegular", "#77798C"));
/* harmony default export */ __webpack_exports__["default"] = (SearchWrapper);

/***/ })

})
//# sourceMappingURL=home.js.65a11df6789ca69f5d18.hot-update.js.map