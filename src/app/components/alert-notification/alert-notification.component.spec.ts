import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertNotificationComponent } from './alert-notification.component';

describe('AlertNotificationComponent', () => {
  let component: AlertNotificationComponent;
  let fixture: ComponentFixture<AlertNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
