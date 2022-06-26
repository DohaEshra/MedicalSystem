import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
//<<<<<<< HEAD
import { PatientRoutingModule } from './patient.routing';
//=======
import { PatientRecordComponent } from './patient-record/patient-record.component';
import {FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { SearchForDoctorComponent } from './search-for-doctor/search-for-doctor.component';
import {DropdownModule} from 'primeng/dropdown';
import { PatientHomeComponent } from './patient-home/patient-home.component'
import {RouterModule} from '@angular/router';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';


//>>>>>>> c139026ddd72e739c41a41647f8ef0270dd16f5e


@NgModule({
  declarations: [
    GetDoctorPerCategoryComponent,
    PatientRecordComponent,
    FilterPipe,
    SearchForDoctorComponent,
    PatientHomeComponent
  ],
  imports: [

    CommonModule, PatientRoutingModule, FormsModule, DropdownModule, RouterModule //, BrowserAnimationsModule//, BrowserModule 

  ]
})
export class PatientModule { }
