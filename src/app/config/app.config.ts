// import { Inject, Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

// @Injectable()
// export class AppConfig {

//   private path = 'https://s3.amazonaws.com/ci-tests-1/configurations/fw-public/fw-public-config.json';
//   private config: any;
  
//   constructor(private http: Http) {
    
//   }
  
//   public getConfig(key: any) {
//     return this.config[key];
//   }

//   public load() {
    
//     let promise = new Promise((resolve, reject) => {
//       this.http.get(this.path)
//         .map(res => res.json())
//         .catch((error: any): any => {
//           console.log('load error 1');
//           resolve(true);
//           return Observable.throw(error.json().error || 'load error 2');
//         }).subscribe((configResponse) => {
//             this.config = configResponse;
//             resolve(true);
//         });
        
//     });
    
//     return promise;
    
//   };
// }