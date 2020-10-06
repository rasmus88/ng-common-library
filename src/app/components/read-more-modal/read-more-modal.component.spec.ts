import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMoreModalComponent } from './read-more-modal.component';

describe('ReadMoreModalComponent', () => {
  let component: ReadMoreModalComponent;
  let fixture: ComponentFixture<ReadMoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMoreModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
