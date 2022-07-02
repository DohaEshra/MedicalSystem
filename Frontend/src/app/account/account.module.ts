import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/Login.component';
import { FormsModule } from '@angular/forms';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';
import { PatientRegisterationComponent } from './patient-registeration/patient-registeration.component';
import { RouterModule } from '@angular/router';
import { AgeValidationDirective } from './age-validation.directive';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ConfirmPasswordValidationDirective } from './confirm-password-validation.directive';
import {DropdownModule} from 'primeng/dropdown';
import { DoctorCategoryValidationDirective } from './doctor-category-validation.directive';

@NgModule({
  declarations: [
    LoginComponent, 
    DoctorRegisterationComponent, 
    PatientRegisterationComponent, 
    AgeValidationDirective, 
    ConfirmPasswordValidationDirective, DoctorCategoryValidationDirective,
  ],
  imports: [
    CommonModule,FormsModule, RouterModule,DropdownModule, MatIconModule, MatProgressBarModule
  ],
  exports:[
    LoginComponent, DoctorRegisterationComponent, PatientRegisterationComponent, AgeValidationDirective
  ]
})
export class AccountModule { }
