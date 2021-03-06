import { Injectable } from '@angular/core';
import { NewUser, User, UserLogin } from 'src/app/users/interfaces/user.interface';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { UserService } from '../../users/services/user.service';
import { catchError, map } from 'rxjs/operators';
import { ValidateTokenResponse } from '../interfaces/validate-token-response.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private usersService: UserService, private router: Router) { }

  API_AUTH_URL = "auth"

  public AuthUser: User = {
    id: 0,
    username: "",
    email: "",
    name: "",
    surname: "",
    teams: []
  };

  // logged: boolean = false;
  public isAuthenticated$ = new ReplaySubject<boolean>(1);

  get getAuthUser() {
    return { ...this.AuthUser };
  }

  login(userLogin: UserLogin): Observable<void> {
    return this.http.post<LoginResponse>(`${this.API_AUTH_URL}/login`, userLogin).pipe(map(resp => {
      this.AuthUser = resp.userLogged;
      localStorage.setItem("token", JSON.stringify(resp));
      this.isAuthenticated$.next(true);      
    }));
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogged");
    this.isAuthenticated$.next(false);
    this.AuthUser = {
      id: 0,
      username: "",
      email: "",
      name: "",
      surname: "",
      teams: []
    };
    this.router.navigateByUrl("/login")
  }

  validateToken(): Observable<boolean> {
    return this.http.get(`${this.API_AUTH_URL}/validateToken`).pipe(map(() => true), catchError(error => of(false)));
  }

  register(user: NewUser) : Observable<void>{
    return this.http.post<void>(`${this.API_AUTH_URL}/register`, user);
  }

}
