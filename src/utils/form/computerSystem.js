import { capitalize, generateValidation } from "../generalFields";
import { descriptionFiled, manufacturerField } from "./commonField";

// Computer System
export const computerSystemFieldName = {
  name: "name",
  domainName: "domainName",
  manufacturer: "manufacturer",
  modelName: "modelName",
  systemType: "systemType",
  PCSystemType: "pcSystemType",
  UUID: "uuid",
  bootUpState: "bootUpState",
  numberOfLogicalProcessors: "numberOfLogicalProcessors",
  numberOfProcessors: "numberOfProcessors",
  deviceStatus: "deviceStatus",
  partOfDomain: "partOfDomain",
  userName: "userName",
  description: "description",
};
export const computerSystemField = {
  [computerSystemFieldName.name]: {
    placeholder: capitalize(computerSystemFieldName.name),
    initialValue: "",
  },
  [computerSystemFieldName.domainName]: {
    placeholder: capitalize(computerSystemFieldName.domainName),
    initialValue: "",
  },
  [computerSystemFieldName.manufacturer]: manufacturerField,
  [computerSystemFieldName.modelName]: {
    placeholder: capitalize(computerSystemFieldName.modelName),
    initialValue: "",
  },
  [computerSystemFieldName.systemType]: {
    placeholder: capitalize(computerSystemFieldName.systemType),
    initialValue: "",
  },
  [computerSystemFieldName.PCSystemType]: {
    placeholder: capitalize(computerSystemFieldName.PCSystemType),
    initialValue: "",
  },
  [computerSystemFieldName.UUID]: {
    placeholder: capitalize(computerSystemFieldName.UUID),
    initialValue: "",
  },
  [computerSystemFieldName.bootUpState]: {
    placeholder: capitalize(computerSystemFieldName.bootUpState),
    initialValue: "",
  },
  [computerSystemFieldName.numberOfLogicalProcessors]: {
    placeholder: capitalize(computerSystemFieldName.numberOfLogicalProcessors),
    initialValue: "",
    type: "number",
  },
  [computerSystemFieldName.numberOfProcessors]: {
    placeholder: capitalize(computerSystemFieldName.numberOfProcessors),
    initialValue: "",
    type: "number",
  },
  [computerSystemFieldName.deviceStatus]: {
    placeholder: capitalize(computerSystemFieldName.deviceStatus),
    initialValue: "",
  },
  [computerSystemFieldName.partOfDomain]: {
    placeholder: capitalize(computerSystemFieldName.partOfDomain),
    initialValue: "",
  },
  [computerSystemFieldName.userName]: {
    placeholder: capitalize(computerSystemFieldName.userName),
    initialValue: "",
  },
  [computerSystemFieldName.description]: descriptionFiled,
};
export const computerSystemValidation = function (
  newFields = computerSystemField
) {
  return generateValidation(newFields);
};
