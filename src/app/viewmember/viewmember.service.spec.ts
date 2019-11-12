import { TestBed } from '@angular/core/testing';

import { ViewmemberService } from './viewmember.service';

describe('ViewmemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewmemberService = TestBed.get(ViewmemberService);
    expect(service).toBeTruthy();
  });
});
