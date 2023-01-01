import { TestBed } from '@angular/core/testing';

import { SubscribedataService } from './subscribedata.service';

describe('SubscribedataService', () => {
  let service: SubscribedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubscribedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
