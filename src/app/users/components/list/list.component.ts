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
    this.usersService.getUsers().subscribe(
      users => this.users = users
    )
  } 

  users : User[] = [];


}
