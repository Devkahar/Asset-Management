import { capitalize, generateValidation } from "../generalFields";
import {
  dateField,
  descriptionFiled,
  deviceStatusField,
  sizeField,
} from "./commonField";

// OS
export const physicalDiskFieldName = {
  name: "name",
  manufacturer: "manufacturer",
  size: "size",
  intstalledDate: "intstalledDate",
  deviceStatus: "deviceStatus",
  partation: "partation",
  mediaType: "mediaType",
  model: "model",
  interfaceType: "interfaceType",
  serialNumber: "serialNumber",
  pnpDevice: "pnpDevice",
  description: "description",
};

export const physicalDiskField = {
  [physicalDiskFieldName.name]: {
    placeholder: capitalize(physicalDiskFieldName.name),
    initialValue: "",
  },
  [physicalDiskFieldName.manufacturer]: {
    placeholder: capitalize(physicalDiskFieldName.manufacturer),
    initialValue: "",
  },
  [physicalDiskFieldName.size]: sizeField,
  [physicalDiskFieldName.intstalledDate]: {
    ...dateField,
    placeholder: capitalize(physicalDiskFieldName.intstalledDate),
  },
  [physicalDiskFieldName.deviceStatus]: deviceStatusField,
  [physicalDiskFieldName.partation]: {
    placeholder: capitalize(physicalDiskFieldName.partation),
    initialValue: "",
  },
  [physicalDiskFieldName.mediaType]: {
    placeholder: capitalize(physicalDiskFieldName.mediaType),
    initialValue: "",
  },
  [physicalDiskFieldName.model]: {
    placeholder: capitalize(physicalDiskFieldName.model),
    initialValue: "",
  },
  [physicalDiskFieldName.interfaceType]: {
    placeholder: capitalize(physicalDiskFieldName.interfaceType),
    initialValue: "",
  },
  [physicalDiskFieldName.pnpDevice]: {
    placeholder: capitalize(physicalDiskFieldName.pnpDevice),
    initialValue: "",
  },
  [physicalDiskFieldName.description]: descriptionFiled,
};

export const physicalDiskValidation = function (newFields = physicalDiskField) {
  return generateValidation(newFields);
};
