import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Visit } from 'src/app/_Models/visit';
import { Works_in } from 'src/app/_Models/works_in';
import { PatientService } from '../Patient.service';

@Component({
  selector: 'app-patient-appointment',
  templateUrl: './patient-appointment.component.html',
  styleUrls: ['./patient-appointment.component.css']
})
export class PatientAppointmentComponent implements OnInit,OnDestroy {

  visit:Visit=new Visit();
  doctorId:number=0;
  appointments:Works_in[]=[];
  sub:Subscription|null=null;

  constructor(private patientser:PatientService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.sub=this.activateRoute.params.subscribe(
      a=>{
        this.patientser.GetAppointments(a['did']).subscribe(
          data=>{
            this.appointments=data;
            this.doctorId=a['did'];
          }
        )
      }
    ) 

  }

  Book(){
    var selectedAppointment = (<HTMLInputElement>document.getElementById('Select')).value;
    if(selectedAppointment!=null || selectedAppointment!="Select ...")
    {
      this.visit.did = this.doctorId;
      this.patientser.getPatientId();
      this.visit.pid = this.patientser.PatientID;
      this.visit.appointment_time = new Date(selectedAppointment.split('To')[0].trim());
      this.patientser.addAppointment(this.visit).subscribe(
        data=>{
          if(data!=null)
          {
            this.router.navigateByUrl("patient/appointments");
          }
        }
      )

    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
