import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { OrdersService } from './order.service';
import { DataStateChangeEventArgs, Sorts } from '@syncfusion/ej2-grids';

@Component({
    selector: 'app-container',
    template:`<ej-grid [dataSource]='data | async' allowPaging= 'true' [pageSettings]='pageOptions' allowSorting= 'true' allowGrouping= 'true' (dataStateChange)= 'dataStateChange($event)' (actionFailure)= 'failure($event)'>
        <e-columns>
            <e-column field= "OrderID" headerText="Order ID" width="130" ></e-column>
            <e-column field= "CustomerID" headerText="Customer Name" width="150"></e-column>
            <e-column field= "ShipName" headerText="Ship Name" width="200"></e-column>
            <e-column field= "ShipCity" headerText="Ship City" width="150"></e-column>
        </e-columns>
    </ej-grid>`    
})
export class AppComponent {
    public data: Observable<DataStateChangeEventArgs>;
    public pageOptions: Object;
    public state: DataStateChangeEventArgs;

    constructor( private service: OrdersService) {
        this.data = service;
        
    }

    public dataStateChange(state: DataStateChangeEventArgs): void {
        this.service.execute(state);
    }

    public failure(e: any): void {
        debugger;
    }

    public ngOnInit(): void {
        this.pageOptions = { pageSize: 10, pageCount: 4 };
        let state = { skip: 0, take: 12 };
        this.service.execute(state);
    }
}

