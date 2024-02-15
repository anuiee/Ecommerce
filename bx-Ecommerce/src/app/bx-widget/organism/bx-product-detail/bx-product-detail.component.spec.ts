import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxProductDetailComponent } from './bx-product-detail.component';

describe('BxProductDetailComponent', () => {
  let component: BxProductDetailComponent;
  let fixture: ComponentFixture<BxProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxProductDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
