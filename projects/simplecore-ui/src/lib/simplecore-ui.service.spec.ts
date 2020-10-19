import { TestBed } from '@angular/core/testing';

import { SimplecoreUiService } from './simplecore-ui.service';

describe('SimplecoreUiService', () => {
  let service: SimplecoreUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplecoreUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
