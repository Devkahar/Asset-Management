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
import {
  networkDiscoveryFieldNames,
  networkDiscoveryFields,
  networkDiscoveryRemoveFields,
} from "./form/networkScan";
import convert from "convert-units";
import { schedulerRemoveFields } from "./form/scheduler";

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

export const getAssetDiscoveryFields = {
  [assetDiscoveryFieldsName.credentials]: {
    fieldData: { ...credentialField },
    fieldName: credentialFieldName,
    actions: { edit: actions.edit, delete: actions.delete },
    formName: forms.ADD_CREDENTIAL,
    url: "credentials",
  },
  [assetDiscoveryFieldsName.networkScan]: {
    fieldData: networkDiscoveryFields,
    fieldName: networkDiscoveryFieldNames,
    actions: {
      add: actions.add,
      search: { ...actions.search, url: "/scan" },
      edit: actions.edit,
      delete: actions.delete,
      schedule: actions.schedule,
    },
    formName: forms.NETWORK_SCAN,
    url: "networkScan",
  },
};

export const convertToArray = (obj) => {
  return Object.entries(obj).map((el) => el[1]);
};

export const mainFieldName = {
  getAssetFileds: "getAssetFileds",
  getAssetDiscoveryFields: "getAssetDiscoveryFields",
};
export const mainField = {
  [mainFieldName.getAssetFileds]: getAssetFileds,
  [mainFieldName.getAssetDiscoveryFields]: getAssetDiscoveryFields,
};

export const resetFields = (data) => {
  for (let i in data) {
    if (Array.isArray(data[i].initialValue)) {
      data[i].initialValue = [];
    } else {
      data[i].initialValue = "";
    }
  }
  return data;
};

export const getFrequencyUnit = (value) => {
  let count = 0;
  let unit = "Hz";
  value = parseFloat(value);
  while (value > 0) {
    value /= 10;
    count++;
  }
  if (count >= 3) {
    unit = "kHz";
  }
  if (count >= 6) {
    unit = "MHz";
  }
  if (count >= 9) {
    unit = "GHz";
  }
  return unit;
};

export const getSizeUnit = (value) => {
  let count = 0;
  let unit = "b";
  value = parseInt(value);
  console.log(value);
  while (value > 1) {
    value /= 1024;
    count++;
  }
  if (count >= 2) {
    unit = "KB";
  }
  if (count >= 3) {
    unit = "MB";
  }
  if (count >= 4) {
    unit = "GB";
  }
  console.log(unit, count);
  return unit;
};

export const getByteString = (value) => {
  if (!value) return "0 B";
  const unit = getSizeUnit(value);
  return convert(value).from("B").to(unit).toFixed(2).toString() + " " + unit;
};

export const getFrequencyString = (value) => {
  if (!value) return "0 Hz";
  const unit = getFrequencyUnit(value);
  return convert(value).from("Hz").to(unit).toFixed(2).toString() + " " + unit;
};

export const getDateString = (value) => {
  let date = new Date(value);
  if (!date) return null;
  date = date.toString().split(" ").splice(0, 5);
  let [hour, min] = date[4]
    .split(":")
    .slice(0, 2)
    .map((el) => Number.parseInt(el));
  if (hour === 0 && min === 0) {
    date.pop();
  } else {
    if (hour > 12) {
      date[4] = hour - 12 + ":" + min + " PM";
    } else {
      date[4] = hour + ":" + min + " AM";
    }
  }
  date[0] += ",";
  date[2] += ",";
  console.log(date);
  date = date.join(" ");
  return date;
};

export const convertToBytes = (value, unit) => {
  value = Number.parseFloat(value);
  let newValue = convert(value).from(unit).to("B");
  console.log("Bytes Conversion ", value, unit, newValue);
  return newValue;
};

export const convertToHz = (value, unit) => {
  return convert(value).from(unit).to("Hz");
};

export const removeFieldNames = {
  ...networkDiscoveryRemoveFields,
  ...schedulerRemoveFields,
};
