import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReadMoreComponent } from './read-more.component';

@Component({
  selector: 'test-readmore',
  template: `<read-more>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam elit odio, vulputate non faucibus ac, consectetur varius odio. Nunc rutrum sapien id diam ornare, sit amet faucibus ipsum tempus. Vivamus quis blandit turpis. Duis vestibulum nec sapien ut vestibulum.</read-more>`
})
class TestReadMoreComponent { }

describe('ReadMoreComponent', () => {
  let component: ReadMoreComponent;
  let fixture: ComponentFixture<TestReadMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ TestReadMoreComponent, ReadMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReadMoreComponent);
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('should be collapsed as default', () => { 
    expect(component.isCollapsed.valueOf()).toEqual(true);
  })

  it('should not be collapsed after click', () => { 
    component.toggleCollapsed();
    expect(component.isCollapsed.valueOf()).toEqual(false); 
  })

});
