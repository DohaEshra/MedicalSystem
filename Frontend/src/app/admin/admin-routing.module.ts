import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginGuard } from '../_Guards/admin-login.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';

const routes: Routes =[
  { path:"addemployee", component: DoctorRegisterationComponent },
    {path:"",component:AdminHomeComponent,canActivate:[AdminLoginGuard],children:[
      {path:"",component:AdminHomeComponent},
    ]},
    {path:"home",component:AdminHomeComponent,canActivate:[AdminLoginGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
