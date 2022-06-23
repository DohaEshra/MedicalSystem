import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';

@Pipe({
  name: 'searchById'
})
export class SearchByIdPipe implements PipeTransform {

  transform(PatientList: Patient[],Id:number=Number()): Patient {
    let patient:Patient=new Patient(Number(),"","",Number(),"","",Number(),"");
    let indicator=1;
    for(let i=0;i<PatientList.length && indicator;i++)
    {
      if(PatientList[i].id==Id)
      {
        indicator=0;
        patient=PatientList[i];
      }
    }
    
    return patient;
  }

}
