import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorRegisterationComponent } from './account/doctor-registeration/doctor-registeration.component';
import { LoginComponent } from './account/Login/Login.component';
import { PatientRegisterationComponent } from './account/patient-registeration/patient-registeration.component';
import { NotFoundComponent } from './_shared/NotFound/NotFound.component';

const routes: Routes = [
  // {path:'home',component : HomeComponent},
  {path:'login',component : LoginComponent},
  {path:'doctorRegister',component : DoctorRegisterationComponent},
  {path:'patientRegister',component : PatientRegisterationComponent},
  {path:"doctor",loadChildren:()=>import('./doctor/doctor.module').then(m=>m.DoctorModule)},
  {path:"patient", loadChildren:()=>import('./patient/patient.module').then(p=>p.PatientModule)},
  {path:"lab", loadChildren:()=>import('./lab-technician/lab-technician.module').then(p=>p.LabTechnicianModule)},
  {path:"scan", loadChildren:()=>import('./radiographer/radiographer.module').then(p=>p.RadiographerModule)},
  {path:"pharmacy", loadChildren:()=>import('./pharmacy/pharmacy.module').then(p=>p.PharmacyModule)},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
