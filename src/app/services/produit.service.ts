import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DataService } from '../services/data.service';
import { API_URLS } from '../config/app.url.config';


@Injectable()
export class ProduitService extends DataService {

  constructor( private _http: HttpClient) {
    super(API_URLS.PRODUITS_URL, _http);
  }
  getProduitsByCategory(nameCategorie: string): Observable<any> {
    return this._http.get(API_URLS.PRODUITS_URL + `/by/${nameCategorie}`);


  }
}
