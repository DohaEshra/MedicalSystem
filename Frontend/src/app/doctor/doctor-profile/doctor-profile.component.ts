import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorHomeComponent } from '../doctor-home/doctor-home.component';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit,OnDestroy {
  doctor:Doctor=new Doctor();
  sub:Subscription|null=null;
  constructor(private doc:DoctorHomeComponent) { }

  ngOnInit(): void {
    this.sub=this.doc.selectedDoctor$.subscribe(
      data=>{
        this.doctor=data;
      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
