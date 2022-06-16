import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  TOKEN_KEY='auth-token';
  USER_KEY='user-token';

constructor() { }

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
