import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InterceptInterceptor } from './_Helper/intercept.interceptor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountModule } from './account/account.module';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './_shared/NavBar/NavBar.component';
import { PatientRecordComponent } from './patient/patient-record/patient-record.component';


@NgModule({
  declarations: [
    AppComponent, NavBarComponent, PatientRecordComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule, AccountModule , FormsModule 
  ],
  providers: [  
    { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
