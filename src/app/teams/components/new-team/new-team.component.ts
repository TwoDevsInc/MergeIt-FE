import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/users/interfaces/user.interface';
import { UserService } from 'src/app/users/services/user.service';
import { Team } from '../../interfaces/team.interface';
import { TeamServiceService } from '../../services/team-service.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.css']
})
export class NewTeamComponent implements OnInit {
  @Input() loggedUser!: User;

  newUsers: User[] = [];
  busqueda: string = '';
  aux: number = 0;
  noEncontrado : boolean = false;

  newTeam: Team = {
    name: "",
    users: [],
    projects: []
  }

  constructor(private userService: UserService, private teamService: TeamServiceService, public activeModal : NgbActiveModal, private authService : AuthService) { }

  ngOnInit(): void {
    console.log(this.loggedUser)
  }

  addMember(): void {
    let username: string = this.busqueda;
    this.userService.getUserByUsername(username).subscribe(
      u => {
        if (u.username == username) {
          console.log(`usuario encontrado correctamente`);
          this.noEncontrado = false;
          if (this.newUsers.length < 5) {
            console.log(this.newUsers.push(u));
            console.log(this.newUsers);
            console.log(`usuario añadido correctamente al formulario`);
          } else {
            console.log(`se ha excedido el maximo de usuarios`);
          }
        }
      },
      e => this.noEncontrado = true
    )
    this.busqueda = '';
  }

  deleteUsersFromNewUsers(): void {
    this.newUsers = [];
  }



  addUserToTeam() {
    this.teamService.createTeam(this.newTeam).subscribe(
      newTeam => {
        this.teamService.addUserToTeam(this.authService.AuthUser, newTeam).subscribe(
          team => {
            this.loggedUser.teams.push(team);
            if (this.newUsers.length > 0){
              this.teamService.addUsersToTeam(this.newUsers, team).subscribe(
                teamWithUsers => { 
                  let index = this.loggedUser.teams.indexOf(team)
                  this.loggedUser.teams[index] = teamWithUsers
                  this.newUsers = []; 
                  this.activeModal.close();  
                });
            }
            else{
              this.activeModal.close()
            }
              
          }
        )


      }
    );
  }

  deleteUser(user: User) {
    this.newUsers.splice(this.newUsers.indexOf(user));
  }


}
