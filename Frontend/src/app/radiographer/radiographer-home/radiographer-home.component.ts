import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';
import { Record } from 'src/app/_Models/record';
import { RadiographerService } from '../radiographer.service';

@Component({
  selector: 'app-radiographer-home',
  templateUrl: './radiographer-home.component.html',
  styleUrls: ['./radiographer-home.component.css']
})
export class RadiographerHomeComponent implements OnInit {

  Indicator =0;
  ID:any="";
  Name=""
  patientsList:any= [];
  patientsFilteredByName:any= [];
  uploadedFiles: any[] = [];
  patient = new Patient()
  sub:Subscription|null = null;
  radiographerID
  constructor(public radiographerService:RadiographerService) {
    this.radiographerID = this.radiographerService.getRadiographerID();
   }

  ngOnInit(): void {
    this.sub = this.radiographerService.getPatients().subscribe({
        next: data =>
        {
          this.patientsList = data
          console.log('success to add patient ' , data)
        }
        ,error:err=>{
          console.log('error from radiographer home component', err)
          // this.errorMessage = err.error;
          // Object.values(err.error.errors).map((e: any)=> e.map((x:string)=> x))
        }
      })
  }

  SelectedPatientById(ID:number){
    for(let i=0;i<this.patientsList.length;i++)
    {
      if(this.patientsList[i].id == ID)
      {
        this.patient= this.patientsList[i];
        this.ID = ID;
        // console.log('patientById', this.patient)
        return this.patient;
      }
    }
    this.patient = new Patient()
    return this.patient;
  }

  SelectedPatientByName(name:string){
    for(let i=0;i<this.patientsList.length;i++)
    {
      if(this.patientsList[i].fname.toLowerCase() == name.toLowerCase() || this.patientsList[i].lname.toLowerCase() == name.toLowerCase())
      {
        this.patient= this.patientsList[i];
        this.Name = name;
        // console.log('patientById', this.patient)
        return this.patient;
      }
    }
    this.patient = new Patient()
    return this.patient;
  }
  
  myUploader(record:Record,event:any) {
    console.log('record',event)
    record.testType="F";
    var x = this.patient.records.indexOf(record);
    this.patient.records.splice(x, 1);
    alert(event.files[0].name + ' uploaded successfully');
  }

  errorInUploading(event:any){
    alert('unfortunately, ' + event.files[0].name + ' didn\'t upload successfully');
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
