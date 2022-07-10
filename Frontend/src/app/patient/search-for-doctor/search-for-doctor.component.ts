import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';

@Component({
  selector: 'app-search-for-doctor',
  templateUrl: './search-for-doctor.component.html',
  styleUrls: ['./search-for-doctor.component.css']
})
export class SearchForDoctorComponent implements OnInit {
mapping = new Map<string, string>();
name:string = "";
area:string = "";
city:string = "";
category:string = "";
cities:string[]=[]
categories:object[]=[];
//name:string=""
drs:Doctor[]=[]
dr:Doctor[]=[]
clicked:number = 0;

ops:string[]=["Name", "Address"]
op:string="";
input:string = ""
  constructor(public drServ:DoctorService) {
   //this.drServ.getAllCategories().subscribe(c=>this.categories =c)
  //  this.drServ.getAllDoctors().subscribe(a=>this.drs=a)

  }
  Search()
  {
    this.clicked=1;
    console.log(this.drs)
    console.log(this.area)

    this.drs = this.drs;

    
  }
  

  ngOnInit(): void {
    
   console.log(this.categories);
    //console.log(this.drs)
     this.drServ.getAllDoctors().subscribe(a=>this.drs=a)
  }

}
