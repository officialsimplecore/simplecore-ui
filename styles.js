(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "vB0K");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--13-1!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/resolve-url-loader??ref--13-3!../../../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "TSJu");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/simplecore-ui/simplecore-ui/projects/simplecore-ui-docs/src/styles.scss */"+EN/");


/***/ }),

/***/ "PBB4":
/*!*************************************************************************************************!*\
  !*** /home/runner/work/simplecore-ui/simplecore-ui/node_modules/css-loader/dist/runtime/api.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "TSJu":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/runner/work/simplecore-ui/simplecore-ui/node_modules/css-loader/dist/cjs.js??ref--13-1!/home/runner/work/simplecore-ui/simplecore-ui/node_modules/postcss-loader/src??embedded!/home/runner/work/simplecore-ui/simplecore-ui/node_modules/resolve-url-loader??ref--13-3!/home/runner/work/simplecore-ui/simplecore-ui/node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "PBB4");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* Global Styles */\n/* vietnamese */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format(\"woff2\");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: \"Quicksand\";\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format(\"woff2\");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\nhtml body {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #f5f9fd;\n  font-family: \"Quicksand\";\n}\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}", "",{"version":3,"sources":["webpack://src/styles.scss"],"names":[],"mappings":"AAAA,kBAAA;AACA,eAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,gHAAA;AACF;AACA,cAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,mHAAA;AACF;AACA,UAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kGAAA;EACA,yKAAA;AACF;AACA,eAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,gHAAA;AACF;AACA,cAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,mHAAA;AACF;AACA,UAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kGAAA;EACA,yKAAA;AACF;AACA,eAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,gHAAA;AACF;AACA,cAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,mHAAA;AACF;AACA,UAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kGAAA;EACA,yKAAA;AACF;AACA,eAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,gHAAA;AACF;AACA,cAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,qGAAA;EACA,mHAAA;AACF;AACA,UAAA;AACA;EACE,wBAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,kGAAA;EACA,yKAAA;AACF;AAEA;EACE,SAAA;EACA,WAAA;EACA,YAAA;EACA,yBAAA;EACA,wBAAA;AAAF;AAGA;EACE,sBAAA;AAAF;AAEA;EACE,mBAAA;AACF","sourcesContent":["/* Global Styles */\n/* vietnamese */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 600;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* vietnamese */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: 'Quicksand';\n  font-style: normal;\n  font-weight: 700;\n  font-display: swap;\n  src: url(https://fonts.gstatic.com/s/quicksand/v21/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n\nhtml body {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #f5f9fd;\n  font-family: \"Quicksand\";\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*, *:before, *:after {\n  box-sizing: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "vB0K":
/*!************************************************************************************************************************!*\
  !*** /home/runner/work/simplecore-ui/simplecore-ui/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map