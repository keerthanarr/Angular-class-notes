import { TestBed } from '@angular/core/testing';

import { TypecanactivateGuard } from './typecanactivate.guard';

describe('TypecanactivateGuard', () => {
  let guard: TypecanactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TypecanactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
