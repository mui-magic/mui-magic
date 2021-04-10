"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

var _styles = require("@mui-magic/styles");

// let warnOnce = false;
// To remove in v5
function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @mui-magic/core/styles is deprecated.',
  //     'Please use @mui-magic/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return (0, _styles.createStyles)(styles);
}