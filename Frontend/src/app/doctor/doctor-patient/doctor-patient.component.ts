import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Patient } from 'src/app/_Models/patient';
import { Record } from 'src/app/_Models/record';

@Component({
  selector: 'app-doctor-patient',
  templateUrl: './doctor-patient.component.html',
  styleUrls: ['./doctor-patient.component.css']
})
export class DoctorPatientComponent implements OnInit,OnDestroy {

  private patient$ = new BehaviorSubject<any>({});
  selectedPatient$ = this.patient$.asObservable();

  patient:Patient=new Patient();
  RecordList:Record[]=[];
  sub:Subscription|null=null;

  constructor(private patientSer:PatientService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(
      a=>{
        this.patientSer.getPatientById(a['id']).subscribe(
        data=>{
          this.patient=data;
          this.RecordList=data.records;
          this.patient$.next(this.patient);
        })   
      }
    ) 
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
