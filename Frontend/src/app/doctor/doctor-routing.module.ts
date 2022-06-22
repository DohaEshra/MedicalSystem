import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorLoginGuard } from "../_Guards/doctorLogin.guard";
import { DoctorEditComponent } from "./doctor-edit/doctor-edit.component";
import { DoctorHomeComponent } from "./doctor-home/doctor-home.component";
import { DoctorInfoComponent } from "./doctor-info/doctor-info.component";


const routes:Routes =[
    {path:"",component:DoctorHomeComponent,canActivate:[DoctorLoginGuard],children:[
        {path:"info",component:DoctorInfoComponent},
        {path:"edit",component:DoctorEditComponent},
    ]},
    {path:"home",component:DoctorHomeComponent,canActivate:[DoctorLoginGuard],children:[
        {path:"info",component:DoctorInfoComponent},
        {path:"edit",component:DoctorEditComponent},
    ]},
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