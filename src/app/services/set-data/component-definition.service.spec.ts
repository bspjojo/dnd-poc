import { TestBed } from '@angular/core/testing';

import { ComponentDefinitionService } from './component-definition.service';

describe('ComponentDefinitionService', () => {
  let service: ComponentDefinitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentDefinitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
