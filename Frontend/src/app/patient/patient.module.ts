import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
import { PatientRoutingModule } from './patient.routing';


@NgModule({
  declarations: [
    GetDoctorPerCategoryComponent
  ],
  imports: [
    CommonModule, PatientRoutingModule
  ]
})
export class PatientModule { }
