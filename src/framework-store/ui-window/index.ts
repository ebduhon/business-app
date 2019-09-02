export * from './ui-window.actions';
export * from './ui-window.reducer';
export * from './ui-window.model';
export * from './ui-window.facade';


/** Bootstrap breakpoints
  *
  * Small devices (landscape phones, 576px and up)
  * Medium devices (tablets, 768px and up)
  * Large devices (desktops, 992px and up)
  * Extra large devices (large desktops, 1200px and up)
  * 
  * 
  */

/** Material Design breakpoints
  * https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  *
  * xsmall: 0 - 600
  * small: 600 - 960
  * medium: 960 - 1280
  * large: 1280 - 1920
  * xlarge: 1920+
  * 
  */
  
  //TODO: 
  // smallBreakpoint = 600; 
  // mediumBreakpoint = 960;
  // largeBreakpoint = 1280;
  // xLargeBreakpoint = 1920;
  
  // isXSmall() : boolean {
  //   return this.screenWidth < this.smallBreakpoint;
  // }

  // isSmall() : boolean {
  //   return this.screenWidth >= this.smallBreakpoint && this.screenWidth <= this.mediumBreakpoint;
  // }

  // isMedium() : boolean {
  //   return this.screenWidth >= this.mediumBreakpoint && this.screenWidth <= this.largeBreakpoint;
  // }
  
  // isBelowLarge() : boolean {
  //   return this.screenWidth < this.largeBreakpoint;
  // }

  // isLarge() : boolean {
  //   return this.screenWidth >= this.largeBreakpoint && this.screenWidth <= this.xLargeBreakpoint;
  // }
  
  // isAboveLarge() : boolean {
  //   return this.screenWidth >= this.largeBreakpoint;
  // }

  // isXLarge() : boolean {
  //   return this.screenWidth > this.xLargeBreakpoint;
  // }