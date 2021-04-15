import { Injectable } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

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
}
