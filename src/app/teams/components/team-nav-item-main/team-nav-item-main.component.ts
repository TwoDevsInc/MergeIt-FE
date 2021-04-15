import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../interfaces/team.interface';

@Component({
  selector: 'team-nav-item-main',
  templateUrl: './team-nav-item-main.component.html',
  styleUrls: ['./team-nav-item-main.component.css']
})
export class TeamNavItemMainComponent implements OnInit {
  @Input() team!: Team
  expanded: boolean = false;
  identifier: string = '';
  constructor() {

  }

  ngOnInit(): void {
    this.identifier = this.team.name.split(' ').join('_');
  }


  toggleFlag(){
    this.expanded = !this.expanded;
  }
}
