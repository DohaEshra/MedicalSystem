import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PharmacyRoutingModule } from './pharmacy-routing.module';
import { SearchForPatientComponent } from './search-for-patient/search-for-patient.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchForPatientComponent
  ],
  imports: [
    CommonModule,
    PharmacyRoutingModule,FormsModule
  ]
})
export class PharmacyModule { }
