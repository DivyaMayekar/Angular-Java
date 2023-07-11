import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasepipe'
})
export class UppercasepipePipe implements PipeTransform {

  transform(value: any ) :any{
    return value.toUpperCase();
  }

}
