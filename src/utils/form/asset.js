import { capitalize, generateValidation } from "./generalFields";

export const assetFieldName = {
  assetType: "assetType",
  domainName: "domainName",
  hostName: "hostName",
  ipAddress: "ipAddress",
  macAddress: "macAddress",
  // serialNumber: "serialNumber",
  subNetMask: "subNetMask",
};

export const assetField = {
  [assetFieldName.assetType]: {
    placeholder: capitalize(assetFieldName.assetType),
    initialValue: "",
  },
  [assetFieldName.domainName]: {
    placeholder: capitalize(assetFieldName.domainName),
    initialValue: "",
  },
  [assetFieldName.hostName]: {
    placeholder: capitalize(assetFieldName.hostName),
    initialValue: "",
  },
  [assetFieldName.ipAddress]: {
    placeholder: capitalize(assetFieldName.ipAddress),
    initialValue: "",
  },
  [assetFieldName.macAddress]: {
    placeholder: capitalize(assetFieldName.macAddress),
    initialValue: "",
  },
  [assetFieldName.serialNumber]: {
    placeholder: capitalize(assetFieldName.serialNumber),
    initialValue: "",
  },
  [assetFieldName.subNetMask]: {
    placeholder: capitalize(assetFieldName.subNetMask),
    initialValue: "",
  },
};

export const assetValidation = function (newFields = assetField) {
  return generateValidation(newFields);
};
