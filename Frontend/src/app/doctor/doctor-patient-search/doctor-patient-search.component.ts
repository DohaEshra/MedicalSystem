import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PatientService } from 'src/app/patient/Patient.service';
import { Patient } from 'src/app/_Models/patient';
import { SearchByNamePipe } from '../_Pipes/search-by-name.pipe';

@Component({
  selector: 'app-doctor-patient-search',
  templateUrl: './doctor-patient-search.component.html',
  styleUrls: ['./doctor-patient-search.component.css']
})
export class DoctorPatientSearchComponent implements OnInit,OnDestroy {
  Indicator:number=0;
  ID:any="";
  Name:string="";
  PatientList:Patient[]=[];
  patientResult:Patient[]=[];
  sub:Subscription|null=null;
  constructor(public PatientSer:PatientService,private searchByName:SearchByNamePipe) { }

  ngOnInit(): void {
    this.sub = this.PatientSer.getPatients().subscribe(
      data=>{
        if(data!=null)
        {
          this.PatientList=data;
        }
      }
    )
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
