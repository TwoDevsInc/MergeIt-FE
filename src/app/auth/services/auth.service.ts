import { Injectable } from '@angular/core';
import { User, UserLogin } from 'src/app/users/interfaces/user.interface';
import { Observable, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResponse } from '../interfaces/login-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  API_AUTH_URL = "auth"

  logged$ = new ReplaySubject<boolean>(1);


  private AuthUser : User = {
    id: 9,
    username: "marcelito jaja",
    email: "correo@correo.es",
    name: "Marcelo",
    surname: "Cordero",
    teams : []
};

  get getAuthUser(){
    return this.AuthUser;
  }

  login(userLogin : UserLogin) : Observable<LoginResponse>{
    return this.http.post<LoginResponse>(`${this.API_AUTH_URL}/login`,userLogin);
  }

}
