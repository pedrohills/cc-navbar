import { TestBed, inject } from '@angular/core/testing';

import { CcNavbarService } from './cc-navbar.service';

describe('CcNavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CcNavbarService]
    });
  });

  it('should be created', inject([CcNavbarService], (service: CcNavbarService) => {
    expect(service).toBeTruthy();
  }));
});
