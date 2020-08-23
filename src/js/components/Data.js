export class Data {

  convertDate(date) {
    const regExp = /\d{4}-\d{2}-\d{2}/
    return date.match(regExp)[0]
  }

  convertDateToCard(date) {
    const month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const data = new Date(date)
    return `${data.getDate()} ${month[data.getMonth()]},${data.getFullYear()}`
  }

  convertMonth() {
    const month = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
    return `${month[new Date().getMonth()]}`
  }

  convertDay(date) {
    const day = ['вс','пн','вт','ср','чт','пт','сб'];
    const data = new Date(date);
    return `${data.getDate()},${day[data.getDay()]}`
  }

}