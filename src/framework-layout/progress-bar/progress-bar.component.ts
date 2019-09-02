import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ProgressBar } from '../../framework-store/progress-bar';
import { ProgressBarFacade } from '../../framework-store/progress-bar/progress-bar.facade';
import * as ProgressBarActions from '../../framework-store/progress-bar/progress-bar.actions';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  
  progressBarColor$ = this.progressBarService.progressBarColor$;
  progressBarMode$ = this.progressBarService.progressBarMode$;
  progressBarValue$ = this.progressBarService.progressBarValue$;
  progressBarBufferValue$ = this.progressBarService.progressBarBufferValue$;

  constructor(private store: Store<any>, private progressBarService: ProgressBarFacade) { }

  ngOnInit() {
  }

}
