import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';
import { UserService } from 'src/app/users/services/user.service';
import { Team } from '../../interfaces/team.interface';
import { TeamServiceService } from '../../services/team-service.service';

@Component({
  selector: 'new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {
  newUsers: User[] = [];
  busqueda: string = '';
  newTeamName: string = '';
  constructor(private userService: UserService, private teamService: TeamServiceService) { }

  ngOnInit(): void {

  }

  addMember(): void {
    let username: string = this.busqueda;
    this.userService.getUserByUsername(username).subscribe(
      u => {
        if (u.username == username) {
          console.log(`usuario encontrado correctamente`);
          if(this.newUsers.length < 5){
            this.newUsers[this.newUsers.length] = u;
            console.log(`usuario añadido correctamente al formulario`);
          } else {
            console.log(`se ha excedido el maximo de usuarios`);
          }
        }
      },
      e => console.log('F por el user')
    )
    this.busqueda = '';
  }

  deleteUsersFromNewUsers(): void {
    this.newUsers = [];
  }

  createNewTeam(): void {
    console.log(`${this.newTeamName}`);
    let newTeam: Team = {
      name: this.newTeamName,
      users: [],
      projects: []
    }
    this.teamService.createTeam(newTeam)
    this.newTeamName = '';
  }
}
