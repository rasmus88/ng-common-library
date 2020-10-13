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
 
  messages: Array<any> = [];
  subscription: Subscription;

  constructor(public alertService: AlertService, public alertTestService: AlertNotificationService) { 

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
