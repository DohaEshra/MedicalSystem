import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit,OnDestroy {

  constructor(public doctorSer:DoctorService,public router:Router) { }
  doctor:Doctor=new Doctor(Number(),"","",Number(),"","",Number(),"","");
  sub:Subscription|null=null;

  ngOnInit(): void {
    this.sub = this.doctorSer.getDoctorProfile().subscribe(
      a=>{
        this.doctor=a;
      }
    );
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
