import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  transform(value: Date): string[] {
    let dateTime:string[] = [];
    dateTime.push(value.toString().split('T')[0]);
    dateTime.push(value.toString().split('T')[1]);
    return dateTime;
  }

}
