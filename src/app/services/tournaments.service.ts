import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Tournament } from '../models/Tournament';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentsService {

  API_URI = 'http://localhost:8080/tournaments/';

  API_URI_CATEGORY = 'http://localhost:8080/tournaments/categories/';

  constructor(private http: HttpClient) { }


  getTournaments() {
    return this.http.get(this.API_URI);
  }


  getTournament(id: string) {
    return this.http.get(this.API_URI + id);
  }
 
  getTournamentsByCategotyId(id: string): Observable<Tournament>{
    return this.http.get<Tournament>(this.API_URI_CATEGORY + id);
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
