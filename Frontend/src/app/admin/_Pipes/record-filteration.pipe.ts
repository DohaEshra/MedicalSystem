import { Pipe, PipeTransform } from '@angular/core';
import { Record } from 'src/app/_Models/record';

@Pipe({
  name: 'recordFilteration'
})
export class RecordFilterationPipe implements PipeTransform {

  transform(recordsList: Record[]) {
    let records = [];
    for (let i = 0; i < recordsList.length; i++) {
      if (recordsList[i].testType == 'F') {
        records.push(recordsList[i]);
      }
    }
    return records;
  }

}
