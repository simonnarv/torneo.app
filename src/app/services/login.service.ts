import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Token } from '../models/token';
import * as jwt_decode from 'jwt-decode';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // TODO: 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  API_URI = environment.apiEndpoint + '/login/';

  constructor(private http: HttpClient) { }

  login(user: User): Observable<Token> {
    return this.http.post<Token>(this.API_URI, user, httpOptions);
  }

  static getToken() : string {
    return localStorage.getItem("token");
  }

  isAdmin() : boolean {
    var token = LoginService.getToken();
    if (token && token != 'undefined') {
      var decoded = jwt_decode(token);
      var rol = decoded['auth'][0].authority;

      return rol == 'ROLE_ADMIN'; // Role.ROLE_ADMIN;
    }

    return false;
  }
}
