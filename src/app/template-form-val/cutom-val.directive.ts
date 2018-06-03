import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn, Validator, FormControl } from '@angular/forms';


// validation function
function validateMyNameFactory() : ValidatorFn {
  return (c: AbstractControl) => {
    
    let isValid = c.value === 'Seejan';
    
    if(isValid) {
      return null;
    } else {
      return {
        myName: {
          valid: false
        }
      };
    }
  }
}


@Directive({
  selector: '[myName]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: myNameValidator, multi: true }
  ]
})
export class myNameValidator implements Validator {
  validator: ValidatorFn;
  
  constructor() {
    this.validator = validateMyNameFactory();
  }
  
  validate(c: FormControl) {
    return this.validator(c);
  }
  
}