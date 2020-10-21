import { Component } from '@angular/core';  
import { AlertService } from 'dist/common-ui-library'; 
import { Subscription } from 'rxjs';
import { AlertNotificationService } from 'src/app/services/alert-notification.service';
 
interface Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
  pageOfItemsArray: Array<any>;

  constructor(public alertService: AlertService, public alertTestService: AlertNotificationService) { 
     
     console.log(this.itemsArray);
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
