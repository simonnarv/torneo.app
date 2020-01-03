import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URI = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.API_URI);
  }

  getUser(id: string) {
    return this.http.get(this.API_URI + id);
  }

  delete(id: string) {
    return this.http.delete(this.API_URI + id);
  }

  save(user: User) {
    return this.http.post(this.API_URI, user);
  }

  update(id: string, updated: User) {
    return this.http.put(this.API_URI + id, updated);
  }
}
