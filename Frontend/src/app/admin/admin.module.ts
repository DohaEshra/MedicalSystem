import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
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
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { GetAllPipe } from './_Pipes/get-all.pipe';
import { DisplayDoctorComponent } from './display-doctor/display-doctor.component';
import { ContainFilesPipe } from './_Pipes/contain-files.pipe';
import { DisplayOtherComponent } from './display-other/display-other.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    DoctorRegisterationComponent,
    FileUpadateOrDeleteComponent,
    SafePipe,
    DoctorRegisterationComponent,
    AgeValDirective,
    DoctorScheduleComponent,
    EditDoctorScheduleComponent,
    DoctorScheduleComponent,
    ManageEmployeesComponent,
    GetAllPipe,
    DisplayDoctorComponent,
    ContainFilesPipe,
    DisplayOtherComponent
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
