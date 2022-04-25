import { TestBed } from '@angular/core/testing';

import { AdminInsertService } from './admin-insert.service';

describe('AdminInsertService', () => {
  let service: AdminInsertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminInsertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
