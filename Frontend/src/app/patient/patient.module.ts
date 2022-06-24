import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
//<<<<<<< HEAD
import { PatientRoutingModule } from './patient.routing';
//=======
import { PatientRecordComponent } from './patient-record/patient-record.component';
import {FormsModule} from '@angular/forms';
import { PatientHomeComponent } from './patient-home/patient-home.component'
import {RouterModule} from '@angular/router';


//>>>>>>> c139026ddd72e739c41a41647f8ef0270dd16f5e


@NgModule({
  declarations: [
    GetDoctorPerCategoryComponent,
  
    PatientHomeComponent

  ],
  imports: [

    CommonModule, PatientRoutingModule, FormsModule, RouterModule

  ]
})
export class PatientModule { }
