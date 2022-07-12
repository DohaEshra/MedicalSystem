import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appAgeVal]',
  providers: [{provide: NG_VALIDATORS, useExisting: AgeValDirective , multi: true}]

})
export class AgeValDirective {

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    return ( new Date().getFullYear()- new Date(control.value).getFullYear() ) < 25 
    ? { 'phoneNumberInvalid': true }
    : null
  }
}
