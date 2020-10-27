import { Component, ElementRef, HostListener, Input, Renderer2, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'resizable-splitter',
  templateUrl: './resizable-splitter.component.html',
  styleUrls: ['./resizable-splitter.component.scss']
})
export class ResizableSplitterComponent {
  @ViewChild('splitterContainer') splitterContainerRef: ElementRef;
  @Input() left: TemplateRef<any> = null;
  @Input() handler: TemplateRef<any> = null;
  @Input() right: TemplateRef<any> = null;
  @Input() bottom: TemplateRef<any> = null;

  @ViewChild('handleRef') handleElemRef: ElementRef; 
  @ViewChild('leftRef') leftElemRef: ElementRef;
  @ViewChild('rightRef') rightElemRef: ElementRef;

  isDragging: boolean = false;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
      this.renderer.listen(this.handleElemRef.nativeElement, 'mousedown', () => {
           this.isDragging = true;
      })
  }

  @HostListener('mouseup', [])
  nMouseUp() {  
      this.isDragging = false;
  }
 
  @HostListener('mousemove', ['$event'])
  onMouseMove(event) {  
    if(this.isDragging) {

      event.preventDefault();
      // splitter container div
      const containerNativeElem = this.splitterContainerRef.nativeElement; 
      const boundingClientRectElem = containerNativeElem.getBoundingClientRect();
    
      // handle div
      const handleNativeElem = this.handleElemRef.nativeElement;
      const handleBoundingClientRectElem = handleNativeElem.getBoundingClientRect(); 
      
      let containerLeftPositionFromViewPort = boundingClientRectElem.left,
      clientXValue = Math.round(event.clientX - containerLeftPositionFromViewPort);
    
      let splitterContainerWidth = boundingClientRectElem.width,
      handleContainerWidth = handleBoundingClientRectElem.width;

      let rightContainerWidth = splitterContainerWidth - handleContainerWidth - clientXValue; 
 
      this.renderer.setStyle(this.splitterContainerRef.nativeElement, 'gridTemplateColumns', `${clientXValue}px ${handleContainerWidth}px ${rightContainerWidth}px`);
    }
  }

  @HostListener('window:resize', [])
  resize() {
    // Left div
    const leftNativeElem = this.leftElemRef.nativeElement; 
    const leftBoundingClientRectElem = leftNativeElem.getBoundingClientRect();
    
    // Handle div
    const handleNativeElem = this.handleElemRef.nativeElement;
    const handleBoundingClientRectElem = handleNativeElem.getBoundingClientRect();

    // Right div
    const rightNativeElem = this.rightElemRef.nativeElement;
    const rightBoundingClientRectElem = rightNativeElem.getBoundingClientRect();
    
    // total value
    const tot = leftBoundingClientRectElem.width + handleBoundingClientRectElem.width + rightBoundingClientRectElem.width;

    let leftElemPercentWidth = this.calcPercentage(leftBoundingClientRectElem.width, tot);
    let handleElemPercentWidth = this.calcPercentage(handleBoundingClientRectElem.width, tot);
    let rightElemPercentWidth = this.calcPercentage(rightBoundingClientRectElem.width, tot);
 
    this.renderer.setStyle(this.splitterContainerRef.nativeElement, 'gridTemplateColumns', `${leftElemPercentWidth}% ${handleElemPercentWidth}% ${rightElemPercentWidth}%`); 
  }
  
  private calcPercentage(partialValue: number, totalValue: number) {  
     return (100 * partialValue) / totalValue;
  }
}
