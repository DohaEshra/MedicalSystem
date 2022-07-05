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
Area:string = "";
City:string = "";
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
   this.drServ.getAllCategories().subscribe(c=>this.categories =c)

  }
  Search()
  {
    //console.log(this.drs)
    this.mapping.set("Name", this.name);
    this.mapping.set("Area", this.Area);
    this.mapping.set("City", this.City);
    this.mapping.set("Category", this.category);
    this.dr = this.transform(this.drs, this.mapping);
    //console.log(this.dr)
    this.clicked=1
    
  }
  transform(value: any[], Diction: Map<string, string>): any[] {
  let drs;
  //console.log(Map.prototype.)
  // if(Map.arguments)
  // {
  //   console.log()
  //     return value;
  //   }
    const doctors = [];
    for(const v of  value)
    {
      if(Diction.get("Name") && Diction.get("City") && Diction.get("Area") && Diction.get("Category"))
      {

      }
      else{

        if(Diction.get("Name"))
        {
          
          this.drServ.getDoctorByName(Diction.get("Name")).subscribe(data=>drs=data)
          if(v['fname'].toLowerCase().includes(Diction.get("Name")?.toLowerCase())||v['lname'].toLowerCase().includes(Diction.get("Name")?.toLowerCase()))
          {
            doctors.push(v)
            
          }
          
        }
        if(Diction.get("Area")){
          //console.log(v.area.includes(Diction.get("Area")))
          //console.log(v.area)
        //if(drs.area==Diction.get("Area"))
        if(v.area!=null)
        {

          if(v.area.toLowerCase().includes(Diction.get("Area")?.toLowerCase()))
          {
            
            doctors.push(v)
          }
        }
        }
        
        
      
        
        
        
        if(Diction.get("City")){
          console.log(v.city.includes(Diction.get("City")))
          
          if(v.city.toLowerCase().includes(Diction.get("City")?.toLowerCase()))
          {
            //console.log("city");
            doctors.push(v)
          }
        }    
        if(Diction.get("Category")){
          
          if(v.category.toLowerCase().includes(Diction.get("Category")?.toLowerCase()))
          {
            doctors.push(v)
          }
          
        }
      }
      
    }
    //console.log(doctors)
    const unique = [...new Set(doctors.map(item => item))];
    //console.log([...new Set(doctors.map(item => item))])
    return unique;
  }

  ngOnInit(): void {
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
  //  this.drServ.getAllCategories().subscribe(c=>this.categories =c)
   console.log(this.categories);
    //console.log(this.drs)
    this.drServ.getAllDoctors().subscribe(a=>this.drs=a)
  }

}
