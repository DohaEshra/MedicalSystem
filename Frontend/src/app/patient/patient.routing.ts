import { NgModule } from "@angular/core";
import{RouterModule, Routes} from'@angular/router';
import { GetDoctorPerCategoryComponent } from "./get-doctor-per-category/get-doctor-per-category.component";
import { PatientRecordComponent } from "./patient-record/patient-record.component";

const routes:Routes=[
    {path:"categories", component:GetDoctorPerCategoryComponent},
    {path:"record",component:PatientRecordComponent},
]

@NgModule({
        imports:[
            RouterModule.forChild(routes)
        ]
})
export class PatientRoutingModule{

}