export class BaseComponent {

  constructor(element) {
    this._element = element;
  }

  addEventListener (...args) {
    this._element.addEventListener(...args);
  };

  removeEventListeners (...args) {
    this._element.removeEventListener(...args);
  }

}