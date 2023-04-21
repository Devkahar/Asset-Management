import { createField } from "@/utils/form/generalFields";
import Icons from "@/utils/iconPath";
import { emailRules, passwordRules, userNameRule } from "@/utils/form/rules";

export const loginValidation = function () {
  return [
    createField("email", "Email", emailRules, "email", Icons.message),
    createField("password", "Password", passwordRules, "password", Icons.key),
  ];
};

export const signupValidation = function () {
  return [
    createField("name", "User Name", userNameRule, null, Icons.user),
    createField("email", "Email", emailRules, "email", Icons.message),
    createField("password", "Password", passwordRules, "password", Icons.key),
    createField(
      "confirmPassword",
      "Conform Password",
      [
        ...passwordRules,
        {
          validator: (rule, value, callback) => {
            console.log(this.getFieldValue("password"), value);
            if (value && value !== this.getFieldValue("password")) {
              callback("Password does'nt match with provious one.");
            } else {
              callback();
            }
          },
        },
      ],
      "password",
      Icons.key
    ),
  ];
};
