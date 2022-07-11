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
      return this.loggedIn.asObservable(); // {2}
    }



    login(email:string,password:string,role:string):Observable<any>
    {
      
      this.loggedIn.next(true);
      return this.http.post<string>(this.baseUrl+"login/",{role,email,password})
    }
    
    public saveToken(token: string): void {
      window.sessionStorage.removeItem(this.TOKEN_KEY);
      window.sessionStorage.setItem(this.TOKEN_KEY, token);
    }

    public getToken(): string | null {
      return window.sessionStorage.getItem(this.TOKEN_KEY);
    }

    public signOut(): void {
      this.doctor=new Doctor();
      this.count=0;
      this.loggedIn.next(false);
      this.router.navigate(['/login']);
      window.sessionStorage.clear();
    }

    public refresh(): void {
        window.location.reload();
    }

    //add doctor 
    addDoctor(user: Doctor){
      return this.http.post<any>("https://localhost:7089/api/doctor",user);
    }

    //add patient 
    addPatient(user: Patient){
      return this.http.post<any>("https://localhost:7089/api/patient",user);
    }

    //add other 
    addOther(user: Other){
      return this.http.post<any>("https://localhost:7089/api/other",user);
    }

    getRole(){
    if(this.getToken()!=null)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.getToken()!)));
      return decodeToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    }
    return null;
  }

  doctor:Doctor=new Doctor();

  getDoctor(){
    if(this.getToken()!=null && this.count==0)
    {
      var decodeToken = JSON.parse(JSON.stringify(jwtDecode(this.getToken()!)));
      this.http.get<Doctor>(this.baseUrl+"doctor/"+decodeToken.ID).subscribe(
        data=>{
          this.doctor=data;
        }
      );
      this.count++;
    }
    return this.doctor;
  }

  
}
