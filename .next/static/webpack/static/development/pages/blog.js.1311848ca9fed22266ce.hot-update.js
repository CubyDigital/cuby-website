webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./pages/blog/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //** TO DO LIST: Menu flutuante com as categorias dos posts (curso, empreendedorismo, etc...) */\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var allPosts = _ref.allPosts;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('blog'),\n      cat = _useState[0],\n      setCat = _useState[1];\n\n  if (router.query) {\n    setCat(router.query.cat.toString());\n  }\n\n  var posts = allPosts.slice(0, 9);\n  var morePosts = allPosts.slice(10);\n\n  if (cat === 'portfolio') {\n    var filteredPosts = allPosts.filter(function (item) {\n      return item.categories.includes(cat.toString());\n    });\n    var posts = filteredPosts.slice(0, 9);\n    var morePosts = filteredPosts.slice(10);\n  }\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    page: cat,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Cards\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: post.slug,\n      href: \"blog/posts/\".concat(post.slug),\n      passHref: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: \"blog/posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      style: {\n        maxWidth: 300\n      },\n      src: post.coverImage,\n      alt: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 23\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"data\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 23\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"parseISO\"])(post.date), \"d 'de' LLLL '/' yyyy\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[\"ptBR\"]\n    }), post.categories.map(function (item) {\n      return __jsx(\"span\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 27\n        }\n      }, item);\n    })), __jsx(\"p\", {\n      className: \"lead\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 23\n      }\n    }, post.lead))));\n  }))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Blog, \"ckj7K74QA/4c+hm9df6Ku3IuxWw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LnRzeD8xZGYzIl0sIm5hbWVzIjpbIkJsb2ciLCJhbGxQb3N0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2F0Iiwic2V0Q2F0IiwicXVlcnkiLCJ0b1N0cmluZyIsInBvc3RzIiwic2xpY2UiLCJtb3JlUG9zdHMiLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwibWF4V2lkdGgiLCJjb3ZlckltYWdlIiwidGl0bGUiLCJmb3JtYXQiLCJwYXJzZUlTTyIsImRhdGUiLCJsb2NhbGUiLCJwdEJSIiwibGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FPQTs7QUF1QkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9DLGtCQUVkQyxzREFBUSxDQUFDLE1BQUQsQ0FGTTtBQUFBLE1BRTdCQyxHQUY2QjtBQUFBLE1BRXhCQyxNQUZ3Qjs7QUFJcEMsTUFBR0osTUFBTSxDQUFDSyxLQUFWLEVBQWlCO0FBQ2ZELFVBQU0sQ0FBQ0osTUFBTSxDQUFDSyxLQUFQLENBQWFGLEdBQWIsQ0FBaUJHLFFBQWpCLEVBQUQsQ0FBTjtBQUNEOztBQUNELE1BQUlDLEtBQUssR0FBR1IsUUFBUSxDQUFDUyxLQUFULENBQWUsQ0FBZixFQUFpQixDQUFqQixDQUFaO0FBQ0EsTUFBSUMsU0FBUyxHQUFHVixRQUFRLENBQUNTLEtBQVQsQ0FBZSxFQUFmLENBQWhCOztBQUVBLE1BQUdMLEdBQUcsS0FBRyxXQUFULEVBQXNCO0FBQ3BCLFFBQUlPLGFBQWEsR0FBR1gsUUFBUSxDQUFDWSxNQUFULENBQWdCLFVBQUFDLElBQUk7QUFBQSxhQUFJQSxJQUFJLENBQUNDLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCWCxHQUFHLENBQUNHLFFBQUosRUFBekIsQ0FBSjtBQUFBLEtBQXBCLENBQXBCO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRyxhQUFhLENBQUNGLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBWjtBQUNBLFFBQUlDLFNBQVMsR0FBR0MsYUFBYSxDQUFDRixLQUFkLENBQW9CLEVBQXBCLENBQWhCO0FBQ0Q7O0FBRUQsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQVEsUUFBSSxFQUFFTCxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSSxLQUFLLENBQUNRLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDUCxNQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQWhCO0FBQXNCLFVBQUksdUJBQWdCRCxJQUFJLENBQUNDLElBQXJCLENBQTFCO0FBQXVELGNBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUcsVUFBSSx1QkFBZ0JELElBQUksQ0FBQ0MsSUFBckIsQ0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BRFQ7QUFFRSxTQUFHLEVBQUVGLElBQUksQ0FBQ0csVUFGWjtBQUdFLFNBQUcsRUFBRUgsSUFBSSxDQUFDSSxLQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU9KLElBQUksQ0FBQ0ksS0FBWixDQURGLEVBRUU7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCQyx1REFBTSxDQUFDQyx5REFBUSxDQUFDTixJQUFJLENBQUNPLElBQU4sQ0FBVCwwQkFBOEM7QUFBRUMsWUFBTSxFQUFFQyxvREFBSUE7QUFBZCxLQUE5QyxDQUEzQixFQUVFVCxJQUFJLENBQUNILFVBQUwsQ0FBZ0JFLEdBQWhCLENBQW9CLFVBQUFILElBQUk7QUFBQSxhQUN0QjtBQUFNLFdBQUcsRUFBRUEsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWtCQSxJQUFsQixDQURzQjtBQUFBLEtBQXhCLENBRkYsQ0FGRixFQVNFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQkksSUFBSSxDQUFDVSxJQUExQixDQVRGLENBTkYsQ0FERixDQURPO0FBQUEsR0FBVixDQURMLENBRkYsQ0FGRixFQThCRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE5QkYsQ0FERjtBQWtDRCxDQWxERDs7R0FBTTVCLEk7VUFDV0cscUQ7OztLQURYSCxJOztBQW9EU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgcHRCUiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5cbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnbGliL2FwaSc7XG5pbXBvcnQgUG9zdCBmcm9tICd0eXBlcy9wb3N0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXJkcyB9IGZyb20gJy4vc3R5bGVzJztcblxuLy8qKiBUTyBETyBMSVNUOiBNZW51IGZsdXR1YW50ZSBjb20gYXMgY2F0ZWdvcmlhcyBkb3MgcG9zdHMgKGN1cnNvLCBlbXByZWVuZGVkb3Jpc21vLCBldGMuLi4pICovXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W11cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdsZWFkJyxcbiAgICAnY2F0ZWdvcmllcycsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuXG5jb25zdCBCbG9nID0gKHsgYWxsUG9zdHMgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZSgnYmxvZycpO1xuXG4gIGlmKHJvdXRlci5xdWVyeSkge1xuICAgIHNldENhdChyb3V0ZXIucXVlcnkuY2F0LnRvU3RyaW5nKCkpO1xuICB9XG4gIHZhciBwb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDAsOSlcbiAgdmFyIG1vcmVQb3N0cyA9IGFsbFBvc3RzLnNsaWNlKDEwKVxuXG4gIGlmKGNhdD09PSdwb3J0Zm9saW8nKSB7XG4gICAgdmFyIGZpbHRlcmVkUG9zdHMgPSBhbGxQb3N0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0LnRvU3RyaW5nKCkpKTtcbiAgICB2YXIgcG9zdHMgPSBmaWx0ZXJlZFBvc3RzLnNsaWNlKDAsOSlcbiAgICB2YXIgbW9yZVBvc3RzID0gZmlsdGVyZWRQb3N0cy5zbGljZSgxMClcbiAgfVxuXG4gIHJldHVybiAoIFxuICAgIDw+XG4gICAgICA8SGVhZGVyIHBhZ2U9e2NhdH0gLz5cbiAgICAgIDxDb250YWluZXI+XG5cbiAgICAgICAgPENhcmRzPlxuICAgICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGtleT17cG9zdC5zbHVnfSBocmVmPXtgYmxvZy9wb3N0cy8ke3Bvc3Quc2x1Z31gfSBwYXNzSHJlZj5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2BibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9ID5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAzMDAgfX1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuY292ZXJJbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Bvc3QudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGFcIj57Zm9ybWF0KHBhcnNlSVNPKHBvc3QuZGF0ZSksIGBkICdkZScgTExMTCAnLycgeXl5eWAsIHsgbG9jYWxlOiBwdEJSIH0pfVxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3QuY2F0ZWdvcmllcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aXRlbX0+e2l0ZW19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWRcIj57cG9zdC5sZWFkfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9DYXJkcz5cblxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gIClcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})