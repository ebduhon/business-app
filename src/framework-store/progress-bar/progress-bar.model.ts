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
 * 'buffer': string
 * 'query': string
 */

/**
 * @value 
 * number
 * 
 * • if mode is indeterminate value is ignored
 */

/**
 * @bufferValue
 * number
 */
 
/**
 * step()
 * stepProgressValue()
 * stepBufferValue()
 * clampValue()
 */
 
export interface IProgressBar {
  activated?: boolean;
  visible?: boolean;
  color?: string;
  mode?: string;
  value?: number;
  bufferValue?: number;
}

export class ProgressBar implements IProgressBar {
  constructor(public activated?: boolean, public visible?: boolean, public color?: string, public mode?: string, public value?: number, public bufferValue?: number) {}
}