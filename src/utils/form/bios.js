import { capitalize, generateValidation } from "./generalFields";
import { manufacturerField } from "./commonField";

// BIOS
export const biosFieldName = {
  // name: "name",
  manufacturer: "manufacturer",
  sMBIOSVersion: "smBiosVersion",
  releaseDate: "releaseDate",
  // deviceStatus: "deviceStatus",
  version: "version",
  serialNumber: "serialNumber",
  // description: "description",
};

export const biosFiled = {
  // [biosFieldName.name]: {
  //   placeholder: capitalize(biosFieldName.name),
  //   initialValue: "",
  // },
  [biosFieldName.manufacturer]: manufacturerField,
  [biosFieldName.sMBIOSVersion]: {
    placeholder: "SM BIOS Version",
    initialValue: "",
  },
  [biosFieldName.releaseDate]: {
    placeholder: capitalize(biosFieldName.releaseDate),
    initialValue: "",
    type: "date",
  },
  // [biosFieldName.deviceStatus]: {
  //   placeholder: capitalize(biosFieldName.deviceStatus),
  //   initialValue: "",
  // },
  [biosFieldName.version]: {
    placeholder: capitalize(biosFieldName.version),
    initialValue: "",
  },
  [biosFieldName.serialNumber]: {
    placeholder: capitalize(biosFieldName.serialNumber),
    initialValue: "",
  },
  // [biosFieldName.description]: descriptionFiled,
};

export const biosValidation = function (newFields = biosFiled) {
  return generateValidation(newFields);
};
