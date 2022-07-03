import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FileUploadModule} from 'primeng/fileupload';
import { LabTechnicianRoutingModule } from './lab-technician-routing.module';
import { LabTechncianHomeComponent } from './lab-techncian-home/lab-techncian-home.component';
import { FormsModule } from '@angular/forms';
import { SearchByNamePipe } from './_pipes/search-by-name.pipe';
import { SearchByIdPipe } from './_pipes/search-by-id.pipe';
import { FilterRecordsPipe } from './_pipes/filter-records.pipe';


@NgModule({
  declarations: [
    LabTechncianHomeComponent,
    SearchByNamePipe,
    SearchByIdPipe,
    FilterRecordsPipe
  ],
  imports: [
    CommonModule,
    LabTechnicianRoutingModule,
    FormsModule,
    FileUploadModule
  ]
})
export class LabTechnicianModule { }
