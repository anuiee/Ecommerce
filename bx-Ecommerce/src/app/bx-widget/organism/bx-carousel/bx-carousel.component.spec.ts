import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxCarouselComponent } from './bx-carousel.component';

describe('BxCarouselComponent', () => {
  let component: BxCarouselComponent;
  let fixture: ComponentFixture<BxCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxCarouselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
