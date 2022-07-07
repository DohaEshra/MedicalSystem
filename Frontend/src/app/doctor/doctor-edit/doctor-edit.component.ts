import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorHomeComponent } from '../doctor-home/doctor-home.component';
import { DoctorService } from '../doctor.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit,OnDestroy {

  constructor(public doctorSer:DoctorService,public router:Router ,private doc:DoctorHomeComponent) { }
  doctor:Doctor=new Doctor();
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
    //get doctor data
    this.sub = this.doc.selectedDoctor$.subscribe(
      data=>{
        this.doctor=data;
        this.firstName = this.doctor.fname
        this.lastName = this.doctor.lname
        this.counter = 0;
      }
    );
  }

  //edit doctor
  edit(){
    this.doctorSer.editDoctor(this.doctor).subscribe(
      a=>{
        this.doctor.fname = this.firstName
        this.doctor.lname = this.lastName
        this.counter++;
        if(this.counter==1)
        {
          this.edit();
        }
        this.router.navigateByUrl("doctor/info");
      },
      error=>{
        this.span="Check inputs";
      }
    )
  }

  imageErrorMessage(msg:string, imageInput:any){
    this.profileImage = false;
    imageInput.style.display = 'none';
    this.doctor.profilePic = '';
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
      this.doctor.profilePic = this.url; 
    }
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
