import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCartComponent } from './bx-cart.component';

describe('BxCartComponent', () => {
  let component: BxCartComponent;
  let fixture: ComponentFixture<BxCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
