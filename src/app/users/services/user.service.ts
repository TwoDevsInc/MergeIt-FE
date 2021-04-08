import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_USERS_URL = "user";

  constructor(private http: HttpClient) { }

  getUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.API_USERS_URL}/all`);
  }

  getUserById(id: number) : Observable<User> {
    return this.http.get<User>(`${this.API_USERS_URL}/${id}`);
  }

  addUser(user : User): Observable<User>{
    return this.http.post<User>(`${this.API_USERS_URL}/add`,user);
  }

  updateUser(user : User): Observable<User>{
    return this.http.put<User>(`${this.API_USERS_URL}/update`,user)
  }

  deleteUser(id : number): Observable<void>{
    return this.http.delete<void>(`${this.API_USERS_URL}/delete/${id}`);
  }


}
