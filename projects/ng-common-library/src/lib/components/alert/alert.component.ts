import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router'; 
import { Subscription } from 'rxjs';
import { AlertService } from '../../services/alert.service';
import { Alert, AlertType } from '../../models/alert.model'; 

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() id = 'default-alert';
  @Input() fade = true;
  @ContentChild('customButtonTemplate', { static: true }) customButtonTemplateRef: TemplateRef<any>;

  alertsArray: Array<Alert> = [];
  alertSubscription: Subscription;
  routeSubscription: Subscription;
  cntxt: any;

  constructor(private alertService: AlertService, private router: Router) { 
      this.cntxt = this;
  }

  ngOnInit() {

   this.alertSubscription = this.alertService.retrieve(this.id).subscribe(alert => {
       if(!alert.message) {
         this.alertsArray = this.alertsArray.filter(x => x.keepAfterRouteChange);

         this.alertsArray.forEach(x => delete x.keepAfterRouteChange);
         return;
       }
     
       this.alertsArray.push(alert);

       if (alert.autoClose) {
         setTimeout(() => this.remove(alert), 3000);
       } 
    });

    this.routeSubscription = this.router.events.subscribe(event => { 
         if(event instanceof NavigationStart) { 
            this.alertService.clear(this.id);
         }
    });
  }

  remove(alert: Alert) {
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