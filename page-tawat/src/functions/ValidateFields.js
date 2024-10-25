function validateFields(fields) {
  let errors = {};
  let isValid = true;

  Object.keys(fields).forEach((field) => {
    if (field === "email") {
      if (!/\S+@\S+\.\S+/.test(fields[field].value)) {
        errors[field] = `${field} is not a valid email`;
        isValid = false;
      }
    }
    if (field === "password2") {
      if (fields['password'].value !== fields[field].value) {
        errors[field] = "Passwords do not match";
        errors['password'] = "Passwords do not match";
        isValid = false;
      }
    }
    if (!fields[field].value || fields[field].value.trim() === "") {
      errors[field] = `${field} is required`;
      isValid = false;
    }
  }
  );
  return { isValid, errors };
}
export default validateFields;

