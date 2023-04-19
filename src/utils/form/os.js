import { capitalize, generateValidation } from "../generalFields";
import { dateField, osArchitectureField } from "./commonField";

// OS
export const osFieldName = {
  // manufacturer: "manufacturer",
  OSName: "osName",
  OSVersion: "osVersion",
  OSArchitecture: "osArchitecture",
  // licenseKey: "licenseKey",
  // activationStatus: "activationStatus",
  installedDate: "installedDate",
};

export const osField = {
  // [osFieldName.manufacturer]: {
  //   placeholder: capitalize(osFieldName.manufacturer),
  //   initialValue: "",
  // },
  [osFieldName.OSName]: {
    placeholder: capitalize(osFieldName.OSName),
    initialValue: "",
  },
  [osFieldName.OSVersion]: {
    placeholder: capitalize(osFieldName.OSVersion),
    initialValue: "",
  },
  [osFieldName.OSArchitecture]: {
    placeholder: capitalize(osFieldName.OSArchitecture),
    ...osArchitectureField,
  },
  // [osFieldName.activationStatus]: {
  //   placeholder: capitalize(osFieldName.activationStatus),
  //   initialValue: "",
  // },
  // [osFieldName.licenseKey]: {
  //   placeholder: capitalize(osFieldName.licenseKey),
  //   initialValue: "",
  // },
  [osFieldName.installedDate]: {
    ...dateField,
    placeholder: capitalize(osFieldName.installedDate),
  },
};

export const osValidation = function (newFields = osField) {
  return generateValidation(newFields);
};
