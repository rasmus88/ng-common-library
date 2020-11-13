import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ReadMoreModalComponent } from './read-more-modal.component';

@Component({
  selector: 'test-readmoremodal',
  template: '<read-more-modal>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit odio, vulputate non faucibus ac, consectetur varius odio. Nunc rutrum sapien id diam ornare, sit amet faucibus ipsum tempus. Vivamus quis blandit turpis. Duis vestibulum nec sapien ut vestibulum.</read-more-modal>'
})
class TestReadMoreModalComponent { }

describe('ReadMoreModalComponent', () => {
  let component: ReadMoreModalComponent;
  let fixture: ComponentFixture<TestReadMoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ReadMoreModalComponent, TestReadMoreModalComponent ],
      providers: [{ provide: MatDialog, useValue: {} }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReadMoreModalComponent);
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text content', () => {
    const content = component.contentTextRef.nativeElement.innerHTML;
    expect(content.length >= 1).toBeTrue();
  }) 

  it('should have show more text visible', () => {
    let showMoreText = component.divElementRef.nativeElement.parentElement.querySelector('.div-collapse').innerText;
    expect(showMoreText).toEqual('Show more')
  });
});