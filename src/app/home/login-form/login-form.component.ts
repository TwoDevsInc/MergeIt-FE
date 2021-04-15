import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { UserLogin } from 'src/app/users/interfaces/user.interface';
import { RegisterFormComponent } from '../register-form/register-form.component';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../users/services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginUser : UserLogin = {
    username : "",
    password : ""
  }

  errorAuth : boolean = false;

  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal, private authService : AuthService, private router : Router, private usersService : UserService) { 
    this.modalOptions = {
      size : 'lg',
      backdrop:true,
      backdropClass:'customBackdrop'
    }
  }
  ngOnInit(): void {
  }

  openRegisterModal() {
    const modalRef = this.modalService.open(RegisterFormComponent, this.modalOptions);

    modalRef.result.then((result) => {
      console.log("RESULT",result)
    }, (reason) => {
      console.log("DISMISS",reason)
    });
  }

  login(){
    this.authService.login(this.loginUser).subscribe(
      () => this.router.navigate(['/dashboard']),
      error => this.errorAuth = true
    )
  }

}
