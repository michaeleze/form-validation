import {
  CheckLowercase,
  CheckNumber,
  CheckPasswordLength,
  CheckSpecialCharacter,
  CheckUppercase,
  IRule
} from "./cases";

const ERRORMESSAGE = [
  {text: '8+ characters', value: false},
  {text: 'lowercase letter', value: false},
  {text: 'uppercase letter', value: false},
  {text: 'number', value: false},
  {text: 'special character', value: false}
]

class Validator {
  private errors: Array<{ text: string, value: boolean }> = ERRORMESSAGE;
  private rules: Array<IRule> = [];

  public cases = (cases: Array<IRule>) => {
    this.rules = cases;
    return this;
  }

  public check = (password: string) => {
    this.rules.forEach((rule, index: number) => {
      const results = rule.handleValidate(password);

      if (!results) {
        this.errors[index]['value'] = true;

        console.log( this.errors[index], index);
      }
    });

    return this.errors;
  }
}

export const Validate = new Validator();

Validate.cases([
  new CheckPasswordLength(),
  new CheckLowercase(),
  new CheckUppercase(),
  new CheckNumber(),
  new CheckSpecialCharacter(),
]);
