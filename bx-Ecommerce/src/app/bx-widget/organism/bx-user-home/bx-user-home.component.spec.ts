import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxUserHomeComponent } from './bx-user-home.component';

describe('BxUserHomeComponent', () => {
  let component: BxUserHomeComponent;
  let fixture: ComponentFixture<BxUserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxUserHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxUserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
