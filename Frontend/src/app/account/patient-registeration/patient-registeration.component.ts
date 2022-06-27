import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { AccountService } from '../Account.service';

@Component({
  selector: 'app-patient-registeration',
  templateUrl: './patient-registeration.component.html',
  styleUrls: ['./patient-registeration.component.css']
})

export class PatientRegisterationComponent implements OnInit {

    
  onstructor() { }
  ngOnInit() {
  }
}
