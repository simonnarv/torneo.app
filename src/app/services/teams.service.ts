import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '../models/Team';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  API_URI = environment.apiEndpoint + '/teams/';

  constructor(private http: HttpClient) { }

  //GET TEAM LIST
  getAll() : Observable<Team[]> {
    return this.http.get<Team[]>(this.API_URI);
  }

  //GET TEAM BY ID
  getById(id: number) {
    return this.http.get(this.API_URI+id);
  }

  //GET TEAMS BY COMPETITION ID
  getByCompetitionId(id: number) {
    return this.http.get<Team[]>(this.API_URI + 'competitions/'+ id);
  }

  //DELETE TEAM BY ID
  delete(id: number) {
    return this.http.delete(this.API_URI+id);
  }

  //SAVE TEAM
  create(team: Team) {
    return this.http.post(this.API_URI, team);
  }

  //UPDATE TEAM
  update(id: number, updatedTeam: Team) {
    return this.http.put(this.API_URI + id, updatedTeam);
  }
}
