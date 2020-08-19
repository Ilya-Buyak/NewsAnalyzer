export function convertDate(date) {
  const regex = /\d{4}-\d{2}-\d{2}/
  return date.match(regex)
}