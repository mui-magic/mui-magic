import { OverridableStringUnion } from '@mui-magic/types';

export type BreakpointDefaults = Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', true>;
export interface BreakpointOverrides {}

export type Breakpoint = OverridableStringUnion<BreakpointDefaults, BreakpointOverrides>;
export type BreakpointValues = { [key in Breakpoint]: number };
export const keys: Breakpoint[];

export interface Breakpoints {
  keys: Breakpoint[];
  values: BreakpointValues;
  up: (key: Breakpoint | number) => string;
  down: (key: Breakpoint | number) => string;
  between: (start: Breakpoint | number, end: Breakpoint | number) => string;
  only: (key: Breakpoint) => string;
  width: (key: Breakpoint) => number;
}

export type BreakpointsOptions = Partial<
  {
    unit: string;
    step: number;
  } & Breakpoints
>;

export default function createBreakpoints(options: BreakpointsOptions): Breakpoints;
