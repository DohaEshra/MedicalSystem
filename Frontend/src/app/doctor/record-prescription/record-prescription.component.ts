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
    this.docSer.recordPatientPrescription(this.record).subscribe(
      a=>{
        
      },
      err=>{
        console.log(err);
      }
    )
    this.router.navigateByUrl("doctor/patient/"+this.record.pid+"/history");
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
