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
address:string = "";
category:string = "";
//name:string=""
drs:Doctor[]=[]
dr:Doctor[]=[]
clicked:number = 0;

ops:string[]=["Name", "Address"]
op:string="";
input:string = ""
  constructor(public drServ:DoctorService) {}
  Search()
  {
    this.mapping.set("Name", this.name);
    this.mapping.set("Address", this.address);
    this.mapping.set("Category", this.category);
    this.dr = this.transform(this.drs, this.mapping);
    this.clicked=1
    
  }
  transform(value: any[], Diction: Map<string, string>): any[] {
  //let drs;
  // if(value.length===0 || filteredName === '')
  // {
    //   return value;
    // }
    const doctors = [];
    for(const v of  value)
    {
      if(Diction.get("Name"))
      {
          
          //this.drServ.getDoctorByName(Diction.get("Name")).subscribe(data=>drs=data)
          if(v['fname'].includes(Diction.get("Name"))||v['lname'].includes(Diction.get("Name")))
          {
            doctors.push(v)
            
          }
        
      }
      if(Diction.get("Address")){
        
        if(v.address.includes(Diction.get("Address")))
        {
          doctors.push(v)
        }
      }      
      if(Diction.get("Category")){
        
        if(v.category.includes(Diction.get("Category")))
        {
        
          doctors.push(v)
        }

        }
      
    }
    //console.log(doctors)
    const unique = [...new Set(doctors.map(item => item.email))];
    return unique;
  }

  ngOnInit(): void {
    //console.log(this.drs)
    this.drServ.getAllDoctors().subscribe(a=>this.drs=a)
  }

}
