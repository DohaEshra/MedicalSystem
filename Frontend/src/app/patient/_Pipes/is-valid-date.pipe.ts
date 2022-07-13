import { Pipe, PipeTransform } from '@angular/core';
import { Appdate } from 'src/app/_Models/date';
import { Works_in } from 'src/app/_Models/works_in';

@Pipe({
  name: 'isValidDate'
})
export class IsValidDatePipe implements PipeTransform {

  transform(date:string,fromdate:string,todate:string,appointments:Works_in[]): Appdate|null {
    let retreived = new Appdate();

    let bookingDate = new Date(date);
    let minDate = new Date(fromdate);
    let maxDate = new Date(todate);

    if(date && bookingDate>=minDate &&  bookingDate<=maxDate)
    {
      for(let i=0;i<appointments.length;i++)
      {
        let Day = appointments[i].start_time.split(' ')[0].trim();
        

        if(Day.includes(date?.split(',')[0].trim()))
        {
          let AM_PM = appointments[i].start_time.split(' ')[2].trim();
          let Hour;
          let Minute;

          if(AM_PM == 'AM')
          {
            Hour = parseInt(appointments[i].start_time.split(' ')[1].trim().split(':')[0].trim());
          }
          else
          {
            Hour = parseInt(appointments[i].start_time.split(' ')[1].trim().split(':')[0].trim()) + 12;
          }
          Minute = appointments[i].start_time.split(' ')[1].trim().split(':')[1].trim();

          bookingDate.setMinutes(parseInt(Minute));
          bookingDate.setHours(Hour);

          retreived.AppointmentDate = bookingDate;
          retreived.maxpatientNo=appointments[i].maxpatientNo;
          
          return retreived;
        }
      }
    }
    return null;
  }

}
