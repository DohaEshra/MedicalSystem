import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Record } from 'src/app/_Models/record';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-record-prescription',
  templateUrl: './record-prescription.component.html',
  styleUrls: ['./record-prescription.component.css']
})
export class RecordPrescriptionComponent implements OnInit {

  record:Record=new Record();
  medicalTests:string[]=[];
  sub:Subscription|null=null;

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
    this.fieldId++;
    var inputValue = (<HTMLInputElement>document.getElementById('newField')).value;
    this.addEl('fields', 'p', 'field-' + this.fieldId, inputValue);
  }


  //add new field
  addEl(parentId:string, elementTag:string, elementId:string , inputValue:string) {

    //label for input values
    var htmlLabel = document.createElement('div');
    htmlLabel.setAttribute('class',"ms-5 col-md-4");
    htmlLabel.append(inputValue);

    //button for removing 
    var htmlbutton = document.createElement('input');
    htmlbutton.setAttribute('type',"button");
    htmlbutton.setAttribute('value',"-");
    htmlbutton.setAttribute('style',"border-radius:30px");
    htmlbutton.setAttribute('class',"btn btn-danger btn-outline-danger text-light col-md-1");
    htmlbutton.addEventListener("click",()=>{
      var element = document.getElementById(elementId);
      element?.parentNode?.removeChild(element);
      this.medicalTests.splice(parseInt(elementId.split('-')[1])-1,1);
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
    this.medicalTests.push(inputValue);
  }

  count=0;
  submit(){
    for(let i=0;i<this.medicalTests.length;i++)
    {
      this.record.file_description=this.medicalTests[i];
      this.docSer.recordPatientPrescription(this.record,this.record.pid,this.record.did,this.record.date).subscribe(
        a=>{},
        err=>{}
      );
      this.count++;
    }
    if(this.count == this.medicalTests.length)
    {
      this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/history");
    }
  }

  back(){
    this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/info");
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
