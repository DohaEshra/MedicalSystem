import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Record } from 'src/app/_Models/record';
import { DoctorPatientComponent } from '../doctor-patient/doctor-patient.component';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit,OnDestroy {

  RecordList:Record[]=[];
  doctorID:number|null=null;
  sub:Subscription|null=null;
  
  constructor(private comp:DoctorPatientComponent , private docSer:DoctorService) { }

  ngOnInit(): void {
    this.comp.selectedPatient$.subscribe(
      data=>{
        this.RecordList=data.records;
      }
    );
    this.doctorID=this.docSer.DoctorID;
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
