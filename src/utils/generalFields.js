import { uuid } from "vue-uuid";
import { cloneDeep } from "lodash";
export const generateKey = () => uuid.v4();
export const capitalize = (s) => {
  let str = "_" + s;
  str = str
    .replace(/[A-Z]/g, (letter) => `_${letter.toUpperCase()}`)
    .split("_")
    .map((el) => {
      if (el.length) return el.charAt(0).toUpperCase() + el.slice(1);
      return el;
    })
    .join(" ")
    .trim();
  return str;
};

export const createField = (
  fieldName,
  placeholder,
  rules = [],
  type = "text",
  icon = null,
  initialValue = "",
  suffix = null,
  options = null,
  edit = true
) => {
  if (type === "date") {
    if (initialValue) initialValue = initialValue.toString();
  }
  let newFiled = cloneDeep({
    id: generateKey(),
    placeholder: placeholder,
    suffix: suffix,
    type: type,
    icon: icon,
    options: options,
    edit,
    initialValue: initialValue,
    decorator: [
      fieldName,
      {
        initialValue: initialValue,
        rules: rules,
      },
    ],
  });
  return newFiled;
};

export const generateValidation = function (newFields) {
  const data = Object.entries(newFields).map((el) => {
    const FieldName = el[0];
    const FieldProperty = el[1];
    return createField(
      FieldName,
      FieldProperty.placeholder,
      FieldProperty.rules,
      FieldProperty.type,
      FieldProperty.icon,
      FieldProperty.initialValue,
      FieldProperty.suffix,
      FieldProperty.options
    );
  });
  return data;
};
