import { API_URLS } from './../config/app.url.config';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private http: HttpClient) { }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {

    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', API_URLS.FILE_UPLOAD_URL + '/file/upload', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  pushFileTwoToStorage(file: File): Observable<HttpEvent<{}>> {

    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', API_URLS.FILE_UPLOAD_URL + '/save', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get( API_URLS.FILE_UPLOAD_URL + '/file/all');
  }
  getTheFiles(): Observable<string[]> {
    return this.http.get<string[]>(API_URLS.FILE_UPLOAD_URL  + '/getallfiles');
  }
}
