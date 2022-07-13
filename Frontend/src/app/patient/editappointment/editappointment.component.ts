import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Visit } from 'src/app/_Models/visit';
import { Works_in } from 'src/app/_Models/works_in';
import { PatientService } from '../Patient.service';

@Component({
  selector: 'app-editappointment',
  templateUrl: './editappointment.component.html',
  styleUrls: ['./editappointment.component.css']
})
export class EditappointmentComponent implements OnInit {

  visit:Visit=new Visit();
  doctorId:number=0;
  patientId:number=0;
  appointmentTime:Date=new Date()
  appointments:Works_in[]=[];
  sub:Subscription|null=null;
  sub2:Subscription|null=null;
  constructor(private patientser:PatientService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.sub=this.activateRoute.params.subscribe(
      a=>{
            // this.appointments=data;
            // this.doctorId=a['did'];
            console.log(a)
            this.patientId = a["id"]
            this.doctorId = a["did"]
            this.appointmentTime = a["appointment_time"]
            console.log(this.patientId)
            console.log(this.doctorId)
            console.log(this.appointmentTime)
          }
        
      
    )  
  }

  Update(){
  
    // var selectedAppointment = (<HTMLInputElement>document.getElementById('Select')).value;
    // if(selectedAppointment!=null || selectedAppointment!="Select ...")
    // {
      // this.visit.did = this.doctorId;
    //   console.log(this.doctorId)
    //   this.patientser.getPatientId();
     this.visit.pid = this.patientId;
     this.visit.did = this.doctorId;

    //   console.log(this.visit.pid)
    //   // this.visit.appointment_time = new Date(selectedAppointment.split('To')[0].trim());
      this.patientser.editAppointment(this.patientId,this.doctorId,this.appointmentTime,this.visit).subscribe(
        data=>{
          if(data!=null)
          {
            console.log(data)
            this.router.navigateByUrl("patient/appointments");
          }
        }
      )

    }
  }

//}
