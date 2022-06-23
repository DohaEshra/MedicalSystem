import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
import { PatientRecordComponent } from './patient-record/patient-record.component';



@NgModule({
  declarations: [
    GetDoctorPerCategoryComponent,
    PatientRecordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PatientModule { }
