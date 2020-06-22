webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Meta */ \"./components/Meta/index.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ \"./components/Header/styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/components/Header/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Header = function Header(_ref) {\n  _s();\n\n  var page = _ref.page;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('inicio'),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var menu = [{\n    name: \"inicio\",\n    text: \"início\",\n    active: page === \"inicio\" ? true : false,\n    link: \"/\"\n  }, {\n    name: \"blog\",\n    text: \"blog\",\n    active: page === \"blog\" ? true : false,\n    link: \"/blog\"\n  }, {\n    name: \"portfolio\",\n    text: \"portfólio\",\n    active: page === \"portfolio\" ? true : false,\n    link: \"/portfolio\"\n  }, {\n    name: \"servicos\",\n    text: \"serviços\",\n    active: page === \"servicos\" ? true : false,\n    link: \"/servicos\"\n  }, {\n    name: \"precos\",\n    text: \"preços\",\n    active: page === \"precos\" ? true : false,\n    link: \"/precos\"\n  }, {\n    name: \"contato\",\n    text: \"contato\",\n    active: page === \"contato\" ? true : false,\n    link: \"/contato\"\n  }];\n\n  function handleItemClick(page) {\n    alert(page);\n    setActiveItem(page);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, \"Prazer, Cuby!\"), __jsx(_Meta__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"Content960px\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }\n  }, page === \"blog\" ? __jsx(\"img\", {\n    src: \"/assets/images/logo_blog.svg\",\n    onClick: function onClick() {\n      return handleItemClick('blog');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 18\n    }\n  }) : __jsx(\"img\", {\n    src: \"/assets/images/logo_web.svg\",\n    onClick: function onClick() {\n      return handleItemClick('inicio');\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 18\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"MenuWeb\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, menu.map(function (item) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      key: item.name,\n      href: item.link,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 21\n      }\n    }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"MenuItem\"], {\n      key: item.name,\n      active: item.active,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 23\n      }\n    }, item.text));\n  })), __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__[\"MenuMobile\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 13\n    }\n  }))));\n};\n\n_s(Header, \"bO95gV3SUy8dHgUNDNf0AIiax4U=\");\n\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3g/MTliZiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJwYWdlIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsIm1lbnUiLCJuYW1lIiwidGV4dCIsImFjdGl2ZSIsImxpbmsiLCJoYW5kbGVJdGVtQ2xpY2siLCJhbGVydCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQSxJQUFNQSxNQUE0QixHQUFHLFNBQS9CQSxNQUErQixPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDLFFBQUQsQ0FGRztBQUFBLE1BRXhDQyxVQUZ3QztBQUFBLE1BRTVCQyxhQUY0Qjs7QUFHL0MsTUFBTUMsSUFBSSxHQUFHLENBQ1g7QUFDRUMsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFLFFBRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsUUFBUCxHQUFrQixJQUFsQixHQUF5QixLQUhuQztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQURXLEVBT1g7QUFDRUgsUUFBSSxFQUFFLE1BRFI7QUFFRUMsUUFBSSxFQUFFLE1BRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsTUFBUCxHQUFnQixJQUFoQixHQUF1QixLQUhqQztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQVBXLEVBYVg7QUFDRUgsUUFBSSxFQUFFLFdBRFI7QUFFRUMsUUFBSSxFQUFFLFdBRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsV0FBUCxHQUFxQixJQUFyQixHQUE0QixLQUh0QztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQWJXLEVBbUJYO0FBQ0VILFFBQUksRUFBRSxVQURSO0FBRUVDLFFBQUksRUFBRSxVQUZSO0FBR0VDLFVBQU0sRUFBRVAsSUFBSSxLQUFHLFVBQVAsR0FBb0IsSUFBcEIsR0FBMkIsS0FIckM7QUFJRVEsUUFBSSxFQUFFO0FBSlIsR0FuQlcsRUF5Qlg7QUFDRUgsUUFBSSxFQUFFLFFBRFI7QUFFRUMsUUFBSSxFQUFFLFFBRlI7QUFHRUMsVUFBTSxFQUFFUCxJQUFJLEtBQUcsUUFBUCxHQUFrQixJQUFsQixHQUF5QixLQUhuQztBQUlFUSxRQUFJLEVBQUU7QUFKUixHQXpCVyxFQStCWDtBQUNFSCxRQUFJLEVBQUUsU0FEUjtBQUVFQyxRQUFJLEVBQUUsU0FGUjtBQUdFQyxVQUFNLEVBQUVQLElBQUksS0FBRyxTQUFQLEdBQW1CLElBQW5CLEdBQTBCLEtBSHBDO0FBSUVRLFFBQUksRUFBRTtBQUpSLEdBL0JXLENBQWI7O0FBd0NBLFdBQVNDLGVBQVQsQ0FBeUJULElBQXpCLEVBQXVDO0FBQ3JDVSxTQUFLLENBQUNWLElBQUQsQ0FBTDtBQUNBRyxpQkFBYSxDQUFDSCxJQUFELENBQWI7QUFDRDs7QUFFRCxTQUNFLG1FQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlBLElBQUksS0FBRyxNQUFQLEdBQ0s7QUFBSyxPQUFHLEVBQUMsOEJBQVQ7QUFBd0MsV0FBTyxFQUFFO0FBQUEsYUFBTVMsZUFBZSxDQUFDLE1BQUQsQ0FBckI7QUFBQSxLQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREwsR0FFSztBQUFLLE9BQUcsRUFBQyw2QkFBVDtBQUF1QyxXQUFPLEVBQUU7QUFBQSxhQUFNQSxlQUFlLENBQUMsUUFBRCxDQUFyQjtBQUFBLEtBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKVCxFQU1NLE1BQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJTCxJQUFJLENBQUNPLEdBQUwsQ0FBUyxVQUFBQyxJQUFJO0FBQUEsV0FDWCxNQUFDLGdEQUFEO0FBQ0UsU0FBRyxFQUFFQSxJQUFJLENBQUNQLElBRFo7QUFFRSxVQUFJLEVBQUVPLElBQUksQ0FBQ0osSUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BR0UsTUFBQyxnREFBRDtBQUNFLFNBQUcsRUFBRUksSUFBSSxDQUFDUCxJQURaO0FBRUUsWUFBTSxFQUFFTyxJQUFJLENBQUNMLE1BRmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUlHSyxJQUFJLENBQUNOLElBSlIsQ0FIRixDQURXO0FBQUEsR0FBYixDQUZKLENBTk4sRUF1QkksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJKLENBREYsQ0FMRixDQURGO0FBbUNELENBbkZEOztHQUFNUCxNOztLQUFBQSxNO0FBcUZTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBNZXRhIGZyb20gJy4uL01ldGEnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgeyBDb250YWluZXIsIENvbnRlbnQ5NjBweCwgTWVudVdlYiwgTWVudU1vYmlsZSwgTWVudUl0ZW0gfSBmcm9tICcuL3N0eWxlcyc7XG5cbmludGVyZmFjZSBQcm9wSGVhZGVyIHtcbiAgcGFnZTogc3RyaW5nXG59XG5cbmNvbnN0IEhlYWRlcjogUmVhY3QuRkM8UHJvcEhlYWRlcj4gPSAoe3BhZ2V9KSA9PiB7XG5cbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGUoJ2luaWNpbycpO1xuICBjb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiaW5pY2lvXCIsXG4gICAgICB0ZXh0OiBcImluw61jaW9cIixcbiAgICAgIGFjdGl2ZTogcGFnZT09PVwiaW5pY2lvXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImJsb2dcIixcbiAgICAgIHRleHQ6IFwiYmxvZ1wiLFxuICAgICAgYWN0aXZlOiBwYWdlPT09XCJibG9nXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvYmxvZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJwb3J0Zm9saW9cIixcbiAgICAgIHRleHQ6IFwicG9ydGbDs2xpb1wiLFxuICAgICAgYWN0aXZlOiBwYWdlPT09XCJwb3J0Zm9saW9cIiA/IHRydWUgOiBmYWxzZSAsXG4gICAgICBsaW5rOiBcIi9wb3J0Zm9saW9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwic2Vydmljb3NcIixcbiAgICAgIHRleHQ6IFwic2VydmnDp29zXCIsXG4gICAgICBhY3RpdmU6IHBhZ2U9PT1cInNlcnZpY29zXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvc2Vydmljb3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwicHJlY29zXCIsXG4gICAgICB0ZXh0OiBcInByZcOnb3NcIixcbiAgICAgIGFjdGl2ZTogcGFnZT09PVwicHJlY29zXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvcHJlY29zXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcImNvbnRhdG9cIixcbiAgICAgIHRleHQ6IFwiY29udGF0b1wiLFxuICAgICAgYWN0aXZlOiBwYWdlPT09XCJjb250YXRvXCIgPyB0cnVlIDogZmFsc2UgLFxuICAgICAgbGluazogXCIvY29udGF0b1wiLFxuICAgIH0sXG4gIF07XG5cblxuICBmdW5jdGlvbiBoYW5kbGVJdGVtQ2xpY2socGFnZTogc3RyaW5nKSB7XG4gICAgYWxlcnQocGFnZSk7XG4gICAgc2V0QWN0aXZlSXRlbShwYWdlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UHJhemVyLCBDdWJ5ITwvdGl0bGU+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29udGFpbmVyPlxuICAgICAgICA8Q29udGVudDk2MHB4PlxuICAgICAgICAgICAgeyBcbiAgICAgICAgICAgIHBhZ2U9PT1cImJsb2dcIlxuICAgICAgICAgICAgICA/ICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2xvZ29fYmxvZy5zdmdcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJ2Jsb2cnKX0gLz5cbiAgICAgICAgICAgICAgOiAgPGltZyBzcmM9XCIvYXNzZXRzL2ltYWdlcy9sb2dvX3dlYi5zdmdcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soJ2luaWNpbycpfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8TWVudVdlYj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBtZW51Lm1hcChpdGVtPT4gKFxuICAgICAgICAgICAgICAgICAgICA8TGluayBcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9PlxuICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5uYW1lfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZT17aXRlbS5hY3RpdmV9XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9NZW51V2ViPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8TWVudU1vYmlsZT48L01lbnVNb2JpbGU+IFxuICAgICAgICA8L0NvbnRlbnQ5NjBweD5cbiAgICAgIDwvQ29udGFpbmVyPiBcbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/index.tsx\n");

/***/ })

})