import * as React from 'react';
import { ThemeProvider } from '@mui-magic/styles';
/**
 * @ignore - internal component.
 *
 * TODO v5: remove
 */

export default function MuiThemeProvider(props) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(['Material-UI: You have imported a private module.', '', "Please replace the '@mui-magic/core/styles/MuiThemeProvider' import with:", "`import { ThemeProvider as MuiThemeProvider } from '@mui-magic/core/styles';`", '', 'See https://github.com/mui-org/material-ui/issues/17900 for more detail.'].join('\n'));
  }

  return /*#__PURE__*/React.createElement(ThemeProvider, props);
}