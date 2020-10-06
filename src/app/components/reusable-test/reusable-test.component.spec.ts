import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTestComponent } from './reusable-test.component';

describe('ReusableTestComponent', () => {
  let component: ReusableTestComponent;
  let fixture: ComponentFixture<ReusableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReusableTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReusableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
