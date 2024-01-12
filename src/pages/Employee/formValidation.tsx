import { EmployeeDetails } from "../../types/types";
import { EMAIL_REGEX, NUMBER_REGEX, PHONE_REGEX } from "../../constants";

const isEmpty = (value: string | undefined): boolean => !value || !value.trim();

export const validateEmployeeDetails = (
  empDetails: EmployeeDetails
): EmployeeDetails => {
  const errors: EmployeeDetails = {
    fname: isEmpty(empDetails.fname) ? "Please enter first name" : "",
    lname: isEmpty(empDetails.lname) ? "Please enter last name" : "",
    email: isEmpty(empDetails.email)
      ? "Please enter email address"
      : !EMAIL_REGEX.test(empDetails.email.trim())
        ? "Invalid email address"
        : "",
    dob: isEmpty(empDetails.dob) ? "Please enter date of birth" : "",
    doj: isEmpty(empDetails.doj) ? "Please enter date of join" : "",
    designation: isEmpty(empDetails.designation)
      ? "Please enter designation"
      : "",
    experience: isEmpty(empDetails.experience)
      ? "Please enter experience in years"
      : !NUMBER_REGEX.test(empDetails.experience.trim())
        ? "Invalid experience"
        : "",
    phoneNumber: isEmpty(empDetails.phoneNumber)
      ? "Please enter phone number"
      : !PHONE_REGEX.test(empDetails.phoneNumber.trim())
        ? "Invalid phone number"
        : "",
  };
  return errors;
};
