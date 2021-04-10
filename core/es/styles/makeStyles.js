import _extends from "@babel/runtime/helpers/esm/extends";
import { makeStyles as makeStylesWithoutDefault } from '@mui-magic/styles';
import defaultTheme from './defaultTheme';

function makeStyles(stylesOrCreator, options = {}) {
  return makeStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme
  }, options));
}

export default makeStyles;