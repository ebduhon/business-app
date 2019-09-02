import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './containers/home-page/home-page.component';

// const homeRoutes: Routes = [
//   { path: 'home-page', component: HomePageComponent, data: { title: 'Home Page' } }
// ];

const homeRoutes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Home Page' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutingModule {}