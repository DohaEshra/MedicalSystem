import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';
import { Visit } from 'src/app/_Models/visit';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {

  transform(PatientList: Visit[],Name:string=""): Patient[] {
    let patients:Patient[]=[];
    for(let i=0;i<PatientList.length;i++)
    {
      if(PatientList[i].pidNavigation?.fname.includes(Name) || PatientList[i].pidNavigation?.lname.includes(Name))
      {
        patients.push(PatientList[i].pidNavigation!);
      }
    }
    return patients;
  }
}


