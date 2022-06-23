import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './account/Login/Login.component';
import { PatientRecordComponent } from './patient/patient-record/patient-record.component';

import { NotFoundComponent } from './_shared/NotFound/NotFound.component';

const routes: Routes = [
  // {path:'home',component : HomeComponent},
  {path:'login',component : LoginComponent},
  {path:"doctor",loadChildren:()=>import('./doctor/doctor.module').then(m=>m.DoctorModule)},
//<<<<<<< HEAD
  {path:"patient", loadChildren:()=>import('./patient/patient.module').then(p=>p.PatientModule)},
//=======
  {path:"patient",component:PatientRecordComponent},
//>>>>>>> c139026ddd72e739c41a41647f8ef0270dd16f5e
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
