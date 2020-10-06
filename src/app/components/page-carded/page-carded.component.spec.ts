import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCardedComponent } from './page-carded.component';

describe('PageCardedComponent', () => {
  let component: PageCardedComponent;
  let fixture: ComponentFixture<PageCardedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCardedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCardedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
