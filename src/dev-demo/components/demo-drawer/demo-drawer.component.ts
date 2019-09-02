import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'demo-drawer',
  templateUrl: './demo-drawer.component.html',
  styleUrls: ['./demo-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class DemoDrawerComponent {
  invert = false;

}
