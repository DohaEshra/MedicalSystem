/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientService } from './Patient.service';

describe('Service: Patient', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientService]
    });
  });

  it('should ...', inject([PatientService], (service: PatientService) => {
    expect(service).toBeTruthy();
  }));
});
