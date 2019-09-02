import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { LocalStorage, LOCAL_STORAGE_PROVIDER } from './local-storage/local-storage.service'; //TODO: review removing the LocalStorage service in the fw-public module by replacing all code with this service instead
import { LoggerService } from './logger/logger.service';
import { TimestampService } from './timestamp/timestamp.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    LocalStorage,
    LoggerService,
    TimestampService
  ],
  exports: [
  
  ]
})
export class CoreModule {
  
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only.');
    }
  }
  
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: TimestampService, useClass: TimestampService },
        LOCAL_STORAGE_PROVIDER,
        { provide: LoggerService, useClass: LoggerService },
      ]
    };
  }
  
}