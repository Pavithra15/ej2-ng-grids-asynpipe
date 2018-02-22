import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { DataStateChangeEventArgs, Sorts, DataResult } from '@syncfusion/ej2-ng-grids'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators/map';

@Injectable()
export class OrdersService extends Subject<DataStateChangeEventArgs> {
    private BASE_URL = 'http://services.odata.org/V4/Northwind/Northwind.svc/Orders';

    constructor(private http: Http) {
        super();
    }

    public execute(state: any): void {
        this.getData(state).subscribe(x => super.next(x));
    }   

    protected getData(state: DataStateChangeEventArgs): Observable<DataStateChangeEventArgs> {
        const pageQuery = `$skip=${state.skip}&$top=${state.take}`;
        let sortQuery: string = '';

        if ((state.sorted || []).length) {
            sortQuery = `&$orderby=` + state.sorted.map((obj: Sorts) => {
                return obj.direction === 'descending' ? `${obj.name} desc` : obj.name;
            }).reverse().join(',');
        }

        return this.http
            .get(`${this.BASE_URL}?${pageQuery}${sortQuery}&$count=true`)
            .map((response: any) => response.json())
            .map((response: any) => (<DataResult>{
                result: response['value'],
                count: parseInt(response['@odata.count'], 10)
            }))
            .map((data: any) => data);
    }
}
