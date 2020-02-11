import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tournament } from '../models/Tournament';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  API_URI = environment.apiEndpoint + '/tournaments/';
  API_URI_CATEGORY = environment.apiEndpoint + '/tournaments/categories/';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.API_URI);
  }

  getById(id: number) {
    return this.http.get(this.API_URI + id);
  }
 
  getByCategotyId(id: number): Observable<Tournament>{
    return this.http.get<Tournament>(this.API_URI_CATEGORY + id);
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  create(tournament: Tournament) {
    return this.http.post(this.API_URI, tournament);
  }

  update(id: number, updatedtournament: Tournament) {
    return this.http.put(this.API_URI + id, updatedtournament);
  }
}
