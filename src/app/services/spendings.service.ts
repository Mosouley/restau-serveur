import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DataService } from '../services/data.service';
import { API_URLS } from '../config/app.url.config';


@Injectable()
export class SpendingsService extends DataService {

  constructor( private _http: HttpClient) {
    super(API_URLS.SPENDINGS_URL, _http);
  }
}
