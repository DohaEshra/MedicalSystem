import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, window } from 'rxjs';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{
  @Output() userRole = new EventEmitter<any>();
  subscribe : Subscription | null = null ;
  isLoginFailed = false;
  errorMessage = '';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  user : any ={email:null,password:null,role:null};
  constructor(public authService: AccountService , public router :Router ) { }

  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
   onSubmit(): void {
    const {email,password,role}= this.user ;
    this.subscribe= this.authService.login(email,password,role).subscribe({
    next: data=>
    {
      //console.log('dataaaaaaaaaa',data)
      this.isLoginFailed = false ; 
      this.authService.saveToken(data);
      this.userRole.emit(role);
      console.log('success')
      if (role =="doctor"){
        this.router.navigateByUrl('/doctor');
      }
      else if (role =="patient" ){
        this.router.navigateByUrl('/patient');
      }
      else if (role =="admin" ){
        this.router.navigateByUrl('/admin');
      }
    }
    ,error:err=>{
      console.log('error from Login Component', err)
      this.isLoginFailed = true ; 
      this.errorMessage = err.error;
    }
  });

  }
}
