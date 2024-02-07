import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolvedetailsComponent } from './unsolvedetails.component';

describe('UnsolvedetailsComponent', () => {
  let component: UnsolvedetailsComponent;
  let fixture: ComponentFixture<UnsolvedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsolvedetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsolvedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
