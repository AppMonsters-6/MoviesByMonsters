import { TestBed } from '@angular/core/testing';

import { UserinsertService } from './userinsert.service';

describe('UserinsertService', () => {
  let service: UserinsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserinsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
