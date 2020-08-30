import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomFormValidations {
  static emailValidation(control: AbstractControl): ValidationErrors | null {
    const globalPattern = /(?=.*[@])(?=.*[.])/;
    return globalPattern.test(control.value) ? null : {emailValidation : true};
  }
  static passwordValidation(control: AbstractControl): ValidationErrors | null {
    const globalPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return globalPattern.test(control.value) ? null : {passwordValidation: true};
  }
}
