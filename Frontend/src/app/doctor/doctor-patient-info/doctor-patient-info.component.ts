import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Patient } from 'src/app/_Models/patient';
import { Record } from 'src/app/_Models/record';
import { DoctorPatientComponent } from '../doctor-patient/doctor-patient.component';

@Component({
  selector: 'app-doctor-patient-info',
  templateUrl: './doctor-patient-info.component.html',
  styleUrls: ['./doctor-patient-info.component.css']
})
export class DoctorPatientInfoComponent implements OnInit,OnDestroy {

  patient:Patient=new Patient();
  sub:Subscription|null=null;

  constructor(private DoctorPatientcomp:DoctorPatientComponent) { }

  ngOnInit(): void {
    this.sub= this.DoctorPatientcomp.selectedPatient$.subscribe(
      data=>{
        this.patient=data;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
