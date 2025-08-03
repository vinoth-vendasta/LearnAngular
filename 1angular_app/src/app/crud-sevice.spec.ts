import { TestBed } from '@angular/core/testing';

import { CrudSevice } from './crud-sevice';

describe('CrudSevice', () => {
  let service: CrudSevice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudSevice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
