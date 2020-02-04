import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ScoreSheet } from '../models/ScoreSheet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoresheetService {
  API_URI = 'http://localhost:8080/scoreSheets/';

  API_TOURNAMENT = "http://localhost:8080/tournaments/"

  constructor(private http: HttpClient) { }

  //GET SCORESHEETS LIST
  getScoreSheets(): Observable<ScoreSheet[]>{
    return this.http.get<ScoreSheet[]>(this.API_URI);
  }

  //GET SCORESHEET BY ID
  getScoreSheet(id: string): Observable<ScoreSheet> {
    return this.http.get<ScoreSheet>(this.API_URI + id);
  }

  //GET SCORESHEETS BY TOURNAMENT ID
  getScoreSheetsByTournament(id: string): Observable<ScoreSheet[]> {
    return this.http.get<ScoreSheet[]>(this.API_TOURNAMENT + id + "/scoresheets");
  }

  //DELETE SCORESHEET BY ID
  deleteScoreSheet(id: string) {
    return this.http.delete(this.API_URI + id);
  }

  //SAVE SCORESHEET
  saveScoreSheet(scoreSheet: ScoreSheet) {
    return this.http.post(this.API_URI, scoreSheet);
  }

  //UPDATE SCORESHEET
  updateScoreSheet(id: string, updatedscoreSheet: ScoreSheet) {
    return this.http.put(this.API_URI + id, updatedscoreSheet);
  }
}
