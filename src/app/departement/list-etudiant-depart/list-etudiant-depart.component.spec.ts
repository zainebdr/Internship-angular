import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEtudiantDepartComponent } from './list-etudiant-depart.component';

describe('ListEtudiantDepartComponent', () => {
  let component: ListEtudiantDepartComponent;
  let fixture: ComponentFixture<ListEtudiantDepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEtudiantDepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEtudiantDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
