import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';
import { Patient } from 'src/app/_Models/patient';
import { Record } from 'src/app/_Models/record';

@Component({
  selector: 'app-search-for-patient',
  templateUrl: './search-for-patient.component.html',
  styleUrls: ['./search-for-patient.component.css']
})
export class SearchForPatientComponent implements OnInit {

  record2 = new Record(Guid.create());
  subscribe:Subscription|null=null;
  showResult = false;
  showError = false;
  showError2 = false;
  errorMessage = '';
  errorMessage2 = '';
  IsNumberPattern = "^[0-9]+$";
  pipe = new DatePipe('en-US');
  record : any ={pid:"",did:"",date:this.pipe.transform(new Date(),'dd-MM-YYYY')};
  constructor(public recordService:DoctorService ) { }
  doctor:Doctor|null = new Doctor();
  patient:Patient|null = new Patient();
  info:string[]=[];
  medicine :string[]=[];
  medicines:string[][] = [];
  showLoading= false;
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  ngOnInit(): void {
    console.log(this.record.date)
  }
  ShowPatientPrescription(){
    if(this.record.pid.match(this.IsNumberPattern)&&this.record.pid!="" &&this.record.did.match(this.IsNumberPattern) &&this.record.did!="")
    {
      this.medicines=[];
      this.showResult= false;
      this.showLoading = true;
      this.subscribe = this.recordService.getPatientPrescriptionForPharmacy(+this.record.pid,+this.record.did,this.record.date).subscribe(
        { next:data=>{
          console.log(data);
          if(data==null)
          {
            this.showError = true;
            this.errorMessage = 'Invalid data !' ;
            this.showResult= this.showLoading = false ;
            return
          }
        var dummy=data.prescription.split(',');
        dummy.forEach(a=>{
          this.medicines.push([a.split(': ')[0],a.split(': ')[1]]);
        })
        this.showError2=this.showLoading =this.showError = false;
        this.showResult= true ;
        this.record2 = data;
        this.doctor = data.didNavigation;
        this.patient= data.pidNavigation;
      },
      error:err=>{
        this.showError2 =this.showLoading=this.showResult= false ;
        this.showError = true;
        this.errorMessage = 'Invalid data !' ;
      }}
      );
    }else if(this.record.pid==""||this.record.did==""){
      this.showError = true;
      this.showLoading = false;
      this.errorMessage = 'some fields are required!' ;
    }else 
    {
      this.showLoading = false;
      this.showError = true;
      this.errorMessage = 'doctor id and patient id must be a number!' ;
    }
  }
}
