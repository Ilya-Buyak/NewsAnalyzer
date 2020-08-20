export class Statistics {
  constructor(storage) {
    this.keyWord = storage.getItems('keyWord')
    this.dataStorage = storage.getItems('news')
    this.totalNews = storage.getItems('totalNews')
  }

  render(title,news,mentions) {
    title.textContent = `Вы спросили: «${this.keyWord}»`;
    news.textContent = this.totalNews;
    mentions.textContent = this._titleMentions()
  }

  _titleMentions() {
    let counter = 0
    const regExp = new RegExp(`${this.keyWord}`,'gi')
    this.dataStorage.forEach((elem) => {
     counter += elem.title.match(regExp) != null ? elem.title.match(regExp).length : 0;
    })
    return counter
  }

}