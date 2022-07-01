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
//@Input() d: string="";
//sub:Subscription | null = null ;
list:number[]=[0,1,2]
dr:any;//new Doctor(0,"","",0,"","",0,"","","");

  constructor(public docServ:DoctorService, public route:ActivatedRoute) { 
   //this.getDocPerCat(this.d);
  //  this.route.getCurrentNavigation().extras.state
  }
  getDocPerCat(cat:string)
  {
    this.docServ.getDoctorByCategory(cat).subscribe(a=>{console.log(a)
      this.dr = a;
    }
    //, err=>console.log(err)
    )
  }
//this._Activatedroute.snapshot.paramMap.get("id")
  ngOnInit(): void {
    let cat;
    this.route.params.subscribe(
      a=>{
        cat=a['Category'];
        this.dr= this.docServ.getDoctorByCategory(cat).subscribe(a=>{console.log(a)
          this.dr = a;
        })//= this.getDocPerCat(cat);//=this.docServ.getDoctorByCategory(cat);
      }
    )
    //console.log(this.route.snapshot.params['category'])

  }

}
