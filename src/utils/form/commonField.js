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
  suffix: "Bit",
};

export const sizeField = {
  placeholder: "Size",
  initialValue: "",
  type: "number",
  suffix: "GB",
};

export const clockSpeedField = {
  placeholder: "Clock Speed",
  initialValue: "",
  suffix: "MHz",
};

export const cpuSpeedField = {
  placeholder: "CPU Speed",
  intialValue: "",
  suffix: "GHz",
};

export const cacheSizeFiled = {
  placeholder: "Cache Size",
  intialValue: "",
  suffix: "MB",
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
