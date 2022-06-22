import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';

@Pipe({
  name: 'searchByName',
})
export class SearchByNamePipe implements PipeTransform {

  transform(PatientList: Patient[],Name:string=""): any {
    let patients:Patient[]=[];
    for(let i=0;i<PatientList.length;i++)
    {
      var x =JSON.parse(JSON.stringify(PatientList[i]));
      if(x.fname.includes(Name) || x.lname.includes(Name))
      {
        patients.push(PatientList[i]);
      }
    }
    return patients;
  }

}
