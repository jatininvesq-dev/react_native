export { default } from './login.screen';
import { validateEmail, validatePassword } from './validation';

export function loginPrint(email: string, password: string) {
  console.log('email:', email);
  console.log('password:', password);
}

export function loginValidation(email: string, password: string) {
  const emailError = validateEmail(email);
  const passwordError = validatePassword(password);

  return {
    isValid: !emailError && !passwordError,
    emailError,
    passwordError,
  };
}
