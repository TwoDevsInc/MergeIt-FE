import { Component, Input, OnInit } from '@angular/core';
import { File } from '../../interfaces/file';

@Component({
  selector: 'file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() file! : File;

}
