import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { doctorRoutingModule } from './doctor-routing.module';
import { FormsModule } from '@angular/forms';
import { DoctorEditComponent } from './doctor-edit/doctor-edit.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';



@NgModule({
  declarations: [
    DoctorInfoComponent,
    DoctorEditComponent,
    DoctorHomeComponent
  ],
  imports: [
    CommonModule,doctorRoutingModule,FormsModule
  ],
  providers:[
    
  ]
})
export class DoctorModule { }
