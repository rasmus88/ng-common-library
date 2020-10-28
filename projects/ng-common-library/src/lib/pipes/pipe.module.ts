import { NgModule } from '@angular/core';
// Shared
import { SharedModule } from '../shared/shared.module';
// Pipes
import { CallbackFilterPipe } from './callback-filter.pipe';
import { DebounceInputPipe } from './debounce-input.pipe';
import { DefaultPipe } from './default.pipe';
import { ReplacePipe } from './replace.pipe';
 
@NgModule({
  declarations: [ 
    ReplacePipe, 
    CallbackFilterPipe,
    DefaultPipe,
    DebounceInputPipe
  ],
  imports: [
    SharedModule
  ], 
  exports: [ 
    SharedModule,
    ReplacePipe,
    CallbackFilterPipe,
    DefaultPipe,
    DebounceInputPipe
  ]
})
export class NgCommonPipeModule { }