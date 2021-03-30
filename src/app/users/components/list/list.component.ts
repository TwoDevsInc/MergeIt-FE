import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent implements OnInit {

  constructor(private usersService : UserService) { 
  }

  ngOnInit(): void {
    this.getUsers();
  } 

  users : User[] = [];

  getUsers(){
    this.usersService.getUsers().subscribe(
      users => this.users = users
    )
  }

  deleteUser(id : number){
    this.usersService.deleteUser(id).subscribe(
      () => this.getUsers()
    );
  }

}
