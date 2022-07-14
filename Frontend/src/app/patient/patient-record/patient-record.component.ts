import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Record } from 'src/app/_Models/record';
import { Doctor } from 'src/app/_Models/doctor';
import { Router } from '@angular/router';
import { getLocaleDateFormat } from '@angular/common';
import { PatientHomeComponent } from '../patient-home/patient-home.component';
import { Patient } from 'src/app/_Models/patient';
import { DoctorRating } from 'src/app/_Models/doctor-rating';

@Component({
  selector: 'app-patient-record',
  templateUrl: './patient-record.component.html',
  styleUrls: ['./patient-record.component.css']
})
export class PatientRecordComponent implements OnInit,OnDestroy {
 //search
 date:any;
 DoctorName = "";
clicked = false;


  fileDialogVisibility = false;
  RecordList:Record[]=[];
  doctor:Doctor=new Doctor();
  sub:Subscription|null=null;
  sub2: Subscription | null = null;
  patient = new Patient();
  rate:number= Number();
  doctorRating = new DoctorRating()
  intialRate =0
  myAttachedFile=''

  constructor(public PatientServ:PatientService, public router:Router,public patHomeComp:PatientHomeComponent) { }

  ngOnInit() {
    console.log("r",this.patient.records)
    this.patHomeComp.selectedPatient$.subscribe( data => {
      this.patient = data
      console.log('meeeeeee',this.patient);
    })
  }
  
  showDialog(record: any) {
    this.fileDialogVisibility = true;
    this.myAttachedFile = record;
  }

  hideDialog(){
    this.fileDialogVisibility = false;
  }

  ratingDoctor(record: any, rat:any) {
    // console.log('ratingDoctor',this.rate);

    this.doctorRating.pid = record.pid;
    this.doctorRating.did = record.did;
    this.doctorRating.Rating = rat.rate;
    var rec = new Record();
    rec.pid = record.pid;
    rec.date = record.date;
    rec.did = record.did;
    rec.starRating = rat.rate;
    rec.fno = record.fno;
    rec.didNavigation = rec.oidNavigation = rec.pidNavigation = null;
    rec.summary = record.summary
    rec.prescription = record.prescription;

    console.log('olallala',rec);

    this.sub = this.PatientServ.addDoctorRating(this.doctorRating).subscribe({
      next: data => {
        console.log('1',data) 
        this.sub2 = this.PatientServ.updatePatientRecord(rec).subscribe({
          next: data => {
            console.log('2',data) 
          }
          ,error: err => console.log(err)
        })
      }
      ,error: err => {console.log(err)}
    }


    );
  }
  SearchRecords()
  {
    this.clicked=true;
    console.log("recordssss:"+this.patient.id)
  }
  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }

}
