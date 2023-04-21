import { generateKey } from "@/utils/form/generalFields";

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
