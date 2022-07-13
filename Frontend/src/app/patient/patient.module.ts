import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetDoctorPerCategoryComponent } from './get-doctor-per-category/get-doctor-per-category.component';
import { PatientRoutingModule } from './patient.routing';
import { PatientRecordComponent } from './patient-record/patient-record.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { SearchForDoctorComponent } from './search-for-doctor/search-for-doctor.component';
import { DropdownModule } from 'primeng/dropdown';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { PatientInfoComponent } from './patient-info/patient-info.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

import { SortPipe } from './Pipes/sort.pipe';
import { PatientAppointmentComponent } from './patient-appointment/patient-appointment.component';
import { FromToDatesPipe } from './Pipes/from-to-dates.pipe';
import { ShowappointmentsComponent } from './showappointments/showappointments.component';
import { DatetimePipe } from './Pipes/datetime.pipe';

import { DialogModule } from 'primeng/dialog';
import { SafePipe } from './Pipes/safe.pipe';
import { RatingModule } from 'primeng/rating';
import { NumberOfRecordsInSameDatePipe } from './Pipes/number-of-records-in-same-date.pipe';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '../core/core.module';

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
})
export class PatientModule {}