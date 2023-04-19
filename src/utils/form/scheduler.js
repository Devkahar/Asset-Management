// RAM

import { capitalize, generateValidation } from "../generalFields";
import { monthOption, schedulerOption, weekOptions } from "../options";
import { requiredRule } from "../rules";

export const schedulerFiledName = {
  scheduleType: "scanType",
  startAt: "startTime",
  day: "day",
  time: "time",
  month: "month",
};

export const schedulerRemoveFields = {
  //once
  [schedulerOption[0].id]: [
    schedulerFiledName.day,
    schedulerFiledName.time,
    schedulerFiledName.month,
  ],
  //daily
  [schedulerOption[1].id]: [schedulerFiledName.day, schedulerFiledName.month],
  // weekly
  [schedulerOption[2].id]: [schedulerFiledName.month],
  // monthly
  [schedulerOption[3].id]: [],
};
export const schedulerFiled = {
  [schedulerFiledName.scheduleType]: {
    placeholder: capitalize(schedulerFiledName.scheduleType),
    initialValue: "ONCE",
    type: "option",
    options: schedulerOption,
    rules: [...requiredRule],
  },
  [schedulerFiledName.startAt]: {
    placeholder: capitalize(schedulerFiledName.startAt),
    initialValue: "",
    type: "date",
    rules: [...requiredRule],
  },
  [schedulerFiledName.time]: {
    placeholder: capitalize(schedulerFiledName.time),
    initialValue: "",
    type: "time",
    rules: [...requiredRule],
  },
  [schedulerFiledName.day]: {
    placeholder: capitalize(schedulerFiledName.day),
    initialValue: "MONDAY",
    type: "option",
    options: weekOptions,
    rules: [...requiredRule],
  },
  [schedulerFiledName.month]: {
    placeholder: capitalize(schedulerFiledName.month),
    initialValue: "APRIL",
    options: monthOption,
    rules: [...requiredRule],
    type: "option",
  },
};

export const schedulerValidation = function (newFields = schedulerFiled) {
  return generateValidation(newFields);
};
