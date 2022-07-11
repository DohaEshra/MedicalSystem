import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/_Models/doctor';
import { Visit } from 'src/app/_Models/visit';
import { DoctorHomeComponent } from '../doctor-home/doctor-home.component';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-appointment',
  templateUrl: './doctor-appointment.component.html',
  styleUrls: ['./doctor-appointment.component.css']
})
export class DoctorAppointmentComponent implements OnInit,OnDestroy {

  status:number=0;
  doctor:Doctor=new Doctor();
  visits:Visit[]=[];
  sub:Subscription|null=null;
  sub1:Subscription|null=null;

  constructor(private doc:DoctorHomeComponent,private docSer:DoctorService) { }

  ngOnInit(): void {

    this.sub = this.doc.selectedDoctor$.subscribe(
      data=>{
        this.doctor=data;
      }
    );
    this.sub1 = this.docSer.getDoctorPatients().subscribe(
      data=>{
        this.visits=data;
      }
    )
    
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
    this.sub1?.unsubscribe();
  }

}
