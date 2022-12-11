export default function (date) {
  const day = date.getDay();
  return day === 6 || day === 0;
}
