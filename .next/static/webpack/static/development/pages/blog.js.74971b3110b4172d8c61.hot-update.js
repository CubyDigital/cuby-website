webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./pages/blog/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n //** TO DO LIST: Menu flutuante com as categorias dos posts (curso, empreendedorismo, etc...) */\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var allPosts = _ref.allPosts;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('blog'),\n      cat = _useState[0],\n      setCat = _useState[1];\n\n  var posts = allPosts;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (router.query) {\n      setCat(router.query.cat.toString());\n    }\n\n    var posts = allPosts.slice(0, 9);\n    var morePosts = allPosts.slice(10);\n\n    if (cat === 'portfolio') {\n      var filteredPosts = allPosts.filter(function (item) {\n        return item.categories.includes(cat.toString());\n      });\n      var posts = filteredPosts.slice(0, 9);\n      var morePosts = filteredPosts.slice(10);\n    }\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    page: cat,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Cards\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: post.slug,\n      href: \"blog/posts/\".concat(post.slug),\n      passHref: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      href: \"blog/posts/\".concat(post.slug),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      style: {\n        maxWidth: 300\n      },\n      src: post.coverImage,\n      alt: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 23\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"data\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 23\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"parseISO\"])(post.date), \"d 'de' LLLL '/' yyyy\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[\"ptBR\"]\n    }), post.categories.map(function (item) {\n      return __jsx(\"span\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 27\n        }\n      }, item);\n    })), __jsx(\"p\", {\n      className: \"lead\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 23\n      }\n    }, post.lead))));\n  }))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Blog, \"n6Ugph54NxR43uo0vnUHdQNb2PA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LnRzeD8xZGYzIl0sIm5hbWVzIjpbIkJsb2ciLCJhbGxQb3N0cyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiY2F0Iiwic2V0Q2F0IiwicG9zdHMiLCJ1c2VFZmZlY3QiLCJxdWVyeSIsInRvU3RyaW5nIiwic2xpY2UiLCJtb3JlUG9zdHMiLCJmaWx0ZXJlZFBvc3RzIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3JpZXMiLCJpbmNsdWRlcyIsIm1hcCIsInBvc3QiLCJzbHVnIiwibWF4V2lkdGgiLCJjb3ZlckltYWdlIiwidGl0bGUiLCJmb3JtYXQiLCJwYXJzZUlTTyIsImRhdGUiLCJsb2NhbGUiLCJwdEJSIiwibGVhZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Q0FPQTs7QUF1QkEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBeUI7QUFBQTs7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQ3BDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG9DLGtCQUVkQyxzREFBUSxDQUFDLE1BQUQsQ0FGTTtBQUFBLE1BRTdCQyxHQUY2QjtBQUFBLE1BRXhCQyxNQUZ3Qjs7QUFJcEMsTUFBSUMsS0FBSyxHQUFHTixRQUFaO0FBRUFPLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUdOLE1BQU0sQ0FBQ08sS0FBVixFQUFpQjtBQUNmSCxZQUFNLENBQUNKLE1BQU0sQ0FBQ08sS0FBUCxDQUFhSixHQUFiLENBQWlCSyxRQUFqQixFQUFELENBQU47QUFDRDs7QUFDRCxRQUFJSCxLQUFLLEdBQUdOLFFBQVEsQ0FBQ1UsS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBWjtBQUNBLFFBQUlDLFNBQVMsR0FBR1gsUUFBUSxDQUFDVSxLQUFULENBQWUsRUFBZixDQUFoQjs7QUFFQSxRQUFHTixHQUFHLEtBQUcsV0FBVCxFQUFzQjtBQUNwQixVQUFJUSxhQUFhLEdBQUdaLFFBQVEsQ0FBQ2EsTUFBVCxDQUFnQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QlosR0FBRyxDQUFDSyxRQUFKLEVBQXpCLENBQUo7QUFBQSxPQUFwQixDQUFwQjtBQUNBLFVBQUlILEtBQUssR0FBR00sYUFBYSxDQUFDRixLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQVo7QUFDQSxVQUFJQyxTQUFTLEdBQUdDLGFBQWEsQ0FBQ0YsS0FBZCxDQUFvQixFQUFwQixDQUFoQjtBQUNEO0FBQ0YsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBLFNBQ0UsbUVBQ0UsTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBRU4sR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0UsS0FBSyxDQUFDVyxHQUFOLENBQVUsVUFBQ0MsSUFBRDtBQUFBLFdBQ1AsTUFBQyxnREFBRDtBQUFNLFNBQUcsRUFBRUEsSUFBSSxDQUFDQyxJQUFoQjtBQUFzQixVQUFJLHVCQUFnQkQsSUFBSSxDQUFDQyxJQUFyQixDQUExQjtBQUF1RCxjQUFRLE1BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksdUJBQWdCRCxJQUFJLENBQUNDLElBQXJCLENBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsV0FBSyxFQUFFO0FBQUVDLGdCQUFRLEVBQUU7QUFBWixPQURUO0FBRUUsU0FBRyxFQUFFRixJQUFJLENBQUNHLFVBRlo7QUFHRSxTQUFHLEVBQUVILElBQUksQ0FBQ0ksS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPSixJQUFJLENBQUNJLEtBQVosQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFxQkMsdURBQU0sQ0FBQ0MseURBQVEsQ0FBQ04sSUFBSSxDQUFDTyxJQUFOLENBQVQsMEJBQThDO0FBQUVDLFlBQU0sRUFBRUMsb0RBQUlBO0FBQWQsS0FBOUMsQ0FBM0IsRUFFRVQsSUFBSSxDQUFDSCxVQUFMLENBQWdCRSxHQUFoQixDQUFvQixVQUFBSCxJQUFJO0FBQUEsYUFDdEI7QUFBTSxXQUFHLEVBQUVBLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFrQkEsSUFBbEIsQ0FEc0I7QUFBQSxLQUF4QixDQUZGLENBRkYsRUFTRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUJJLElBQUksQ0FBQ1UsSUFBMUIsQ0FURixDQU5GLENBREYsQ0FETztBQUFBLEdBQVYsQ0FETCxDQUZGLENBRkYsRUE4QkUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBOUJGLENBREY7QUFrQ0QsQ0F0REQ7O0dBQU03QixJO1VBQ1dHLHFEOzs7S0FEWEgsSTs7QUF3RFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgcHRCUiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5cbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnbGliL2FwaSc7XG5pbXBvcnQgUG9zdCBmcm9tICd0eXBlcy9wb3N0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXJkcyB9IGZyb20gJy4vc3R5bGVzJztcblxuLy8qKiBUTyBETyBMSVNUOiBNZW51IGZsdXR1YW50ZSBjb20gYXMgY2F0ZWdvcmlhcyBkb3MgcG9zdHMgKGN1cnNvLCBlbXByZWVuZGVkb3Jpc21vLCBldGMuLi4pICovXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGFsbFBvc3RzOiBQb3N0W11cbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdsZWFkJyxcbiAgICAnY2F0ZWdvcmllcycsXG4gICAgJ2RhdGUnLFxuICAgICdzbHVnJyxcbiAgICAnYXV0aG9yJyxcbiAgICAnY292ZXJJbWFnZScsXG4gICAgJ2V4Y2VycHQnLFxuICBdKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfSxcbiAgfVxufVxuXG5jb25zdCBCbG9nID0gKHsgYWxsUG9zdHMgfTogUHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtjYXQsIHNldENhdF0gPSB1c2VTdGF0ZSgnYmxvZycpO1xuXG4gIHZhciBwb3N0cyA9IGFsbFBvc3RzO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYocm91dGVyLnF1ZXJ5KSB7XG4gICAgICBzZXRDYXQocm91dGVyLnF1ZXJ5LmNhdC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgdmFyIHBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMCw5KVxuICAgIHZhciBtb3JlUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxMClcblxuICAgIGlmKGNhdD09PSdwb3J0Zm9saW8nKSB7XG4gICAgICB2YXIgZmlsdGVyZWRQb3N0cyA9IGFsbFBvc3RzLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcmllcy5pbmNsdWRlcyhjYXQudG9TdHJpbmcoKSkpO1xuICAgICAgdmFyIHBvc3RzID0gZmlsdGVyZWRQb3N0cy5zbGljZSgwLDkpXG4gICAgICB2YXIgbW9yZVBvc3RzID0gZmlsdGVyZWRQb3N0cy5zbGljZSgxMClcbiAgICB9XG4gIH0sIFtdKVxuICBcbiAgcmV0dXJuICggXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgcGFnZT17Y2F0fSAvPlxuICAgICAgPENvbnRhaW5lcj5cblxuICAgICAgICA8Q2FyZHM+XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtwb3N0LnNsdWd9IGhyZWY9e2BibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YGJsb2cvcG9zdHMvJHtwb3N0LnNsdWd9YH0gPlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6IDMwMCB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5jb3ZlckltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cG9zdC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0YVwiPntmb3JtYXQocGFyc2VJU08ocG9zdC5kYXRlKSwgYGQgJ2RlJyBMTExMICcvJyB5eXl5YCwgeyBsb2NhbGU6IHB0QlIgfSl9XG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5jYXRlZ29yaWVzLm1hcChpdGVtID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpdGVtfT57aXRlbX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPntwb3N0LmxlYWR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0NhcmRzPlxuXG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})