import { Injectable } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private AuthUser! : User;

  get getAuthUser(){
    return this.AuthUser;
  }
}
