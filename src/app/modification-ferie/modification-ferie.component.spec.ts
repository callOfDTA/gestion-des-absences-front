import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificationFerieComponent } from './modification-ferie.component';

describe('ModificationFerieComponent', () => {
  let component: ModificationFerieComponent;
  let fixture: ComponentFixture<ModificationFerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificationFerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificationFerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
