import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';

@Component({
  selector: 'new-team-user',
  templateUrl: './new-team-user.component.html',
  styleUrls: ['./new-team-user.component.css']
})
export class NewTeamUserComponent implements OnInit {
  @Input() user!: User;
  @Output() userDeleted = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

  userDelete(){
    this.userDeleted.emit(this.user);

  }
}
