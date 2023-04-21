import { capitalize, generateValidation } from "@/utils/form/generalFields";
import {
  cacheSizeFiled,
  // clockSpeedField,
  cpuSpeedField,
  descriptionFiled,
  manufacturerField,
} from "./commonField";

export const processorFieldName = {
  manufacturer: "manufacturer",
  processorName: "processorName",
  width: "width",
  cpuSpeed: "cpuSpeed",
  coreCount: "coreCount",
  // externalClock: "externalClock",
  l1CacheSize: "l1CacheSize",
  l2CacheSize: "l2CacheSize",
  l3CacheSize: "l3CacheSize",
  family: "family",
  description: "description",
  // deviceId: "deviceId",
  // socketDesign: "socketDesign",
};

export const processorField = {
  [processorFieldName.manufacturer]: manufacturerField,
  [processorFieldName.processorName]: {
    placeholder: capitalize(processorFieldName.processorName),
    initialValue: "",
  },
  [processorFieldName.cpuSpeed]: cpuSpeedField,
  [processorFieldName.width]: {
    placeholder: capitalize(processorFieldName.width),
    initialValue: "",
  },
  [processorFieldName.coreCount]: {
    placeholder: capitalize(processorFieldName.coreCount),
    initialValue: "",
    type: "number",
  },
  // [processorFieldName.externalClock]: {
  //   ...clockSpeedField,
  //   placeholder: "External Clock",
  // },
  [processorFieldName.l1CacheSize]: {
    ...cacheSizeFiled,
    placeholder: capitalize(processorFieldName.l1CacheSize),
  },
  [processorFieldName.l2CacheSize]: {
    ...cacheSizeFiled,
    placeholder: capitalize(processorFieldName.l2CacheSize),
  },
  [processorFieldName.l3CacheSize]: {
    ...cacheSizeFiled,
    placeholder: capitalize(processorFieldName.l3CacheSize),
  },
  [processorFieldName.family]: {
    placeholder: capitalize(processorFieldName.family),
    initialValue: "",
  },
  [processorFieldName.description]: descriptionFiled,
  // [processorFieldName.deviceId]: {
  //   placeholder: capitalize(processorFieldName.deviceId),
  //   initialValue: "",
  // },
  // [processorFieldName.socketDesign]: {
  //   placeholder: capitalize(processorFieldName.socketDesign),
  //   initialValue: "",
  // },
};

export const processorValidation = function (newFields = processorField) {
  return generateValidation(newFields);
};
