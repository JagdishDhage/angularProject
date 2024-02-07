import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamDetailsComponent } from './spam-details.component';

describe('SpamDetailsComponent', () => {
  let component: SpamDetailsComponent;
  let fixture: ComponentFixture<SpamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpamDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
