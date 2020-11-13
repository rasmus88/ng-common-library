import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPageComponent } from './docs.component';
import { NgCommonLibraryModule, NgCommonPipeModule, NgCommonComponentModule } from 'dist/ng-common-library';

describe('DocPageComponent', () => {
  let component: DocPageComponent;
  let fixture: ComponentFixture<DocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPageComponent ],
      imports: [
        NgCommonLibraryModule,
        NgCommonComponentModule,
        NgCommonPipeModule
      ]
    })
    .compileComponents();
  }); 

  beforeEach(() => {
    fixture = TestBed.createComponent(DocPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
