import { cloneDeep } from "lodash";
import { ipRangeOptions } from "@/utils/form/options";
import { networkDiscoveryFieldNames } from "../form/networkScan";

export const getArrayOfFieldFromApi = (
  resData,
  fieldData,
  fieldName,
  hideFields = []
) => {
  const data = resData.map((el) => {
    let dataItem = cloneDeep(fieldData);
    for (let i in fieldName) {
      const key = fieldName[i];
      console.log(key);
      if (dataItem[key]) {
        if (dataItem[key].type === "date") {
          console.log("Date", el[key]);
        }

        if (Array.isArray(el[key])) {
          dataItem[key].display = false;
          let arrItems = [];
          el[key].map((item) => {
            if (item.length !== null) {
              arrItems.push(item);
            }
          });
          dataItem[key].initialValue = arrItems;
        } else {
          dataItem[key].display = true;
          dataItem[key].initialValue = el[key];
        }
        if (dataItem[key].type === "time" && dataItem[key].initialValue) {
          dataItem[key].initialValue = (el[key] / 3600000).toString();
        }
        if (key === networkDiscoveryFieldNames.ipRangeType) {
          dataItem[key].edit = false;
          if (el[key] === ipRangeOptions[0].id) {
            dataItem[networkDiscoveryFieldNames.credentials].edit = false;
          } else dataItem[networkDiscoveryFieldNames.credentials].edit = true;
        } else if (key != networkDiscoveryFieldNames.credentials) {
          dataItem[key].edit = true;
        }
        hideFields.map((el) => {
          console.log(el);
          if (key === el) {
            dataItem[key].display = false;
          }
        });
        console.log("Data Item", dataItem[key]);
      }
    }
    // Need To Store Not Required Fields In Payload So We can perform put operation.
    const payload = {};
    Object.entries(el)
      .filter((el) => {
        const key = el[0];
        for (let i in fieldName) {
          let key2 = fieldName[i];
          if (key == key2) return false;
        }
        return true;
      })
      .map((el) => {
        payload[el[0]] = el[1];
      });
    console.log(payload);
    return {
      fieldData: dataItem,
      payload,
    };
  });
  return data;
};
