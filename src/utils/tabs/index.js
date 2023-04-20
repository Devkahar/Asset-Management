import { getAssetFileds } from "./assetTabs";
import { getAssetDiscoveryFields } from "./discoveryTabs";

export const mainFieldName = {
  getAssetFileds: "getAssetFileds",
  getAssetDiscoveryFields: "getAssetDiscoveryFields",
};
export const mainField = {
  [mainFieldName.getAssetFileds]: getAssetFileds,
  [mainFieldName.getAssetDiscoveryFields]: getAssetDiscoveryFields,
};
