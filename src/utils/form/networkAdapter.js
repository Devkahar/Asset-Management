import { generateValidation } from "../generalFields";
import {
  // connectionStatusField,
  // descisionField,
  descriptionFiled,
  // deviceStatusField,
  manufacturerField,
} from "./commonField";
// Processor
export const networkAdapterFieldName = {
  manufacturer: "manufacturer",
  macAddress: "macAddress",
  // deviceStatus: "deviceStatus",
  ipAddress: "ipAddress",
  // dnsDomain: "dnsDomain",
  // dnsHostName: "dnsHostName",
  // dnsServerSearchOrder: "dnsServerSearchOrder",
  // dhcpEnable: "dhcpEnable",
  // dhcpLeaseObtained: "dhcpLeaseObtained",
  // dhcpLeaseExpire: "dhcpLeaseExpire",
  // dhcpServer: "dhcpServer",
  // defaultIpGateway: "defaultIpGateway",
  ipSubnet: "ipSubnet",
  // connectionStatus: "connectionStatus",
  description: "description",
};

export const networkAdapterField = {
  [networkAdapterFieldName.manufacturer]: manufacturerField,
  [networkAdapterFieldName.macAddress]: {
    placeholder: "MAC Address",
    initialValue: "",
  },
  // [networkAdapterFieldName.deviceStatus]: deviceStatusField,
  [networkAdapterFieldName.ipAddress]: {
    placeholder: "IP Address",
    initialValue: "",
  },
  // [networkAdapterFieldName.dnsDomain]: {
  //   placeholder: "DNS Domain",
  //   initialValue: "",
  // },
  // [networkAdapterFieldName.dnsHostName]: {
  //   initialValue: "",
  //   placeholder: "DNS Host Name",
  // },
  // [networkAdapterFieldName.dnsServerSearchOrder]: {
  //   initialValue: "",
  //   placeholder: "DNS Server Search Order",
  // },
  // [networkAdapterFieldName.dhcpEnable]: {
  //   ...descisionField,
  //   placeholder: "DHCP Enable",
  // },
  // [networkAdapterFieldName.dhcpLeaseObtained]: {
  //   placeholder: "DHCP Lease Obtained",
  //   initialValue: "",
  //   type: "date",
  // },
  // [networkAdapterFieldName.dhcpLeaseExpire]: {
  //   placeholder: "DHCP Lease Expires",
  //   initialValue: "",
  //   type: "date",
  // },
  // [networkAdapterFieldName.dhcpServer]: {
  //   placeholder: "DHCP Server",
  //   initialValue: "",
  // },
  // [networkAdapterFieldName.defaultIpGateway]: {
  //   placeholder: "Default IP Gateway",
  //   initialValue: "",
  // },
  [networkAdapterFieldName.ipSubnet]: {
    placeholder: "IP Subnet",
    initialValue: "",
  },
  // [networkAdapterFieldName.connectionStatus]: connectionStatusField,
  [networkAdapterFieldName.description]: descriptionFiled,
};

export const networkAdapterValidation = function (
  newFields = networkAdapterField
) {
  return generateValidation(newFields);
};
