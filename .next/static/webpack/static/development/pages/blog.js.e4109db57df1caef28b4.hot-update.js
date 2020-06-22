webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./pages/blog/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/pages/blog/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n //** TO DO LIST: Menu flutuante com as categorias dos posts (curso, empreendedorismo, etc...) */\n\nvar Blog = function Blog(_ref) {\n  var allPosts = _ref.allPosts;\n  var posts = allPosts.slice(0, 9);\n  var morePosts = allPosts.slice(10);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    page: \"blog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__[\"Cards\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      key: post.slug,\n      href: \"blog/posts/\".concat(post.slug),\n      passHref: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: \"blog/posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      style: {\n        maxWidth: 300\n      },\n      src: post.coverImage,\n      alt: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 23\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"data\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 23\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"parseISO\"])(post.date), \"dd'/'MM'/'yyyy\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__[\"ptBR\"]\n    }), post.categories.map(function (item) {\n      return __jsx(\"span\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 27\n        }\n      }, item);\n    })), __jsx(\"p\", {\n      className: \"lead\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 23\n      }\n    }, post.lead))));\n  }))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LnRzeD8xZGYzIl0sIm5hbWVzIjpbIkJsb2ciLCJhbGxQb3N0cyIsInBvc3RzIiwic2xpY2UiLCJtb3JlUG9zdHMiLCJtYXAiLCJwb3N0Iiwic2x1ZyIsIm1heFdpZHRoIiwiY292ZXJJbWFnZSIsInRpdGxlIiwiZm9ybWF0IiwicGFyc2VJU08iLCJkYXRlIiwibG9jYWxlIiwicHRCUiIsImNhdGVnb3JpZXMiLCJpdGVtIiwibGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0NBT0E7O0FBdUJBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQXlCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUVwQyxNQUFNQyxLQUFLLEdBQUdELFFBQVEsQ0FBQ0UsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBZDtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsUUFBUSxDQUFDRSxLQUFULENBQWUsRUFBZixDQUFsQjtBQUVBLFNBQ0UsbUVBQ0UsTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLRCxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDUCxNQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQWhCO0FBQXNCLFVBQUksdUJBQWdCRCxJQUFJLENBQUNDLElBQXJCLENBQTFCO0FBQXVELGNBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSx1QkFBZ0JELElBQUksQ0FBQ0MsSUFBckIsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BRFQ7QUFFRSxTQUFHLEVBQUVGLElBQUksQ0FBQ0csVUFGWjtBQUdFLFNBQUcsRUFBRUgsSUFBSSxDQUFDSSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9KLElBQUksQ0FBQ0ksS0FBWixDQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCQyx1REFBTSxDQUFDQyx5REFBUSxDQUFDTixJQUFJLENBQUNPLElBQU4sQ0FBVCxvQkFBd0M7QUFBRUMsWUFBTSxFQUFFQyxvREFBSUE7QUFBZCxLQUF4QyxDQUEzQixFQUVFVCxJQUFJLENBQUNVLFVBQUwsQ0FBZ0JYLEdBQWhCLENBQW9CLFVBQUFZLElBQUk7QUFBQSxhQUN0QjtBQUFNLFdBQUcsRUFBRUEsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtCQSxJQUFsQixDQURzQjtBQUFBLEtBQXhCLENBRkYsQ0FGRixFQVNFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQlgsSUFBSSxDQUFDWSxJQUExQixDQVRGLENBTkYsQ0FERixDQURPO0FBQUEsR0FBVixDQURMLENBRkYsQ0FGRixFQThCRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsQ0FERjtBQWtDRCxDQXZDRDs7S0FBTWxCLEk7O0FBeUNTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBwdEJSIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICdsaWIvYXBpJztcbmltcG9ydCBQb3N0IGZyb20gJ3R5cGVzL3Bvc3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIENhcmRzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4vLyoqIFRPIERPIExJU1Q6IE1lbnUgZmx1dHVhbnRlIGNvbSBhcyBjYXRlZ29yaWFzIGRvcyBwb3N0cyAoY3Vyc28sIGVtcHJlZW5kZWRvcmlzbW8sIGV0Yy4uLikgKi9cblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2xlYWQnLFxuICAgICdjYXRlZ29yaWVzJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG5cbmNvbnN0IEJsb2cgPSAoeyBhbGxQb3N0cyB9OiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IHBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMCw5KVxuICBjb25zdCBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxMClcblxuICByZXR1cm4gKCBcbiAgICA8PlxuICAgICAgPEhlYWRlciBwYWdlPVwiYmxvZ1wiIC8+XG4gICAgICA8Q29udGFpbmVyPlxuXG4gICAgICAgIDxDYXJkcz5cbiAgICAgICAgICAgIHtwb3N0cy5tYXAoKHBvc3QpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBrZXk9e3Bvc3Quc2x1Z30gaHJlZj17YGJsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfSA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRhXCI+e2Zvcm1hdChwYXJzZUlTTyhwb3N0LmRhdGUpLCBgZGQnLydNTScvJ3l5eXlgLCB7IGxvY2FsZTogcHRCUiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+e3Bvc3QubGVhZH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2FyZHM+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})