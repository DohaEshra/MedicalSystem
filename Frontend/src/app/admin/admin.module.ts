import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';
import { FormsModule } from '@angular/forms';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { AgeValDirective } from './_directives/age-val.directive';


@NgModule({
  declarations: [
    AdminHomeComponent,
    DoctorRegisterationComponent, EmployeeRegisterComponent, AgeValDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    FormsModule,  
  ]
})
export class AdminModule { }
