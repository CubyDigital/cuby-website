webpackHotUpdate("static/development/pages/Blog.js",{

/***/ "./components/Header/styles.ts":
/*!*************************************!*\
  !*** ./components/Header/styles.ts ***!
  \*************************************/
/*! exports provided: Container, Content960px, MenuWeb, MenuMobile, MenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content960px\", function() { return Content960px; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuWeb\", function() { return MenuWeb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuMobile\", function() { return MenuMobile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MenuItem\", function() { return MenuItem; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\", \"\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n    display: flex;\\n    flex: 1;\\n    font-size: 0.95em;\\n    justify-content: center;\\n    align-items: center;  \\n    box-sizing: border-box;\\n    color: #666;\\n\\n    \", \";\\n\\n    &&:hover {\\n      color: #000;\\n      cursor: pointer;\\n      background-color: rgba(155,155,155,0.1);\\n      border-bottom: solid 1px #b2dd4c;\\n    }\\n\\n    &&:active {\\n      border-bottom: solid 3px #b2dd4c;\\n    }\\n\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: none;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex: 1;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  box-sizing: border-box;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 95%;\\n  max-width: 960px;\\n  max-height: 60px;\\n  margin: 0 auto;\\n  display: flex;\\n  flex: 1;\\n  flex-direction: row;\\n  justify-content: space-between;\\n\\n  img {\\n    max-height: 55px;\\n    margin-right: 10%;\\n  }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  \\n  width: 100%;\\n  background-color: #FFF;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar Content960px = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header(_templateObject2());\nvar MenuWeb = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject3());\nvar MenuMobile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\n\n/**\n * icon above the menuItem\n */\nvar activeStyle = \"\\n  border-bottom: solid 1px #b2dd4c;\\n  color: #000;\\n  position:relative;\\n  &&:after {\\n    width: 0;\\n    height: 0;\\n    border-left: 8px solid transparent;\\n    border-right: 8px solid transparent;\\n    border-top: 8px solid #b2dd4c;\\n    content: \\\" \\\";\\n    position: absolute;\\n    bottom: -8px;\\n    left: calc( 50% - 8px);\\n  }\\n\";\nvar MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5(), function (props) {\n  return props.active ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject6(), activeStyle) : '';\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9zdHlsZXMudHM/NDAyYSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJDb250ZW50OTYwcHgiLCJoZWFkZXIiLCJNZW51V2ViIiwiTWVudU1vYmlsZSIsImFjdGl2ZVN0eWxlIiwiTWVudUl0ZW0iLCJwcm9wcyIsImFjdGl2ZSIsImNzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRU8sSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFmO0FBTUEsSUFBTUMsWUFBWSxHQUFHRix5REFBTSxDQUFDRyxNQUFWLG9CQUFsQjtBQWdCQSxJQUFNQyxPQUFPLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWI7QUFRQSxJQUFNSSxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCOztBQU9QOzs7QUFHQSxJQUFNSyxXQUFXLHlWQUFqQjtBQWlCTyxJQUFNQyxRQUFRLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYscUJBVWYsVUFBQU8sS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsTUFBTixHQUFlQyw2REFBZixxQkFBcUJKLFdBQXJCLElBQXFDLEVBQXpDO0FBQUEsQ0FWVSxDQUFkIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuYDsgXG5cbmV4cG9ydCBjb25zdCBDb250ZW50OTYwcHggPSBzdHlsZWQuaGVhZGVyYFxuICB3aWR0aDogOTUlO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXgtaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIGltZyB7XG4gICAgbWF4LWhlaWdodDogNTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IE1lbnVXZWIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudU1vYmlsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5gO1xuXG5pbnRlcmZhY2UgTWVudUl0ZW1Qcm9wcyB7XG4gIGFjdGl2ZT86IGJvb2xlYW47XG59XG4vKipcbiAqIGljb24gYWJvdmUgdGhlIG1lbnVJdGVtXG4gKi9cbmNvbnN0IGFjdGl2ZVN0eWxlID0gYFxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2IyZGQ0YztcbiAgY29sb3I6ICMwMDA7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAmJjphZnRlciB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogOHB4IHNvbGlkICNiMmRkNGM7XG4gICAgY29udGVudDogXCIgXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLThweDtcbiAgICBsZWZ0OiBjYWxjKCA1MCUgLSA4cHgpO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBzdHlsZWQuZGl2PE1lbnVJdGVtUHJvcHM+YFxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICBcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGNvbG9yOiAjNjY2O1xuXG4gICAgJHtwcm9wcyA9PiBwcm9wcy5hY3RpdmUgPyBjc3NgJHthY3RpdmVTdHlsZX1gIDogJycgfTtcblxuICAgICYmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNTUsMTU1LDE1NSwwLjEpO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNiMmRkNGM7XG4gICAgfVxuXG4gICAgJiY6YWN0aXZlIHtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCAjYjJkZDRjO1xuICAgIH1cblxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header/styles.ts\n");

/***/ })

})