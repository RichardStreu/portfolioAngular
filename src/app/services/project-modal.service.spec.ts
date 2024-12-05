import { TestBed } from '@angular/core/testing';

import { ProjectModalService } from './project-modal.service';

describe('ProjectModalService', () => {
  let service: ProjectModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
