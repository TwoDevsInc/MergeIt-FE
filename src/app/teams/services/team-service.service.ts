import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserTeams } from 'src/app/users/interfaces/user.interface';
import { Team } from '../interfaces/team.interface';
@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  baseURL = 'team';
  constructor(private http: HttpClient) { }

  getTeamsByUser(id : number): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.baseURL}/userTeams/${id}`);
  }

  createTeam(team: Team): Observable<Team>{
    return this.http.post<Team>(`${this.baseURL}/add`, team);
  }

  addUserToTeam(user: User, team: Team): Observable<Team>{
    return this.http.put<Team>(`${this.baseURL}/addUser/${team.id}`, user);
  }

  addUsersToTeam(users: User[], team: Team): Observable<Team>{
    return this.http.put<Team>(`${this.baseURL}/addUsers/${team.id}`, users);
  }
}
