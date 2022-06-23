import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/Login/Login.component';
import { PatientRecordComponent } from './patient/patient-record/patient-record.component';

import { NotFoundComponent } from './_shared/NotFound/NotFound.component';

const routes: Routes = [
  // {path:'home',component : HomeComponent},
  {path:'login',component : LoginComponent},
  {path:"doctor",loadChildren:()=>import('./doctor/doctor.module').then(m=>m.DoctorModule)},
  {path:"patient",component:PatientRecordComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
