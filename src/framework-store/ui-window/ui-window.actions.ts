import { Action } from '@ngrx/store';

export const RESIZE_UI_WINDOW = '[UiWindow] Resize ui-window';

export class ResizeUiWindow implements Action {
  readonly type = RESIZE_UI_WINDOW;
  constructor(public payload?: any) {}
}

export type All
  = ResizeUiWindow;