import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxTextAreaComponent } from './bx-text-area.component';

describe('BxTextAreaComponent', () => {
  let component: BxTextAreaComponent;
  let fixture: ComponentFixture<BxTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxTextAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
