import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Patient } from 'src/app/_Models/patient';
import { Record } from 'src/app/_Models/record';

@Component({
  selector: 'app-doctor-patient-info',
  templateUrl: './doctor-patient-info.component.html',
  styleUrls: ['./doctor-patient-info.component.css']
})
export class DoctorPatientInfoComponent implements OnInit,OnDestroy {

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
        })   
      }
    ) 
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
