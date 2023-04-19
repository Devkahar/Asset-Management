import { capitalize, generateValidation } from "../generalFields";
import {
  descriptionFiled,
  // deviceStatusField,
  manufacturerField,
  pointingTypeField,
} from "./commonField";

export const pointingDeviceFieldName = {
  manufacturer: "manufacturer",
  numberOfButtons: "numberOfButtons",
  description: "description",
  // deviceStatus: "deviceStatus",
  // PNPDeviceId: "PNPDeviceId",
  pointingType: "pointingType",
};

export const pointingDeviceField = {
  [pointingDeviceFieldName.manufacturer]: manufacturerField,
  [pointingDeviceFieldName.numberOfButtons]: {
    placeholder: capitalize(pointingDeviceFieldName.numberOfButtons),
    initialValue: "",
    type: "number",
  },
  [pointingDeviceFieldName.pointingType]: pointingTypeField,
  // [pointingDeviceFieldName.deviceStatus]: deviceStatusField,
  // [pointingDeviceFieldName.PNPDeviceId]: {
  //   placeholder: "PNP Device ID",
  //   initialValue: "",
  // },
  [pointingDeviceFieldName.description]: descriptionFiled,
};

export const pointingDeviceValidation = function (
  newFields = pointingDeviceField
) {
  return generateValidation(newFields);
};
