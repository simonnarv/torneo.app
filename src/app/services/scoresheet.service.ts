import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreSheet } from '../models/score-sheet';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoresheetService {

  API_URI = environment.apiEndpoint + '/scoreSheets/';
  API_TOURNAMENT = environment.apiEndpoint + "/tournaments/"

  constructor(private http: HttpClient) { }

  getAll(): Observable<ScoreSheet[]>{
    return this.http.get<ScoreSheet[]>(this.API_URI);
  }

  getById(id: number): Observable<ScoreSheet> {
    return this.http.get<ScoreSheet>(this.API_URI + id);
  }

  getByTournamentId(id: number): Observable<ScoreSheet[]> {
    return this.http.get<ScoreSheet[]>(this.API_TOURNAMENT + id + "/scoresheets");
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  create(scoreSheet: ScoreSheet) {
    return this.http.post(this.API_URI, scoreSheet);
  }

  update(id: number, updatedscoreSheet: ScoreSheet) {
    return this.http.put(this.API_URI + id, updatedscoreSheet);
  }
}
