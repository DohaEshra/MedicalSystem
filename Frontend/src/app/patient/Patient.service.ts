import { Injectable } from '@angular/core';
import { Patient } from '../_Models/patient';
import { Record } from '../_Models/record';
import { HttpClient} from '@angular/common/http';
import { AccountService } from '../account/Account.service';
import jwt_decode from 'jwt-decode';
import { Visit } from '../_Models/visit';
import { Works_in } from '../_Models/works_in';
import { DoctorRating } from '../_Models/doctor-rating';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

baseUrl="https://localhost:7089/api/patient/";
PatientID=0;

constructor(public http:HttpClient, public acc:AccountService) {
    this.getPatientId();
}

 getPatientId(){
  if(this.acc.getToken()!=null)
  {
    var decodeToken = JSON.parse(JSON.stringify(jwt_decode(this.acc.getToken()!)));
    this.PatientID = decodeToken.ID;
    return this.PatientID;
  }
  return null;
}

getPatient()
{
  this.getPatientId();
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
  this.getPatientId();
  return this.http.get<Record[]>("https://localhost:7089/api/Record/list/"+this.PatientID);
}
getRecords()
{
  return this.http.get<Record[]>("https://localhost:7089/api/Record")
}

getPatientRecordsById(Id:number){
  return this.http.get<Record[]>("https://localhost:7089/api/Record/list/"+Id);
}

addAppointment(visit:Visit){
  return this.http.post<Visit>("https://localhost:7089/api/Visit",visit);
}

GetAppointments(did:number){
  return this.http.get<Works_in[]>("https://localhost:7089/api/works_in/"+did);
}

addDoctorRating(drRating:any){
  return this.http.post<any>("https://localhost:7089/api/doctorRating",drRating);
}

}
