import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/account/Account.service';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorHomeComponent } from '../doctor-home/doctor-home.component';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit,OnDestroy {

  constructor(public doctorSer: DoctorService, public router: Router, private doc: DoctorHomeComponent, public accountService: AccountService) { }

  sub: Subscription|null = null
  doctor = new Doctor()
  passPattern = '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))';
  TruePassword = false;
  TrueOldPassword = false;
  errorMessage: any;
  user ={oldPass:"", newPass:"", ConfirmPass:""}
  isOperationFailed = false

  ngOnInit(): void {
    //get doctor data
    this.sub = this.doc.selectedDoctor$.subscribe(
      data => {
        this.doctor = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }


  comparePassWords() {
    this.user.newPass === this.user.ConfirmPass
      ? this.TruePassword = true
      : this.TruePassword = false;
  }

  // check(){
  //   (this.user.oldPass !== this.doctor.password) || (this.user.oldPass === this.user.newPass)
  //   ? this.TrueOldPassword = false
  //   : this.TrueOldPassword = true;
  //   }

  onSubmit(myForm: NgForm){

    if (!this.TruePassword) {
      //this.errorMessage = "your old password is incorrect, try again"
      return
    }

    // if (this.user.oldPass === this.user.newPass) {
    //   this.errorMessage = "you haven't changed your old password"
    //   return
    // }

    if(myForm.valid){
      var confirmation = confirm("On changing your password, you will Login again !");
      if(confirmation){
        // this.doctor.password = this.user.newPass
        this.doctorSer.changePassword({oldPass: this.user.oldPass, newPass: this.user.newPass},this.doctor.id).subscribe({
          next: data =>{
            this.isOperationFailed = false;
            alert("Password Changed Successfully!")
            this.accountService.signOut();
          },
          error: err =>{
            this.isOperationFailed =true;
            this.errorMessage = err.error
            console.log("error on changing password", err);
            // alert("an error happened password didn/'t change")
          }
        })
      }
  }

  }
}
