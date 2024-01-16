import { TestBed } from '@angular/core/testing';

import { JogosListService } from './jogos-list.service';

describe('JogosListService', () => {
  let service: JogosListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogosListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
