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

  submit(){
    console.log(this.record)

    this.docSer.recordPatientPrescription(this.record).subscribe(
      a=>{
        console.log(a)
        if(a!=null)
        {
          this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/history");
        }

      },
      err=>{
        console.log(err);
      }
    )
  }

  back(){
    this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/info");
  }


  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
