import { Dispatch, SetStateAction } from "react";
import { Credentials, RegisterFormData } from "../../types/types";
import { EMAIL_REGEX, PASSWORD_REGEX } from "../../constants";

const emailValidation = (email: string): boolean => {
  return EMAIL_REGEX.test(email);
};

const passwordValidation = (password: string): boolean => {
  return PASSWORD_REGEX.test(password);
};

const confirmPasswordValidation = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

export const userValidation = (
  userData: RegisterFormData,
  setErrors: Dispatch<SetStateAction<Credentials>>
): boolean => {
  setErrors((prevErrors) => ({
    ...prevErrors,
    email: "",
    password: "",
  }));

  const isEmailValid = emailValidation(userData.email);
  const isPasswordValid = passwordValidation(userData.password);

  const isConfirmPasswordValid = confirmPasswordValidation(
    userData.password,
    userData.confirmPassword
  );

  if (!isEmailValid) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: "Invalid email address",
    }));
  }

  if (!isPasswordValid) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password:
        "Password must contain at least 1 digit, 1 special character, and be at least 8 characters long",
    }));
  }

  if (!isConfirmPasswordValid) {
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: "Passwords do not match",
    }));
  }
  return isEmailValid && isPasswordValid && isConfirmPasswordValid;
};
