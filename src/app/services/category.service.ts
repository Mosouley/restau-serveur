import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DataService } from '../services/data.service';
import { API_URLS } from '../config/app.url.config';


@Injectable()
export class CategoryService extends DataService {

  constructor( private _http: HttpClient) {
    super(API_URLS.CATEGORY_URL, _http);
  }

  findProduits(nameCategory): Observable<any> {
    return   this._http.get(API_URLS.CATEGORY_URL + `/${nameCategory}`);
  }

}
