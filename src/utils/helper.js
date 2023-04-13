import { biosFieldName, biosFiled } from "./form/bios";
import { generateKey, capitalize } from "./generalFields";
import {
  computerPropertyField,
  computerPropertyFieldName,
} from "./form/computerProperty";
import {
  computerSystemField,
  computerSystemFieldName,
} from "./form/computerSystem";
import { actions } from "./form/formAction";
import {
  assetDiscoveryFieldsName,
  assetFieldsName,
  forms,
  subFieldsName,
} from "./form/formName";
import {
  hardWarePropertyField,
  hardWarePropertyFieldName,
} from "./form/hardwareProperty";
import { osField, osFieldName } from "./form/os";
import { ramField, ramFieldName } from "./form/ram";
import { processorField, processorFieldName } from "./form/processor";
import { motherboardField, motherboardFieldName } from "./form/motherboard";
import { physicalDiskField, physicalDiskFieldName } from "./form/physicalDisk";
import { logicalDiskField, logicalDiskFieldName } from "./form/logicalDisk";
import { monitorField, monitorFieldName } from "./form/monitor";
import { keyboardField, keyboardFieldName } from "./form/keyboard";
import {
  pointingDeviceField,
  pointingDeviceFieldName,
} from "./form/pointingDevice";
import {
  networkAdapterField,
  networkAdapterFieldName,
} from "./form/networkAdapter";
import { credentialField, credentialFieldName } from "./form/credential";

export class Error {
  title = "";
  message = "";
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
}

// Harware table Data
export const hardWareFieldsKeys = {
  id: "id",
  assetType: "assetType",
  domainName: "domainName",
  status: "status",
  origin: "origin",
  hostName: "hostName",
  brand: "brand",
  ipAddress: "ipAddress",
  serialNumber: "serialNumber",
  macAddress: "macAddress",
  subNetMask: "subNetMask",
};

export const hardwareAssetFields = {
  id: {
    title: "ID",
    dataIndex: hardWareFieldsKeys.id,
    key: generateKey(),
    scopedSlots: { customRender: "id" },
  },
  assetType: {
    title: "Asset Type",
    dataIndex: hardWareFieldsKeys.assetType,
    key: generateKey(),
  },
  hostName: {
    title: "Host Name",
    dataIndex: hardWareFieldsKeys.hostName,
    key: generateKey(),
  },
  ipAddress: {
    title: "Ip Address",
    dataIndex: hardWareFieldsKeys.ipAddress,
    key: generateKey(),
  },
  serialNumber: {
    title: "Serial Number",
    dataIndex: hardWareFieldsKeys.serialNumber,
    key: generateKey(),
  },
  macAddress: {
    title: "Mac Address",
    dataIndex: hardWareFieldsKeys.macAddress,
    key: generateKey(),
  },
  subNetMask: {
    title: "SubNetMask",
    dataIndex: hardWareFieldsKeys.subNetMask,
    key: generateKey(),
  },
};

export const hardWareAssetColumn = Object.entries(hardwareAssetFields).map(
  (el) => {
    return el[1];
  }
);

export const generateHardWareAssetData = function (
  id,
  assetType,
  domainName,
  hostName,
  ipAddress,
  serialNumber,
  macAddress,
  subNetMask
) {
  return {
    key: generateKey(),
    id,
    assetType,
    domainName,
    hostName,
    ipAddress,
    serialNumber,
    macAddress,
    subNetMask,
  };
};

// Tab Position

export const tabPositions = {
  left: "left",
  right: "right",
  top: "top",
  bottom: "bottom",
};

// Asset Fields
const generateAssetField = (key, title) => {
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
    url: "computerSystem",
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
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
    formName: forms.PHYSICAL_DISK,
    url: "physicalDisk",
  },
  [subFieldsName.logicalDisk]: {
    fieldData: logicalDiskField,
    fieldName: logicalDiskFieldName,
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
    formName: forms.LOGICAL_DISK,
    url: "logicalDisk",
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
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.KEYBOARD,
    url: "keyBoard",
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

export const assetDiscoveryField = {
  [assetDiscoveryFieldsName.credentials]: {
    ...generateAssetField(
      assetDiscoveryFieldsName.credentials,
      capitalize(assetDiscoveryFieldsName.credentials)
    ),
  },
  [assetDiscoveryFieldsName.networkScan]: {
    ...generateAssetField(
      assetDiscoveryFieldsName.networkScan,
      capitalize(assetDiscoveryFieldsName.networkScan)
    ),
  },
};

export const getAssetDiscoveryField = {
  [assetDiscoveryFieldsName.credentials]: {
    fieldData: { ...credentialField },
    fieldName: credentialFieldName,
    actions: { edit: actions.update, delete: actions.delete },
    formName: forms.ADD_CREDENTIAL,
    url: "credentials",
  },
  [assetDiscoveryFieldsName.credentials]: {
    fieldData: { ...credentialField },
    fieldName: credentialFieldName,
    actions: { edit: actions.update },
    formName: forms.NETWORK_SCAN,
    url: "credentials",
  },
};
