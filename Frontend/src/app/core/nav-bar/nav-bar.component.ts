import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/account/Account.service';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  doctor:Doctor=new Doctor();
  sub:Subscription|null=null;
  
  constructor(public account: AccountService,private doctorSer:DoctorService) {}

  @Input('login') loginFlag = '';
  userRole = '';
  userLoggedIn = false;
 
  x:any = this.account.getUser(this.account.getRole())

  // getRole(){
  //   if(this.account.getToken()!=null)
  //   {
  //     var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.account.getToken()!)));
  //     return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  //   }
  //   return null ;
  // }

  ngOnInit(): void {
    console.log("mmmm",this.x)
  }
  

  ngOnChanges(): void {
      this.userRole = this.loginFlag
      this.loginFlag == '' ? this.userLoggedIn = false : true;
      // this.sub = this.doctorSer.getDoctorProfile().subscribe(
      //   a=>{
      //     this.doctor=a;
      //   }
      //);
  }

  clearToken(){
    this.account.signOut();
  }

}
