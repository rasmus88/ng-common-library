import { newArray } from '@angular/compiler/src/util';
import { Component, Input, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
}

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

  pagesArray: Array<Page>;
  pagesTempArray: Array<Page>;

  itemsArray: Array<any>;
  itemsTempArray: Array<any>;

  currentPageNumber: number;
  defaultPageSize: number = 10;
  defaultPageNumber: number = 1;
   
  /* 
     1. Gör en statisk paginering 
     2. Gör en återanvändbar dynamisk paginering
  */  
 
  constructor() { 
     // fill array with items  
    this.fillItemsArray(); 
 
  }

  ngOnInit() {  
 
    this.createPagination();

    this.paginateItems(this.defaultPageNumber);
  }

  next() {
     const nextPageNumber = this.currentPageNumber >= this.defaultPageSize ? this.defaultPageSize : this.currentPageNumber +1;
     this.paginateItems(nextPageNumber); 
  }
  
  prev() {
     const prevPageNumber = this.currentPageNumber <= this.defaultPageNumber ? this.defaultPageNumber : this.currentPageNumber -1;
     this.paginateItems(prevPageNumber);
  } 
  
  paginateItems(pageNumber: number) { 
    console.log("---- paginateItems ----")
    this.currentPageNumber = pageNumber;

    this.itemsTempArray = this.itemsArray.slice((pageNumber -1) * this.defaultPageSize, pageNumber * this.defaultPageSize);
   
    console.log(`itemsTempArray: ${this.itemsTempArray}`)

    this.visiblePagination();

    this.changeActivePagination();

    console.log("---- / paginateItems ----")
  }

  changeActivePagination() { 
    this.pagesTempArray = this.pagesTempArray.map((page, index) => page = {
        active: this.currentPageNumber === page.number ? true : false,
        number: page.number 
    }); 
  }

  visiblePagination() {
    console.log("---- visiblePagination ----")
  
    const currentPage = this.currentPageNumber -1; // 1
    const currentValue = Math.ceil(this.defaultPageSize / 2); // 10 / 2 = 5

    const start = currentPage <= currentValue ? currentPage : currentPage + currentValue;
    const end = currentPage <= currentValue ?  this.defaultPageSize + currentPage : this.defaultPageSize + currentValue;

    console.log(`start: ${start}`)
    console.log(`end: ${end}`) 
                                     
    
  //  this.itemsTempArray = this.itemsArray.slice((pageNumber -1) * this.defaultPageSize, pageNumber * this.defaultPageSize);
   const startTest = currentPage * this.defaultPageSize;
   const endTest = currentPage * this.defaultPageSize;
   


    this.pagesTempArray = this.pagesArray.slice(start, end);

    console.log("---- / visiblePagination ----")
  }
  
  private createPagination() {
    console.log("---- createPages ----")
    const activePageNumber = this.currentPageNumber;
    const arraySize = Math.round(this.itemsArray.length / this.defaultPageSize);
 
    console.log(`arraySize: ${this.itemsTempArray}`)

    this.pagesArray = new Array(arraySize).fill(0).map((page, index) => 
      page = { active: (index +1 === activePageNumber), number : index +1 })
  
    console.log(`pagesArray: ${this.pagesArray}`)
    console.log("---- / createPages ----")
  } 

  fillItemsArray() {
    this.itemsArray = Array(250).fill(0).map((item, i) => ({
      id: (i +1), 
      name: `Item ${i +1}`
    }));  
  }
}