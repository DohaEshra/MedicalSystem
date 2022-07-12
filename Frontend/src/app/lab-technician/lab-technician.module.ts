import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';
import { LabTechnicianRoutingModule } from './lab-technician-routing.module';
import { LabTechncianHomeComponent } from './lab-techncian-home/lab-techncian-home.component';
import { FormsModule } from '@angular/forms';
import { FilterRecordsPipe } from './_pipes/filter-records.pipe';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    LabTechncianHomeComponent,
    FilterRecordsPipe
  ],
  imports: [
    CommonModule,
    LabTechnicianRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
  ]
})
export class LabTechnicianModule { }
