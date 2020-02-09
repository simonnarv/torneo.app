import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamGroup } from '../models/TeamGroup';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamGroupsService {

  API_URI = 'http://localhost:8080/groups/';

  constructor(private http: HttpClient) { }

  //GET TEAMGROUP LIST
  getTeamGroups() {
    return this.http.get(this.API_URI);
  }

  //GET TEAMGROUP BY ID
  getTeamGroup(id: string):Observable<TeamGroup> {
    return this.http.get<TeamGroup>(this.API_URI + id);
  }

  //DELETE TEAMGROUP BY ID
  deleteGroup(id: string) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE TEAMGROUP
  saveTeamGroup(teamGroup: TeamGroup) {
    return this.http.post(this.API_URI, teamGroup);
  }

  //UPDATE TEAMGROUP
  updateTeamGroup(id: string, updatedTeamGroup: TeamGroup) {
    return this.http.put(this.API_URI + id, updatedTeamGroup);
  }
}
