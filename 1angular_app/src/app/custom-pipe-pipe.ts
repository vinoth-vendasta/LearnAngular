import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value == "" || value == null || value == undefined) {
      return 'NA'
    } else {
      return value ? "+91 " + value : value
    }
  }
}
