export const UnixDateConvert = (unixDate: number) => {
  const milliseconds = unixDate * 1000;

  const dateObject = new Date(milliseconds);

  const longStringDate = dateObject.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  const shortNumericDate = dateObject.toLocaleString("en-US", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  const time = dateObject.toLocaleString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });

  return { longStringDate, shortNumericDate, time };
};
