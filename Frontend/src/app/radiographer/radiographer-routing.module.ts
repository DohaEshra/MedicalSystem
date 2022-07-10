import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadiographerLoginGuard } from '../_Guards/radiographer-login.guard';
import { RadiographerHomeComponent } from './radiographer-home/radiographer-home.component';

const routes: Routes = [
      {path:"",component:RadiographerHomeComponent,canActivate:[RadiographerLoginGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RadiographerRoutingModule { }
