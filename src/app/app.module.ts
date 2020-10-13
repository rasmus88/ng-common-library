import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

// Pages components
import { HomeComponent } from './pages/home/home.component';
import { TestComponent } from './pages/test/test.component'; 

// Custom components 
import { AppComponent } from './app.component';
import { DebouncePipe } from './pipes/test.pipe'
import { TestDirective } from './directives/test.directive';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import { ReadMoreModalComponent } from './components/read-more-modal/read-more-modal.component';
import { ContentModalComponent } from './components/content-modal/content-modal.component';
import { ModalTestComponent } from './components/modal-test/modal-test.component'; 
import { CardContainerComponent } from './components/card-container/card-container.component';
import { ReusableTestComponent } from './components/reusable-test/reusable-test.component'; 
// Reusable components tests cards
import { PageCardedComponent } from './components/page-carded/page-carded.component';  
import { ArticlesComponent } from './components/articles/articles.component';  
// Splitter component
import { SplitTestComponent } from './components/split-test/split-test.component';
// Alert notification component
import { AlertNotificationComponent } from './components/alert-notification/alert-notification.component'; 

// Cummon UI Module
import { CommonUiLibraryModule } from 'common-ui-library';

@NgModule({
  declarations: [
    AppComponent,
    DebouncePipe,
    TestDirective,
    ReadMoreComponent,
    ReadMoreModalComponent,
    ContentModalComponent, 
    ModalTestComponent,
    CardContainerComponent,
    ReusableTestComponent,
    PageCardedComponent,
    ArticlesComponent,
    SplitTestComponent,
    AlertNotificationComponent,
    HomeComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    CommonUiLibraryModule,
    AppRoutingModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
