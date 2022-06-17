import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/Login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent
  ]
})
export class AccountModule { }
