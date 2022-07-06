import { Pipe, PipeTransform } from '@angular/core';
import { Record } from 'src/app/_Models/record';

@Pipe({
  name: 'filterRecords'
})
export class FilterRecordsPipe implements PipeTransform {

  transform(recordsList: Record[], filterBy:string) {
    let records =[];
    for(let i=0;i<recordsList.length;i++)
    {
      if(recordsList[i].testType === filterBy)
      {
        records.push(recordsList[i]);
      }
    }
    return records;
  }


}
