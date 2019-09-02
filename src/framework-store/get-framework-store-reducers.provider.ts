
import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';

import { FrameworkStoreState } from './framework-store.state';

import * as fromDynamicDialog from './dynamic-dialog/dynamic-dialog.reducer';
import * as fromLoadingSpinner from './loading-spinner/loading-spinner.reducer';
import * as fromProgressBar from './progress-bar/progress-bar.reducer';
import * as fromProgressSpinner from './progress-spinner/progress-spinner.reducer';
import * as fromSecondaryToolbar from './secondary-toolbar/secondary-toolbar.reducer';
import * as fromSidenav from './sidenav/sidenav.reducer';
import * as fromStatusBar from './status-bar/status-bar.reducer';
import * as fromTabnav from './tabnav/tabnav.reducer';
import * as fromUiConfig from './ui-config/ui-config.reducer';
import * as fromUiWindow from './ui-window/ui-window.reducer';

export const FRAMEWORK_STORE_REDUCER_TOKEN = new InjectionToken<ActionReducerMap<FrameworkStoreState>>('FrameworkStore reducers');

export function getFrameworkStoreReducers(): ActionReducerMap<FrameworkStoreState> {
  // map of reducers
  return {
    dynamicDialog: fromDynamicDialog.dynamicDialogReducer,
    loadingSpinner: fromLoadingSpinner.loadingSpinnerReducer,
    progressBar: fromProgressBar.progressBarReducer,
    progressSpinner: fromProgressSpinner.progressSpinnerReducer,
    secondaryToolbar: fromSecondaryToolbar.secondaryToolbarReducer,
    sidenav: fromSidenav.sidenavReducer,
    statusBar: fromStatusBar.statusBarReducer,
    tabnav: fromTabnav.tabnavReducer,
    uiConfig: fromUiConfig.uiConfigReducer,
    uiWindow: fromUiWindow.uiWindowReducer
  }
}

export let getFrameworkStoreReducersProvider = { provide: FRAMEWORK_STORE_REDUCER_TOKEN, useFactory: getFrameworkStoreReducers };