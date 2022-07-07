import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabTechnicianLoginGuard } from '../_Guards/lab-technician-login.guard';
import { LabTechncianHomeComponent } from './lab-techncian-home/lab-techncian-home.component';

const routes: Routes = [
    {path:"",component:LabTechncianHomeComponent,canActivate:[LabTechnicianLoginGuard]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabTechnicianRoutingModule { }
