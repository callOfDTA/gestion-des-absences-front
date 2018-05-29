import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningAbsensesComponent } from './planning-absenses.component';

describe('PlanningAbsensesComponent', () => {
  let component: PlanningAbsensesComponent;
  let fixture: ComponentFixture<PlanningAbsensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningAbsensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningAbsensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
