import { capitalize, generateValidation } from "./generalFields";
// import { deviceStatusField } from "./commonField";

// motherboard
export const motherboardFieldName = {
  manufacturer: "manufacturer",
  serialNaumber: "serialNumber",
  version: "version",
  // installedDate: "installedDate",
  // activationStatus: "activationStatus",
  // partNumber: "partNumber",
  // primaryBusType: "primaryBusType",
  // secondaryBusType: "secondaryBusType",
  // deviceStatus: "deviceStatus",
};

export const motherboardField = {
  [motherboardFieldName.manufacturer]: {
    placeholder: capitalize(motherboardFieldName.manufacturer),
    initialValue: "",
  },
  [motherboardFieldName.serialNaumber]: {
    placeholder: capitalize(motherboardFieldName.serialNaumber),
    initialValue: "",
  },
  [motherboardFieldName.version]: {
    placeholder: capitalize(motherboardFieldName.version),
    initialValue: "",
  },
  // [motherboardFieldName.installedDate]: {
  //   placeholder: capitalize(motherboardFieldName.installedDate),
  //   initialValue: "",
  //   type: "date",
  // },
  // [motherboardFieldName.activationStatus]: {
  //   placeholder: capitalize(motherboardFieldName.activationStatus),
  //   initialValue: "",
  // },
  // [motherboardFieldName.partNumber]: {
  //   placeholder: capitalize(motherboardFieldName.partNumber),
  //   initialValue: "",
  // },
  // [motherboardFieldName.primaryBusType]: {
  //   placeholder: capitalize(motherboardFieldName.primaryBusType),
  //   initialValue: "",
  // },
  // [motherboardFieldName.secondaryBusType]: {
  //   placeholder: capitalize(motherboardFieldName.secondaryBusType),
  //   initialValue: "",
  // },
  // [motherboardFieldName.deviceStatus]: deviceStatusField,
};

export const motherboardValidation = function (newFields = motherboardField) {
  return generateValidation(newFields);
};
