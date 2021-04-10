import _extends from "@babel/runtime/helpers/esm/extends";
import { withStyles as withStylesWithoutDefault } from '@mui-magic/styles';
import defaultTheme from './defaultTheme';

function withStyles(stylesOrCreator, options) {
  return withStylesWithoutDefault(stylesOrCreator, _extends({
    defaultTheme
  }, options));
}

export default withStyles;