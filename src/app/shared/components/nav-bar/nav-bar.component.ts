import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../auth/services/auth.service';
import { RegisterFormComponent } from '../../../home/register-form/register-form.component';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal, public authService : AuthService) {
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

}
