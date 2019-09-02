import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DevNavData1Service } from '../../services/dev-nav-data-1.service';

@Component({
  selector: 'dev-nav-ancillary',
  templateUrl: './dev-nav-ancillary.component.html',
  styleUrls: ['./dev-nav-ancillary.component.scss']
})
export class DevNavAncillaryComponent implements OnInit {

  ancillaryId$: Observable<any>;

  constructor(
    private devNavData1Service: DevNavData1Service,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.ancillaryId$ = this.activatedRoute.paramMap
      .map((params) => {
        return params.get('ancillaryId') || 'None';
      });
      
  }
  
  closeAncillaryOutlet() {
    this.router.navigate([{ outlets: { 'ancillary': null }}], { relativeTo: this.activatedRoute.parent });
  }

}
