import { Component, OnInit } from '@angular/core';
import { TimestampService } from '../../core/timestamp/timestamp.service';

@Component({
  selector: 'secure-shell',
  templateUrl: './secure-shell.component.html',
  styleUrls: ['./secure-shell.component.scss']
})
export class SecureShellComponent implements OnInit {
  
  frameworkConfigSettings: any;
  
  constructor(private timestampService: TimestampService) { }

  ngOnInit() {
    this.timestampService.getUnixMillisecondsTimestamp();
    this.timestampService.getUnixSecondsTimestamp();
    this.timestampService.getLocalTimestamp();
  }

}
