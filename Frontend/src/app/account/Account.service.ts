import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Doctor } from '../_Models/doctor';
import { Other } from '../_Models/other';
import { Patient } from '../_Models/patient';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  TOKEN_KEY='auth-token';
  USER_KEY='user-token';

constructor(public http:HttpClient , public router : Router ) {}
    baseUrl="https://localhost:7089/api/";
    count:number=0;
    
    private loggedIn = new BehaviorSubject<boolean>(false); 
    get isLoggedIn() {
      return this.loggedIn.asObservable(); 
    }

    login(email:string,password:string,role:string):Observable<any>
    {
      this.loggedIn.next(true);
      return this.http.post<string>(this.baseUrl + "login/",{role,email,password})
    }
    
    public saveToken(token: string): void {
      window.sessionStorage.removeItem(this.TOKEN_KEY);
      window.sessionStorage.setItem(this.TOKEN_KEY, token);
    }

    public getToken(): string | null {
      return window.sessionStorage.getItem(this.TOKEN_KEY);
    }

    public signOut(): void {
      this.count=0;
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
      window.sessionStorage.clear();
    }

    public refresh(): void {
        window.location.reload();
    }

  //add patient 
  addPatient(user: Patient) {
    return this.http.post<any>(this.baseUrl + "patient", user);
  }

    getRole(){
    if(this.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.getToken()!)));
      return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    }
    return null;
  }

  
  getUser(userRole:string){
    
    if(this.getToken()!=null && this.count==0)
    {
      if(userRole == 'doctor'){
        var doctor:Doctor=new Doctor();
        var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.getToken()!)));
        this.http.get<Doctor>(this.baseUrl + userRole +"/"+decodeToken.ID).subscribe(
          data=>{
            doctor=data;
          }
        );
        this.count++;
        return doctor;
      } else if (userRole == 'pharmacist' || userRole == 'radiographer' || userRole == 'laboratory technician'){
        var other: Other = new Other();
        var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.getToken()!)));
        this.http.get<Other>(this.baseUrl + userRole + "/" + decodeToken.ID).subscribe(
          data => {
            other = data;
          }
        );
        this.count++;
        return other;
      } else if (userRole == 'admin'){
        return {
          fname: 'admin',
          lname: '',
          profilePic:'./../../assets/admin.png'
        };
      } else if (userRole == 'patient'){
        var patient: Patient = new Patient();
        var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.getToken()!)));
        this.http.get<Patient>(this.baseUrl + userRole + "/" + decodeToken.ID).subscribe(
          data => {
            patient = data;
          }
        );
        this.count++;
        return patient;
      }else{
        return null;
      }
    }
    return null
  }

  
}
