import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';

import { UserProfilePageComponent } from './containers/user-profile-page/user-profile-page.component';
import { UserProfileFormComponent } from './components/user-profile-form/user-profile-form.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    UserProfilePageComponent,
    UserProfileFormComponent
  ],
  exports: [
    UserProfilePageComponent
  ]
})
export class UserProfileModule {}