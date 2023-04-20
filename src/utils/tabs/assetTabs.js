import { biosFieldName, biosFiled } from "../form/bios";
import { generateKey, capitalize } from "../form/generalFields";
import {
  computerPropertyField,
  computerPropertyFieldName,
} from "../form/computerProperty";
import {
  computerSystemField,
  computerSystemFieldName,
} from "../form/computerSystem";
import { actions } from "../form/formAction";
import { assetFieldsName, forms, subFieldsName } from "../form/formName";
import {
  hardWarePropertyField,
  hardWarePropertyFieldName,
} from "../form/hardwareProperty";
import { osField, osFieldName } from "../form/os";
import { ramField, ramFieldName } from "../form/ram";
import { processorField, processorFieldName } from "../form/processor";
import { motherboardField, motherboardFieldName } from "../form/motherboard";
import { physicalDiskField, physicalDiskFieldName } from "../form/physicalDisk";
import { logicalDiskField, logicalDiskFieldName } from "../form/logicalDisk";
import { monitorField, monitorFieldName } from "../form/monitor";
import { keyboardField, keyboardFieldName } from "../form/keyboard";
import {
  pointingDeviceField,
  pointingDeviceFieldName,
} from "../form/pointingDevice";
import {
  networkAdapterField,
  networkAdapterFieldName,
} from "../form/networkAdapter";

// Asset Fields
export const generateAssetField = (key, title) => {
  return {
    id: generateKey(),
    key,
    title,
  };
};

export const assetFields = {
  [assetFieldsName.properties]: {
    ...generateAssetField(
      assetFieldsName.properties,
      capitalize(assetFieldsName.properties)
    ),
    subFields: {
      [subFieldsName.hardwareProperties]: generateAssetField(
        subFieldsName.hardwareProperties,
        capitalize(subFieldsName.hardwareProperties)
      ),
      [subFieldsName.computerProperties]: generateAssetField(
        subFieldsName.computerProperties,
        capitalize(subFieldsName.computerProperties)
      ),
    },
  },
  [assetFieldsName.hardware]: {
    ...generateAssetField(
      assetFieldsName.hardware,
      capitalize(assetFieldsName.hardware)
    ),
    subFields: {
      [subFieldsName.computerSystem]: generateAssetField(
        subFieldsName.computerSystem,
        capitalize(subFieldsName.computerSystem)
      ),
      [subFieldsName.os]: generateAssetField(subFieldsName.os, "OS"),
      [subFieldsName.bios]: generateAssetField(subFieldsName.bios, "BIOS"),
      [subFieldsName.ram]: generateAssetField(subFieldsName.ram, "RAM"),
      [subFieldsName.processor]: generateAssetField(
        subFieldsName.processor,
        capitalize(subFieldsName.processor)
      ),
      [subFieldsName.motherboard]: generateAssetField(
        subFieldsName.motherboard,
        capitalize(subFieldsName.motherboard)
      ),
      [subFieldsName.physicalDisk]: generateAssetField(
        subFieldsName.physicalDisk,
        capitalize(subFieldsName.physicalDisk)
      ),
      [subFieldsName.logicalDisk]: generateAssetField(
        subFieldsName.logicalDisk,
        capitalize(subFieldsName.logicalDisk)
      ),
      [subFieldsName.monitor]: generateAssetField(
        subFieldsName.monitor,
        capitalize(subFieldsName.monitor)
      ),
      [subFieldsName.keyboard]: generateAssetField(
        subFieldsName.keyboard,
        capitalize(subFieldsName.keyboard)
      ),
      [subFieldsName.pointingDevice]: generateAssetField(
        subFieldsName.pointingDevice,
        capitalize(subFieldsName.pointingDevice)
      ),
      [subFieldsName.networkAdapter]: generateAssetField(
        subFieldsName.networkAdapter,
        capitalize(subFieldsName.networkAdapter)
      ),
    },
  },
};

export const getAssetFileds = {
  [subFieldsName.hardwareProperties]: {
    fieldData: { ...hardWarePropertyField },
    fieldName: hardWarePropertyFieldName,
    actions: {},
    formName: forms.HARDWARE_PROPERTY,
    url: "hardwareProperties",
  },
  [subFieldsName.computerProperties]: {
    fieldData: computerPropertyField,
    fieldName: computerPropertyFieldName,
    actions: {},
    formName: forms.COMPUTER_PROPERTY,
    url: "computerProperties",
  },
  [subFieldsName.computerSystem]: {
    fieldData: computerSystemField,
    fieldName: computerSystemFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.COMPUTER_SYSTEM,
    url: "computersystem",
  },
  [subFieldsName.os]: {
    fieldData: osField,
    fieldName: osFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.OS,
    url: "os",
  },
  [subFieldsName.bios]: {
    fieldData: biosFiled,
    fieldName: biosFieldName,
    url: "bios",
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.BIOS,
  },
  [subFieldsName.ram]: {
    fieldData: { ...ramField },
    fieldName: ramFieldName,
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
    formName: forms.RAM,
    url: "ram",
  },
  [subFieldsName.processor]: {
    fieldData: processorField,
    fieldName: processorFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.PROCESSOR,
    url: "processor",
  },
  [subFieldsName.motherboard]: {
    fieldData: motherboardField,
    fieldName: motherboardFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.MOTHERBOARD,
    url: "motherBoard",
  },
  [subFieldsName.physicalDisk]: {
    fieldData: physicalDiskField,
    fieldName: physicalDiskFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.PHYSICAL_DISK,
    url: "physicalDisk",
  },
  [subFieldsName.logicalDisk]: {
    fieldData: logicalDiskField,
    fieldName: logicalDiskFieldName,
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
    formName: forms.LOGICAL_DISK,
    url: "logicaldisk",
  },
  [subFieldsName.monitor]: {
    fieldData: monitorField,
    fieldName: monitorFieldName,
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
    formName: forms.MONITOR,
    url: "monitor",
  },
  [subFieldsName.keyboard]: {
    fieldData: keyboardField,
    fieldName: keyboardFieldName,
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
    formName: forms.KEYBOARD,
    url: "keyboard",
  },
  [subFieldsName.pointingDevice]: {
    fieldData: pointingDeviceField,
    fieldName: pointingDeviceFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.POINTING_DEVICE,
    url: "pointingDevices",
  },
  [subFieldsName.networkAdapter]: {
    fieldData: networkAdapterField,
    fieldName: networkAdapterFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.NETWORK_ADAPTER,
    url: "networkAdapter",
  },
};
