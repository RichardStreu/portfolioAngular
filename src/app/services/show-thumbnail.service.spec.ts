import { TestBed } from '@angular/core/testing';

import { ShowThumbnailService } from './show-thumbnail.service';

describe('ShowThumbnailService', () => {
  let service: ShowThumbnailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowThumbnailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
