import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';
import { Location } from '@angular/common';
@Component({
  selector: 'app-get-doctor-per-category',
  templateUrl: './get-doctor-per-category.component.html',
  styleUrls: ['./get-doctor-per-category.component.css']
})
export class GetDoctorPerCategoryComponent implements OnInit {
list:number[]=[0,1,2]
dr:any;//new Doctor(0,"","",0,"","",0,"","","");

  constructor(public docServ:DoctorService, public route:ActivatedRoute) { 

  }
  getDocPerCat(cat:string)
  {
    this.docServ.getDoctorByCategory(cat).subscribe(a=>{console.log(a)
      this.dr = a;
    }

    )
  }

  ngOnInit(): void {
    let cat;
    this.route.params.subscribe(
      a=>{
        cat=a['Category'];
        this.dr= this.docServ.getDoctorByCategory(cat).subscribe(a=>{console.log(a)
          this.dr = a;
        })
      }
    )


  }

}
