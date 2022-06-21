import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';

@Component({
  selector: 'app-get-doctor-per-category',
  templateUrl: './get-doctor-per-category.component.html',
  styleUrls: ['./get-doctor-per-category.component.css']
})
export class GetDoctorPerCategoryComponent implements OnInit {

  constructor(public docServ:DoctorService) { 
    this.getDocPerCat("Dentist");
  }
  getDocPerCat(cat:string)
  {
    this.docServ.getDoctorByCategory(cat).subscribe(a=>console.log(a))
  }

  ngOnInit(): void {
  }

}
