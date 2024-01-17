import { TestBed } from '@angular/core/testing';

import { AddLivroService } from './add-livro.service';

describe('AddLivroService', () => {
  let service: AddLivroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddLivroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
