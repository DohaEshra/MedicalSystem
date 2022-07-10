import { Pipe, PipeTransform } from '@angular/core';
import { Record } from 'src/app/_Models/record';

@Pipe({
  name: 'searchInTable',
})
export class SearchInTable implements PipeTransform {

  transform(List: Record[],key:string=""): Record[] {
    let retreivedList:Record[]=[];
    for(let i=0;i<List.length;i++)
    {
      if(List[i].summary.includes(key) || List[i].prescription.includes(key) || List[i].date.toString().includes(key))
      {
        retreivedList.push(List[i]);
      }
    }
    return retreivedList;
  }
}


