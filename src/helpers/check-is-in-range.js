export default function (date, startDate, endDate) {
  if (!startDate || !endDate) {
    return false;
  }

  return date > startDate && date < endDate;
}
