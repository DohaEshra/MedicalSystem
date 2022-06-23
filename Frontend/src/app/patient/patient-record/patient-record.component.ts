import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Record } from 'src/app/_Models/record';
@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit {
 

  RecordList:Record[]=[];
  RecordListt:number[]=[1, 2, 3];
  sub:Subscription|null=null;

  constructor(public PatientServ:PatientService) { }

  ngOnInit(): void {
    this.sub = this.PatientServ.getPatientRecords().subscribe(
      data=>{
        if(data!=null)
        {
          this.RecordList=data;
        }
      }
    )
  }

}
