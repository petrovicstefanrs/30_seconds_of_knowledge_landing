const confirmPassword = (confirm, { password }) => {
  if (confirm !== password) {
    return 'Passwords does not match';
  }
  return undefined;
};

export default confirmPassword;
