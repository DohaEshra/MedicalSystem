import { NgModule } from "@angular/core";
import{RouterModule, Routes} from'@angular/router';
import { GetDoctorPerCategoryComponent } from "./get-doctor-per-category/get-doctor-per-category.component";

const routes:Routes=[
    {path:"categories", component:GetDoctorPerCategoryComponent}
]

@NgModule({
        imports:[
            RouterModule.forChild(routes)
        ]
})
export class PatientRoutingModule{

}