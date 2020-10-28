import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { DocPageComponent } from './pages/docs/docs.component';
import { TestPageComponent } from './pages/test/test.component';

const routes: Routes = [
  { path: '', component: DocPageComponent },
  { path: 'docs', component: DocPageComponent},
  { path: 'test', component: TestPageComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [],
  imports: [
     RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
