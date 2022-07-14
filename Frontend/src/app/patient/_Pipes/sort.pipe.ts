import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], ...args: any[]): any {
    const sortingField = args[0];

    value.sort((a:any , b:any)=>{
      if(a[sortingField]< b[sortingField]) return -1;
      else if(a[sortingField]> b[sortingField]) return 1;
      else return 0;
    });
    return value;
  }

}
