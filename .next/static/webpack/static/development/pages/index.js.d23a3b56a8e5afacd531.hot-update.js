webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Meta */ \"./components/Meta/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/components/Header/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var page = _ref.page;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('inicio'),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var menu = [{\n    name: \"inicio\",\n    text: \"início\",\n    active: page === \"inicio\" ? true : false,\n    link: \"/\"\n  }, {\n    name: \"blog\",\n    text: \"blog\",\n    active: page === \"blog\" ? true : false,\n    link: \"/Blog/\"\n  }, {\n    name: \"portfolio\",\n    text: \"portfólio\",\n    active: page === \"portfolio\" ? true : false,\n    link: \"/Blog/?cat=portfolio\"\n  }, {\n    name: \"servicos\",\n    text: \"serviços\",\n    active: page === \"servicos\" ? true : false,\n    link: \"/Servicos/\"\n  }, {\n    name: \"contato\",\n    text: \"contato\",\n    active: page === \"contato\" ? true : false,\n    link: \"/Contato/\"\n  }];\n\n  function handleItemClick(page) {\n    alert(page);\n    setActiveItem(page);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }\n  }, \"Prazer, Cuby!\"), __jsx(_Meta__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 9\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Content960px\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }\n  }, __jsx(\"img\", {\n    src: \"/assets/images/logo_web.svg\",\n    onClick: function onClick() {\n      return handleItemClick('inicio');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: item.link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"MenuWeb\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, menu.map(function (item) {\n    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"MenuItem\"], {\n      key: item.name,\n      active: item.active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 21\n      }\n    }, item.text);\n  }))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"MenuMobile\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(Header, \"bO95gV3SUy8dHgUNDNf0AIiax4U=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/MTliZiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsIm1lbnUiLCJuYW1lIiwidGV4dCIsImFjdGl2ZSIsImxpbmsiLCJoYW5kbGVJdGVtQ2xpY2siLCJhbGVydCIsIml0ZW0iLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxNQUE0QixHQUFHLFNBQS9CQSxNQUErQixPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDLFFBQUQsQ0FGRztBQUFBLE1BRXhDQyxVQUZ3QztBQUFBLE1BRTVCQyxhQUY0Qjs7QUFHL0MsTUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFDRUMsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFLFFBRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsUUFBUCxHQUFrQixJQUFsQixHQUF5QixLQUhuQztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQURXLEVBT1g7QUFDRUgsUUFBSSxFQUFFLE1BRFI7QUFFRUMsUUFBSSxFQUFFLE1BRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsTUFBUCxHQUFnQixJQUFoQixHQUF1QixLQUhqQztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQVBXLEVBYVg7QUFDRUgsUUFBSSxFQUFFLFdBRFI7QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsV0FBUCxHQUFxQixJQUFyQixHQUE0QixLQUh0QztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQWJXLEVBbUJYO0FBQ0VILFFBQUksRUFBRSxVQURSO0FBRUVDLFFBQUksRUFBRSxVQUZSO0FBR0VDLFVBQU0sRUFBRVAsSUFBSSxLQUFHLFVBQVAsR0FBb0IsSUFBcEIsR0FBMkIsS0FIckM7QUFJRVEsUUFBSSxFQUFFO0FBSlIsR0FuQlcsRUF5Qlg7QUFDRUgsUUFBSSxFQUFFLFNBRFI7QUFFRUMsUUFBSSxFQUFFLFNBRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsU0FBUCxHQUFtQixJQUFuQixHQUEwQixLQUhwQztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQXpCVyxDQUFiOztBQWtDQSxXQUFTQyxlQUFULENBQXlCVCxJQUF6QixFQUF1QztBQUNyQ1UsU0FBSyxDQUFDVixJQUFELENBQUw7QUFDQUcsaUJBQWEsQ0FBQ0gsSUFBRCxDQUFiO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssT0FBRyxFQUFDLDZCQUFUO0FBQXVDLFdBQU8sRUFBRTtBQUFBLGFBQU1TLGVBQWUsQ0FBQyxRQUFELENBQXJCO0FBQUEsS0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBRUUsSUFBSSxDQUFDSCxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlKLElBQUksQ0FBQ1EsR0FBTCxDQUFTLFVBQUFELElBQUk7QUFBQSxXQUNYLE1BQUMsZ0RBQUQ7QUFDRSxTQUFHLEVBQUVBLElBQUksQ0FBQ04sSUFEWjtBQUVFLFlBQU0sRUFBRU0sSUFBSSxDQUFDSixNQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FJR0ksSUFBSSxDQUFDTCxJQUpSLENBRFc7QUFBQSxHQUFiLENBRkosQ0FERixDQUZKLEVBZ0JJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCSixDQURGLENBTEYsQ0FERjtBQTRCRCxDQXRFRDs7R0FBTVAsTTs7S0FBQUEsTTtBQXdFU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTWV0YSBmcm9tICcuLi9NZXRhJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBDb250ZW50OTYwcHgsIE1lbnVXZWIsIE1lbnVNb2JpbGUsIE1lbnVJdGVtIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG5pbnRlcmZhY2UgUHJvcEhlYWRlciB7XG4gIHBhZ2U6IHN0cmluZ1xufVxuXG5jb25zdCBIZWFkZXI6IFJlYWN0LkZDPFByb3BIZWFkZXI+ID0gKHtwYWdlfSkgPT4ge1xuXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKCdpbmljaW8nKTtcbiAgY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcImluaWNpb1wiLFxuICAgICAgdGV4dDogXCJpbsOtY2lvXCIsXG4gICAgICBhY3RpdmU6IHBhZ2U9PT1cImluaWNpb1wiID8gdHJ1ZSA6IGZhbHNlICxcbiAgICAgIGxpbms6IFwiL1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJibG9nXCIsXG4gICAgICB0ZXh0OiBcImJsb2dcIixcbiAgICAgIGFjdGl2ZTogcGFnZT09PVwiYmxvZ1wiID8gdHJ1ZSA6IGZhbHNlICxcbiAgICAgIGxpbms6IFwiL0Jsb2cvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcInBvcnRmb2xpb1wiLFxuICAgICAgdGV4dDogXCJwb3J0ZsOzbGlvXCIsXG4gICAgICBhY3RpdmU6IHBhZ2U9PT1cInBvcnRmb2xpb1wiID8gdHJ1ZSA6IGZhbHNlICxcbiAgICAgIGxpbms6IFwiL0Jsb2cvP2NhdD1wb3J0Zm9saW9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2Vydmljb3NcIixcbiAgICAgIHRleHQ6IFwic2VydmnDp29zXCIsXG4gICAgICBhY3RpdmU6IHBhZ2U9PT1cInNlcnZpY29zXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvU2Vydmljb3MvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNvbnRhdG9cIixcbiAgICAgIHRleHQ6IFwiY29udGF0b1wiLFxuICAgICAgYWN0aXZlOiBwYWdlPT09XCJjb250YXRvXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvQ29udGF0by9cIixcbiAgICB9LFxuICBdO1xuXG5cbiAgZnVuY3Rpb24gaGFuZGxlSXRlbUNsaWNrKHBhZ2U6IHN0cmluZykge1xuICAgIGFsZXJ0KHBhZ2UpO1xuICAgIHNldEFjdGl2ZUl0ZW0ocGFnZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlByYXplciwgQ3VieSE8L3RpdGxlPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPENvbnRlbnQ5NjBweD5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2Fzc2V0cy9pbWFnZXMvbG9nb193ZWIuc3ZnXCIgb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKCdpbmljaW8nKX0gLz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ubGlua30+XG4gICAgICAgICAgICAgIDxNZW51V2ViPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG1lbnUubWFwKGl0ZW09PiAoXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX0gXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlPXtpdGVtLmFjdGl2ZX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9NZW51V2ViPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPE1lbnVNb2JpbGU+PC9NZW51TW9iaWxlPiBcbiAgICAgICAgPC9Db250ZW50OTYwcHg+XG4gICAgICA8L0NvbnRhaW5lcj4gXG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

})