import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { DynamicDialogFacade } from './dynamic-dialog/dynamic-dialog.facade';
import { LoadingSpinnerFacade } from './loading-spinner/loading-spinner.facade';
import { ProgressBarFacade } from './progress-bar/progress-bar.facade';
import { ProgressSpinnerFacade } from './progress-spinner/progress-spinner.facade';
import { SecondaryToolbarFacade } from './secondary-toolbar/secondary-toolbar.facade';
import { SidenavFacade } from './sidenav/sidenav.facade';
import { StatusBarFacade } from './status-bar/status-bar.facade';
import { TabnavFacade } from './tabnav/tabnav.facade';
import { UiConfigFacade } from './ui-config/ui-config.facade';
import { UiWindowFacade } from './ui-window/ui-window.facade';
import { getFrameworkStoreReducersProvider, FRAMEWORK_STORE_REDUCER_TOKEN } from './get-framework-store-reducers.provider';

/** https://youtu.be/P_FSpwfERAg */
/** featureToggleConfigs: featureToggleConfigSet[] */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('framework-store', FRAMEWORK_STORE_REDUCER_TOKEN),
    EffectsModule.forFeature([
      DynamicDialogFacade,
      LoadingSpinnerFacade,
      ProgressBarFacade,
      ProgressSpinnerFacade,
      SecondaryToolbarFacade,
      SidenavFacade,
      StatusBarFacade,
      TabnavFacade,
      UiConfigFacade,
      UiWindowFacade
    ]),
  ],
  providers: [
    getFrameworkStoreReducersProvider,
    DynamicDialogFacade,
    LoadingSpinnerFacade,
    ProgressBarFacade,
    ProgressSpinnerFacade,
    SecondaryToolbarFacade,
    SidenavFacade,
    StatusBarFacade,
    TabnavFacade,
    UiConfigFacade,
    UiWindowFacade
  ]
})
export class FrameworkStoreModule {}