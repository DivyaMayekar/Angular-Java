import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempurature'
})
export class TempuraturePipe implements PipeTransform {

  f:any;
  transform(value: any): any {

 this.f= (value*9/5)+32;
  return this.f;
  }
  
}