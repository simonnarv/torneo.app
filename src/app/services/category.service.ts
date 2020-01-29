import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Category } from '../models/Category';
import { Observable } from 'rxjs';

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
  saveTeam(category: Category) {
    return this.http.post(this.API_URI, category);
  }

  //UPDATE CATEGORY
  updateTeam(id: string, updatedCategory: Category) {
    return this.http.put(this.API_URI + id, updatedCategory);
  }


}
