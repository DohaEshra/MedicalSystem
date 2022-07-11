import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Record } from 'src/app/_Models/record';
import { DoctorService } from '../doctor.service';
import { Guid } from "guid-typescript";
import { FileInfo } from 'src/app/_Models/FileInfo';
@Component({
  selector: 'app-record-prescription',
  templateUrl: './record-prescription.component.html',
  styleUrls: ['./record-prescription.component.css']
})
export class RecordPrescriptionComponent implements OnInit {

  recordList:FileInfo[]=[];
  record:FileInfo=new FileInfo();
  medicalTests:string[]=[];
  testType:string[]=[];
  sub:Subscription|null=null;
  medicalPrescription:string[]=[];   // prescription

  constructor(private activateRoute:ActivatedRoute,private docSer:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.record.did=this.docSer.DoctorID;
    this.record.didNavigation=null;
    this.sub=this.activateRoute.params.subscribe(
      a=>{
        this.record.pid=a['id'];
      }
    ) 
  }
  
  //add field
  fieldId= 0; 
  addField(){
    var inputValue = (<HTMLInputElement>document.getElementById('newField')).value;
    var testType = (<HTMLInputElement>document.getElementById('type')).value;
    if(inputValue && testType)
    {
      this.fieldId++;
      this.addEl('fields', 'p', 'field-' + this.fieldId, inputValue,testType);
      this.medicalTests.push(inputValue);
      this.testType.push(testType);
    }
  }

  // add field prescription
  fieldId2= 0; 
  addFieldPrescription(){
    var presc = "";
    let medicineInputValue = (<HTMLInputElement>document.getElementById('medicine')).value;
    let medicineInfoInputValue = (<HTMLInputElement>document.getElementById('info')).value;
    if(medicineInputValue && medicineInfoInputValue)
    {
      this.fieldId2++;
      this.addEl('fields2', 'p', 'field-' + this.fieldId2, medicineInputValue,medicineInfoInputValue);
      presc=medicineInputValue+': '+medicineInfoInputValue;
      this.medicalPrescription.push(presc);
    }
  }

  //add new field
  addEl(parentId:string, elementTag:string, elementId:string , inputValue:string,testType:string) {

    //label for input values
    var htmlLabel = document.createElement('div');
    htmlLabel.setAttribute('class',"ms-5 col-md-4");
    htmlLabel.setAttribute("style","padding-top: 11px;");
    htmlLabel.append(inputValue.toUpperCase() ,"  :  ", testType=='S'?testType='SCAN':testType=='T'?testType='TEST':testType);

    //button for removing 
    var htmlbutton = document.createElement('input');
    htmlbutton.setAttribute('type',"button");
    htmlbutton.setAttribute('value',"-");
    htmlbutton.setAttribute('style',"border-radius:30px");
    htmlbutton.setAttribute('class',"btn btn-danger btn-outline-danger text-light col-md-1");
    htmlbutton.addEventListener("click",()=>{
      var element = document.getElementById(elementId);
      element?.parentNode?.removeChild(element);
      if(parentId ==='fields'){ //to remove from test type 
        this.medicalTests.splice(parseInt(elementId.split('-')[1])-1,1);
        this.testType.splice(parseInt(elementId.split('-')[1])-1,1);
      }else{ //to remove from prescription
        this.medicalPrescription.splice(parseInt(elementId.split('-')[1])-1,1);
      } 
    });
    
    //append elements in new div
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.setAttribute('class', "d-flex");
    newElement.appendChild(htmlLabel);
    newElement.appendChild(htmlbutton);

    //append new div in p
    var p = document.getElementById(parentId);
    p?.appendChild(newElement);
  }

  //submit
  count=0;
  submit(){
    var date = (<HTMLInputElement>document.getElementById('date')).value;
    var summary = (<HTMLInputElement>document.getElementById('summary')).value;
    //var prescription = (<HTMLInputElement>document.getElementById('prescription')).value;
    
    if(this.medicalPrescription.length>0){
      this.record.prescription=this.medicalPrescription.join(',');
      console.log(this.record.prescription);
    }

    if(this.medicalTests.length==0 && this.validation(date,summary,this.record.prescription))
    {
      this.docSer.recordPatientPrescription(this.record,this.record.pid,this.record.did,this.record.date).subscribe(
        a=>{},
        err=>{}
      );
    }
    else
    {
      for(let i=0;i<this.medicalTests.length;i++)
      {
        this.record.file_description=this.medicalTests[i];
        this.record.testType=this.testType[i];
        this.docSer.recordPatientPrescription(this.record,this.record.pid,this.record.did,this.record.date).subscribe(
          a=>{},
          err=>{}
        );
        this.count++;
      }
    }
   
    if(this.count == this.medicalTests.length && this.validation(date,summary,this.record.prescription))
    {
      setTimeout(()=>{this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/history");},0)
    }
  }

  //back
  back(){
    this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/info");
  }

  //check validation
  validation(date:any,summary:any,prescription:any):boolean
  {
    var div = document.getElementById('error');
    if(date=="" || prescription=="" || summary == "")
    {
      var span = document.createElement('span');
      span.setAttribute('style','color: red;')
      span.setAttribute('class','mx-3');
      span?.append("Missing fields");
      div?.replaceWith(span);
      return false;
    }
    return true;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
