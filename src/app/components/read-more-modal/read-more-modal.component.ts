import { Component, ComponentFactoryResolver, ContentChild, ElementRef, HostListener, Inject, Input, TemplateRef, ViewChild } from '@angular/core'; 
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-read-more-modal',
  templateUrl: './read-more-modal.component.html',
  styleUrls: ['./read-more-modal.component.scss']
})

export class ReadMoreModalComponent {
  isCollapsed: boolean = true; 
  isModalOpened: boolean;

  @ViewChild('divElementRef') divElementRef: ElementRef;
  @ViewChild('contentTextRef') contentTextRef: ElementRef;
  @ContentChild('customModalTemplate') customModalTemplateRef: TemplateRef<any>;
  @ContentChild('customButtonTemplate', { static: true }) customButtonTemplateRef: TemplateRef<any>;

  isEllipsisActive: boolean;

  constructor(public dialog: MatDialog) { 
    
  }
 
  ngAfterViewInit() {
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

  openModal() {  
    const dialogRef = this.dialog.open(this.customModalTemplateRef ? this.customModalTemplateRef : ModalTextContentComponent, {
        width: this.divElementRef.nativeElement.offsetWidth,
        data: this.contentTextRef.nativeElement.innerText
    })
    
    dialogRef.afterOpened().subscribe(res => this.isModalOpened = true);
    dialogRef.afterClosed().subscribe(res => this.isModalOpened = false);
  }

  private detectEllipsis(): void {
    const nativeElement = this.divElementRef.nativeElement; 
    this.isEllipsisActive = (nativeElement.offsetWidth < nativeElement.scrollWidth); 
  }
}

@Component({
   templateUrl: './read-more-modal-template.html',
   styleUrls: ['./read-more-modal-template.scss']
})
class ModalTextContentComponent {   
 constructor(public dialogRef: MatDialogRef<ModalTextContentComponent>, @Inject(MAT_DIALOG_DATA) public data: string) {
     
 }
}