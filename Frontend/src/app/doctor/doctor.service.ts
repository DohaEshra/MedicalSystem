import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from '../account/Account.service';
import { Doctor } from '../_Models/doctor';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  baseUrl="https://localhost:7089/api/";
  DoctorID=0;
  constructor(public http:HttpClient , public acc:AccountService) { }
 
  //get doctor profile
  getDoctorProfile(){
    
    const decodeToken = jwt_decode(this.acc.getToken()!);
    
    console.log();
    //return this.http.get<Doctor>(this.baseUrl+"doctor"+"/"+DoctorID);
  }

}
