import { Component, ContentChild, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-carded',
  templateUrl: './page-carded.component.html',
  styleUrls: ['./page-carded.component.scss']
})
export class PageCardedComponent {    
  @ContentChild('nav', { static: true }) navigationTemplate: TemplateRef<any>;
  @ContentChild('title', { static: true }) titleTemplate: TemplateRef<any>;
  @ContentChild('action', { static: true }) actionTemplate: TemplateRef<any>;
  @ContentChild('search', { static: true }) searchTemplate: TemplateRef<any>;
  @ContentChild('content', { static: true }) contentTemplate: TemplateRef<any>;

  ngOnInit() { 
    console.log(this.searchTemplate);
  }

  ngAfterViewInit() {  
  }
}
 