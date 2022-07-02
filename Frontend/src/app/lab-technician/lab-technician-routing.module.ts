import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorPatientSearchComponent } from '../doctor/doctor-patient-search/doctor-patient-search.component';
import { DoctorPatientComponent } from '../doctor/doctor-patient/doctor-patient.component';
import { PatientHistoryComponent } from '../doctor/patient-history/patient-history.component';
import { LabTechncianHomeComponent } from './lab-techncian-home/lab-techncian-home.component';

const routes: Routes = [
    {path:"",component:LabTechncianHomeComponent,/*canActivate:[DoctorLoginGuard],*/children:[
        {path:"patientsearch",component:DoctorPatientSearchComponent},
        {path:"patient/:id",component:DoctorPatientComponent,children:[
            {path:"history",component:PatientHistoryComponent},
        ]},
        // {path:"recordpre/:id",component:RecordPrescriptionComponent},
        // {path:"recordtests",component:RecordTestsComponent},
    ]},
    {path:"home",component:LabTechncianHomeComponent/*,canActivate:[DoctorLoginGuard]*/},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabTechnicianRoutingModule { }
