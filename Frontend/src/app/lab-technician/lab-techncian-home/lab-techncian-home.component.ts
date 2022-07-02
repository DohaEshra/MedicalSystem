import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { LabTechnicianService } from '../lab-technician.service';

@Component({
  selector: 'app-lab-techncian-home',
  templateUrl: './lab-techncian-home.component.html',
  styleUrls: ['./lab-techncian-home.component.css']
})
export class LabTechncianHomeComponent implements OnInit {
Indicator:number=0;
  ID:any="";
  Name:string="";
  patientsList:any;
  sub:Subscription|null=null;
  constructor(public labTechnicianService:LabTechnicianService) { }

  ngOnInit(): void {
    this.sub = this.labTechnicianService.getPatients().subscribe({
        next: data =>
        {
          this.patientsList = data
          console.log('success to add patient ' , data)
        }
        ,error:err=>{
          console.log('error from lab technician home component', err)
          // this.errorMessage = err.error;
          // Object.values(err.error.errors).map((e: any)=> e.map((x:string)=> x))
        }
      })
  }

  //indicate to searching by id
  setIndicatorForId()
  {
    this.Indicator=1;
  }
  //indicate to searching by name 
  setIndicatorForName()
  {
    this.Indicator=2;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
