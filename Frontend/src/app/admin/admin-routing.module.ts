import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginGuard } from '../_Guards/admin-login.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { EditDoctorScheduleComponent } from './edit-doctor-schedule/edit-doctor-schedule.component';
import { FileUpadateOrDeleteComponent } from './file-upadate-or-delete/file-upadate-or-delete.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes =[
  { path:"addemployee", component: DoctorRegisterationComponent },
    {path:"",component:AdminHomeComponent,canActivate:[AdminLoginGuard],children:[
        {path:"",component:AdminHomeComponent},
        { path: 'doctorRegister', component: DoctorRegisterationComponent },
        {path:"Doctorschedule",component:DoctorScheduleComponent},
        {path:"editDoctorschedule",component:EditDoctorScheduleComponent},

        { path: 'UpdateFiles', component: FileUpadateOrDeleteComponent },
        {path:"Doctorschedule",component:DoctorScheduleComponent},
        {path:"Employees",component:ManageEmployeesComponent},
        // {path:"edit",component:DoctorEditComponent},
        // {path:"patientsearch",component:DoctorPatientSearchComponent},
        // {path:"patient/:id",component:DoctorPatientComponent,children:[
        //     {path:"info",component:DoctorPatientInfoComponent},
        //     {path:"history",component:PatientHistoryComponent},
        // ]},
        // {path:"recordpre/:pid/:date",component:RecordPrescriptionComponent},
        // {path:"editpre/:id/:date",component:EditPrescriptionComponent}
    ]},
    {path:"home",component:AdminHomeComponent,canActivate:[AdminLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
