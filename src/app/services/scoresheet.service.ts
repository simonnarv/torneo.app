import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreSheet } from '../models/ScoreSheet';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoresheetService {

  API_URI = environment.apiEndpoint + '/scoreSheets/';
  API_TOURNAMENT = environment.apiEndpoint + "/tournaments/"

  constructor(private http: HttpClient) { }

  //GET SCORESHEETS LIST
  getAll(): Observable<ScoreSheet[]>{
    return this.http.get<ScoreSheet[]>(this.API_URI);
  }

  //GET SCORESHEET BY ID
  getById(id: number): Observable<ScoreSheet> {
    return this.http.get<ScoreSheet>(this.API_URI + id);
  }

  //GET SCORESHEETS BY TOURNAMENT ID
  getByTournamentId(id: number): Observable<ScoreSheet[]> {
    return this.http.get<ScoreSheet[]>(this.API_TOURNAMENT + id + "/scoresheets");
  }

  //DELETE SCORESHEET BY ID
  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE SCORESHEET
  create(scoreSheet: ScoreSheet) {
    return this.http.post(this.API_URI, scoreSheet);
  }

  //UPDATE SCORESHEET
  update(id: number, updatedscoreSheet: ScoreSheet) {
    return this.http.put(this.API_URI + id, updatedscoreSheet);
  }
}
