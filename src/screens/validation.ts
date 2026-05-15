export const validateEmail = (email: string): string => {
    if (!email) {
      return 'Email is required';
    }
  
    const emailRegex =
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
    if (!emailRegex.test(email)) {
      return 'Invalid email address';
    }
  
    return '';
  };
  
  export const validatePassword = (
    password: string,
  ): string => {
    if (!password) {
      return 'Password is required';
    }
  
    if (password.length < 6) {
      return 'Password must be at least 6 characters';
    }
  
    return '';
  };