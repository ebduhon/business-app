
  /* Material Design breakpoints
   * https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
   *
   * xsmall: 0 - 600
   * small: 600 - 960
   * medium: 960 - 1280
   * large: 1280 - 1920
   * xlarge: 1920+
   * 
   */
  
  /* Bootstrap breakpoints
   *
   * Small devices (landscape phones, 576px and up)
   * Medium devices (tablets, 768px and up)
   * Large devices (desktops, 992px and up)
   * Extra large devices (large desktops, 1200px and up)
   *
   */

import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/** See the following references to make TypeScript `enum` available in Angular Templates */
/** https://www.grapecity.com/en/blogs/using-typescript-enums-angular-templates */
/** https://www.gurustop.net/blog/2016/05/24/how-to-use-typescript-enum-with-angular2/ */
/** http://www.typescriptlang.org/docs/handbook/type-compatibility.html */
/** http://www.typescriptlang.org/docs/handbook/enums.html */

import * as breakpoints from '../models/breakpoint-specification.model';

declare enum BreakpointSpecification {
  MaterialDesign = 0,
  Bootstrap = 1
};

@Injectable()
export class DevLayoutScreenService {
  
  BreakpointSpecification = breakpoints.BreakpointSpecification;
  breakpointSpecification = breakpoints.BreakpointSpecification.MaterialDesign;
  
  private _smallBreakpoint: number;
  private _mediumBreakpoint: number;
  private _largeBreakpoint: number;
  private _xLargeBreakpoint: number;
  
  private _screenWidth: number = 1000; // arbitrary default screen dimension
  private _screenHeight: number = 800; // arbitrary default screen dimension
  
  private resizeSource = new Subject<null>();
  resize$ = this.resizeSource.asObservable(); // consumers of this service subscribe to resize$
  
  constructor() {
    try {
      this._screenWidth = window.innerWidth;
      this._screenHeight = window.innerHeight;
      window.addEventListener('resize', (event) => this.onResize(event));
    } catch (e) {
      // Use arbitrary default screen dimensions
    }
  }
  
  get smallBreakpoint(): number {
    return this._smallBreakpoint;
  }
  
  set smallBreakpoint(breakpointSpecification: number) {
    switch (this.breakpointSpecification) {
      case 0:
        this._smallBreakpoint = 600;
        break;
      
      case 1:
        this._smallBreakpoint = 576;
        break;
      
      default:
        this._smallBreakpoint = 600;
    }
  }
  
  get mediumBreakpoint(): number {
    return this._mediumBreakpoint;
  }
  
  set mediumBreakpoint(breakpointSpecification: number) {
    switch (this.breakpointSpecification) {
      case 0:
        this._mediumBreakpoint = 960;
        break;
      
      case 1:
        this._mediumBreakpoint = 768;
        break;
      
      default:
        this._mediumBreakpoint = 960;
    }
  }
  
  get largeBreakpoint(): number {
    return this._largeBreakpoint;
  }
  
  set largeBreakpoint(breakpointSpecification: number) {
    switch (this.breakpointSpecification) {
      case 0: 
        this._largeBreakpoint = 1280;
        break;
      
      case 1:
        this._largeBreakpoint = 992;
        break;
      
      default:
        this._largeBreakpoint = 1280;
    }
  }
  
  get xLargeBreakpoint(): number {
    return this._xLargeBreakpoint;
  }
  
  set xLargeBreakpoint(breakpointSpecification: number) {
    switch (this.breakpointSpecification) {
      case 0:
        this._xLargeBreakpoint = 1920;
        break;
      
      case 1:
        this._xLargeBreakpoint = 1200;
        break;
      
      default:
        this._xLargeBreakpoint = 1920;
    }
  }
  
  isXSmall(): boolean {
    return this._screenWidth < this._smallBreakpoint;
  }

  isSmall(): boolean {
    return this._screenWidth >= this._smallBreakpoint && this._screenWidth <= this._mediumBreakpoint;
  }

  isMedium(): boolean {
    return this._screenWidth >= this._mediumBreakpoint && this._screenWidth <= this._largeBreakpoint;
  }
  
  isBelowLarge(): boolean {
    return this._screenWidth < this._largeBreakpoint;
  }

  isLarge(): boolean {
    return this._screenWidth >= this._largeBreakpoint && this._screenWidth <= this._xLargeBreakpoint;
  }
  
  isAboveLarge(): boolean {
    return this._screenWidth >= this._largeBreakpoint;
  }

  isXLarge(): boolean {
    return this._screenWidth > this._xLargeBreakpoint;
  }
  
  onResize($event): void {
    this._screenWidth = window.innerWidth;
    this._screenHeight = window.innerHeight;
    this.resizeSource.next();
  }
  
}