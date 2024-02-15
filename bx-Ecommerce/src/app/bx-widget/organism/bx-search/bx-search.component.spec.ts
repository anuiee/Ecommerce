import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxSearchComponent } from './bx-search.component';

describe('BxSearchComponent', () => {
  let component: BxSearchComponent;
  let fixture: ComponentFixture<BxSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
