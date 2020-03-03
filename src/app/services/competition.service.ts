import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Competition } from '../models/competition';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { TeamScoreSheet } from '../models/team-score-sheet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //'Authorization': 'Bearer ' + LoginService.getToken()
  })
};

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  API_URI = environment.apiEndpoint + '/competitions/';

  constructor(private http: HttpClient, private loginService: LoginService) {
    //httpOptions.headers.append('Authorization Bearer', LoginService.getToken());
  }

  getAll(): Observable<Competition[]> {
    return this.http.get<Competition[]>(this.API_URI);
  }

  getById(id: number): Observable<Competition> {
    return this.http.get<Competition>(this.API_URI + id);
  }

  //added
  getTeamScoreSheets(id: number): Observable<TeamScoreSheet[]> {
    return this.http.get<TeamScoreSheet[]>(this.API_URI + id + "/scoresheets")
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  create(competition: Competition): Observable<Competition> {
    return this.http.post<Competition>(this.API_URI, competition, httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log(err)
          return throwError(err);
        })
      );
  }

  update(id: number, updatedCompetition: Competition) {
    return this.http.put(this.API_URI + id, updatedCompetition);
  }
}
