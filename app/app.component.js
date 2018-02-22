"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var order_service_1 = require("./order.service");
var AppComponent = (function () {
    function AppComponent(service) {
        this.service = service;
        this.data = service;
    }
    AppComponent.prototype.dataStateChange = function (state) {
        this.service.execute(state);
    };
    AppComponent.prototype.failure = function (e) {
        debugger;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.pageOptions = { pageSize: 10, pageCount: 4 };
        var state = { skip: 0, take: 12 };
        this.service.execute(state);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        template: "<ej-grid [dataSource]='data | async' allowPaging= 'true' [pageSettings]='pageOptions' allowSorting= 'true' allowGrouping= 'true' (dataStateChange)= 'dataStateChange($event)' (actionFailure)= 'failure($event)'>\n        <e-columns>\n            <e-column field= \"OrderID\" headerText=\"Order ID\" width=\"130\" ></e-column>\n            <e-column field= \"CustomerID\" headerText=\"Customer Name\" width=\"150\"></e-column>\n            <e-column field= \"ShipName\" headerText=\"Ship Name\" width=\"200\"></e-column>\n            <e-column field= \"ShipCity\" headerText=\"Ship City\" width=\"150\"></e-column>\n        </e-columns>\n    </ej-grid>"
    }),
    __metadata("design:paramtypes", [order_service_1.OrdersService])
], AppComponent);
exports.AppComponent = AppComponent;
