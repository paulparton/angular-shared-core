import { TestBed, inject } from '@angular/core/testing';

import { FeatureModuleService } from './feature-module.service';

describe('FeatureModuleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeatureModuleService]
    });
  });

  it('should be created', inject([FeatureModuleService], (service: FeatureModuleService) => {
    expect(service).toBeTruthy();
  }));
});
