import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Record } from 'src/app/_Models/record';
import { Doctor } from 'src/app/_Models/doctor';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {
 

  RecordList:Record[]=[];
  doctor:Doctor=new Doctor(Number(),"","",Number(),new Date,"","","","",Number(),"","","","","");
  sub:Subscription|null=null;
  constructor(public PatientServ:PatientService, public router:Router) { }

  ngOnInit(): void {
    this.sub = this.PatientServ.getPatientRecords().subscribe(
      data=>{
        if(data!=null)
        {
          this.RecordList=data;
        }
      },
      err => console.log("error from patient Record component: ",err)
    )
    
  }

}
