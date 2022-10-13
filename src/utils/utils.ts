export const FormatYMD = (date: string) => {
  const data = new Date(date);
  return String(
    [data.getDate(), data.getMonth(), data.getFullYear()].join("-")
  );
};

export const FormatNumber = (number: string) => {
  if (parseFloat(number) >= 1000000000) {
    return String(parseInt(number) / 1000000000) + "M";
  } else if (parseInt(number) >= 1000000 && parseInt(number) < 1000000000) {
    return parseInt(number) / 1000000;
  } else {
    return parseFloat(number);
  }
};

export const FormatSmallNumber = (number: any) => {
  const data = parseFloat(number);
  return data;
};

export const FormatBigNumber = (number: any) => {
  if (!number) return "NAN";
  const num = number.toString();
  const index = num.indexOf(".");
  const data = num.slice(0, index);
  if (data) {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } else {
    return "";
  }
};

export const getSubAddress = (str: string) => {
  return `${str.substring(0, 6)}...${str.substring(
    str.length - 6,
    str.length
  )}`;
};

export const FormatDate = (data: any) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(data);
  if (data === undefined) {
    return "";
  } else {
    return (
      months[date.getMonth()] +
      " " +
      date.getDate().toString() +
      ", " +
      date.getFullYear().toString()
    );
  }
};
