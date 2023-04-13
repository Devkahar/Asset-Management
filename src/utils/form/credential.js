import { generateValidation } from "../generalFields";
import { ipAddressRules, passwordRules, requiredRule } from "../rules";

// Credential Form
export const credentialFieldName = {
  name: "name",
  password: "password",
  ipAddress: "ipAddress",
};
export const credentialField = {
  [credentialFieldName.name]: {
    placeholder: "Domain Name \\ Username",
    initialValue: "",
    rules: requiredRule,
  },
  [credentialFieldName.password]: {
    placeholder: "Password",
    initialValue: "",
    rules: [...requiredRule],
    type: "password",
  },
  [credentialFieldName.ipAddress]: {
    placeholder: "Ip Address(e.g 192.168.8.8)",
    initialValue: "",
    passwordRules,
    rules: [...requiredRule, ...ipAddressRules],
  },
};
export const credentialValidation = function (newFields = credentialField) {
  return generateValidation(newFields);
};
