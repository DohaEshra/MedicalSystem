import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';

@Component({
  selector: 'app-get-doctor-per-category',
  templateUrl: './get-doctor-per-category.component.html',
  styleUrls: ['./get-doctor-per-category.component.css']
})
export class GetDoctorPerCategoryComponent implements OnInit {

list:number[]=[0,1,2]
dr:Doctor[]=[];//new Doctor(0,"","",0,"","",0,"","","");

  constructor(public docServ:DoctorService) { 
   this.getDocPerCat("Dentist");
  }
  getDocPerCat(cat:string)
  {
    this.docServ.getDoctorByCategory(cat).subscribe(a=>{console.log(a)
    this.dr = a;
    })
  }

  ngOnInit(): void {
  }

}
