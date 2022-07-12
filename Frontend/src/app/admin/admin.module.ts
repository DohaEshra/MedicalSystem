import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';
import { FormsModule } from '@angular/forms';
import { FileUpadateOrDeleteComponent } from './file-upadate-or-delete/file-upadate-or-delete.component';
import { SafePipe } from './_Pipes/safe.pipe';
import { RecordFilterationPipe } from './_Pipes/record-filteration.pipe';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { DialogModule } from 'primeng/dialog';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { AgeValDirective } from './_directives/age-val.directive';

@NgModule({
  declarations: [
    DoctorRegisterationComponent,
    FileUpadateOrDeleteComponent,
    SafePipe,
    RecordFilterationPipe,
    AdminHomeComponent,
    DoctorRegisterationComponent,
    //EmployeeRegisterComponent,
    AgeValDirective
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    FileUploadModule,
    CoreModule,
    DialogModule
  ]
})
export class AdminModule { }
