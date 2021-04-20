import { TestBed } from '@angular/core/testing';

import { WebRequestService } from './web-request.service';

describe('WebRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WebRequestService<any> = TestBed.get(WebRequestService);
    expect(service).toBeTruthy();
  });
});
