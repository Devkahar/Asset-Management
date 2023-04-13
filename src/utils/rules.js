export const userNameRule = [
  {
    required: true,
    message: "Please input your User Name",
  },
  {
    min: 3,
    message: "Minumum 3 Character is required.",
  },
];
export const emailRules = [
  {
    type: "email",
    message: "The input is not valid E-mail!",
  },
  {
    required: true,
    message: "Please input your E-mail!",
  },
];
export const passwordRules = [
  {
    required: true,
    message: "Please input your Password!",
  },
  {
    max: 16,
    message: "Maximum 16 Character Allowed.",
  },
  {
    min: 8,
    message: "Minumum 8 Character is required.",
  },
  {
    pattern: RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\$\\@]).{6,}$"),
    message:
      "Password Should Contain 1 lowercase, 1 uppercase and special character",
  },
];
export const requiredRule = [
  {
    required: true,
    message: "Field Cannot be empty",
  },
];
export const ipAddressRules = [
  {
    pattern: RegExp(
      "(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])"
    ),
    message: "Enter Valid IP address",
  },
];
