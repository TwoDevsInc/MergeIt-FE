import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  userLogged? : User;

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.userLogged = this.authService.getAuthUser;
  }

  

}
