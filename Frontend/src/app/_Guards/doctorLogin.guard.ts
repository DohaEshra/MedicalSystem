import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AccountService } from "../account/Account.service";

@Injectable({
    providedIn: 'root'
})

export class DoctorLoginGuard implements CanActivate{
    constructor(public router:Router , public acc:AccountService)
    {
    }
   
    canActivate(){
        if(this.acc.getRole() =='doctor')
        {
            return true;
        }
        //this.router.navigateByUrl("login");
        this.acc.signOut();
        return false;
    }
    
}

