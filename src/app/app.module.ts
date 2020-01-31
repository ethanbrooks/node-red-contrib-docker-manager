import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {APP_BASE_HREF} from '@angular/common';
import {RealtimeGridComponent} from './realtime_grid.component';
import {TransferHttpCacheModule} from '@nguniversal/common';

import { DxDataGridModule, DxSliderModule } from 'devextreme-angular';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    RealtimeGridComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: RealtimeGridComponent, pathMatch: 'full'},
    ]),
    TransferHttpCacheModule,
    DxDataGridModule, 
    DxSliderModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [RealtimeGridComponent]
})
export class AppModule { }


platformBrowserDynamic().bootstrapModule(AppModule);