import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.css']
})
export class DoctorHomeComponent implements OnInit,OnDestroy {

  private doctor$ = new BehaviorSubject<any>({});
  selectedDoctor$ = this.doctor$.asObservable();
  doctor:Doctor=new Doctor();
  sub:Subscription|null=null;

  constructor(public doctorSer:DoctorService,public router:Router) {}

  ngOnInit(): void {
    this.sub = this.doctorSer.getDoctorProfile().subscribe(
      a=>{
        this.doctor=a;
      }
    );
  }

  send()
  {
    this.doctor$.next(this.doctor);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
