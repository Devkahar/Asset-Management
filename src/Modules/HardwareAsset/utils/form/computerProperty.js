// Computer Property Form

import { capitalize, generateValidation } from "@/utils/form/generalFields";
import { osArchitectureField, partOfDomainField } from "./commonField";

export const computerPropertyFieldName = {
  osName: "osName",
  osVersion: "osVersion",
  // servicePackName: "servicePackName",
  // osLicenseKey: "osLicenseKey",
  // osManufacturer: "osManufacturer",
  osArchitecture: "architecture",
  bootUpState: "bootUpState",
  memorySize: "memorySize",
  diskSize: "diskSize",
  cpuSpeed: "cpuSpeed",
  // cpuCoreCounter: "cpuCoreCounter",
  // partOfDomain: "partOfDomain",
  // domainName: "domainName",
  numberOfLogicalProcessors: "numberOfLogicalProcessors",
  numberOfProcess: "numberOfProcessors",
  // pcSystemType: "pcSystemType",
  lastLoggedInUser: "lastLoggedInUser",
  // activationStatus: "activationStatus",
};
export const computerPropertyField = {
  [computerPropertyFieldName.osName]: {
    placeholder: capitalize(computerPropertyFieldName.osName),
    initialValue: "",
  },
  [computerPropertyFieldName.osVersion]: {
    placeholder: capitalize(computerPropertyFieldName.osVersion),
    initialValue: "",
  },
  [computerPropertyFieldName.servicePackName]: {
    placeholder: capitalize(computerPropertyFieldName.servicePackName),
    initialValue: "",
  },
  [computerPropertyFieldName.osLicenseKey]: {
    placeholder: capitalize(computerPropertyFieldName.osLicenseKey),
    initialValue: "",
  },
  [computerPropertyFieldName.osManufacturer]: {
    placeholder: capitalize(computerPropertyFieldName.osManufacturer),
    initialValue: "",
  },
  [computerPropertyFieldName.osArchitecture]: osArchitectureField,
  [computerPropertyFieldName.bootUpState]: {
    placeholder: capitalize(computerPropertyFieldName.bootUpState),
    initialValue: "",
  },
  [computerPropertyFieldName.memorySize]: {
    placeholder: capitalize(computerPropertyFieldName.memorySize),
    initialValue: "",
    type: "number",
    suffix: "Bytes",
  },
  [computerPropertyFieldName.diskSize]: {
    placeholder: capitalize(computerPropertyFieldName.diskSize),
    initialValue: "",
    type: "number",
    suffix: "Bytes",
  },
  [computerPropertyFieldName.cpuSpeed]: {
    placeholder: capitalize(computerPropertyFieldName.cpuSpeed),
    initialValue: "",
    type: "number",
    suffix: "Frequency",
  },
  // [computerPropertyFieldName.cpuCoreCounter]: {
  //   placeholder: capitalize(computerPropertyFieldName.cpuCoreCounter),
  //   initialValue: "",
  //   type: "number",
  // },
  [computerPropertyFieldName.partOfDomain]: partOfDomainField,
  [computerPropertyFieldName.domainName]: {
    placeholder: capitalize(computerPropertyFieldName.domainName),
    initialValue: "",
  },
  [computerPropertyFieldName.numberOfLogicalProcessors]: {
    placeholder: capitalize(
      computerPropertyFieldName.numberOfLogicalProcessors
    ),
    initialValue: "",
    type: "number",
  },
  [computerPropertyFieldName.numberOfProcess]: {
    placeholder: capitalize(computerPropertyFieldName.numberOfProcess),
    initialValue: "",
    type: "number",
  },
  [computerPropertyFieldName.pcSystemType]: {
    placeholder: capitalize(computerPropertyFieldName.pcSystemType),
    initialValue: "",
  },
  [computerPropertyFieldName.lastLoggedInUser]: {
    placeholder: capitalize(computerPropertyFieldName.lastLoggedInUser),
    initialValue: "",
  },
  [computerPropertyFieldName.activationStatus]: {
    placeholder: capitalize(computerPropertyFieldName.activationStatus),
    initialValue: "",
  },
};
export const computerPropertyValidation = function (
  newFields = computerPropertyField
) {
  return generateValidation(newFields);
};
