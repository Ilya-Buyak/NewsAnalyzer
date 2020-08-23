export class Statistics {
  constructor(options) {
    this.keyWord = options.storage.getItems('keyWord')
    this.dataStorage = options.storage.getItems('news')
    this.totalNews = options.storage.getItems('totalNews')
    this.convertMonth = options.convertMonth
    this.convertDate = options.convertDate
    this.convertDay = options.convertDay
    this.regExp = new RegExp(`${this.keyWord}`,'gi')
  }

  render(title,news,mentions,month) {
    title.textContent = `Вы спросили: «${this.keyWord}»`;
    news.textContent = this.totalNews;
    mentions.textContent = this._titleMentions()
    month.textContent = `дата (${this.convertMonth})`
  }

  _titleMentions() {
    let counter = 0
    this.dataStorage.forEach((elem) => {
     counter += elem.title.match(this.regExp) !== null ? elem.title.match(this.regExp).length : 0;
    })
    return counter
  }

  _addDiagram (diagram) {
    const elem = document.querySelector('.diagrams')
    elem.appendChild(this._create(diagram))
  }

  _getAnalytics(date) {
    let counter = 0
   this.dataStorage.forEach((elem) => {
     if (this.convertDate(elem.publishedAt) == date) {
       counter += this._getAllMentions(elem)
     }
   })
    return counter
  }

  createDiagrams() {
    const analytics = this.getWeekDate()

    analytics.forEach((elem) => {
        elem.mentions = this._getAnalytics(elem.date)
      })
    return analytics.sort((a, b) => a.date > b.date ? 1 : -1)
  }

  getWeekDate() {
    const week = [];
    for (let i = 0; i <= 6; i++) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      week.push({
        date: this.convertDate(date.toISOString())
      });
    }
    return week;
  }

    _getAllMentions(article) {
      let descriptionCounter = 0
      let titleCounter = 0
      if (!article.description) {
        descriptionCounter = 1
      } else {
       descriptionCounter =  article.description.match(this.regExp) === null ? 0 : article.description.match(this.regExp).length;
      }
      if (!article.title) {
        descriptionCounter = 1
      } else {
        titleCounter =  article.title.match(this.regExp) === null ? 0 : article.title.match(this.regExp).length;
      }
      return titleCounter + descriptionCounter
  }

  renderAnalytics (diagrams)  {
    diagrams.forEach((diagram) => {
      this._addDiagram(diagram)
    })
  }

  _create(diagram) {
    const template = document.querySelector('#analytics').content.querySelector('.analytics__diagram');
    const newDiagram = template.cloneNode(true);
    this.diagramElement = newDiagram;

    this.date = this.diagramElement.querySelector('.analytics__date');
    this.diagram = this.diagramElement.querySelector('.analytics__chart');

    this.date.textContent = this.convertDay(diagram.date);
    this.diagram.style = `width: ${diagram.mentions}%`;
    this.diagram.textContent = diagram.mentions

    return newDiagram
  }

}