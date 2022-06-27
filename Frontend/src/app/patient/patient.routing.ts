import { NgModule } from "@angular/core";
import{RouterModule, Routes} from'@angular/router';
import { GetDoctorPerCategoryComponent } from "./get-doctor-per-category/get-doctor-per-category.component";
import { PatientRecordComponent } from "./patient-record/patient-record.component";
import { PatientHomeComponent } from "./patient-home/patient-home.component";
import { PatientLoginGuard } from "../_Guards/patient-login.guard";
const routes:Routes=[
    {path:"",component:PatientRecordComponent},
    // {path:"",component:PatientHomeComponent,canActivate:[PatientLoginGuard],children:[
    //     {path:"record",component:PatientRecordComponent},
    // ]},
    {path:"categories", component:GetDoctorPerCategoryComponent},
    {path:"home",component:PatientHomeComponent},



]

@NgModule({
        imports:[
            RouterModule.forChild(routes)
        ],
        exports:[
            RouterModule
        ]
})
export class PatientRoutingModule{

}