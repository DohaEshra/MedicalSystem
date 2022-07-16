import { ChangePasswordComponent } from './change-password/change-password.component';
import {NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorLoginGuard } from "../_Guards/doctorLogin.guard";
import { DoctorAppointmentComponent } from "./doctor-appointment/doctor-appointment.component";
import { DoctorEditComponent } from "./doctor-edit/doctor-edit.component";
import { DoctorHomeComponent } from "./doctor-home/doctor-home.component";
import { DoctorHoursComponent } from "./doctor-hours/doctor-hours.component";
import { DoctorInfoComponent } from "./doctor-info/doctor-info.component";
import { DoctorPatientInfoComponent } from "./doctor-patient-info/doctor-patient-info.component";
import { DoctorPatientSearchComponent } from "./doctor-patient-search/doctor-patient-search.component";
import { DoctorPatientComponent } from "./doctor-patient/doctor-patient.component";
import { DoctorProfileComponent } from "./doctor-profile/doctor-profile.component";
import { EditPrescriptionComponent } from "./edit-prescription/edit-prescription.component";
import { PatientHistoryComponent } from "./patient-history/patient-history.component";
import { RecordPrescriptionComponent } from "./record-prescription/record-prescription.component";


const routes:Routes =[
    {path:"",component:DoctorHomeComponent,canActivate:[DoctorLoginGuard],children:[
        {path:"",component:DoctorAppointmentComponent},
        {path:"profile",component:DoctorProfileComponent,children:[
            {path:"info",component:DoctorInfoComponent},
            {path:"hours",component:DoctorHoursComponent},
        ]},
        {path:"edit",component:DoctorEditComponent},
        { path: "changePassword",component:ChangePasswordComponent },
        {path:"patientsearch",component:DoctorPatientSearchComponent},
        {path:"patient/:id",component:DoctorPatientComponent,children:[
            {path:"info",component:DoctorPatientInfoComponent},
            {path:"history",component:PatientHistoryComponent},
        ]},
        {path:"recordpre/:pid/:date",component:RecordPrescriptionComponent},
        {path:"editpre/:id/:date",component:EditPrescriptionComponent}
    ]},
    {path:"home",component:DoctorHomeComponent,canActivate:[DoctorLoginGuard]},
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class doctorRoutingModule{

}