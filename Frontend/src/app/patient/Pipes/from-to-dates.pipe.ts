import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromToDates'
})
export class FromToDatesPipe implements PipeTransform {

  transform(fromDate: Date,toDate:Date): Date[] {
    let dates:Date[]=[];
    for(let i=new Date(fromDate.toString());i<=new Date(toDate.toString());i.setHours(i.getHours()+ 1))
    {
      dates.push(i);
    }
    return dates;
  }

}
