import { Component, ContentChild, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'reusable-test',
  templateUrl: './reusable-test.component.html',
  styleUrls: ['./reusable-test.component.scss']
})
export class ReusableTestComponent implements OnInit {
  //@Input() templateRef: TemplateRef<any>;
  @ContentChild('myContent', { static: true }) templateRef: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  

}
