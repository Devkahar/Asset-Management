import { generateKey } from "./generalFields";

export const descisionOption = [
  {
    id: generateKey(),
    value: "Yes",
  },
  {
    id: generateKey(),
    value: "No",
  },
];

export const osArchitectureOption = [
  {
    id: generateKey(),
    value: "All",
  },
  {
    id: generateKey(),
    value: "64 BIT",
  },
  {
    id: generateKey(),
    value: "ARM64",
  },
];
