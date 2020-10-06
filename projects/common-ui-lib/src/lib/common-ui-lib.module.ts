import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';

// Custom Components
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { ReadMoreModalComponent } from './components/read-more-modal/read-more-modal.component';

// Custom Pipes
import { ReplacePipe } from './pipes/replace.pipe';
import { CallbackFilterPipe } from './pipes/callback-filter.pipe';
import { DefaultPipe } from './pipes/default.pipe';
import { DebounceInputPipe } from './pipes/debounce-input.pipe'; 

@NgModule({
  declarations: [
    ReadMoreComponent,
    ReadMoreModalComponent,
    ReplacePipe, 
    CallbackFilterPipe,
    DefaultPipe,
    DebounceInputPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    ReadMoreComponent,
    ReadMoreModalComponent,
    ReplacePipe,
    CallbackFilterPipe,
    DefaultPipe,
    DebounceInputPipe
  ]
})
export class CommonUiLibraryModule { }