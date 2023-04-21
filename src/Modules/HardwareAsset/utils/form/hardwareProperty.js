import { capitalize, generateValidation } from "@/utils/form/generalFields";
import { dateField } from "./commonField";

// Hardware Property Form
export const hardWarePropertyFieldName = {
  serialNumber: "serialNumber",
  // warrantyExpirationDate: "warrantyExpirationDate",
  // auditDate: "auditDate",
};

export const hardWarePropertyField = {
  [hardWarePropertyFieldName.serialNumber]: {
    placeholder: capitalize(hardWarePropertyFieldName.serialNumber),
    initialValue: "",
  },
  [hardWarePropertyFieldName.warrantyExpirationDate]: {
    ...dateField,
    placeholder: capitalize(hardWarePropertyFieldName.warrantyExpirationDate),
  },
  [hardWarePropertyFieldName.auditDate]: {
    ...dateField,
    placeholder: capitalize(hardWarePropertyFieldName.auditDate),
  },
};
export const hardWarePropertyValidation = function (
  newFields = hardWarePropertyField
) {
  return generateValidation(newFields);
};
