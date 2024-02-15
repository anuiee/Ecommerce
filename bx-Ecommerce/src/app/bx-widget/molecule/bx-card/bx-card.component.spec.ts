import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCardComponent } from './bx-card.component';

describe('BxCardComponent', () => {
  let component: BxCardComponent;
  let fixture: ComponentFixture<BxCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
