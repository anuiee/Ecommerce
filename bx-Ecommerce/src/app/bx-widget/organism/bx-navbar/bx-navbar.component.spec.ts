import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxNavbarComponent } from './bx-navbar.component';

describe('BxNavbarComponent', () => {
  let component: BxNavbarComponent;
  let fixture: ComponentFixture<BxNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
