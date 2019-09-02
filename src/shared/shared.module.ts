import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SafeResourceUrlPipe } from './pipes/safe-resource-url.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    SafeHtmlPipe,
    SafeResourceUrlPipe,
    ReversePipe,
    NotFoundComponent
  ],
  exports: [
    SafeHtmlPipe,
    SafeResourceUrlPipe,
    ReversePipe,
    NotFoundComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {}