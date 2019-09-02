import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material';

import { UserPresenceHarnessComponent } from './containers/user-presence-harness/user-presence-harness.component';
import { UserPresenceIndicatorComponent } from './components/user-presence-indicator/user-presence-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    UserPresenceHarnessComponent,
    UserPresenceIndicatorComponent
  ],
  exports: [
    UserPresenceHarnessComponent
  ]
})
export class UserPresenceModule {}