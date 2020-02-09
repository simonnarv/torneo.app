import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Category } from '../models/Category';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
    // TODO: 'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URI = 'http://localhost:8080/categories/';

  constructor(private http: HttpClient) { }

  //GET CATEGORY LIST
  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.API_URI);
  }

  //GET CATEGORY BY ID
  getCategory(id: string): Observable<Category> {
    return this.http.get<Category>(this.API_URI + id);
  }

  //DELETE CATEGORY BY ID
  deleteCategory(id: string) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE CATEGORY
  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.API_URI, category, httpOptions)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err)

        return throwError(err);
      })
    );
  }

 

  //UPDATE CATEGORY
  updateTeam(id: string, updatedCategory: Category) {
    return this.http.put(this.API_URI + id, updatedCategory);
  }


}
