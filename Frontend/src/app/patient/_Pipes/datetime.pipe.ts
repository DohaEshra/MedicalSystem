import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

  transform(value: Date|string): string[] {
    let dateTime:string[] = [];
    dateTime.push(value.toString().split('T')[0]);
    dateTime.push(value.toString().split('T')[1]);
    return dateTime;
  }

}
