import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from '../models/alert.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<Alert>();

  retrieve(id = 'default-alert'): Observable<Alert> {
    return this.subject.asObservable().pipe(filter(x => x && x.id === id));
  }  

  success(message: string, options?: any) {
    this.main(new Alert({message, type: AlertType.Success, ...options}));
  }

  error(message: string, options?: any) {
    this.main(new Alert({message, type: AlertType.Error, ...options}));
  }

  warning(message: string, options?: any) {
    this.main(new Alert({message, type: AlertType.Warning, ...options}));
  }

  info(message: string, options?: any) {
    this.main(new Alert({message, type: AlertType.Info, ...options}));
  } 

  clear(id = 'default-alert') {
    this.subject.next(new Alert({ id }));
  }

  private main(alert: Alert) {
    alert.id = alert.id || 'default-alert';
    this.subject.next(alert);
  }
}