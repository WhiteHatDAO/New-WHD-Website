export const FormatYMD = (date: string) => {
  const data = new Date(date);
  const yyyy = data.getFullYear();
  let mm = (data.getMonth() + 1).toString(); // Months start at 0!
  let dd = data.getDate().toString();

  if (Number(dd) < 10) dd = '0' + dd.toString();
  if (Number(mm) < 10) mm = '0' + mm.toString();

  const formatteddate = dd + '-' + mm + '-' + yyyy;
  return formatteddate;
  // return String(
  //   [data.getMonth(), data.getDate(), data.getFullYear()].join("-")
  // );
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

export const getPast = (data: any) => {
  var _delta = (new Date() as any) - (new Date(data) as any)
  var delta = _delta / 1000;
  // calculate (and subtract) whole days
  var days = Math.floor(delta / 86400);
  delta -= days * 86400;

  // calculate (and subtract) whole hours
  var hours = Math.floor(delta / 3600) % 24;
  delta -= hours * 3600;

  // calculate (and subtract) whole minutes
  var minutes = Math.floor(delta / 60) % 60;
  delta -= minutes * 60;

  // what's left is seconds
  var seconds = delta % 60;  // in theory the modulus is not required

  return {days, hours, minutes, seconds};
}

export const getSubHash = (str: string) => {
  if(str.length < 24) return str;
  return `${str.substring(0, 12)}...${str.substring(
    str.length - 12,
    str.length
  )}`;
};

