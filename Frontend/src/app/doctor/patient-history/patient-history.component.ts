import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Record } from 'src/app/_Models/record';
import { DoctorPatientComponent } from '../doctor-patient/doctor-patient.component';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit,OnDestroy {

  RecordList:Record[]=[];
  sub:Subscription|null=null;
  
  constructor(private comp:DoctorPatientComponent) { }

  ngOnInit(): void {
    this.comp.selectedPatient$.subscribe(
      data=>{
        this.RecordList=data;
      }
    );
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
