import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InterceptInterceptor } from './_Helper/intercept.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AccountModule } from './account/account.module';
import { HomeComponent } from './_shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,AppRoutingModule , AccountModule
  ],
  providers: [  
    { provide: HTTP_INTERCEPTORS, useClass: InterceptInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
