import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(PatientList: any[],Name=""): any[] {
    let patients =[];
    for(let i=0;i<PatientList.length;i++)
    {
      if(PatientList[i].pidNavigation.fname.includes(Name) || PatientList[i].pidNavigation.lname.includes(Name))
      {
        patients.push(PatientList[i]);
      }
    }
    return patients;
  }

}
