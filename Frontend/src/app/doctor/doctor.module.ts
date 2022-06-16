import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { doctorRoutingModule } from './doctor-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DoctorInfoComponent
  ],
  imports: [
    CommonModule,doctorRoutingModule,FormsModule
  ],
  providers:[
    
  ]
})
export class DoctorModule { }
