import { generateValidation } from "@/utils/form/generalFields";
import { credentialOptions } from "@/utils/form/options";
import { requiredRule } from "@/utils/form/rules";
import { descriptionFiled } from "./commonField";

// Credential Form
export const credentialFieldName = {
  name: "username",
  password: "password",
  // ipAddress: "ipAddress",
  credentialType: "credentialType",
  description: "description",
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
  [credentialFieldName.credentialType]: {
    placeholder: "Connection Type",
    initialValue: credentialOptions[0].value,
    rules: [...requiredRule],
    type: "radio",
    options: credentialOptions,
  },
  [credentialFieldName.description]: descriptionFiled,
};
export const credentialValidation = function (newFields = credentialField) {
  return generateValidation(newFields);
};
