import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material'; //TODO: review compared to MatInputModule, see MatError.directive
import { MatInputModule } from '@angular/material';



import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';

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
    SignInPageComponent,
    SignInFormComponent
  ],
  exports: [
    SignInPageComponent
  ]
})
export class SignInModule {}