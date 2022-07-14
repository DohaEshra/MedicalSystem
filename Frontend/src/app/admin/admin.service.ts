import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../_Models/doctor';
import { Other } from '../_Models/other';
import { Patient } from '../_Models/patient';
import { Works_in } from '../_Models/works_in';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient, public router: Router) { }
  baseUrl = "https://localhost:7089/api/";


  //add doctor 
  addDoctor(user: Doctor) {
    return this.http.post<any>(this.baseUrl + "doctor", user);
  }

  //add other 
  addOther(user: Other) {
    return this.http.post<any>(this.baseUrl + "other", user);
  }

  //add other 
  getPatients() {
    return this.http.get<Patient[]>(this.baseUrl + "Patient/adminFilesPatients");
  }

  //get doctor schedule
  getDoctorSchedule(id:string){
    return this.http.get<any[]>(this.baseUrl+"works_in/"+id);
  }

  //add doctor schedule
  addDoctorSchedule(info:any){
    return this.http.post<any>(this.baseUrl + "works_in", info);
  }

  //delete row from doctor schedule  
  deleteRowFromSchedule(did:number,start: string ){
    return this.http.delete<any>(this.baseUrl+"works_in/"+did+'/'+start);
  }

  //edit row from doctor schedule 
  editRowFromSchedule(work:Works_in, did:number,W_ID: number ){
    return this.http.put<any>(this.baseUrl+"works_in/"+did+'/'+W_ID,work);
  }
}
