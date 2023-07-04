export default function cleanSet(set, startString) {
  if (!startString || !startString.length) return '';
  let values = '';
  for (const i of set) {
    if (i && i.startsWith(startString)) {
      values += values.length === 0 ? i.replace(startString, '') : i.replace(startString, '-');
    }
  }
  return values;
}
