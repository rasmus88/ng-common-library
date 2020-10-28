import { NgModule } from '@angular/core'; 
// Shared
import { SharedModule } from './shared/shared.module';
 
@NgModule({
  declarations: [ 
  ],
  imports: [ 
    SharedModule 
  ], 
  exports: [
    SharedModule 
  ]
})
export class NgCommonLibraryModule { }