import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {
All:any[]=[]

  constructor(public AdmSer:AdminService) { }

  ngOnInit(): void {
   this.All= this.AdmSer.getAllEmployees();
    // this.AdmSer.addDoctor({})
    console.log(this.All)
  }

}
