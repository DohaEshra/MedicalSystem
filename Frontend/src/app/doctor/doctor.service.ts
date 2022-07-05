import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from '../account/Account.service';
import { Doctor } from '../_Models/doctor';
import jwt_decode from 'jwt-decode';
import { Visit } from '../_Models/visit';
import { Record } from '../_Models/record';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl="https://localhost:7089/api/";
  DoctorID=0;
  constructor(public http:HttpClient , public acc:AccountService) { 
    if(this.acc.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.acc.getToken()!)));
      this.DoctorID = decodeToken.ID;
    }
  }
 
  //get doctor profile
  getDoctorProfile(){
    return this.http.get<Doctor>(this.baseUrl+"doctor/"+this.DoctorID);
  }

  //get doctor by ID
  getDoctorById(Id:number){
    return this.http.get<Doctor>(this.baseUrl+"doctor/"+Id);
  }
  //getDoctor/{name}
  getDoctorByName(name:string|undefined){
    return this.http.get<any[]>(this.baseUrl+"doctor/getDoctor/"+name);
  }
  //get doctors by category
  getDoctorByCategory(Category:string)
  {
    return this.http.get<any[]>(this.baseUrl+"Doctor/get/"+Category);
  }

  //edit doctor profile 
  editDoctor(doctor:Doctor)
  {
    return this.http.put<undefined>(this.baseUrl+"doctor/"+this.DoctorID,doctor);
  }

  //get all doctors
  getAllDoctors()
  {
    return this.http.get<Doctor[]>(this.baseUrl+"Doctor");
  }
    
  //get All Categories
    getAllCategories()
    {
      return this.http.get<object[]>(this.baseUrl+"Doctor/getCategories");
    }

  //get doctor's patients
  getDoctorPatients()
  {
    return this.http.get<Visit[]>(this.baseUrl+"visit/get/"+this.DoctorID);
  }

  //record prescription
  recordPatientPrescription(record:Record){
    return this.http.post<Record>(this.baseUrl+"record",record);
  }
}
