import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeamGroup } from '../models/TeamGroup';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeamGroupsService {

  API_URI = environment.apiEndpoint + '/groups/';

  constructor(private http: HttpClient) { }

  //GET TEAMGROUP LIST
  getAll() {
    return this.http.get(this.API_URI);
  }

  //GET TEAMGROUP BY ID
  getById(id: number):Observable<TeamGroup> {
    return this.http.get<TeamGroup>(this.API_URI + id);
  }

  //DELETE TEAMGROUP BY ID
  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE TEAMGROUP
  create(teamGroup: TeamGroup) {
    return this.http.post(this.API_URI, teamGroup);
  }

  //UPDATE TEAMGROUP
  update(id: number, updatedTeamGroup: TeamGroup) {
    return this.http.put(this.API_URI + id, updatedTeamGroup);
  }
}
