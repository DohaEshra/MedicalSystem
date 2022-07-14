import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
import { PatientRoutingModule } from './patient.routing';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './_Pipes/filter.pipe';
import { SearchForDoctorComponent } from './search-for-doctor/search-for-doctor.component';
import { DropdownModule } from 'primeng/dropdown';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

import { SortPipe } from './_Pipes/sort.pipe';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { FromToDatesPipe } from './_Pipes/from-to-dates.pipe';
import { ShowappointmentsComponent } from './showappointments/showappointments.component';
import { DatetimePipe } from './_Pipes/datetime.pipe';

import { DialogModule } from 'primeng/dialog';
import { SafePipe } from './_Pipes/safe.pipe';
import { RatingModule } from 'primeng/rating';
import { NumberOfRecordsInSameDatePipe } from './_Pipes/number-of-records-in-same-date.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { EditappointmentComponent } from './editappointment/editappointment.component';
import { CoreModule } from '../core/core.module';
import { TimeFormatPipe } from './_Pipes/time-format.pipe';
import { IsValidDatePipe } from './_Pipes/is-valid-date.pipe';

@NgModule({
  declarations: [
    GetDoctorPerCategoryComponent,
    PatientRecordComponent,
    FilterPipe,
    SearchForDoctorComponent,
    PatientHomeComponent,
    PatientInfoComponent,
    PatientEditComponent,
    SortPipe,
    PatientHomeComponent,
    PatientAppointmentComponent,
    FromToDatesPipe,
    ShowappointmentsComponent,
    DatetimePipe,
    PatientHomeComponent,
    SafePipe,
    NumberOfRecordsInSameDatePipe,
    EditappointmentComponent,
    TimeFormatPipe,
   
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    FormsModule,
    DropdownModule,
    RouterModule,
    InputTextModule,
    ButtonModule,
    //BrowserAnimationsModule,
    //BrowserModule,
    DialogModule,
    RatingModule,
    NgbRatingModule,
    CoreModule
  ],
  providers:[
    IsValidDatePipe,
    DatePipe
  ]
})
export class PatientModule {}