import { NgModule } from "@angular/core";
import{ RouterModule, Routes } from'@angular/router';
import { GetDoctorPerCategoryComponent } from "./get-doctor-per-category/get-doctor-per-category.component";
import { PatientRecordComponent } from "./patient-record/patient-record.component";
import { PatientHomeComponent } from "./patient-home/patient-home.component";
import { PatientLoginGuard } from "../_Guards/patient-login.guard";
import { SearchForDoctorComponent } from "./search-for-doctor/search-for-doctor.component";

import { PatientInfoComponent } from "./patient-info/patient-info.component";
import { PatientEditComponent } from "./patient-edit/patient-edit.component";

import { PatientAppointmentComponent } from "./patient-appointment/patient-appointment.component";
import { ShowappointmentsComponent } from "./showappointments/showappointments.component";

const routes:Routes=[
    {path:"",component:PatientHomeComponent,canActivate:[PatientLoginGuard],children:[
        {path:"record",component:PatientRecordComponent},
        {path:"categories/:Category", component:GetDoctorPerCategoryComponent},
        {path:"search",component:SearchForDoctorComponent},
    ]},

    { path: "home", component: PatientHomeComponent },
    {path:"info",component:PatientInfoComponent},
    {path:"edit",component:PatientEditComponent},
    { path: "appointments", component: ShowappointmentsComponent },
    { path: "appointment/:did", component: PatientAppointmentComponent },
    ]



@NgModule({
        imports:[
            RouterModule.forChild(routes)
        ],
        exports:[
            RouterModule
        ]
})
export class PatientRoutingModule{

}