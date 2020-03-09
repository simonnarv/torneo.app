import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '../models/team';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  API_URI = environment.apiEndpoint + '/teams/';

  constructor(private http: HttpClient) { }

  getAll() : Observable<Team[]> {
    return this.http.get<Team[]>(this.API_URI);
  }

  getById(id: number): Observable<Team> {
    return this.http.get<Team>(this.API_URI + id);
  }

  getByCompetitionId(id: number): Observable<Team[]> {
    return this.http.get<Team[]>(this.API_URI + 'competitions/' + id);
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  create(team: Team) {
    return this.http.post(this.API_URI, team);
  }

  update(id: number, updatedTeam: Team) {
    return this.http.put(this.API_URI + id, updatedTeam);
  }
}
