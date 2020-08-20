export function convertDate(date) {
  const regExp = /\d{4}-\d{2}-\d{2}/
  return date.match(regExp)
}