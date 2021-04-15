import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  modalOptions:NgbModalOptions;

  constructor(private modalService: NgbModal) {
    this.modalOptions = {
      size : 'lg',
      backdrop:true,
      backdropClass:'customBackdrop'
    }
   }

  ngOnInit(): void {
  }

  openRegisterModal() {
    // const modalRef = this.modalService.open(RegisterComponent, this.modalOptions);

    // modalRef.result.then((result) => {
    //   console.log("RESULT",result)
    // }, (reason) => {
    //   console.log("DISMISS",reason)
    // });
  }

}
