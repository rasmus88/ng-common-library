import { NgModule } from '@angular/core'; 
// Shared 
import { SharedModule } from '../shared/shared.module';
// Material
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
// Components
import { AlertComponent } from './alert/alert.component';
import { ReadMoreComponent } from './read-more/read-more.component';
import { ReadMoreModalComponent } from './read-more-modal/read-more-modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { ResizableSplitterComponent } from './resizable-splitter/resizable-splitter.component';

@NgModule({
  declarations: [
    AlertComponent,
    ReadMoreComponent,
    ReadMoreModalComponent,
    ResizableSplitterComponent,
    PaginationComponent
  ],
  imports: [ 
    SharedModule,
    MatDialogModule,
    MatIconModule
  ], 
  exports: [ 
    SharedModule,
    MatDialogModule,
    MatIconModule,
    AlertComponent,
    ReadMoreComponent,
    ReadMoreModalComponent,
    ResizableSplitterComponent,
    PaginationComponent
  ]
})
export class NgCommonComponentModule { }