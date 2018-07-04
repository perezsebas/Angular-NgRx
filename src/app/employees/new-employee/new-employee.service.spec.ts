import { TestBed, inject } from '@angular/core/testing';

import { NewEmployeeService } from './new-employee.service';

describe('NewEmployeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewEmployeeService]
    });
  });

  it('should be created', inject([NewEmployeeService], (service: NewEmployeeService) => {
    expect(service).toBeTruthy();
  }));
});
