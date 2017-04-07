
export class ValidationComponent {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
        'required': 'Required',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPassword': 'Password must contain at least one number.',
        'invalidConfirmPassword': 'Must be the same with the Password above.',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }
}
