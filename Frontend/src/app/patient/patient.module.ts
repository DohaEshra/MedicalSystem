import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
import { PatientRoutingModule } from './patient.routing';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { SearchForDoctorComponent } from './search-for-doctor/search-for-doctor.component';
import {DropdownModule} from 'primeng/dropdown';
import { PatientHomeComponent } from './patient-home/patient-home.component'
import {RouterModule} from '@angular/router';
import { PatientRecordComponent } from './patient-record/patient-record.component';
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    GetDoctorPerCategoryComponent,
    FilterPipe,
    SearchForDoctorComponent,
    PatientHomeComponent,
    PatientRecordComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule, 
    FormsModule, 
    DropdownModule, 
    RouterModule //, BrowserAnimationsModule//, BrowserModule 
  ]
})
export class PatientModule { }
