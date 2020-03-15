import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { API_URLS } from './../config/app.url.config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './sigup-info';
import { JwtResponse } from './jwt-response';
import { TokenStorageService } from './token-storage.service';
import { JwtHelperService} from '@auth0/angular-jwt';
import { User } from '../shared/model/user';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  constructor( private http: HttpClient,
    private tokenService: TokenStorageService,
    private router: Router
  ) {

   }

  login(credentials):  Observable<JwtResponse> {
    // on pourrait utiliser des credentials non types comme JSON.stringify(credentials)
    return this.http.post<JwtResponse>(API_URLS.SINGNING_URL,
    credentials, httpOptions);
  }
  logout() {
  this.tokenService.signOut();
  // location.reload();
  }
  isLoggedIn() {
    // create an instance of jwthelper
    const jwtHelperService = new JwtHelperService();
    // get the token from the local storage

    const token = localStorage.getItem('AuthToken');
          // const expirationDate = jwtHelperService.getTokenExpirationDate(token);
          const isExpired = jwtHelperService.isTokenExpired(token);
    if (!token || isExpired) {
      this.logout();
      // return false;
    } else {

      //  const decodedToken = jwtHelperService.decodeToken(token);
      return !isExpired;
    }

  }

  decodeUserFromToken(token) {
    return new JwtHelperService().decodeToken(token);
  }
  signUp(info: SignUpInfo): Observable<string> {
   return this.http.post<string>(API_URLS.SINGNUP_URL, info, httpOptions);
  }
  isAdmin(): boolean {
    // get the roles from local storage or state management
    const roles = this.tokenService.getAuthorities();
    if ( roles.find(r => r['authority'] === 'ROLE_ADMIN')) {
      return true;
    } else {
    //  this.router.navigate(['/access-denied']);
    return false;
   }

  }


}
