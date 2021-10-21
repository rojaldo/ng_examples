import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number' && value >= 0 && value <= 90) {
      // get decimal part of number
      const decimal = Math.round((value % 1)*10);
      // get integer part of number
      const integer = Math.floor(value);
      if(args[0] === 'es') {
        return `${integer},${decimal}%`;
      }
      return value + '%';
    }
    console.error('Error in pipe AbvPipe: ' + value);
    return value;
    
  }

}
