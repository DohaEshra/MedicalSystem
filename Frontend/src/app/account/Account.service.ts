import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  TOKEN_KEY='auth-token';
  USER_KEY='user-token';

constructor(public http:HttpClient ) { }
    baseUrl="https://localhost:7089/api/";

    login(email:string,password:string,role:string):Observable<any>
    {
      return this.http.post<any>(this.baseUrl+"login/",{role,email,password})
    }
    
    public saveToken(token: string): void {
      window.sessionStorage.removeItem(this.TOKEN_KEY);
      window.sessionStorage.setItem(this.TOKEN_KEY, token);
    }

    public getToken(): string | null {
      return window.sessionStorage.getItem(this.TOKEN_KEY);
    }
    signOut(): void {
      window.sessionStorage.clear();
    }
}
