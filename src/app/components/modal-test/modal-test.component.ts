import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, ComponentFactoryResolver, ComponentRef, ContentChild, ContentChildren, ElementRef, Inject, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContentModalComponent } from '../content-modal/content-modal.component';

@Component({
  selector: 'modal-test',
  templateUrl: './modal-test.component.html',
  styleUrls: ['./modal-test.component.scss']
})
export class ModalTestComponent {
 
 @ViewChild('wrapper') template: TemplateRef<any>;
 @Input() description: string;  
 
     
  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public data: any) { 
      
  }

  openModal() {
     this.dialog.open(this.template, {
        
     });
  }
}
