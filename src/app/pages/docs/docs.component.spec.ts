import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocPageComponent } from './docs.component';

describe('HomeComponent', () => {
  let component: DocPageComponent;
  let fixture: ComponentFixture<DocPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocPageComponent ]
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
