import { Injectable } from '@angular/core';
import { Patient } from '../_Models/patient';
import { Record } from '../_Models/record';
import { HttpClient} from '@angular/common/http';
import { AccountService } from '../account/Account.service';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

constructor(public http:HttpClient, public acc:AccountService) {
  if(this.acc.getToken()!=null)
  {
    var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.acc.getToken()!)));
    this.PatientID = decodeToken.ID;
  }
 }
baseUrl="https://localhost:7089/api/patient/";
PatientID=0;
getPatient()
{
  return this.http.get<Patient>(this.baseUrl+this.PatientID)
}
getPatientById(Id:number)
{
  return this.http.get<Patient>(this.baseUrl+Id)
}
getPatients()
{
  return this.http.get<Patient[]>(this.baseUrl)
}
EditPatient(pat:Patient, ID:number)
{
  return this.http.put(this.baseUrl,{id:ID, patient:pat})
}
AddPatient(pat:Patient)
{
  return this.http.post<Patient>(this.baseUrl,{patient:pat})
}
DeletePatient(ID:number)
{
  return this.http.delete(this.baseUrl+ID)
}
getPatientRecords(){
  return this.http.get<Record[]>("https://localhost:7089/api/Record/list/"+this.PatientID);
}

getPatientRecordsById(Id:number){
  return this.http.get<Record[]>("https://localhost:7089/api/Record/list/"+Id);
}

}
