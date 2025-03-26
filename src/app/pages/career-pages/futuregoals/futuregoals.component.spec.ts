import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturegoalsComponent } from './futuregoals.component';

describe('FuturegoalsComponent', () => {
  let component: FuturegoalsComponent;
  let fixture: ComponentFixture<FuturegoalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FuturegoalsComponent]
    });
    fixture = TestBed.createComponent(FuturegoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
