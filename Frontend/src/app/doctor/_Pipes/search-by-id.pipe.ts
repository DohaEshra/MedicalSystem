import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';
import { Visit } from 'src/app/_Models/visit';

@Pipe({
  name: 'searchById'
})
export class SearchByIdPipe implements PipeTransform {

  transform(visitList: Visit[],Id:number=Number()): Patient|null {
    let patient:Patient|null=new Patient();
    let indicator=1;
    for(let i=0;i<visitList.length && indicator;i++)
    {
      if(visitList[i].pid==Id)
      {
        indicator=0;
        patient=visitList[i].pidNavigation;
      }
    }
    
    return patient;
  }

}
