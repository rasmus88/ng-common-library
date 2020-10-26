import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field'; 

// Custom Components
import { AlertComponent } from './components/alert/alert.component';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { ReadMoreModalComponent } from './components/read-more-modal/read-more-modal.component';
import { ResizableSplitterComponent } from './components/resizable-splitter/resizable-splitter.component';
import { PaginationComponent } from './components/pagination/pagination.component';

// Custom Pipes
import { ReplacePipe } from './pipes/replace.pipe';
import { CallbackFilterPipe } from './pipes/callback-filter.pipe';
import { DefaultPipe } from './pipes/default.pipe';
import { DebounceInputPipe } from './pipes/debounce-input.pipe';

@NgModule({
  declarations: [
    AlertComponent,
    ReadMoreComponent,
    ReadMoreModalComponent,
    ResizableSplitterComponent,
    ReplacePipe, 
    CallbackFilterPipe,
    DefaultPipe,
    DebounceInputPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ], 
  exports: [
    AlertComponent,
    ReadMoreComponent,
    ReadMoreModalComponent,
    ResizableSplitterComponent,
    PaginationComponent,
    ReplacePipe,
    CallbackFilterPipe,
    DefaultPipe,
    DebounceInputPipe
  ]
})
export class NgCommonLibraryModule { }