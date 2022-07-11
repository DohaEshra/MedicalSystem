import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
par:string = ""
// private patient$ = new BehaviorSubject<any>({});
// selectedPatient$ = this.patient$.asObservable();
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

}
