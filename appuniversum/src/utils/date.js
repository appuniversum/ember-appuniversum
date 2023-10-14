export function formatDate(date) {
  let day = `${date.getDate()}`.padStart(2, '0');
  let month = `${date.getMonth() + 1}`.padStart(2, '0');

  return `${day}-${month}-${date.getFullYear()}`;
}

export function toIsoDateString(date) {
  let day = `${date.getDate()}`.padStart(2, '0');
  let month = `${date.getMonth() + 1}`.padStart(2, '0');

  return `${date.getFullYear()}-${month}-${day}`;
}

export function isIsoDateString(isoDate) {
  let date = new Date(isoDate);

  return isValidDate(date) && isoDate === toIsoDateString(date);
}

export function isValidDate(date) {
  return !isNaN(date);
}

export function isoDateToBelgianFormat(isoDate) {
  let [year, month, day] = isoDate.split('-');

  return `${day}-${month}-${year}`;
}
