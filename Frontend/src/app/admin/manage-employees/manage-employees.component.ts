import { Router } from '@angular/router';
import { Doctor } from './../../_Models/doctor';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.css']
})
export class ManageEmployeesComponent implements OnInit {
  Others: any[] = []
  Drs: any[] = []
  All: any[] = []

  constructor(public AdmSer: AdminService, public dServ: DoctorService, public router:Router) { }

  ngOnInit(): void {

    this.AdmSer.getNotBlockedOthers().subscribe({
      next: data => {
        this.Others = [...data]
        console.log(this.Others)

      },
      error: err => {
        console.log("Error From Manage Employees component:", err)
      }
    })


    this.dServ.getNotBlockedDoctors().subscribe({
      next: data => {
        this.Drs = [...data]
        console.log(this.Drs)
      },
      error: err => {
        console.log("Error From Manage Employees component:", err)
      }
    })

    // .subscribe(a=>{this.All=a
    // this.A.concat([...this.Al])
    // })

    // this.AdmSer.addDoctor({})
  }
  BlockUser(employee: any) {
    let result = confirm("Are you sure?");
    if (result) {
      this.AdmSer.Block({ Email: employee.email }).subscribe({
        next: data => {
          if (this.Drs.indexOf(employee) != -1) {
            let index = this.Drs.indexOf(employee);
            this.Drs.splice(index, 1);
            console.log("drs", this.Drs)
          }
          else if (this.Others.indexOf(employee) != -1) {
            let index = this.Others.indexOf(employee);
            this.Others.splice(index, 1);
            console.log("oths", this.Others)

          }
          alert("Blocked Successfully")
        },
        error: err => {
          alert("an error happened while blocking, try again later")
          console.log("Blocked error", err)
        }
      })
    }
  }

  get() {
    this.All = [...this.Others, ...this.Drs]
    console.log(this.All)
    return this.All.length
    // console.log(this.All)
  }

  getDetails(emp:any){
    this.Drs.indexOf(emp) != -1 
      ? this.router.navigateByUrl("/admin/DisplayDoctor/"+ emp.id) 
      : this.router.navigateByUrl("/admin/DisplayOther/" + emp.id) 
  }

}
