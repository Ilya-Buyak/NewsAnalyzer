export class FormValidator {
  constructor(options) {
    this._form = options.form
    this._error = options.error
    this.component = options.component
  }

  _checkInputValidity(inputElement) {
    const item = inputElement
    const errorElement = item.nextElementSibling
    if (item.validity.valueMissing) {
      errorElement.textContent = this._error
      item.classList.add('form__input_type_error')
      return false
    }
    errorElement.textContent = ''
    item.classList.remove('form__input_type_error')
    return true
  }

  _handleValidate (event) {
    this._checkInputValidity(event.target)
    this._setSubmitButtonState()
  }

  _setSubmitButtonState() {
    let isValidForm = true;
    const btn = this._form.querySelector('.form__button')
    const input = this._form.querySelector('.form__input')

    if (!input.checkValidity()) isValidForm = false

    if (isValidForm) {
      btn.removeAttribute('disabled');
      btn.classList.remove('form__button_disabled')
    } else {
      btn.disabled = true;
      btn.classList.add('form__button_disabled')
    }
  }

  formValidity() {
    this._setSubmitButtonState()
    this.component.addEventListener('input', this._handleValidate.bind(this))
  }
}