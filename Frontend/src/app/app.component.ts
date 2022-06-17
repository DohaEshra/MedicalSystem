import { Component } from '@angular/core';
import { PatientService } from './patient/patient.service';
//import { patient } from './_Models/patient';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  constructor(public PatSer:PatientService){
    PatSer.getPatients().subscribe(a=>console.log(a))
  }
}
