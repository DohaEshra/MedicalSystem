import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { AccountService } from 'src/app/account/Account.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  constructor(public account: AccountService) {
    
   }

  @Input('login') loginFlag = '';
  userRole = '';
  userLoggedIn = false;
 

  getRole(){
    if(this.account.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.account.getToken()!)));
      return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    }
    return null ;
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
      this.userRole = this.loginFlag
      this.loginFlag == '' ? this.userLoggedIn = false : true;
  }

  clearToken(){
    this.account.signOut();
  }

}
