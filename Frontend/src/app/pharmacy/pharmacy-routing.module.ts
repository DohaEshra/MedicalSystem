import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PharmacisitLoginGuard } from '../_Guards/pharmacisit-login.guard';
import { SearchForPatientComponent } from './search-for-patient/search-for-patient.component';

const routes: Routes = [
  {path:"",component:SearchForPatientComponent,canActivate:[PharmacisitLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PharmacyRoutingModule { }
