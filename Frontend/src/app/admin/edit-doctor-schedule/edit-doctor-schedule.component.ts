import { Component, OnDestroy, OnInit } from '@angular/core';
import { Works_in } from 'src/app/_Models/works_in';
import { AdminService } from '../admin.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-doctor-schedule',
  templateUrl: './edit-doctor-schedule.component.html',
  styleUrls: ['./edit-doctor-schedule.component.css']
})
export class EditDoctorScheduleComponent implements OnInit ,OnDestroy {
  info:any = {day:"" , start:"" ,sShift :"" , end:"" , eShift :"" ,maxNo:"", W_ID:0};
  errorMessageDuringAdd = false ;
  errMsg = '';
  subscribe:Subscription|null=null;
  startIn ="";
  endAt="";
  work :Works_in= new Works_in();
  did :string =''
  days:string[]=[];
  hours:string[]=[];
  shift:string[]=[];
  data:any ;
  IsNumberPattern = "^[0-9]+$";
  in='';

  constructor(public adminService:AdminService, private location :Location,private router:Router) { }

  ngOnInit(): void {
    this.data= this.location.getState();
    this.startIn =this.data.start_time;
    this.endAt=this.data.end_time;
    this.info.maxNo= this.data.maxpatientNo;
    this.info.day= this.endAt.split(' ')[0];
    this.info.start= this.startIn.split(' ')[1];
    this.info.sShift= this.startIn.split(' ')[2];
    this.info.end= this.endAt.split(' ')[1];
    this.info.eShift= this.endAt.split(' ')[2];
    this.info.maxNo= this.data.maxpatientNo;
    this.info.W_ID = this.data.w_ID ;

    this.days=['Saturday','Monday','Tuesday','Wednesday','Thursday','Friday'];
    this.shift=['PM','AM'];
    this.hours= ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00"];
    // console.log(history.state)
     console.log(this.info,this.data)
  }

  Edit(){
    if(this.info.day =="" ||this.info.start =="" ||this.info.sShift =="" ||this.info.end =="" ||this.info.eShift =="" ||this.info.maxNo ==""){
        this.errorMessageDuringAdd = true ;
        this.errMsg = 'All fields are required !!';
    }
  // else if(!this.info.maxNo.match(this.IsNumberPattern)){
  //     this.errorMessageDuringAdd = true ;
  //     this.errMsg = 'Maximum number must be a number !!'; 
  // }
  else {
      this.startIn= this.info.day+' '+this.info.start+' '+this.info.sShift;
      this.in= this.info.day+'_'+this.info.start+'_'+this.info.sShift;

      this.endAt  = this.info.day+' '+this.info.end+' '+this.info.eShift;
      console.log(this.startIn, this.endAt);
      this.work.did = this.data.did ;
      this.work.start_time = this.startIn;
      this.work.end_time = this.endAt ;
      this.work.maxpatientNo = this.info.maxNo ;
      this.work.W_ID= this.data.w_ID;

    this.subscribe = this.adminService.editRowFromSchedule(this.work,this.data.did,this.data.w_ID).subscribe({next:data=>{
      console.log(data);
      this.info= {day:"" , start:"" ,sShift :"" , end:"" , eShift :"" ,maxNo:"",W_ID:0};
      alert('Edited successfuly')
      this.router.navigateByUrl('/admin/Doctorschedule');
    },error:err=>{
      console.log(err);
      this.errMsg = 'Something went wrong ';
    }})   
  }
}
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
}


