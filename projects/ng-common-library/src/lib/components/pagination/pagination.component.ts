import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../../models/page.model';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() pageChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  
  // custom
  @Input() numberOfPagesView: boolean = false;
  
  // items props 
  @Input() itemsPerPage: number = 10; 
  // pages props
  private pagesOfItemsSize: number = 10;
  pagesOfItems: Array<Page>;
  pagesOfItemsSliced: Array<Page>; 
  defaultPageNumber: number = 1;
  activePageNumber: number = 1; 

  constructor() { } 

  ngOnInit() { 
    this.loadPageNavigation();   
  }

  loadPageNavigation() {    
    const pageSize = Math.ceil(this.items.length / this.itemsPerPage);
    // Create pages array
    this.pagesOfItems = new Array(pageSize).fill(0)
    .map((page, index) => page = { active: (index +1 === this.defaultPageNumber), number : index +1 })
     
    // Slice pages array for navigation visibility 
    this.pagesOfItemsSliced = this.slicePagesOfItems(this.pagesOfItems, this.defaultPageNumber -1, this.pagesOfItemsSize);
     
    const currentVisibleItems = this.sliceItems(this.items, this.defaultPageNumber, this.defaultPageNumber); 
    this.pageChange.emit(currentVisibleItems)
  }
   
  changePageNavigation(pageNumber: number) {
    this.activePageNumber = pageNumber;

    let start = 0,
    end = this.pagesOfItemsSize, 
    middle = Math.floor(this.pagesOfItemsSize / 2); 

    if(this.activePageNumber > middle) {

      start = this.activePageNumber - middle;
      end = start + this.pagesOfItemsSize; 
   
      if (end > this.pagesOfItems.length) {  
          end = this.pagesOfItems.length;  
          start = this.pagesOfItems.length - this.pagesOfItemsSize;
      }
    }
    // new slice of pages array & change active page
    this.pagesOfItemsSliced = this.slicePagesOfItems(this.pagesOfItems, start, end)
                              .map((page, index) => this.changeActivePage(page));
   
    const currentVisibleItems = this.sliceItems(this.items, pageNumber, pageNumber); 
    this.pageChange.emit(currentVisibleItems)
  }

  changeActivePage(page: Page): Page {
    return page = {
      active: this.activePageNumber === page.number ? true : false,
      number: page.number
    }
  }

  slicePagesOfItems(pagesOfItems: Array<Page>, start: number, end: number): Array<Page> {
     return pagesOfItems.slice(start, end)
  }
  
  sliceItems(items: Array<Page>, start: number, end: number): Array<Page> { 
    return items.slice((start -1) * this.itemsPerPage, end * this.itemsPerPage); 
  }
  
  previousPage(): void {
    const prevPageNumber = this.activePageNumber <= this.defaultPageNumber ? this.defaultPageNumber : -- this.activePageNumber;

    this.changePageNavigation(prevPageNumber);
  } 

  nextPage(): void {
    const nextPageNumber = this.activePageNumber >= this.pagesOfItems.length ? this.pagesOfItems.length : ++ this.activePageNumber;

    this.changePageNavigation(nextPageNumber); 
  }

  firstPage(): void {
    const firstPageNumber = this.defaultPageNumber;
    
    this.changePageNavigation(firstPageNumber);
  }

  lastPage(): void {
    const lastPageNumber = this.pagesOfItems.length;
    
    this.changePageNavigation(lastPageNumber);
  }
}
