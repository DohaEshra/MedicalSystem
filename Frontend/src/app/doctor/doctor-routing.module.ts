import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DoctorInfoComponent } from "./doctor-info/doctor-info.component";


const routes:Routes =[
    {path:"info",component:DoctorInfoComponent/*,canActivate:[SpeakerLoginGuard]*/},
    
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