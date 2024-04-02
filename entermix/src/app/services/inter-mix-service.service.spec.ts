import { TestBed } from '@angular/core/testing';

import { InterMixServiceService } from './inter-mix-service.service';

describe('InterMixServiceService', () => {
  let service: InterMixServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterMixServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
