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
            dummy.forEach(element => {
              this.medicines.push([element.split(': ')[0],element.split(': ')[1]]);
            });
            this.indicator=true;
          }
        )
      }
    ) 
  }
  
  deleteMedicine(index:number){
    this.medicines.splice(index,1);
  }

  deletedFiles:Guid[]= []; //deleted files by fno
  deleteTest(fno:Guid)
  {

    if(this.recordList.length==1 && this.recordList[0].testType!="")
    {
      this.recordList[0].file_description="";
      this.recordList[0].testType="";
    }
    else if(this.recordList.length>1 && this.recordList[0].testType!="")
    {
      this.deletedFiles.push(fno);
      this.recordList=this.recordList.filter(obj=>{return obj.fno!=fno;})  
    }
  }

  //edit
  count=0;
  edit(){
    var date = (<HTMLInputElement>document.getElementById('date')).value;
    var summary = (<HTMLInputElement>document.getElementById('summary')).value;
    if(this.medicines.length>0){
      var arr:any=[];
      this.medicines.forEach(element => {
        arr.push(element[0]+': '+element[1]);
      });
      var prescription = arr.join(',')
      this.recordList.forEach (element=>{
        element.prescription=prescription;
      });
    }
    
    if(this.validation(date,summary,prescription))
    {
      //Delete files that user specify them
      if(this.deletedFiles.length>0) 
      {
        this.docSer.deleteRecordByFno(this.deletedFiles).subscribe(
          a=>{}
        )
      }

      //Add new files and update the rest
      if(this.recordList.length>=1)
      {
        this.docSer.recordPatientPrescription(this.recordList,this.recordList[0].pid,this.recordList[0].did,this.recordList[0].date).subscribe(
          a=>{
            this.router.navigateByUrl("doctor/patient/"+this.recordList[0]?.pid+"/history");
          },
          error=>{
            console.log(error);
            this.router.navigateByUrl("doctor/patient/"+this.recordList[0]?.pid+"/history");
          }
        )
      }
    }
  }

  //back
  back(){
    this.router.navigateByUrl("doctor");
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

  newFile:Record=new Record();
  //add inputs
  add(desc:string,type:string){
    if(desc && type)
    {
      this.newFile = {fno:null,file_description:desc,testType:type,
      attached_files:'',did:this.recordList[0].did,pid:this.recordList[0].pid,
      oid:null,date:this.recordList[0].date,summary:this.recordList[0].summary,
      prescription:this.recordList[0].prescription,pidNavigation:null,didNavigation:null,oidNavigation:null};
      
      this.recordList.push(this.newFile); 
      this.newFile=new Record();
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
