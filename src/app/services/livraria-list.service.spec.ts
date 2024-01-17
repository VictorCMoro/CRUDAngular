import { TestBed } from '@angular/core/testing';

import { livrariaListService } from './livraria-list.service';

describe('livrariaListService', () => {
  let service: livrariaListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(livrariaListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
