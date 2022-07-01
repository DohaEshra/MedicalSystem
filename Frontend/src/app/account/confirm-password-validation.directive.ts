import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmPasswordValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: ConfirmPasswordValidationDirective, multi: true}]
})
export class ConfirmPasswordValidationDirective implements Validator,OnChanges {
  @Input('password1') firstPassword = '';
  // @Input('password2') secondPassword = '';
  pass1 = '';
  // pass2 = '';
  constructor() { }

  validate(pass2:AbstractControl): ValidationErrors | null {
    return  (this.pass1 !== pass2.value || pass2.value === '') 
    ? { 'phoneNumberInvalid': true }
    : null
  }

  ngOnChanges(): void {
    this.pass1 = this.firstPassword;
    // this.pass2 = this.secondPassword;
  }



}
