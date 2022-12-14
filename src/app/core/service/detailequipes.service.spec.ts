import { TestBed } from '@angular/core/testing';

import { DetailequipesService } from './detailequipes.service';

describe('DetailequipesService', () => {
  let service: DetailequipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailequipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
