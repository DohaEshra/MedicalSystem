import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { Subscription } from 'rxjs';
import { Record } from 'src/app/_Models/record';
import { DoctorService } from '../doctor.service';
import { FileInfo } from '../../_Models/FileInfo';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.css']
})
export class EditPrescriptionComponent implements OnInit {

  recordList:Record[]=[];
  indicator=false;
  medicine:string[] = [];
  info:string[]=[];
  medicines:string[][] = [];

  sub:Subscription|null=null;
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;

  constructor(private activateRoute:ActivatedRoute,private docSer:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.sub1=this.activateRoute.params.subscribe(
      a=>{
        this.sub2=this.docSer.getPatientPrescription(a['id'],this.docSer.DoctorID,a['date']).subscribe(
          data=>{
            this.recordList = data;
            var dummy= data[0].prescription.split(',');
            console.log(data);
            dummy.forEach(element => {
              this.medicines.push([element.split(': ')[0],element.split(': ')[1]]);
              // this.medicine.push( element.split(': ')[0])
              // this.info.push( element.split(': ')[1])
            });
            console.log(this.medicines,this.info);
            this.indicator=true;
          }
        )
      }
    ) 
  }
  
  deleteMedicine(index:number){
    this.medicines.splice(index,1)
    console.log('deeeel',this.medicines);
  }

  deleteTest(fno:Guid)
  {
    if(this.recordList.length==1 && this.recordList[0].testType!="")
    {
      this.recordList[0].file_description="";
      this.recordList[0].testType="";
      this.docSer.editRecordByFno(fno,this.recordList[0]).subscribe(
        a=>{
        }
      );
    }
    else if(this.recordList.length>1 && this.recordList[0].testType!="")
    {
      this.docSer.deleteRecordByFno(fno).subscribe(
        a=>{
          this.recordList=this.recordList.filter(obj=>{return obj.fno!=fno;})  
        }
      )
    }
  }

  //edit
  count=0;
  edit(){
    var date = (<HTMLInputElement>document.getElementById('date')).value;
    var summary = (<HTMLInputElement>document.getElementById('summary')).value;
    //var prescription = (<HTMLInputElement>document.getElementById('prescription')).value;
    if(this.medicines.length>0){
      var arr:any=[];
      this.medicines.forEach(element => {
        arr.push(element[0]+': '+element[1]);
      });
      var prescription = arr.join(',')
      console.log(prescription)
      this.recordList.forEach (element=>{
        element.prescription=prescription;
      });
    }

    if(this.recordList.length==1 && this.validation(date,summary,prescription))
    {
      this.docSer.editRecordByFno(this.recordList[0].fno,this.recordList[0]).subscribe(
        a=>{}
      );
      this.router.navigateByUrl("doctor/patient/"+this.recordList[0].pid+"/history");
    }
    else
    {
      for(let i=0;i<this.recordList.length;i++)
      {
        this.docSer.editRecordByFno(this.recordList[i].fno,this.recordList[i]).subscribe(
          a=>{}
        );
        this.count++;
      }
      if(this.count == this.recordList.length && this.validation(date,summary,prescription))
      {
        this.router.navigateByUrl("doctor/patient/"+this.recordList[0]?.pid+"/history");
      }
    }
  }

  //back
  back(){
    this.router.navigateByUrl("doctor/patient/"+this.recordList[0].pid+"/history");
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

  newFile:FileInfo= new FileInfo();
  //add inputs
  add(desc:string,type:string){
    if(desc && type)
    {
      this.newFile = new FileInfo(this.recordList[0].did,this.recordList[0].pid,null,desc,null,this.recordList[0].date,this.recordList[0].summary,this.recordList[0].prescription,null,type);
      this.docSer.recordPatientPrescription(this.newFile,this.recordList[0].pid,this.recordList[0].did,this.recordList[0].date).subscribe(
        a=>{
          this.docSer.getPatientPrescription(this.recordList[0].pid,this.docSer.DoctorID,this.recordList[0].date).subscribe(
            data=>{
              this.recordList = data;
              this.indicator=true;
              this.newFile=new FileInfo();
            }
          )
        }
      )
    }
  }
  add2(medicine:any,info:any){
    if(medicine.value!=''&& info.value!='')
    {
      this.medicines.push([medicine.value,info.value]);
      medicine.value=info.value='';
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
