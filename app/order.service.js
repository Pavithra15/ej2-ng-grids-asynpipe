"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var Subject_1 = require("rxjs/Subject");
var OrdersService = (function (_super) {
    __extends(OrdersService, _super);
    function OrdersService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.BASE_URL = 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders';
        return _this;
    }
    OrdersService.prototype.execute = function (state) {
        var _this = this;
        this.getData(state).subscribe(function (x) { return _super.prototype.next.call(_this, x); });
    };
    OrdersService.prototype.getData = function (state) {
        var pageQuery = "$skip=" + state.skip + "&$top=" + state.take;
        var sortQuery = '';
        if ((state.sorted || []).length) {
            sortQuery = "&$orderby=" + state.sorted.map(function (obj) {
                return obj.direction === 'descending' ? obj.name + " desc" : obj.name;
            }).reverse().join(',');
        }
        return this.http
            .get(this.BASE_URL + "?" + pageQuery + sortQuery + "&$count=true")
            .map(function (response) { return response.json(); })
            .map(function (response) { return ({
            result: response['value'],
            count: parseInt(response['@odata.count'], 10)
        }); })
            .map(function (data) { return data; });
    };
    return OrdersService;
}(Subject_1.Subject));
OrdersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OrdersService);
exports.OrdersService = OrdersService;
