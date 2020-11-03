import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Angular Material
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

// Pages
import { DocPageComponent } from './pages/docs/docs.component';
import { TestPageComponent } from './pages/test/test.component'; 

// Angular Library
import { NgCommonLibraryModule, NgCommonComponentModule, NgCommonPipeModule } from 'dist/ng-common-library';

@NgModule({
  declarations: [
    AppComponent, 
    DocPageComponent,
    TestPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    AppRoutingModule,
    NgCommonLibraryModule,
    NgCommonComponentModule,
    NgCommonPipeModule
  ],
  providers: [
    { 
      provide: MAT_DIALOG_DATA, useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
