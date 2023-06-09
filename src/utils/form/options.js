export const descisionOption = [
  {
    id: "YES",
    value: "Yes",
  },
  {
    id: "NO",
    value: "No",
  },
];

export const osArchitectureOption = [
  {
    id: "SIXTY_FOUR",
    value: "64 BIT",
  },
  {
    id: "THIRTY_TWO",
    value: "32 BIT",
  },
];

export const ipRangeOptions = [
  {
    id: "ENTIRE_NETWORK",
    value: "Entire Network",
  },
  {
    id: "SPECIFIC_SET_OF_IP",
    value: "Specific Set Of Ip",
  },
];

export const scanTypeOptions = [
  // {
  //   id: "ONCE",
  //   value: "ONCE",
  // },
  // {
  //   id: "DAILY",
  //   value: "DAILY",
  // },
  // {
  //   id: "WEEKLY",
  //   value: "WEEKLY",
  // },
  // {
  //   id: "INTERVAL",
  //   value: "INTERVAL",
  // },
  {
    id: "NOT_SCHEDULED",
    value: "NOT_SCHEDULED",
  },
];

export const credentialOptions = [
  {
    id: "SSH",
    value: "SSH",
  },
];

export const schedulerOption = [
  {
    id: "ONCE",
    value: "Once",
  },
  {
    id: "DAILY",
    value: "Daily",
  },
  {
    id: "WEEKLY",
    value: "Weekly",
  },
  {
    id: "MONTHLY",
    value: "Monthly",
  },
  {
    id: "INTERVAL",
    value: "Interval",
  },
];

export const monthOption = [
  {
    id: "JANUARY",
    value: "January",
  },
  {
    id: "FEBRUARY",
    value: "February",
  },
  {
    id: "MARCH",
    value: "March",
  },
  {
    id: "APRIL",
    value: "April",
  },
  {
    id: "MAY",
    value: "May",
  },
  {
    id: "JUNE",
    value: "June",
  },
  {
    id: "JULY",
    value: "July",
  },
  {
    id: "AUGUST",
    value: "August",
  },
  {
    id: "SEPTEMBER",
    value: "September",
  },
  {
    id: "OCTOBER",
    value: "October",
  },
  {
    id: "NOVEMBER",
    value: "November",
  },
  {
    id: "DECEMBER",
    value: "December",
  },
];

export const weekOptions = [
  {
    id: "MONDAY",
    value: "Monday",
  },
  {
    id: "TUESDAY",
    value: "Tuesday",
  },
  {
    id: "WEDNESDAY",
    value: "Wednesday",
  },
  {
    id: "THURSDAY",
    value: "Thursday",
  },
  {
    id: "FRIDAY",
    value: "Friday",
  },
  {
    id: "SATURDAY",
    value: "Saturday",
  },
  {
    id: "SUNDAY",
    value: "Sunday",
  },
];

const allAppOptions = [
  ...descisionOption,
  ...osArchitectureOption,
  ...ipRangeOptions,
  ...scanTypeOptions,
  ...credentialOptions,
  ...schedulerOption,
  ...monthOption,
  ...weekOptions,
];
export const keyValue = allAppOptions.reduce((acc, el) => {
  return { ...acc, [el.id]: el.value };
}, {});
