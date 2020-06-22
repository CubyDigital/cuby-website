webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ \"./node_modules/date-fns/esm/locale/index.js\");\n/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Header */ \"./components/Header/index.tsx\");\n/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer */ \"./components/Footer/index.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./pages/blog/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/cristian/cuby/website/pages/blog/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Blog = function Blog(_ref) {\n  _s();\n\n  var allPosts = _ref.allPosts;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var cat = router.query.cat;\n  var page = 'blog';\n  var posts = allPosts.slice(0, 9);\n  var morPosts = allPosts.slice(10);\n\n  if (cat) {\n    var _page = 'portfolio';\n    var filteredPosts = allPosts.filter(function (item) {\n      return item.categories.includes(cat.toString());\n    });\n\n    var _posts = filteredPosts.slice(0, 9);\n\n    var _morPosts = filteredPosts.slice(10);\n  }\n\n  console.log(page);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    page: page,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }), __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Cards\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, posts.map(function (post) {\n    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: post.slug,\n      href: \"blog/posts/\".concat(post.slug),\n      passHref: true,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, __jsx(\"a\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 19\n      }\n    }, __jsx(\"img\", {\n      style: {\n        maxWidth: 300\n      },\n      src: post.coverImage,\n      alt: post.title,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 21\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 21\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 23\n      }\n    }, post.title), __jsx(\"p\", {\n      className: \"data\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 23\n      }\n    }, Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"format\"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__[\"parseISO\"])(post.date), \"d 'de' LLLL '/' yyyy\", {\n      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[\"ptBR\"]\n    }), post.categories.map(function (item) {\n      return __jsx(\"span\", {\n        key: item,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 27\n        }\n      }, item);\n    })), __jsx(\"p\", {\n      className: \"lead\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 23\n      }\n    }, post.lead))));\n  }))), __jsx(components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Blog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Blog;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\n\nvar _c;\n\n$RefreshReg$(_c, \"Blog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2luZGV4LnRzeD8xZGYzIl0sIm5hbWVzIjpbIkJsb2ciLCJhbGxQb3N0cyIsInJvdXRlciIsInVzZVJvdXRlciIsImNhdCIsInF1ZXJ5IiwicGFnZSIsInBvc3RzIiwic2xpY2UiLCJtb3JQb3N0cyIsImZpbHRlcmVkUG9zdHMiLCJmaWx0ZXIiLCJpdGVtIiwiY2F0ZWdvcmllcyIsImluY2x1ZGVzIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwibWFwIiwicG9zdCIsInNsdWciLCJtYXhXaWR0aCIsImNvdmVySW1hZ2UiLCJ0aXRsZSIsImZvcm1hdCIsInBhcnNlSVNPIiwiZGF0ZSIsImxvY2FsZSIsInB0QlIiLCJsZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUtBOztBQTBCQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUF5QjtBQUFBOztBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFDcEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQURvQyxNQUU1QkMsR0FGNEIsR0FFcEJGLE1BQU0sQ0FBQ0csS0FGYSxDQUU1QkQsR0FGNEI7QUFLcEMsTUFBSUUsSUFBSSxHQUFHLE1BQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUdOLFFBQVEsQ0FBQ08sS0FBVCxDQUFlLENBQWYsRUFBaUIsQ0FBakIsQ0FBWjtBQUNBLE1BQUlDLFFBQVEsR0FBR1IsUUFBUSxDQUFDTyxLQUFULENBQWUsRUFBZixDQUFmOztBQUVBLE1BQUdKLEdBQUgsRUFBUTtBQUNOLFFBQUlFLEtBQUksR0FBRyxXQUFYO0FBQ0EsUUFBSUksYUFBYSxHQUFHVCxRQUFRLENBQUNVLE1BQVQsQ0FBZ0IsVUFBQUMsSUFBSTtBQUFBLGFBQUlBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJWLEdBQUcsQ0FBQ1csUUFBSixFQUF6QixDQUFKO0FBQUEsS0FBcEIsQ0FBcEI7O0FBQ0EsUUFBSVIsTUFBSyxHQUFHRyxhQUFhLENBQUNGLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsQ0FBWjs7QUFDQSxRQUFJQyxTQUFRLEdBQUdDLGFBQWEsQ0FBQ0YsS0FBZCxDQUFvQixFQUFwQixDQUFmO0FBQ0Q7O0FBQ0RRLFNBQU8sQ0FBQ0MsR0FBUixDQUFZWCxJQUFaO0FBQ0EsU0FDRSxtRUFDRSxNQUFDLHlEQUFEO0FBQVEsUUFBSSxFQUFFQSxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLQyxLQUFLLENBQUNXLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDUCxNQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNDLElBQWhCO0FBQXNCLFVBQUksdUJBQWdCRCxJQUFJLENBQUNDLElBQXJCLENBQTFCO0FBQXVELGNBQVEsTUFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FEVDtBQUVFLFNBQUcsRUFBRUYsSUFBSSxDQUFDRyxVQUZaO0FBR0UsU0FBRyxFQUFFSCxJQUFJLENBQUNJLEtBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBT0osSUFBSSxDQUFDSSxLQUFaLENBREYsRUFFRTtBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBcUJDLHVEQUFNLENBQUNDLHlEQUFRLENBQUNOLElBQUksQ0FBQ08sSUFBTixDQUFULDBCQUE4QztBQUFFQyxZQUFNLEVBQUVDLG9EQUFJQTtBQUFkLEtBQTlDLENBQTNCLEVBRUVULElBQUksQ0FBQ04sVUFBTCxDQUFnQkssR0FBaEIsQ0FBb0IsVUFBQU4sSUFBSTtBQUFBLGFBQ3RCO0FBQU0sV0FBRyxFQUFFQSxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBa0JBLElBQWxCLENBRHNCO0FBQUEsS0FBeEIsQ0FGRixDQUZGLEVBU0U7QUFBRyxlQUFTLEVBQUMsTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQXFCTyxJQUFJLENBQUNVLElBQTFCLENBVEYsQ0FORixDQURGLENBRE87QUFBQSxHQUFWLENBREwsQ0FGRixDQUZGLEVBOEJFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTlCRixDQURGO0FBa0NELENBbEREOztHQUFNN0IsSTtVQUNXRyxxRDs7O0tBRFhILEk7O0FBb0RTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Jsb2cvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IHsgcGFyc2VJU08sIGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgcHRCUiB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XG5cbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnbGliL2FwaSc7XG5pbXBvcnQgUG9zdCBmcm9tICd0eXBlcy9wb3N0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXJkcyB9IGZyb20gJy4vc3R5bGVzJztcbmltcG9ydCB7IENhcmRNZXRhIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG4vLyoqIFRPIERPIExJU1Q6IE1lbnUgZmx1dHVhbnRlIGNvbSBhcyBjYXRlZ29yaWFzIGRvcyBwb3N0cyAoY3Vyc28sIGVtcHJlZW5kZWRvcmlzbW8sIGV0Yy4uLikgKi9cblxudHlwZSBQcm9wcyA9IHtcbiAgYWxsUG9zdHM6IFBvc3RbXVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFsbFBvc3RzID0gZ2V0QWxsUG9zdHMoW1xuICAgICd0aXRsZScsXG4gICAgJ2xlYWQnLFxuICAgICdjYXRlZ29yaWVzJyxcbiAgICAnZGF0ZScsXG4gICAgJ3NsdWcnLFxuICAgICdhdXRob3InLFxuICAgICdjb3ZlckltYWdlJyxcbiAgICAnZXhjZXJwdCcsXG4gIF0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBhbGxQb3N0cyB9LFxuICB9XG59XG5cbmNvbnN0IEJsb2cgPSAoeyBhbGxQb3N0cyB9OiBQcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBjYXQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBcbiAgdmFyIHBhZ2UgPSAnYmxvZydcbiAgdmFyIHBvc3RzID0gYWxsUG9zdHMuc2xpY2UoMCw5KVxuICB2YXIgbW9yUG9zdHMgPSBhbGxQb3N0cy5zbGljZSgxMClcblxuICBpZihjYXQpIHtcbiAgICBsZXQgcGFnZSA9ICdwb3J0Zm9saW8nXG4gICAgbGV0IGZpbHRlcmVkUG9zdHMgPSBhbGxQb3N0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3JpZXMuaW5jbHVkZXMoY2F0LnRvU3RyaW5nKCkpKTtcbiAgICBsZXQgcG9zdHMgPSBmaWx0ZXJlZFBvc3RzLnNsaWNlKDAsOSlcbiAgICBsZXQgbW9yUG9zdHMgPSBmaWx0ZXJlZFBvc3RzLnNsaWNlKDEwKVxuICB9XG4gIGNvbnNvbGUubG9nKHBhZ2UpO1xuICByZXR1cm4gKCBcbiAgICA8PlxuICAgICAgPEhlYWRlciBwYWdlPXtwYWdlfSAvPlxuICAgICAgPENvbnRhaW5lcj5cblxuICAgICAgICA8Q2FyZHM+XG4gICAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtwb3N0LnNsdWd9IGhyZWY9e2BibG9nL3Bvc3RzLyR7cG9zdC5zbHVnfWB9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogMzAwIH19XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwb3N0LmNvdmVySW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwb3N0LnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRhXCI+e2Zvcm1hdChwYXJzZUlTTyhwb3N0LmRhdGUpLCBgZCAnZGUnIExMTEwgJy8nIHl5eXlgLCB7IGxvY2FsZTogcHRCUiB9KX1cbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0LmNhdGVnb3JpZXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2l0ZW19PntpdGVtfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+e3Bvc3QubGVhZH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvQ2FyZHM+XG5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})