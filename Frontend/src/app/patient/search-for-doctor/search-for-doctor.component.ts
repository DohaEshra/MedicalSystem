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
city2:string = "";
category:string = "";
cities:string[]=[]
categories:string[]=[];
n:string = "";
a:string = "";
c:string = "";
cat:string = "";
drs:Doctor[]=[]
dr:Doctor[]=[]
clicked:number = 0;

ops:string[]=["Name", "Address"]
op:string="";
input:string = ""
  constructor(public drServ:DoctorService) {

  }
  Search()
  {
    this.clicked=1;
    this.n=this.name;
    this.a = this.area;
    this.cat = this.category;
    this.c = this.city2;

    console.log(this.drs)
    console.log(this.area)

    this.drs = this.drs;
  }
  

  ngOnInit(): void {
    
   console.log(this.categories);

     this.drServ.getAllDoctors().subscribe(a=>this.drs=a)
     this.drServ.getAllCategories().subscribe(a=>this.categories=a)
     this.cities = [
      'Alexandria',
       'Cairo',
      'Mansoura',
      'Fayoum',
      'Monefya',
      'Gizeh', 
      'Port Said', 
      'Suez', 
      'Luxor', 
      'Tanta', 
      'Asyut',
      'Ismailia',
      'Aswan', 
      'Damietta', 
      'Al-mnia', 
      'Qena', 
      'Sohag', 
      'Arish', 
      'Marsa Matrouh', 
      'Kafr el-Sheikh',
      'Hurghada', 
      'Beni suef', 
      '6th of October',
  ];
  }

}
