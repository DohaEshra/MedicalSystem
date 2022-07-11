import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { PatientService } from '../Patient.service';

@Component({
  selector: 'app-showappointments',
  templateUrl: './showappointments.component.html',
  styleUrls: ['./showappointments.component.css']
})
export class ShowappointmentsComponent implements OnInit,OnDestroy {
  private patient$ = new BehaviorSubject<any>({});
  selectedPatient$ = this.patient$.asObservable();
  patient:Patient=new Patient();
  sub:Subscription|null=null;
  constructor(public patientSer:PatientService) { }

  ngOnInit(): void {
    this.sub = this.patientSer.getPatient().subscribe(
      a=>{
        this.patient=a;
        this.patient$.next(this.patient);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
