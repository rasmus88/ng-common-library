import { Component } from '@angular/core';  
import { AlertService } from 'dist/ng-common-library'; 
import { Subscription } from 'rxjs';
 
interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocPageComponent {
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };
  alertSubscription: Subscription;
  title = 'CommonUI-App';
  testar: string = "Rasmus";
  nullVar = null;
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
 
  messages: Array<any> = [];
  subscription: Subscription; 
  itemsArray: Array<any> = [...this.fillArray()];
  pageOfItemsArrayFirst: Array<any>;
  pageOfItemsArray: Array<any>;

  constructor(public alertService: AlertService) {
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
 
  onPageChangedFirst(pageOfItems: Array<any>) {
    this.pageOfItemsArrayFirst = pageOfItems;
  }

  onPageChanged(pageOfItems: Array<any>) { 
    this.pageOfItemsArray = pageOfItems; 
  }

  fillArray(): Array<any> {
    return Array(250).fill(0)
                      .map((item, i) => ({
                            id: (i +1), 
                            name: `Item ${i +1}`
                      }));
  }

  toggleHide() {
     this.hide = !this.hide;
  }

  debounceClick() {
    this.debounceVar = "nytt värde"; 
  }
}