import { Pipe, PipeTransform } from '@angular/core';
import { Record } from 'src/app/_Models/record';

@Pipe({
  name: 'containFiles'
})
export class ContainFilesPipe implements PipeTransform {

  transform(records:Record[] ) {
    var newRecs:any = []
    records.forEach(r=>{
      if(r.attached_files != null) newRecs.push(r);
    })
    return newRecs;
  }

}
