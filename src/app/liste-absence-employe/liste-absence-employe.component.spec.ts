import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ListeAbsenceEmployéComponent } from "./liste-absence-employe.component";

describe("ListeAbsenceEmployéComponent", () => {
  let component: ListeAbsenceEmployéComponent;
  let fixture: ComponentFixture<ListeAbsenceEmployéComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListeAbsenceEmployéComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAbsenceEmployéComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
