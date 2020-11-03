import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';

@Component({
  selector: 'test-pagination',
  template: `<pagination [items]="itemsArray" 
             [itemsPerPage]="10"
             [numberOfPagesView]="true"
             (pageChange)="onPageChangedFirst($event)"></pagination>`
})
class TestPaginationComponent {
   itemsArray = [];
   pages = [];
   constructor() {
     this.itemsArray = Array(200).fill(0).map((item, i) => ({
                        id: (i +1), 
                        name: `Item ${i +1}`}));
   }

   onPageChangedFirst(pageOfItems: Array<any>) {
     this.pages = pageOfItems;
   }
 }

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<TestPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent, TestPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaginationComponent);
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  }); 

  it('shoud show extra view', () => {
    let pageViewElem = fixture.nativeElement.querySelector('#pageView p');
    expect(pageViewElem).toBeTruthy();
    expect(pageViewElem.innerHTML).toEqual('Sida: 1 av 20'); 
  })

  describe('pages of items', () => {

    it('should have default page number equal to 1', () => {
      expect(component.defaultPageNumber).toEqual(1);
    }); 

    it('shoud have first page as active', () => {
      const activePage = component.pagesOfItems.filter((page, index) => page.active);
      expect(activePage[0].active).toBeTrue();
      expect(activePage[0].number).toEqual(1);
    })
  })

  describe('calculations', () => {

    it('should have correct amount of pages of items', () => {
      expect(component.pagesOfItems.length).toEqual(20);
    })

    it('should have correct amount of items', () => {
      expect(component.items.length).toEqual(200);
    })
  })
});