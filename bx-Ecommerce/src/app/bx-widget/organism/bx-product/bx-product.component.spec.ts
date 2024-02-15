import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxProductComponent } from './bx-product.component';

describe('BxProductComponent', () => {
  let component: BxProductComponent;
  let fixture: ComponentFixture<BxProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
