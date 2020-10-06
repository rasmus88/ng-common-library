import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'split-test',
  templateUrl: './split-test.component.html',
  styleUrls: ['./split-test.component.scss']
})
export class SplitTestComponent {
  @Input() left: TemplateRef<any> = null;
  @Input() right: TemplateRef<any> = null;
  @Input() bottom: TemplateRef<any> = null;

  constructor() {

  }

  ngAfterViewInit() {
     console.log(`
     ${this.left}
     ${this.right}
     ${this.bottom}
     `);
  }

}