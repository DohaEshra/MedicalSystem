import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { PatientHomeComponent } from '../patient-home/patient-home.component';
import { PatientService } from '../Patient.service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  constructor(public patientSer:PatientService,public router:Router) { }
  patient:Patient=new Patient();
  sub:Subscription|null=null;
  span:string="";
  url:any;
  imagePath:any;
  profileImage = false;
  agePattern = '^[0-9]+$';
  phonePattern = '^[(012)|(010)|(011)|(015)]{3}[0-9]{8}$';
  addressPattern = '^[A-Za-z0-9,_.-]{10,40}$';
  namePattern = '^[A-Za-z]{2,20}$';
  emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";

  counter:number=0;
  firstName:string=''
  lastName:string=''

  ngOnInit(): void {
    this.sub = this.patientSer.getPatient().subscribe(
      data=>{
        this.patient=data;
        this.firstName = this.patient.fname
        this.lastName = this.patient.lname
        this.counter = 0;
      }
    );
  }
  edit(){
    this.patientSer.editPatient(this.patient).subscribe(
      a=>{
        this.patient.fname = this.firstName
        this.patient.lname = this.lastName
        this.counter++;
        if(this.counter==1)
        {
          this.edit();
        }
        this.router.navigateByUrl("patient/info");
      },
      error=>{
        this.span="Check inputs";
      }
    )
  }
  imageErrorMessage(msg:string, imageInput:any){
    this.profileImage = false;
    imageInput.style.display = 'none';
    this.patient.profilePic = '';
    return;
  }
  onFileSelected(event: any, imageInput:any) {
    const files = event.target.files;
    if (files.length === 0){
      

      this.imageErrorMessage("There is no attached file.",imageInput)
      return;
    }

    const mimeType = files[0].type;
        if (!mimeType.match(/image\/*/) ) {
      this.imageErrorMessage("Only images are supported.",imageInput)
      return;
    }

    this.profileImage = true
    imageInput.style.display = 'block';
    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.url = reader.result;
      this.patient.profilePic = this.url; 
    }
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
