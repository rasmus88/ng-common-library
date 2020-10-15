import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
interface Page {
  active: boolean;
  number: number;
}

@Component({
  selector: 'app-pagination-test',
  templateUrl: './pagination-test.component.html',
  styleUrls: ['./pagination-test.component.scss']
})

export class PaginationTestComponent implements OnInit {
  @Input() items: Array<any>;
  @Output() OnPageChange: EventEmitter<Event>;
 
  // Items props
  itemsArray: Array<any>;  // replace with input later
  itemsTempArray: Array<any>;
  defaultItemsPerPage: number = 10; // replace with input later
   
  // Pagination navigation props
  pageNavigationArray: Array<Page>;
  pageNavigationSectionArray: Array<Page>;
  defaultPageNavigationSize: number = 10; 
  defaultPageNumber: number = 1;
  activePageNumber: number = 1;
   
  /* 
     1. Gör en statisk paginering 
     2. Gör en återanvändbar dynamisk paginering
  */  
 
  constructor() {

    this.fillItemsArray(); // Ta bort sen 
  }

  ngOnInit() {
 
    this.loadDefaultPageNavigation();  
  }

  loadDefaultPageNavigation() {  
    console.log("---- loadDefaultPageNavigation ----") 
    const pageSize = Math.floor(this.itemsArray.length / this.defaultPageNavigationSize);
   
    // Create default pages array
    this.pageNavigationArray = new Array(pageSize).fill(0)
    .map((page, index) => page = { active: (index +1 === this.defaultPageNumber), number : index +1 })
    
    // Slice pages array for navigation visibility 
    this.pageNavigationSectionArray = this.changeNavigationSectionArray(this.defaultPageNumber -1, this.defaultPageNavigationSize);
     
    console.log("---- / loadDefaultPageNavigation ----")
     
    this.sliceItems(this.defaultPageNumber);
  }
  
  changePageNavigation(pageNumber: number) {
    console.log("---- changePageNavigation ----") 
    this.activePageNumber = pageNumber;

    let start = 0,
    end = this.defaultPageNavigationSize,
    middle = Math.floor(this.defaultPageNavigationSize / 2);

    if(this.activePageNumber > middle) {

      start = this.activePageNumber - middle;  
      end = start + this.defaultPageNavigationSize; 
   
      if (end > this.pageNavigationArray.length) {  
          end = this.pageNavigationArray.length;  
          start = this.pageNavigationArray.length - this.defaultPageNavigationSize;
      }
    } 
    // new section of pages array
    this.pageNavigationSectionArray = this.changeNavigationSectionArray(start, end); 
    // Change active page
    this.pageNavigationSectionArray = this.changeActivePage();

    console.log("---- / changePageNavigation ----")

    this.sliceItems(pageNumber)
  }

  changeActivePage(): Array<Page> {
     return this.pageNavigationSectionArray.map((page, index) => page = {
        active: this.activePageNumber === page.number ? true : false,
        number: page.number
     });
  }

  changeNavigationSectionArray(start: number, stop: number): Array<Page> {
     return this.pageNavigationArray.slice(start, stop) 
  }
  
  sliceItems(pageNumber: number): void {
    console.log("---- sliceItems ----")
    this.itemsTempArray = this.itemsArray.slice((pageNumber -1) * this.defaultItemsPerPage, pageNumber * this.defaultItemsPerPage);
    console.log("---- / sliceItems ----")
  }
  
  previousPage(): void {
    const prevPageNumber = this.activePageNumber <= this.defaultPageNumber ? this.defaultPageNumber : -- this.activePageNumber;

    this.changePageNavigation(prevPageNumber);
  } 

  nextPage(): void {
    const nextPageNumber = this.activePageNumber >= this.pageNavigationArray.length ? this.pageNavigationArray.length : ++ this.activePageNumber;

    this.changePageNavigation(nextPageNumber); 
  }

  firstPage(): void {
    const firstPageNumber = this.defaultPageNumber;
    
    this.changePageNavigation(firstPageNumber);
  }

  lastPage(): void {
    const lastPageNumber = this.pageNavigationArray.length;
    
    this.changePageNavigation(lastPageNumber);
  }

  fillItemsArray(): void {
    this.itemsArray = Array(250).fill(0).map((item, i) => ({
      id: (i +1), 
      name: `Item ${i +1}`
    }));
  }
}