import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filteredName:string, prop:string ): any[] {
    if(value.length===0 || filteredName === '')
    {
      return value;
    }
    const doctors = [];
    for(const v of  value)
    {
      if(prop==='Name')
      {console.log(v['fname'])
        if(v['fname'].includes(filteredName)||v['lname'].includes(filteredName))
        {
          doctors.push(v)
          
        }
      }
      else{
        
        if(v.address.includes(filteredName))
        {
          console.log(v)
          doctors.push(v)
        }
      }
    }
    return doctors;
  }

}
