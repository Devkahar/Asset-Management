// RAM

import { capitalize, generateValidation } from "@/utils/form/generalFields";
import { clockSpeedField, sizeField, widthField } from "./commonField";

export const ramFieldName = {
  serialNumber: "serialNumber",
  manufacturer: "manufacturer",
  size: "size",
  memoryType: "memoryType",
  width: "width",
  clockSpeed: "clockSpeed",
  bankLocater: "bankLocater",
};

export const ramField = {
  [ramFieldName.serialNumber]: {
    placeholder: capitalize(ramFieldName.serialNumber),
    initialValue: "",
  },
  [ramFieldName.manufacturer]: {
    placeholder: capitalize(ramFieldName.manufacturer),
    initialValue: "",
  },
  [ramFieldName.size]: sizeField,
  [ramFieldName.memoryType]: {
    placeholder: capitalize(ramFieldName.memoryType),
    initialValue: "",
  },
  [ramFieldName.width]: widthField,
  [ramFieldName.clockSpeed]: clockSpeedField,
  [ramFieldName.bankLocater]: {
    placeholder: capitalize(ramFieldName.bankLocater),
    initialValue: "",
  },
};

export const ramValidation = function (newFields = ramField) {
  return generateValidation(newFields);
};
