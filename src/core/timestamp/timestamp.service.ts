import { Injectable } from '@angular/core';
import * as moment from 'moment-timezone';

//References: 
// https://stackoverflow.com/questions/38674835/how-to-include-moment-timezone-in-angular-2-app
// https://momentjs.com/docs/#/displaying/unix-timestamp-milliseconds/
// https://www.ecma-international.org/ecma-262/6.0/#sec-time-values-and-time-range

@Injectable()
export class TimestampService {
  
  constructor() {
    
  }
  
  getUnixMillisecondsTimestamp() {
    let momentUnixMilliseconds = moment().valueOf();
    console.log(momentUnixMilliseconds);
    return momentUnixMilliseconds;
  }
  
  getUnixSecondsTimestamp() {
    let momentUnixSeconds = moment().unix();
    console.log(momentUnixSeconds);
    return momentUnixSeconds;
  }
  
  getLocalTimestamp() {
    let momentLocal = moment().tz('America/Los_Angeles').format('dddd, MMMM Do YYYY, h:mm:ss a');
    console.log(momentLocal);
    return momentLocal;
  }
  
}