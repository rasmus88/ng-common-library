import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResizableSplitterComponent } from './resizable-splitter.component';

describe('ResizableSplitterComponent', () => {
  let component: ResizableSplitterComponent;
  let fixture: ComponentFixture<ResizableSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResizableSplitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizableSplitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
