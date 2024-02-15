import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxHomeCardComponent } from './bx-home-card.component';

describe('BxHomeCardComponent', () => {
  let component: BxHomeCardComponent;
  let fixture: ComponentFixture<BxHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxHomeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
