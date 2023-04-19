import { descisionOption, osArchitectureOption } from "../options";

export const descriptionFiled = {
  placeholder: "Description",
  initialValue: "",
  type: "textarea",
};
export const manufacturerField = {
  placeholder: "Manufacturer",
  initialValue: "",
};

export const widthField = {
  placeholder: "Width",
  initialValue: "",
  type: "number",
  suffix: "Bit",
};

export const sizeField = {
  placeholder: "Size",
  initialValue: "",
  type: "number",
  suffix: "Bytes",
};

export const clockSpeedField = {
  placeholder: "Clock Speed",
  initialValue: "",
  suffix: "Frequency",
};

export const cpuSpeedField = {
  placeholder: "CPU Speed",
  initialValue: "",
  suffix: "Frequency",
};

export const cacheSizeFiled = {
  placeholder: "Cache Size",
  initialValue: "",
  suffix: "Bytes",
};

export const osArchitectureField = {
  placeholder: "OS Architecture",
  initialValue: "All",
  type: "option",
  options: osArchitectureOption,
};

export const partOfDomainField = {
  placeholder: "Part Of Domain",
  initialValue: "Yes",
  type: "option",
  options: descisionOption,
};
export const descisionField = {
  placeholder: "Descision",
  initialValue: "Yes",
  type: "option",
  options: descisionOption,
};

export const deviceStatusField = {
  placeholder: "Device Status",
  initialValue: "",
  //   type: "option",
};

export const dateField = {
  placeholder: "Date",
  initialValue: "",
  type: "date",
};

export const driveTypeField = {
  placeholder: "Drive Type",
  initialValue: "",
};

export const pointingTypeField = {
  placeholder: "Pointing Type",
  initialValue: "",
};

export const connectionStatusField = {
  placeholder: "Connection Status",
  initialValue: "",
};
