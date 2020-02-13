import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Category } from '../models/Category';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + LoginService.getToken()
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URI = environment.apiEndpoint + '/categories/';

  constructor(private http: HttpClient, private loginService: LoginService) { 
      httpOptions.headers.append('Authorization Bearer', LoginService.getToken());
  }

  //GET CATEGORY LIST
  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URI);
  }

  //GET CATEGORY BY ID
  getById(id: number): Observable<Category> {
    return this.http.get<Category>(this.API_URI + id);
  }

  //DELETE CATEGORY BY ID
  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE CATEGORY
  create(category: Category): Observable<Category> {
    return this.http.post<Category>(this.API_URI, category, httpOptions)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err)
        return throwError(err);
      })
    );
  }

  //UPDATE CATEGORY
  update(id: number, updatedCategory: Category) {
    return this.http.put(this.API_URI + id, updatedCategory);
  }
}
