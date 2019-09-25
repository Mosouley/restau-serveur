import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DataService } from '../services/data.service';
import { API_URLS } from '../config/app.url.config';


@Injectable()
export class FournisseurService extends DataService {

  constructor( _http: HttpClient) {
    super(API_URLS.FOURNISSEURS_URL, _http);
  }
}
