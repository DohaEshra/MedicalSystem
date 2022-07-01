import { Pipe, PipeTransform } from '@angular/core';
import { Record } from 'src/app/_Models/record';
import { RecordPerDate } from 'src/app/_Models/recordPerDate';

@Pipe({
  name: 'recordWithoutRedundancy'
})
export class RecordWithoutRedundancyPipe implements PipeTransform {

  transform(records:Record[]): RecordPerDate[] {
    let temp:RecordPerDate=new RecordPerDate();
    var recordsPerDate:RecordPerDate[]=[];
    for(let i=0;i<records.length;i++)
    {
      temp=new RecordPerDate();
      for(let j=0;j<records.length;j++)
      {
        if(records[i].date==records[j].date)
        {
          temp["date"]=records[i].date;
          temp["summary"]=records[i].summary;
          temp["prescription"]=records[i].prescription;
          temp["attached_files"].push(records[i].attached_files);
          temp["file_description"].push(records[i].file_description);
        }
      }

      recordsPerDate.push(temp);
    }


    return recordsPerDate;
  }

}
