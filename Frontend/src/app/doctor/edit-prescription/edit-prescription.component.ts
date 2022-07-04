import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Record } from 'src/app/_Models/record';
import { DoctorService } from '../doctor.service';
import { FileInfo } from '../_Models/FileInfo';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.css']
})
export class EditPrescriptionComponent implements OnInit {

  recordList:FileInfo[]=[];
  record:Record=new Record();
 
  sub:Subscription|null=null;
  sub1:Subscription|null=null;
  sub2:Subscription|null=null;

  constructor(private activateRoute:ActivatedRoute,private docSer:DoctorService,private router:Router) { }

  ngOnInit(): void {
    this.record.did=this.docSer.DoctorID;
    this.record.didNavigation=null;

    this.sub1=this.activateRoute.params.subscribe(
      a=>{
        this.record.pid=a['id'];
        this.sub2=this.docSer.getPatientPrescription(a['id'],this.docSer.DoctorID,a['date']).subscribe(
          data=>{
            this.recordList = data;
            if(this.recordList.length!=0)
            {
              this.record.date=this.recordList[0].date;
              this.record.summary=this.recordList[0].summary;
              this.record.prescription=this.recordList[0].prescription;
              for(let i=0;i<this.recordList.length;i++)
              {
                this.record.file_description=this.recordList[i].file_description;
                this.record.testType=this.recordList[i].testType;
              }
            }
          }
        )
      }
    ) 
  }
  

  //edit
  count=0;
  // edit(){
  //   var date = (<HTMLInputElement>document.getElementById('date')).value;
  //   var summary = (<HTMLInputElement>document.getElementById('summary')).value;
  //   var prescription = (<HTMLInputElement>document.getElementById('prescription')).value;

  //   if(this.Files.length==0 && this.validation(date,summary,prescription))
  //   {
  //     this.record.file_description=this.Files[0]?.file_description;
  //     this.record.testType=this.Files[0]?.testType;
  //     this.docSer.recordPatientPrescription(this.record,this.record.pid,this.record.did,this.record.date,this.Files[0]?.fno).subscribe(
  //       a=>{},
  //       err=>{}
  //     );
  //   }
  //   else
  //   {
  //     for(let i=0;i<this.Files.length;i++)
  //     {
  //       this.record.file_description=this.Files[i]?.file_description;
  //       this.record.testType=this.Files[i]?.testType;
  //       this.docSer.recordPatientPrescription(this.record,this.record.pid,this.record.did,this.record.date,this.Files[i]?.fno).subscribe(
  //         a=>{},
  //         err=>{}
  //       );
  //       this.count++;
  //     }
  //   }
   
  //   if(this.count == this.Files.length && this.validation(date,summary,prescription))
  //   {
  //     this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/info");
  //   }
  // }

  //back
  back(){
    this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/history");
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
