import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Match } from '../models/Match';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  API_URI = 'http://localhost:8080/matches/';

  constructor(private http: HttpClient) { }

  //GET MATCH LIST
  getMatches() {
    return this.http.get(this.API_URI);
  }

  //GET MATCH BY ID
  getMatch(id: string) {
    return this.http.get(this.API_URI+id);
  }

  //DELETE MATCH BY ID
  deleteMatch(id: string) {
    return this.http.delete(this.API_URI+id);
  }

  //SAVE MATCH
  saveMatch(match: Match) {
    return this.http.post(this.API_URI, match);
  }

  //UPDATE MATCH
  updateMatch(id: string, updatedMatch: Match) {
    return this.http.put(this.API_URI+id, updatedMatch);
  }
}
