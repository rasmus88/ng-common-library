import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[read-more]'
})

// Ett direktiv för read more ... om det är mycket text

export class TestDirective implements OnInit {
  @Input() readMoreText: string;
  overflowStyle: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    
     this.truncateText();
  }

  ngOnInit() { 
       this.truncateText();
  }

 ngAfterContentInit() {
    const readMoreClass = `<p>${this.readMoreText}</p>`;
    this.el.nativeElement.innerHTML = this.el.nativeElement.innerHTML+ readMoreClass;
 }

  ngAfterViewInit() { 
      console.log(this.el.nativeElement);
  }

  @HostListener('mouseover') onMouseOver(){
        console.log('mouseover'); 
  } 

  private truncateText() { 
    this.overflowStyle = this.el.nativeElement.style = "text-overflow: ellipsis; overflow: hidden; white-space: nowrap;"
  }
}
