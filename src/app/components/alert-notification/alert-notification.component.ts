import { Component, ContentChild, Input, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AlertNotificationService } from '../../services/alert-notification.service';

import { Alert, AlertType } from '../../models/Alert.model';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-alert',
  templateUrl: './alert-notification.component.html',
  styleUrls: ['./alert-notification.component.scss']
})
export class AlertNotificationComponent implements OnInit, OnDestroy {
  @Input() id = 'default-alert';
  @Input() fade = true; 
  @ContentChild('customButtonTemplate', { static: true }) customButtonTemplateRef: TemplateRef<any>;
   
  alertsArray: Array<Alert> = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;
  cntxt: any;

  constructor(private alertNotificationService: AlertNotificationService, private router: Router) { 
      this.cntxt = this;
  }

  ngOnInit() {

   this.alertSubscription = this.alertNotificationService.onAlert(this.id).subscribe(alert => {
       if(!alert.message) {
         this.alertsArray = this.alertsArray.filter(x => x.keepAfterRouteChange);

         this.alertsArray.forEach(x => delete x.keepAfterRouteChange);
         return;
       }
     
       this.alertsArray.push(alert);

       if (alert.autoClose) {
         setTimeout(() => this.removeAlert(alert), 3000);
       } 
    });

    this.routeSubscription = this.router.events.subscribe(event => { 
         if(event instanceof NavigationStart) { 
            this.alertNotificationService.clear(this.id);
         }
    });
  }

  removeAlert(alert: Alert) {
     // check if already removed to prevent error on auto close
     if (!this.alertsArray.includes(alert)) return;

     if (this.fade) {
         // fade out alert
         this.alertsArray.find(x => x === alert).fade = true;

         // remove alert after faded out
         setTimeout(() => {
             this.alertsArray = this.alertsArray.filter(x => x !== alert);
         }, 250);
     } else {
         // remove alert
         this.alertsArray = this.alertsArray.filter(x => x !== alert);
     }
  }

  cssClass(alert: Alert) {
    if(!alert) return;

    const classes: Array<any> = ['alert', 'alert-dismissable'];

    const alertTypeClass = {
      [AlertType.Success]: 'alert alert-success',
      [AlertType.Error]: 'alert alert-danger',
      [AlertType.Info]: 'alert alert-info',
      [AlertType.Warning]: 'alert alert-warning'
    }; 

    classes.push(alertTypeClass[alert.type]);

    if (alert.fade) {
      classes.push('fade');
    }

    return classes.join(' ');
  }

  ngOnDestroy() { 
     this.alertSubscription.unsubscribe();
     this.routeSubscription.unsubscribe();
  }
}
