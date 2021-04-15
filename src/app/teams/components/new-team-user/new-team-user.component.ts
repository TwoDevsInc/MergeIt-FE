import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';

@Component({
  selector: 'new-team-user',
  templateUrl: './new-team-user.component.html',
  styleUrls: ['./new-team-user.component.css']
})
export class NewTeamUserComponent implements OnInit {
  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
