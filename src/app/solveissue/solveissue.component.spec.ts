import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveissueComponent } from './solveissue.component';

describe('SolveissueComponent', () => {
  let component: SolveissueComponent;
  let fixture: ComponentFixture<SolveissueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolveissueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolveissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
