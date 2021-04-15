import { Component, OnInit, Input } from '@angular/core';
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
  @Input() loggedUser!: User;
  newUsers: User[] = [];
  busqueda: string = '';

  newTeam: Team = {
    name: "",
    users: [],
    projects: []
  }

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
    this.newUsers = [];
  }

  deleteUsersFromNewUsers(): void {
    this.newUsers = [];
  }

  createNewTeam(): void {

    this.teamService.createTeam(this.newTeam).subscribe(
      t => {
        const team = { id : t.id, name: "asdsa", users : [], projects : []};
        const user = { id : 10 , username : "pepe", email : "pepe", name : "asdsad", surname : "dsadas", teams : []};
        this.teamService.addUserToTeam(user, team);
        if ( this.newUsers.length > 0) {
          // this.teamService.addUsersToTeam(this.newUsers, t);
        }
      },
      e => console.log(`No se ha podido crear el nuevo team`)
    )

    this.newTeam.name = '';
  }

  addUserToTeam(){
    const team = { id : 35, name: "asdsa", users : [], projects : []};
    const user = { id : 10 , username : "pepe", email : "pepe", name : "asdsad", surname : "dsadas", teams : []};

    this.teamService.addUserToTeam(user,team).subscribe(
      resp => console.log(resp)
    )

  }
}
