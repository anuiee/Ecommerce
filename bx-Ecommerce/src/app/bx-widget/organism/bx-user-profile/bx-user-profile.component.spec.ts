import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BxUserProfileComponent } from './bx-user-profile.component';

describe('BxUserProfileComponent', () => {
  let component: BxUserProfileComponent;
  let fixture: ComponentFixture<BxUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BxUserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BxUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
