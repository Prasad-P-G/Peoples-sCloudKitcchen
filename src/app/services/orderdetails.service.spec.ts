import { TestBed } from '@angular/core/testing';

import { OrderdetailsService } from './orderdetails.service';

describe('OrderdetailsService', () => {
  let service: OrderdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
