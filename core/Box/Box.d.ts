import * as React from 'react';
import {
  borders,
  ComposedStyleFunction,
  display,
  flexbox,
  grid,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
  PropsFor,
} from '@mui-magic/system';
import { Omit } from '..';

type BoxStyleFunction = ComposedStyleFunction<
  [
    typeof borders,
    typeof display,
    typeof flexbox,
    typeof grid,
    typeof palette,
    typeof positions,
    typeof shadows,
    typeof sizing,
    typeof spacing,
    typeof typography
  ]
>;

type SystemProps = PropsFor<BoxStyleFunction>;
type ElementProps = Omit<React.HTMLAttributes<HTMLElement>, keyof SystemProps>;

export interface BoxProps extends ElementProps, SystemProps {
  // styled API
  component?: React.ElementType;
  clone?: boolean;
  // workaround for https://github.com/mui-org/material-ui/pull/15611
  css?: SystemProps;
}

declare const Box: React.ComponentType<BoxProps>;

export default Box;
