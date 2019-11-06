import { API_URLS } from './../config/app.url.config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  // private headers = new HttpHeaders({'Content-Type': 'multipart/form-data'});

  constructor(private http: HttpClient) { }



  pushFileToStorage(file): Observable<HttpEvent<{}>> {
    // const headers: any = new HttpHeaders();
    // headers.append('Content-type', 'undefined');
    // const headers = new HttpHeaders({'Content-Type': 'undefined'});
    // very important to not set the hearder manually in angular
    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', API_URLS.FILE_UPLOAD_URL, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    // return this.http.post<any>(API_URLS.FILE_UPLOAD_URL, formData);
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get( API_URLS.FILE_UPLOAD_URL + '/file/all');
  }
  getTheFiles(): Observable<string[]> {
    return this.http.get<string[]>(API_URLS.FILE_UPLOAD_URL  + '/getallfiles');
  }

}
