import * as React from 'react';
import { StandardProps } from '..';

export interface ExpansionPanelDetailsProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, ExpansionPanelDetailsClassKey> {
  /**
   * The content of the expansion panel details.
   */
  children?: React.ReactNode;
}

export type ExpansionPanelDetailsClassKey = 'root';

/**
 * ⚠️ The ExpansionPanelDetails component was renamed to AccordionDetails to use a more common naming convention.
 *
 * You should use `import { AccordionDetails } from '@mui-magic/core'`
 * or `import AccordionDetails from '@mui-magic/core/AccordionDetails'`.
 * API:
 *
 * - [ExpansionPanelDetails API](https://material-ui.com/api/expansion-panel-details/)
 */
export default function ExpansionPanelDetails(props: ExpansionPanelDetailsProps): JSX.Element;
