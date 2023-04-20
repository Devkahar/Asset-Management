import { capitalize, generateValidation } from "./generalFields";
import {
  // dateField,
  descriptionFiled,
  // deviceStatusField,
  sizeField,
} from "./commonField";

// Physical Disk
export const physicalDiskFieldName = {
  name: "name",
  manufacturer: "manufacturer",
  size: "size",
  // deviceStatus: "deviceStatus",
  partition: "partition",
  mediaType: "mediaType",
  model: "model",
  interfaceType: "interfaceType",
  serialNumber: "serialNumber",
  // pnpDeviceId: "pnpDeviceId",
  // installedDate: "installedDate",
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
  [physicalDiskFieldName.serialNumber]: {
    placeholder: capitalize(physicalDiskFieldName.serialNumber),
    initialValue: "",
  },
  [physicalDiskFieldName.size]: sizeField,
  // [physicalDiskFieldName.installedDate]: {
  //   ...dateField,
  //   placeholder: capitalize(physicalDiskFieldName.installedDate),
  // },
  // [physicalDiskFieldName.deviceStatus]: deviceStatusField,
  [physicalDiskFieldName.partition]: {
    placeholder: capitalize(physicalDiskFieldName.partition),
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
  // [physicalDiskFieldName.pnpDeviceId]: {
  //   placeholder: capitalize(physicalDiskFieldName.pnpDeviceId),
  //   initialValue: "",
  // },
  [physicalDiskFieldName.description]: descriptionFiled,
};

export const physicalDiskValidation = function (newFields = physicalDiskField) {
  return generateValidation(newFields);
};
