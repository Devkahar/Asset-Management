import { capitalize, generateValidation } from "@/utils/form/generalFields";
import { ipRangeOptions } from "@/utils/form/options";
import { ipAddressRules, requiredRule } from "@/utils/form/rules";
// Processor
export const networkDiscoveryFieldNames = {
  name: "name",
  ipRangeType: "ipRangeType",
  // discoveryScan: "scanType",
  ipRangeStart: "ipRangeStart",
  ipList: "ipList",
  credentials: "credentialId",
};

export const networkDiscoveryRemoveFields = {
  [ipRangeOptions[0].id]: [networkDiscoveryFieldNames.ipList],
  [ipRangeOptions[1].id]: [networkDiscoveryFieldNames.ipRangeStart],
};

export const networkDiscoveryFields = {
  [networkDiscoveryFieldNames.name]: {
    placeholder: capitalize(networkDiscoveryFieldNames.name),
    initialValue: "",
    rules: [...requiredRule],
  },
  [networkDiscoveryFieldNames.ipRangeType]: {
    placeholder: capitalize(networkDiscoveryFieldNames.ipRangeType),
    initialValue: ipRangeOptions[1].id,
    type: "radio",
    options: ipRangeOptions,
    rules: [...requiredRule],
  },
  // [networkDiscoveryFieldNames.discoveryScan]: {
  //   placeholder: "Discovery Scan",
  //   initialValue: "NOT_SCHEDULED",
  //   type: "option",
  //   options: scanTypeOptions,
  //   rules: [...requiredRule],
  // },
  [networkDiscoveryFieldNames.credentials]: {
    placeholder: "Credentials",
    initialValue: [],
    type: "fetchList",
    rules: [...requiredRule],
  },
  [networkDiscoveryFieldNames.ipList]: {
    placeholder: "Set Of IP",
    initialValue: "",
    type: "text",
    rules: [...requiredRule],
  },
  [networkDiscoveryFieldNames.ipRangeStart]: {
    placeholder: "Starting IP Range",
    initialValue: "",
    type: "text",
    rules: [...requiredRule, ...ipAddressRules],
  },
};

export const networkDiscoveryValidation = function (
  newFields = networkDiscoveryFields
) {
  return generateValidation(newFields);
};
