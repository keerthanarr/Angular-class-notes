import { TestBed } from '@angular/core/testing';

import { GuardDeactivateGuard } from './guard-deactivate.guard';

describe('GuardDeactivateGuard', () => {
  let guard: GuardDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
