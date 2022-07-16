import { Pipe, PipeTransform } from '@angular/core';
import { Works_in } from 'src/app/_Models/works_in';

@Pipe({
  name: 'timeFormat'
})
export class TimeFormatPipe implements PipeTransform {

  transform(appointment: Works_in): string[] {
    let retreived:string[] = [];
    retreived.push(appointment.start_time.split(' ')[0]);
    retreived.push(appointment.start_time.split(' ')[1]);
    retreived.push(appointment.start_time.split(' ')[2]);
    retreived.push(appointment.end_time.split(' ')[1]);
    retreived.push(appointment.end_time.split(' ')[2]);

    return retreived;
  }

}
