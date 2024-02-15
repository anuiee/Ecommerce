import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxHomeComponent } from './bx-home.component';

describe('BxHomeComponent', () => {
  let component: BxHomeComponent;
  let fixture: ComponentFixture<BxHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
