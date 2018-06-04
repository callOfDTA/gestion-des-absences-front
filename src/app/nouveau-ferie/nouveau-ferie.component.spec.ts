import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauFerieComponent } from './nouveau-ferie.component';

describe('NouveauFerieComponent', () => {
  let component: NouveauFerieComponent;
  let fixture: ComponentFixture<NouveauFerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauFerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauFerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
