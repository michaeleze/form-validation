const checkInvalid = (password: string): boolean => !password || password.length < 8;
const checkLowercase = (password: string): boolean => !/[a-z]/.test(password);
const checkUppercase = (password: string): boolean => !/[A-Z]/.test(password);
const checkNumber = (password: string): boolean => !/[0-9]/.test(password);
const checkSpecialCharacter = (password: string): boolean => !/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);

export const rules = (password: string) => [
    checkInvalid(password),
    checkLowercase(password),
    checkUppercase(password),
    checkNumber(password),
    checkSpecialCharacter(password),
];
