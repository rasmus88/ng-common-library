import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'callbackFilter',
    pure: false
})

export class CallbackFilterPipe implements PipeTransform {

  transform(values: Array<any>, callback:(item: any) => boolean) {
    if(!values || !callback) {
        return values;
    }

    return values.filter(value => callback(value)); 
  }
}