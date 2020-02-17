import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URI = environment.apiEndpoint + '/users/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API_URI);
  }

  getById(id: number) {
    return this.http.get(this.API_URI + id);
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  save(user: User) {
    return this.http.post(this.API_URI, user);
  }

  update(id: number, updated: User) {
    return this.http.put(this.API_URI + id, updated);
  }
}
