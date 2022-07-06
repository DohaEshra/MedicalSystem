import { Directive, Input, OnChanges } from '@angular/core';
import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[appDoctorCategoryValidation]'
})
export class DoctorCategoryValidationDirective implements Validators,OnChanges {
  @Input('appDoctorCategoryValidation') job = '';
  theJob ='';
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return (this.theJob === 'Doctor' && control.value === null)
    ? { 'required': true }
    : null
  }

  ngOnChanges(): void {
    this.theJob = this.job
  }
}