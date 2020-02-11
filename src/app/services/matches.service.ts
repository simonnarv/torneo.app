import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/Match';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  API_URI = environment.apiEndpoint + '/matches/';

  constructor(private http: HttpClient) { }

  //GET MATCH LIST
  getAll() {
    return this.http.get(this.API_URI);
  }

  //GET MATCH BY ID
  getById(id: number) {
    return this.http.get(this.API_URI+id);
  }

  //DELETE MATCH BY ID
  delete(id: number) {
    return this.http.delete(this.API_URI+id);
  }

  //SAVE MATCH
  create(match: Match) {
    return this.http.post(this.API_URI, match);
  }

  //UPDATE MATCH
  update(id: number, updatedMatch: Match) {
    return this.http.put(this.API_URI+id, updatedMatch);
  }
}
