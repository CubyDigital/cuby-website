webpackHotUpdate("static/development/pages/Blog.js",{

/***/ "./components/Header/styles.ts":
/*!*************************************!*\
  !*** ./components/Header/styles.ts ***!
  \*************************************/
/*! exports provided: Container, Content960px, MenuWeb, MenuMobile, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content960px\", function() { return Content960px; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuWeb\", function() { return MenuWeb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuMobile\", function() { return MenuMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\", \"\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    display: flex;\\n    flex: 1;\\n    font-size: 0.95em;\\n    justify-content: center;\\n    align-items: center;  \\n    box-sizing: border-box;\\n    color: #666;\\n\\n    \", \";\\n\\n    &&:hover {\\n      color: #000;\\n      cursor: pointer;\\n      background-color: rgba(155,155,155,0.1);\\n      border-bottom: solid 1px #b2dd4c;\\n    }\\n\\n    &&:active {\\n      border-bottom: solid 3px #b2dd4c;\\n    }\\n\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: none;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex: 1;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  box-sizing: border-box;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 95%;\\n  max-width: 960px;\\n  max-height: 60px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex: 1;\\n  flex-direction: row;\\n  justify-content: space-between;\\n\\n  img {\\n    max-height: 55px;\\n    margin-right: 10%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \\n  width: 100%;\\n  background-color: #FFF;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar Content960px = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2());\nvar MenuWeb = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar MenuMobile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nvar activeStyle = \"\\n  border-bottom: solid 1px #b2dd4c;\\n  color: #000;\\n  position:relative;\\n\\n  &&:after {\\n\\n    width: 0;\\n    height: 0;\\n    border-left: 19px solid transparent;\\n    border-right: 19px solid transparent;\\n    border-top: 8px solid #b2dd4c;\\n    content: \\\" \\\";\\n    position: absolute;\\n    bottom: -8px;\\n    left: calc( 50% - 19px);\\n    \\n  }\\n\\n\";\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), function (props) {\n  return props.active ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject6(), activeStyle) : '';\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMudHM/NDAyYSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50OTYwcHgiLCJoZWFkZXIiLCJNZW51V2ViIiwiTWVudU1vYmlsZSIsImFjdGl2ZVN0eWxlIiwiTWVudUl0ZW0iLCJwcm9wcyIsImFjdGl2ZSIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0FBTUEsSUFBTUMsWUFBWSxHQUFHRix5REFBTSxDQUFDRyxNQUFWLG9CQUFsQjtBQWdCQSxJQUFNQyxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7QUFRQSxJQUFNSSxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO0FBUVAsSUFBTUssV0FBVyx3V0FBakI7QUFxQk8sSUFBTUMsUUFBUSxHQUFHUCx5REFBTSxDQUFDQyxHQUFWLHFCQVVmLFVBQUFPLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLE1BQU4sR0FBZUMsNkRBQWYscUJBQXFCSixXQUFyQixJQUFxQyxFQUF6QztBQUFBLENBVlUsQ0FBZCIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIFxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbmA7IFxuXG5leHBvcnQgY29uc3QgQ29udGVudDk2MHB4ID0gc3R5bGVkLmhlYWRlcmBcbiAgd2lkdGg6IDk1JTtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgbWF4LWhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICBpbWcge1xuICAgIG1heC1oZWlnaHQ6IDU1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBNZW51V2ViID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVNb2JpbGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuYDtcblxuaW50ZXJmYWNlIE1lbnVJdGVtUHJvcHMge1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5jb25zdCBhY3RpdmVTdHlsZSA9IGBcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiMmRkNGM7XG4gIGNvbG9yOiAjMDAwO1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAmJjphZnRlciB7XG5cbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLWxlZnQ6IDE5cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiAxOXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3A6IDhweCBzb2xpZCAjYjJkZDRjO1xuICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC04cHg7XG4gICAgbGVmdDogY2FsYyggNTAlIC0gMTlweCk7XG4gICAgXG4gIH1cblxuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gc3R5bGVkLmRpdjxNZW51SXRlbVByb3BzPmBcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDAuOTVlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogIzY2NjtcblxuICAgICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gY3NzYCR7YWN0aXZlU3R5bGV9YCA6ICcnIH07XG5cbiAgICAmJjpob3ZlciB7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTU1LDE1NSwxNTUsMC4xKTtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjYjJkZDRjO1xuICAgIH1cblxuICAgICYmOmFjdGl2ZSB7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggI2IyZGQ0YztcbiAgICB9XG5cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/styles.ts\n");

/***/ })

})