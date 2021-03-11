import {
  CheckLowercase,
  CheckNumber,
  CheckPasswordLength,
  CheckSpecialCharacter,
  CheckUppercase,
  IRule
} from "./cases";

export const ERRORMESSAGE = [
  {text: '8+ characters', value: false},
  {text: 'lowercase letter', value: false},
  {text: 'uppercase letter', value: false},
  {text: 'number', value: false},
  {text: 'special character', value: false}
]

class Validator {
  private errorMessage: Array<{ text: string, value: boolean }> = ERRORMESSAGE;
  private rules: Array<IRule> = [];

  public cases = (cases: Array<IRule>) => {
    this.rules = cases;
    return this;
  }

  public check = (password: string) => {
    this.rules.forEach((rule, index: number) => {
      const results = rule.handleValidate(password);

      if (!results) {
        this.errorMessage[index]['value'] = true;
      }

      if (!password) {
        this.errorMessage[index]['value'] = false;
      }
    });

    return this.errorMessage;
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
