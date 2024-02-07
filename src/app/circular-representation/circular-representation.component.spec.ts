import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularRepresentationComponent } from './circular-representation.component';

describe('CircularRepresentationComponent', () => {
  let component: CircularRepresentationComponent;
  let fixture: ComponentFixture<CircularRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircularRepresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircularRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
