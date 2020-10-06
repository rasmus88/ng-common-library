import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[common-ui-color]'
})

export class TestDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('click') test(){
        alert("test"); 
        
  }
}