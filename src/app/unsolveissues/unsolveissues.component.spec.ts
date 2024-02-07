import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsolveissuesComponent } from './unsolveissues.component';

describe('UnsolveissuesComponent', () => {
  let component: UnsolveissuesComponent;
  let fixture: ComponentFixture<UnsolveissuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UnsolveissuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnsolveissuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
