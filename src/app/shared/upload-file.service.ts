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

    const req = new HttpRequest('POST', 'http://localhost:8081/api/file/upload', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  pushFileTwoToStorage(file: File): Observable<HttpEvent<{}>> {

    const formData: FormData = new FormData();
    formData.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8080/post', formData, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8081/api/file/all');
  }
  getTheFiles(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:8080/getallfiles');
  }
}
