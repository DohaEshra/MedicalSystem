import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Works_in } from 'src/app/_Models/works_in';
import { DoctorHomeComponent } from '../doctor-home/doctor-home.component';

@Component({
  selector: 'app-doctor-hours',
  templateUrl: './doctor-hours.component.html',
  styleUrls: ['./doctor-hours.component.css']
})
export class DoctorHoursComponent implements OnInit {

  did:number=0;
  appointments:Works_in[]=[];
  sub:Subscription|null=null;

  constructor(private patientser:PatientService,private doc:DoctorHomeComponent) { }

  ngOnInit(): void {
    this.sub=this.doc.selectedDoctor$.subscribe(
      data=>{
        this.did=data.id;
        this.patientser.GetAppointments(this.did).subscribe(
          data=>{
            this.appointments=data;
          }
        )
      }
    );
  }

}
