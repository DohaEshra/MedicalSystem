import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { Visit } from 'src/app/_Models/visit';
import { DoctorService } from '../doctor.service';
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
  visitList:Visit[]=[];
  sub:Subscription|null=null;
  selectedDay: string = '';

  constructor(public doctorSer:DoctorService) { }

  ngOnInit(): void {
    this.sub = this.doctorSer.getDoctorPatients().subscribe(
      data=>{
        if(data!=null)
        {
          this.visitList=data;
          console.log(this.visitList)
        }
      },
      //err => console.log("error from doctor patient search component",err)
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
  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedDay = event.target.value;
  }
}
