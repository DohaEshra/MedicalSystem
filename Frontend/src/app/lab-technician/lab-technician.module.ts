import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabTechnicianRoutingModule } from './lab-technician-routing.module';
import { LabTechncianHomeComponent } from './lab-techncian-home/lab-techncian-home.component';
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from './_pipes/search-by-name.pipe';
import { SearchByIdPipe } from './_pipes/search-by-id.pipe';


@NgModule({
  declarations: [
    LabTechncianHomeComponent,
    SearchByNamePipe,
    SearchByIdPipe
  ],
  imports: [
    CommonModule,
    LabTechnicianRoutingModule,
    FormsModule
  ]
})
export class LabTechnicianModule { }
