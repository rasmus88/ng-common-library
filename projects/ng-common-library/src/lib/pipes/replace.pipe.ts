import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'replaceByPipe'
})

export class ReplacePipe implements PipeTransform {

  transform(value: string, replaceText: string, replaceBy: any): string {
    if(!value || !replaceText || !replaceBy) {
      return value;
    }
    
    return value.replace(replaceText, replaceBy);
  }
}