import { createStyles as createStylesOriginal } from '@mui-magic/styles'; // let warnOnce = false;
// To remove in v5

export default function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @mui-magic/core/styles is deprecated.',
  //     'Please use @mui-magic/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return createStylesOriginal(styles);
}