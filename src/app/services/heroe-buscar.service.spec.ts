import { TestBed } from '@angular/core/testing';

import { HeroeBuscarService } from './heroe-buscar.service';

describe('HeroeBuscarService', () => {
  let service: HeroeBuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroeBuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
