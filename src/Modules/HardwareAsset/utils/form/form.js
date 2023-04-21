import { biosValidation } from "./bios";
import { computerPropertyValidation } from "./computerProperty";
import { computerSystemValidation } from "./computerSystem";
import { credentialValidation } from "./credential";
import { forms } from "./formName";
import { hardWarePropertyValidation } from "./hardwareProperty";
import { keyboardValidation } from "./keyboard";
import { logicalDiskValidation } from "./logicalDisk";
import { monitorValidation } from "./monitor";
import { motherboardValidation } from "./motherboard";
import { networkAdapterValidation } from "./networkAdapter";
import { networkDiscoveryValidation } from "./networkScan";
import { osValidation } from "./os";
import { physicalDiskValidation } from "./physicalDisk";
import { processorValidation } from "./processor";
import { ramValidation } from "./ram";
import { schedulerValidation } from "./scheduler";

export const appForms = {
  [forms.ADD_CREDENTIAL]: {
    title: "CREDENTIAL",
    validation: credentialValidation,
  },
  [forms.HARDWARE_PROPERTY]: {
    title: "Hardware Property",
    validation: hardWarePropertyValidation,
  },
  [forms.COMPUTER_PROPERTY]: {
    title: "Computer Property",
    validation: computerPropertyValidation,
  },
  [forms.COMPUTER_SYSTEM]: {
    title: "Computer System",
    validation: computerSystemValidation,
  },
  [forms.OS]: {
    title: "OS",
    validation: osValidation,
  },
  [forms.BIOS]: {
    title: "BIOS",
    validation: biosValidation,
  },
  [forms.RAM]: {
    title: "RAM",
    validation: ramValidation,
  },
  [forms.PROCESSOR]: {
    title: "PROCESSOR",
    validation: processorValidation,
  },
  [forms.NETWORK_ADAPTER]: {
    title: "NETWORK_ADAPTER",
    validation: networkAdapterValidation,
  },
  [forms.MOTHERBOARD]: {
    title: "MOTHERBOARD",
    validation: motherboardValidation,
  },
  [forms.PHYSICAL_DISK]: {
    title: "PHYSICAL DISK",
    validation: physicalDiskValidation,
  },
  [forms.LOGICAL_DISK]: {
    title: "LOGICAL DISK",
    validation: logicalDiskValidation,
  },
  [forms.MONITOR]: {
    title: "MONITOR",
    validation: monitorValidation,
  },
  [forms.KEYBOARD]: {
    title: "KEYBOARD",
    validation: keyboardValidation,
  },
  [forms.POINTING_DEVICE]: {
    title: "POINTING DEVICE",
    validation: keyboardValidation,
  },
  [forms.NETWORK_SCAN]: {
    title: "NETWORK SCAN",
    validation: networkDiscoveryValidation,
  },
  [forms.SCHEDULE]: {
    title: "SCHEDULE",
    validation: schedulerValidation,
  },
};
