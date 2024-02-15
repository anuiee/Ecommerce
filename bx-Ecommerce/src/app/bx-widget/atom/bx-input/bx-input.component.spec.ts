import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxInputComponent } from './bx-input.component';

describe('BxInputComponent', () => {
  let component: BxInputComponent;
  let fixture: ComponentFixture<BxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
