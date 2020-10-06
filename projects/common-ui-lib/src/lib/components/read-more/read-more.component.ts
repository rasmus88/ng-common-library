import { Component, ContentChild, ElementRef, HostListener, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.css']
})
export class ReadMoreComponent {
  @ViewChild('divElementRef') divElementRef: ElementRef;
  @ContentChild('customButtonTemplate', { static: true }) customButtonTemplateRef: TemplateRef<any>;
   
   isCollapsed: boolean = true;
   isEllipsisActive: boolean = false;
 
   ngAfterViewInit(): void {
     setTimeout(() => {
       
       this.detectEllipsis()
     }); 
   }
   
   @HostListener('window:resize', ['$event'])
   onResize() { 
     this.detectEllipsis();
     this.setDefaultCollapsed();  
   }
 
   setDefaultCollapsed() {
     this.isCollapsed = true;
   }
 
   toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
   }
 
   private detectEllipsis(): void {
     const nativeElement = this.divElementRef.nativeElement; 
     this.isEllipsisActive = (nativeElement.offsetWidth < nativeElement.scrollWidth);  
   }
 }