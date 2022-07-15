import { Other } from './../../_Models/other';
import { Doctor } from './../../_Models/doctor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getAll',
  pure:false
})
export class GetAllPipe implements PipeTransform {

  transform(All:any [], Drs:Doctor[], Others:Other[]) {

    All=[...Drs, ...Others]
    // console.log("GetAllPipe:",All)
    // console.log("GetDrsPipe:",Drs)
    // console.log("GetOthPipe:",Others)
    return All;
  }

}
