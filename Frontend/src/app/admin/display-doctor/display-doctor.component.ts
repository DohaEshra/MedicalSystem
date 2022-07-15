import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';

@Component({
  selector: 'app-display-doctor',
  templateUrl: './display-doctor.component.html',
  styleUrls: ['./display-doctor.component.css']
})
export class DisplayDoctorComponent implements OnInit {
  doctor:Doctor=new Doctor();

  constructor(public route:ActivatedRoute, public DrServ:DoctorService) { }

  ngOnInit(): void {
    let id;
    this.route.params.subscribe(
      a=>{
        id=a['id'];
       this.DrServ.getDoctorById(id).subscribe({
        next:data=>{
          this.doctor = data;
          console.log(this.doctor)
        }
      })
      }
    )
  }

}
