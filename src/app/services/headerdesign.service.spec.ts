import { TestBed } from '@angular/core/testing';

import { HeaderdesignService } from './headerdesign.service';

describe('HeaderdesignService', () => {
  let service: HeaderdesignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderdesignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
