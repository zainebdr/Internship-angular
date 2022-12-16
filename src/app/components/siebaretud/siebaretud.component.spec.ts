import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiebaretudComponent } from './siebaretud.component';

describe('SiebaretudComponent', () => {
  let component: SiebaretudComponent;
  let fixture: ComponentFixture<SiebaretudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiebaretudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiebaretudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
