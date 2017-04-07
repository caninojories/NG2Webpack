import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationComponent } from './validation.component';

@Component({
  selector: 'control-messages',
  template: `<div class="error" *ngIf="errorMessage !== null">{{errorMessage}}</div>`,
  styles: [`
    .error {
      color: #c0392b
    }
  `]
})
export class ValidationMessages {
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationComponent.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
