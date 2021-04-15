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
  // newUsers: User[] = [
  //   {
  //     name: '',
  //     username: 'hola',
  //     surname: '',
  //     teams: [],
  //     email: ''
  //   },
  //   {
  //     name: '',
  //     username: 'holo',
  //     surname: '',
  //     teams: [],
  //     email: ''
  //   }
  // ];
  newUsers: User[] = [];
  busqueda: string = '';
  aux: number = 0;

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
            console.log(this.newUsers.push(u));
            console.log(this.newUsers);
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



  addUserToTeam(){
    this.teamService.createTeam(this.newTeam).subscribe(
      res => {
        this.aux = res.id!;
        const team = { id : this.aux, name: "asdsa", users : [], projects : []};
        // const user = { id : 10 , username : "pepe", email : "pepe", name : "asdsad", surname : "dsadas", teams : []};
        this.teamService.addUserToTeam(this.loggedUser,team).subscribe(
        )
         if (this.newUsers.length > 0)
           console.log('hay mas de uno');
           this.teamService.addUsersToTeam(this.newUsers,team).subscribe(
             res => {
              this.newUsers = [];
              window.location.reload();
             }
           );


      }
    );
  }

  deleteUser(user: User){
    this.newUsers.splice(this.newUsers.indexOf(user));
  }


}
