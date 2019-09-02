import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'dev-materialized-view',
  templateUrl: './dev-materialized-view.component.html',
  styleUrls: ['./dev-materialized-view.component.scss']
})
export class DevMaterializedViewComponent implements OnInit, AfterViewInit {

  @ViewChild('materializedViewContainer', { read: ViewContainerRef })
  vcr: ViewContainerRef;
  
  @ViewChild('materializedViewTemplate')
  templateView: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.vcr.createEmbeddedView(this.templateView);
  }

}
