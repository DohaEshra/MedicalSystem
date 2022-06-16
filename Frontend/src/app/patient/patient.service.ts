import { Injectable } from '@angular/core';
import { Patient } from '../_Models/patient';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  baseurl="https://localhost:7089/api/patient/"
getPatient(Id:number)
{
  return this.http.get<Patient>(this.baseurl+Id)
}
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

  constructor(public http:HttpClient) { }
}
