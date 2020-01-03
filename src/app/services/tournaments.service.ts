import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tournament } from '../models/Tournament';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  API_URI = 'http://localhost:8080/tournaments/';

  constructor(private http: HttpClient) { }


  getTournaments() {
    return this.http.get(this.API_URI);
  }


  getTournament(id: string) {
    return this.http.get(this.API_URI + id);
  }


  deleteTournament(id: string) {
    return this.http.delete(this.API_URI + id);
  }


  saveTournament(tournament: Tournament) {
    return this.http.post(this.API_URI, tournament);
  }

  updateTournament(id: string, updatedtournament: Tournament) {
    return this.http.put(this.API_URI + id, updatedtournament);
  }
}
