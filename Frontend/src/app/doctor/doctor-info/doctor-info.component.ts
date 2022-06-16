import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {

  constructor(public doctorSer:DoctorService,public router:Router) { }

  sub:Subscription|null=null;

  ngOnInit(): void {
    this.doctorSer.getDoctorProfile();
  }

}
