"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMuiStrictModeTheme;

var _utils = require("@mui-magic/utils");

var _createMuiTheme = _interopRequireDefault(require("./createMuiTheme"));

function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createMuiTheme.default.apply(void 0, [(0, _utils.deepmerge)({
    unstable_strictMode: true
  }, options)].concat(args));
}