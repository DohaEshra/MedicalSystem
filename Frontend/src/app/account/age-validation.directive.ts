import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAgeValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValidationDirective, multi: true}]
})
export class AgeValidationDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return control.value < 25 
    ? { 'phoneNumberInvalid': true }
    : null
  }
}