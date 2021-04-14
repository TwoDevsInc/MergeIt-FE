import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project.interface';

@Component({
  selector: 'project-card-main',
  templateUrl: './project-card-main.component.html',
  styleUrls: ['./project-card-main.component.css']
})
export class ProjectCardMainComponent implements OnInit {
  @Input() project!: Project;

  constructor() { }

  ngOnInit(): void {


  }

}
