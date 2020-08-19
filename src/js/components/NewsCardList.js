export class NewsCardList {
  constructor(options) {
    this.container = options.container;
    this.createCard = options.createCard;
  }

  addCard (card) {
    this.container.appendChild(this.createCard(card))
  }
  render (from,to,cards)  {
    cards.slice(from,to).forEach((card) => {
      this.addCard(card)
    })
  }
}