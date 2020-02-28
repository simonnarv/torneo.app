import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Match } from '../models/match';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    //'Authorization': 'Bearer ' + LoginService.getToken()
  })
};

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  API_URI = environment.apiEndpoint + '/matches/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Match[]> {
    return this.http.get<Match[]>(this.API_URI);
  }

  //added
  getByGroupId(id: number): Observable<Match[]>{
    return this.http.get<Match[]>(this.API_URI + id+ "/group");
  }

  getById(id: number) {
    return this.http.get(this.API_URI + id);
  }

  delete(id: number) {
    return this.http.delete(this.API_URI + id);
  }

  create(match: Match): Observable<Match> {
    return this.http.post<Match>(this.API_URI, match,httpOptions)
    .pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err)
        return throwError(err);
      })
    );
  }

  update(id: number, updatedMatch: Match) {
    return this.http.put(this.API_URI + id, updatedMatch);
  }
}
