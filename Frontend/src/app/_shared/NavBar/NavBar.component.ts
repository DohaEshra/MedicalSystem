import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { AccountService } from 'src/app/account/Account.service';

@Component({
  selector: 'app-NavBar',
  templateUrl: './NavBar.component.html',
  styleUrls: ['./NavBar.component.css']
})
export class NavBarComponent implements OnInit, OnChanges {

  constructor(public account: AccountService) { }

  @Input('login') loginFlag = '';
  userRole = '';
  userLoggedIn = false;
  ngOnInit() {}

  ngOnChanges(): void {
      this.userRole = this.loginFlag
      this.loginFlag == '' ? this.userLoggedIn = false : true;
  }

  clearToken(){
    this.account.signOut();
  }

}
