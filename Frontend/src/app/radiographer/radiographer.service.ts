import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AccountService } from '../account/Account.service';
import { Patient } from '../_Models/patient';

@Injectable({
  providedIn: 'root'
})
export class RadiographerService {

    radiographerID=0;
  baseUrl="https://localhost:7089/api";

  constructor(public http:HttpClient , public acc:AccountService) { 
  }

  //get radiographer ID
  getRadiographerID(){
    if(this.acc.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.acc.getToken()!)));
      this.radiographerID = decodeToken.ID;
      return +this.radiographerID;
    }
    return null;
  }

  //get scan's patients
  getPatients()
  {
    return this.http.get<Patient[]>(this.baseUrl+"/patient/ScanPatients");
  }
}
