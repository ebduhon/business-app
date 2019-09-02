import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  //TODO: implement a logger-service definition interface 
  /* 
   * TODO: import app-specific configuration that overwrites the framework-configuration.service 
   * to set a app-title for the logger 
   * i.e. or a reporting service to persist app errors on a server-side database
   */
  //TODO: either add to the application-wide providers array or corresponding component that displays the log data
  //TODO: consider implementing at the framework level

  constructor() {

  }

  public static LeadInStyle = 'font-weight:bold; color:green';

  public static banner(text): void {
    console.log(`%c ${text} `, "color: white; font-size:15px; background-color: #666666; width: 100%");
  }

  public static heading(text): void {
    console.log(`%c ${text} `, "color: white; color: #666666; background-color: #f2f2f2; width: 100%");
  }
  
  // public logInfo(msg : any) { this.log({`INFO: ${msg}`); }
  // public logDebug(msg : any) { this.log({`DEBUG: ${msg}`); }
  // public logError(msg : any) { this.log({`ERROR: ${msg}`, true); }
  
  // private log(msg: any, isErr = false) {
  //   isErr ? console.error(msg) : console.log(msg);
  // }

}