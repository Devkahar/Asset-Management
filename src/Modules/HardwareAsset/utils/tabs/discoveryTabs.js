import {
  credentialField,
  credentialFieldName,
} from "@/Modules/HardwareAsset/utils/form/credential";
import { capitalize } from "@/utils/form/generalFields";
import { actions } from "@/Modules/HardwareAsset/utils/form/formAction";
import {
  assetDiscoveryFieldsName,
  forms,
} from "@/Modules/HardwareAsset/utils/form/formName";
import { generateAssetField } from "./assetTabs";
import {
  networkDiscoveryFieldNames,
  networkDiscoveryFields,
} from "@/Modules/HardwareAsset/utils/form/networkScan";

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
    actions: { add: actions.add, edit: actions.edit, delete: actions.delete },
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
