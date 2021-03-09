export interface IRule {
  handleValidate: (x: string) => boolean;
}

export class CheckPasswordLength implements IRule {
  public handleValidate = (password: string): boolean => !password || password.length < 8;
}

export class CheckLowercase implements IRule{
  public handleValidate = (password: string): boolean => /[a-z]/.test(password);
}

export class CheckUppercase implements IRule {
  public handleValidate = (password: string): boolean => !/[A-Z]/.test(password);
}

export class CheckNumber implements IRule {
  public handleValidate = (password: string): boolean => !/[0-9]/.test(password);
}

export class CheckSpecialCharacter implements IRule {
  public handleValidate = (password: string): boolean => !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
}
