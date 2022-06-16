import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit,OnDestroy {

  constructor(public doctorSer:DoctorService,public router:Router) { }
  doctor:Doctor=new Doctor(Number(),"","",Number(),"","",Number(),"","");
  sub:Subscription|null=null;
  span:string="";

  ngOnInit(): void {
    //get doctor data
    this.doctorSer.getDoctorProfile().subscribe(
      data=>{
        this.doctor=data;
      },
      error=>{
        console.log(error);
      }
    )
  }

  //edit doctor
  edit(){
    this.doctorSer.editDoctor(this.doctor).subscribe(
      a=>{
        this.router.navigateByUrl("doctor");
      },
      error=>{
        this.span="Check inputs";
      }
    )
  }

  //Back to doctor home
  back(){
    this.router.navigateByUrl("doctor");
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
