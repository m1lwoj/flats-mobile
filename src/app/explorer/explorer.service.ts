import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';
import { Flat, FlatList } from './models/flat.model';
import { Filter } from './models/filter.model';


@Injectable()
export class ExplorerService {
    baseUrl = 'http://51.178.26.242:5015/api';

    constructor(private httpClient: HttpClient) { }


    public getFlats(filter: Filter, page: number): Observable<FlatList> {
        let url = this.baseUrl + '/flats?Page=' + page;

        if (filter) {
            url += '&PriceTo=' + filter.priceTo;
            url += '&PriceFrom=' + filter.priceFrom;
            url += '&MeterageFrom=' + filter.meterageFrom;
            url += '&MeterageTo=' + filter.meterageTo;

            for (let i = 0; i < filter.LatLons.length; i++) {
                url += '&LatLons[' + i + '].LonFrom=' + filter.LatLons[i].LonFrom;
                url += '&LatLons[' + i + '].LonTo=' + filter.LatLons[i].LonTo;
                url += '&LatLons[' + i + '].LatFrom=' + filter.LatLons[i].LatFrom;
                url += '&LatLons[' + i + '].LatTo=' + filter.LatLons[i].LatTo;
            }
        }
        url = url + '&Results=30&OrderBy=dateAdded&SortOrder=Desc';
        return this.httpClient.get<FlatList>(url);
    }

    public getFlat(id: string): Observable<Flat> {
        return this.httpClient.get<Flat>(this.baseUrl + '/flats/' + id);
    }
}
