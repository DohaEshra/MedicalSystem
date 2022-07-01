import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorHomeComponent } from '../doctor-home/doctor-home.component';
import { DoctorService } from '../doctor.service';


@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})

export class DoctorInfoComponent implements OnInit,OnDestroy {
  doctor:Doctor=new Doctor();
  sub:Subscription|null=null;

  constructor(public doctorSer:DoctorService,public router:Router,private doc:DoctorHomeComponent) {}
  

  ngOnInit(): void {
    this.doc.selectedDoctor$.subscribe(
      data=>{
        this.doctor=data;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
