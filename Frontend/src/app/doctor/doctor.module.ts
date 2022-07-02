import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { doctorRoutingModule } from './doctor-routing.module';
import { FormsModule } from '@angular/forms';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorPatientSearchComponent } from './doctor-patient-search/doctor-patient-search.component';
import { SearchByNamePipe } from './_Pipes/search-by-name.pipe';
import { SearchByIdPipe } from './_Pipes/search-by-id.pipe';
import { DoctorPatientInfoComponent } from './doctor-patient-info/doctor-patient-info.component';
import { RecordWithoutRedundancyPipe } from './_Pipes/record-without-redundancy.pipe';
import { DoctorPatientComponent } from './doctor-patient/doctor-patient.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { RecordPrescriptionComponent } from './record-prescription/record-prescription.component';




@NgModule({
  declarations: [
    DoctorInfoComponent,
    DoctorEditComponent,
    DoctorHomeComponent,
    DoctorPatientSearchComponent,
    SearchByNamePipe,
    SearchByIdPipe,
    DoctorPatientInfoComponent,
    RecordWithoutRedundancyPipe,
    DoctorPatientComponent,
    PatientHistoryComponent,
    RecordPrescriptionComponent,
  ],
  imports: [
    CommonModule,doctorRoutingModule,FormsModule
  ],
  providers:[
    SearchByNamePipe
  ]
})
export class DoctorModule { }
