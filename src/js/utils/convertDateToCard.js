export function convertDateToCard(date) {
  const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const data = new Date(date)
  return `${data.getDate()} ${month[data.getMonth()]},${data.getFullYear()}`
}