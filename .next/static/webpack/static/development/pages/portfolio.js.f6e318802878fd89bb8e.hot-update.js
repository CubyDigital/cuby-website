webpackHotUpdate("static/development/pages/portfolio.js",{

/***/ "./pages/portfolio/index.tsx":
/*!***********************************!*\
  !*** ./pages/portfolio/index.tsx ***!
  \***********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ \"./pages/portfolio/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/pages/portfolio/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n //** TO DO LIST: Menu flutuante com as categorias dos posts (curso, empreendedorismo, etc...) */\n\nvar Protfolio = function Protfolio(_ref) {\n  var allPosts = _ref.allPosts;\n  var filteredPosts = allPosts.filter(function (item) {\n    return item.categories.includes('portfólio');\n  });\n  var posts = filteredPosts.slice(0, 9);\n  var morePosts = filteredPosts.slice(10);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    page: \"portfolio\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__[\"Cards\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      key: post.slug,\n      href: \"blog/posts/\".concat(post.slug),\n      passHref: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: \"blog/posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      style: {\n        maxWidth: 300\n      },\n      src: post.coverImage,\n      alt: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 23\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"data\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 23\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__[\"parseISO\"])(post.date), \"d 'de' LLLL '/' yyyy\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_3__[\"ptBR\"]\n    }), post.categories.map(function (item) {\n      return __jsx(\"span\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 27\n        }\n      }, item);\n    })), __jsx(\"p\", {\n      className: \"lead\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 23\n      }\n    }, post.lead))));\n  }))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 7\n    }\n  }));\n};\n\n_c = Protfolio;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Protfolio);\n\nvar _c;\n\n$RefreshReg$(_c, \"Protfolio\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3J0Zm9saW8vaW5kZXgudHN4P2NiODYiXSwibmFtZXMiOlsiUHJvdGZvbGlvIiwiYWxsUG9zdHMiLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsInBvc3RzIiwic2xpY2UiLCJtb3JlUG9zdHMiLCJtYXAiLCJwb3N0Iiwic2x1ZyIsIm1heFdpZHRoIiwiY292ZXJJbWFnZSIsInRpdGxlIiwiZm9ybWF0IiwicGFyc2VJU08iLCJkYXRlIiwibG9jYWxlIiwicHRCUiIsImxlYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtDQU9BOztBQXVCQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFFekMsTUFBTUMsYUFBYSxHQUFHRCxRQUFRLENBQUNFLE1BQVQsQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUIsV0FBekIsQ0FBSjtBQUFBLEdBQXBCLENBQXRCO0FBRUEsTUFBTUMsS0FBSyxHQUFHTCxhQUFhLENBQUNNLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBZDtBQUNBLE1BQU1DLFNBQVMsR0FBR1AsYUFBYSxDQUFDTSxLQUFkLENBQW9CLEVBQXBCLENBQWxCO0FBRUEsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQVEsUUFBSSxFQUFDLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUUsTUFBQyw2Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tELEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQ7QUFBQSxXQUNQLE1BQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLElBQUksQ0FBQ0MsSUFBaEI7QUFBc0IsVUFBSSx1QkFBZ0JELElBQUksQ0FBQ0MsSUFBckIsQ0FBMUI7QUFBdUQsY0FBUSxNQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxVQUFJLHVCQUFnQkQsSUFBSSxDQUFDQyxJQUFyQixDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FEVDtBQUVFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxVQUZaO0FBR0UsU0FBRyxFQUFFSCxJQUFJLENBQUNJLEtBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0osSUFBSSxDQUFDSSxLQUFaLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUJDLHVEQUFNLENBQUNDLHlEQUFRLENBQUNOLElBQUksQ0FBQ08sSUFBTixDQUFULDBCQUE4QztBQUFFQyxZQUFNLEVBQUVDLG9EQUFJQTtBQUFkLEtBQTlDLENBQTNCLEVBRUVULElBQUksQ0FBQ04sVUFBTCxDQUFnQkssR0FBaEIsQ0FBb0IsVUFBQU4sSUFBSTtBQUFBLGFBQ3RCO0FBQU0sV0FBRyxFQUFFQSxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0JBLElBQWxCLENBRHNCO0FBQUEsS0FBeEIsQ0FGRixDQUZGLEVBU0U7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCTyxJQUFJLENBQUNVLElBQTFCLENBVEYsQ0FORixDQURGLENBRE87QUFBQSxHQUFWLENBREwsQ0FGRixDQUZGLEVBOEJFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQURGO0FBa0NELENBekNEOztLQUFNckIsUzs7QUEyQ1NBLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcG9ydGZvbGlvL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBwYXJzZUlTTywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXG5pbXBvcnQgeyBwdEJSIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcblxuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ2NvbXBvbmVudHMvRm9vdGVyJztcblxuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICdsaWIvYXBpJztcbmltcG9ydCBQb3N0IGZyb20gJ3R5cGVzL3Bvc3QnO1xuXG5pbXBvcnQgeyBDb250YWluZXIsIENhcmRzIH0gZnJvbSAnLi9zdHlsZXMnO1xuXG4vLyoqIFRPIERPIExJU1Q6IE1lbnUgZmx1dHVhbnRlIGNvbSBhcyBjYXRlZ29yaWFzIGRvcyBwb3N0cyAoY3Vyc28sIGVtcHJlZW5kZWRvcmlzbW8sIGV0Yy4uLikgKi9cblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2xlYWQnLFxuICAgICdjYXRlZ29yaWVzJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG5cbmNvbnN0IFByb3Rmb2xpbyA9ICh7IGFsbFBvc3RzIH06IFByb3BzKSA9PiB7XG5cbiAgY29uc3QgZmlsdGVyZWRQb3N0cyA9IGFsbFBvc3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5pbmNsdWRlcygncG9ydGbDs2xpbycpKVxuXG4gIGNvbnN0IHBvc3RzID0gZmlsdGVyZWRQb3N0cy5zbGljZSgwLDkpXG4gIGNvbnN0IG1vcmVQb3N0cyA9IGZpbHRlcmVkUG9zdHMuc2xpY2UoMTApXG4gIFxuICByZXR1cm4gKCBcbiAgICA8PlxuICAgICAgPEhlYWRlciBwYWdlPVwicG9ydGZvbGlvXCIgLz5cbiAgICAgIDxDb250YWluZXI+XG5cbiAgICAgICAgPENhcmRzPlxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5zbHVnfSBocmVmPXtgYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGFcIj57Zm9ybWF0KHBhcnNlSVNPKHBvc3QuZGF0ZSksIGBkICdkZScgTExMTCAnLycgeXl5eWAsIHsgbG9jYWxlOiBwdEJSIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuY2F0ZWdvcmllcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aXRlbX0+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj57cG9zdC5sZWFkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYXJkcz5cblxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb3Rmb2xpbztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/portfolio/index.tsx\n");

/***/ })

})