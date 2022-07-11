import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { PatientService } from '../Patient.service';
@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {
par:string = ""

  constructor() { }

  ngOnInit(): void {
    
  }

}
