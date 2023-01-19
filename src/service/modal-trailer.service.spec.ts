import { TestBed } from '@angular/core/testing';

import { ModalTrailerService } from './modal-trailer.service';

describe('ModalTrailerService', () => {
  let service: ModalTrailerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalTrailerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
