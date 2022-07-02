import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchById'
})
export class SearchByIdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
