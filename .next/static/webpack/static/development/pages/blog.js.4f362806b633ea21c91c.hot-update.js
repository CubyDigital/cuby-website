webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./pages/blog/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //** TO DO LIST: Menu flutuante com as categorias dos posts (curso, empreendedorismo, etc...) */\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var allPosts = _ref.allPosts;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('blog'),\n      cat = _useState[0],\n      setCat = _useState[1];\n\n  if (router.query.cat) {\n    setCat(router.query.cat.toString());\n  }\n\n  var posts = allPosts.slice(0, 9);\n  var morePosts = allPosts.slice(10);\n\n  if (cat === 'portfolio') {\n    var filteredPosts = allPosts.filter(function (item) {\n      return item.categories.includes(cat.toString());\n    });\n\n    var _posts = filteredPosts.slice(0, 9);\n\n    var _morePosts = filteredPosts.slice(10);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    page: cat,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Cards\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: post.slug,\n      href: \"blog/posts/\".concat(post.slug),\n      passHref: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      style: {\n        maxWidth: 300\n      },\n      src: post.coverImage,\n      alt: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 23\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"data\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 23\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"parseISO\"])(post.date), \"d 'de' LLLL '/' yyyy\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[\"ptBR\"]\n    }), post.categories.map(function (item) {\n      return __jsx(\"span\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 27\n        }\n      }, item);\n    })), __jsx(\"p\", {\n      className: \"lead\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 23\n      }\n    }, post.lead))));\n  }))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Blog, \"ckj7K74QA/4c+hm9df6Ku3IuxWw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LnRzeD8xZGYzIl0sIm5hbWVzIjpbIkJsb2ciLCJhbGxQb3N0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2F0Iiwic2V0Q2F0IiwicXVlcnkiLCJ0b1N0cmluZyIsInBvc3RzIiwic2xpY2UiLCJtb3JlUG9zdHMiLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwibWF4V2lkdGgiLCJjb3ZlckltYWdlIiwidGl0bGUiLCJmb3JtYXQiLCJwYXJzZUlTTyIsImRhdGUiLCJsb2NhbGUiLCJwdEJSIiwibGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FPQTs7QUF1QkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9DLGtCQUVkQyxzREFBUSxDQUFDLE1BQUQsQ0FGTTtBQUFBLE1BRTdCQyxHQUY2QjtBQUFBLE1BRXhCQyxNQUZ3Qjs7QUFJcEMsTUFBR0osTUFBTSxDQUFDSyxLQUFQLENBQWFGLEdBQWhCLEVBQXFCO0FBQ25CQyxVQUFNLENBQUNKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhRixHQUFiLENBQWlCRyxRQUFqQixFQUFELENBQU47QUFDRDs7QUFDRCxNQUFJQyxLQUFLLEdBQUdSLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBWjtBQUNBLE1BQUlDLFNBQVMsR0FBR1YsUUFBUSxDQUFDUyxLQUFULENBQWUsRUFBZixDQUFoQjs7QUFFQSxNQUFHTCxHQUFHLEtBQUcsV0FBVCxFQUFzQjtBQUNwQixRQUFJTyxhQUFhLEdBQUdYLFFBQVEsQ0FBQ1ksTUFBVCxDQUFnQixVQUFBQyxJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDQyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QlgsR0FBRyxDQUFDRyxRQUFKLEVBQXpCLENBQUo7QUFBQSxLQUFwQixDQUFwQjs7QUFDQSxRQUFJQyxNQUFLLEdBQUdHLGFBQWEsQ0FBQ0YsS0FBZCxDQUFvQixDQUFwQixFQUFzQixDQUF0QixDQUFaOztBQUNBLFFBQUlDLFVBQVMsR0FBR0MsYUFBYSxDQUFDRixLQUFkLENBQW9CLEVBQXBCLENBQWhCO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQVEsUUFBSSxFQUFFTCxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSSxLQUFLLENBQUNRLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDUCxNQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQWhCO0FBQXNCLFVBQUksdUJBQWdCRCxJQUFJLENBQUNDLElBQXJCLENBQTFCO0FBQXVELGNBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FEVDtBQUVFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxVQUZaO0FBR0UsU0FBRyxFQUFFSCxJQUFJLENBQUNJLEtBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0osSUFBSSxDQUFDSSxLQUFaLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUJDLHVEQUFNLENBQUNDLHlEQUFRLENBQUNOLElBQUksQ0FBQ08sSUFBTixDQUFULDBCQUE4QztBQUFFQyxZQUFNLEVBQUVDLG9EQUFJQTtBQUFkLEtBQTlDLENBQTNCLEVBRUVULElBQUksQ0FBQ0gsVUFBTCxDQUFnQkUsR0FBaEIsQ0FBb0IsVUFBQUgsSUFBSTtBQUFBLGFBQ3RCO0FBQU0sV0FBRyxFQUFFQSxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0JBLElBQWxCLENBRHNCO0FBQUEsS0FBeEIsQ0FGRixDQUZGLEVBU0U7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCSSxJQUFJLENBQUNVLElBQTFCLENBVEYsQ0FORixDQURGLENBRE87QUFBQSxHQUFWLENBREwsQ0FGRixDQUZGLEVBOEJFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQURGO0FBa0NELENBbEREOztHQUFNNUIsSTtVQUNXRyxxRDs7O0tBRFhILEk7O0FBb0RTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBwdEJSIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICdsaWIvYXBpJztcbmltcG9ydCBQb3N0IGZyb20gJ3R5cGVzL3Bvc3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIENhcmRzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4vLyoqIFRPIERPIExJU1Q6IE1lbnUgZmx1dHVhbnRlIGNvbSBhcyBjYXRlZ29yaWFzIGRvcyBwb3N0cyAoY3Vyc28sIGVtcHJlZW5kZWRvcmlzbW8sIGV0Yy4uLikgKi9cblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2xlYWQnLFxuICAgICdjYXRlZ29yaWVzJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG5cbmNvbnN0IEJsb2cgPSAoeyBhbGxQb3N0cyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2NhdCwgc2V0Q2F0XSA9IHVzZVN0YXRlKCdibG9nJyk7XG5cbiAgaWYocm91dGVyLnF1ZXJ5LmNhdCkge1xuICAgIHNldENhdChyb3V0ZXIucXVlcnkuY2F0LnRvU3RyaW5nKCkpO1xuICB9XG4gIHZhciBwb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDAsOSlcbiAgdmFyIG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEwKVxuXG4gIGlmKGNhdD09PSdwb3J0Zm9saW8nKSB7XG4gICAgbGV0IGZpbHRlcmVkUG9zdHMgPSBhbGxQb3N0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0LnRvU3RyaW5nKCkpKTtcbiAgICBsZXQgcG9zdHMgPSBmaWx0ZXJlZFBvc3RzLnNsaWNlKDAsOSlcbiAgICBsZXQgbW9yZVBvc3RzID0gZmlsdGVyZWRQb3N0cy5zbGljZSgxMClcbiAgfVxuXG4gIHJldHVybiAoIFxuICAgIDw+XG4gICAgICA8SGVhZGVyIHBhZ2U9e2NhdH0gLz5cbiAgICAgIDxDb250YWluZXI+XG5cbiAgICAgICAgPENhcmRzPlxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5zbHVnfSBocmVmPXtgYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0YVwiPntmb3JtYXQocGFyc2VJU08ocG9zdC5kYXRlKSwgYGQgJ2RlJyBMTExMICcvJyB5eXl5YCwgeyBsb2NhbGU6IHB0QlIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpdGVtfT57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPntwb3N0LmxlYWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0NhcmRzPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})