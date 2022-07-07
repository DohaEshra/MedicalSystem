import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../account/Account.service';

@Injectable({
  providedIn: 'root'
})
export class PharmacisitLoginGuard implements CanActivate {
  constructor(public router:Router , public acc:AccountService)
    {
    }
   
    canActivate(){
        if(this.acc.getRole() =='pharmacist')
        {
            return true;
        }
        //this.router.navigateByUrl("login");
        this.acc.signOut();
        return false;
      }
}
