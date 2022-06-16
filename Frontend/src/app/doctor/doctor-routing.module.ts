import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorLoginGuard } from "../_Guards/doctorLogin.guard";
import { DoctorEditComponent } from "./doctor-edit/doctor-edit.component";
import { DoctorInfoComponent } from "./doctor-info/doctor-info.component";


const routes:Routes =[
    {path:"info",component:DoctorInfoComponent,canActivate:[DoctorLoginGuard]},
    {path:"edit",component:DoctorEditComponent,canActivate:[DoctorLoginGuard]},

];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class doctorRoutingModule{

}