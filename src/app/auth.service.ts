login(emailOrPhone: string, password: string): boolean {
  // Check if the input is an email or phone number
  const isEmail = this.validateEmail(emailOrPhone);
  const isPhoneNumber = this.validatePhoneNumber(emailOrPhone);

  // Your logic to authenticate user
  if (isEmail) {
    // Handle login with email
  } else if (isPhoneNumber) {
    // Handle login with phone number
  } else {
    // Handle invalid input
    return false;
  }

  // Return true if login is successful
  return true;
}

validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  return re.test(email);
}

validatePhoneNumber(phone: string): boolean {
  const re = /^\+?\d{10,15}$/; // Adjust regex for phone format
  return re.test(phone);
}
