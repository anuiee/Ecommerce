import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxButtonSubmitComponent } from './bx-button-submit.component';

describe('BxButtonSubmitComponent', () => {
  let component: BxButtonSubmitComponent;
  let fixture: ComponentFixture<BxButtonSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxButtonSubmitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxButtonSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
