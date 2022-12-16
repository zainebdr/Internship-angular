import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEquipeEtudiantComponent } from './list-equipe-etudiant.component';

describe('ListEquipeEtudiantComponent', () => {
  let component: ListEquipeEtudiantComponent;
  let fixture: ComponentFixture<ListEquipeEtudiantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEquipeEtudiantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEquipeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
