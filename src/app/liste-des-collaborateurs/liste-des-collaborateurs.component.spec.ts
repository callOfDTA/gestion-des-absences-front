import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCollaborateursComponent } from './liste-des-collaborateurs.component';

describe('ListeDesCollaborateursComponent', () => {
  let component: ListeDesCollaborateursComponent;
  let fixture: ComponentFixture<ListeDesCollaborateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesCollaborateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesCollaborateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
