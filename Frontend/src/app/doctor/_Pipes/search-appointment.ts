import { Pipe, PipeTransform } from '@angular/core';
import { Patient } from 'src/app/_Models/patient';
import { Visit } from 'src/app/_Models/visit';

@Pipe({
  name: 'searchAppointment',
})
export class searchAppointmentPipe implements PipeTransform {

  transform(PatientList: Visit[],Name:string=""): Visit[] {
    let visits:Visit[]=[];
    for(let i=0;i<PatientList.length;i++)
    {
      if(PatientList[i].pidNavigation?.fname.includes(Name) || PatientList[i].pidNavigation?.lname.includes(Name)|| PatientList[i].appointment_time.toString().includes(Name))
      {
        visits.push(PatientList[i]);
      }
    }
    return visits;
  }
}