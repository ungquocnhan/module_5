import { TestBed } from '@angular/core/testing';

import { ConsignmentService } from './consignment.service';

describe('LoHangService', () => {
  let service: ConsignmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsignmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
