

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
// import { CookieService } from 'ngx-cookie-service';
// on peut construire notre propre service de gestion des cookies
import {TokenStorageService} from './token-storage.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private refreshTokenInProgress = false;
  // Refresh Token Subject tracks the current token, or is null if no token is currently
  // available (e.g. refresh pending).

  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
);
  constructor(private token: TokenStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let authReq = req;


    const token = this.token.getToken();

    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set( TOKEN_HEADER_KEY, `Bearer ${token}` ) });
    }
    // authReq = req.clone({headers: {req.headers.set('X-Requested-With', 'XMLHttpRequest')}})

    return next.handle(authReq);

  }
}
  export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ];


