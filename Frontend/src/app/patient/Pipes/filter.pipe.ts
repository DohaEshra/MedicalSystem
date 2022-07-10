import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filteredName:string, prop:string ): any[] {
    if(value.length===0 || filteredName === ''|| prop === '')
    {
      return value;
    }
    const doctors = [];
    for(const v of  value)
    {
      if(prop==='Name')
      {console.log(v['fname'])
        if(v['fname'].toLowerCase().includes(filteredName.toLowerCase())||v['lname'].toLowerCase().includes(filteredName.toLowerCase()))
        {
          doctors.push(v)
          
        }
      }
      else{
        if(v[prop]!=null)
        {

          if(v[prop].toLowerCase().includes(filteredName.toLowerCase()))
          {
            console.log(v)
            doctors.push(v)
          }
        }
        else{
          console.log(v)
        }
      }
    }
    return doctors;
  }

}
