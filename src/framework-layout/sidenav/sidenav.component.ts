import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  
  // development
  isLaunched = false;
  fixed = false;
  coverHeader = false;
  showHeader = false;
  showFooter = false;
  modeIndex = 0;
  get mode() { return ['side', 'over', 'push'][this.modeIndex]; }
  get fixedTop() { return this.fixed && this.showHeader && !this.coverHeader ? 64 : 0; }
  get fixedBottom() { return this.fixed && this.showFooter && !this.coverHeader ? 64 : 0; }
  
  // development
  fillerContent = Array(30);
  
  @Input()
  open = false;
  
  // currentMode: 'over' | 'push' | 'side' = 'side';
  currentMode: 'over' | 'push' | 'side' = 'over';
  currentClasses: any;

  constructor() {
    
  }
  
  ngOnInit() {
    this.setCurrentClasses();
    this.showHeader = true;
    this.showFooter = true;
  }
  
  setCurrentClasses() {
    
    switch(this.currentMode) {
      case 'over':
        return this.currentClasses = {
        'sidenav-mode-over': true,
        'sidenav-mode-push': false,
        'sidenav-mode-side': false
      };
      
      case 'push':
        return this.currentClasses = {
        'sidenav-mode-over': false,
        'sidenav-mode-push': true,
        'sidenav-mode-side': false
      };
      
      case 'side':
        return this.currentClasses = {
        'sidenav-mode-over': false,
        'sidenav-mode-push': false,
        'sidenav-mode-side': true
      };
      
      default:
        return this.currentClasses = null;
    }
  }
  
}
