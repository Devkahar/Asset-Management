import { uuid } from "vue-uuid";
import Icons from "./iconPath";

export const BASE_URL = "http://localhost:4000/";
export const ROUTE = {
  LOGIN: {
    path: "/login",
    name: "login",
  },
  SIGNUP: {
    path: "/signup",
    name: "signup",
  },
  HOME: {
    path: "/",
    name: "home",
  },
};

export const userNameValidate = {
  id: uuid.v4(),
  placeholder: "User Name",
  icon: Icons.user,
  decorator: [
    "userName",
    {
      rules: [
        {
          required: true,
          message: "Please input your User Name",
        },
        {
          min: 3,
          message: "Minumum 3 Character is required.",
        },
      ],
    },
  ],
};
export const emailValidate = {
  id: uuid.v4(),
  placeholder: "Email Address",
  type: "email",
  icon: Icons.message,
  decorator: [
    "email",
    {
      rules: [
        {
          type: "email",
          message: "The input is not valid E-mail!",
        },
        {
          required: true,
          message: "Please input your E-mail!",
        },
      ],
    },
  ],
};

export const passwordValidate = {
  id: uuid.v4(),
  placeholder: "Password",
  type: "password",
  icon: Icons.key,
  decorator: [
    "password",
    {
      rules: [
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
          pattern: RegExp(
            "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\\$\\@]).{6,}$"
          ),
          message:
            "Password Should Contain 1 lowercase, 1 uppercase and special character",
        },
      ],
    },
  ],
};

export const passwordConfirmValidate = {
  id: uuid.v4(),
  placeholder: "Confirm Password",
  type: "password",
  icon: "fas fa-key",
  decorator: [
    "confirmPassword",
    {
      rules: [
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
      ],
    },
  ],
};

export class Error {
  title = "";
  message = "";
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
}
