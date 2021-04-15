import { Injectable } from '@angular/core';
import { User, UserLogin } from 'src/app/users/interfaces/user.interface';
import { Observable, of, ReplaySubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';
import { UserService } from '../../users/services/user.service';
import { catchError, map } from 'rxjs/operators';
import { ValidateTokenResponse } from '../interfaces/validate-token-response.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient, private usersService : UserService) { }

  API_AUTH_URL = "auth"

  private AuthUser : User = {
    id: 0,
    username: "",
    email: "",
    name: "",
    surname: "",
    teams : []
};

  logged$ = of(false);

  get getAuthUser(){
    return {...this.AuthUser};
  }

  login(userLogin : UserLogin) : Observable<void>{
    return this.http.post<LoginResponse>(`${this.API_AUTH_URL}/login`,userLogin).pipe(map(resp => {
      this.AuthUser = resp.userLogged;
      localStorage.setItem("token",resp.jwt);      
    }));
  }

  validateToken() : Observable<boolean>{

    const headers = new HttpHeaders().set("token",localStorage.getItem("token") || "");

    return this.http.get<ValidateTokenResponse>("validar", {headers})
    .pipe( 
      map( resp => {
        return resp.ok;
      }),
      catchError( error => of(false))
    );
  }

}
