import { capitalize, generateValidation } from "../generalFields";
import {
  descriptionFiled,
  deviceStatusField,
  driveTypeField,
  sizeField,
} from "./commonField";

// OS
export const logicalDiskFieldName = {
  name: "name",
  fileSystem: "fileSystem",
  driveType: "driveType",
  serialNumber: "serialNumber",
  deviceStatus: "deviceStatus",
  size: "size",
  freeSpace: "freeSpace",
  description: "description",
};

export const logicalDiskField = {
  [logicalDiskFieldName.name]: {
    placeholder: capitalize(logicalDiskFieldName.name),
    initialValue: "",
  },
  [logicalDiskFieldName.fileSystem]: {
    placeholder: capitalize(logicalDiskFieldName.fileSystem),
    initialValue: "",
  },
  [logicalDiskFieldName.driveType]: driveTypeField,
  [logicalDiskFieldName.serialNumber]: {
    placeholder: capitalize(logicalDiskFieldName.serialNumber),
    initialValue: "",
  },
  [logicalDiskFieldName.deviceStatus]: deviceStatusField,
  [logicalDiskFieldName.size]: sizeField,
  [logicalDiskFieldName.freeSpace]: {
    ...sizeField,
    placeholder: capitalize(logicalDiskFieldName.freeSpace),
  },
  [logicalDiskFieldName.description]: descriptionFiled,
};

export const logicalDiskValidation = function (newFields = logicalDiskField) {
  return generateValidation(newFields);
};
