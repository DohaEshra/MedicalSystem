import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { DoctorRegisterationComponent } from './doctor-registeration/doctor-registeration.component';
import { FormsModule } from '@angular/forms';
import { FileUpadateOrDeleteComponent } from './file-upadate-or-delete/file-upadate-or-delete.component';
import { SafePipe } from './_Pipes/safe.pipe';
import { FileUploadModule } from 'primeng/fileupload';
import { CoreModule } from '../core/core.module';
import { DialogModule } from 'primeng/dialog';
import { AgeValDirective } from './_directives/age-val.directive';
import { DoctorScheduleComponent } from './doctor-schedule/doctor-schedule.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { EditDoctorScheduleComponent } from './edit-doctor-schedule/edit-doctor-schedule.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    DoctorRegisterationComponent,
    FileUpadateOrDeleteComponent,
    SafePipe,
    AdminHomeComponent,
    DoctorRegisterationComponent,
    AgeValDirective,
    DoctorScheduleComponent,
    EditDoctorScheduleComponent
  ],
  imports: [
    CommonModule,ConfirmDialogModule,
    AdminRoutingModule,//BrowserAnimationsModule,
    FormsModule,//SidebarModule,
    FileUploadModule,
    CoreModule,
    DialogModule,CommonModule
  ]
})
export class AdminModule { }
