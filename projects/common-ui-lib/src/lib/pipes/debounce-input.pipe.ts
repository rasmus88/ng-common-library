import { ChangeDetectorRef, NgZone, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'debounceInputPipe',
    pure: false
})

export class DebounceInputPipe implements PipeTransform {
    private currentValue: any = null;
    private transformValue: any = null;
    private timeoutHandle: any = -1;
    
    constructor(private changeDetector: ChangeDetectorRef, private zone: NgZone) {
        
    }
    
    transform(value: any, debounceTime?: number): any {
        if(this.currentValue == null) {
            this.currentValue = value;
            return value;
         }
         
         if(this.currentValue === value) {
           clearTimeout(this.timeoutHandle);
         }
   
        if(this.transformValue !== value) {
           // new value needs to be debounced
           this.transformValue = value;
           clearTimeout(this.timeoutHandle);
           this.timeoutHandle = setTimeout(() => {
             this.zone.run(() => {
                 this.currentValue = this.transformValue;
                 this.transformValue = null;
                 this.changeDetector.markForCheck();
             });
         }, typeof debounceTime == 'number' ? debounceTime : 500);
        }
       return this.currentValue;
    } 
}