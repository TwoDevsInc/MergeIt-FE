import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/users/interfaces/user.interface';
import { Team } from '../interfaces/team.interface';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  baseURL = 'http://localhost:7852/api/team/userTeams/8';
  constructor(private http: HttpClient) { }

  getTeamsByUser(user:User): Observable<Team[]> {
    return this.http.get<{teams: Team[]}>(this.baseURL).pipe(map(response => response.teams));
  }
}
