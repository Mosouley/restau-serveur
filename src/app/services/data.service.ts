// import { LoginComponent } from './../login/login.component';
import { CrudService } from './crud.service';
import { catchError, map} from 'rxjs/operators';
import { HttpClient, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { AppError } from '../app-errors/app-error';
import { NotFoundError } from '../app-errors/not-found-error';
import { BadInput } from '../app-errors/bad-input';
// import { Invoice } from '../shared/model/invoice';


export class DataService implements CrudService {

  //  httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json'
  //   })
  // };
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private url: string, private http: HttpClient) {
    // const token = localStorage.getItem('AuthToken');
    // this.headers.append('Authorization', 'Bearer ' + token);
   }


  getAll(): Observable<any> {

    return  this.http.get(this.url);
    // .pipe(); //catchError(this.handleError)

  }
  find(id): Observable<any> {
    return this.http.get(this.url + `/${id}`, {headers: this.headers});
  }
  create(resource): Observable<any> {
    // console.log(JSON.stringify(resource));
    return  this.http.post(this.url, resource, {headers: this.headers});
    // .pipe(catchError(this.handleError));


  }
  update(resource): Observable<any> {
    return this.http.put(this.url, resource, {headers: this.headers});
    // .pipe(catchError(this.handleError));
  }

  delete(id): Observable<any> {
    return this.http.delete(this.url + `/${id}`, {headers: this.headers});
    // .pipe(catchError(this.handleError));
  }

  // addAll(resource): Observable<any> {
  //   return this.http.post(this.url, JSON.stringify(resource));
  // }

  // private handleError(error: Response) {
  //   if (error.status === 400) {
  //   return Observable.throw(new BadInput(error.body || []));
  //   }
  //   // console.log(error.text );
  //   if (error.status === 404) {
  //   return Observable.throw(new NotFoundError());
  //   }
  //   // console.log(error.text);
  //   return  Observable.throw( new AppError(error));

  // }
}

// @Injectable()
// export class GeneralService {
//   private invoiceSource = new BehaviorSubject<Invoice>(new Invoice());
//   currentInvoice = this.invoiceSource.asObservable();

//   changeInvoice(invoice: Invoice) {
//       this.invoiceSource.next (invoice);
//       // console.log(invoice);

//   }

// }
