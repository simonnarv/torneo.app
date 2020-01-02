import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  //API_URI = 'http://localhost:8080/proyecto.torneo';

  API_URI = 'http://localhost:8080/teams/';

  constructor(private http: HttpClient) { }


  //GET TEAM LIST
  getTeams() {
    return this.http.get(this.API_URI);
  }

  //GET TEAM BY ID
  getTeam(id: string) {
    return this.http.get(this.API_URI+id);
  }

  //DELETE TEAM BY ID
  deleteTeam(id: string) {
    return this.http.delete(this.API_URI+id);
  }

  //SAVE TEAM
  saveTeam(team: Team) {
    return this.http.post(this.API_URI, team);
  }

  //UPDATE TEAM
  updateTeam(id: string, updatedTeam: Team) {
    return this.http.put(this.API_URI+id, updatedTeam);
  }
}
