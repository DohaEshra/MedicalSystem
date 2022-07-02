import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AccountService } from './account/Account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginFlag = '';

  constructor(public acc:AccountService){}

  NavBarChange(role:any){
    console.log('role sent is '+role)
    this.loginFlag = 'false';
  }
}
