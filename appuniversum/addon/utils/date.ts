export function formatDate(date: Date): string {
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');

  return `${day}-${month}-${date.getFullYear()}`;
}

export function toIsoDateString(date: Date): string {
  const day = `${date.getDate()}`.padStart(2, '0');
  const month = `${date.getMonth() + 1}`.padStart(2, '0');

  return `${date.getFullYear()}-${month}-${day}`;
}

export function isIsoDateString(isoDate: string): boolean {
  const date = new Date(isoDate);

  return isValidDate(date) && isoDate === toIsoDateString(date);
}

export function isValidDate(date: Date): boolean {
  return !isNaN(date.getDate());
}

export function isoDateToBelgianFormat(isoDate: string): string {
  const [year, month, day] = isoDate.split('-');

  return `${day}-${month}-${year}`;
}
