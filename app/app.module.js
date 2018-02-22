"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
require("rxjs/add/operator/map");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ej2_ng_grids_1 = require("@syncfusion/ej2-ng-grids");
var order_service_1 = require("./order.service");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, ej2_ng_grids_1.GridAllModule, http_1.HttpModule, http_1.JsonpModule, platform_browser_1.BrowserModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [order_service_1.OrdersService]
    })
], AppModule);
exports.AppModule = AppModule;
