import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearderboardComponent } from './learderboard.component';

describe('LearderboardComponent', () => {
  let component: LearderboardComponent;
  let fixture: ComponentFixture<LearderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
