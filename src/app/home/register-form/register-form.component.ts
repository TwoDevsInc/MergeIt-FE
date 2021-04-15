import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NewUser } from '../../users/interfaces/user.interface';

@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  newUserRegister : NewUser = {
    username : "",
    password : "",
    email : "",
    name: "",
    surname: ""
  }

  registerUser(){

  }

}
