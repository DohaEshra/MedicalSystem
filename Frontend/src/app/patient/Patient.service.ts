import { Injectable } from '@angular/core';
import { Patient } from '../_Models/patient';
import { HttpClient} from '@angular/common/http';
import { AccountService } from '../account/Account.service';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

constructor(public http:HttpClient, public acc:AccountService) { }
baseurl="https://localhost:7089/api/patient/";
PatientID=0;
getPatient(Id:number)
{
  if(this.acc.getToken()!=null)
  {
    var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.acc.getToken()!)));
    this.PatientID = decodeToken.ID;
  }
  return this.http.get<Patient>(this.baseurl+this.PatientID)}
getPatients()
{
  return this.http.get<Patient[]>(this.baseurl)
}
EditPatient(pat:Patient, ID:number)
{
  return this.http.put(this.baseurl,{id:ID, patient:pat})
}
AddPatient(pat:Patient)
{
  return this.http.post<Patient>(this.baseurl,{patient:pat})
}
DeletePatient(ID:number)
{
  return this.http.delete(this.baseurl+ID)
}
}
