import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginGuard } from '../_Guards/admin-login.guard';
import { DisplayDoctorComponent } from './display-doctor/display-doctor.component';
import { DisplayOtherComponent } from './display-other/display-other.component';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import { EditDoctorScheduleComponent } from './edit-doctor-schedule/edit-doctor-schedule.component';
import { FileUpadateOrDeleteComponent } from './file-upadate-or-delete/file-upadate-or-delete.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';

const routes: Routes =[
  { path: "addemployee", component: DoctorRegisterationComponent, canActivate: [AdminLoginGuard] },
  { path: "", component: ManageEmployeesComponent,canActivate:[AdminLoginGuard]},
  { path: "Doctorschedule", component: DoctorScheduleComponent, canActivate: [AdminLoginGuard] },
  { path: "editDoctorschedule", component: EditDoctorScheduleComponent, canActivate: [AdminLoginGuard] },
  { path: "DisplayDoctor/:id", component: DisplayDoctorComponent, canActivate: [AdminLoginGuard] },
  { path: "DisplayOther/:id", component: DisplayOtherComponent, canActivate: [AdminLoginGuard] },
  { path: 'UpdateFiles', component: FileUpadateOrDeleteComponent, canActivate: [AdminLoginGuard] },
  { path: "Doctorschedule", component: DoctorScheduleComponent, canActivate: [AdminLoginGuard] },
  { path: "Employees", component: ManageEmployeesComponent, canActivate: [AdminLoginGuard] },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
