import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Record } from 'src/app/_Models/record';
import { DoctorPatientComponent } from '../doctor-patient/doctor-patient.component';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent implements OnInit,OnDestroy{

  RecordList:Record[]=[];
  doctorID:number|null=null;
  searchText:string="";
  sub:Subscription|null=null;
  fileDialogVisibility = false;

  constructor(private patientSer:PatientService,private comp:DoctorPatientComponent , private docSer:DoctorService) { }

  ngOnInit(): void {
    
    this.comp.selectedPatient$.subscribe(
      data=>{
        this.patientSer.getPatientById(data.id).subscribe(
          data=>{
            this.RecordList=data.records;
          })   
      },
      err =>{console.log('error from patient history component: ',err);}
    );
    this.doctorID=this.docSer.DoctorID;
  }

  

  showDialog(){
    this.fileDialogVisibility = true;
  }

  hideDialog(){
    this.fileDialogVisibility = false;
  }

  /*
  streamToString (stream:any) {
    //decodes a string of data (stream) which has been encoded using Base64 encoding.
    let binaryString = window.atob(stream);
    //change string into bytes[] (typed array represents an array of 8-bit unsigned integers)
    let bytes = new Uint8Array(binaryString.length);
    //The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.
    let binaryToBlob = bytes.map((byte, i) => binaryString.charCodeAt(i));
    // binary file
    let blob = new Blob([binaryToBlob], { type: 'application/pdf' });
    return blob;
  // console.log('blob',blob);
  //  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  //   window.navigator.msSaveOrOpenBlob(blob, fileName);
  //   return;
  // }
}

url(file:any){
  return ""
}
*/

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
