import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/Group';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  API_URI = environment.apiEndpoint + '/groups/';

  constructor(private http: HttpClient) { }

  //GET TEAMGROUP LIST
  getAll() {
    return this.http.get(this.API_URI);
  }

  //GET TEAMGROUP BY ID
  getById(id: number):Observable<Group> {
    return this.http.get<Group>(this.API_URI + id);
  }

  //DELETE TEAMGROUP BY ID
  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE TEAMGROUP
  create(teamGroup: Group) {
    return this.http.post(this.API_URI, teamGroup);
  }

  //UPDATE TEAMGROUP
  update(id: number, updatedTeamGroup: Group) {
    return this.http.put(this.API_URI + id, updatedTeamGroup);
  }
}
