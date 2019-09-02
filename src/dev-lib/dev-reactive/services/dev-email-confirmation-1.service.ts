import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/of';

import { environment } from '../../../environments/environment';
export const CLOUD_FUNCTION_URL = environment.firebase['cloudFunctionUrl'];

@Injectable()
export class DevEmailConfirmation1Service {
  
  constructor(private httpClient: HttpClient) {
    
  }
  
  sendConfirmationEmail(emailAddress) {
    
    let url = `${CLOUD_FUNCTION_URL}/sendEmailConfirmation-sendEmailConfirmation`;

    let emailHeaders = new HttpHeaders();
    emailHeaders.append('Content-Type', 'application/json');
    emailHeaders.append('Access-Control-Allow-Origin', '*');

    let emailParams = new HttpParams();
    emailParams.append('to', emailAddress);
    emailParams.append('from', 'ebduhon@gmail.com');
    emailParams.append('subject', 'Test 1 Subject');
    emailParams.append('text', 'test 1 text');
    emailParams.append('html', '<html><p>Test 1!</p></html>');
    
    let body = {
      to: emailAddress,
      from: 'ebduhon@gmail.com',
      subject: 'Test 1 Subject',
      text: 'test 1 text',
      html: '<html><p>Test 1!</p></html>'
    };
    
    return this.httpClient.post(url, body, {
        headers: emailHeaders,
        params: emailParams
      })
      .toPromise()
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    
  }
}
