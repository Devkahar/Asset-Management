import { createField } from "./helper";
import Icons from "./iconPath";
import { emailRules, passwordRules, userNameRule } from "./rules";

export const loginValidation = function () {
  return [
    createField("email", "Email", emailRules, "email", Icons.message),
    createField("password", "Password", passwordRules, "password", Icons.key),
  ];
};

export const signupValidation = function () {
  return [
    createField("userName", "User Name", userNameRule, null, Icons.message),
    createField("email", "Email", emailRules, "email", Icons.message),
    createField("password", "Password", passwordRules, "password", Icons.key),
    createField(
      "confirmPassword",
      "Conform Password",
      [...passwordRules],
      "password",
      Icons.key
    ),
  ];
};
