import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from 'src/app/users/components/add-user/add-user.component';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'team-nav-item-main',
  templateUrl: './team-nav-item-main.component.html',
  styleUrls: ['./team-nav-item-main.component.css']
})
export class TeamNavItemMainComponent implements OnInit {
  @Input() team!: Team
  modalOptions:NgbModalOptions;
  expanded: boolean = false;
  identifier: string = '';
  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      size: 'lg',
      backdrop:true,
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit(): void {
    this.identifier = this.team.name.split(' ').join('_');
  }

  openAddUserModal(team: Team){
    const modalRef = this.modalService.open(AddUserComponent, this.modalOptions);
    modalRef.componentInstance.team = team;

    modalRef.result.then((result) => {
      console.log(result);
    }, (reason) => {

    });
  }

  toggleFlag(){
    this.expanded = !this.expanded;
  }
}
