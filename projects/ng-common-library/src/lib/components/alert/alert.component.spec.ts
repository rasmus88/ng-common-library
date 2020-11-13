import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Alert, AlertType } from '../../models/alert.model';
import { AlertService } from '../../services/alert.service';
import { AlertComponent } from './alert.component';

@Component({
  selector: 'test-alert',
  template: '<alert></alert>'
})
class TestAlertComponent { }

let alertService;
let options = {
  autoClose: false,
  keepAfterRouteChange: false
};

describe('AlertComponent', () => {
  let component: AlertComponent; 
  let fixture: ComponentFixture<TestAlertComponent>;
  
  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ { provide: AlertService, useClass: MockAlertService }],
      declarations: [ AlertComponent, TestAlertComponent ],
      imports: [RouterTestingModule], 
    }) 
    .compileComponents(); 
  });

  beforeEach(() => { 
    fixture = TestBed.createComponent(TestAlertComponent);
    component = fixture.debugElement.childNodes[0].componentInstance; 
    alertService = TestBed.inject(AlertService); 
    fixture.detectChanges();
  }); 
 
  describe('alert types', () => {    
    it('should create success', () => { 
      alertService.success("success", options)
      expect(component.alertsArray[0].type.valueOf()).toEqual(AlertType.Success); 
    });

    it('should create error', () => { 
      alertService.error("error", options)  
      expect(component.alertsArray[0].type.valueOf()).toEqual(AlertType.Error);
    });

    it('should create warning', () => { 
      alertService.warning("warning", options)
      expect(component.alertsArray[0].type.valueOf()).toEqual(AlertType.Warning);
    });

    it('should create info', () => { 
      alertService.info("info", options)
      expect(component.alertsArray[0].type.valueOf()).toEqual(AlertType.Info);
    }); 
  });

  it('should delete', () => {
    alertService.success("success", options)
    alertService.error("error", options)  
    alertService.warning("warning", options)
    alertService.info("info", options)
  
    expect(component.alertsArray.length >= 4).toBeTrue();
    alertService.clear();
    expect(component.alertsArray.length).toEqual(0);
  })
});

class MockAlertService {
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