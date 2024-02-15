import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxSignupComponent } from './bx-signup.component';

describe('BxSignupComponent', () => {
  let component: BxSignupComponent;
  let fixture: ComponentFixture<BxSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxSignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
