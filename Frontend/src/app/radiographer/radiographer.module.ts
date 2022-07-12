import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadiographerRoutingModule } from './radiographer-routing.module';
import { RadiographerHomeComponent } from './radiographer-home/radiographer-home.component';
import { FormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import { RecordFilterationPipe } from './_pipes/record-filteration.pipe';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    RadiographerHomeComponent,
    RecordFilterationPipe
  ],
  imports: [
    CommonModule,
    RadiographerRoutingModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule , CoreModule,
  ]
})
export class RadiographerModule { }
