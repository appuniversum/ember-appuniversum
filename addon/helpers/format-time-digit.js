import { helper } from '@ember/component/helper';

export function formatTimeDigit([digit]) {
  let parsed = parseInt(digit, 10);
  parsed = isNaN(parsed) ? 0 : parsed;
  if (parsed < 10) return `0${parsed}`;
  else return parsed.toString();
}

export default helper(formatTimeDigit);
