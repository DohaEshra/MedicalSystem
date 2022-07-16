import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { Visit } from 'src/app/_Models/visit';
import { DoctorService } from '../doctor.service';
import { SearchByNamePipe } from '../_Pipes/search-by-name.pipe';
import { LoadingComponent } from 'src/app/core/loading/loading.component';
@Component({
  selector: 'app-doctor-patient-search',
  templateUrl: './doctor-patient-search.component.html',
  styleUrls: ['./doctor-patient-search.component.css']
})
export class DoctorPatientSearchComponent implements OnInit,OnDestroy {
  Indicator:number=1;

  ID:any="";
  Name:string="";
  visitList:Visit[]=[];
  visitListWithoutDuplication:Visit[]=[];
  sub:Subscription|null=null;
  selectedDay: string = '';
  isDuplicated:boolean=false;

  constructor(public doctorSer:DoctorService) { }

  ngOnInit(): void {
    this.sub = this.doctorSer.getDoctorPatients().subscribe(
      data=>{
        if(data!=null)
        {
          this.visitList=data;
          for (let i = 0; i < this.visitList.length; i++) {
            this.isDuplicated = false;
            for (let j = i+1; j < this.visitList.length; j++) {
              if(this.visitList[j].pid==this.visitList[i].pid){
                this.isDuplicated = true;
                break;
              }
            }
              if(this.isDuplicated){
                continue;
              }
            
            this.visitListWithoutDuplication.push(this.visitList[i])
          }
        }
        
      },
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
