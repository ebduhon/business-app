
/**
 * @color
 * 'primary': string
 * 'accent': string
 * 'warn': string
 */

/**
 * @mode
 * 'determinate': string
 * 'indeterminate': string
 */

/**
 * @value
 * number
 */

/**
 * @strokeWidth
 * number
 */

/**
 * @diameter
 * number
 */

/**
 * step()
 */

export interface IProgressSpinner {
  activated?: boolean;
  visible?: boolean;
  color?: string;
  mode?: string;
  value?: number;
  strokeWidth?: number;
  diameter?: number;
}

export class ProgressSpinner implements IProgressSpinner {
  constructor(public activated?: boolean, public visible?: boolean, public color?: string, public mode?: string, public value?: number, public strokeWidth?: number, public diameter?: number) {}
}
