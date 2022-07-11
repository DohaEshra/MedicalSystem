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
import { EditPrescriptionComponent } from './edit-prescription/edit-prescription.component';
import { SafePipe } from './_Pipes/safe.pipe';
import {DialogModule} from 'primeng/dialog';
import { SearchInTable } from './_Pipes/search-in-table.pipe';
import { DoctorAppointmentComponent } from './doctor-appointment/doctor-appointment.component';
import { DateTimePipe } from './_Pipes/date-time.pipe';
import { LoadingComponent } from './_Loading/loading.component';




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
    SearchInTable,
    DoctorPatientComponent,
    PatientHistoryComponent,
    RecordPrescriptionComponent,
    EditPrescriptionComponent,
    SafePipe,
    DoctorAppointmentComponent,
    DateTimePipe,
    LoadingComponent
  ],
  imports: [
    CommonModule,doctorRoutingModule,FormsModule,DialogModule
  ],
  providers:[
    SearchByNamePipe
  ]
})
export class DoctorModule { }
