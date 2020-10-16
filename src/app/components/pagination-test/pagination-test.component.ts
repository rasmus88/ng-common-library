import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
interface Page {
  active: boolean;
  number: number;
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination-test.component.html',
  styleUrls: ['./pagination-test.component.scss']
})

export class PaginationTestComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() pageChange: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();
  
  // custom
  @Input() loader: any;
  @Input() numberOfPagesView: boolean = false;
  
  // Items props 
  @Input() itemsPerPage: number = 10; 
  // Pages props
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
    console.log("---- changePageNavigation ----") 
     
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
    // new slice of pages array
    this.pagesOfItemsSliced = this.slicePagesOfItems(this.pagesOfItems, start, end); 
    // Change active page
    this.pagesOfItemsSliced = this.changeActivePage(this.pagesOfItemsSliced);
 
    const currentVisibleItems = this.sliceItems(this.items, pageNumber, pageNumber); 
    this.pageChange.emit(currentVisibleItems)
  }

  changeActivePage(arr: Array<Page>): Array<Page> {
     return arr.map((page, index) => page = {
        active: this.activePageNumber === page.number ? true : false,
        number: page.number
     });
  }

  slicePagesOfItems(arr: Array<Page>, start: number, end: number): Array<Page> {
     return arr.slice(start, end)
  }
  
  sliceItems(arr: Array<Page>, start: number, end: number): Array<Page> { 
    return arr.slice((start -1) * this.itemsPerPage, end * this.itemsPerPage); 
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

  test(): boolean {
    const last = this.defaultPageNumber === this.defaultPageNumber;

    return last;
  }
}