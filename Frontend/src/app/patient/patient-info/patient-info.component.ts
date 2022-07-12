import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';
import { Subscription } from 'rxjs';
import { PatientService } from '../Patient.service';
import { Router } from '@angular/router';
import { PatientHomeComponent } from '../patient-home/patient-home.component';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  patient:Patient=new Patient();
  sub:Subscription|null=null;

  constructor(public patientSer:PatientService,public router:Router,public patHomeComp:PatientHomeComponent) {
    
  }
  

  ngOnInit(): void {

    
    this.sub = this.patHomeComp.selectedPatient$.subscribe( data => {
      this.patient = data
      console.log(this.patHomeComp);
    })

  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
