import { Component, OnInit } from '@angular/core';  
 
interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'CommonUI-App';
  testar: string = "Rasmus";
  defaultPipeTest: null = null; 
  userInput: string = ""; 
  hide: boolean = false;
  debounceVar: any = "test";
   
  personArray: Array<Person> = [{
    id: 1,
    firstName: 'Peter',
    lastName: 'Karlsson'
  },
  {
    id: 2,
    firstName: 'Rasmus',
    lastName: 'Adolfsson'
  }];

  constructor() { }

  ngOnInit() {
  }

  filterArray(value: any) {
    if(value == 'Rasmus') {
      return true
    }
  }

  filterObj(item: Person) {
     if(item.firstName == 'Rasmus') {
       return true;
     }
  }

  toggleHide() {
     this.hide = !this.hide;
  }

  debounceClick() {
    this.debounceVar = "nytt värde";
  }
}