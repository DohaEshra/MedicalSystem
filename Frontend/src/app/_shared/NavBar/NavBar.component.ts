import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, observable, Observable, Subscription } from 'rxjs';
import { AccountService } from 'src/app/account/Account.service';
import jwt_decode from 'jwt-decode';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  doctor:Doctor=new Doctor();
  sub:Subscription|null=null;
  
  constructor(public account: AccountService,private doctorSer:DoctorService) {}

  @Input('login') loginFlag = '';
  userRole = '';
  userLoggedIn = false;
 

  // getRole(){
  //   if(this.account.getToken()!=null)
  //   {
  //     var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.account.getToken()!)));
  //     return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  //   }
  //   return null ;
  // }

  ngOnInit(): void {
  }
  

  ngOnChanges(): void {
      this.userRole = this.loginFlag
      this.loginFlag == '' ? this.userLoggedIn = false : true;
      this.sub = this.doctorSer.getDoctorProfile().subscribe(
        a=>{
          this.doctor=a;
        }
      );
  }

  

  clearToken(){
    this.account.signOut();
  }

}
