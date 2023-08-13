import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".form");
    this._handleFormSubmit = handleFormSubmit;
    this._saveButton = this._popupForm.querySelector(".form__submit");
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputElements.forEach((element) => {
      this._inputValues[element.name] = element.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._inputElements = this._popupForm.querySelectorAll(".form__input");
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
  }
}
