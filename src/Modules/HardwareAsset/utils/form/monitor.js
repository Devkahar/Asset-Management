import { generateValidation } from "@/utils/form/generalFields";
import {
  // dateField,
  descriptionFiled,
  // deviceStatusField,
  manufacturerField,
  // sizeField,
} from "./commonField";

export const monitorFieldName = {
  manufacturer: "manufacturer",
  // monitorType: "monitorType",
  // size: "size",
  // deviceStatus: "deviceStatus",
  // serialNumber: "serialNumber",
  // installedDate: "installedDate",
  // PNPDeviceId: "PNPDeviceId",
  // screenHeight: "screenHeight",
  // screenWidth: "screenWidth",
  // weekOfManufacture: "weekOfManufacture",
  // yearOfManufacture: "yearOfManufacture",
  description: "description",
};

export const monitorField = {
  [monitorFieldName.manufacturer]: manufacturerField,
  // [monitorFieldName.monitorType]: {
  //   placeholder: capitalize(monitorFieldName.monitorType),
  //   initialValue: "",
  // },
  // [monitorFieldName.size]: sizeField,
  // [monitorFieldName.serialNumber]: {
  //   placeholder: capitalize(monitorFieldName.serialNumber),
  //   initialValue: "",
  // },
  // [monitorFieldName.deviceStatus]: deviceStatusField,
  // [monitorFieldName.installedDate]: {
  //   ...dateField,
  //   placeholder: capitalize(monitorFieldName.installedDate),
  // },
  // [monitorFieldName.PNPDeviceId]: {
  //   placeholder: "PNP Device ID",
  //   initialValue: "",
  // },
  // [monitorFieldName.screenHeight]: {
  //   placeholder: capitalize(monitorFieldName.screenHeight),
  //   initialValue: "",
  //   type: "number",
  // },
  // [monitorFieldName.screenWidth]: {
  //   placeholder: capitalize(monitorFieldName.screenWidth),
  //   initialValue: "",
  //   type: "number",
  // },
  // [monitorFieldName.weekOfManufacture]: {
  //   placeholder: capitalize(monitorFieldName.weekOfManufacture),
  //   initialValue: "",
  //   type: "number",
  // },
  // [monitorFieldName.yearOfManufacture]: {
  //   placeholder: capitalize(monitorFieldName.yearOfManufacture),
  //   initialValue: "",
  //   type: "number",
  // },
  [monitorFieldName.description]: descriptionFiled,
};

export const monitorValidation = function (newFields = monitorField) {
  return generateValidation(newFields);
};
