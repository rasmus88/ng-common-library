import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitTestComponent } from './split-test.component';

describe('SplitTestComponent', () => {
  let component: SplitTestComponent;
  let fixture: ComponentFixture<SplitTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplitTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
