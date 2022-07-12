import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, window } from 'rxjs';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit ,OnDestroy{
  @Output() userRole:EventEmitter<number> = new EventEmitter<number>();
  subscribe : Subscription | null = null ;
  isLoginFailed = false;
  errorMessage = '';
  emailPattern = "^[a-zA-Z0-9.@$&*()/_%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,4}$";
  user : any ={email:null,password:null,role:null};
  role:number = 0
  constructor(public authService: AccountService , public router :Router ) { }

  ngOnInit() {
  }
  
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
  
  onSubmit(myForm: NgForm) {
    if(myForm.valid){
      let {email,password,role}= this.user ;
      //this.userRole.emit(role);
      //this.role = this.user.role;
      console.log('success', this.user)
      this.subscribe= this.authService.login(email,password,role).subscribe({
        next: data=>
        {
          //console.log('dataaaaaaaaaa',data)
          this.isLoginFailed = false ; 
        this.authService.saveToken(data);
        if (role =="doctor"){
          this.router.navigateByUrl('/doctor');
        }
        else if (role =="patient"){
          this.router.navigateByUrl('/patient');
        }
        else if (role =="admin"){
          this.router.navigateByUrl('/admin');
        }
        else if (role =="laboratory technician"){
          this.router.navigateByUrl('/lab');
        }
        else if (role =="pharmacist"){
          this.router.navigateByUrl('/pharmacy');
        }
        else if (role =="radiographer"){
          this.router.navigateByUrl('/scan');
        }
      }
      ,error:err=>{
        console.log('error from Login Component', err)
        this.isLoginFailed = true ; 
        err.status === 0 ? this.errorMessage = 'Server is unavailable right now, please try again later' :this.errorMessage = err.error;
        
      }
    });
  }
}
}
