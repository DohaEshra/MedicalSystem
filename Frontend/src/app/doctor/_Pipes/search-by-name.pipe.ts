import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/_Models/patient';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {

  transform(PatientList: Patient[],Name:string=""): Patient[] {
    let patients:Patient[]=[];
    for(let i=0;i<PatientList.length;i++)
    {
      if(PatientList[i].fname.includes(Name) || PatientList[i].lname.includes(Name))
      {
        patients.push(PatientList[i]);
      }
    }
    return patients;
  }
}


