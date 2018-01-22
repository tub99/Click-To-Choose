import { TestBed, inject } from '@angular/core/testing';

import { EventManager } from './eventManager.service';

describe('ValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventManager]
    });
  });

  it('should be created', inject([EventManager], (service: EventManager) => {
    expect(service).toBeTruthy();
  }));
});
