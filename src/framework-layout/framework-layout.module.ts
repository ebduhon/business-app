
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';

// development
import { AbridgeModule } from '../abridge/abridge.module';

import { ConnectivityModule } from '../connectivity/connectivity.module';
import { DynamicDialogModule } from './dynamic-dialog/dynamic-dialog.module';
import { UserPresenceModule } from '../user-presence/user-presence.module';

import { LayoutHarnessComponent } from './layout-harness/layout-harness.component';
import { StatusBarHarnessComponent } from './status-bar-harness/status-bar-harness.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { AppBarMenuComponent } from './app-bar-menu/app-bar-menu.component';
import { AppBarMenuItemComponent } from './app-bar-menu-item/app-bar-menu-item.component';
import { ContentCanvasComponent } from './content-canvas/content-canvas.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { SecondaryToolbarComponent } from './secondary-toolbar/secondary-toolbar.component';

//TODO: SearchComponent
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavToolbarComponent } from './sidenav-toolbar/sidenav-toolbar.component';
import { SidenavToolbarProfileComponent } from './sidenav-toolbar-profile/sidenav-toolbar-profile.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { ProfileMenuItemComponent } from './profile-menu-item/profile-menu-item.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';

import { TabnavComponent } from './tabnav/tabnav.component';
import { TabnavTabComponent } from './tabnav-tab/tabnav-tab.component';
import { TabnavAnchorDirective } from './tabnav-anchor/tabnav-anchor.directive';


export const COMPONENTS = [
  LayoutHarnessComponent,
  StatusBarHarnessComponent,
  AppBarComponent,
  AppBarMenuComponent,
  AppBarMenuItemComponent,
  ContentCanvasComponent,
  BottomBarComponent,
  SecondaryToolbarComponent,
  SidenavComponent,
  SidenavToolbarComponent,
  SidenavToolbarProfileComponent,
  NavItemComponent,
  LoadingSpinnerComponent,
  ProfileAvatarComponent,
  ProgressBarComponent,
  ProgressSpinnerComponent,
  ProfileMenuComponent,
  ProfileMenuItemComponent,
  TabnavComponent,
  TabnavTabComponent,
  TabnavAnchorDirective
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    ConnectivityModule,
    DynamicDialogModule,
    UserPresenceModule,
    AbridgeModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class FrameworkLayoutModule {}
