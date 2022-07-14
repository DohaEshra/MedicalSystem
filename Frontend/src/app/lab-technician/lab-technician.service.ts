import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { AccountService } from '../account/Account.service';
import { Patient } from '../_Models/patient';
import { Record } from '../_Models/record';

@Injectable({
  providedIn: 'root'
})
export class LabTechnicianService {

  technicianID=0;
  baseUrl="https://localhost:7089/api";

  constructor(public http:HttpClient , public acc:AccountService) { 
  }                  

  //get technician ID
  getLabTechnicianId(){
    if(this.acc.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.acc.getToken()!)));
      this.technicianID = decodeToken.ID;
      return +this.technicianID;
    }
    return null;
  }

  //get lab's patients
  getPatients()
  {
    return this.http.get<Patient[]>(this.baseUrl+"/patient/LabPatients");
  }

  uploadFile(record: any, labTechnicianId:any, fileToUpload:any){
    return this.http.post<any>(this.baseUrl + '/Record/AddFile/' + record.pid + '/' + record.did + '/' + record.date + '/' + record.file_description + '/' + record.fno + '/' + labTechnicianId, fileToUpload);
  }

  // //Add Files
  // AddPatientFile(pid:number,did:number,date:Date, record:any){
  //   return this.http.put<any>(this.baseUrl+"/Record/AddFile/"+pid+"/"+did+"/"+date,record);
  // 
  
}
