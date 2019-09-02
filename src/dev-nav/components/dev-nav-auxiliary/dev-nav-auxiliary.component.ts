import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DevNavData1Service } from '../../services/dev-nav-data-1.service';

@Component({
  selector: 'dev-nav-auxiliary',
  templateUrl: './dev-nav-auxiliary.component.html',
  styleUrls: ['./dev-nav-auxiliary.component.scss']
})
export class DevNavAuxiliaryComponent implements OnInit {
  
  auxiliaryId$: Observable<any>;
  
  constructor(
    private devNavData1Service: DevNavData1Service,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.auxiliaryId$ = this.activatedRoute.paramMap
      .map((params) => {
        return params.get('auxiliaryId') || 'None';
      });
      
  }

  closeAuxiliaryOutlet() {
    this.router.navigate([{ outlets: { 'auxiliary': null }}], { relativeTo: this.activatedRoute.parent });
  }

}
