import { networkDiscoveryRemoveFields } from "@/Modules/HardwareAsset/utils/form/networkScan";
import { schedulerRemoveFields } from "@/Modules/HardwareAsset/utils/form/scheduler";

export class Error {
  title = "";
  message = "";
  constructor(title, message) {
    this.title = title;
    this.message = message;
  }
}

export const removeFieldNames = {
  ...networkDiscoveryRemoveFields,
  ...schedulerRemoveFields,
};
export const convertToArray = (obj) => {
  return Object.entries(obj).map((el) => el[1]);
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
