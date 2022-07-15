import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from '../account/Account.service';
import { Doctor } from '../_Models/doctor';
import jwt_decode from 'jwt-decode';
import { Visit } from '../_Models/visit';
import { Record } from '../_Models/record';
import { Guid } from 'guid-typescript';
import { FileInfo } from '../_Models/FileInfo';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl="https://localhost:7089/api/";
  DoctorID=0;
  constructor(public http:HttpClient , public acc:AccountService) { }

  getDoctorId(){
    if(this.acc.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.acc.getToken()!)));
      this.DoctorID = decodeToken.ID;
    }
  }
 
  //get doctor profile
  getDoctorProfile(){
    this.getDoctorId()
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
    this.getDoctorId()
    return this.http.put<undefined>(this.baseUrl+"doctor/"+this.DoctorID,doctor);
  }

  //get all doctors
  getAllDoctors()
  {
    return this.http.get<Doctor[]>(this.baseUrl+"Doctor");
  }
 //get Not Blocked doctors
  getNotBlockedDoctors()
  {
  return this.http.get<any[]>(this.baseUrl+"Doctor/NotBlocked");
  }
    
  //get All Categories
    getAllCategories()
    {
      return this.http.get<string[]>(this.baseUrl+"Doctor/getCategories");
    }

  //get doctor's patients
  getDoctorPatients()
  {
    this.getDoctorId()
    return this.http.get<Visit[]>(this.baseUrl+"visit/get/"+this.DoctorID);
  }

  //get prescription
  getPatientPrescription(pid:number,did:number,date:Date|string){
    return this.http.get<Record[]>(this.baseUrl+"Record/"+pid+"/"+did+"/"+date);
  }

   //get prescription
   getPatientPrescriptionForPharmacy(pid:number,did:number,date:Date|string){
    return this.http.get<Record>(this.baseUrl+"Record/pharmacy/"+pid+"/"+did+"/"+date);
  }

  //record prescription
  recordPatientPrescription(records:Record[]|FileInfo[],pid:number,did:number,date:Date|string){
    return this.http.put<undefined>(this.baseUrl+"Record/"+pid+"/"+did+"/"+date,records);
  }

  //delete record
  deleteRecordByFno(fno:Guid[])
  {
    return this.http.delete<undefined>(this.baseUrl+"Record",{body:fno});
  }

  //edit record
  editRecordByFno(fno:Guid,record:Record)
  {
    return this.http.put<undefined>(this.baseUrl+"Record/"+fno,record);
  }
}
