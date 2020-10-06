import { ChangeDetectorRef, NgZone, Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
  name: 'debouncePipe',
  pure: false
})
 
export class DebouncePipe implements PipeTransform {
  private currentValue: any = null;
  private transformValue: any = null;
  private timeoutHandle: any = -1;
  
  constructor(private changeDetector: ChangeDetectorRef, private zone: NgZone) {
      
  }

  transform(value: any, debounceTime?: number): any {
     
  }
}