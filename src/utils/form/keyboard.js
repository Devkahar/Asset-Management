import { capitalize, generateValidation } from "../generalFields";
// import {
//   dateField,
//   descriptionFiled,
//   deviceStatusField,
//   manufacturerField,
// } from "./commonField";

export const keyboardFieldName = {
  name: "name",
  // manufacturer: "manufacturer",
  // installedDate: "installedDate",
  // PNPDeviceId: "PNPDeviceId",
  // deviceStatus: "deviceStatus",
  // description: "description",
};

export const keyboardField = {
  [keyboardFieldName.name]: {
    placeholder: capitalize(keyboardFieldName.name),
    initialValue: "",
  },
  // [keyboardFieldName.manufacturer]: manufacturerField,
  // [keyboardFieldName.deviceStatus]: deviceStatusField,
  // [keyboardFieldName.installedDate]: {
  //   ...dateField,
  //   placeholder: capitalize(keyboardFieldName.installedDate),
  // },
  // [keyboardFieldName.PNPDeviceId]: {
  //   placeholder: "PNP Device ID",
  //   initialValue: "",
  // },
  // [keyboardFieldName.description]: descriptionFiled,
};

export const keyboardValidation = function (newFields = keyboardField) {
  return generateValidation(newFields);
};
