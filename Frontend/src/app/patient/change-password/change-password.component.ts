import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/account/Account.service';
import { Patient } from 'src/app/_Models/patient';
import { PatientHomeComponent } from '../patient-home/patient-home.component';
import { PatientService } from '../Patient.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit,OnDestroy {

  constructor(public patientservice: PatientService, public router: Router, private pat: PatientHomeComponent, public accountService: AccountService) { }

  sub: Subscription | null = null
  patient = new Patient()
  passPattern = '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))';
  TruePassword = false;
  TrueOldPassword = false;
  errorMessage: any;
  user = { oldPass: "", newPass: "", ConfirmPass: "" }
  isOperationFailed = false

  ngOnInit(): void {
    //get patient data
    this.sub = this.pat.selectedPatient$.subscribe(
      data => {
        this.patient = data;
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
  //   (this.user.oldPass !== this.patient.password) || (this.user.oldPass === this.user.newPass)
  //   ? this.TrueOldPassword = false
  //   : this.TrueOldPassword = true;
  //   }

  onSubmit(myForm: NgForm) {

    if (!this.TruePassword) {
      //this.errorMessage = "your old password is incorrect, try again"
      return
    }

    // if (this.user.oldPass === this.user.newPass) {
    //   this.errorMessage = "you haven't changed your old password"
    //   return
    // }

    if (myForm.valid) {
      var confirmation = confirm("On changing your password, you will Login again !");
      if (confirmation) {
        // this.patient.password = this.user.newPass
        this.patientservice.changePassword({ oldPass: this.user.oldPass, newPass: this.user.newPass }, this.patient.id).subscribe({
          next: data => {
            this.isOperationFailed = false;
            alert("Password Changed Successfully!")
            this.accountService.signOut();
          },
          error: err => {
            this.isOperationFailed = true;
            this.errorMessage = err.error
            console.log("error on changing password", err);
            // alert("an error happened password didn/'t change")
          }
        })
      }
    }

  }
}
