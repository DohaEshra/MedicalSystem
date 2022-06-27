import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';

@Component({
  selector: 'app-search-for-doctor',
  templateUrl: './search-for-doctor.component.html',
  styleUrls: ['./search-for-doctor.component.css']
})
export class SearchForDoctorComponent implements OnInit {
drs:Doctor[]=[]
ops:string[]=["Name", "Address"]
op:string="";
input:string = ""
  constructor(public drServ:DoctorService) { }

  ngOnInit(): void {
    this.drServ.getAllDoctors().subscribe(a=>this.drs=a)
  }
//@angular/cdk
}
