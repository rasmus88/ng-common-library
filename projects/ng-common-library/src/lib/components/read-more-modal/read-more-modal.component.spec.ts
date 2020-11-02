import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ReadMoreModalComponent } from './read-more-modal.component';

@Component({
  selector: 'test-readmoremodal',
  template: '<read-more-modal>testusa uash uhsauh aush uahsuidh aiush iasuh uisah haisudh iaus usuususu uasuususu uaus uasusuu ausu uaisuusu hasiuh sh aisusaisai uods sdoodso ksdodsok oskdodsk osdksdo ksodok kosdk dsok dso kdsokdosko osdk kosdkoko ksodko skokoso kokskdo kodskokoko kosko ksodk oaisiusa uasiu aisua i iuu aii uuuu</read-more-modal>'
})
class TestReadMoreModalComponent { }

describe('ReadMoreModalComponent', () => {
  let component: ReadMoreModalComponent;
  let fixture: ComponentFixture<TestReadMoreModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMoreModalComponent, TestReadMoreModalComponent ],
      providers: [{ provide: MatDialog, useValue: {} }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReadMoreModalComponent);
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text content', () => {
    const content = component.contentTextRef.nativeElement.innerHTML;
    expect(content.length >= 1).toBeTrue();
  })

  it('should have show more text visible', () => {
    let showMoreText = component.divElementRef.nativeElement.parentElement.querySelector('.div-collapse').innerText;
    expect(showMoreText).toEqual('Show more')
  });
});
