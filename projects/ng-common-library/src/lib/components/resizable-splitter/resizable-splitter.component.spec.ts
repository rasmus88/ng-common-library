import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResizableSplitterComponent } from './resizable-splitter.component';

@Component({
  selector: 'test-resizablesplitter',
  template: `<resizable-splitter [left]="left" [right]="right" [bottom]="bottom"></resizable-splitter>
  <ng-template #left>
     <div class="card h-100">
                 <div class="card-body">
                    <h3 clsas="card-title text-info">Left container</h3>
                    <p class="card-text text-secondary">innehåll... ijsaoidjsaoijijsaoidjsaoijijsaoidjsaoijijsaoidjsaoijijsaoidjsaoijijsaoidaoidjsaoijijsaoidaoidjsaoijijsaoidjsaoijijsaoidjsaoijijsaoidjsaoijijsaoidjsaoijijsaoidjsaoijoijijsaoidjsaoijijsaoidjs</p>
                 </div>
       </div>
  </ng-template>
  <ng-template #right>
      <div class="card h-100">
              <div class="card-body">
                 <h3 clsas="card-title text-info">Right container</h3>
                 <p class="card-text text-secondary">inasd saidjsadi oiasjdoiasj ijsaoidjsaoijoiasjdoiasj ijsaoidjsaoijoiasjdoiasj ijsaoidjsaoijijsaoidjsaoij ijsaoidjsaoijijsaoidjsaoij</p>
              </div>
      </div>
  </ng-template>
  <ng-template #bottom>
  <div class="card mt-1">
     <div class="card-body">
        <h3 clsas="card-title text-info">Bottom container</h3>
        <p class="card-text text-secondary">innehåll...</p>
     </div>
  </div>
  </ng-template>`
})
class TestResizableSplitterComponent { }

describe('ResizableSplitterComponent', () => {
  let component: ResizableSplitterComponent;
  let fixture: ComponentFixture<TestResizableSplitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ NO_ERRORS_SCHEMA ],
      declarations: [ ResizableSplitterComponent, TestResizableSplitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestResizableSplitterComponent);
    component = fixture.debugElement.childNodes[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a left and right ng-template', () => { 
    expect(component.left && component.right).toBeTruthy();
  });

  describe('styles', () => {
    
    it('left should have a .left css class', () => {
      expect(component.leftElemRef.nativeElement.className).toBe('left');
    })
    
    it('right should have a .right css class', () => {
      expect(component.rightElemRef.nativeElement.className).toBe('right');
    })
    
    it('handle should have .handle css class', () => {
      expect(component.handleElemRef.nativeElement.className).toBe('handle');
    })

    it('bottom should have .bottom css class', () => {
      const bottomElem = fixture.nativeElement.querySelector('.bottom').className;
      expect(bottomElem).toBe('bottom');
    })
  })

  describe('size', () => {
     it('should be responsive', () => {
        const testExecCtxElemWidth = fixture.debugElement.parent.nativeElement.clientWidth; 
        const componentElemWidth = component.splitterContainerRef.nativeElement.clientWidth; 
        expect(testExecCtxElemWidth).toBe(componentElemWidth);
     });
  });
});
