import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DoctorService } from 'src/app/doctor/doctor.service';
import { Doctor } from 'src/app/_Models/doctor';
import {Works_in } from 'src/app/_Models/works_in'
import { AdminService } from '../admin.service';
import { ConfirmationService, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-doctor-schedule',
  templateUrl: './doctor-schedule.component.html',
  styleUrls: ['./doctor-schedule.component.css']
})
export class DoctorScheduleComponent implements OnInit , OnDestroy {
  did :string =''
  days:string[]=[];
  hours:string[]=[];
  shift:string[]=[];

  ShowTable=false;
  subscribe:Subscription|null=null;
  subscribe2:Subscription|null=null;
  showResult = false;
  showError = false;
  showError2 = false;
  errorMessage = '';
  errorMessage2 = '';
  IsNumberPattern = "^[0-9]+$";
  showAddToSchedule = false ;
  constructor(public adminService:AdminService ,private doctorService:DoctorService) { }
  doctor:Doctor = new Doctor();
  workIn:Works_in[] = [] ;
  info:any = {day:"" , start:"" ,sShift :"" , end:"" , eShift :"" ,maxNo:"",wId:0};
  errorMessageDuringAdd = false ;
  errMsg = '';
  startIn ="";
  endAt="";
  work :Works_in= new Works_in();
  showLoading= false;

  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }

  ngOnInit(): void {
    this.days=['Saturday','Monday','Tuesday','Wednesday','Thursday','Friday'];
    this.shift=['PM','AM'];
    this.hours= ["1:00","2:00","3:00","4:00","5:00","6:00","7:00","8:00","9:00","10:00","11:00","12:00"];
  }

  AddToSchedule(){
    this.showAddToSchedule = true ;
  }

  AddToDB(){
    if(this.info.day =="" ||this.info.start =="" ||this.info.sShift =="" ||this.info.end =="" ||this.info.eShift =="" ||this.info.maxNo ==""){
        this.errorMessageDuringAdd = true ;
        this.errMsg = 'All fields are required !!';
    }
    else if(!this.info.maxNo.match(this.IsNumberPattern)){
        this.errorMessageDuringAdd = true ;
        this.errMsg = 'Maximum number must be a number !!'; 
    }
    else {
      this.errorMessageDuringAdd = false ;
      this.startIn= this.info.day+' '+this.info.start+' '+this.info.sShift;
      this.endAt  = this.info.day+' '+this.info.end+' '+this.info.eShift;
      this.work.did = this.doctor.id ;
      this.work.start_time = this.startIn;
      this.work.end_time = this.endAt ;
      this.work.maxpatientNo = this.info.maxNo ;
      this.work.W_ID=0;
      //var w= {did:this.workIn[0].did,start_time:this.startIn,end_time:this.endAt,maxpatientNo :this.info.maxNo }
      this.subscribe = this.adminService.addDoctorSchedule(this.work).subscribe({next:data=>{
        console.log(data);
        this.workIn.push(this.work);
        console.log(this.workIn);
        this.showResult = true;
        this.ShowTable = true;
        this.showAddToSchedule= false ;
        this.info= {day:"" , start:"" ,sShift :"" , end:"" , eShift :"" ,maxNo:""};

      },error:err=>{
        console.log(err);
        this.errMsg = 'Something went wrong ';
        this.errorMessageDuringAdd = true ;
      }})   
    }
  }
  ShowDoctorSchedule(){
    if(this.did=='') return

    this.workIn = [];
    this.showResult= false;
    this.showLoading = true;

    this.subscribe = this.doctorService.getDoctorById( +this.did ).subscribe({
      next:data=>{
        this.doctor = data;
        console.log(data);
        if(data.works_ins.length==0)  // there is no schedules for this doctor 
        {
          this.showResult= true;
          this.ShowTable=false ;
          return;
        }
        this.showResult= true;
        this.ShowTable=true ;
        this.workIn= data.works_ins ;

      },error:err=>{
        console.log(err);
          this.showError = true;
          this.ShowTable= false ;
          this.errorMessage = 'Invalid id !' ;
          this.showResult= this.showLoading = false ;
      }})

    // this.subscribe = this.adminService.getDoctorSchedule(this.did).subscribe({next:data=>{
    //       if(data==null)
    //       {
    //         this.showError = true;
    //         this.ShowTable= true ;
    //         this.errorMessage = 'Invalid data !' ;
    //         this.showResult= this.showLoading = false ;
    //         return
    //       }else if(data.length==0) // empty array
    //       {
    //         this.showResult= true;
    //         this.ShowTable=false ;
    //         this.subscribe2= this.doctorService.getDoctorById(+this.did).subscribe({next:data=>{
    //           console.log(data);
    //         this.doctor = data ;
    //         },error:err=>{
    //           console.log(err);
    //         }})
    //       }else{
    //         console.log(data,"eeeee")
    //         this.workIn = data ;
    //         this.doctor = data[0].didNavigation ;
    //         this.showResult= true ;
    //       }
    // },error:err=>{
    //   console.log("error from adding doctor schedule component",err);
    // }})
   }

   Back(){
    this.showResult= true;
    this.showAddToSchedule= false ;
   }

   deleteRow(index:number , sTime :string, did:number){
      //console.log(index,sTime,did);
      var res = confirm("Are you sure that you want to delete this record ?");
      if(res){
        this.subscribe = this.adminService.deleteRowFromSchedule(did,sTime).subscribe({next:data=>{
          console.log(data);
          this.workIn.splice(index,1);
          alert('Deleted successfuly');
        },error:err=>{
          console.log(err);
        }})
      }
    } 
}
