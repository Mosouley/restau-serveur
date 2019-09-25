import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DataService } from '../services/data.service';
import { API_URLS } from '../config/app.url.config';


@Injectable()
export class InvoiceService extends DataService {

  constructor( private _http: HttpClient) {
    super(API_URLS.INVOICE_URL, _http);
  }
  addTransactionLine(invoiceId: number, transax: any): Observable<any> {
    // JSON.stringify(transax);
    return this._http.post(API_URLS.INVOICE_URL + `/${invoiceId}` + `/transax`, transax);
  }
}
