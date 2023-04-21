import convert from "convert-units";

export const getFrequencyUnit = (value) => {
  let count = 0;
  let unit = "Hz";
  value = parseFloat(value);
  while (value > 0) {
    value /= 10;
    count++;
  }
  if (count >= 3) {
    unit = "kHz";
  }
  if (count >= 6) {
    unit = "MHz";
  }
  if (count >= 9) {
    unit = "GHz";
  }
  return unit;
};

export const getSizeUnit = (value) => {
  let count = 0;
  let unit = "b";
  value = parseInt(value);
  console.log(value);
  while (value > 1) {
    value /= 1024;
    count++;
  }
  if (count >= 1) {
    unit = "KB";
  }
  if (count >= 2) {
    unit = "MB";
  }
  if (count >= 3) {
    unit = "GB";
  }
  console.log(unit, count);
  return unit;
};

export const getByteString = (value) => {
  if (!value) return "0 B";
  const unit = getSizeUnit(value);
  return convert(value).from("B").to(unit).toFixed(2).toString() + " " + unit;
};

export const getFrequencyString = (value) => {
  if (!value) return "0 Hz";
  const unit = getFrequencyUnit(value);
  return convert(value).from("Hz").to(unit).toFixed(2).toString() + " " + unit;
};

export const getDateString = (value) => {
  let date = new Date(value);
  if (!date) return null;
  date = date.toString().split(" ").splice(0, 5);
  let [hour, min] = date[4]
    .split(":")
    .slice(0, 2)
    .map((el) => Number.parseInt(el));
  if (hour === 0 && min === 0) {
    date.pop();
  } else {
    if (hour > 12) {
      date[4] = hour - 12 + ":" + min + " PM";
    } else {
      date[4] = hour + ":" + min + " AM";
    }
  }
  date[0] += ",";
  date[2] += ",";
  console.log(date);
  date = date.join(" ");
  return date;
};

export const convertToBytes = (value, unit) => {
  value = Number.parseFloat(value);
  let newValue = convert(value).from(unit).to("B");
  console.log("Bytes Conversion ", value, unit, newValue);
  return newValue;
};

export const convertToHz = (value, unit) => {
  return convert(value).from(unit).to("Hz");
};
