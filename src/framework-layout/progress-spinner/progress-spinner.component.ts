import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProgressSpinner } from '../../framework-store/progress-spinner';
import { ProgressSpinnerFacade } from '../../framework-store/progress-spinner/progress-spinner.facade';
import * as ProgressSpinnerActions from '../../framework-store/progress-spinner/progress-spinner.actions';

@Component({
  selector: 'progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  
  progressSpinnerColor$ = this.progressSpinnerService.progressSpinnerColor$;
  progressSpinnerMode$ = this.progressSpinnerService.progressSpinnerMode$;
  progressSpinnerValue$ = this.progressSpinnerService.progressSpinnerValue$;
  progressSpinnerStrokeWidth$ = this.progressSpinnerService.progressSpinnerStrokeWidth$;
  progressSpinnerDiameter$ = this.progressSpinnerService.progressSpinnerDiameter$;

  constructor(private store: Store<any>, private progressSpinnerService: ProgressSpinnerFacade) { }

  ngOnInit() {
  }

}
