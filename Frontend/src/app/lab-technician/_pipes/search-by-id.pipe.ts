import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';

@Pipe({
  name: 'searchById'
})
export class SearchByIdPipe implements PipeTransform {

  transform(patientsList: any[],Id:number=Number()): any {
    let patient:Patient=new Patient();
    for(let i=0;i<patientsList.length;i++)
    {
      if(patientsList[i].id ==Id)
      {
        patient=patientsList[i];
        return patient;
      }
    }
    return patient;
  }

}
