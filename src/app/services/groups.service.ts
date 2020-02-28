import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../models/group';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  API_URI = environment.apiEndpoint + '/groups/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.API_URI);
  }

  getById(id: number):Observable<Group> {
    return this.http.get<Group>(this.API_URI + id);
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  create(teamGroup: Group) {
    return this.http.post(this.API_URI, teamGroup);
  }

  update(id: number, updatedTeamGroup: Group) {
    return this.http.put(this.API_URI + id, updatedTeamGroup);
  }
}
