import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, Type, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridAllModule } from '@syncfusion/ej2-ng-grids';









































import { OrdersService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import {AppComponent} from './app.component';




@NgModule({
    imports: [CommonModule,   GridAllModule,  HttpModule, JsonpModule, BrowserModule],
declarations: [AppComponent],
bootstrap: [AppComponent],
providers:[OrdersService]
})
export class AppModule { }